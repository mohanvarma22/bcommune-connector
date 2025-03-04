
import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Briefcase, 
  FileText, 
  Users, 
  Lightbulb, 
  Globe, 
  Settings,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

interface SidebarItemProps {
  to: string;
  icon: React.ElementType;
  label: string;
  isOpen: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ to, icon: Icon, label, isOpen }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 transition-all duration-200 group relative",
        isActive 
          ? "bg-primary text-primary-foreground" 
          : "text-muted-foreground hover:bg-muted hover:text-foreground",
        !isOpen && "justify-center px-2"
      )}
    >
      <Icon className={cn("h-5 w-5 shrink-0", !isOpen && "h-6 w-6")} />
      {isOpen && <span className="text-sm font-medium">{label}</span>}
      {!isOpen && (
        <div className="absolute left-14 z-50 rounded-md bg-popover px-2 py-1 text-sm text-popover-foreground shadow-md opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 pointer-events-none whitespace-nowrap">
          {label}
        </div>
      )}
    </NavLink>
  );
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle }) => {
  return (
    <aside 
      className={cn(
        "bg-card border-r border-border flex flex-col transition-all duration-300 ease-in-out",
        isOpen ? "w-64" : "w-12"
      )}
    >
      <div className={cn(
        "flex items-center h-16 border-b border-border px-3",
        isOpen ? "justify-between" : "justify-center"
      )}>
        {isOpen && (
          <div className="text-xl font-semibold text-primary animate-fade-in">
            bcommune
          </div>
        )}
        <button 
          onClick={onToggle}
          className="rounded-lg p-2 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
        >
          {isOpen ? (
            <ChevronLeft className="h-4 w-4" />
          ) : (
            <ChevronRight className="h-4 w-4" />
          )}
        </button>
      </div>
      
      <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-2">
        <SidebarItem to="/dashboard" icon={Briefcase} label="Dashboard" isOpen={isOpen} />
        <SidebarItem to="/jobs" icon={FileText} label="Job Postings" isOpen={isOpen} />
        <SidebarItem to="/freelance" icon={Users} label="Freelance" isOpen={isOpen} />
        <SidebarItem to="/core-connect" icon={Lightbulb} label="CORE Connect" isOpen={isOpen} />
        <SidebarItem to="/b2b" icon={Globe} label="B2B Space" isOpen={isOpen} />
      </nav>
      
      <div className="border-t border-border p-3">
        <SidebarItem to="/settings" icon={Settings} label="Settings" isOpen={isOpen} />
      </div>
    </aside>
  );
};

export default Sidebar;
