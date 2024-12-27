import ourcompany from "@/assets/our-company.png";
import ourservices from "@/assets/our-services.png"

interface AboutProps {
  icon: string;
  description: string;
}

const abouts: AboutProps[] = [
  {
    icon: ourcompany,
    description:
      "We are committed to empowering healthcare providers by offering expert medical billing services that simplify revenue cycle management. With a deep understanding of the healthcare industry, we focus on delivering tailored billing solutions that help our clients enhance efficiency, minimize errors, and maximize profitability. Our team combines industry expertise and cutting-edge technology to ensure seamless billing operations, allowing healthcare providers to focus on delivering quality patient care without the complexities of billing tasks.",
  },
  {
    icon: ourservices,
    description:
      "We offer a comprehensive suite of medical billing solutions designed to meet the unique needs of healthcare providers. Our services cover every aspect of the billing process, from patient registration and claims submission to denial management and payment posting. By customizing our solutions to each client’s needs, we ensure accurate, timely, and compliant billing practices that reduce overhead costs and improve cash flow. With a focus on efficiency and reliability, our services are crafted to support healthcare practices in achieving long-term success.",
  }
];

export const About = () => {
  return (
    <>
      
      <section
        id="about"
        className="container py-24 flex flex-col items-center gap-8 justify-center sm:py-32"
      >
        <h2 className="text-black text-3xl font-bold items-start">Who we are?</h2>
        
        {abouts.map(({ icon, description }: AboutProps) => (
          <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#D3FFE3]  to-[#F3FFF7] border border-[#029A85] shadow-lg w-11/12 rounded-lg py-12">
            <div className="px-6 flex flex-col items-center md:items-start md:flex-row gap-8 md:gap-12">
              <img
                src={icon}
                alt=""
                className="w-[150px] mt-6 object-contain rounded-lg"
              />
              <div className="bg-green-0 flex flex-col justify-between">
                <div className="pb-6">
                  <p className="text-xl text-[#3A3A3A] mt-4">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}

      </section>
    </>
  );
};
