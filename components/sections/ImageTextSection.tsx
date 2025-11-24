interface ImageTextSectionProps {
  title: string;
  description: string;
  image: string;
  imagePosition?: 'left' | 'right';
  background?: 'white' | 'beige' | 'dark';
  button?: {
    text: string;
    href: string;
  };
}

export default function ImageTextSection({
  title,
  description,
  image,
  imagePosition = 'left',
  background = 'white',
  button
}: ImageTextSectionProps) {
  const backgroundStyles = {
    white: 'bg-white text-gray-900',
    beige: 'bg-beige text-gray-900',
    dark: 'bg-dark text-white'
  };

  const isImageLeft = imagePosition === 'left';

  return (
    <section className={`${backgroundStyles[background]} py-0`}>
      <div className={`grid grid-cols-1 lg:grid-cols-2 min-h-[600px]`}>
        {/* Image */}
        <div className={`relative ${isImageLeft ? 'lg:order-1' : 'lg:order-2'}`}>
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className={`flex items-center ${isImageLeft ? 'lg:order-2' : 'lg:order-1'}`}>
          <div className="px-8 sm:px-12 lg:px-16 py-16 lg:py-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal mb-6 leading-tight">
              {title}
            </h2>
            <p className={`text-lg leading-relaxed mb-8 ${background === 'dark' ? 'text-white/90' : 'text-gray-700'}`}>
              {description}
            </p>
            {button && (
              <a
                href={button.href}
                className={`inline-flex items-center gap-2 font-medium transition-all duration-300 ${
                  background === 'dark'
                    ? 'text-white hover:text-beige'
                    : 'text-primary hover:text-primary-dark'
                }`}
              >
                {button.text}
                <svg
                  className="w-5 h-5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
