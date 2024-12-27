export const Footer = () => {
  return (
    <footer id="footer" className="bg-[#219072] text-white">

      <section className="container md:px-24 py-20 grid grid-cols-1 xl:grid-cols-3 gap-x-12 gap-y-8">
        <div className="">
          <a
            rel="noreferrer noopener"
            href="/"
            className=" flex flex-col gap-2"
          >
            <h6 className="font-bold text-xl">MedyMatic <br /> Business Solutions</h6>
            <p>
              Simplifying Medical Billing, <br /> Empowering Healthcare Providers.
            </p>

          </a>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Contact</h3>

          <div>
            <a
              rel="noreferrer noopener"
              href="mailto:info@medymatic.com"
              className="flex flex-row items-center gap-2"
            >
              <svg width="18" height="18" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M22.5452 2.66663C26.9852 2.66663 30.3332 6.28929 30.3332 11.0933V20.2506C30.3332 22.7093 29.4638 24.9306 27.8838 26.5066C26.4665 27.9186 24.6278 28.6666 22.5665 28.6666H9.42917C7.37184 28.6666 5.5345 27.92 4.11584 26.5066C2.53584 24.9306 1.6665 22.7093 1.6665 20.2506V11.0933C1.6665 6.28929 5.0145 2.66663 9.4545 2.66663H22.5452ZM22.5452 4.66663H9.4545C6.10117 4.66663 3.6665 7.36929 3.6665 11.0933V20.2506C3.6665 22.1746 4.32784 23.8933 5.52784 25.0893C6.5625 26.1226 7.91317 26.6666 9.43317 26.6666H22.5452C22.5478 26.664 22.5585 26.6666 22.5665 26.6666C24.0878 26.6666 25.4372 26.1226 26.4718 25.0893C27.6732 23.8933 28.3332 22.1746 28.3332 20.2506V11.0933C28.3332 7.36929 25.8985 4.66663 22.5452 4.66663ZM24.6465 10.8384C24.9945 11.2664 24.9292 11.8957 24.5012 12.245L18.5758 17.061C17.8265 17.6557 16.9305 17.953 16.0358 17.953C15.1438 17.953 14.2545 17.6584 13.5105 17.069L7.5305 12.2477C7.09984 11.901 7.03317 11.2704 7.3785 10.841C7.7265 10.413 8.35584 10.345 8.78517 10.6904L14.7598 15.5064C15.5105 16.101 16.5678 16.101 17.3238 15.501L23.2385 10.693C23.6678 10.3424 24.2972 10.409 24.6465 10.8384Z" fill="white" />
              </svg>
              info@medymatic.com
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Links</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className=""
            >
              Privacy Policy
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className=""
            >
              Term of Use
            </a>
          </div>
        </div>
      </section>
      <hr className="w-10/12 mx-auto border-white" />
      <section className="container py-14 text-center">
        <h3>
          &copy; 2024 MedyMatic Business Solutions. All rights reserved.
        </h3>
      </section>
    </footer>
  );
};
