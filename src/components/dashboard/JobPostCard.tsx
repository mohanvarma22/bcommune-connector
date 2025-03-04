
import React from 'react';
import { MoreHorizontal, Clock, User, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export interface JobPostCardProps {
  id: string;
  title: string;
  description: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
  status: 'Active' | 'Draft' | 'Closed';
  applications: number;
  postedAt: string;
  className?: string;
  onClick?: () => void;
}

const JobPostCard: React.FC<JobPostCardProps> = ({
  id,
  title,
  description,
  location,
  type,
  status,
  applications,
  postedAt,
  className,
  onClick,
}) => {
  const statusColor = {
    Active: 'bg-green-100 text-green-800',
    Draft: 'bg-yellow-100 text-yellow-800',
    Closed: 'bg-gray-100 text-gray-800',
  };

  return (
    <div 
      className={cn(
        "rounded-xl bg-card p-5 shadow-soft hover:shadow-md transition-all duration-200 border border-border/50",
        className
      )}
      onClick={onClick}
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-semibold text-lg">{title}</h3>
        
        <div className="flex items-center">
          <span className={cn(
            "rounded-full px-2 py-0.5 text-xs font-medium",
            statusColor[status]
          )}>
            {status}
          </span>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8 ml-2">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem>Duplicate</DropdownMenuItem>
              <DropdownMenuItem className={status === 'Active' ? 'text-destructive' : 'text-primary'}>
                {status === 'Active' ? 'Close Job' : 'Reopen Job'}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        <Badge variant="secondary" className="flex items-center gap-1">
          <User className="h-3 w-3" />
          <span>{type}</span>
        </Badge>
        
        <Badge variant="secondary" className="flex items-center gap-1">
          <MapPin className="h-3 w-3" />
          <span>{location}</span>
        </Badge>
      </div>
      
      <div className="flex items-center justify-between pt-2 text-sm border-t border-border/50">
        <div className="flex items-center text-muted-foreground">
          <Clock className="h-3 w-3 mr-1" />
          <span>Posted {postedAt}</span>
        </div>
        
        <div className="font-medium">
          {applications} application{applications !== 1 ? 's' : ''}
        </div>
      </div>
    </div>
  );
};

export default JobPostCard;
