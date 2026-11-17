
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Header from "@/components/layout/Header";
import DualCampaignHero from "@/components/home/DualCampaignHero";
import LiveFashionCarousel from "@/components/home/LiveFashionCarousel";
import CampaignSpotlight from "@/components/home/CampaignSpotlight";
import StyleMarquee from "@/components/home/StyleMarquee";
import CollectionFinder from "@/components/home/CollectionFinder";
import MivraJournal from "@/components/home/MivraJournal";

import CustomerEnquirySection from "@/components/home/CustomerEnquirySection";
import Footer from "@/components/layout/Footer";
export default function Home() {
  return (
    <main className="min-h-screen bg-pearl">
      <AnnouncementBar />
      <Header />

      {/* Existing hero - intentionally unchanged */}
      <DualCampaignHero />

      {/* Existing collection carousel */}
      <div id="shop-the-edit">
        <LiveFashionCarousel />
      </div>

      {/* New horizontal product carousel */}
{/* Cinematic editorial campaign slider */}
      <CampaignSpotlight />

      {/* New animated MIVRA brand marquee */}
      <StyleMarquee />
<MivraJournal />
<CollectionFinder />
<CustomerEnquirySection />
<Footer />
    </main>
  );
}


