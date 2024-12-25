import { Routes, Route } from "react-router-dom";
import Home from "./page";
import { AboutPage } from "../pages/aboutPage";
import { SMMPage } from "../pages/smmPage";
import { GraphicDesignPage } from "../pages/graphicDesignPage";
import { VideoEditingPage } from "../pages/videoEditingPage";
import { WebDevelopmentPage } from "../pages/webDevelopmentPage";
import { CameraShootsPage } from "../pages/cameraShootsPage";
import { AdsCampaignPage } from "../pages/adsCampaignPage";
import { InfluencerMarketingPage } from "../pages/influencerMarketingPage";
import { ConsultancyPage } from "../pages/consultancyPage";
import { ClientsPage } from "../pages/clientsPage";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services/smm" element={<SMMPage />} />
        <Route path="/services/graphic-design" element={<GraphicDesignPage />} />
        <Route path="/services/video-editing" element={<VideoEditingPage />} />
        <Route path="/services/web-development" element={<WebDevelopmentPage />} />
        <Route path="/services/camera-shoots" element={<CameraShootsPage />} />
        <Route path="/services/ads-campaign" element={<AdsCampaignPage />} />
        <Route path="/services/influencer-marketing" element={<InfluencerMarketingPage />} />
        <Route path="/services/consultancy" element={<ConsultancyPage />} />
        <Route path="/clients" element={<ClientsPage />} />
      </Routes>
    </>
  );
}
