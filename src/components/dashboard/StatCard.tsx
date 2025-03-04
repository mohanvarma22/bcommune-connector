
import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  description?: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon: Icon,
  description,
  trend,
  className,
}) => {
  return (
    <div className={cn("relative overflow-hidden rounded-xl bg-card p-6 shadow-soft transition-all duration-200 hover:shadow-md", className)}>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <h3 className="mt-2 text-3xl font-semibold">{value}</h3>
          
          {trend && (
            <p className={cn(
              "mt-1 text-sm flex items-center",
              trend.isPositive ? "text-green-600" : "text-red-600"
            )}>
              <span className="mr-1">
                {trend.isPositive ? '↑' : '↓'}
              </span>
              {trend.value}%
            </p>
          )}
          
          {description && (
            <p className="mt-2 text-sm text-muted-foreground">{description}</p>
          )}
        </div>
        
        <div className="rounded-full p-2 bg-primary/10">
          <Icon className="h-5 w-5 text-primary" />
        </div>
      </div>
      
      <div className="absolute -bottom-2 -right-2 h-24 w-24 rounded-full bg-primary/5 blur-xl"></div>
    </div>
  );
};

export default StatCard;
