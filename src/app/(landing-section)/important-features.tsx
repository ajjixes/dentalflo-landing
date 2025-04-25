import { AnimatedBeamDemo } from "./example";
export const ImportantFeatures = () => {
    return (
        <div className="flex flex-col items-center justify-center py-40 max-w-7xl mx-auto p-6">
            <div className="text-2xl md:text-3xl lg:text-4xl max-w-3xl text-center">
                Two Smart AI Assistants. One Seamless Patient Experience.
            </div>
            <div className="text-sm md:text-base max-w-3xl text-center mt-4 opacity-70">VoiceFlo handles your calls. EngageFlo nurtures every lead.</div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-16 gap-4">

                <div className="border p-4 md:p-6 rounded-lg">
                    <div className=" h-[15rem]">
                        <AnimatedBeamDemo />
                    </div>
                    <div className="text-2xl mt-4 mb-2">Appointment Booking Assistant</div>
                    <p className="text-sm text-muted-foreground">Automates 24/7 appointment scheduling via voice and SMS, syncing with your clinic’s calendar for real-time booking and confirmations.</p>
                </div>

                <div className="border p-4 md:p-6 rounded-lg">
                    <div className=" h-[15rem]">
                        <AnimatedBeamDemo />
                    </div>
                    <div className="text-2xl mt-4 mb-2">Appointment Booking Assistant</div>
                    <p className="text-sm text-muted-foreground">Automates 24/7 appointment scheduling via voice and SMS, syncing with your clinic’s calendar for real-time booking and confirmations.</p>
                </div>
            </div>
        </div>
    )
}
