
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Instagram, Github } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-brand-800 dark:text-white mb-4">Get In Touch</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Interested in working together? Let's discuss how I can help with your technical solution needs.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 p-8">
            <h3 className="text-2xl font-bold text-brand-800 dark:text-white mb-6">Send Me a Message</h3>
            
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Your Name
                  </label>
                  <Input 
                    id="name" 
                    placeholder="John Doe"
                    className="border-gray-200 dark:border-gray-700 focus:border-brand-500 focus:ring-brand-500"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email Address
                  </label>
                  <Input 
                    id="email" 
                    type="email"
                    placeholder="john@example.com"
                    className="border-gray-200 dark:border-gray-700 focus:border-brand-500 focus:ring-brand-500"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Subject
                </label>
                <Input 
                  id="subject" 
                  placeholder="How can I help you?"
                  className="border-gray-200 dark:border-gray-700 focus:border-brand-500 focus:ring-brand-500"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Your Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Tell me about your project..."
                  className="min-h-[150px] border-gray-200 dark:border-gray-700 focus:border-brand-500 focus:ring-brand-500"
                />
              </div>
              
              <Button className="w-full bg-brand-500 hover:bg-brand-600 dark:bg-brand-600 dark:hover:bg-brand-500 font-medium">
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-brand-800 dark:text-white mb-6">Contact Information</h3>
              
              <div className="space-y-5">
                <ContactInfo 
                  icon={<Mail className="h-5 w-5 text-brand-500" />}
                  title="Email"
                  content="mohankishore.abburi@wipro.com"
                  link="mailto:mohankishore.abburi@wipro.com"
                />
                
                <ContactInfo 
                  icon={<Phone className="h-5 w-5 text-brand-500" />}
                  title="Phone"
                  content="(636) 312-5424"
                  link="tel:+16363125424"
                />
                
                <ContactInfo 
                  icon={<MapPin className="h-5 w-5 text-brand-500" />}
                  title="Location"
                  content="O'Fallon, MO – USA"
                  link="#"
                />
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-brand-800 dark:text-white mb-6">Professional Profile</h3>
              
              <div className="flex space-x-4">
                <SocialLink icon={<Linkedin className="h-5 w-5" />} href="https://www.linkedin.com/in/mohan-abburi" label="LinkedIn" />
                <SocialLink icon={<Github className="h-5 w-5" />} href="#" label="GitHub" />
              </div>
            </div>
            
            <div className="bg-brand-50 dark:bg-gray-700 rounded-lg p-8 border border-brand-100 dark:border-gray-600">
              <h4 className="font-bold text-brand-800 dark:text-white mb-4">Current Status</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                I'm currently working with Wipro Digital for Mastercard's CIBS unit. I specialize in designing technical solutions and architecture for complex business needs.
              </p>
              <div className="flex items-center space-x-2">
                <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">H1B Visa Status</span>
              </div>
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
      <div className="bg-brand-100 dark:bg-gray-700 p-3 rounded-full">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-brand-800 dark:text-white mb-1">{title}</h4>
        <a 
          href={link} 
          className="text-gray-600 dark:text-gray-300 hover:text-brand-500 dark:hover:text-brand-400 transition-colors duration-200"
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
      className="bg-white dark:bg-gray-900 p-3 rounded-full border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:text-white hover:bg-brand-500 hover:border-brand-500 dark:hover:border-brand-500 transition-all duration-200 shadow-sm"
    >
      {icon}
    </a>
  );
};

export default ContactSection;
