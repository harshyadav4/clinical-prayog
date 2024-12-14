import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface BannerProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

export default function Banner({
  title = "Advancing Human Research",
  description = "Join us in shaping the future of clinical trials and pharmaceutical development.",
  buttonText = "Learn More",
  buttonLink = "/services",
}: BannerProps) {
  return (
    <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-green-400 to-blue-500">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">
          {title}
        </h2>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl animate-slide-up animation-delay-200">
          {description}
        </p>
        <Link href={buttonLink}>
          <Button
            className="bg-white text-green-600 hover:bg-green-600 hover:text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 animate-slide-up animation-delay-400 flex items-center gap-2"
            style={{ backgroundColor: "text-green-600" }}
          >
            {buttonText} <ArrowRight className="w-5 h-5" />
          </Button>
        </Link>
      </div>
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 animate-pulse">
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="opacity-30"
        >
          <path
            fill="#FFFFFF"
            d="M44.9,-76.2C59.7,-69.8,74,-59.9,83.1,-46.3C92.2,-32.7,96.1,-16.3,94.3,-1C92.5,14.4,85,28.8,75.8,41.6C66.6,54.4,55.7,65.6,42.7,73.5C29.7,81.4,14.9,86,-0.8,87.3C-16.5,88.6,-33,86.6,-47.3,79.5C-61.6,72.4,-73.7,60.2,-81.3,45.7C-88.9,31.2,-92,14.6,-90.8,-1.4C-89.6,-17.4,-84.1,-34.8,-74.3,-49C-64.5,-63.2,-50.4,-74.2,-35.8,-80.6C-21.1,-87,-10.6,-88.8,2.5,-93C15.5,-97.2,31.1,-103.8,44.9,-76.2Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
    </section>
  );
}
