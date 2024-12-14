import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { services } from "@/json/services";
import Link from "next/link";
export const metadata = {
  title: "Sponsor/CRO || Investigator/Site || Specialized",
  description: "Comprehensive solutions for clinical research excellence",
};
export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#E6E7EE] flex flex-col">
      <Header />
      <Banner
        title="Our Services"
        description="Comprehensive solutions for clinical research excellence"
        buttonText="Contact Us"
        buttonLink="/contact"
      />
      <main className="flex-grow p-4 space-y-12 md:p-8 lg:p-12 max-w-6xl mx-auto">
        <section className="text-center md:max-w-2xl md:mx-auto">
          <h1 className="text-4xl font-bold mb-4 md:text-5xl lg:text-6xl text-gradient animate-float">
            Clinical Prayog Services
          </h1>
          <p className="text-lg text-text md:text-xl lg:text-2xl">
            Advancing clinical research with innovative and reliable solutions
          </p>
        </section>

        <section className="space-y-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </section>

        <section className="text-center space-y-6">
          <h2 className="text-3xl font-semibold text-text">
            Ready to Advance Your Clinical Research?
          </h2>
          <p className="text-lg text-text/80">
            Let&apos;s discuss how Clinical Prayog can support your specific
            needs and objectives.
          </p>
          <Link href="/contact">
            <Button className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-full shadow-neumorph text-lg flex items-center justify-center gap-2 transition-all duration-200 hover:scale-105">
              Schedule a Consultation
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
