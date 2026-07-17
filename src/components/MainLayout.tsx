import { Headphones, Mail, Map, MapPin, Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { ButtonLink } from "./ButtonLink";
import { HashScroll } from "./HashScroll";
import { DesktopNavigation, MobileNavigation } from "./NavigationMenus";
import { Seo } from "./Seo";

export function MainLayout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-brand-ink">
      <Seo />
      <HashScroll />
      <header className="sticky top-0 z-50 border-b border-brand-line bg-white/95 backdrop-blur">
        <div className="bg-brand-red text-white">
          <div className="container-page flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 py-2 text-[11px] font-semibold sm:justify-end sm:text-xs">
            <a
              href="tel:+917972176347"
              className="focus-ring inline-flex items-center gap-1.5 rounded-sm transition hover:text-white/80"
              aria-label="Call Medymatic India at +91 79721 76347"
            >
              <Phone size={13} aria-hidden="true" />
              +91 79721 76347
            </a>
            <a
              href="tel:+18475039952"
              className="focus-ring inline-flex items-center gap-1.5 rounded-sm transition hover:text-white/80"
              aria-label="Call Medymatic USA at +1 (847) 503-9952"
            >
              <Phone size={13} aria-hidden="true" />
              +1 (847) 503-9952
            </a>
            <a
              href="mailto:info@medymatic.com"
              className="focus-ring inline-flex items-center gap-1.5 rounded-sm transition hover:text-white/80"
            >
              <Mail size={13} aria-hidden="true" />
              info@medymatic.com
            </a>
          </div>
        </div>

        <div className="container-page flex h-20 items-center justify-between gap-4">
          <Link to="/" className="focus-ring flex items-center gap-3 rounded-md">
            <img src="/MedymaticLogo.svg" alt="Medymatic logo" />

          </Link>

          <DesktopNavigation />

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              to="/client-support"
              className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-full border border-red-100 bg-red-50 px-4 text-sm font-black text-brand-red transition hover:border-brand-red hover:bg-brand-red hover:text-white"
            >
              <Headphones size={17} />
              Client Support
            </Link>
            <ButtonLink href="/contact">Contact Us</ButtonLink>
          </div>

          <button
            type="button"
            className="focus-ring inline-grid h-11 w-11 place-items-center rounded-md border border-brand-line lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div className="border-t border-brand-line bg-white lg:hidden">
            <nav className="container-page grid gap-2 py-4" aria-label="Mobile navigation">
              <MobileNavigation onNavigate={() => setOpen(false)} />
              <Link
                to="/client-support"
                onClick={() => setOpen(false)}
                className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-red-100 bg-red-50 px-5 text-sm font-black text-brand-red"
              >
                <Headphones size={18} />
                Client Support
              </Link>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="focus-ring inline-flex min-h-12 items-center justify-center rounded-full bg-brand-red px-5 text-sm font-black text-white"
              >
                Contact Us
              </Link>
            </nav>
          </div>
        )}
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="relative overflow-hidden border-t border-brand-line bg-white text-brand-ink">
        <div className="container-page">
          <div className="relative z-10 grid grid-cols-2 gap-x-6 gap-y-9 py-10 sm:gap-x-10 sm:py-12 lg:grid-cols-[1.7fr_0.7fr_0.7fr_1fr] lg:gap-14">
            <Link to="/" className="focus-ring col-span-2 inline-flex w-fit rounded-md lg:col-span-1">
              <img
                src="/MedymaticLogo.svg"
                alt="Medymatic logo"
                className="h-12 w-auto sm:h-14 lg:h-16"
              />
            </Link>

            <FooterColumn
              title="Quick Links"
              links={[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "About", href: "/about" },
                { label: "Blog", href: "/blog" },
                { label: "Career", href: "/career" },
              ]}
            />

            <FooterColumn
              title="Support"
              links={[
                { label: "Client Support", href: "/client-support" },
                { label: "Contact Us", href: "/contact" },
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Terms of Use", href: "/terms" },
              ]}
            />

            <div className="col-span-2 sm:max-w-xl lg:col-span-1 lg:max-w-none">
              <h2 className="text-base font-black text-brand-red sm:text-lg">Contact</h2>
              <div className="mt-3 space-y-3 break-words text-sm leading-6 text-brand-muted sm:mt-4 sm:text-base lg:text-lg lg:leading-7">
                <a href="mailto:info@medymatic.com" target="_blank" rel="noopener noreferrer" className="break-all sm:break-normal flex items-center gap-2">
                  <Mail size={16} className="inline-block" />
                  <p className="hover:text-brand-red">info@medymatic.com</p>
                </a>
                <a href="tel:+917972176347" target="_blank" rel="noopener noreferrer" className="break-all sm:break-normal flex items-center gap-2">
                  <Phone size={16} className="inline-block" />
                  <p className="hover:text-brand-red">
                    +91 79721 76347
                  </p>
                </a>
                <a href="tel:+18475039952" target="_blank" rel="noopener noreferrer" className="break-all sm:break-normal flex items-center gap-2">
                  <Phone size={16} className="inline-block" />
                  <p className="hover:text-brand-red">
                    +1 (847) 503-9952
                  </p>
                </a>
                <a href="https://maps.app.goo.gl/pB9zezepqB3azvuH6" target="_blank" rel="noopener noreferrer" className="break-all sm:break-normal flex items-center gap-2">
                  <MapPin size={16} className="inline-block  min-w-[20px]" />
                  <p className="hover:text-brand-red">76, Jetvan Housing Society, Shastri Layout, Nagpur, 440025</p>
                </a>
                <a href="https://maps.app.goo.gl/6q3r7bxdbpw2ThGu8" target="_blank" rel="noopener noreferrer" className="break-all sm:break-normal flex items-center gap-2">
                  <MapPin size={16} className="inline-block  min-w-[20px]" />
                  <p className="hover:text-brand-red">11911 S Governors Ave, Dover, DE 19904, United States</p>
                </a>
              </div>
            </div>
          </div>

          <div className="relative z-10 border-b border-brand-line py-5 text-center sm:text-left">
            <p className="text-xs leading-5 text-brand-muted sm:text-sm lg:text-base">
              © {new Date().getFullYear()} MedyMatic Business Solutions. All rights reserved.
            </p>
          </div>
        </div>

        <p className="pointer-events-none overflow-hidden py-3 text-center text-[clamp(2rem,12vw,7rem)] font-black leading-none uppercase tracking-[0.12em] text-gray-100/70 select-none sm:tracking-[0.22em] lg:py-0 lg:text-[clamp(3rem,9vw,7rem)] lg:tracking-[0.35em]">
          Medymatic
        </p>
      </footer >
    </div >
  );
}

type FooterColumnProps = {
  title: string;
  links: Array<{ label: string; href: string }>;
};

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div className="min-w-0">
      <h2 className="text-base font-black text-brand-red sm:text-lg">{title}</h2>
      <nav className="mt-3 grid gap-2.5 sm:mt-4 sm:gap-3" aria-label={title}>
        {links.map((link) => (
          <Link
            key={link.label}
            to={link.href}
            className="w-fit text-sm font-medium leading-6 text-brand-muted transition hover:text-brand-red sm:text-base lg:text-lg"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
