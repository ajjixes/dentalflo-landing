/**
 * @fileoverview A TypeScript client for the Mailgun email service API.
 * This module provides a simple interface for sending emails using Mailgun's REST API.
 */

/**
 * Configuration options for initializing the Mailgun client
 * @interface MailgunConfig
 */
interface MailgunConfig {
    /** Your Mailgun API key */
    apiKey: string;
    /** Your Mailgun domain name */
    domain: string;
    /** Optional region selection - defaults to US if not specified */
    region?: 'us' | 'eu';
}

/**
 * Represents an email message to be sent via Mailgun
 * @interface EmailMessage
 */
interface EmailMessage {
    /** Email sender address */
    from: string;
    /** Email recipient(s) - can be a single address or array of addresses */
    to: string | string[];
    /** Email subject line */
    subject: string;
    /** Plain text email body */
    text?: string;
    /** HTML formatted email body */
    html?: string;
    /** Carbon copy recipient(s) */
    cc?: string | string[];
    /** Blind carbon copy recipient(s) */
    bcc?: string | string[];
    /** Reply-To header */
    'h:Reply-To'?: string;
    /** File attachments to include with the email */
    attachments?: EmailAttachment[];
}

/**
 * Represents a file attachment for an email
 * @interface EmailAttachment
 */
interface EmailAttachment {
    /** Name of the attached file */
    filename: string;
    /** Binary file data as ArrayBuffer */
    data: ArrayBuffer;
    /** MIME type of the attachment */
    contentType: string;
}

/**
 * Custom error class for Mailgun-specific errors
 * @extends Error
 */
class MailgunError extends Error {
    status?: number;
    response?: Response;

    constructor(message: string, status?: number, response?: Response) {
        super(message);
        this.name = 'MailgunError';
        this.status = status;
        this.response = response;
    }
}

/**
 * Main client class for interacting with the Mailgun API
 * @class MailgunClient
 */
export class MailgunClient {
    private readonly apiKey: string;
    private readonly domain: string;
    private readonly baseUrl: string;

    /**
     * Creates a new MailgunClient instance
     * @param {MailgunConfig} config - Configuration options for the client
     */
    constructor(config: MailgunConfig) {
        this.apiKey = config.apiKey;
        this.domain = config.domain;
        this.baseUrl = `https://api.${config.region === 'eu' ? 'eu.' : ''}mailgun.net/v3`;
    }

    /**
     * Sends an email using Mailgun's API
     * @param {EmailMessage} message - The email message to send
     * @returns {Promise<Response>} A promise that resolves with the Mailgun API response
     * @throws {MailgunError} If the API request fails or returns an error
     */
    async sendEmail(message: EmailMessage): Promise<Response> {
        const formData = new FormData();

        // Add required fields
        formData.append('from', message.from);
        formData.append('subject', message.subject);

        // Handle multiple recipients
        if (Array.isArray(message.to)) {
            message.to.forEach(recipient => formData.append('to', recipient));
        } else {
            formData.append('to', message.to);
        }

        // Add optional fields
        if (message.text) formData.append('text', message.text);
        if (message.html) formData.append('html', message.html);
        
        // Add Reply-To header if provided
        if (message['h:Reply-To']) formData.append('h:Reply-To', message['h:Reply-To']);

        // Handle CC recipients
        if (message.cc) {
            const ccRecipients = Array.isArray(message.cc) ? message.cc : [message.cc];
            ccRecipients.forEach(recipient => formData.append('cc', recipient));
        }

        // Handle BCC recipients
        if (message.bcc) {
            const bccRecipients = Array.isArray(message.bcc) ? message.bcc : [message.bcc];
            bccRecipients.forEach(recipient => formData.append('bcc', recipient));
        }

        // Handle attachments
        if (message.attachments) {
            message.attachments.forEach(attachment => {
                formData.append('attachment', new Blob([attachment.data], {
                    type: attachment.contentType
                }), attachment.filename);
            });
        }

        const response = await fetch(`${this.baseUrl}/${this.domain}/messages`, {
            method: 'POST',
            headers: {
                'Authorization': `Basic ${btoa(`api:${this.apiKey}`)}`,
            },
            body: formData,
        });

        if (!response.ok) {
            throw new MailgunError(
                'Failed to send email',
                response.status,
                response
            );
        }

        return response;
    }
}

export type { MailgunConfig, EmailMessage, EmailAttachment }; 