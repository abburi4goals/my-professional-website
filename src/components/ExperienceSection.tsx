import React from "react";
import { Badge } from "@/components/ui/badge";
const ExperienceSection = () => {
  return <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-brand-800 dark:text-white mb-4">Experience & Education</h2>
          <p className="text-gray-600 dark:text-gray-300">
            My professional journey and educational background that have shaped my expertise in technical solution architecture.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-brand-800 dark:text-white mb-8 flex items-center">
              <span className="bg-brand-100 dark:bg-gray-800 p-2 rounded-lg mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-600 dark:text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              Professional Experience
            </h3>
            
            <div className="space-y-8">
              <TimelineItem years="Feb 2018 - Present" title="Technical Solution Architect" company="Wipro Digital, O'Fallon, MO" description="Working for Artificial Intelligence and Decision Processing (AI & DP) unit of Mastercard. Analyzing business systems, preparing specifications, and designing technical architecture for new requirements." skills={["Solution Architecture", "Java/J2EE", "Microservices", "ODM"]} />
              
              <TimelineItem years="Jun 2013 - Jan 2018" title="Technical Leader" company="Wipro Limited, Hyderabad, India" description="Led The Fraud Center (TFC) project for Mastercard. Conducted business requirement analysis, technical design, and provided guidance for backend web services development." skills={["Technical Leadership", "Java", "REST Services", "Performance Tuning"]} />
              
              <TimelineItem years="Mar 2007 - Jan 2013" title="IT Analyst" company="TATA Consultancy Services, Chennai, India" description="Worked on multiple projects including Visa Europe Clearing Settlement System, Barclays Bank Receivables Finance Program, and USAA Bank Consumer Loan Acquisition." skills={["Development", "Business Rules", "BPM", "Integration"]} />
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-brand-800 dark:text-white mb-8 flex items-center">
              <span className="bg-brand-100 dark:bg-gray-800 p-2 rounded-lg mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-600 dark:text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </span>
              Education & Certifications
            </h3>
            
            <div className="space-y-8">
              <TimelineItem years="2002 - 2006" title="B.Tech in Computer Science and Information Technology" company="JNTU University, Hyderabad" description="Undergraduate degree focused on computer science fundamentals and information technology applications." skills={["Computer Science", "Information Technology", "Software Engineering"]} />
              
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-100 dark:border-gray-700">
                <h4 className="font-bold text-brand-800 dark:text-white mb-4">Technical Certifications</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 rounded-full bg-brand-500"></div>
                    <span className="text-gray-600 dark:text-gray-300 text-sm">Sun Certified Java Programmer (SCJP 1.5)</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 rounded-full bg-brand-500"></div>
                    <span className="text-gray-600 dark:text-gray-300 text-sm">Sun Certified Web Component Developer (SCWCD 5)</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 rounded-full bg-brand-500"></div>
                    <span className="text-gray-600 dark:text-gray-300 text-sm">IBM ODM Advanced v8.7 Application Development</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 rounded-full bg-brand-500"></div>
                    <span className="text-gray-600 dark:text-gray-300 text-sm">AWS Certified Solution Architect – Associate</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-100 dark:border-gray-700">
                <h4 className="font-bold text-brand-800 dark:text-white mb-4">Key Achievements</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <div className="h-2 w-2 rounded-full bg-brand-500 mt-2"></div>
                    <span className="text-gray-600 dark:text-gray-300 text-sm">Listed as "Honored Listee" in "Marquis Who's who"</span>
                  </div>
                   <div className="flex items-start space-x-2">
                   <div className="h-2 w-2 rounded-full bg-brand-500 mt-2"></div>
                   <span className="text-gray-600 dark:text-gray-300 text-sm">Designed and implemented Mastercard's Cyberattacks prevention Product SafetyNet</span>
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <div className="h-2 w-2 rounded-full bg-brand-500 mt-2"></div>
                    <span className="text-gray-600 dark:text-gray-300 text-sm">Contributed to design and architecture of Mastercard's Decision Admin tool</span>
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <div className="h-2 w-2 rounded-full bg-brand-500 mt-2"></div>
                    <span className="text-gray-600 dark:text-gray-300 text-sm">High Five Award from Mastercard leadership for work on RuleManager application</span>
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <div className="h-2 w-2 rounded-full bg-brand-500 mt-2"></div>
                    <span className="text-gray-600 dark:text-gray-300 text-sm">STAR award for quick learning on USAA Bank project</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
interface TimelineItemProps {
  years: string;
  title: string;
  company: string;
  description: string;
  skills: string[];
}
const TimelineItem = ({
  years,
  title,
  company,
  description,
  skills
}: TimelineItemProps) => {
  return <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-gray-200 dark:before:bg-gray-700">
      <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-brand-500 -translate-x-1/2"></div>
      <div className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">{years}</div>
      <h4 className="text-xl font-bold text-brand-800 dark:text-white mb-1">{title}</h4>
      <div className="text-brand-500 text-sm mb-3">{company}</div>
      <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm">{description}</p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => <Badge key={index} variant="secondary" className="bg-brand-50 text-brand-600 hover:bg-brand-100 dark:bg-gray-700 dark:text-brand-400 dark:hover:bg-gray-600">
            {skill}
          </Badge>)}
      </div>
    </div>;
};
export default ExperienceSection;
