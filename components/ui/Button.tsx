import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  disabled = false
}: ButtonProps) {
  const baseStyles = 'inline-block font-medium rounded-full transition-all duration-300 text-center';

  const variantStyles = {
    primary: 'bg-primary text-white hover:bg-dark hover:text-white shadow-md hover:shadow-xl',
    secondary: 'bg-secondary text-white hover:bg-dark hover:text-white shadow-md hover:shadow-xl',
    outline: 'border-2 border-primary text-primary hover:bg-dark hover:border-dark hover:text-white'
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const styles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={styles} disabled={disabled}>
      {children}
    </button>
  );
}
