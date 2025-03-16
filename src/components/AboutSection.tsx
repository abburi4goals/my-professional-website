
import { Book, Briefcase, GraduationCap, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-brand-800 mb-6">About Me</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                I'm a passionate professional dedicated to helping individuals and businesses develop strong, authentic personal brands that resonate with their target audience.
              </p>
              <p>
                With expertise in [Your Key Skills], I've successfully guided clients through the process of defining their unique value proposition, creating compelling visual identities, and implementing effective marketing strategies.
              </p>
              <p>
                My approach combines creative design thinking with strategic marketing principles, ensuring that each client's personal brand not only looks professional but also drives meaningful results.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <div className="bg-brand-100 p-3 rounded-full">
                  <Briefcase className="h-5 w-5 text-brand-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-800">Experience</h4>
                  <p className="text-sm text-gray-500">X+ Years</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-brand-100 p-3 rounded-full">
                  <Users className="h-5 w-5 text-brand-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-800">Clients</h4>
                  <p className="text-sm text-gray-500">XX+ Worldwide</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-brand-100 p-3 rounded-full">
                  <GraduationCap className="h-5 w-5 text-brand-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-800">Education</h4>
                  <p className="text-sm text-gray-500">Degree in [Field]</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-brand-100 p-3 rounded-full">
                  <Book className="h-5 w-5 text-brand-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-800">Certifications</h4>
                  <p className="text-sm text-gray-500">[Relevant Certs]</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-brand-800 mb-6">My Expertise</h3>
            
            <div className="space-y-6">
              <ExpertiseCard 
                title="Personal Brand Strategy" 
                description="Developing comprehensive strategies that align with your professional goals and target audience expectations."
                percentage={95}
              />
              
              <ExpertiseCard 
                title="Visual Identity Design" 
                description="Creating cohesive visual elements that effectively communicate your personal brand values and attributes."
                percentage={90}
              />
              
              <ExpertiseCard 
                title="Content Creation" 
                description="Producing engaging content that showcases your expertise and resonates with your audience."
                percentage={85}
              />
              
              <ExpertiseCard 
                title="Digital Marketing" 
                description="Implementing targeted campaigns to increase visibility and engagement with your personal brand."
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
