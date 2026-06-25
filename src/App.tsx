import { useState, useEffect } from 'react';
import {
  ArrowRight,
  Lightbulb,
  Code2,
  Palette,
  TrendingUp,
  Rocket,
  Target,
  Users,
  BarChart3,
  MessageSquare,
  Sparkles,
  Menu,
  X,
  ChevronRight,
  HeartHandshake,
  Globe,
  Smartphone,
  Cloud,
  Mail,
  PenTool,
  Layout,
  Layers,
  Search,
  MousePointer,
  Megaphone,
  UserCheck,
  DollarSign,
  LineChart,
  ShieldCheck,
  Database,
  GitBranch,
} from 'lucide-react';

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Process', href: '#process' },
  { label: 'Industries', href: '#industries' },
  { label: 'About', href: '#about' },
];

const SERVICES = [
  {
    id: 'design',
    phase: 'Phase 01',
    action: 'Shape',
    title: 'UI/UX & Product Strategy',
    tagline: 'Design experiences users love and business metrics benefit from.',
    description: 'We don’t just paint pixels. We run deep user research, outline architectural wireframes, and craft comprehensive design systems built to maximize early customer onboarding.',
    color: 'from-pink-500 to-rose-500',
    icon: Palette,
    capabilities: ['Product Discovery', 'UX/UI Design Systems', 'Interactive Prototyping', 'User Flow Optimization'],
    items: [
      { icon: Target, label: 'Product Discovery' },
      { icon: Layers, label: 'Design Systems' },
      { icon: Search, label: 'UX Research' },
      { icon: Layout, label: 'Wireframing' },
    ],
  },
  {
    id: 'development',
    phase: 'Phase 02',
    action: 'Ship',
    title: 'Engineered Software Systems',
    tagline: 'Build secure, clean, and highly scalable digital foundations.',
    description: 'We compile type-safe, production-ready applications utilizing React, TypeScript, and optimized cloud infrastructure. Engineered for speed, security, and smooth zero-downtime scalability.',
    color: 'from-sky-500 to-cyan-500',
    icon: Code2,
    capabilities: ['Web & Mobile Applications', 'SaaS Architecture', 'Custom API & DB Systems', 'Cloud Infrastructure (AWS)'],
    items: [
      { icon: Globe, label: 'Web Applications' },
      { icon: Smartphone, label: 'Mobile Apps' },
      { icon: Cloud, label: 'Cloud Infrastructure' },
      { icon: Database, label: 'API Development' },
    ],
  },
  {
    id: 'growth',
    phase: 'Phase 03',
    action: 'Scale',
    title: 'Growth Marketing & Analytics',
    tagline: 'The difference between a product that exists and one that thrives.',
    description: 'A great product needs clear eyes. We wire up advanced performance analytics, construct behavioral growth funnels, and optimize retention strategies to lower user acquisition costs.',
    color: 'from-emerald-500 to-teal-500',
    icon: TrendingUp,
    capabilities: ['Growth Funnel Analytics', 'Conversion Optimization', 'Performance Retainers', 'Retention Automation'],
    items: [
      { icon: LineChart, label: 'Growth Analytics' },
      { icon: Megaphone, label: 'Performance Marketing' },
      { icon: UserCheck, label: 'Customer Acquisition' },
      { icon: HeartHandshake, label: 'Retention Strategy' },
    ],
  }
];


const WHY_US = [
  { title: "We Don't Stop At Launch", description: 'We become your growth partner, helping you continuously improve, market, and scale your product.', icon: Rocket },
  { title: 'Product-First Approach', description: 'Every decision is guided by business outcomes, customer needs, and measurable impact.', icon: Target },
  { title: 'Growth-Driven Execution', description: 'We build with growth in mind from day one, optimized for acquisition, engagement, and retention.', icon: TrendingUp },
  { title: 'End-to-End Partnership', description: 'From idea validation to product development and growth acceleration, we support every stage.', icon: HeartHandshake },
];

const PROCESS = [
  { step: '01', title: 'Discover', description: 'We understand your business, customers, and goals.' },
  { step: '02', title: 'Strategize', description: 'We define the roadmap, growth opportunities, and success metrics.' },
  { step: '03', title: 'Build', description: 'Our team designs and develops your solution using modern technologies.' },
  { step: '04', title: 'Launch', description: 'We deploy, monitor, and optimize for performance.' },
  { step: '05', title: 'Scale', description: 'We implement growth strategies to help you attract, retain, and monetize users.' },
];

