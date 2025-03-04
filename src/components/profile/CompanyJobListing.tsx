
import React from 'react';
import { Briefcase, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface Job {
  id: string;
  title: string;
  location: string;
  type: string;
  department: string;
  postedAt: string;
}

interface CompanyJobListingProps {
  job: Job;
  className?: string;
}

const CompanyJobListing: React.FC<CompanyJobListingProps> = ({ job, className }) => {
  return (
    <div 
      className={cn(
        "bg-background border border-border/50 rounded-lg p-4 hover:shadow-md transition-shadow flex flex-col sm:flex-row sm:items-center justify-between gap-4",
        className
      )}
    >
      <div className="flex-1">
        <h3 className="font-medium text-lg">{job.title}</h3>
        <div className="flex flex-wrap gap-3 mt-2 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <Briefcase className="w-3 h-3" />
            {job.department}
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            {job.location}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            Posted {job.postedAt}
          </span>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <span className="text-xs font-medium px-2 py-1 rounded-full bg-secondary">
          {job.type}
        </span>
        <Button size="sm">Apply Now</Button>
      </div>
    </div>
  );
};

export default CompanyJobListing;
