import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
const HeroSection = () => {
  return <section className="min-h-screen flex items-center relative overflow-hidden pt-16">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50 z-0" />
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-[length:20px_20px] z-0" />
      
      <div className="container mx-auto px-4 sm:px-6 z-10 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6 animate-fade-in">
            <p className="text-brand-500 font-medium mb-2 animate-fade-in animate-delay-100">Hi there, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-800 animate-fade-in animate-delay-200">
              Mohan Kishore Abburi
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 font-light animate-fade-in animate-delay-300">
              Technical Solution Architect
            </h2>
            <p className="text-gray-600 max-w-xl text-lg animate-fade-in animate-delay-400">Experienced Technical Solution Architect with advanced programming skills and a proven history of working in the Information technology and services industry. Over 16 years of experience with leading financial institutions like Mastercard, Visa, Citi, Barclays, and USAA.</p>
            <div className="flex flex-wrap gap-4 pt-6 animate-fade-in animate-delay-500">
              <Button className="bg-brand-500 hover:bg-brand-600">
                View My Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-brand-200 text-brand-700">
                Contact Me
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center animate-fade-in animate-delay-300">
            <div className="relative">
              {/* Main image with profile */}
              <div className="rounded-2xl overflow-hidden border-4 border-white shadow-xl w-64 h-64 sm:w-80 sm:h-80 relative z-20">
                <div className="bg-gradient-to-br from-brand-400 to-brand-600 h-full w-full flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">MA</span>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full border-4 border-brand-200 rounded-2xl -z-10" style={{
              width: "calc(100% - 20px)",
              height: "calc(100% - 20px)"
            }} />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-brand-800 rounded-full z-10" />
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-brand-300 rounded-full z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;