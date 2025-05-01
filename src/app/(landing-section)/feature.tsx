import { AudioWaveform, LayoutPanelTop, TextSelect, Webhook, BotMessageSquare, Workflow } from "lucide-react"
import Feature1 from "./features/feature1"
import Feature2 from "./features/feature2"
const Feature = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-40 max-w-6xl w-full mx-auto p-4 md:p-6">
            <div className="p-4 md:p-6">
                <div className="text-2xl md:text-3xl lg:text-4xl max-w-3xl text-center">
                    All-in-One AI for Patient Communication
                </div>
                <div className="text-sm md:text-base max-w-3xl text-center mt-4 opacity-70">
                    Free your team from admin. Automate calls, bookings, and follow-ups.
                </div>

            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full mt-16">
                <div className="md:col-span-2 bg-white dark:bg-muted/20 border rounded-xl ">
                    <div className=" p-4 md:p-6">
                        <div className="flex items-center gap-2 mb-2">
                            <LayoutPanelTop />
                            <div className="text-lg md:text-xl">Web-Based Phone System</div>
                        </div>
                        <p className="text-sm text-foreground/70">Make and receive calls directly from your browser.</p>
                    </div>

                    <div className="h-[10rem] md:h-[15rem] lg:h-[25rem] w-full overflow-hidden">
                        <Feature2 />
                    </div>
                </div>
                <div className="overflow-hidden bg-white dark:bg-muted/20 border p-4 md:p-6 rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                        <AudioWaveform />
                        <div className="text-lg md:text-xl">AI Voice Receptionist</div>
                    </div>
                    <p className="text-sm text-foreground/70">Greet, answer, and book appointments 24/7.</p>

                    <div className="relative h-[10rem]  md:h-[18rem] lg:h-[15rem] xl:h-[18rem] w-full">
                        <Feature1 />
                    </div>
                </div>

                <div className="bg-white dark:bg-muted/20 border p-4 md:p-6 rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                        <TextSelect />
                        <div className="text-lg md:text-xl">Call Transcription & Summaries</div>
                    </div>
                    <p className="text-sm text-foreground/70">Every call captured—read it all at a glance.</p>

                    <div className="h-[15rem]"></div>
                </div>
                <div className="bg-white dark:bg-muted/20 border p-4 md:p-6 rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                        <Webhook />
                        <div className="text-lg md:text-xl">AI powered CRM & Lead Capture</div>
                    </div>
                    <p className="text-sm text-foreground/70">Automatically sync leads from Google, Facebook, and your website.</p>

                    <div className="h-[15rem]"></div>
                </div>
                <div className="bg-white dark:bg-muted/20 border p-4 md:p-6 rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                        <BotMessageSquare />
                        <div className="text-lg md:text-xl">AI Booking Chat Widget</div>
                    </div>
                    <p className="text-sm text-foreground/70">More than just chat—this AI books appointments directly.</p>

                    <div className="h-[15rem]"></div>
                </div>
                <div className="bg-white dark:bg-muted/20 border p-4 md:p-6 rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                        <Workflow />
                        <div className="text-lg md:text-xl">Custom Workflow Manager</div>
                    </div>
                    <p className="text-sm text-foreground/70">Voice and SMS AI tag-team to follow up and re-engage.</p>

                    <div className="h-[15rem]"></div>
                </div>
            </div>
        </div>
    )
}

export default Feature