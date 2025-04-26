import Navbar from "@/components/navbar";
import Hero from "./(landing-section)/hero";
import { Ripple } from "@/components/magicui/ripple";
import Partners from "./(landing-section)/partners";
import { ImportantFeatures } from "./(landing-section)/important-feature/important-features";
export default function Home() {

  return (
    <div className="w-full flex flex-col items-center overflow-hidden">
      <Navbar />

      <div className="relative overflow-hidden">
        <Hero />

        <div className="absolute -bottom-[20rem] w-full">
          <div className="relative w-full h-[60rem]">
            <Ripple />
          </div>
        </div>
        <span className="absolute bottom-0 z-20 bg-linear-to-b from-transparent to-white h-[10rem] w-full"></span>
      </div>

      <Partners />
      <ImportantFeatures />
    </div>
  );
}
