interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div
      className={`
        bg-white rounded-2xl shadow-md p-8
        border border-gray-100
        ${hover ? 'hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
