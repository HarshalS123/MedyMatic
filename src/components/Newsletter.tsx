export const Newsletter = () => {
  return (
    <section id="newsletter">
      <div className="container text-center py-24 sm:py-32">
        <h3 className=" text-4xl text-[#4A90E2] md:text-5xl font-bold">
          Contact Us
        </h3>
        <p className="text-2xl mt-4 mb-8">
          We prioritize clear and open communication with our clients. <br />
          Have questions about our medical billing services or want to find out if we're the right fit for your practice?
        </p>

        <p className="text-[#219072] text-xl">
          Reach out to us via email at
        </p>
        <a href="mailto:info@medymatic.com" className="text-[#219072] text-2xl underline">
          info@medymatic.com
        </a>
      </div>
    </section>
  );
};
