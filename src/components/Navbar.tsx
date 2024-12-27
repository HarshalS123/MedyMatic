import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { buttonVariants } from "./ui/button";
import { Menu } from "lucide-react";
import { LogoIcon } from "./Icons";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "/services",
    label: "Services",
  },
  {
    href: "#",
    label: "Blog",
  },
  {
    href: "/about",
    label: "About Us",
  },
  {
    href: "/careers",
    label: "Careers",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showBlogDropdown, setShowBlogDropdown] = useState(false);

  const blogDropdownItems = [
    { href: "/telemedicine", label: "Telemedicine" },
    { href: "/psychotherapy", label: "Psychotherapy" },
  ];

  return (
    <header className="sticky top-0 py-5 z-40 w-full bg-white">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 w-full gap-20 md:gap-28 flex justify-between">
          <NavigationMenuItem className="font-bold flex">
            <a
              rel="noreferrer noopener"
              href="/"
              className="ml-2 font-bold text-xl flex"
            >
              <LogoIcon />
            </a>
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu
                  className="flex md:hidden h-5 w-5"
                  onClick={() => setIsOpen(true)}
                >
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl">
                    <LogoIcon />
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {routeList.map(({ href, label }) =>
                    label === "Blog" ? (
                      <div
                        key={label}
                        className="relative"
                        onMouseEnter={() => setShowBlogDropdown(true)}
                        onMouseLeave={() => setShowBlogDropdown(false)}
                      >
                        <button
                          className={buttonVariants({ variant: "ghost" })}
                          onClick={() =>
                            setShowBlogDropdown(!showBlogDropdown)
                          }
                        >
                          {label}
                        </button>
                        {showBlogDropdown && (
                          <div className="absolute top-full mt-2 bg-white shadow-lg rounded-md p-2">
                            {blogDropdownItems.map(({ href, label }) => (
                              <a
                                key={label}
                                href={href}
                                className="block px-4 py-2 hover:bg-gray-100 text-black"
                              >
                                {label}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <a
                        rel="noreferrer noopener"
                        key={label}
                        href={href}
                        className={buttonVariants({ variant: "ghost" })}
                      >
                        {label}
                      </a>
                    )
                  )}
                  <a
              rel="noreferrer noopener"
              href="/clientsupport"
              className={`text-[#219072] hover:text-[#219072] text-[17px] ${buttonVariants({
                variant: "ghost",
              })}`}
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-1"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M23.1001 11.8767C22.7384 8.16673 20.5451 2.33337 13.7668 2.33337C6.9884 2.33337 4.79505 8.16673 4.4334 11.8767C3.16465 12.3582 2.32777 13.5764 2.3334 14.9334V16.5667C2.3334 18.3709 3.79596 19.8334 5.60005 19.8334C7.40419 19.8334 8.86675 18.3708 8.86675 16.5667V14.9334C8.86085 13.6056 8.05475 12.4126 6.82505 11.9117C7.0584 9.76502 8.20175 4.66673 13.7668 4.66673C19.3318 4.66673 20.4634 9.76502 20.6968 11.9117C19.4696 12.4136 18.6675 13.6075 18.6668 14.9334V16.5667C18.6693 17.1814 18.8445 17.783 19.1725 18.3028C19.5005 18.8227 19.968 19.2398 20.5218 19.5067C20.0318 20.4284 18.7834 21.6767 15.7151 22.05C15.1017 21.1187 13.9151 20.7515 12.8829 21.1738C11.8508 21.596 11.2616 22.6895 11.4769 23.7837C11.6921 24.8779 12.6516 25.6667 13.7668 25.6667C14.1989 25.6643 14.6218 25.542 14.9885 25.3133C15.3551 25.0847 15.6511 24.7587 15.8434 24.3717C20.8484 23.8 22.4468 21.2217 22.9484 19.705C24.3056 19.2654 25.2184 17.9932 25.2001 16.5667V14.9334C25.2057 13.5764 24.3688 12.3582 23.1001 11.8767ZM6.5334 16.5667C6.5334 17.0822 6.11554 17.5 5.60005 17.5C5.08457 17.5 4.66675 17.0822 4.66675 16.5667V14.9334C4.66581 14.8102 4.68926 14.6881 4.73574 14.574C4.78222 14.4599 4.85082 14.3562 4.93758 14.2688C5.02434 14.1814 5.12755 14.112 5.24125 14.0646C5.35495 14.0173 5.47691 13.9929 5.60008 13.9929C5.72325 13.9929 5.8452 14.0173 5.95891 14.0646C6.07261 14.112 6.17582 14.1814 6.26258 14.2688C6.34934 14.3562 6.41794 14.4599 6.46442 14.574C6.5109 14.6881 6.53435 14.8102 6.5334 14.9334V16.5667ZM21.0001 14.9334C21.0001 14.4179 21.4179 14 21.9334 14C22.4489 14 22.8668 14.4179 22.8668 14.9334V16.5667C22.8668 17.0822 22.4489 17.5 21.9334 17.5C21.4179 17.5 21.0001 17.0822 21.0001 16.5667V14.9334Z"
                  fill="#219072"
                />
              </svg>
              Client Support
            </a>
                  <a
                    rel="noreferrer noopener"
                    href="/contact"
                    className={`w-[110px] border ${buttonVariants({
                      variant: "secondary",
                    })}`}
                  >
                    Contact Us
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          <nav className="hidden md:flex gap-2 relative">
            {routeList.map(({ href, label }, i) =>
              label === "Blog" ? (
                <div
                  key={i}
                  className="relative"
                  onMouseEnter={() => setShowBlogDropdown(true)}
                  onMouseLeave={() => setShowBlogDropdown(false)}
                >
                  <button
                    className={`text-[18px] text-[#444444] ${buttonVariants({
                      variant: "ghost",
                    })}`}
                  >
                    {label}
                  </button>
                  {showBlogDropdown && (
                    <div className="absolute z-50 top-full bg-white shadow-lg rounded-md">
                      {blogDropdownItems.map(({ href, label }) => (
                        <a
                          key={label}
                          href={href}
                          className="block px-4 py-2 hover:bg-gray-100 rounded-md text-black"
                        >
                          {label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  rel="noreferrer noopener"
                  href={href}
                  key={i}
                  className={`text-[18px] text-[#444444] ${buttonVariants({
                    variant: "ghost",
                  })}`}
                >
                  {label}
                </a>
              )
            )}
            <a
              rel="noreferrer noopener"
              href="/clientsupport"
              className={`text-[#219072] hover:text-[#219072] text-[18px] ${buttonVariants({
                variant: "ghost",
              })}`}
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-1"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M23.1001 11.8767C22.7384 8.16673 20.5451 2.33337 13.7668 2.33337C6.9884 2.33337 4.79505 8.16673 4.4334 11.8767C3.16465 12.3582 2.32777 13.5764 2.3334 14.9334V16.5667C2.3334 18.3709 3.79596 19.8334 5.60005 19.8334C7.40419 19.8334 8.86675 18.3708 8.86675 16.5667V14.9334C8.86085 13.6056 8.05475 12.4126 6.82505 11.9117C7.0584 9.76502 8.20175 4.66673 13.7668 4.66673C19.3318 4.66673 20.4634 9.76502 20.6968 11.9117C19.4696 12.4136 18.6675 13.6075 18.6668 14.9334V16.5667C18.6693 17.1814 18.8445 17.783 19.1725 18.3028C19.5005 18.8227 19.968 19.2398 20.5218 19.5067C20.0318 20.4284 18.7834 21.6767 15.7151 22.05C15.1017 21.1187 13.9151 20.7515 12.8829 21.1738C11.8508 21.596 11.2616 22.6895 11.4769 23.7837C11.6921 24.8779 12.6516 25.6667 13.7668 25.6667C14.1989 25.6643 14.6218 25.542 14.9885 25.3133C15.3551 25.0847 15.6511 24.7587 15.8434 24.3717C20.8484 23.8 22.4468 21.2217 22.9484 19.705C24.3056 19.2654 25.2184 17.9932 25.2001 16.5667V14.9334C25.2057 13.5764 24.3688 12.3582 23.1001 11.8767ZM6.5334 16.5667C6.5334 17.0822 6.11554 17.5 5.60005 17.5C5.08457 17.5 4.66675 17.0822 4.66675 16.5667V14.9334C4.66581 14.8102 4.68926 14.6881 4.73574 14.574C4.78222 14.4599 4.85082 14.3562 4.93758 14.2688C5.02434 14.1814 5.12755 14.112 5.24125 14.0646C5.35495 14.0173 5.47691 13.9929 5.60008 13.9929C5.72325 13.9929 5.8452 14.0173 5.95891 14.0646C6.07261 14.112 6.17582 14.1814 6.26258 14.2688C6.34934 14.3562 6.41794 14.4599 6.46442 14.574C6.5109 14.6881 6.53435 14.8102 6.5334 14.9334V16.5667ZM21.0001 14.9334C21.0001 14.4179 21.4179 14 21.9334 14C22.4489 14 22.8668 14.4179 22.8668 14.9334V16.5667C22.8668 17.0822 22.4489 17.5 21.9334 17.5C21.4179 17.5 21.0001 17.0822 21.0001 16.5667V14.9334Z"
                  fill="#219072"
                />
              </svg>
              Client Support
            </a>
          </nav>

          <div className="hidden md:flex gap-2">
            <a
              rel="noreferrer noopener"
              href="/contact"
              className={`border ${buttonVariants({
                variant: "secondary",
              })}`}
            >
              Contact Us
            </a>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

