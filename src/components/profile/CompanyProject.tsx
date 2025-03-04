
import React from 'react';
import { cn } from '@/lib/utils';

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
}

interface CompanyProjectProps {
  project: Project;
  className?: string;
}

const CompanyProject: React.FC<CompanyProjectProps> = ({ project, className }) => {
  return (
    <div 
      className={cn(
        "bg-background border border-border/50 rounded-lg overflow-hidden hover:shadow-md transition-shadow",
        className
      )}
    >
      <div 
        className="h-48 bg-muted bg-cover bg-center"
        style={{ backgroundImage: `url(${project.image})` }}
      />
      <div className="p-4">
        <div className="text-xs font-medium text-primary mb-2">{project.category}</div>
        <h3 className="font-medium text-lg mb-2">{project.title}</h3>
        <p className="text-sm text-muted-foreground">{project.description}</p>
      </div>
    </div>
  );
};

export default CompanyProject;
