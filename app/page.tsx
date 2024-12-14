// import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UserCard from "@/components/UserCard";
import Banner from "@/components/Banner";
import { CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Award,
  Users,
  Briefcase,
  Target,
  BookOpen,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Clinical Prayog Human Research",
  description:
    "Clinical Prayog Human Research is a trusted partner for CRO, sponsor, biopharmaceuticals in drug development",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#E6E7EE]  flex flex-col">
      <Header />
      <Banner />
      <main className="flex-grow p-4 space-y-12 md:p-8 lg:p-12 max-w-6xl mx-auto">
        <section className="text-center md:max-w-2xl md:mx-auto">
          <h1 className="text-4xl font-bold mb-4 md:text-5xl lg:text-6xl text-gradient animate-float">
            Clinical Prayog Human Research
          </h1>
          <p className="text-lg text-text md:text-xl lg:text-2xl">
            Trusted partner for CRO, sponsor, biopharmaceuticals in drug
            development
          </p>
        </section>
        <Link href="/contact">
          <Button className="w-full md:w-auto md:mx-auto md:px-8 bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-full shadow-neumorph text-lg flex items-center justify-center gap-2 transition-all duration-200 hover:scale-105">
            Book An Appointment
            <ArrowRight className="w-5 h-5" />
          </Button>
        </Link>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-text text-center">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Quality",
                icon: Award,
                CardDescription:
                  "Quality is our primary value. We ensure quality in our compliance in processes, credibility of data ",
              },
              {
                title: "Trust",
                icon: Users,
                CardDescription:
                  "We deliver what we promise with honesty and integrity, thus earning the trust that fosters long term relationships ",
              },
              {
                title: "Knowledge",
                icon: BookOpen,
                CardDescription:
                  "We acquire knowledge in order to lead in our field. We share our knowledge with our people and our Clients / Investigators ",
              },
              {
                title: "Commitment",
                icon: Briefcase,
                CardDescription:
                  "We are committed to our mission. Our commitment is a promise that we will always perform to the highest of their expectations ",
              },
              {
                title: "Focus",
                icon: Target,
                CardDescription:
                  "Efficient site management is essential to run the study smoothly for best outcome. Our focused approach in selecting sites as per the study protocol ensures timely delivery and the quality of data collected ",
              },
            ].map(({ title, icon: Icon, CardDescription }, index) => (
              <Card
                key={index}
                className={
                  "group flex flex-col items-center text-center p-8 rounded-lg " +
                  "bg-[#E6E7EE] shadow-[6px_6px_12px_#b8b9be,-6px_-6px_12px_#ffffff] "
                }
              >
                {" "}
                <Icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-bold text-xl text-text mb-2">{title}</h3>
                <p className="text-text/80">{CardDescription}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-text text-center">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {["sponsorcro", "Investigators/Sites"].map((service, index) => (
              <Card
                key={index}
                className={
                  "group flex flex-col items-center text-center p-8 rounded-lg " +
                  "bg-[#E6E7EE] shadow-[6px_6px_12px_#b8b9be,-6px_-6px_12px_#ffffff] "
                }
              >
                <h3 className="font-bold text-2xl text-primary mb-2">
                  {service}
                </h3>
                <p className="text-text/80 mb-4">
                  Comprehensive solutions tailored for your needs.
                </p>
                <Link href={`/services#${service.toLowerCase()}`}>
                  <div
                    key={index}
                    style={{ borderRadius: 8 }}
                    className={
                      "group flex flex-row  items-center text-center p-2 rounded-lg " +
                      "bg-[#E6E7EE] shadow-[6px_6px_12px_#b8b9be,-6px_-6px_12px_#ffffff] " +
                      "hover:shadow-[inset_4px_4px_8px_#b8b9be,inset_-4px_-4px_8px_#ffffff] " +
                      "transition-shadow duration-300 ease-in-out"
                    }
                  >
                    View more <ArrowRight className="w-5 h-5" />
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-text text-center">
            Our Impact
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "100+", label: "Clinical Trials" },
              { number: "25+", label: "Sponsors/CROs" },
              { number: "10+", label: "Sites" },
              { number: "50+", label: "Principal Investigators" },
            ].map((stat, index) => (
              <Card
                key={index}
                className={
                  "group flex flex-col items-center text-center p-8 rounded-lg " +
                  "bg-[#E6E7EE] shadow-[6px_6px_12px_#b8b9be,-6px_-6px_12px_#ffffff] " +
                  "hover:shadow-[inset_4px_4px_8px_#b8b9be,inset_-4px_-4px_8px_#ffffff] " +
                  "transition-shadow duration-300 ease-in-out"
                }
              >
                <h3 className="font-bold text-3xl text-primary mb-2">
                  {stat.number}
                </h3>
                <p className="text-text/80">{stat.label}</p>
              </Card>
            ))}
          </div>
        </section>
        <Card className="bg-[#E6E7EE] shadow-[6px_6px_12px_#b8b9be,-6px_-6px_12px_#ffffff] p-6">
          <CardContent className="space-y-6">
            <h2 className="text-2xl font-semibold text-primary text-center">
              Our Mission
            </h2>
            <p className="text-text text-center">
              To accelerate the development of life-changing therapies through
              innovative, efficient, and ethical clinical research, improving
              global health outcomes and enhancing the quality of life for
              patients worldwide.
            </p>
            <Link href="/contact">
              <div className="flex justify-center">
                <Button className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-full shadow-neumorph text-lg flex items-center justify-center gap-2 transition-all duration-200 hover:scale-105">
                  Join Our Team
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </Link>
          </CardContent>
        </Card>
        <UserCard />
      </main>
      <Footer />
    </div>
  );
}
