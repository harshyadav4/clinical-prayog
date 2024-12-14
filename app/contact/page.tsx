import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Card } from "@/components/ui/card";
import { MapPin, Mail } from "lucide-react";
import { address, email } from "@/json/contact";
export const metadata = {
  title: "Contact-Us",
  description: "Contact Us for Clinical Prayog Human Research",
};
export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#E6E7EE] flex flex-col">
      <Header />
      <main className="flex-grow p-4 space-y-12 md:p-8 lg:p-12 max-w-6xl mx-auto">
        <section className="text-center md:max-w-2xl md:mx-auto">
          <h1 className="text-4xl font-bold mb-4 md:text-5xl lg:text-6xl text-gradient animate-float">
            Let&apos;s Connect
          </h1>
          <p className="text-lg text-text md:text-xl lg:text-2xl">
            We&apos;re here to answer your questions and provide the support you
            need
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-8">
          <ContactForm />
          <div className="space-y-6">
            <Card className="bg-[#E6E7EE] shadow-[6px_6px_12px_#b8b9be,-6px_-6px_12px_#ffffff] p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Contact Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="text-secondary" />
                  <a
                    href={`https://www.google.com/maps?q=${address}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text"
                  >
                    <p>{address}</p>
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-secondary" />
                  <a
                    href={`mailto:${email}`}
                    target="_blank"
                    className="text-text"
                  >
                    <p>{email}</p>
                  </a>
                </div>
              </div>
            </Card>
            <Card className="bg-[#E6E7EE] shadow-[6px_6px_12px_#b8b9be,-6px_-6px_12px_#ffffff] p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Office Hours
              </h2>
              <p className="text-text mb-2">
                Monday - Saturday: 9:00 AM - 6:00 PM
              </p>
              <p className="text-text">Sunday: Closed</p>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
