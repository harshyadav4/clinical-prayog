"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { routes } from "@/json/route";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="bg-[#E6E7EE]  shadow-neumorph p-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-gradient">
          <Link href="/">Clinical Prayog</Link>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
          className="md:hidden hover:bg-transparent"
          style={{ backgroundColor: "transparent" }}
        >
          {isMenuOpen ? (
            <X className="text-accent " />
          ) : (
            <Menu className="text-primary " />
          )}
        </Button>
        <nav className="hidden md:flex space-x-6">
          {routes?.map((item) => (
            <Link
              key={item?.path}
              href={item?.path}
              className="text-text hover:text-primary transition-colors duration-200 font-medium"
            >
              {item?.name}
            </Link>
          ))}
        </nav>
      </div>
      {isMenuOpen && (
        <nav className="mt-4 space-y-2 md:hidden transition-transform duration-500 ease-in-out">
          {routes?.map((item) => (
            <Link
              key={item?.path}
              href={item?.path}
              className="block text-text hover:text-primary transition-colors duration-200 font-medium"
            >
              {item?.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
