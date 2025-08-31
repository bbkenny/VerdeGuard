"use client";

import Image from "next/image";
import Link from "next/link";


interface FooterProps {
  scrollToSection: (id: string) => void;
}

export default function Footer({ scrollToSection }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/verdeguard_logo.png"
                alt="VerdeGuard Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="text-xl font-bold">VerdeGuard</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Empowering farmers with decentralized crop insurance powered by AI and blockchain technology. 
              Protecting livelihoods across Latin America with instant, transparent coverage.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => scrollToSection('how-it-works')}
                  className="text-gray-300 hover:text-emerald-400 transition-colors"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('features')}
                  className="text-gray-300 hover:text-emerald-400 transition-colors"
                >
                  Features
                </button>
              </li>
              <li>
                <Link 
                  href="/user-dash"
                  className="text-gray-300 hover:text-emerald-400 transition-colors"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('impact')}
                  className="text-gray-300 hover:text-emerald-400 transition-colors"
                >
                  Impact
                </button>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="#"
                  className="text-gray-300 hover:text-emerald-400 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#"
                  className="text-gray-300 hover:text-emerald-400 transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a 
                  href="#"
                  className="text-gray-300 hover:text-emerald-400 transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a 
                  href="#"
                  className="text-gray-300 hover:text-emerald-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © 2025 VerdeGuard. All rights reserved. Built with ❤️ for farmers worldwide.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
