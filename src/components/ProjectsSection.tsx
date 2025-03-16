
import { ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-brand-800 mb-4">Featured Projects</h2>
          <p className="text-gray-600">
            Explore some of my recent branding projects that showcase my expertise and approach to 
            building powerful personal brands.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard 
            title="Executive Rebranding"
            category="Personal Branding"
            description="Complete personal brand overhaul for a C-level executive transitioning to a new industry."
            image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          />
          
          <ProjectCard 
            title="Author Platform"
            category="Brand Strategy"
            description="Developed a comprehensive brand strategy and online platform for a best-selling author."
            image="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          />
          
          <ProjectCard 
            title="Digital Entrepreneur"
            category="Visual Identity"
            description="Created a distinctive visual identity system for a prominent digital entrepreneur."
            image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          />
          
          <ProjectCard 
            title="Influencer Strategy"
            category="Content Strategy"
            description="Developed content strategy and personal brand guidelines for a growing social media influencer."
            image="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          />
          
          <ProjectCard 
            title="Professional Athlete"
            category="Brand Development"
            description="Comprehensive personal brand development for an athlete looking to expand their career opportunities."
            image="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          />
          
          <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 flex flex-col items-center justify-center p-8 text-center">
            <h3 className="text-xl font-bold text-brand-800 mb-4">Ready to see more?</h3>
            <p className="text-gray-600 mb-6">
              Explore my complete portfolio to see the full range of my branding projects.
            </p>
            <Button className="bg-brand-500 hover:bg-brand-600">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
}

const ProjectCard = ({ title, category, description, image }: ProjectCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 group hover:shadow-md transition-all duration-300">
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
        <h3 className="text-xl font-bold text-brand-800 mb-2 group-hover:text-brand-500 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 text-sm">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectsSection;
