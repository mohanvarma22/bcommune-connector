
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Building, 
  Users, 
  Briefcase, 
  Mail, 
  Phone,
  MapPin, 
  Globe, 
  Award,
  Heart
} from 'lucide-react';
import { Avatar } from '@/components/ui/avatar';
import { 
  CompanyTeamMember,
  CompanyJobListing,
  CompanyProject
} from '@/components/profile';

const CompanyProfile = () => {
  const { id } = useParams();
  
  // This would typically come from an API call using the id param
  const companyData = {
    id: id || "default",
    name: "TechNova Solutions",
    logo: "/placeholder.svg",
    industry: "Information Technology & Services",
    size: "201-500 employees",
    founded: 2010,
    headquarters: "San Francisco, CA",
    website: "https://technova-solutions.example.com",
    phone: "+1 (555) 123-4567",
    email: "contact@technova-solutions.example.com",
    mission: "To transform businesses through innovative technology solutions that drive growth and efficiency.",
    description: "TechNova Solutions is a leading technology company that specializes in cloud computing, artificial intelligence, and enterprise software development. We partner with businesses of all sizes to deliver cutting-edge solutions that address complex challenges and create new opportunities for growth.",
    values: [
      "Innovation",
      "Excellence", 
      "Collaboration", 
      "Integrity", 
      "Customer Focus"
    ],
    awards: [
      "Top 100 Tech Companies to Watch - 2022",
      "Best Workplace Culture Award - 2021",
      "Innovation Excellence Award - 2020"
    ],
    team: [
      {
        id: "tm1",
        name: "Sarah Johnson",
        position: "Chief Executive Officer",
        avatar: "/placeholder.svg",
        linkedin: "https://linkedin.com/example"
      },
      {
        id: "tm2",
        name: "Michael Chen",
        position: "Chief Technology Officer",
        avatar: "/placeholder.svg",
        linkedin: "https://linkedin.com/example"
      },
      {
        id: "tm3",
        name: "Emily Rodriguez",
        position: "Chief Marketing Officer",
        avatar: "/placeholder.svg",
        linkedin: "https://linkedin.com/example"
      },
      {
        id: "tm4",
        name: "David Kim",
        position: "VP of Engineering",
        avatar: "/placeholder.svg",
        linkedin: "https://linkedin.com/example"
      },
      {
        id: "tm5",
        name: "Lisa Taylor",
        position: "VP of Product",
        avatar: "/placeholder.svg",
        linkedin: "https://linkedin.com/example"
      }
    ],
    openPositions: [
      {
        id: "job1",
        title: "Senior Software Engineer",
        location: "San Francisco, CA",
        type: "Full-time",
        department: "Engineering",
        postedAt: "1 week ago"
      },
      {
        id: "job2",
        title: "Product Manager",
        location: "Remote",
        type: "Full-time",
        department: "Product",
        postedAt: "2 weeks ago"
      },
      {
        id: "job3",
        title: "UX/UI Designer",
        location: "New York, NY",
        type: "Full-time",
        department: "Design",
        postedAt: "3 days ago"
      }
    ],
    projects: [
      {
        id: "proj1",
        title: "Enterprise Cloud Migration",
        description: "Comprehensive cloud migration services helping enterprises move their infrastructure to secure, scalable cloud environments.",
        category: "Cloud Services",
        image: "/placeholder.svg"
      },
      {
        id: "proj2",
        title: "AI-Powered Customer Analytics",
        description: "Advanced analytics platform using machine learning to deliver actionable insights from customer data.",
        category: "Artificial Intelligence",
        image: "/placeholder.svg"
      },
      {
        id: "proj3",
        title: "Custom Enterprise Software Solutions",
        description: "Tailored software development services addressing specific business challenges and operational needs.",
        category: "Enterprise Software",
        image: "/placeholder.svg"
      }
    ]
  };

  return (
    <Layout>
      <div className="animate-fade-in space-y-8">
        {/* Company Header */}
        <div className="bg-card rounded-xl p-6 shadow-soft">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
            <Avatar className="w-24 h-24 border-2 border-border">
              <Building className="w-12 h-12 text-primary" />
            </Avatar>
            
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-2">{companyData.name}</h1>
              <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-3">
                <span className="flex items-center gap-1">
                  <Building className="w-4 h-4" />
                  {companyData.industry}
                </span>
                <span className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  {companyData.size}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {companyData.headquarters}
                </span>
                <span className="flex items-center gap-1">
                  <Globe className="w-4 h-4" />
                  Founded {companyData.founded}
                </span>
              </div>
              <p className="text-sm max-w-3xl">{companyData.description}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 mt-3 md:mt-0 w-full md:w-auto">
              <Button variant="outline" className="gap-2">
                <Mail className="w-4 h-4" />
                Contact
              </Button>
              <Button className="gap-2">
                <Globe className="w-4 h-4" />
                Visit Website
              </Button>
            </div>
          </div>
        </div>

        {/* Company Tabs */}
        <Tabs defaultValue="about" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="team">Team</TabsTrigger>
            <TabsTrigger value="jobs">Open Positions</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
          </TabsList>
          
          {/* About Tab */}
          <TabsContent value="about" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Mission */}
              <div className="bg-card rounded-xl p-6 shadow-soft col-span-3">
                <div className="flex items-center gap-2 mb-4">
                  <Heart className="text-primary w-5 h-5" />
                  <h2 className="text-xl font-semibold">Our Mission</h2>
                </div>
                <p className="text-muted-foreground">{companyData.mission}</p>
              </div>
              
              {/* Company Values */}
              <div className="bg-card rounded-xl p-6 shadow-soft col-span-3 md:col-span-2">
                <div className="flex items-center gap-2 mb-4">
                  <Heart className="text-primary w-5 h-5" />
                  <h2 className="text-xl font-semibold">Our Values</h2>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {companyData.values.map((value, index) => (
                    <div 
                      key={index}
                      className="bg-secondary rounded-lg p-3 text-center hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                    >
                      {value}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Awards */}
              <div className="bg-card rounded-xl p-6 shadow-soft col-span-3 md:col-span-1">
                <div className="flex items-center gap-2 mb-4">
                  <Award className="text-primary w-5 h-5" />
                  <h2 className="text-xl font-semibold">Awards</h2>
                </div>
                <ul className="space-y-3">
                  {companyData.awards.map((award, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Award className="w-4 h-4 text-yellow-500 mt-1 shrink-0" />
                      <span className="text-sm">{award}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Contact Info */}
              <div className="bg-card rounded-xl p-6 shadow-soft col-span-3 md:col-span-3">
                <div className="flex items-center gap-2 mb-4">
                  <Building className="text-primary w-5 h-5" />
                  <h2 className="text-xl font-semibold">Contact Information</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex flex-col">
                    <span className="text-sm text-muted-foreground">Headquarters</span>
                    <div className="flex items-center gap-2 mt-1">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{companyData.headquarters}</span>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-muted-foreground">Website</span>
                    <div className="flex items-center gap-2 mt-1">
                      <Globe className="w-4 h-4 text-primary" />
                      <a href={companyData.website} className="hover:underline truncate">
                        {companyData.website.replace('https://', '')}
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-muted-foreground">Phone</span>
                    <div className="flex items-center gap-2 mt-1">
                      <Phone className="w-4 h-4 text-primary" />
                      <span>{companyData.phone}</span>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-muted-foreground">Email</span>
                    <div className="flex items-center gap-2 mt-1">
                      <Mail className="w-4 h-4 text-primary" />
                      <a href={`mailto:${companyData.email}`} className="hover:underline truncate">
                        {companyData.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          {/* Team Tab */}
          <TabsContent value="team" className="space-y-6">
            <div className="bg-card rounded-xl p-6 shadow-soft">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Leadership Team</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {companyData.team.map((member) => (
                  <CompanyTeamMember key={member.id} member={member} />
                ))}
              </div>
            </div>
          </TabsContent>
          
          {/* Jobs Tab */}
          <TabsContent value="jobs" className="space-y-6">
            <div className="bg-card rounded-xl p-6 shadow-soft">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Open Positions</h2>
                <Button size="sm" variant="outline">View All Jobs</Button>
              </div>
              <div className="space-y-4">
                {companyData.openPositions.map((job) => (
                  <CompanyJobListing key={job.id} job={job} />
                ))}
              </div>
            </div>
          </TabsContent>
          
          {/* Projects Tab */}
          <TabsContent value="projects" className="space-y-6">
            <div className="bg-card rounded-xl p-6 shadow-soft">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Featured Projects</h2>
                <Button size="sm" variant="outline">View All Projects</Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {companyData.projects.map((project) => (
                  <CompanyProject key={project.id} project={project} />
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default CompanyProfile;
