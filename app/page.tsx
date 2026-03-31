import Image from "next/image";
import { ArrowRight, ChevronDown, ArrowUpRight, Shield, Zap, Globe, Layers, BarChart3 } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-brand selection:text-black overflow-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 lg:px-24 bg-black/50 backdrop-blur-md border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-brand rounded-sm"></div>
          <span className="text-xl font-bold tracking-tight">Setrex.</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <a href="#" className="flex items-center gap-1 text-white hover:text-brand transition-colors">
            Home <ChevronDown className="w-4 h-4 opacity-70" />
          </a>
          <a href="#" className="hover:text-white transition-colors">About us</a>
          <a href="#" className="hover:text-white transition-colors">Features</a>
          <a href="#" className="hover:text-white transition-colors">Pricing</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
          <a href="#" className="flex items-center gap-1 hover:text-white transition-colors">
            Pages <ChevronDown className="w-4 h-4 opacity-70" />
          </a>
        </div>

        <div>
          <a href="#" className="px-6 py-2.5 bg-white text-black text-sm font-semibold rounded-full hover:bg-gray-200 transition-colors">
            Sign in
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 flex flex-col items-center text-center">
        {/* Planet Background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] md:w-[1200px] md:h-[1200px] opacity-40 pointer-events-none -z-10">
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/20 to-transparent blur-[100px]"></div>
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full border border-white/10 bg-gradient-to-b from-white/5 to-transparent"></div>
          {/* Using a placeholder for the planet texture */}
          <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full overflow-hidden mask-image-b">
             <Image 
                src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=1000&auto=format&fit=crop" 
                alt="Planet" 
                fill 
                className="object-cover opacity-50 mix-blend-screen"
                referrerPolicy="no-referrer"
                priority
             />
          </div>
          {/* Stars */}
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at center, white 1px, transparent 1px)', backgroundSize: '100px 100px', opacity: 0.1 }}></div>
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
          <div className="w-1.5 h-1.5 rounded-full bg-brand"></div>
          <span className="text-xs md:text-sm font-medium text-gray-300">Introducing Money manengement website</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-[80px] font-bold tracking-tight leading-[1.1] max-w-4xl mb-6">
          Turn your big idea into <br className="hidden md:block" /> a stunning website
        </h1>

        <p className="text-gray-400 text-base md:text-lg max-w-2xl mb-10 leading-relaxed">
          Fintech is its potential to promote financial inclusion. In many parts of the world, millions of people lack access to traditional banking services.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a href="#" className="flex items-center gap-2 px-8 py-4 bg-brand text-black font-semibold rounded-full hover:bg-[#c2eb35] transition-colors">
            <ArrowRight className="w-5 h-5" />
            Get Started Now
          </a>
          <a href="#" className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors">
            See Pricing
          </a>
        </div>
      </section>

      {/* Logo Cloud */}
      <section className="py-12 border-t border-white/5">
        <p className="text-center text-sm text-gray-500 mb-8">Partnering with the world&apos;s leading enterprises</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Placeholder Logos */}
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center">
                <div className="w-2 h-2 bg-current rounded-full"></div>
              </div>
              <span className="text-xl font-bold tracking-tighter">Logoipsum</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services / Features Bento Grid */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto border-t border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-2xl leading-[1.1]">
            Elevate your digital presence with our core services
          </h2>
          <p className="text-gray-400 max-w-sm text-lg">
            We combine strategy, design, and technology to build scalable solutions that drive growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Service 1 */}
          <div className="group p-8 md:p-10 rounded-[32px] bg-card border border-card-border hover:border-brand/50 transition-colors relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand/10 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <Layers className="w-10 h-10 text-brand mb-8" />
            <h3 className="text-2xl font-bold mb-4">Digital Strategy</h3>
            <p className="text-gray-400 leading-relaxed mb-8">
              We help you define your digital roadmap, identifying opportunities for growth and innovation.
            </p>
            <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-white group-hover:text-brand transition-colors">
              Learn more <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Service 2 */}
          <div className="group p-8 md:p-10 rounded-[32px] bg-card border border-card-border hover:border-brand/50 transition-colors relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand/10 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <Globe className="w-10 h-10 text-brand mb-8" />
            <h3 className="text-2xl font-bold mb-4">Web Development</h3>
            <p className="text-gray-400 leading-relaxed mb-8">
              Building robust, scalable, and high-performance web applications tailored to your needs.
            </p>
            <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-white group-hover:text-brand transition-colors">
              Learn more <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Service 3 */}
          <div className="group p-8 md:p-10 rounded-[32px] bg-card border border-card-border hover:border-brand/50 transition-colors relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand/10 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <BarChart3 className="w-10 h-10 text-brand mb-8" />
            <h3 className="text-2xl font-bold mb-4">Data Analytics</h3>
            <p className="text-gray-400 leading-relaxed mb-8">
              Transform your raw data into actionable insights with our advanced analytics solutions.
            </p>
            <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-white group-hover:text-brand transition-colors">
              Learn more <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Feature Highlight (Split Layout) */}
      <section className="py-24 border-t border-white/5">
        <div className="flex flex-col lg:flex-row items-center gap-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
              <Shield className="w-4 h-4 text-brand" />
              <span className="text-xs md:text-sm font-medium text-gray-300">Bank-grade Security</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
              Secure infrastructure for your peace of mind
            </h2>
            
            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
              Our platform is built with security at its core. We employ industry-leading encryption and compliance standards to ensure your data is always protected.
            </p>

            <ul className="space-y-4">
              {['End-to-end encryption', 'SOC2 Type II Certified', '24/7 Threat monitoring'].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand/10 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-brand"></div>
                  </div>
                  <span className="text-gray-300 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1 w-full relative aspect-square md:aspect-[4/3] rounded-[40px] overflow-hidden border border-white/10 group">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>
            <Image 
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop" 
              alt="Secure Infrastructure" 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Testimonials & Stats */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto border-t border-white/5">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight">
          Supported by many <br /> companies around the world
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Testimonial Card */}
          <div className="lg:col-span-7 bg-card border border-card-border rounded-[32px] p-8 md:p-12 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            <div>
              <div className="inline-block px-4 py-1.5 bg-brand text-black text-xs font-bold rounded-md mb-8">
                CEO&apos;s Words
              </div>
              
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-12">
                &quot;Working with you was seamless from start to finish. The final design exceeded our expectations. Your attention to detail and ability to adaptable was outstanding throughout the entire process to the world.&quot;
              </p>
            </div>

            <div className="flex items-center justify-between mt-auto">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden relative border border-white/10">
                  <Image 
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop" 
                    alt="Emily R" 
                    fill 
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-bold">Emily R</h4>
                  <p className="text-sm text-gray-500">Co Founder of Metrilo</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  <div className="w-3 h-3 bg-brand rounded-sm transform rotate-45"></div>
                  <div className="w-3 h-3 bg-brand rounded-sm transform rotate-45"></div>
                </div>
                <span className="text-xl font-bold tracking-tight">Metrilo</span>
              </div>
            </div>
            
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-gray-600 font-medium">
              Noah Ramirez
            </div>
          </div>

          {/* Stats Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Stat 1 */}
            <div className="bg-card border border-card-border rounded-[32px] p-8 md:p-10 flex flex-col justify-between flex-1 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-6xl md:text-7xl font-bold tracking-tighter">15+</h3>
                <div className="px-3 py-1.5 bg-[#E5F5E0] text-black text-xs font-bold rounded-md">
                  Years of experiences
                </div>
              </div>
              
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                Delivering timeless, functional spaces through innovation, precision, and client-focused design excellence.
              </p>
            </div>

            {/* Stat 2 */}
            <div className="bg-card border border-card-border rounded-[32px] p-8 md:p-10 flex flex-col justify-between flex-1 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-6xl md:text-7xl font-bold tracking-tighter">98%</h3>
                <div className="px-3 py-1.5 bg-[#E5F5E0] text-black text-xs font-bold rounded-md">
                  Client satisfaction rate
                </div>
              </div>
              
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                We pride ourselves on delivering excellence, reflected in the high satisfaction of every client.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto border-t border-white/5">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">Simple, transparent pricing</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Choose the perfect plan for your business needs. No hidden fees.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Starter Plan */}
          <div className="bg-card border border-card-border rounded-[40px] p-8 md:p-10 flex flex-col">
            <h3 className="text-2xl font-bold mb-2">Starter</h3>
            <p className="text-gray-400 mb-8">Perfect for small projects and individuals.</p>
            <div className="mb-8">
              <span className="text-5xl font-bold tracking-tighter">$49</span>
              <span className="text-gray-500">/mo</span>
            </div>
            <ul className="space-y-4 mb-10 flex-1">
              {['Up to 5 Projects', 'Basic Analytics', '24/7 Email Support', '1GB Storage'].map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                  </div>
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
            <a href="#" className="w-full py-4 bg-white/5 border border-white/10 text-white text-center font-semibold rounded-full hover:bg-white/10 transition-colors">
              Get Started
            </a>
          </div>

          {/* Professional Plan (Highlighted) */}
          <div className="bg-card border border-brand/50 rounded-[40px] p-8 md:p-10 flex flex-col relative overflow-hidden transform md:-translate-y-4 shadow-[0_0_40px_rgba(212,255,62,0.1)]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand/20 blur-[80px] rounded-full pointer-events-none"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand text-black text-xs font-bold rounded-b-lg">
              MOST POPULAR
            </div>
            
            <h3 className="text-2xl font-bold mb-2 mt-4">Professional</h3>
            <p className="text-gray-400 mb-8">Ideal for growing teams and businesses.</p>
            <div className="mb-8">
              <span className="text-5xl font-bold tracking-tighter text-brand">$99</span>
              <span className="text-gray-500">/mo</span>
            </div>
            <ul className="space-y-4 mb-10 flex-1 relative z-10">
              {['Unlimited Projects', 'Advanced Analytics', 'Priority Support', '100GB Storage', 'Custom Domain'].map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand/20 flex items-center justify-center shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand"></div>
                  </div>
                  <span className="text-white font-medium">{feature}</span>
                </li>
              ))}
            </ul>
            <a href="#" className="w-full py-4 bg-brand text-black text-center font-bold rounded-full hover:bg-[#c2eb35] transition-colors relative z-10">
              Get Started Now
            </a>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-card border border-card-border rounded-[40px] p-8 md:p-10 flex flex-col">
            <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
            <p className="text-gray-400 mb-8">For large scale organizations and needs.</p>
            <div className="mb-8">
              <span className="text-5xl font-bold tracking-tighter">$199</span>
              <span className="text-gray-500">/mo</span>
            </div>
            <ul className="space-y-4 mb-10 flex-1">
              {['Everything in Pro', 'Dedicated Account Manager', 'Custom Integrations', 'Unlimited Storage', 'SLA'].map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                  </div>
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
            <a href="#" className="w-full py-4 bg-white/5 border border-white/10 text-white text-center font-semibold rounded-full hover:bg-white/10 transition-colors">
              Contact Sales
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-3xl mx-auto border-t border-white/5">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Frequently asked questions</h2>
          <p className="text-gray-400 text-lg">Everything you need to know about the product and billing.</p>
        </div>

        <div className="space-y-4">
          {[
            {
              q: "Is there a free trial available?",
              a: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
            },
            {
              q: "Can I change my plan later?",
              a: "Absolutely. You can upgrade or downgrade your plan at any time. Prorated charges will be applied automatically."
            },
            {
              q: "What is your cancellation policy?",
              a: "We understand that things change. You can cancel your plan at any time and we'll refund you prorated for the rest of the month."
            },
            {
              q: "How does billing work?",
              a: "We offer both monthly and annual billing options. Annual plans come with a 20% discount. We accept all major credit cards."
            }
          ].map((faq, idx) => (
            <details key={idx} className="group bg-card border border-card-border rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between p-6 md:p-8 cursor-pointer list-none">
                <h3 className="text-lg font-bold pr-4">{faq.q}</h3>
                <span className="relative flex shrink-0 items-center justify-center w-8 h-8 rounded-full bg-white/5 group-open:bg-brand transition-colors duration-300">
                  <div className="absolute w-3 h-[2px] bg-white group-open:bg-black transition-colors duration-300"></div>
                  <div className="absolute w-[2px] h-3 bg-white group-open:bg-black group-open:rotate-90 transition-all duration-300"></div>
                </span>
              </summary>
              <div className="px-6 md:px-8 pb-6 md:pb-8 text-gray-400 leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Massive CTA Section */}
      <section className="py-32 px-6 relative overflow-hidden border-t border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/20 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
          <Zap className="w-12 h-12 text-brand mb-8" />
          <h2 className="text-6xl md:text-8xl lg:text-[100px] font-bold tracking-tighter leading-[0.9] mb-8">
            Ready to scale <br /> your business?
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-12">
            Join hundreds of forward-thinking companies building the future of finance and technology with Setrex.
          </p>
          <a href="#" className="flex items-center gap-2 px-10 py-5 bg-brand text-black text-lg font-bold rounded-full hover:bg-[#c2eb35] hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(212,255,62,0.3)]">
            Start your journey <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 lg:px-24 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-brand rounded-sm"></div>
            <span className="text-2xl font-bold tracking-tight">Setrex.</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            <a href="#" className="hover:text-white transition-colors">Careers</a>
          </div>
          
          <div className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Setrex. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
