import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About } from "@/pages/About";
import { About as HeroAbout } from "@/components/About";
import { Cta } from "./components/Cta";
import { Hero } from "./components/Hero";
import { Newsletter } from "./components/Newsletter";
import "./App.css";
import { Banner } from "./components/Banner";
import { Services } from "./pages/Services";
import { Careers } from "./pages/Careers";
import { CareerForm } from "./pages/CareerForm";
import { Contact } from "./pages/Contact";
import { Telemedicine } from "./pages/Telemedicine";
import { Psychotherapy } from "./pages/Psychotherapy";
import { ClientForm } from "./pages/ClientForm";
import { TermsOfUse } from "./pages/TermsOfUse";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Hero />
                <HeroAbout />
                <Cta />
                <Newsletter />
              </>
            }
          />
          <Route
            path="/services"
            element={
              <>
                <Services />
              </>
            }
          />
          <Route
            path="/careers"
            element={
              <>
                <Careers />
              </>
            }
          />
          <Route
            path="/careerform"
            element={
              <>
                <CareerForm />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <About />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Contact />
              </>
            }
          />
          <Route
            path="/telemedicine"
            element={
              <>
                <Telemedicine />
              </>
            }
          />
          <Route
            path="/psychotherapy"
            element={
              <>
                <Psychotherapy />
              </>
            }
          />
          <Route
            path="/clientsupport"
            element={
              <>
                <ClientForm />
              </>
            }
          />
           <Route
            path="/terms-of-use"
            element={
              <>
                <TermsOfUse />
              </>
            }
          />
          <Route
            path="/privacy-policy"
            element={
              <>
                <PrivacyPolicy />
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
