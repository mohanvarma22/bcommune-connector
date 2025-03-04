
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { PlusCircle, MessageSquare, Users, Search, Filter, Briefcase, Calendar, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

const CoreConnect = () => {
  const teamListings = [
    {
      id: "core-1",
      title: "Tech Co-Founder for SaaS Startup",
      description: "Looking for a technical co-founder with experience in cloud infrastructure and backend development to join an early-stage SaaS startup focused on AI-powered analytics.",
      requiredRoles: ["CTO", "Backend Developer", "DevOps Engineer"],
      commitment: "Full-time",
      location: "Remote (US preferred)",
      equity: "15-25%",
      postedBy: {
        name: "Alex Morgan",
        role: "Founder & CEO",
        photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      },
      postedAt: "3 days ago",
      stage: "Idea Validation"
    },
    {
      id: "core-2",
      title: "Creative Director for Design Agency",
      description: "Established design studio looking for a visionary Creative Director to lead our team and bring fresh perspectives to our client projects.",
      requiredRoles: ["Creative Director", "UI/UX Designer"],
      commitment: "Full-time",
      location: "New York, NY (Hybrid)",
      equity: "Competitive salary + profit sharing",
      postedBy: {
        name: "Sam Wilson",
        role: "Founder",
        photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      },
      postedAt: "1 week ago",
      stage: "Established Business"
    },
    {
      id: "core-3",
      title: "Marketing Lead for Health Tech Startup",
      description: "Health tech startup seeking a marketing expert to join our core team and lead our go-to-market strategy for our new digital health platform.",
      requiredRoles: ["CMO", "Growth Marketer", "Content Strategist"],
      commitment: "Full-time",
      location: "Remote",
      equity: "5-10% + salary",
      postedBy: {
        name: "Jamie Chen",
        role: "Co-founder & CEO",
        photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      },
      postedAt: "5 days ago",
      stage: "Pre-seed"
    },
    {
      id: "core-4",
      title: "Founding Team for Fintech Platform",
      description: "Building a team to revolutionize personal finance with AI. Looking for passionate individuals to join as founding team members.",
      requiredRoles: ["CTO", "Lead Developer", "Product Manager", "UI/UX Designer"],
      commitment: "Full-time",
      location: "San Francisco, CA",
      equity: "Competitive equity packages",
      postedBy: {
        name: "Taylor Reed",
        role: "Founder",
        photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      },
      postedAt: "2 days ago",
      stage: "Pre-seed"
    }
  ];

  return (
    <Layout className="bg-background pb-10">
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">CORE Connect</h1>
            <p className="text-muted-foreground mt-1">Build your founding team or join one</p>
          </div>
          <Button className="gap-2">
            <PlusCircle size={16} />
            Post Team Listing
          </Button>
        </div>

        <div className="bg-card rounded-xl p-6 mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Search team listings..." 
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
          {teamListings.map((listing, index) => (
            <TeamListingCard 
              key={listing.id}
              listing={listing}
              style={{ animationDelay: `${index * 100}ms` }}
              className="animate-fade-in"
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

// Team Listing Card component
interface TeamListingCardProps {
  listing: {
    id: string;
    title: string;
    description: string;
    requiredRoles: string[];
    commitment: string;
    location: string;
    equity: string;
    postedBy: {
      name: string;
      role: string;
      photo: string;
    };
    postedAt: string;
    stage: string;
  };
  className?: string;
  style?: React.CSSProperties;
}

const TeamListingCard: React.FC<TeamListingCardProps> = ({ 
  listing, 
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
        <h3 className="text-xl font-semibold">{listing.title}</h3>
        <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
          {listing.stage}
        </span>
      </div>
      
      <p className="text-muted-foreground mb-4">{listing.description}</p>
      
      <div className="mb-4">
        <h4 className="text-sm font-medium mb-2">Roles Needed:</h4>
        <div className="flex flex-wrap gap-2">
          {listing.requiredRoles.map((role, index) => (
            <span 
              key={index} 
              className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
            >
              {role}
            </span>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
        <div className="flex items-center gap-2">
          <Briefcase className="h-4 w-4 text-primary" />
          <span className="text-sm">{listing.commitment}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-primary" />
          <span className="text-sm">{listing.location}</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-primary" />
          <span className="text-sm">Posted {listing.postedAt}</span>
        </div>
      </div>
      
      <div className="flex justify-between items-center mt-4 pt-4 border-t border-border">
        <div className="flex items-center gap-3">
          <img 
            src={listing.postedBy.photo} 
            alt={listing.postedBy.name} 
            className="h-10 w-10 rounded-full object-cover"
          />
          <div>
            <p className="font-medium">{listing.postedBy.name}</p>
            <p className="text-sm text-muted-foreground">{listing.postedBy.role}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-1">
            <MessageSquare size={14} />
            Contact
          </Button>
          <Button size="sm" className="gap-1">
            <Users size={14} />
            Apply
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CoreConnect;
