import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import JoinWaitlist from "./pages/joinwaitlist/index";
import Support from "./pages/support/index";
import Careers from "./pages/careers";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
                <Header />
                <Hero />
                <Benefits />
                <Collaboration />
                <Services />
                <Pricing />
                <Roadmap />
                <Footer />
              </div>
              <ButtonGradient />
            </>
          }
        />
        <Route path="/careers" element={<Careers />} />

        <Route path="/join-waitlist" element={<JoinWaitlist />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
