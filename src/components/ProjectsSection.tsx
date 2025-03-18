import { ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const handleProjectClick = (title: string) => {
    setSelectedProject(title);
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-brand-800 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Explore some of my recent technical projects that showcase my expertise in solution architecture and development.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard 
            title="Decision Management Platform"
            category="Enterprise Architecture"
            description="Decision Management Platform (DMP) business system is the core platform that supports the list of applications, which are used to identify and prevent fraudulent transactions processed through Mastercard."
            image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            onClick={() => handleProjectClick("Decision Management Platform")}
          />
          
          <ProjectCard 
            title="Decision Admin Tool"
            category="Business Rules"
            description="Contributed to design and architecture of Mastercard's Decision Admin tool, streamlining business rule management processes."
            image="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            onClick={() => handleProjectClick("Decision Admin Tool")}
          />
          
          <ProjectCard 
            title="RuleManager Application"
            category="Technical Leadership"
            description="Led development of RuleManager application, receiving High Five Award from Mastercard leadership for exceptional performance."
            image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            onClick={() => handleProjectClick("RuleManager Application")}
          />
          
          <ProjectCard 
            title="The Fraud Center"
            category="Project Leadership"
            description="Led The Fraud Center (TFC) project for Mastercard, conducting business requirement analysis and technical design."
            image="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            onClick={() => handleProjectClick("The Fraud Center")}
          />
          
          <ProjectCard 
            title="Visa Europe Clearing"
            category="Payment Systems"
            description="Worked on Visa Europe Clearing Settlement System, implementing critical payment processing functionality."
            image="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            onClick={() => handleProjectClick("Visa Europe Clearing")}
          />
          
          <div className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-sm border border-gray-100 dark:border-gray-600 flex flex-col items-center justify-center p-8 text-center">
            <h3 className="text-xl font-bold text-brand-800 dark:text-white mb-4">Ready to see more?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Explore my complete portfolio to see the full range of my technical projects and achievements.
            </p>
            <Button className="bg-brand-500 hover:bg-brand-600">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <Dialog open={selectedProject === "Decision Management Platform"} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-brand-800 dark:text-white">Decision Management Platform (DMP)</DialogTitle>
            <DialogDescription className="text-gray-600 dark:text-gray-300 mt-4">
              <div className="space-y-4">
                <p className="font-semibold text-lg">Project Overview:</p>
                <p>Decision Management Platform (DMP) business system is the core platform supports the list of applications, which are used to identify and prevent the fraudulent transactions processed through the Mastercard. Mastercard offers list of applications Rule Manager and List Manager to their customers Banks, where they can prevent and block fraudulent transactions through Business Rules on their Credit/Debit card transactions. These Rules acts as patterns for Mastercard's Artificial Intelligence Fraud products and blocks/alerts the fraudulent transactions.</p>
                
                <p className="mt-4">Decision Management Platform (DMP) is responsible for executing these Fraud products across all the transactions processed through Mastercard. Decision Management Platform (DMP) also supports the internal applications which are used to setup the Mastercard's Fraud products.</p>

                <p className="font-semibold text-lg mt-4">Key Features:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Rule Manager - Business Rules Management</li>
                  <li>List Manager - Fraud List Management</li>
                  <li>Real-time transaction processing</li>
                  <li>Integration with AI/ML fraud detection systems</li>
                  <li>Bank-level customization capabilities</li>
                </ul>

                <p className="font-semibold text-lg mt-4">Technologies Used:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Java/J2EE</li>
                  <li>Spring Framework</li>
                  <li>Microservices Architecture</li>
                  <li>IBM ODM (Operational Decision Manager)</li>
                  <li>RESTful APIs</li>
                </ul>

                <p className="font-semibold text-lg mt-4">Role & Responsibilities:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Led architectural design and implementation</li>
                  <li>Coordinated with bank stakeholders for requirements</li>
                  <li>Managed integration with Mastercard's core systems</li>
                  <li>Ensured high-performance transaction processing</li>
                  <li>Implemented security and compliance measures</li>
                </ul>

                <p className="font-semibold text-lg mt-4">Impact:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Significant reduction in fraudulent transactions</li>
                  <li>Enhanced bank control over fraud prevention</li>
                  <li>Improved transaction processing efficiency</li>
                  <li>Seamless integration with AI fraud detection</li>
                </ul>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <Dialog open={selectedProject === "Decision Admin Tool"} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-brand-800 dark:text-white">Decision Admin Tool</DialogTitle>
            <DialogDescription className="text-gray-600 dark:text-gray-300 mt-4">
              <div className="space-y-4">
                <p className="font-semibold text-lg">Project Overview:</p>
                <p>The Decision Admin Tool is a comprehensive administrative interface designed for Mastercard's business rule management ecosystem. This tool enables business analysts and administrators to efficiently manage and deploy business rules across various fraud prevention and transaction processing systems.</p>

                <p className="font-semibold text-lg mt-4">Key Features:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Rule deployment and versioning management</li>
                  <li>User access control and permissions</li>
                  <li>Rule testing and validation workflows</li>
                  <li>Audit logging and compliance tracking</li>
                  <li>Integration with multiple rule engines</li>
                </ul>

                <p className="font-semibold text-lg mt-4">Technologies Used:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Angular</li>
                  <li>Spring Boot</li>
                  <li>MongoDB</li>
                  <li>Docker</li>
                  <li>Jenkins CI/CD</li>
                </ul>

                <p className="font-semibold text-lg mt-4">Role & Responsibilities:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Designed the system architecture</li>
                  <li>Led the development team</li>
                  <li>Implemented core functionalities</li>
                  <li>Established coding standards</li>
                  <li>Conducted code reviews</li>
                </ul>

                <p className="font-semibold text-lg mt-4">Impact:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>70% reduction in rule deployment time</li>
                  <li>Improved rule management efficiency</li>
                  <li>Enhanced audit compliance</li>
                  <li>Streamlined administrative workflows</li>
                </ul>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <Dialog open={selectedProject === "RuleManager Application"} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-brand-800 dark:text-white">RuleManager Application</DialogTitle>
            <DialogDescription className="text-gray-600 dark:text-gray-300 mt-4">
              <div className="space-y-4">
                <p className="font-semibold text-lg">Project Overview:</p>
                <p>The RuleManager Application is a sophisticated platform that enables financial institutions to create, manage, and execute complex business rules for transaction processing and fraud prevention. This project earned a High Five Award from Mastercard leadership for its exceptional performance and impact.</p>

                <p className="font-semibold text-lg mt-4">Key Features:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Visual rule builder interface</li>
                  <li>Real-time rule execution</li>
                  <li>Performance monitoring dashboard</li>
                  <li>Rule simulation and testing</li>
                  <li>Version control and rollback capabilities</li>
                </ul>

                <p className="font-semibold text-lg mt-4">Technologies Used:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Java/Spring Boot</li>
                  <li>React.js</li>
                  <li>PostgreSQL</li>
                  <li>Redis</li>
                  <li>Kubernetes</li>
                </ul>

                <p className="font-semibold text-lg mt-4">Role & Responsibilities:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Led end-to-end development</li>
                  <li>Designed microservices architecture</li>
                  <li>Implemented core rule engine</li>
                  <li>Managed stakeholder communications</li>
                  <li>Supervised performance optimization</li>
                </ul>

                <p className="font-semibold text-lg mt-4">Impact:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Received High Five Award for excellence</li>
                  <li>40% improvement in rule processing speed</li>
                  <li>Significant reduction in maintenance costs</li>
                  <li>Enhanced user satisfaction scores</li>
                </ul>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <Dialog open={selectedProject === "The Fraud Center"} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-brand-800 dark:text-white">The Fraud Center (TFC)</DialogTitle>
            <DialogDescription className="text-gray-600 dark:text-gray-300 mt-4">
              <div className="space-y-4">
                <p className="font-semibold text-lg">Project Overview:</p>
                <p>The Fraud Center (TFC) is a centralized platform for Mastercard that consolidates fraud detection, prevention, and management capabilities. This system provides real-time monitoring and response to potential fraudulent activities across the global payment network.</p>

                <p className="font-semibold text-lg mt-4">Key Features:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Real-time fraud detection</li>
                  <li>Machine learning-based risk scoring</li>
                  <li>Case management system</li>
                  <li>Automated alert generation</li>
                  <li>Regulatory compliance reporting</li>
                </ul>

                <p className="font-semibold text-lg mt-4">Technologies Used:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Java Enterprise</li>
                  <li>Apache Kafka</li>
                  <li>Elasticsearch</li>
                  <li>TensorFlow</li>
                  <li>AWS Cloud Services</li>
                </ul>

                <p className="font-semibold text-lg mt-4">Role & Responsibilities:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Led technical design and architecture</li>
                  <li>Managed requirements analysis</li>
                  <li>Coordinated with global teams</li>
                  <li>Implemented core fraud detection logic</li>
                  <li>Oversaw system integration</li>
                </ul>

                <p className="font-semibold text-lg mt-4">Impact:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>30% increase in fraud detection rate</li>
                  <li>Reduced false positives by 25%</li>
                  <li>Improved response time to incidents</li>
                  <li>Enhanced regulatory compliance</li>
                </ul>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <Dialog open={selectedProject === "Visa Europe Clearing"} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-brand-800 dark:text-white">Visa Europe Clearing Settlement System</DialogTitle>
            <DialogDescription className="text-gray-600 dark:text-gray-300 mt-4">
              <div className="space-y-4">
                <p className="font-semibold text-lg">Project Overview:</p>
                <p>The Visa Europe Clearing Settlement System is a critical financial infrastructure project that handles the clearing and settlement of payment transactions across the European region. This system ensures accurate and timely processing of inter-bank settlements and maintains the integrity of the payment ecosystem.</p>

                <p className="font-semibold text-lg mt-4">Key Features:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Real-time transaction clearing</li>
                  <li>Multi-currency settlement</li>
                  <li>Automated reconciliation</li>
                  <li>Regulatory reporting</li>
                  <li>Exception handling workflow</li>
                </ul>

                <p className="font-semibold text-lg mt-4">Technologies Used:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Java/J2EE</li>
                  <li>Oracle Database</li>
                  <li>WebSphere MQ</li>
                  <li>SWIFT Integration</li>
                  <li>ISO 8583 Message Format</li>
                </ul>

                <p className="font-semibold text-lg mt-4">Role & Responsibilities:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Implemented core settlement logic</li>
                  <li>Developed reconciliation modules</li>
                  <li>Integrated with banking systems</li>
                  <li>Optimized transaction processing</li>
                  <li>Managed production support</li>
                </ul>

                <p className="font-semibold text-lg mt-4">Impact:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Processed over €1 trillion in transactions</li>
                  <li>99.99% system availability</li>
                  <li>Reduced settlement time by 40%</li>
                  <li>Enhanced transaction visibility</li>
                </ul>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </section>
  );
};

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
  onClick?: () => void;
}

const ProjectCard = ({ title, category, description, image, onClick }: ProjectCardProps) => {
  return (
    <div 
      className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-sm border border-gray-100 dark:border-gray-600 group hover:shadow-md transition-all duration-300 cursor-pointer"
      onClick={onClick}
    >
      <div className="h-48 overflow-hidden relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 right-4">
            <div className="bg-white p-2 rounded-full shadow-md">
              <ExternalLink className="h-5 w-5 text-brand-500" />
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="text-brand-500 text-sm font-medium mb-2">{category}</div>
        <h3 className="text-xl font-bold text-brand-800 dark:text-white mb-2 group-hover:text-brand-500 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectsSection;
