import Navbar from "@/components/navbar";
import Hero from "./(landing-section)/hero";
import { Ripple } from "@/components/magicui/ripple";
import Partners from "./(landing-section)/partners";
import Steps from "./(landing-section)/steps";
import Feature from "./(landing-section)/feature";
import Benefit from "./(landing-section)/benefit";
import Leader from "./(landing-section)/leader";
import Contact from "./(landing-section)/contact";
import Footer from "@/components/footer";

export default function Home() {

  return (
    <div className="w-full flex flex-col items-center overflow-hidden">
      <Navbar />

      <div className="relative overflow-hidden w-full">
        <Hero />

        <div className="absolute -bottom-[23rem] max-w-8xl w-full">
          <div className="relative w-full h-[60rem] ">
            <Ripple />
          </div>
        </div>
        <span className="absolute bottom-0 z-20 bg-linear-to-b from-transparent to-background h-[10rem] w-full"></span>
      </div>

      <Partners />
      {/* <ImportantFeatures /> */}
      <Feature />
      <Benefit />
      <Leader />
      <Steps />
      <Contact />
      <Footer />
    </div>
  );
}
