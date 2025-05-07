import { BlurFade } from "@/components/magicui/blur-fade";
import { PartnersStatic } from "@/components/ui/partners-static";

const Partners = () => {
  return (
    <div>
      <BlurFade delay={0.1} inView direction="up">
        <div className="text-center text-sm opacity-70">
          Trusted by Over 1,000+ Clients Worldwide
        </div>
      </BlurFade>
      <BlurFade delay={0.2} inView direction="up">
        <div className="rounded-md flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
          <PartnersStatic items={partners} />
        </div>
      </BlurFade>
    </div>
  );
};

const partners = [
  {
    image: "/partner-gray-logo/corepractice.svg",
    name: "Core Practice",
  },
  {
    image: "/partner-gray-logo/dental4web.svg",
    name: "Dental4web",
  },
  {
    image: "/partner-gray-logo/dental4windows.svg",
    name: "Dental4windows",
  },
  {
    image: "/partner-gray-logo/dentally.svg",
    name: "Dentally",
  },
  {
    image: "/partner-gray-logo/praktika.svg",
    name: "Praktika",
  },
];

export default Partners;
