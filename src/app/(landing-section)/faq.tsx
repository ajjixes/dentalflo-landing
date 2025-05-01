import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Bot, CalendarRange, Zap, Lock, AudioLines, SquareActivity, BrainCog, Siren, Star } from "lucide-react";


const faqData = [
    {
        question: "What is Dentalflo AI?",
        answer: "Dentalflo AI is an advanced AI-powered receptionist and scheduling assistant designed specifically for dental practices. It handles inbound calls and messages, books appointments, answers common patient questions, and operates 24/7—all in a natural, human-like voice.",
        icon: <Bot size={16} />,
    },
    {
        question: "How quickly can we go live with Dentalflo AI?",
        answer: "Most practices are live within 1-2 days. Our deployment team provides hands-on onboarding, including setup, customization, and testing, to ensure a smooth launch.",
        icon: <Zap size={16} />,
    
    },
    {
        question: "Does Dentalflo AI integrate with my practice management system (PMS)?",
        answer: "Yes! Dentalflo AI integrates with leading PMS platforms, including Praktika and others, to enable real-time appointment booking and patient record syncing.",
        icon: <CalendarRange size={16} />,
    },
    {
        question: "Is it secure and HIPAA compliant?",
        answer: "Absolutely. Dentalflo AI is fully HIPAA, SOC2, and PCI compliant, ensuring the highest level of data protection and patient privacy.",
        icon: <Lock size={16} />,
    },
    {
        question: "How natural is the AI voice?",
        answer: "Dentalflo AI uses state-of-the-art voice models and real-time audio infrastructure to deliver ultra-low latency and human-like conversations that patients trust and engage with.",
        icon: <AudioLines size={16} />,
    },
    {
        question: "Can Dentalflo AI handle emergency or after-hours calls?",
        answer: "Yes. Our AI receptionist can triage calls, forward urgent cases to an on-call number, or provide customized messaging based on your after-hours protocol.",
        icon: <SquareActivity size={16} />,
    },
    {
        question: "What happens if the AI doesn’t understand a patient?",
        answer: "Dentalflo AI has built-in AI guardrails to prevent confusion and escalate conversations to a human staff member or voicemail when needed—ensuring every patient is cared for.",
        icon: <BrainCog size={16} />,
    },
    {
        question: "Is it customisable to my practice's tone and policies?",
        answer: "Yes! We tailor responses to match your practice’s personality, language preferences, policies, and FAQs—so the AI feels like a natural extension of your team.",
        icon: <Siren size={16} />,
    },
    {
        question: "What kind of support does Dentalflo provide?",
        answer: "We offer ongoing support, regular performance reviews, and on-demand updates to keep your system aligned with your practice goals.",
        icon: <Star size={16} />,
    },
];

const Faq = () => {
    return (
        <div className='flex flex-col items-center justify-center mt-40 max-w-4xl w-full mx-auto p-4 md:p-6'>
            <div className="text-2xl md:text-3xl lg:text-4xl max-w-3xl text-center">
                Frequently Asked Questions
            </div>
            <div className="text-sm md:text-base max-w-3xl text-center mt-4 opacity-70">
                Explore our tailored FAQ to see how Dentalflo AI streamlines patient communication and booking for modern dental practices.
            </div>
            <div className="mt-16 w-full">
                <Accordion type="single" collapsible className="w-full flex flex-col gap-2">
                    {faqData.map((item, index) => (
                        <AccordionItem className="bg-white dark:bg-background border rounded-lg px-3" key={index} value={`item-${index}`}>
                            <AccordionTrigger className="items-center">
                                <div className="flex items-center gap-2">
                                    <div className="rounded-full p-2 border bg-muted">
                                        {item.icon}
                                    </div>
                                    <div className="text-lg">{item.question}</div>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="text-sm text-foreground/70 ">{item.answer}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    );
};

export default Faq;
