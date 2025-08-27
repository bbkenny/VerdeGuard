"use client";

import { useState } from 'react';
import Image from 'next/image';
import { 
  Github,
  ExternalLink,
  FileText,
  BookOpen
} from 'lucide-react';

interface FooterProps {
  scrollToSection?: (id: string) => void;
}

export default function Footer({ scrollToSection }: FooterProps) {
  return (
    <footer className="bg-[#144489] text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Image src={"/manna-logo.png"} alt="Manna logo" width={32} height={32}/>
              <span className="text-xl font-bold">Manna (만나)</span>
            </div>
            <p className="text-gray-300 mb-4">
              Bridging global passion to Korean creativity through the power of KRW stablecoins.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {scrollToSection ? (
                <>
                  <li><button onClick={() => scrollToSection('problem')} className="text-gray-300 hover:text-[#EFAC20] transition-colors">The Problem</button></li>
                  <li><button onClick={() => scrollToSection('solution')} className="text-gray-300 hover:text-[#EFAC20] transition-colors">Our Solution</button></li>
                  <li><button onClick={() => scrollToSection('roadmap')} className="text-gray-300 hover:text-[#EFAC20] transition-colors">Roadmap</button></li>
                  <li><button onClick={() => scrollToSection('demo')} className="text-gray-300 hover:text-[#EFAC20] transition-colors">Try Demo</button></li>
                </>
              ) : (
                <>
                  <li><a href="/#problem" className="text-gray-300 hover:text-[#EFAC20] transition-colors">The Problem</a></li>
                  <li><a href="/#solution" className="text-gray-300 hover:text-[#EFAC20] transition-colors">Our Solution</a></li>
                  <li><a href="/#roadmap" className="text-gray-300 hover:text-[#EFAC20] transition-colors">Roadmap</a></li>
                  <li><a href="/#demo" className="text-gray-300 hover:text-[#EFAC20] transition-colors">Try Demo</a></li>
                </>
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://github.com/thebabalola/manna" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#EFAC20] transition-colors flex items-center">
                  <Github size={16} className="mr-2" />
                  GitHub Repository
                </a>
              </li>
              <li>
                <a href="https://docs.google.com/presentation/d/1qKJidCy1NT8JviqDgs9dH36ehSE499nY/edit?usp=sharing&ouid=100528488557506058575&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#EFAC20] transition-colors flex items-center">
                  <FileText size={16} className="mr-2" />
                  Pitch Deck
                </a>
              </li>
              <li>
                <a href="https://docs.google.com/document/d/1I5fVrMsMLdSgmz3cI8YoEI8o7y8vWkBMGKT31-908u8/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#EFAC20] transition-colors flex items-center">
                  <BookOpen size={16} className="mr-2" />
                  Concept Document
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 Manna - KRW Stablecoin Ideathon Project. Built on Kaia Blockchain.
          </p>
        </div>
      </div>
    </footer>
  );
}
