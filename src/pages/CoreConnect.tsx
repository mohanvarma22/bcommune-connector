import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { PlusCircle, Search, Filter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CompanyCard from '@/components/core-connect/CompanyCard';

const CoreConnect = () => {
  const navigate = useNavigate();

  const companies = [
    {
      id: "company-1",
      name: "Tech Co-Founder for SaaS Startup",
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
      id: "company-2",
      name: "Creative Director for Design Agency",
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
      id: "company-3",
      name: "Marketing Lead for Health Tech Startup",
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
      id: "company-4",
      name: "Founding Team for Fintech Platform",
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
            <p className="text-muted-foreground mt-1">Connect with startups and companies</p>
          </div>
          <Button className="gap-2" onClick={() => navigate('/core-connect/post')}>
            <PlusCircle size={16} />
            Post a Team Listing
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
          {companies.map((company, index) => (
            <CompanyCard 
              key={company.id}
              company={company}
              style={{ animationDelay: `${index * 100}ms` }}
              className="animate-fade-in"
              onClick={() => navigate(`/company/${company.id}`)}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default CoreConnect;
