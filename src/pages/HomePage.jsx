import React from "react";
import SimpleSlider from "../components/home/SimpleSlider";
import BannerSlider from "../components/home/BannerSlider";
import BannerImage from "../components/home/BannerImage";
import FlashSaleSection from "../components/home/FlashSaleSection";
import BNPLBanner from "../components/home/BNPLBanner";
import MobileCategorySection from "../components/home/MobileCategorySection";
import BestSellerSection from "../components/home/BestSellerSection";
import CustomerReviewsSection from "../components/home/CustomerReviewsSection";
import ShopCategoriesSection from "../components/home/ShopCategoriesSection";
import HeroBanner from "../components/home/HeroBanner";
import OfficialBrandsSection from "../components/home/OfficialBrandsSection";
import WhyChooseUsSection from "../components/home/WhyChooseUsSection";
import XiaomiDealsSection from "../components/home/XiaomiDealsSection";
import RelatedCategoriesBar from "./RelatedCategoriesBar";
import RecommendedProductsSection from "../components/home/RecommendedProductsSection";
import TrustBadgesSection from "../components/home/TrustBadgesSection";
import Footer from "../components/common/Footer";
import MobileFooter from "../components/home/MobileFooter";

const HomePage = () => {
  return (
    <div className="bg-[#f1f3f6] min-h-screen">
      <SimpleSlider />
      <BannerSlider />
      <BannerImage />
      <FlashSaleSection />
      <BNPLBanner />
      <BestSellerSection />
      <MobileCategorySection />
      <CustomerReviewsSection />
      <ShopCategoriesSection />
      <HeroBanner />
      <OfficialBrandsSection />
      <WhyChooseUsSection />
      <XiaomiDealsSection />
      <RelatedCategoriesBar />
      <RecommendedProductsSection />
      <TrustBadgesSection />
      <Footer />
      <MobileFooter />
    </div>
  );
};

export default HomePage;