const INDUSTRIES = [
  { label: 'Fintech', icon: DollarSign },
  { label: 'Healthcare', icon: HeartHandshake },
  { label: 'E-commerce', icon: ShoppingCart },
  { label: 'Logistics', icon: Truck },
  { label: 'Gaming', icon: Gamepad },
  { label: 'SaaS', icon: Cloud },
  { label: 'Education', icon: Lightbulb },
  { label: 'Enterprise', icon: Building },
];

function ShoppingCart({ className }: { className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" /></svg>;
}

function Truck({ className }: { className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg>;
}

function Gamepad({ className }: { className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="6" y1="12" x2="10" y2="12" /><line x1="8" y1="10" x2="8" y2="14" /><line x1="15" y1="13" x2="15.01" y2="13" /><line x1="18" y1="11" x2="18.01" y2="11" /><rect x="2" y="6" width="20" height="12" rx="2" /></svg>;
}

function Building({ className }: { className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" /><path d="M9 22v-4h6v4" /><path d="M8 6h.01" /><path d="M16 6h.01" /><path d="M12 6h.01" /><path d="M12 10h.01" /><path d="M12 14h.01" /><path d="M16 10h.01" /><path d="M16 14h.01" /><path d="M8 10h.01" /><path d="M8 14h.01" /></svg>;
}

function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-float animation-delay-200" />
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-float animation-delay-400" />
      <div className="absolute inset-0 opacity-30 bg-[linear-gradient(rgba(14,165,233,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
    </div>
  );
}

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'py-4 glass-dark shadow-2xl bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900' : 'py-6 bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 flex items-center justify-between">
          
          {/* 1. Left Aligned Logo Container */}
<div className="flex-1 flex justify-start">
  <a href="#" className="flex items-center gap-3 group">
    <div className="relative w-10 h-10 flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform" />
      <div className="absolute inset-0 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center font-mono font-bold text-sm tracking-wider">
        TT
      </div>
    </div>
    {/* Combined into clean, single-word typography */}
    <span className="font-mono font-bold text-sm tracking-wider uppercase text-zinc-100 group-hover:text-white transition-colors">
      TachiTech
    </span>
  </a>
</div>

          {/* 2. Centered Navigation Menu wrapped in a fine-bordered Pill Capsule */}
          <div className="hidden md:flex items-center justify-center bg-zinc-950/40 border border-slate-800/40 rounded-full px-6 py-2.5 backdrop-blur-md gap-8 shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[11px] font-bold text-zinc-400 hover:text-white transition-colors uppercase tracking-widest relative group"
              >
                {link.label}
                {/* Micro-dot active indicator hover layer */}
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-sky-400 rounded-full opacity-0 scale-50 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100" />
              </a>
            ))}
          </div>

          {/* 3. Right Aligned CTA Container / Mobile Toggle (Remains the same) */}
          <div className="flex-1 flex justify-end items-center">
            {/* Desktop Action Button */}
            <div className="hidden md:block">
              <button className="relative inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-cyan-500 text-zinc-950 text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full hover:shadow-[0_0_20px_rgba(14,165,233,0.3)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer">
                Start Your Build
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Menu Icon */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-zinc-400 hover:text-zinc-100 focus:outline-none cursor-pointer"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </nav>

      {/* Fullscreen Mobile Navigation Menu Overlay (Remains the same) */}
      <div className={`fixed inset-0 z-40 bg-zinc-950/95 backdrop-blur-lg transform transition-transform duration-500 md:hidden flex flex-col justify-center ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col items-center gap-8 px-6 text-center">
          {NAV_LINKS.map((link, idx) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-semibold text-zinc-300 hover:text-white transition-colors tracking-wide flex items-center gap-2"
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              {link.label}
              <ChevronRight className="w-5 h-5 text-sky-400 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
            </a>
          ))}
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-8 w-full max-w-xs flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 to-cyan-500 text-zinc-950 text-sm font-bold uppercase tracking-wider py-4 rounded-xl"
          >
            Start Your Build
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </>
  );
}

function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center gradient-bg overflow-hidden py-20">
      <AnimatedBackground />
      
      <div className="container-padding max-w-7xl mx-auto relative z-10 w-full">
        {/* Two-Column Layout Grid for Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Side Container: High-Impact Typography & Action CTA Links */}
          <div className="lg:col-span-7 max-w-3xl text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight mb-8">
              <span className="block animate-fade-in-up">Build.</span>
              <span className="block animate-fade-in-up animation-delay-100 gradient-text">Launch.</span>
              <span className="block animate-fade-in-up animation-delay-200">Scale.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-8 animate-fade-in-up animation-delay-300">
              We help ambitious businesses transform ideas into successful digital products through world-class software development, product strategy, and growth marketing.
            </p>

            {/* Repositioned Brand Pill Badge Tagline */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark text-sky-400 text-sm font-medium mb-10 animate-fade-in-up animation-delay-400">
              <Sparkles className="w-4 h-4" />
              <span>Product Strategy - Engineering - Growth Marketing</span>
            </div>

            <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-500">
              <a href="#cta" className="btn-primary"><Rocket className="w-5 h-5" />Start Your Project</a>
              <a href="#cta" className="btn-secondary"><MessageSquare className="w-5 h-5" />Book a Discovery Call</a>
            </div>
          </div>

          {/* Right Side Container: Premium Interactive Floating Layout Cards */}
          <div className="lg:col-span-5 relative h-[450px] w-full hidden md:flex items-center justify-center">
            
            {/* 1. Designer Core Environment Card (Floats Top-Left) */}
            <div className="absolute top-8 left-4 p-5 rounded-2xl glass-dark border border-slate-800/60 shadow-2xl backdrop-blur-xl w-64 animate-float select-none pointer-events-none transform transition-transform hover:scale-105 duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400">
                  <Palette className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-mono">WORKSPACE</div>
                  <div className="text-sm font-bold text-white tracking-wide">UI/UX Design</div>
                </div>
              </div>
              <div className="space-y-2 mt-4">
                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full w-[85%] bg-gradient-to-r from-pink-500 to-rose-500 rounded-full" />
                </div>
                <div className="flex justify-between text-[10px] font-mono text-slate-400">
                  <span>Design System</span>
                  <span>85% Optimized</span>
                </div>
              </div>
            </div>

            {/* 2. Developer Deep Tech Stack Card (Floats Bottom-Right) */}
            <div className="absolute bottom-8 right-4 p-5 rounded-2xl glass-dark border border-slate-800/60 shadow-2xl backdrop-blur-xl w-72 animate-float animation-delay-300 select-none pointer-events-none transform transition-transform hover:scale-105 duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-mono">ENVIRONMENT</div>
                  <div className="text-sm font-bold text-white tracking-wide">Product Engineer</div>
                </div>
              </div>
              {/* Fake Interactive Tech Node Dots */}
              <div className="grid grid-cols-3 gap-2 text-[10px] font-mono text-center">
                <div className="bg-sky-500/10 border border-sky-500/20 rounded px-1.5 py-1 text-sky-300">React</div>
                <div className="bg-cyan-500/10 border border-cyan-500/20 rounded px-1.5 py-1 text-cyan-300">TS</div>
                <div className="bg-emerald-500/10 border border-emerald-500/20 rounded px-1.5 py-1 text-emerald-300">Tailwind</div>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-900/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Production Ready
                </span>
                <span className="text-slate-500">v2.6.0</span>
              </div>
            </div>

          </div>

        </div>

        {/* Bouncing Scroll Down Tracker Indicator Trigger */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#services" className="text-slate-400 hover:text-white transition-colors">
            <ChevronRight className="w-8 h-8 rotate-90" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Trusted() {
  return (
    <section id="trusted" className="relative gradient-bg py-24 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-500/50 to-transparent" />
      <div className="container-padding max-w-7xl mx-auto relative z-10 text-center max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">More Than a <span className="gradient-text">Development Agency</span></h2>
        <p className="text-xl text-slate-300 leading-relaxed mb-6">Most agencies stop after shipping your product.</p>
        <p className="text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto">At Tachi Tech, we combine product thinking, engineering excellence, and growth expertise to help businesses build products users love and companies profit from.</p>
        <p className="text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto mt-4">Whether you're launching a startup, digitizing operations, or scaling an existing platform, we provide the strategy, technology, and growth support needed to achieve measurable business outcomes.</p>
      </div>
    </section>
  );
}

function Services() {
  const [activeService, setActiveService] = useState(0);

  return (
    <section id="services" className="relative gradient-bg section-padding overflow-hidden">
      <AnimatedBackground />
      <div className="container-padding max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 rounded-full glass-dark text-sky-400 text-sm font-medium mb-6">What We Do</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Our Services</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">Comprehensive solutions to build, launch, and scale your digital products</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-4">
            {SERVICES.map((service, index) => (
              <button 
                key={service.title} 
                onClick={() => setActiveService(index)} 
                className={`w-full text-left p-6 rounded-2xl transition-all duration-500 ${activeService === index ? 'glass-dark border-sky-500/50 shadow-2xl shadow-sky-500/10' : 'bg-white/5 border border-transparent hover:bg-white/10'}`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
                  </div>
                  <ChevronRight className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${activeService === index ? 'rotate-90 text-sky-400' : ''}`} />
                </div>
              </button>
            ))}
          </div>

          <div className="glass-dark rounded-3xl p-8 lg:p-10 shadow-2xl">
            <div className="flex items-center gap-4 mb-8">
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${SERVICES[activeService].color} flex items-center justify-center shadow-lg`}>
                <ServiceIcon icon={SERVICES[activeService].icon} />
              </div>
              <h3 className="text-2xl font-bold text-white">{SERVICES[activeService].title}</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {SERVICES[activeService].items.map((item) => (
                <div key={item.label} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                  <item.icon className="w-5 h-5 text-sky-400 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceIcon({ icon: Icon }: { icon: React.ComponentType<{ className?: string }> }) {
  return <Icon className="w-8 h-8 text-white" />;
}

function WhyUs() {
  return (
    <section id="why-us" className="relative gradient-bg section-padding overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/50 to-transparent" />
      <div className="container-padding max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 rounded-full glass-dark text-sky-400 text-sm font-medium mb-6">Why Choose Us</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">The Tachi Tech <span className="gradient-text">Difference</span></h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {WHY_US.map((item, index) => (
            <div key={item.title} className="group glass-dark rounded-3xl p-8 lg:p-10 card-hover" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-sky-500/20">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="relative gradient-bg section-padding overflow-hidden">
      <div className="container-padding max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 rounded-full glass-dark text-sky-400 text-sm font-medium mb-6">Our Process</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">How We Work</h2>
        </div>
        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-sky-500/0 via-sky-500 to-sky-500/0 -translate-y-1/2" />
          <div className="grid lg:grid-cols-5 gap-8">
            {PROCESS.map((step, index) => (
              <div key={step.step} className="relative group">
                <div className="glass-dark rounded-2xl p-6 text-center card-hover relative z-10">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-sky-500/20 group-hover:scale-110 transition-transform duration-500">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                </div>
                {index < PROCESS.length - 1 && <div className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 z-20"><ArrowRight className="w-8 h-8 text-sky-500" /></div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Industries() {
  return (
    <section id="industries" className="relative gradient-bg section-padding overflow-hidden">
      <div className="container-padding max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass-dark text-sky-400 text-sm font-medium mb-6">Industries</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Industries We Serve</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {INDUSTRIES.map((industry, index) => (
            <div key={industry.label} className="group glass-dark rounded-2xl p-6 text-center card-hover" style={{ animationDelay: `${index * 50}ms` }}>
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-sky-500/20 to-cyan-500/20 flex items-center justify-center mx-auto mb-4 group-hover:from-sky-500 group-hover:to-cyan-500 transition-all duration-500">
                <industry.icon className="w-7 h-7 text-sky-400 group-hover:text-white transition-colors duration-500" />
              </div>
              <span className="text-white font-medium">{industry.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative gradient-bg section-padding overflow-hidden">
      <AnimatedBackground />
      <div className="container-padding max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <span className="inline-block px-4 py-2 rounded-full glass-dark text-sky-400 text-sm font-medium mb-6">About Us</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Building Technology That <span className="gradient-text">Drives Growth</span></h2>
            </div>
            <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
              <p>Tachi Tech Ltd is a technology and growth company focused on helping businesses build, launch, and scale digital products.</p>
              <p>Our team combines expertise in product management, software engineering, design, marketing, and growth strategy to create solutions that don't just work - they deliver results.</p>
              <p className="text-sky-400 font-medium">We believe successful products are built at the intersection of technology, user experience, and growth.</p>
            </div>
            <div className="grid grid-cols-3 gap-6 pt-8">
              {[{ value: '100+', label: 'Projects Delivered' }, { value: '50+', label: 'Happy Clients' }, { value: '5+', label: 'Years Experience' }].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 to-cyan-500/20 rounded-3xl blur-3xl" />
            <div className="relative glass-dark rounded-3xl p-8 lg:p-10">
              <div className="grid grid-cols-2 gap-4">
                {[{ icon: Code2, label: 'Engineering', color: 'from-sky-500 to-cyan-500' }, { icon: Lightbulb, label: 'Strategy', color: 'from-amber-500 to-orange-500' }, { icon: Palette, label: 'Design', color: 'from-pink-500 to-rose-500' }, { icon: TrendingUp, label: 'Growth', color: 'from-emerald-500 to-teal-500' }].map((item) => (
                  <div key={item.label} className="glass rounded-2xl p-6 text-center">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-white font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useForm } from '@formspree/react';

function CTA() {
  const [state, handleSubmit] = useForm("mlgydyna");   // ← Your Formspree ID

  return (
    <section id="cta" className="relative gradient-bg section-padding overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <div className="glass-dark rounded-3xl p-10 lg:p-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-sky-500/10 text-sky-400 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" /> Let's Build Something Amazing
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Let's bring your idea to life!
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Fill out the form below and our team will get back to you within 24 hours.
            </p>
          </div>

          {state.succeeded ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-6">🎉</div>
              <h3 className="text-3xl font-semibold text-green-400 mb-4">Thank You!</h3>
              <p className="text-slate-300 text-lg">Your message has been received. We'll contact you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8 max-w-2xl mx-auto">
              
              {/* Name Fields */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-slate-400 mb-2">First Name *</label>
                  <input 
                    type="text" 
                    name="firstName" 
                    required 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-400 focus:border-sky-500 focus:outline-none"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-400 mb-2">Last Name *</label>
                  <input 
                    type="text" 
                    name="lastName" 
                    required 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-400 focus:border-sky-500 focus:outline-none"
                    placeholder="Doe"
                  />
                </div>
              </div>

              {/* Contact Info */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-slate-400 mb-2">Business Email *</label>
                  <input 
                    type="email" 
                    name="email" 
                    required 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-400 focus:border-sky-500 focus:outline-none"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-400 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-400 focus:border-sky-500 focus:outline-none"
                    placeholder="+234 000 000 0000"
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-sm text-slate-400 mb-2">What are you looking to build with TachiTech? *</label>
                <select 
                  name="service" 
                  required 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-sky-500 focus:outline-none"
                >
                  <option value="" disabled>Select a service</option>
                  {SERVICES.map((service) => (
                    <option key={service.title} value={service.title}>
                      {service.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm text-slate-400 mb-2">Tell us more about your project *</label>
                <textarea 
                  name="message" 
                  required 
                  rows={6}
                  className="w-full bg-white/5 border border-white/10 rounded-3xl px-6 py-4 text-white placeholder:text-slate-400 focus:border-sky-500 focus:outline-none resize-y"
                  placeholder="Describe your idea, goals, timeline, budget range, and any specific requirements..."
                />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="btn-primary w-full py-5 text-lg font-semibold disabled:opacity-70 mt-4"
              >
                {state.submitting ? "Sending your request..." : "Submit Your Project Request"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="gradient-bg py-16 border-t border-white/5">
      <div className="container-padding max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-xl" />
                <span className="relative text-white font-bold text-lg">T</span>
              </div>
              <span className="text-white font-semibold text-xl">Tachi<span className="text-sky-400">Tech</span></span>
            </a>
            <p className="text-slate-400 max-w-md leading-relaxed">Building, launching, and scaling digital products through product strategy, software engineering, growth marketing, and revenue optimization.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">{NAV_LINKS.map((link) => (<li key={link.label}><a href={link.href} className="text-slate-400 hover:text-sky-400 transition-colors text-sm">{link.label}</a></li>))}</ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><a href="mailto:hello@tachitech.com" className="hover:text-sky-400 transition-colors">hello@tachitech.com</a></li>
              <li><a href="mailto:projects@tachitech.com" className="hover:text-sky-400 transition-colors">projects@tachitech.com</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">{`© ${new Date().getFullYear()} Tachi Tech Ltd. All rights reserved.`}</p>
          <div className="flex gap-6">{['Privacy Policy', 'Terms of Service'].map((link) => (<a key={link} href="#" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">{link}</a>))}</div>
        </div>
      </div>
    </footer>
  );
}
async function fetchBlogPosts() {
  const HYGRAPH_ENDPOINT = "https://eu-west-2.cdn.hygraph.com/content/cmqi3j7to03cz08usfhr557ly/master";
  
  const query = `
    query GetBlogPosts {
      posts {
        id
        title
        slug
        excerpt
        category
        date
        readTime
        content
      }
    }
  `;

  try {
    const response = await fetch(HYGRAPH_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query }),
    });
    const json = await response.json();
    return json.data.posts;
  } catch (error) {
    console.error("Error loading blog entries:", error);
    return [];
  }
}

function Blog() {
  interface Post {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    category: string;
    date: string;
    readTime: string;
    content: string;
  }

  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [activePost, setActivePost] = useState<Post | null>(null);

  useEffect(() => {
    fetchBlogPosts().then((data) => {
      setPosts(data || []);
      setLoading(false);
    });
  }, []);

  return (
    <section id="blog" className="py-28 relative overflow-hidden border-t border-slate-900/50 bg-zinc-950 text-left">
      <div className="container-padding max-w-7xl mx-auto relative z-10">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-dark text-sky-400 text-xs font-medium mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Insights & Thinking</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4">
            Latest from Tachi Tech.
          </h2>
          <p className="text-lg text-slate-400">
            Our thoughts on engineering high-performance software, refining product strategies, and scaling modern digital businesses.
          </p>
        </div>

        {/* Loading / Data Grid States */}
        {loading ? (
          <div className="text-slate-500 font-mono text-xs animate-pulse">Loading secure content database stream...</div>
        ) : posts.length === 0 ? (
          <div className="text-slate-500 font-mono text-xs">No entries published yet. Stay tuned.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article 
                key={post.id} 
                onClick={() => setActivePost(post)}
                className="group relative flex flex-col justify-between p-6 rounded-2xl glass-dark border border-slate-800/40 hover:border-sky-500/30 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs font-medium text-slate-400 mb-4">
                    <span className="text-sky-400 px-2.5 py-0.5 rounded-full bg-sky-500/10 border border-sky-500/20">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-2 text-slate-500 font-mono">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-sky-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-900 flex items-center text-xs font-semibold uppercase tracking-wider text-white group-hover:text-sky-400 transition-colors gap-1">
                  Read Article
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {/* Slide-Over Article Drawer Overlay */}
      <div className={`fixed inset-0 z-50 transition-all duration-500 flex justify-end ${activePost ? 'visible pointer-events-auto' : 'invisible pointer-events-none'}`}>
        <div 
          className={`absolute inset-0 bg-zinc-950/60 backdrop-blur-sm transition-opacity duration-500 ${activePost ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setActivePost(null)}
        />
        
        <div className={`relative w-full max-w-2xl h-full bg-zinc-900 border-l border-slate-800/80 p-8 md:p-12 overflow-y-auto shadow-2xl transform transition-transform duration-500 ease-out flex flex-col text-left ${activePost ? 'translate-x-0' : 'translate-x-full'}`}>
          {activePost && (
            <>
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-800/60">
                <span className="text-xs font-mono text-sky-400 font-semibold tracking-widest uppercase">{activePost.category}</span>
                <button 
                  onClick={() => setActivePost(null)} 
                  className="p-2 rounded-full border border-slate-800 hover:border-slate-700 bg-zinc-950 text-slate-400 hover:text-white transition-all cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="text-xs font-mono text-slate-500 mb-2 flex gap-4">
                <span>Published: {activePost.date}</span>
                <span>•</span>
                <span>{activePost.readTime}</span>
              </div>
              <h1 className="text-2xl md:text-4xl font-bold text-white tracking-tight leading-tight mb-6">
                {activePost.title}
              </h1>

              <div className="text-slate-300 text-sm md:text-base leading-relaxed space-y-6 whitespace-pre-wrap font-sans">
                {activePost.content}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen gradient-bg">
      <Navbar />
      <main>
        <Hero />
        <Trusted />
        <Services />
        <WhyUs />
        <Process />
        <Industries />
        <Blog /> 
        <About />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

