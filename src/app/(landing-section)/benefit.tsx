import { GridPattern } from "@/components/magicui/grid-pattern"
import { Check, X, ChevronLeft, ChevronRight, Share, Plus, Lock, RotateCw } from "lucide-react"

const goodbyeItems = [
  "Greet, answer, and book appointments 24/7.",
  "Separate tools for forms, call tracking, and lead capture",
  "Multiple disconnected systems that don't talk to each other"
]

const helloItems = [
  "A single, AI-powered system that does the work of five tools",
  "Effortless automation of calls, scheduling, follow-ups, and lead capture",
  "Real-time sync with your Patient Management Software—no manual data entry",
  "Consistent, seamless experiences for every patient",
  "More time for your team to focus on care, not tech"
]

const Benefit = () => {
  return (
    <div className="pt-40 w-full">
      <div className="relative bg-primary w-full h-[30rem] pt-10 overflow-hidden">
        <GridPattern
          width={30}
          height={30}
          className="stroke-white/10"
        />
        <div className="absolute -top-[1rem] left-1/2 transform -translate-x-1/2 bg-primary w-full max-w-[46rem] h-[20rem] blur-3xl"></div>

        <div className="relative z-10 flex flex-col items-center justify-center max-w-7xl mx-auto w-full p-4 md:p-6">
          <div className="text-2xl md:text-3xl lg:text-4xl max-w-3xl text-center text-white">
            Simplify Your Tech Stack—Let AI Take Over the Busywork
          </div>
          <div className="text-sm md:text-base max-w-3xl text-center mt-4 opacity-70 text-white">
            Skip the CRM and other add-on platforms. Dentalflo AI connects directly to your Patient Management Software to automate calls, bookings, and follow-ups—no extras needed.
          </div>
        </div>
      </div>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-16">
        <div className="shadow-lg border p-4 md:p-6 rounded-xl">
          <div className="text-lg md:text-xl mb-8">Say goodbye to</div>
          <div className="space-y-4">
            {goodbyeItems.map((item, index) => (
              <div key={index} className="flex gap-2">
                <div className="bg-red-400 rounded-full flex items-center justify-center w-6 h-6 text-white">
                  <X size={14} strokeWidth={4} />
                </div>
                <p className="text-base text-foreground/70">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="shadow-lg border p-4 md:p-6 rounded-xl">
          <div className="text-lg md:text-xl mb-8">Say hello to</div>
          <div className="space-y-4">
            {helloItems.map((item, index) => (
              <div key={index} className="inline-flex gap-2">
                <div className="bg-green-400 rounded-full flex items-center justify-center min-w-6 max-h-6 text-white">
                  <Check size={14} strokeWidth={4} />
                </div>
                <p className="text-base text-foreground/70">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div> */}
      <div className="relative z-10 mx-auto -mt-[14rem] w-full flex items-center justify-center max-w-7xl px-4 md:px-6">
        <div className="w-full bg-white dark:bg-background rounded-xl overflow-hidden ">
          {/* Browser Header */}
          <div className="grid grid-cols-3 gap-2 p-3 bg-muted border-b">
            {/* Traffic Lights */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="hidden md:flex">
                <ChevronLeft strokeWidth={1.5} size={18} className="opacity-70" />
                <ChevronRight strokeWidth={1.5} size={18} className="opacity-70" />
              </div>
            </div>
            {/* URL Bar */}
            <div className="col-span-2 md:col-span-1 relative flex justify-center py-2 px-6 bg-accent rounded-sm font-medium">
              <div className="flex items-center gap-2">
                <Lock size={18} className="opacity-70" />
                <div className="text-xs opacity-70 line-clamp-1 break-all"> dentalfloai.com</div>
              </div>
              <div className="absolute right-2">
                <RotateCw size={18} className="opacity-70" />
              </div>
            </div>

            <div className="hidden ms-auto md:flex items-center gap-2">
              <Share strokeWidth={1.5} size={18} className="opacity-70" />
              <Plus strokeWidth={1.5} size={18} className="opacity-70" />
            </div>
          </div>

          {/* Content Area */}
          <div className="bg-white dark:bg-[#13192A] rounded-b-xl border p-4 md:p-6 lg:p-20 flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              <div className="bg-white dark:bg-muted dark:shadow-lg border p-4 md:p-6 rounded-xl">
                <div className="text-lg md:text-xl mb-8">Say goodbye to</div>
                <div className="space-y-4">
                  {goodbyeItems.map((item, index) => (
                    <div key={index} className="flex gap-2">
                      <div className="bg-red-400 rounded-full flex items-center justify-center min-w-5 max-h-5 text-white">
                        <X size={12} strokeWidth={4} />
                      </div>
                      <p className="text-sm md:text-base text-foreground/70">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white dark:bg-muted dark:shadow-lg border p-4 md:p-6 rounded-xl">
                <div className="text-lg md:text-xl mb-8">Say hello to</div>
                <div className="space-y-4">
                  {helloItems.map((item, index) => (
                    <div key={index} className="inline-flex gap-2">
                      <div className="bg-green-400 rounded-full flex items-center justify-center min-w-5 max-h-5 text-white">
                        <Check size={12} strokeWidth={4} />
                      </div>
                      <p className="text-sm md:text-base text-foreground/70">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Benefit