import Link from 'next/link';
import { clsx } from 'clsx';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  href, 
  children,
  variant = 'primary',
  className = ''
}) => {
  return (
    <Link 
      href={href} 
      className={clsx(
        'inline-block font-semibold text-xs sm:text-base py-2 sm:py-3 px-6 sm:px-8 rounded-lg transition-colors',
        variant === 'primary' && 'bg-secondary text-white hover:bg-secondary/90',
        variant === 'outline' && 'bg-transparent border-2 border-gray-300 text-gray-300 hover:bg-white/10',
        className
      )}
    >
      {children}
    </Link>
  );
};

export default Button;