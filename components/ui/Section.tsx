interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'light' | 'dark' | 'primary';
  id?: string;
}

export default function Section({ children, className = '', background = 'white', id }: SectionProps) {
  const backgroundStyles = {
    white: 'bg-white',
    light: 'bg-[var(--light)]',
    dark: 'bg-[var(--dark)] text-white',
    primary: 'bg-[var(--primary)] text-white'
  };

  return (
    <section id={id} className={`py-16 md:py-24 ${backgroundStyles[background]} ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
