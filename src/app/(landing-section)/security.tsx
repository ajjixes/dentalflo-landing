
const Security = () => {
    return (
        <div className='flex flex-col items-center justify-center mt-40 max-w-6xl w-full mx-auto p-4 md:p-6'>
            <div className="text-2xl md:text-3xl lg:text-4xl max-w-3xl text-center">
                Advanced Security and Compliance
            </div>
            <div className="text-sm md:text-base max-w-3xl text-center mt-4 opacity-70">
                Built for Security. Designed for Compliance.
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-16">
                <div className="bg-white dark:bg-muted/20 border p-4 md:p-6 rounded-xl">
                    <div className="h-[15rem]"></div>
                    <div className="text-lg md:text-xl">Your Patients’ Privacy Is Our Priority</div>
                    <p className="text-sm text-foreground/70">Enterprise-grade security to protect every conversation, call, and appointment.</p>
                </div>
                <div className="bg-white dark:bg-muted/20 border p-4 md:p-6 rounded-xl ">
                    <div className="h-[15rem]"></div>
                    <div className="text-lg md:text-xl">Security You Can Trust. Compliance You Can Count On.</div>
                    <p className="text-sm text-foreground/70">
                        Built to meet the highest standards for data protection in dental care.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Security