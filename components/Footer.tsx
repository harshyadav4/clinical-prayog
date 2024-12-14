import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";
import { routes } from "@/json/route";
import Link from "next/link";
import { address, email } from "@/json/contact";

export default function Footer() {
  return (
    <footer className="bg-[#E6E7EE] shadow-neumorph mt-12 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-primary mb-4">
              Clinical Prayog
            </h3>
            <p className="text-text/80">
              Advancing human research with integrity and innovation.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-text mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {routes.map(({ name, path }) => (
                <li key={path}>
                  <Link
                    href={path}
                    className="text-text/80 hover:text-primary transition-colors duration-200"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-text mb-4">Contact Us</h4>
            <a
              href={`https://www.google.com/maps?q=${address}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text"
            >
              <p className="text-text/80 mb-2">{address}</p>
            </a>
            <a
              href={`mailto:${email}`}
              target="_blank"
              className="text-text/80 mb-4"
            >
              <p className="text-text/80 mb-4">Email: {email}</p>
            </a>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Linkedin, Mail].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-primary hover:text-secondary transition-colors duration-200"
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-text/10 text-center text-text/60">
          <p>
            &copy; 2025 Clinical Prayog Human Research. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
