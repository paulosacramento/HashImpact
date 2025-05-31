
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
          src="/lovable-uploads/20e5684f-72c1-4189-9617-6e84acb50414.png"
          alt="Bitaxe Bitcoin miners circuit boards"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
    </section>
  );
};

export { SectionSeparator };
