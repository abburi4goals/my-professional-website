import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
const HeroSection = () => {
  return <section className="min-h-screen flex items-center relative overflow-hidden pt-16">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-950 z-0" />
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#4b5563_1px,transparent_1px)] bg-[length:20px_20px] z-0" />
      
      <div className="container mx-auto px-4 sm:px-6 z-10 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6 animate-fade-in">
            <p className="text-brand-500 font-medium mb-2 animate-fade-in animate-delay-100">Hi there, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-800 dark:text-white animate-fade-in animate-delay-200">
              Mohan Kishore Abburi
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 font-light animate-fade-in animate-delay-300">
              Technical Solution Architect
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-xl text-lg animate-fade-in animate-delay-400">Experienced Technical Solution Architect with 16+ years in the IT industry. Currently working for Artificial Intelligence and Decision Processing (AI & DP) unit of Mastercard through Wipro Digital, with expertise in Java/J2EE, Microservices, and Business Rules Management Systems.</p>
            <div className="flex flex-wrap gap-4 pt-6 animate-fade-in animate-delay-500">
              <Button className="bg-brand-500 hover:bg-brand-600 dark:bg-brand-600 dark:hover:bg-brand-500">
                View My Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-brand-200 text-brand-700 dark:border-gray-700 dark:text-gray-200">
                Contact Me
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center animate-fade-in animate-delay-300">
            <div className="relative">
              {/* Main image with profile */}
              <div className="rounded-2xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl w-64 h-64 sm:w-80 sm:h-80 relative z-20">
                <img 
                  src="/images/profile.jpg"
                  alt="Mohan Kishore Abburi"
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400"%3E%3Crect width="400" height="400" fill="%231e40af"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="120" fill="%23ffffff"%3EMA%3C/text%3E%3C/svg%3E';
                  }}
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full border-4 border-brand-200 dark:border-gray-700 rounded-2xl -z-10" style={{
              width: "calc(100% - 20px)",
              height: "calc(100% - 20px)"
            }} />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-brand-800 dark:bg-brand-400 rounded-full z-10" />
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-brand-300 dark:bg-brand-600 rounded-full z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;