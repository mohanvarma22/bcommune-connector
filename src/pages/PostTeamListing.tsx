
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
  Users,
  Briefcase,
  MapPin,
  Plus,
  Trash2,
  PlusCircle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/components/ui/use-toast';
import { Badge } from '@/components/ui/badge';

const PostTeamListing = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    commitment: 'Full-time',
    location: '',
    equity: '',
    stage: 'Idea Validation'
  });

  const [roles, setRoles] = useState<string[]>([]);
  const [newRole, setNewRole] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const addRole = () => {
    if (newRole.trim() && !roles.includes(newRole.trim())) {
      setRoles(prev => [...prev, newRole.trim()]);
      setNewRole('');
    }
  };

  const removeRole = (index: number) => {
    setRoles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (roles.length === 0) {
      toast({
        title: "Missing Information",
        description: "Please add at least one role for your team listing.",
        variant: "destructive"
      });
      return;
    }
    
    // In a real app, you would submit the form data to your backend
    console.log('Form data submitted:', { ...formData, requiredRoles: roles });
    
    toast({
      title: "Team Listing Posted",
      description: "Your team listing has been successfully posted.",
    });
    
    // Navigate back to the CORE Connect page
    navigate('/core-connect');
  };

  return (
    <Layout className="bg-background pb-10">
      <div className="flex flex-col gap-6 max-w-4xl mx-auto">
        <div className="flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => navigate('/core-connect')}
            className="h-8 w-8"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h1 className="text-3xl font-bold">Post Team Listing</h1>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4 bg-card p-6 rounded-xl shadow-soft border border-border/50">
            <h2 className="text-xl font-semibold mb-4">Team Details</h2>
            
            <div className="space-y-2">
              <Label htmlFor="title">Listing Title</Label>
              <Input 
                id="title" 
                name="title" 
                placeholder="E.g., Tech Co-Founder for SaaS Startup" 
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea 
                id="description" 
                name="description" 
                placeholder="Describe your team and what you're looking for..."
                value={formData.description}
                onChange={handleChange}
                className="min-h-[150px]"
                required
              />
            </div>
            
            <div className="space-y-4">
              <Label>Required Roles</Label>
              <div className="flex flex-wrap gap-2">
                {roles.map((role, index) => (
                  <Badge 
                    key={index} 
                    className="bg-primary/10 text-primary hover:bg-primary/20 px-3 py-1"
                  >
                    {role}
                    <button 
                      type="button" 
                      onClick={() => removeRole(index)} 
                      className="ml-2 text-primary hover:text-primary/70"
                    >
                      ×
                    </button>
                  </Badge>
                ))}
              </div>
              
              <div className="flex gap-2">
                <Input
                  placeholder="E.g., CTO, Developer, Designer"
                  value={newRole}
                  onChange={(e) => setNewRole(e.target.value)}
                  className="flex-1"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      addRole();
                    }
                  }}
                />
                <Button 
                  type="button" 
                  onClick={addRole}
                  variant="outline"
                  className="gap-1"
                >
                  <Plus className="h-4 w-4" />
                  Add
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="commitment">Commitment Level</Label>
                <Select 
                  onValueChange={(value) => handleSelectChange('commitment', value)}
                  defaultValue={formData.commitment}
                >
                  <SelectTrigger id="commitment">
                    <SelectValue placeholder="Select commitment level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Full-time">Full-time</SelectItem>
                    <SelectItem value="Part-time">Part-time</SelectItem>
                    <SelectItem value="Contract">Contract</SelectItem>
                    <SelectItem value="Flexible">Flexible</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="stage">Project Stage</Label>
                <Select 
                  onValueChange={(value) => handleSelectChange('stage', value)}
                  defaultValue={formData.stage}
                >
                  <SelectTrigger id="stage">
                    <SelectValue placeholder="Select project stage" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Idea Validation">Idea Validation</SelectItem>
                    <SelectItem value="Pre-seed">Pre-seed</SelectItem>
                    <SelectItem value="Seed">Seed</SelectItem>
                    <SelectItem value="Series A">Series A</SelectItem>
                    <SelectItem value="Established Business">Established Business</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="location"
                    name="location"
                    placeholder="E.g., Remote (US preferred)"
                    className="pl-10"
                    value={formData.location}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="equity">Equity / Compensation</Label>
                <div className="relative">
                  <Briefcase className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="equity"
                    name="equity"
                    placeholder="E.g., 15-25% equity"
                    className="pl-10"
                    value={formData.equity}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-end gap-3">
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => navigate('/core-connect')}
            >
              Cancel
            </Button>
            <Button type="submit" className="gap-2">
              <PlusCircle className="h-4 w-4" />
              Post Team Listing
            </Button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default PostTeamListing;
