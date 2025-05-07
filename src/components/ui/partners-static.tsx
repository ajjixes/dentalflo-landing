import { cn } from "@/lib/utils";
import Image from "next/image";

export const PartnersStatic = ({
  items,
  className,
}: {
  items: {
    image: string;
    name: string;
  }[];
  className?: string;
}) => {
  const getImageClass = (name: string) => {
    if (name === "Praktika") return "max-h-16";
    if (name === "Dental4windows") return "max-h-6";
    return "max-h-8";
  };

  return (
    <div className={cn("relative z-20 max-w-6xl overflow-hidden px-4 md:px-6", className)}>
      <ul className="flex justify-center w-full shrink-0 flex-wrap lg:flex-nowrap gap-10 py-4 scale-80 lg:scale-100 items-center">
        {items.map((item, idx) => {
          const imageClass = getImageClass(item.name);
          return (
            <li
              className={`h-24 flex items-center justify-center ${imageClass}`}
              key={idx}
            >
              <Image
                src={item.image}
                alt={item.name}
                width={100}
                height={100}
                className={`w-auto object-contain ${imageClass}`}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
