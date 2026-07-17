import {
  BadgeCheck,
  BadgeDollarSign,
  BookOpen,
  Brain,
  CalendarClock,
  ChevronDown,
  Coins,
  Eye,
  HandCoins,
  Headphones,
  Laptop,
  MessageCircle,
  Rocket,
  ScanLine,
  Target,
  UserCircle,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

type MenuLink = {
  label: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

type MenuGroup = {
  label: string;
  links: MenuLink[];
};

type NavigationMenu = {
  label: string;
  href: string;
  groups: MenuGroup[];
  width: "wide" | "medium";
};

const navigationMenus: NavigationMenu[] = [
  {
    label: "Services",
    href: "/services",
    width: "wide",
    groups: [
      {
        label: "For Providers",
        links: [
          {
            label: "Revenue Cycle Consultation",
            description: "Optimize revenue cycle performance.",
            href: "/services#revenue-cycle-consultation",
            icon: Coins,
          },
          {
            label: "AR & Denial Management",
            description: "Reduce denials, recover revenue.",
            href: "/services#ar-denial-management",
            icon: ScanLine,
          },
          {
            label: "Medical Coding",
            description: "Accurate and compliant coding.",
            href: "/services#medical-coding",
            icon: BadgeCheck,
          },
          {
            label: "Eligibility & Benefit Verification",
            description: "Verify coverage before care.",
            href: "/services#eligibility-verification",
            icon: BadgeDollarSign,
          },
          {
            label: "Payment Posting",
            description: "Ensure accurate payment records.",
            href: "/services#payment-posting",
            icon: HandCoins,
          },
          {
            label: "Patient Scheduling Services",
            description: "Simplify appointment coordination.",
            href: "/services#patient-scheduling",
            icon: CalendarClock,
          },
          {
            label: "Credentialing Services",
            description: "Manage enrollment and compliance.",
            href: "/services#credentialing-services",
            icon: BookOpen,
          },
        ],
      },
      {
        label: "For Payers",
        links: [
          {
            label: "Payer Call Center",
            description: "Support providers and members.",
            href: "/services?tab=payers#payer-call-center",
            icon: Headphones,
          },
          {
            label: "Rejection Management",
            description: "Improve claims accuracy.",
            href: "/services?tab=payers#rejection-management",
            icon: ScanLine,
          },
          {
            label: "Chat Support Services",
            description: "Deliver real-time assistance.",
            href: "/services?tab=payers#chat-support-services",
            icon: MessageCircle,
          },
        ],
      },
    ],
  },
  {
    label: "About",
    href: "/about",
    width: "wide",
    groups: [
      {
        label: "About",
        links: [
          { label: "About", description: "Who we are.", href: "/about#about", icon: UserCircle },
          { label: "Vision", description: "Where we're headed.", href: "/about#vision", icon: Eye },
          { label: "Leadership", description: "Meet our leaders.", href: "/about#leadership", icon: UsersRound },
          { label: "Mission", description: "What drives us.", href: "/about#mission", icon: Rocket },
          { label: "Case Studies", description: "Success stories and results.", href: "/about#case-studies", icon: BookOpen },
          { label: "Purpose", description: "Why we exist.", href: "/about#purpose", icon: Target },
        ],
      },
    ],
  },
  {
    label: "Blog",
    href: "/blog",
    width: "medium",
    groups: [
      {
        label: "Blog",
        links: [
          {
            label: "Telemedicine",
            description: "Virtual care insights.",
            href: "/blog/telemedicine",
            icon: Laptop,
          },
          {
            label: "Psychotherapy",
            description: "Behavioral health updates.",
            href: "/blog/psychotherapy",
            icon: Brain,
          },
        ],
      },
    ],
  },
];

function MenuContent({ menu, onNavigate }: { menu: NavigationMenu; onNavigate: () => void }) {
  return (
    <div className="space-y-6">
      {menu.groups.map((group, groupIndex) => (
        <section
          key={group.label}
          className={groupIndex > 0 ? "border-t border-brand-line pt-6" : ""}
        >
          <p className="px-2 text-xs font-black uppercase tracking-[0.1em] text-slate-400">
            {group.label}
          </p>
          <div className={`mt-3 grid gap-2 ${menu.width === "wide" ? "sm:grid-cols-2" : "grid-cols-1"}`}>
            {group.links.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={onNavigate}
                className="focus-ring group/item flex min-w-0 gap-4 rounded-xl p-3 transition hover:bg-brand-soft"
              >
                <item.icon className="mt-0.5 shrink-0 text-brand-red" size={24} strokeWidth={2.2} />
                <span className="min-w-0">
                  <span className="block text-sm font-black leading-5 text-brand-ink group-hover/item:text-brand-red">
                    {item.label}
                  </span>
                  <span className="mt-1 block text-xs leading-5 text-slate-500">
                    {item.description}
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

function DesktopDropdown({ menu }: { menu: NavigationMenu }) {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<number | null>(null);
  const active = pathname === menu.href || pathname.startsWith(`${menu.href}/`);

  const cancelClose = () => {
    if (closeTimer.current !== null) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const openMenu = () => {
    cancelClose();
    setOpen(true);
  };

  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = window.setTimeout(() => {
      setOpen(false);
      closeTimer.current = null;
    },100);
  };

  useEffect(() => () => cancelClose(), []);

  return (
    <div
      className="relative"
      onMouseEnter={openMenu}
      onMouseLeave={scheduleClose}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          cancelClose();
          setOpen(false);
        }
      }}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((value) => !value)}
        className={`focus-ring inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-bold transition ${
          active ? "text-brand-red" : "text-brand-ink hover:text-brand-red"
        }`}
      >
        {menu.label}
        <ChevronDown
          size={15}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div
          className={`fixed left-1/2 top-20 -translate-x-1/2 rounded-3xl border border-brand-line bg-white p-6 shadow-[0_28px_80px_rgba(15,23,42,0.18)] ${
            menu.width === "wide" ? "w-[min(56rem,calc(100vw-3rem))]" : "w-[min(38rem,calc(100vw-3rem))]"
          }`}
        >
          <div className="mb-4 flex items-center justify-between border-b border-brand-line pb-4">
            <span className="text-sm font-black text-brand-ink">{menu.label}</span>
            <Link
              to={menu.href}
              onClick={() => setOpen(false)}
              className="focus-ring rounded text-xs font-black text-brand-red hover:text-red-700"
            >
              View overview
            </Link>
          </div>
          <MenuContent menu={menu} onNavigate={() => setOpen(false)} />
        </div>
      )}
    </div>
  );
}

export function DesktopNavigation() {
  return (
    <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          `focus-ring rounded-md px-3 py-2 text-sm font-bold transition ${
            isActive ? "text-brand-red" : "text-brand-ink hover:text-brand-red"
          }`
        }
      >
        Home
      </NavLink>
      {navigationMenus.map((menu) => (
        <DesktopDropdown key={menu.href} menu={menu} />
      ))}
      <NavLink
        to="/career"
        className={({ isActive }) =>
          `focus-ring rounded-md px-3 py-2 text-sm font-bold transition ${
            isActive ? "text-brand-red" : "text-brand-ink hover:text-brand-red"
          }`
        }
      >
        Career
      </NavLink>
    </nav>
  );
}

function MobileDropdown({ menu, onNavigate }: { menu: NavigationMenu; onNavigate: () => void }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-xl border border-brand-line">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="focus-ring flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-black text-brand-ink"
      >
        {menu.label}
        <ChevronDown size={17} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="border-t border-brand-line p-3">
          <Link
            to={menu.href}
            onClick={onNavigate}
            className="focus-ring mb-3 block rounded-lg bg-gray-50 px-3 py-2 text-xs font-black text-brand-red"
          >
            View {menu.label} overview
          </Link>
          <MenuContent menu={menu} onNavigate={onNavigate} />
        </div>
      )}
    </div>
  );
}

export function MobileNavigation({ onNavigate }: { onNavigate: () => void }) {
  return (
    <>
      <NavLink
        to="/"
        end
        onClick={onNavigate}
        className={({ isActive }) =>
          `focus-ring rounded-md px-3 py-3 text-sm font-bold ${
            isActive ? "bg-brand-soft text-brand-red" : "text-brand-ink"
          }`
        }
      >
        Home
      </NavLink>
      {navigationMenus.map((menu) => (
        <MobileDropdown key={menu.href} menu={menu} onNavigate={onNavigate} />
      ))}
      <NavLink
        to="/career"
        onClick={onNavigate}
        className={({ isActive }) =>
          `focus-ring rounded-md px-3 py-3 text-sm font-bold ${
            isActive ? "bg-brand-soft text-brand-red" : "text-brand-ink"
          }`
        }
      >
        Career
      </NavLink>
    </>
  );
}
