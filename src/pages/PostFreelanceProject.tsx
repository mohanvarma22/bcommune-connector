
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  ArrowLeft,
  Clock,
  DollarSign,
  MapPin,
  Tag,
  Plus,
  PlusCircle,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/components/ui/use-toast';
import { Badge } from '@/components/ui/badge';

const PostFreelanceProject = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    budget: '',
    duration: '',
    location: 'Remote'
  });

  const [skills, setSkills] = useState<string[]>([]);
  const [newSkill, setNewSkill] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const addSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills(prev => [...prev, newSkill.trim()]);
      setNewSkill('');
    }
  };

  const removeSkill = (index: number) => {
    setSkills(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (skills.length === 0) {
      toast({
        title: "Missing Information",
        description: "Please add at least one required skill for your project.",
        variant: "destructive"
      });
      return;
    }
    
    // In a real app, you would submit the form data to your backend
    console.log('Form data submitted:', { ...formData, skills });
    
    toast({
      title: "Freelance Project Posted",
      description: "Your project has been successfully posted.",
    });
    
    // Navigate back to the Freelance page
    navigate('/freelance');
  };

  return (
    <Layout className="bg-background pb-10">
      <div className="flex flex-col gap-6 max-w-4xl mx-auto">
        <div className="flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => navigate('/freelance')}
            className="h-8 w-8"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h1 className="text-3xl font-bold">Post Freelance Project</h1>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4 bg-card p-6 rounded-xl shadow-soft border border-border/50">
            <h2 className="text-xl font-semibold mb-4">Project Details</h2>
            
            <div className="space-y-2">
              <Label htmlFor="title">Project Title</Label>
              <Input 
                id="title" 
                name="title" 
                placeholder="E.g., E-commerce Website Redesign" 
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description">Project Description</Label>
              <Textarea 
                id="description" 
                name="description" 
                placeholder="Describe your project in detail..."
                value={formData.description}
                onChange={handleChange}
                className="min-h-[150px]"
                required
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="budget">Budget</Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="budget"
                    name="budget"
                    placeholder="E.g., $500 - $1,000"
                    className="pl-10"
                    value={formData.budget}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="duration">Duration</Label>
                <div className="relative">
                  <Clock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="duration"
                    name="duration"
                    placeholder="E.g., 2-3 weeks"
                    className="pl-10"
                    value={formData.duration}
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
                    placeholder="E.g., Remote"
                    className="pl-10"
                    value={formData.location}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <Label>Required Skills</Label>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge 
                    key={index} 
                    className="bg-secondary hover:bg-secondary/80"
                  >
                    {skill}
                    <button 
                      type="button" 
                      onClick={() => removeSkill(index)} 
                      className="ml-2 hover:text-muted-foreground"
                    >
                      ×
                    </button>
                  </Badge>
                ))}
              </div>
              
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Tag className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="E.g., Web Design, Python, Graphic Design"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    className="pl-10"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        addSkill();
                      }
                    }}
                  />
                </div>
                <Button 
                  type="button" 
                  onClick={addSkill}
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
              onClick={() => navigate('/freelance')}
            >
              Cancel
            </Button>
            <Button type="submit" className="gap-2">
              <PlusCircle className="h-4 w-4" />
              Post Project
            </Button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default PostFreelanceProject;
