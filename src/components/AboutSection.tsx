
import { Book, Briefcase, GraduationCap, Users, Award, Code, Server, Database } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-brand-800 mb-6">About Me</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                I'm a passionate Technical Solution Architect with over 15 years of experience in the IT industry, currently working for Ciber & Intelligent Solutions (CIBS) unit of Mastercard through Wipro Digital.
              </p>
              <p>
                With expertise in Java/J2EE Technologies, Microservices Architecture, and Business Rules Management Systems, I've successfully guided projects through the process of defining architectural solutions for various clients.
              </p>
              <p>
                My approach combines practical development experience with architectural vision, ensuring that each solution not only meets technical requirements but also drives meaningful business results.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <div className="bg-brand-100 p-3 rounded-full">
                  <Briefcase className="h-5 w-5 text-brand-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-800">Experience</h4>
                  <p className="text-sm text-gray-500">15+ Years</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-brand-100 p-3 rounded-full">
                  <Users className="h-5 w-5 text-brand-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-800">Clients</h4>
                  <p className="text-sm text-gray-500">Mastercard, Visa, USAA</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-brand-100 p-3 rounded-full">
                  <GraduationCap className="h-5 w-5 text-brand-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-800">Education</h4>
                  <p className="text-sm text-gray-500">B.Tech in CS & IT</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-brand-100 p-3 rounded-full">
                  <Award className="h-5 w-5 text-brand-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-800">Certifications</h4>
                  <p className="text-sm text-gray-500">AWS, SCJP, ODM</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-brand-800 mb-6">Technical Expertise</h3>
            
            <div className="space-y-6">
              <ExpertiseCard 
                title="Java/J2EE & Microservices" 
                description="Strong development experience with Java frameworks, REST services, Spring, Hibernate/JPA, and microservices architecture."
                percentage={95}
              />
              
              <ExpertiseCard 
                title="Business Rules Management" 
                description="Expert in designing solutions using IBM Operational Decision Manager (ODM) and implementing business rules systems."
                percentage={90}
              />
              
              <ExpertiseCard 
                title="Distributed Systems" 
                description="Skilled in designing solutions for distributed computing/messaging using Gemfire IMDG and Kafka."
                percentage={85}
              />
              
              <ExpertiseCard 
                title="Cloud Infrastructure" 
                description="Strong conceptual understanding of AWS services and architecting highly available systems with load balancing."
                percentage={80}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ExpertiseCardProps {
  title: string;
  description: string;
  percentage: number;
}

const ExpertiseCard = ({ title, description, percentage }: ExpertiseCardProps) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
      <h4 className="font-semibold text-brand-800 mb-2">{title}</h4>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div 
          className="bg-gradient-to-r from-brand-400 to-brand-600 h-2.5 rounded-full" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <div className="flex justify-end mt-1">
        <span className="text-xs font-medium text-gray-500">{percentage}%</span>
      </div>
    </div>
  );
};

export default AboutSection;
