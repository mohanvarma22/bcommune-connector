
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { PlusCircle, FileText, Building, Clock, DollarSign, Search, Filter, MapPin, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const B2BSpace = () => {
  const b2bProjects = [
    {
      id: "b2b-1",
      title: "Enterprise CRM Implementation",
      description: "Looking for a company to implement and customize Salesforce CRM for our nationwide sales team of 200+ members.",
      budget: "$50,000 - $80,000",
      deadline: "3 months",
      location: "Chicago, IL (On-site required)",
      industry: "Retail",
      company: {
        name: "RetailPlus Inc.",
        logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=250&h=250&fit=crop&q=80",
        verified: true
      },
      postedAt: "1 week ago",
      confidentiality: "NDA Required",
      proposals: 8
    },
    {
      id: "b2b-2",
      title: "Custom Manufacturing Software Development",
      description: "Seeking a software development company to build a custom ERP solution for our manufacturing processes with IoT integration.",
      budget: "$100,000 - $150,000",
      deadline: "6 months",
      location: "Remote with occasional travel",
      industry: "Manufacturing",
      company: {
        name: "Industrial Innovations",
        logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=250&h=250&fit=crop&q=80",
        verified: true
      },
      postedAt: "5 days ago",
      confidentiality: "NDA Required",
      proposals: 12
    },
    {
      id: "b2b-3",
      title: "Digital Marketing Campaign for Product Launch",
      description: "Looking for a marketing agency to handle our upcoming product launch with comprehensive digital marketing strategies.",
      budget: "$30,000 - $45,000",
      deadline: "2 months",
      location: "Remote",
      industry: "Technology",
      company: {
        name: "NextGen Tech",
        logo: "https://images.unsplash.com/photo-1598520102420-5dab2d8a32c8?w=250&h=250&fit=crop&q=80",
        verified: true
      },
      postedAt: "3 days ago",
      confidentiality: "Standard",
      proposals: 15
    },
    {
      id: "b2b-4",
      title: "Supply Chain Optimization Consulting",
      description: "Seeking a consulting firm with expertise in supply chain optimization to improve our global logistics operations.",
      budget: "$40,000 - $60,000",
      deadline: "4 months",
      location: "Hybrid (New York, NY)",
      industry: "Logistics",
      company: {
        name: "Global Freight Solutions",
        logo: "https://images.unsplash.com/photo-1624098806673-fec883964449?w=250&h=250&fit=crop&q=80",
        verified: true
      },
      postedAt: "1 day ago",
      confidentiality: "NDA Required",
      proposals: 6
    }
  ];

  return (
    <Layout className="bg-background pb-10">
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">B2B Space</h1>
            <p className="text-muted-foreground mt-1">Business-to-business projects and opportunities</p>
          </div>
          <Button className="gap-2">
            <PlusCircle size={16} />
            Post B2B Project
          </Button>
        </div>

        <div className="bg-card rounded-xl p-6 mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Search B2B projects..." 
                className="w-full pl-10 pr-4 py-2 rounded-md border border-input bg-background"
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="gap-2">
                <Filter size={16} />
                Filters
              </Button>
              <Button variant="outline">
                Budget ↓
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {b2bProjects.map((project, index) => (
            <B2BProjectCard 
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

// B2B Project Card component
interface B2BProjectCardProps {
  project: {
    id: string;
    title: string;
    description: string;
    budget: string;
    deadline: string;
    location: string;
    industry: string;
    company: {
      name: string;
      logo: string;
      verified: boolean;
    };
    postedAt: string;
    confidentiality: string;
    proposals: number;
  };
  className?: string;
  style?: React.CSSProperties;
}

const B2BProjectCard: React.FC<B2BProjectCardProps> = ({ 
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
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-md overflow-hidden bg-secondary flex-shrink-0">
            <img 
              src={project.company.logo} 
              alt={project.company.name} 
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>{project.company.name}</span>
              {project.company.verified && (
                <span className="inline-flex items-center rounded-full bg-blue-100 px-2 py-0.5 text-xs text-blue-800">
                  Verified
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
          {project.confidentiality}
        </div>
      </div>
      
      <p className="text-muted-foreground mb-4">{project.description}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3 mb-4">
        <div className="flex items-center gap-2">
          <DollarSign className="h-4 w-4 text-primary" />
          <span className="text-sm">{project.budget}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-primary" />
          <span className="text-sm">{project.deadline}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-primary" />
          <span className="text-sm">{project.location}</span>
        </div>
        <div className="flex items-center gap-2">
          <Building className="h-4 w-4 text-primary" />
          <span className="text-sm">{project.industry}</span>
        </div>
      </div>
      
      <div className="flex justify-between items-center mt-4 pt-4 border-t border-border">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <FileText className="h-4 w-4" />
          <span>{project.proposals} proposals</span>
          <span className="text-muted-foreground">•</span>
          <span>Posted {project.postedAt}</span>
        </div>
        <Button className="gap-1">
          <span>Submit Proposal</span>
          <ChevronRight size={16} />
        </Button>
      </div>
    </div>
  );
};

export default B2BSpace;
