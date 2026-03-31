import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";

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

      {/* Testimonials & Stats */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
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
    </div>
  );
}
