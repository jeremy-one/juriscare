interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'light' | 'dark' | 'primary';
  id?: string;
}

export default function Section({ children, className = '', background = 'white', id }: SectionProps) {
  const backgroundStyles = {
    white: 'bg-white',
    light: 'bg-light',
    dark: 'bg-dark text-white',
    primary: 'bg-primary text-white'
  };

  return (
    <section id={id} className={`py-20 md:py-32 ${backgroundStyles[background]} ${className}`}>
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {children}
      </div>
    </section>
  );
}
