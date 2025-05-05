import { Database, GlobeLock } from "lucide-react";

const Security = () => {
    return (
        <div className='flex flex-col items-center justify-center mt-40 max-w-6xl w-full mx-auto p-4 md:p-6'>
            <div className="text-2xl md:text-3xl lg:text-4xl max-w-3xl text-center">
                Advanced Security and Compliance
            </div>
            <div className="text-sm md:text-base max-w-3xl text-center mt-4 opacity-70">
                Built for Security. Designed for Compliance.
            </div>
            <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-20 w-full mt-10">
                <div className="order-2 md:order-1 flex flex-col justify-center h-full gap-20 p-4 lg:p-6">
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <div className="bg-primary/10 rounded-lg p-3 border border-primary/50">
                                <Database className="w-5 h-5 text-primary" />
                            </div>
                            <div className="text-lg lg:text-xl max-w-[20rem]">Your Patients' Privacy Is Our Priority</div>
                        </div>
                        <p className="text-base text-foreground/70 max-w-[24rem]">Enterprise-grade security to protect every conversation, call, and appointment.</p>
                    </div>

                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <div className="bg-secondary/10 rounded-lg p-3 border border-secondary/50">
                                <GlobeLock className="w-5 h-5 text-secondary" />
                            </div>
                            <div className="text-lg lg:text-xl max-w-[20rem]">Security You Can Trust. Compliance You Can Count On.</div>
                        </div>
                        <p className="text-base text-foreground/70 max-w-[24rem]">Built to meet the highest standards for data protection in dental care.</p>
                    </div>
                </div>
                <svg className="order-1 md:order-2 max-w-sm  lg:max-w-lg" viewBox="0 0 677 761" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <mask id="mask0_717_337" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="677" height="761">
                        <rect width="676.719" height="760.632" fill="url(#pattern0_717_337)" />
                    </mask>
                    <g mask="url(#mask0_717_337)">
                        <path className="fill-black dark:fill-white" d="M676.719 418.295C676.719 608.421 528.687 703.484 352.74 758.62C343.526 761.427 333.518 761.293 324.402 758.24C148.032 703.484 0 608.421 0 418.295V152.118C0 142.033 4.45607 132.361 12.3879 125.23C20.3197 118.099 31.0776 114.093 42.2949 114.093C126.885 114.093 232.622 68.4625 306.215 10.6642C315.176 3.78154 326.574 0 338.359 0C350.145 0 361.543 3.78154 370.504 10.6642C444.52 68.8428 549.834 114.093 634.424 114.093C645.641 114.093 656.399 118.099 664.331 125.23C672.263 132.361 676.719 142.033 676.719 152.118V418.295Z" fillOpacity="0.1" />
                    </g>
                    <g filter="url(#filter0_d_717_337)">
                        <path className="fill-white dark:fill-muted" d="M629.67 413.119C629.67 577.337 501.992 659.446 350.238 707.069C342.291 709.493 333.659 709.377 325.797 706.741C173.678 659.446 46 577.337 46 413.119V183.214C46 174.504 49.8434 166.15 56.6846 159.99C63.5258 153.831 72.8044 150.371 82.4794 150.371C155.438 150.371 246.637 110.958 310.111 61.0362C317.839 55.0914 327.67 51.8252 337.835 51.8252C348 51.8252 357.831 55.0914 365.559 61.0362C429.398 111.287 520.232 150.371 593.191 150.371C602.866 150.371 612.144 153.831 618.985 159.99C625.827 166.15 629.67 174.504 629.67 183.214V413.119Z" />
                    </g>
                    <defs>
                        <pattern id="pattern0_717_337" patternContentUnits="objectBoundingBox" width="0.0118217" height="0.0105176">
                            <use xlinkHref="#image0_717_337" transform="scale(0.00147772 0.0013147)" />
                        </pattern>
                        <filter id="filter0_d_717_337" x="41" y="46.8252" width="593.67" height="666.981" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset />
                            <feGaussianBlur stdDeviation="2.5" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.17 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_717_337" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_717_337" result="shape" />
                        </filter>
                        <image id="image0_717_337" width="8" height="8" preserveAspectRatio="none" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAAXNSR0IArs4c6QAAABdJREFUGBljYGBg+A/FQAoTMGEKDUcRAATwAgFGIXEOAAAAAElFTkSuQmCC" />
                    </defs>
                </svg>

            </div>
        </div>
    )
}

export default Security