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
                    className={`text-[17px] ${buttonVariants({
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
                  className={`text-[17px] ${buttonVariants({
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
              className={`text-[#219072] text-[17px] ${buttonVariants({
                variant: "ghost",
              })}`}
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* SVG Path */}
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

