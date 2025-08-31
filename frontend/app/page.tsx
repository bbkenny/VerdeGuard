"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Shield, Zap, Globe, Coins } from "lucide-react"
import Image from "next/image"

// Intersection Observer Hook
const useInView = (threshold = 0.1) => {
  const [isInView, setIsInView] = useState(false);
  const [ref, setRef] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold }
    );

    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, threshold]);

  return [setRef, isInView] as const;
};

// Enhanced Animated Section Wrapper with more animations
const AnimatedSection = ({ children, className = "", delay = 0, animation = "fadeUp" }: { 
  children: React.ReactNode; 
  className?: string; 
  delay?: number;
  animation?: "fadeUp" | "fadeIn" | "slideIn" | "scaleIn";
}) => {
  const [setRef, isInView] = useInView(0.1);
  
  const getAnimationClasses = () => {
    const baseClasses = "transition-all duration-1000 ease-out";
    
    if (!isInView) {
      switch (animation) {
        case "fadeIn":
          return `${baseClasses} opacity-0`;
        case "slideIn":
          return `${baseClasses} opacity-0 transform translate-x-8`;
        case "scaleIn":
          return `${baseClasses} opacity-0 transform scale-95`;
        default: // fadeUp
          return `${baseClasses} opacity-0 transform translate-y-8`;
      }
    }
    
    switch (animation) {
      case "fadeIn":
        return `${baseClasses} opacity-100`;
      case "slideIn":
        return `${baseClasses} opacity-100 transform translate-x-0`;
      case "scaleIn":
        return `${baseClasses} opacity-100 transform scale-100`;
      default: // fadeUp
        return `${baseClasses} opacity-100 transform translate-y-0`;
    }
  };
  
  return (
    <div 
      ref={setRef} 
      className={`${getAnimationClasses()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// Staggered Animation Container
const StaggeredContainer = ({ children, className = "", staggerDelay = 100 }: {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}) => {
  return (
    <div className={className}>
      {React.Children.map(children, (child, index) => (
        <AnimatedSection delay={index * staggerDelay}>
          {child}
        </AnimatedSection>
      ))}
    </div>
  );
};

export default function HomePage() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      <Header />
      
             {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0">
          <Image
            src="/aerial-view-of-green-agricultural-fields-with-mode.png"
            alt="Agricultural fields from above"
            fill
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5"></div>
         </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors">
              🌱 Revolutionizing Crop Insurance
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
              Protecting Farmers with
              <span className="block text-primary">AI & Blockchain</span>
                </h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-balance mb-8 max-w-3xl mx-auto leading-relaxed">
              VerdeGuard provides instant, transparent crop insurance for Latin American farmers using satellite
              imagery, AI damage assessment, and blockchain technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg group"
              >
                Start Protecting Your Crops
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-4 text-lg bg-transparent"
              >
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-balance mb-6">
              The Challenge Facing
              <span className="text-primary block">Latin American Farmers</span>
            </h2>
            <p className="text-lg text-muted-foreground text-balance leading-relaxed">
              Small-scale farmers lose billions annually to unpredictable weather events, with traditional insurance
              being inaccessible, unaffordable, and unreliable.
            </p>
                  </div>

          <div className="max-w-3xl mx-auto mb-16">
            <Image
              src="/worried-farmer-looking-at-damaged-crops-after-stor.png"
              alt="Farmer assessing crop damage"
              width={800}
              height={400}
              className="w-full h-64 object-cover rounded-2xl shadow-lg"
            />
                  </div>

          <StaggeredContainer className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto" staggerDelay={150}>
            <Card className="border-destructive/20 bg-card hover:shadow-lg transition-all duration-300 group hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="h-8 w-8 text-destructive" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Inaccessible Insurance</h3>
                <p className="text-muted-foreground">
                  Traditional policies require formal credit history and collateral that most small farmers don't have.
                </p>
              </CardContent>
            </Card>

            <Card className="border-destructive/20 bg-card hover:shadow-lg transition-all duration-300 group hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Coins className="h-8 w-8 text-destructive" />
              </div>
                <h3 className="text-xl font-semibold mb-4">Unaffordable Premiums</h3>
                <p className="text-muted-foreground">
                  High administrative costs and premiums make traditional insurance prohibitive for small-scale
                  operations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-destructive/20 bg-card hover:shadow-lg transition-all duration-300 group hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="h-8 w-8 text-destructive" />
          </div>
                <h3 className="text-xl font-semibold mb-4">Delayed Payouts</h3>
                <p className="text-muted-foreground">
                  Manual claims processing takes months, leaving farmers without funds when they need them most.
                </p>
              </CardContent>
            </Card>
          </StaggeredContainer>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-balance mb-6">
              How VerdeGuard
              <span className="text-primary block">Revolutionizes Insurance</span>
            </h2>
            <p className="text-lg text-muted-foreground text-balance leading-relaxed">
              Our automated platform combines cutting-edge technology to deliver instant, transparent, and accessible
              crop insurance.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <Image
              src="/technology-process-flow-diagram-showing-satellite-.png"
              alt="VerdeGuard process flow"
              width={900}
              height={300}
              className="w-full h-48 object-contain"
            />
                  </div>
                  
          <StaggeredContainer className="grid lg:grid-cols-4 gap-8 max-w-7xl mx-auto" staggerDelay={200}>
            <Card className="border-primary/20 bg-gradient-to-br from-card to-primary/5 hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <Image
                    src="/satellite-monitoring-crops-from-space--green-agric.png"
                    alt="Satellite monitoring"
                    width={120}
                    height={120}
                    className="w-20 h-20 mx-auto rounded-lg"
                  />
                  </div>
                <h3 className="text-xl font-semibold mb-4">Satellite Monitoring</h3>
                <p className="text-muted-foreground">
                  Real-time satellite imagery continuously monitors your crops for signs of damage or stress.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-gradient-to-br from-card to-primary/5 hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <Image
                    src="/ai-brain-analyzing-crop-data-with-digital-overlays.png"
                    alt="AI assessment"
                    width={120}
                    height={120}
                    className="w-20 h-20 mx-auto rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-4">AI Assessment</h3>
                <p className="text-muted-foreground">
                  Advanced AI analyzes satellite data to accurately detect and quantify crop damage automatically.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-gradient-to-br from-card to-primary/5 hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <Image
                    src="/blockchain-smart-contract-visualization-with-conne.png"
                    alt="Smart contracts"
                    width={120}
                    height={120}
                    className="w-20 h-20 mx-auto rounded-lg"
                  />
            </div>
                <h3 className="text-xl font-semibold mb-4">Smart Contracts</h3>
                <p className="text-muted-foreground">
                  Blockchain smart contracts automatically trigger payouts when damage is confirmed, ensuring
                  transparency.
                </p>
              </CardContent>
            </Card>

            <Card className="border-accent/20 bg-gradient-to-br from-card to-accent/5 hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <Image
                    src="/instant-digital-payment-notification-on-mobile-pho.png"
                    alt="Instant payouts"
                    width={120}
                    height={120}
                    className="w-20 h-20 mx-auto rounded-lg"
                  />
          </div>
                <h3 className="text-xl font-semibold mb-4">Instant Payouts</h3>
                <p className="text-muted-foreground">
                  Receive compensation directly to your wallet within minutes, not months, when damage occurs.
                </p>
              </CardContent>
            </Card>
          </StaggeredContainer>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-balance mb-6">
              Why Choose
              <span className="text-primary block">VerdeGuard?</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Decentralized & Transparent</h3>
                  <p className="text-muted-foreground">
                    All transactions and assessments are recorded on blockchain, ensuring complete transparency and
                    eliminating intermediaries.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Zap className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Lightning Fast Claims</h3>
                  <p className="text-muted-foreground">
                    Automated AI assessment and smart contract execution mean you get paid in minutes, not months.
                  </p>
                </div>
                </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Affordable & Accessible</h3>
                  <p className="text-muted-foreground">
                    No credit checks, no collateral required. Our low-cost model makes insurance accessible to all
                    farmers.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/modern-farmer-using-smartphone-app-in-green-field-.png"
                alt="Farmer using VerdeGuard app"
                width={500}
                height={500}
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-background/90 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <Image
                      src="/verdeguard_logo.png"
                      alt="VerdeGuard Logo"
                      width={32}
                      height={32}
                      className="w-8 h-8"
                    />
                    <div>
                      <h4 className="font-semibold text-sm">VerdeGuard App</h4>
                      <p className="text-xs text-muted-foreground">Monitor & Protect Your Crops</p>
                </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-balance mb-6">
              Making a Real
              <span className="text-primary block">Impact</span>
            </h2>
            <p className="text-lg text-muted-foreground text-balance leading-relaxed">
              VerdeGuard is transforming lives and communities across Latin America by providing financial security to
              those who feed the world.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <Image
              src="/infographic-showing-positive-impact-on-latin-ameri.png"
              alt="VerdeGuard impact visualization"
              width={800}
              height={300}
              className="w-full h-48 object-contain"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            <Card className="border-primary/20 bg-gradient-to-br from-card to-primary/5 text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
                <div className="text-muted-foreground">Farmers Protected</div>
              </CardContent>
            </Card>

            <Card className="border-accent/20 bg-gradient-to-br from-card to-accent/5 text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-accent mb-2">$2M+</div>
                <div className="text-muted-foreground">Claims Paid Out</div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-gradient-to-br from-card to-primary/5 text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                <div className="text-muted-foreground">Accuracy Rate</div>
              </CardContent>
            </Card>
          </div>

          {/* Testimonial */}
          <Card className="max-w-4xl mx-auto border-accent/20 bg-gradient-to-r from-card via-accent/5 to-card">
            <CardContent className="p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <Image
                    src="/portrait-of-smiling-middle-aged-latin-american-wom.png"
                    alt="María Rodriguez"
                    width={120}
                    height={120}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                </div>
                <div className="text-center md:text-left">
                  <blockquote className="text-xl md:text-2xl text-balance mb-6 italic">
                    "VerdeGuard saved my farm. When the drought hit, I received my payout in just 30 minutes.
                    Traditional insurance would have taken months, if they paid at all."
                  </blockquote>
                  <div className="flex items-center justify-center md:justify-start space-x-4">
                    <div>
                      <div className="font-semibold">María Rodriguez</div>
                      <div className="text-muted-foreground text-sm">Coffee Farmer, Colombia</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary to-accent relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/panoramic-view-of-lush-green-agricultural-fields-a.png"
            alt="Agricultural landscape"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground text-balance mb-6">
            Ready to Protect Your Crops?
          </h2>
          <p className="text-xl text-primary-foreground/90 text-balance mb-8 max-w-2xl mx-auto">
            Join thousands of farmers who trust VerdeGuard to protect their livelihoods with cutting-edge technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-background text-foreground hover:bg-background/90 px-8 py-4 text-lg group"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4 text-lg bg-transparent"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

        <Footer scrollToSection={scrollToSection} />
    </div>
  )
}