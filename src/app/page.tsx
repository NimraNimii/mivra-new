
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Header from "@/components/layout/Header";
import DualCampaignHero from "@/components/home/DualCampaignHero";
import LiveFashionCarousel from "@/components/home/LiveFashionCarousel";
import HomeProductRail from "@/components/home/HomeProductRail";
import CampaignSpotlight from "@/components/home/CampaignSpotlight";
import StyleMarquee from "@/components/home/StyleMarquee";
import MivraWorld from "@/components/home/MivraWorld";
import TheMivraEdit from "@/components/home/TheMivraEdit";
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
      <HomeProductRail />

      {/* Cinematic editorial campaign slider */}
      <CampaignSpotlight />

      {/* New animated MIVRA brand marquee */}
      <StyleMarquee />
      <MivraWorld />
    <TheMivraEdit />
<CustomerEnquirySection />
<Footer />
    </main>
  );
}
