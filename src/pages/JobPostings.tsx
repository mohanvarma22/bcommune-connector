
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import JobPostCard, { JobPostCardProps } from '@/components/dashboard/JobPostCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  PlusCircle, 
  Search, 
  Filter,
  SlidersHorizontal,
  CheckSquare
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';

// Mock data
const initialJobs: JobPostCardProps[] = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    description: 'We are looking for an experienced Frontend Developer to join our team. The ideal candidate should have strong knowledge of React and modern JavaScript.',
    location: 'Remote',
    type: 'Full-time',
    status: 'Active',
    applications: 12,
    postedAt: '2 days ago'
  },
  {
    id: '2',
    title: 'UI/UX Designer',
    description: 'Join our creative team as a UI/UX Designer to craft beautiful and intuitive user experiences for our digital products.',
    location: 'New York, NY',
    type: 'Full-time',
    status: 'Active',
    applications: 8,
    postedAt: '3 days ago'
  },
  {
    id: '3',
    title: 'Marketing Intern',
    description: 'Great opportunity for marketing students to gain real-world experience in digital marketing and content creation.',
    location: 'San Francisco, CA',
    type: 'Internship',
    status: 'Draft',
    applications: 0,
    postedAt: 'Not posted yet'
  },
  {
    id: '4',
    title: 'Product Manager',
    description: 'We are seeking a talented Product Manager to join our team and lead product development initiatives.',
    location: 'Chicago, IL',
    type: 'Full-time',
    status: 'Active',
    applications: 5,
    postedAt: '1 week ago'
  },
  {
    id: '5',
    title: 'Backend Developer',
    description: 'Looking for a Backend Developer with experience in Node.js and database management.',
    location: 'Remote',
    type: 'Contract',
    status: 'Closed',
    applications: 15,
    postedAt: '2 weeks ago'
  },
  {
    id: '6',
    title: 'Social Media Coordinator',
    description: 'Join our marketing team to manage and grow our social media presence across multiple platforms.',
    location: 'Austin, TX',
    type: 'Part-time',
    status: 'Active',
    applications: 3,
    postedAt: '4 days ago'
  }
];

const JobPostings: React.FC = () => {
  const [jobs, setJobs] = useState<JobPostCardProps[]>(initialJobs);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string[]>([]);
  const [typeFilter, setTypeFilter] = useState<string[]>([]);

  const handleStatusFilterChange = (status: string) => {
    setStatusFilter(prev => 
      prev.includes(status) 
        ? prev.filter(s => s !== status) 
        : [...prev, status]
    );
  };

  const handleTypeFilterChange = (type: string) => {
    setTypeFilter(prev => 
      prev.includes(type) 
        ? prev.filter(t => t !== type) 
        : [...prev, type]
    );
  };

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter.length === 0 || statusFilter.includes(job.status);
    const matchesType = typeFilter.length === 0 || typeFilter.includes(job.type);
    
    return matchesSearch && matchesStatus && matchesType;
  });

  return (
    <Layout>
      <div className="space-y-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Job Postings</h1>
            <p className="text-muted-foreground">
              Create and manage your job listings to find the perfect candidates.
            </p>
          </div>
          <Button className="flex items-center gap-2">
            <PlusCircle className="h-4 w-4" />
            <span>New Job Post</span>
          </Button>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search job postings..."
              className="pl-9"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex gap-2">
            <Select defaultValue="newest">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest first</SelectItem>
                <SelectItem value="oldest">Oldest first</SelectItem>
                <SelectItem value="applications">Most applications</SelectItem>
              </SelectContent>
            </Select>
            
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  <span>Filters</span>
                  {(statusFilter.length > 0 || typeFilter.length > 0) && (
                    <Badge variant="secondary" className="ml-1">
                      {statusFilter.length + typeFilter.length}
                    </Badge>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="space-y-4">
                  <div>
                    <h3 className="mb-2 font-medium">Status</h3>
                    <div className="space-y-2">
                      {['Active', 'Draft', 'Closed'].map((status) => (
                        <div key={status} className="flex items-center space-x-2">
                          <Checkbox 
                            id={`status-${status}`} 
                            checked={statusFilter.includes(status)}
                            onCheckedChange={() => handleStatusFilterChange(status)}
                          />
                          <label 
                            htmlFor={`status-${status}`}
                            className="text-sm cursor-pointer"
                          >
                            {status}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="mb-2 font-medium">Job Type</h3>
                    <div className="space-y-2">
                      {['Full-time', 'Part-time', 'Contract', 'Internship'].map((type) => (
                        <div key={type} className="flex items-center space-x-2">
                          <Checkbox 
                            id={`type-${type}`} 
                            checked={typeFilter.includes(type)}
                            onCheckedChange={() => handleTypeFilterChange(type)}
                          />
                          <label 
                            htmlFor={`type-${type}`}
                            className="text-sm cursor-pointer"
                          >
                            {type}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-between pt-2 border-t">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => {
                        setStatusFilter([]);
                        setTypeFilter([]);
                      }}
                    >
                      Reset
                    </Button>
                    <Button size="sm">Apply</Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>

        {statusFilter.length > 0 || typeFilter.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {statusFilter.map(status => (
              <Badge key={`badge-status-${status}`} variant="secondary" className="flex items-center gap-1">
                {status}
                <button 
                  className="ml-1 rounded-full"
                  onClick={() => handleStatusFilterChange(status)}
                >
                  ×
                </button>
              </Badge>
            ))}
            {typeFilter.map(type => (
              <Badge key={`badge-type-${type}`} variant="secondary" className="flex items-center gap-1">
                {type}
                <button 
                  className="ml-1 rounded-full"
                  onClick={() => handleTypeFilterChange(type)}
                >
                  ×
                </button>
              </Badge>
            ))}
            {(statusFilter.length > 0 || typeFilter.length > 0) && (
              <Button
                variant="ghost"
                size="sm"
                className="h-6 px-2 text-xs"
                onClick={() => {
                  setStatusFilter([]);
                  setTypeFilter([]);
                }}
              >
                Clear all
              </Button>
            )}
          </div>
        ) : null}

        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredJobs.map((job, index) => (
            <JobPostCard
              key={job.id}
              {...job}
              className="animate-scale-in cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            />
          ))}
        </div>
        
        {filteredJobs.length === 0 && (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <Search className="h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium">No job postings found</h3>
            <p className="text-muted-foreground mt-1">
              Try adjusting your filters or search terms.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default JobPostings;
