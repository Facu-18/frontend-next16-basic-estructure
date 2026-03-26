import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  title: string;
  description: string;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ title, description, className }) => {
  return (
    <div className={cn(
      "p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800",
      "bg-white dark:bg-zinc-900 shadow-sm",
      "hover:shadow-md transition-all duration-300 ease-in-out hover:scale-[1.02]",
      className
    )}>
      <h3 className="text-lg font-bold mb-2 text-zinc-900 dark:text-zinc-50">{title}</h3>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{description}</p>
    </div>
  );
};
