interface ServicesHeroProps {
    title: string;
    description?: string | "";
  }
  
  export const SubPagesHero = ({
    title,
    description
  }: ServicesHeroProps) => {
    return (
      <section
        className="items-center px-10 md:px-48 justify-center bg-gradient-to-r from-[#4A90E2] to-[#59B179] py-16"
      >
        <div className="border-l-2 p-5 md:p-14 border-white text-white">
          <h1 className="text-4xl md:text-6xl mb-2 font-bold">{title}</h1>
          <p className="text-xl pt-2">{description}</p>
        </div>
      </section>
    );
  };
  