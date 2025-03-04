
import React from 'react';
import Layout from '@/components/layout/Layout';
import StatCard from '@/components/dashboard/StatCard';
import JobPostCard, { JobPostCardProps } from '@/components/dashboard/JobPostCard';
import { Button } from '@/components/ui/button';
import { Briefcase, Users, Clock, PlusCircle, Filter } from 'lucide-react';

const Dashboard: React.FC = () => {
  // Mock data
  const stats = [
    { 
      title: 'Total Job Postings', 
      value: 12, 
      icon: Briefcase, 
      trend: { value: 8, isPositive: true },
      description: '4 active, 2 drafts, 6 closed'
    },
    { 
      title: 'Active Applications', 
      value: 48, 
      icon: Users, 
      trend: { value: 12, isPositive: true },
      description: '18 new this week'
    },
    { 
      title: 'Time to Fill', 
      value: '18 days', 
      icon: Clock, 
      trend: { value: 5, isPositive: false },
      description: 'Avg. time to fill positions'
    }
  ];

  const recentJobs: JobPostCardProps[] = [
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
    }
  ];

  return (
    <Layout>
      <div className="space-y-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">
              Overview of your company's activity on bcommune.
            </p>
          </div>
          <Button className="flex items-center gap-2">
            <PlusCircle className="h-4 w-4" />
            <span>New Job Post</span>
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              title={stat.title}
              value={stat.value}
              icon={stat.icon}
              trend={stat.trend}
              description={stat.description}
              className="animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            />
          ))}
        </div>

        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Recent Job Postings</h2>
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              <span>Filter</span>
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {recentJobs.map((job, index) => (
              <JobPostCard
                key={job.id}
                {...job}
                className="animate-scale-in cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
