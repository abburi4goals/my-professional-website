
import React from "react";
import { Badge } from "@/components/ui/badge";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-brand-800 mb-4">Experience & Education</h2>
          <p className="text-gray-600">
            My professional journey and educational background that have shaped my expertise in personal branding.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-brand-800 mb-8 flex items-center">
              <span className="bg-brand-100 p-2 rounded-lg mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              Professional Experience
            </h3>
            
            <div className="space-y-8">
              <TimelineItem 
                years="2020 - Present"
                title="Senior Brand Strategist"
                company="Your Current Company"
                description="Lead personal branding initiatives for high-profile clients, developing comprehensive strategies and overseeing implementation across all platforms."
                skills={["Brand Strategy", "Marketing", "Client Relations"]}
              />
              
              <TimelineItem 
                years="2017 - 2020"
                title="Brand Consultant"
                company="Previous Company"
                description="Consulted with professionals and small businesses on establishing effective personal and corporate brands. Created tailored marketing materials and content strategies."
                skills={["Consulting", "Content Strategy", "Design Direction"]}
              />
              
              <TimelineItem 
                years="2015 - 2017"
                title="Marketing Specialist"
                company="Early Career Company"
                description="Developed and executed marketing campaigns, with a focus on personal branding for company executives and thought leaders."
                skills={["Campaign Management", "Social Media", "Content Creation"]}
              />
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-brand-800 mb-8 flex items-center">
              <span className="bg-brand-100 p-2 rounded-lg mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </span>
              Education & Certifications
            </h3>
            
            <div className="space-y-8">
              <TimelineItem 
                years="2012 - 2015"
                title="Master's Degree in Marketing"
                company="University Name"
                description="Focused on brand development and digital marketing strategies, with thesis on personal branding in the digital age."
                skills={["Brand Theory", "Digital Marketing", "Research Methods"]}
              />
              
              <TimelineItem 
                years="2008 - 2012"
                title="Bachelor's Degree in Communications"
                company="University Name"
                description="Studied communications with emphasis on public relations and marketing principles."
                skills={["Communications", "Public Relations", "Marketing Fundamentals"]}
              />
              
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                <h4 className="font-bold text-brand-800 mb-4">Professional Certifications</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 rounded-full bg-brand-500"></div>
                    <span className="text-gray-600 text-sm">Certified Brand Strategist</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 rounded-full bg-brand-500"></div>
                    <span className="text-gray-600 text-sm">Digital Marketing Professional</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 rounded-full bg-brand-500"></div>
                    <span className="text-gray-600 text-sm">Content Strategy Certification</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 rounded-full bg-brand-500"></div>
                    <span className="text-gray-600 text-sm">Social Media Management</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface TimelineItemProps {
  years: string;
  title: string;
  company: string;
  description: string;
  skills: string[];
}

const TimelineItem = ({ years, title, company, description, skills }: TimelineItemProps) => {
  return (
    <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-gray-200">
      <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-brand-500 -translate-x-1/2"></div>
      <div className="text-gray-500 text-sm font-medium mb-1">{years}</div>
      <h4 className="text-xl font-bold text-brand-800 mb-1">{title}</h4>
      <div className="text-brand-500 text-sm mb-3">{company}</div>
      <p className="text-gray-600 mb-3 text-sm">{description}</p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge key={index} variant="secondary" className="bg-brand-50 text-brand-600 hover:bg-brand-100">
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
