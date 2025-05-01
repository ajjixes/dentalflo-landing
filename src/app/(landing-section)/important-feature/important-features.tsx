import { Appointment } from "./appointment";
// import { Reminder } from "./reminder-assistant";
// import LeadNurturing from "./lead-nurturing";
export const ImportantFeatures = () => {
    return (
        <div className="flex flex-col items-center justify-center pt-40 max-w-6xl w-full mx-auto p-6">
            <div className="text-2xl md:text-3xl lg:text-4xl max-w-3xl text-center">
                Two Smart AI Assistants. One Seamless Patient Experience.
            </div>
            <div className="text-sm md:text-base max-w-3xl text-center mt-4 opacity-70">VoiceFlo handles your calls. EngageFlo nurtures every lead.</div>

            <div className="grid grid-cols-1 lg:grid-cols-3 mt-16 gap-4">

                <div className="shadow-lg border p-4 md:p-6 rounded-xl">
                    <div className=" h-[15rem]">
                        <Appointment />
                    </div>
                    <div className="text-lg lg:text-xl mt-4 mb-2">Appointment Booking <br className="hidden lg:block" /> Assistant</div>
                    <p className="text-sm text-muted-foreground">Automates 24/7 appointment scheduling via voice and SMS, syncing with your clinic’s calendar for real-time booking and confirmations.</p>
                </div>

                <div className="shadow-lg border p-4 md:p-6 rounded-xl">
                    <div className="relative overflow-hidden h-[15rem]">
                        {/* <Reminder /> */}

                        <div className="absolute bottom-0 bg-gradient-to-b from-transparent to-background h-10 w-full"></div>
                    </div>
                    <div className="text-lg lg:text-xl mt-4 mb-2">Follow-Up & Reminder <br className="hidden lg:block" /> Assistant</div>
                    <p className="text-sm text-muted-foreground">Sends automated appointment reminders and post-visit follow-ups, reducing no-shows and enhancing patient engagement.</p>
                </div>

                <div className="shadow-lg border p-4 md:p-6 rounded-xl">
                    <div className="h-[15rem]">
                        {/* <LeadNurturing /> */}
                    </div>
                    <div className="text-lg lg:text-xl mt-4 mb-2">Lead Nurturing <br className="hidden lg:block"/> Assistant</div>
                    <p className="text-sm text-muted-foreground">Instantly responds to leads, nurturing them through personalized messages to convert inquiries into booked appointments.</p>
                </div>

            </div>
        </div>
    )
}
