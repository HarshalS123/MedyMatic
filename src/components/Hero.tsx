import { Button } from "./ui/button";
import herovideo from "@/assets/herovideo.mp4";

export const Hero = () => {
  return (
    <section className="relative container grid lg:grid-cols-2 place-items-center py-16 px-20 md:py-20 gap-2 overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
      >
        <source src={herovideo} type="video/mp4" />
      </video>

      {/* Overlay for content */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-center lg:text-start space-y-8">
        <main className="text-4xl md:text-5xl font-bold">
          <h1 className="leading-tight text-white" >
            Streamline your{" "}
            <span className="text-[#4A90E2] md:whitespace-nowrap">
              Medical Billing <span className="text-white">Process</span>{" "}
            </span>
          </h1>
        </main>

        <p className="text-xl text-white md:w-full lg:mx-0">
          We offer expert billing solutions tailored to meet the unique needs
          of healthcare providers at a fraction of the cost. With our
          cost-effective solutions, providers can benefit from comprehensive
          billing support without the hefty price tag, ensuring maximum
          profitability and sustainability for their practices.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-1/3 bg-[#4A90E2]">Get Started</Button>
        </div>
      </div>

      {/* Video credits */}
      <a
        className="relative hidden z-20 text-sm text-white mt-4"
        href="https://www.vecteezy.com/free-videos/dna"
      >
        Dna Stock Videos by Vecteezy
      </a>
    </section>
  );
};
