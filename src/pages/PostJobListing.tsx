
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { 
  ArrowLeft,
  Briefcase,
  DollarSign,
  MapPin,
  GraduationCap,
  Tag,
  Plus,
  PlusCircle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/components/ui/use-toast';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';

const PostJobListing = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    type: 'Full-time',
    salary: '',
    experienceLevel: 'Mid-Level',
    isRemote: true
  });

  const [requirements, setRequirements] = useState<string[]>([]);
  const [newRequirement, setNewRequirement] = useState('');
  
  const [responsibilities, setResponsibilities] = useState<string[]>([]);
  const [newResponsibility, setNewResponsibility] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSwitchChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, isRemote: checked }));
  };

  const addRequirement = () => {
    if (newRequirement.trim() && !requirements.includes(newRequirement.trim())) {
      setRequirements(prev => [...prev, newRequirement.trim()]);
      setNewRequirement('');
    }
  };

  const removeRequirement = (index: number) => {
    setRequirements(prev => prev.filter((_, i) => i !== index));
  };
  
  const addResponsibility = () => {
    if (newResponsibility.trim() && !responsibilities.includes(newResponsibility.trim())) {
      setResponsibilities(prev => [...prev, newResponsibility.trim()]);
      setNewResponsibility('');
    }
  };

  const removeResponsibility = (index: number) => {
    setResponsibilities(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (requirements.length === 0 || responsibilities.length === 0) {
      toast({
        title: "Missing Information",
        description: "Please add both requirements and responsibilities for the job listing.",
        variant: "destructive"
      });
      return;
    }
    
    // In a real app, you would submit the form data to your backend
    console.log('Form data submitted:', { 
      ...formData, 
      requirements, 
      responsibilities
    });
    
    toast({
      title: "Job Posted",
      description: "Your job listing has been successfully posted.",
    });
    
    // Navigate back to the Jobs page
    navigate('/jobs');
  };

  return (
    <Layout className="bg-background pb-10">
      <div className="flex flex-col gap-6 max-w-4xl mx-auto">
        <div className="flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => navigate('/jobs')}
            className="h-8 w-8"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h1 className="text-3xl font-bold">Post Job Listing</h1>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4 bg-card p-6 rounded-xl shadow-soft border border-border/50">
            <h2 className="text-xl font-semibold mb-4">Job Details</h2>
            
            <div className="space-y-2">
              <Label htmlFor="title">Job Title</Label>
              <Input 
                id="title" 
                name="title" 
                placeholder="E.g., Senior Frontend Developer" 
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description">Job Description</Label>
              <Textarea 
                id="description" 
                name="description" 
                placeholder="Provide a detailed description of the role..."
                value={formData.description}
                onChange={handleChange}
                className="min-h-[150px]"
                required
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="type">Job Type</Label>
                <Select 
                  onValueChange={(value) => handleSelectChange('type', value)}
                  defaultValue={formData.type}
                >
                  <SelectTrigger id="type">
                    <SelectValue placeholder="Select job type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Full-time">Full-time</SelectItem>
                    <SelectItem value="Part-time">Part-time</SelectItem>
                    <SelectItem value="Contract">Contract</SelectItem>
                    <SelectItem value="Internship">Internship</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="experienceLevel">Experience Level</Label>
                <Select 
                  onValueChange={(value) => handleSelectChange('experienceLevel', value)}
                  defaultValue={formData.experienceLevel}
                >
                  <SelectTrigger id="experienceLevel">
                    <SelectValue placeholder="Select experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Entry-Level">Entry-Level</SelectItem>
                    <SelectItem value="Mid-Level">Mid-Level</SelectItem>
                    <SelectItem value="Senior">Senior</SelectItem>
                    <SelectItem value="Lead">Lead</SelectItem>
                    <SelectItem value="Executive">Executive</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="salary">Salary Range</Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="salary"
                    name="salary"
                    placeholder="E.g., $80,000 - $100,000 per year"
                    className="pl-10"
                    value={formData.salary}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="location"
                    name="location"
                    placeholder="E.g., New York, NY"
                    className="pl-10"
                    value={formData.location}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 pt-2">
              <Switch 
                id="remote" 
                checked={formData.isRemote}
                onCheckedChange={handleSwitchChange}
              />
              <Label htmlFor="remote" className="cursor-pointer">Remote opportunity</Label>
            </div>
          </div>
          
          <div className="space-y-4 bg-card p-6 rounded-xl shadow-soft border border-border/50">
            <h2 className="text-xl font-semibold mb-4">Requirements & Responsibilities</h2>
            
            <div className="space-y-4">
              <Label>Requirements</Label>
              <div className="flex flex-wrap gap-2">
                {requirements.map((req, index) => (
                  <Badge 
                    key={index} 
                    className="bg-secondary hover:bg-secondary/80"
                  >
                    {req}
                    <button 
                      type="button" 
                      onClick={() => removeRequirement(index)} 
                      className="ml-2 hover:text-muted-foreground"
                    >
                      ×
                    </button>
                  </Badge>
                ))}
              </div>
              
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <GraduationCap className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="E.g., Bachelor's degree, 3+ years of experience"
                    value={newRequirement}
                    onChange={(e) => setNewRequirement(e.target.value)}
                    className="pl-10"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        addRequirement();
                      }
                    }}
                  />
                </div>
                <Button 
                  type="button" 
                  onClick={addRequirement}
                  variant="outline"
                  className="gap-1"
                >
                  <Plus className="h-4 w-4" />
                  Add
                </Button>
              </div>
            </div>
            
            <div className="space-y-4 mt-6">
              <Label>Responsibilities</Label>
              <div className="flex flex-wrap gap-2">
                {responsibilities.map((resp, index) => (
                  <Badge 
                    key={index} 
                    className="bg-primary/10 text-primary hover:bg-primary/20"
                  >
                    {resp}
                    <button 
                      type="button" 
                      onClick={() => removeResponsibility(index)} 
                      className="ml-2 hover:text-primary/70"
                    >
                      ×
                    </button>
                  </Badge>
                ))}
              </div>
              
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Briefcase className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="E.g., Develop and maintain web applications"
                    value={newResponsibility}
                    onChange={(e) => setNewResponsibility(e.target.value)}
                    className="pl-10"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        addResponsibility();
                      }
                    }}
                  />
                </div>
                <Button 
                  type="button" 
                  onClick={addResponsibility}
                  variant="outline"
                  className="gap-1"
                >
                  <Plus className="h-4 w-4" />
                  Add
                </Button>
              </div>
            </div>
          </div>
          
          <div className="flex justify-end gap-3">
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => navigate('/jobs')}
            >
              Cancel
            </Button>
            <Button type="submit" className="gap-2">
              <PlusCircle className="h-4 w-4" />
              Post Job
            </Button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default PostJobListing;
