
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
  Building,
  DollarSign,
  Clock,
  MapPin,
  Upload,
  PlusCircle,
  Trash2
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/components/ui/use-toast';

const PostB2BProject = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    budget: '',
    deadline: '',
    location: '',
    industry: '',
    confidentiality: 'Standard'
  });
  const [documents, setDocuments] = useState<{name: string, size: string}[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleDocumentUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files).map(file => ({
        name: file.name,
        size: formatFileSize(file.size)
      }));
      setDocuments(prev => [...prev, ...newFiles]);
    }
  };

  const removeDocument = (index: number) => {
    setDocuments(prev => prev.filter((_, i) => i !== index));
  };

  const formatFileSize = (size: number) => {
    if (size < 1024) return `${size} B`;
    else if (size < 1024 * 1024) return `${(size / 1024).toFixed(1)} KB`;
    else if (size < 1024 * 1024 * 1024) return `${(size / (1024 * 1024)).toFixed(1)} MB`;
    else return `${(size / (1024 * 1024 * 1024)).toFixed(1)} GB`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would submit the form data to your backend
    console.log('Form data submitted:', formData);
    console.log('Documents:', documents);
    
    toast({
      title: "B2B Project Posted",
      description: "Your project has been successfully posted.",
    });
    
    // Navigate back to the B2B Space
    navigate('/b2b');
  };

  return (
    <Layout className="bg-background pb-10">
      <div className="flex flex-col gap-6 max-w-4xl mx-auto">
        <div className="flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => navigate('/b2b')}
            className="h-8 w-8"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h1 className="text-3xl font-bold">Post B2B Project</h1>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4 bg-card p-6 rounded-xl shadow-soft border border-border/50">
            <h2 className="text-xl font-semibold mb-4">Project Details</h2>
            
            <div className="space-y-2">
              <Label htmlFor="title">Project Title</Label>
              <Input 
                id="title" 
                name="title" 
                placeholder="E.g., Enterprise CRM Implementation" 
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
                <Label htmlFor="budget">Budget Range</Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="budget"
                    name="budget"
                    placeholder="E.g., $50,000 - $80,000"
                    className="pl-10"
                    value={formData.budget}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="deadline">Project Deadline</Label>
                <div className="relative">
                  <Clock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="deadline"
                    name="deadline"
                    placeholder="E.g., 3 months"
                    className="pl-10"
                    value={formData.deadline}
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
                    placeholder="E.g., Remote with occasional travel"
                    className="pl-10"
                    value={formData.location}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="industry">Industry</Label>
                <div className="relative">
                  <Building className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="industry"
                    name="industry"
                    placeholder="E.g., Technology, Manufacturing"
                    className="pl-10"
                    value={formData.industry}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="confidentiality">Confidentiality Level</Label>
              <Select 
                onValueChange={(value) => handleSelectChange('confidentiality', value)}
                defaultValue={formData.confidentiality}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select confidentiality level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Standard">Standard</SelectItem>
                  <SelectItem value="NDA Required">NDA Required</SelectItem>
                  <SelectItem value="High Security">High Security</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="space-y-4 bg-card p-6 rounded-xl shadow-soft border border-border/50">
            <h2 className="text-xl font-semibold mb-4">Documents & Attachments</h2>
            
            <div className="border-2 border-dashed border-input rounded-lg p-6 text-center">
              <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
              <p className="text-muted-foreground mb-2">
                Drag and drop files here, or click to browse
              </p>
              <p className="text-xs text-muted-foreground mb-3">
                Supports PDF, DOCX, XLSX up to 10MB
              </p>
              <div className="relative">
                <Input
                  type="file"
                  id="document-upload"
                  multiple
                  className="absolute inset-0 opacity-0 w-full cursor-pointer"
                  onChange={handleDocumentUpload}
                />
                <Button type="button" variant="outline" className="gap-2">
                  <PlusCircle className="h-4 w-4" />
                  Choose Files
                </Button>
              </div>
            </div>
            
            {documents.length > 0 && (
              <div className="space-y-2 mt-4">
                <h3 className="text-sm font-medium">Uploaded Documents</h3>
                <ul className="space-y-2">
                  {documents.map((doc, index) => (
                    <li 
                      key={index} 
                      className="flex justify-between items-center p-3 bg-secondary rounded-md"
                    >
                      <div>
                        <p className="font-medium text-sm truncate max-w-xs">{doc.name}</p>
                        <p className="text-xs text-muted-foreground">{doc.size}</p>
                      </div>
                      <Button 
                        type="button" 
                        variant="ghost" 
                        size="icon" 
                        className="h-8 w-8 text-destructive hover:text-destructive"
                        onClick={() => removeDocument(index)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          
          <div className="flex justify-end gap-3">
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => navigate('/b2b')}
            >
              Cancel
            </Button>
            <Button type="submit">Post B2B Project</Button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default PostB2BProject;
