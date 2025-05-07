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
import Faq from "./(landing-section)/faq";
import Security from "./(landing-section)/security";
import Testimonial from "./(landing-section)/testimonial";
import { Spotlight } from "@/components/ui/spotlight-new";
import { BlurFade } from "@/components/magicui/blur-fade";


export default function Home() {

  return (
    <div className="w-full flex flex-col items-center overflow-hidden">
      <Navbar />
      <div className="relative overflow-hidden w-full">
        <Spotlight />

        <Hero />

        <div className="absolute -bottom-[23rem] max-w-8xl w-full">
          <BlurFade delay={0.5} direction="up">
            <div className="relative w-full h-[60rem] ">
              <Ripple />
            </div>
          </BlurFade>
        </div>
        <span className="absolute bottom-0 z-20 bg-linear-to-b from-transparent to-background h-[10rem] w-full"></span>
      </div>
 
      <Partners />
      <div className="w-full" id="features">
        <Feature />
      </div>
      
      <Benefit />
      <div className="mt-20 w-full bg-[#111827]" id="leader">
        <Testimonial />
        <Leader />
      </div>
      {/* <Steps /> */}

      <Security />
      <div className="w-full" id="faq">
        <Faq />
      </div>
      <Contact />
      <Footer />
      
    </div>
  );
}
