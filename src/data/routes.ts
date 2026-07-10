import type { ComponentType } from "react";
import { AboutPage } from "../pages/AboutPage";
import { AppointmentPage } from "../pages/AppointmentPage";
import { BlogPage } from "../pages/BlogPage";
import { CareerPage } from "../pages/CareerPage";
import { ClientSupportPage } from "../pages/ClientSupportPage";
import { ContactPage } from "../pages/ContactPage";
import { HomePage } from "../pages/HomePage";
import { NewPracticeLaunchBlogPage } from "../pages/NewPracticeLaunchBlogPage";
import { PsychotherapyBlogPage } from "../pages/PsychotherapyBlogPage";
import { PrivacyPolicyPage } from "../pages/PrivacyPolicyPage";
import { ServicesPage } from "../pages/ServicesPage";
import { TelemedicineBlogPage } from "../pages/TelemedicineBlogPage";
import { TermsPage } from "../pages/TermsPage";

export type AppRoute = {
  path: string;
  label: string;
  element: ComponentType;
};

export const routes: AppRoute[] = [
  { path: "/", label: "Home", element: HomePage },
  { path: "/about", label: "About", element: AboutPage },
  { path: "/services", label: "Services", element: ServicesPage },
  { path: "/blog", label: "Blog", element: BlogPage },
  { path: "/blog/telemedicine", label: "Telemedicine", element: TelemedicineBlogPage },
  { path: "/blog/psychotherapy", label: "Psychotherapy", element: PsychotherapyBlogPage },
  {
    path: "/blog/new-practice-launch-first-revenue-cycle-success",
    label: "New Practice Launch & First Revenue Cycle Success",
    element: NewPracticeLaunchBlogPage,
  },
  { path: "/career", label: "Career", element: CareerPage },
  { path: "/client-support", label: "Client Support", element: ClientSupportPage },
  { path: "/contact", label: "Contact", element: ContactPage },
  { path: "/appointment", label: "Appointment", element: AppointmentPage },
  { path: "/privacy-policy", label: "Privacy Policy", element: PrivacyPolicyPage },
  { path: "/terms", label: "Terms of Use", element: TermsPage },
];
