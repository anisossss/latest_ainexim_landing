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

import PersonalizedTask from "./pages/PersonalizedTask/index";
import DynamicAdaptations from "./pages/DynamicAdaptations/index";
import SecureBlockchain from "./pages/SecureBlockchain/index";
import RealTimeFeedback from "./pages/RealTimeFeedback/index";
import AdaptAndImprove from "./pages/AdaptAndImprove/index";
import EngagingChallenges from "./pages/EngagingChallenges/index";

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
        <Route path="/personalized-task" element={<PersonalizedTask />} />
        <Route path="/dynamic-adaptations" element={<DynamicAdaptations />} />
        <Route path="/secure-blockchain" element={<SecureBlockchain />} />
        <Route path="/real-time-feedback" element={<RealTimeFeedback />} />
        <Route path="/adapt-and-improve" element={<AdaptAndImprove />} />
        <Route path="/engaging-challenges" element={<EngagingChallenges />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
