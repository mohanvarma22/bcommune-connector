
import React from 'react';
import { Avatar } from '@/components/ui/avatar';
import { Linkedin } from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  position: string;
  avatar: string;
  linkedin?: string;
}

interface CompanyTeamMemberProps {
  member: TeamMember;
}

const CompanyTeamMember: React.FC<CompanyTeamMemberProps> = ({ member }) => {
  return (
    <div className="bg-card border border-border/50 rounded-lg p-4 text-center hover:shadow-md transition-shadow">
      <Avatar className="w-20 h-20 mx-auto mb-3">
        <img 
          src={member.avatar} 
          alt={member.name} 
          className="aspect-square"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "https://via.placeholder.com/80";
          }}
        />
      </Avatar>
      <h3 className="font-medium text-base">{member.name}</h3>
      <p className="text-sm text-muted-foreground mb-2">{member.position}</p>
      
      {member.linkedin && (
        <a 
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer" 
          className="inline-flex items-center text-primary text-sm hover:underline"
        >
          <Linkedin className="w-3 h-3 mr-1" />
          LinkedIn
        </a>
      )}
    </div>
  );
};

export default CompanyTeamMember;
