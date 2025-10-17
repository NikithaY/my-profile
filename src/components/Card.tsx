import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div
      className={`bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-lg p-6 transition-all duration-300 ${
        hover ? 'hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
