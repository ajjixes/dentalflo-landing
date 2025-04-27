import React from 'react'

const Steps = () => {
    return (
        <div className="flex flex-col items-center justify-center pt-40 max-w-7xl w-full mx-auto p-6">

            <div className="text-2xl md:text-3xl lg:text-4xl max-w-3xl text-center">
                Up and Running in 3 Easy Steps
            </div>
            <div className="text-sm md:text-base max-w-3xl text-center mt-4 opacity-70">No hardware. No hassle. Just smarter calls from day one.</div>
            <div className="grid grid-cols-1 lg:grid-cols-3 mt-16 gap-4 w-full">
                <div className="w-full shadow-lg border p-4 md:p-6 rounded-xl">
                    <div className=" h-[15rem]">
                     
                    </div>
                    <div className="text-lg lg:text-xl mt-4 mb-2">Book a Demo</div>
                    <p className="text-sm text-muted-foreground">See your workflow in action—live with your use case.</p>
                </div>

                <div className="w-full shadow-lg border p-4 md:p-6 rounded-xl">
                    <div className=" h-[15rem]">

                    </div>
                    <div className="text-lg lg:text-xl mt-4 mb-2">Connect Your Systems</div>
                    <p className="text-sm text-muted-foreground">We sync with or install your phone system, booking calendar, and CRM tools.</p>
                </div>

                <div className="w-full shadow-lg border p-4 md:p-6 rounded-xl">
                    <div className=" h-[15rem]">

                    </div>
                    <div className="text-lg lg:text-xl mt-4 mb-2">Go Live</div>
                    <p className="text-sm text-muted-foreground">Start handling calls, bookings, and follow-ups with AI—all within1 Hour.</p>
                </div>
            </div>

        </div>
    )
}

export default Steps