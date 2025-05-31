
interface SectionSeparatorProps {
  imageUrl: string;
  alt: string;
  className?: string;
}

const SectionSeparator = ({ imageUrl, alt, className = "" }: SectionSeparatorProps) => {
  return (
    <section className={`relative w-full h-64 md:h-80 lg:h-96 overflow-hidden ${className}`}>
      <div className="absolute inset-0">
        <img 
          src={imageUrl} 
          alt={alt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
    </section>
  );
};

export { SectionSeparator };
