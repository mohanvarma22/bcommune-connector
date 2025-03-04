
import React from 'react';
import { Briefcase, Calendar, MapPin, MessageSquare, Users } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export interface CompanyCardProps {
  company: {
    id: string;
    name: string;
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
  onClick?: () => void;
}

const CompanyCard: React.FC<CompanyCardProps> = ({ 
  company, 
  className,
  style,
  onClick 
}) => {
  return (
    <div 
      className={cn(
        "rounded-xl bg-card p-5 shadow-soft hover:shadow-md transition-all duration-200 border border-border/50 cursor-pointer",
        className
      )}
      style={style}
      onClick={onClick}
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-xl font-semibold">{company.name}</h3>
        <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
          {company.stage}
        </span>
      </div>
      
      <p className="text-muted-foreground mb-4">{company.description}</p>
      
      <div className="mb-4">
        <h4 className="text-sm font-medium mb-2">Roles Needed:</h4>
        <div className="flex flex-wrap gap-2">
          {company.requiredRoles.map((role, index) => (
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
          <span className="text-sm">{company.commitment}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-primary" />
          <span className="text-sm">{company.location}</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-primary" />
          <span className="text-sm">Posted {company.postedAt}</span>
        </div>
      </div>
      
      <div className="flex justify-between items-center mt-4 pt-4 border-t border-border">
        <div className="flex items-center gap-3">
          <img 
            src={company.postedBy.photo} 
            alt={company.postedBy.name} 
            className="h-10 w-10 rounded-full object-cover"
          />
          <div>
            <p className="font-medium">{company.postedBy.name}</p>
            <p className="text-sm text-muted-foreground">{company.postedBy.role}</p>
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

export default CompanyCard;
