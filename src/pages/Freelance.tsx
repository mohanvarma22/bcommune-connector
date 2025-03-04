
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { PlusCircle, Filter, Briefcase, Clock, MapPin, DollarSign, Search } from 'lucide-react';
import { cn } from '@/lib/utils';

const Freelance = () => {
  const freelanceProjects = [
    {
      id: "fp-1",
      title: "E-commerce Website Redesign",
      description: "Looking for a skilled web designer to revamp our online store with a modern, user-friendly interface.",
      budget: "$2,000 - $3,500",
      duration: "3-4 weeks",
      skills: ["Web Design", "UI/UX", "Shopify"],
      location: "Remote",
      postedAt: "2 days ago",
      proposals: 12,
      status: "Open"
    },
    {
      id: "fp-2",
      title: "Mobile App Development for Fitness Tracking",
      description: "Need a React Native developer to build a cross-platform fitness tracking app with social features.",
      budget: "$5,000 - $8,000",
      duration: "2-3 months",
      skills: ["React Native", "Firebase", "API Integration"],
      location: "Remote",
      postedAt: "1 week ago",
      proposals: 24,
      status: "Open"
    },
    {
      id: "fp-3",
      title: "Content Creation for Marketing Campaign",
      description: "Seeking creative writers to produce engaging content for our upcoming product launch.",
      budget: "$50 - $100 per article",
      duration: "1 month (ongoing possible)",
      skills: ["Content Writing", "SEO", "Marketing"],
      location: "Remote",
      postedAt: "3 days ago",
      proposals: 18,
      status: "Open"
    },
    {
      id: "fp-4",
      title: "Data Analysis and Visualization Project",
      description: "Looking for a data analyst to process customer data and create insightful visualizations.",
      budget: "$1,500 - $2,500",
      duration: "2 weeks",
      skills: ["Python", "Data Analysis", "Tableau"],
      location: "Remote",
      postedAt: "5 days ago",
      proposals: 9,
      status: "Open"
    },
    {
      id: "fp-5",
      title: "Logo and Brand Identity Design",
      description: "Startup seeking a graphic designer to create a logo and brand identity that captures our vision.",
      budget: "$800 - $1,200",
      duration: "1-2 weeks",
      skills: ["Graphic Design", "Branding", "Illustrator"],
      location: "Remote",
      postedAt: "1 day ago",
      proposals: 15,
      status: "Open"
    }
  ];

  return (
    <Layout className="bg-background pb-10">
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Freelance Projects</h1>
            <p className="text-muted-foreground mt-1">Find and post freelance opportunities</p>
          </div>
          <Button className="gap-2">
            <PlusCircle size={16} />
            Post a Project
          </Button>
        </div>

        <div className="bg-card rounded-xl p-6 mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Search projects..." 
                className="w-full pl-10 pr-4 py-2 rounded-md border border-input bg-background"
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="gap-2">
                <Filter size={16} />
                Filters
              </Button>
              <Button variant="outline">
                Latest
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {freelanceProjects.map((project, index) => (
            <FreelanceProjectCard 
              key={project.id}
              project={project}
              style={{ animationDelay: `${index * 100}ms` }}
              className="animate-fade-in"
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

// Freelance Project Card component
interface FreelanceProjectCardProps {
  project: {
    id: string;
    title: string;
    description: string;
    budget: string;
    duration: string;
    skills: string[];
    location: string;
    postedAt: string;
    proposals: number;
    status: string;
  };
  className?: string;
  style?: React.CSSProperties;
}

const FreelanceProjectCard: React.FC<FreelanceProjectCardProps> = ({ 
  project, 
  className,
  style 
}) => {
  return (
    <div 
      className={cn(
        "rounded-xl bg-card p-5 shadow-soft hover:shadow-md transition-all duration-200 border border-border/50",
        className
      )}
      style={style}
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
          {project.status}
        </span>
      </div>
      
      <p className="text-muted-foreground mb-4">{project.description}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
        <div className="flex items-center gap-2">
          <DollarSign className="h-4 w-4 text-primary" />
          <span className="text-sm">{project.budget}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-primary" />
          <span className="text-sm">{project.duration}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-primary" />
          <span className="text-sm">{project.location}</span>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.skills.map((skill, index) => (
          <span 
            key={index} 
            className="px-2 py-1 bg-secondary text-xs rounded-md"
          >
            {skill}
          </span>
        ))}
      </div>
      
      <div className="flex justify-between items-center mt-4 pt-3 border-t border-border">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Briefcase className="h-4 w-4" />
          <span>{project.proposals} proposals</span>
        </div>
        <div className="text-sm text-muted-foreground">
          Posted {project.postedAt}
        </div>
      </div>
    </div>
  );
};

export default Freelance;
