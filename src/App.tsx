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
    title: 'Product Strategy & Management',
    description: 'Turn ideas into products people actually want. We help define product vision, validate opportunities, and create roadmaps that align with business goals.',
    icon: Lightbulb,
    color: 'from-amber-500 to-orange-500',
    items: [
      { icon: Target, label: 'Product Discovery' },
      { icon: Layers, label: 'Product Roadmapping' },
      { icon: Search, label: 'Market Research' },
      { icon: Users, label: 'User Research' },
      { icon: Layers, label: 'Feature Prioritization' },
      { icon: BarChart3, label: 'Product Analytics' },
    ],
  },
  {
    title: 'Software Development',
    description: 'Build secure, scalable, and high-performing digital products designed for growth.',
    icon: Code2,
    color: 'from-sky-500 to-cyan-500',
    items: [
      { icon: Globe, label: 'Web Applications' },
      { icon: Smartphone, label: 'Mobile Applications' },
      { icon: Cloud, label: 'SaaS Platforms' },
      { icon: Database, label: 'Enterprise Software' },
      { icon: GitBranch, label: 'API Development' },
      { icon: Cloud, label: 'Cloud Infrastructure' },
      { icon: ShieldCheck, label: 'Quality Assurance' },
    ],
  },
  {
    title: 'UI/UX Design',
    description: 'Create experiences users enjoy and businesses benefit from.',
    icon: Palette,
    color: 'from-pink-500 to-rose-500',
    items: [
      { icon: PenTool, label: 'Product Design' },
      { icon: Search, label: 'UX Research' },
      { icon: Layout, label: 'Wireframing' },
      { icon: Layers, label: 'Prototyping' },
      { icon: Layers, label: 'Design Systems' },
      { icon: MousePointer, label: 'Conversion Optimization' },
    ],
  },
  {
    title: 'Growth & Scale',
    description: 'The difference between a product that exists and a product that succeeds.',
    icon: TrendingUp,
    color: 'from-emerald-500 to-teal-500',
    items: [
      { icon: TrendingUp, label: 'Growth Strategy' },
      { icon: Megaphone, label: 'Performance Marketing' },
      { icon: Rocket, label: 'Product-Led Growth' },
      { icon: UserCheck, label: 'Customer Acquisition' },
      { icon: MousePointer, label: 'Conversion Optimization' },
      { icon: HeartHandshake, label: 'Retention Strategy' },
      { icon: Mail, label: 'Marketing Automation' },
      { icon: LineChart, label: 'Growth Analytics' },
    ],
  },
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
              <span className="font-mono font-bold text-sm tracking-wider uppercase text-zinc-100 group-hover:text-white transition-colors">
                TACHI TECH <span className="text-zinc-500 font-normal">LTD</span>
              </span>
            </a>
          </div>

          {/* 2. Centered Navigation Menu (Desktop Only) */}
          <div className="hidden md:flex items-center justify-center bg-zinc-900/40 border border-zinc-800/50 rounded-full px-6 py-2 backdrop-blur-sm gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-medium text-zinc-400 hover:text-zinc-100 transition-colors uppercase tracking-wider relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gradient-to-r from-sky-400 to-cyan-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* 3. Right Aligned CTA Container (Desktop) / Mobile Toggle Button */}
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

      {/* 4. Fullscreen Mobile Navigation Menu Overlay */}
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
    <section id="hero" className="relative min-h-screen flex items-center gradient-bg overflow-hidden">
      <AnimatedBackground />
      <div className="container-padding max-w-7xl mx-auto relative z-10 pt-24">
        <div className="max-w-5xl">
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight mb-8">
            <span className="block animate-fade-in-up">Build.</span>
            <span className="block animate-fade-in-up animation-delay-100 gradient-text">Launch.</span>
            <span className="block animate-fade-in-up animation-delay-200">Scale.</span>
          </h1>
          
          {/* Cleaned uniform description paragraph */}
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl leading-relaxed mb-8 animate-fade-in-up animation-delay-300">
            We help ambitious businesses transform ideas into successful digital products through world-class software development, product strategy, and growth marketing.
          </p>

          {/* Pill badge positioned right below the description text */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark text-sky-400 text-sm font-medium mb-10 animate-fade-in-up animation-delay-400">
            <Sparkles className="w-4 h-4" />
            <span>Product Strategy - Engineering - Growth Marketing</span>
          </div>

          <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-500">
            <a href="#cta" className="btn-primary"><Rocket className="w-5 h-5" />Start Your Project</a>
            <a href="#cta" className="btn-secondary"><MessageSquare className="w-5 h-5" />Book a Discovery Call</a>
          </div>
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#trusted" className="text-slate-400 hover:text-white transition-colors"><ChevronRight className="w-8 h-8 rotate-90" /></a>
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

function CTA() {
  return (
    <section id="cta" className="relative gradient-bg section-padding overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-sky-500/20 to-cyan-500/20 rounded-full blur-3xl" />
      </div>
      <div className="container-padding max-w-7xl mx-auto relative z-10">
        <div className="glass-dark rounded-[3rem] p-12 lg:p-20 text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 text-sky-400 text-sm font-medium mb-8"><Sparkles className="w-4 h-4" /><span>Let's Build Together</span></div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">Ready to Build and Scale <span className="gradient-text">Your Next Product?</span></h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">Whether you're launching a startup, modernizing operations, or scaling an existing platform, Tachi Tech is ready to help.</p>
          <p className="text-lg text-sky-400 font-medium mb-10">Let's build something remarkable - and grow it together.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="mailto:hello@tachitech.com" className="btn-primary text-lg"><MessageSquare className="w-5 h-5" />Book a Discovery Call</a>
            <a href="mailto:projects@tachitech.com" className="btn-secondary text-lg"><Rocket className="w-5 h-5" />Start Your Project</a>
          </div>
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
        <About />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
