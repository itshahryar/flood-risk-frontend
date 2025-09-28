"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X, ShieldCheck, Info, FileText, Waves } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/flood-detection", icon: ShieldCheck, text: "Flood Risk Analyzer" },
    { href: "/about", icon: Info, text: "About" },
  ];

  return (
    <header className="fixed top-0 w-full border-b bg-white/80 backdrop-blur-md z-20 supports-[backdrop-filter]:bg-white/60">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Brand Name with Icon */}
        <Link href="/" className="flex items-center gap-2 cursor-pointer">
          <Waves className="h-6 w-6 text-emerald-600" />
          <span className="text-xl font-bold text-emerald-600">FloodAware</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-3">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <Button
                variant="outline"
                className="group inline-flex items-center gap-2 cursor-pointer 
                           hover:bg-emerald-600 hover:text-white transition"
              >
                {/* Icon starts emerald, turns white on hover */}
                <link.icon className="h-4 w-4 text-emerald-600 group-hover:text-white transition" />
                {link.text}
              </Button>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-emerald-600" />
          ) : (
            <Menu className="h-6 w-6 text-emerald-600" />
          )}
        </Button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white border-b md:hidden">
            <div className="container mx-auto px-4 py-3 flex flex-col space-y-2">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-center gap-2 py-2 px-3 rounded-md cursor-pointer transition 
                             hover:bg-emerald-600 hover:text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {/* Same hover effect for mobile */}
                  <item.icon className="h-4 w-4 text-emerald-600 group-hover:text-white transition" />
                  {item.text}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

