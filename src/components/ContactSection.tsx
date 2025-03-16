
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Instagram, Github } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-brand-800 mb-4">Get In Touch</h2>
          <p className="text-gray-600">
            Interested in working together? Let's discuss how I can help elevate your personal brand.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8">
            <h3 className="text-2xl font-bold text-brand-800 mb-6">Send Me a Message</h3>
            
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">
                    Your Name
                  </label>
                  <Input 
                    id="name" 
                    placeholder="John Doe"
                    className="border-gray-200 focus:border-brand-500 focus:ring-brand-500"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <Input 
                    id="email" 
                    type="email"
                    placeholder="john@example.com"
                    className="border-gray-200 focus:border-brand-500 focus:ring-brand-500"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                  Subject
                </label>
                <Input 
                  id="subject" 
                  placeholder="How can I help you?"
                  className="border-gray-200 focus:border-brand-500 focus:ring-brand-500"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">
                  Your Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Tell me about your project..."
                  className="min-h-[150px] border-gray-200 focus:border-brand-500 focus:ring-brand-500"
                />
              </div>
              
              <Button className="w-full bg-brand-500 hover:bg-brand-600 font-medium">
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-brand-800 mb-6">Contact Information</h3>
              
              <div className="space-y-5">
                <ContactInfo 
                  icon={<Mail className="h-5 w-5 text-brand-500" />}
                  title="Email"
                  content="contact@yourbrand.com"
                  link="mailto:contact@yourbrand.com"
                />
                
                <ContactInfo 
                  icon={<Phone className="h-5 w-5 text-brand-500" />}
                  title="Phone"
                  content="+1 (555) 123-4567"
                  link="tel:+15551234567"
                />
                
                <ContactInfo 
                  icon={<MapPin className="h-5 w-5 text-brand-500" />}
                  title="Location"
                  content="San Francisco, CA"
                  link="#"
                />
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-brand-800 mb-6">Follow Me</h3>
              
              <div className="flex space-x-4">
                <SocialLink icon={<Linkedin className="h-5 w-5" />} href="#" label="LinkedIn" />
                <SocialLink icon={<Twitter className="h-5 w-5" />} href="#" label="Twitter" />
                <SocialLink icon={<Instagram className="h-5 w-5" />} href="#" label="Instagram" />
                <SocialLink icon={<Github className="h-5 w-5" />} href="#" label="GitHub" />
              </div>
            </div>
            
            <div className="bg-brand-50 rounded-lg p-8 border border-brand-100">
              <h4 className="font-bold text-brand-800 mb-4">Available for Freelance Projects</h4>
              <p className="text-gray-600 mb-6">
                I'm currently accepting new projects and would love to hear about yours. Let's create something amazing together.
              </p>
              <Button variant="outline" className="border-brand-200 text-brand-700 hover:bg-brand-100">
                View My Schedule
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  link: string;
}

const ContactInfo = ({ icon, title, content, link }: ContactInfoProps) => {
  return (
    <div className="flex items-start space-x-4">
      <div className="bg-brand-100 p-3 rounded-full">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-brand-800 mb-1">{title}</h4>
        <a 
          href={link} 
          className="text-gray-600 hover:text-brand-500 transition-colors duration-200"
        >
          {content}
        </a>
      </div>
    </div>
  );
};

interface SocialLinkProps {
  icon: React.ReactNode;
  href: string;
  label: string;
}

const SocialLink = ({ icon, href, label }: SocialLinkProps) => {
  return (
    <a 
      href={href} 
      aria-label={label}
      className="bg-white p-3 rounded-full border border-gray-200 text-gray-600 hover:text-white hover:bg-brand-500 hover:border-brand-500 transition-all duration-200 shadow-sm"
    >
      {icon}
    </a>
  );
};

export default ContactSection;
