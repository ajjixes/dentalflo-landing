import Navbar from "@/components/navbar";
import Hero from "./(landing-section)/hero";

export default function Home() {
  
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center">
      <Navbar />
      <Hero />
      
    </div>
  );
}
