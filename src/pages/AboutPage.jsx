import React from "react";
import AboutHero from "../components/about/AboutHero";
import AboutFeatures from "../components/about/AboutFeatures";
import AboutFooterBanner from "../components/about/AboutFooterBanner";
import AboutValues from "../components/about/AboutValues";
import AboutFeaturedBy from "../components/about/AboutFeaturedBy";
import AboutRecognitions from "../components/about/AboutRecognitions";
import AboutPayments from "../components/about/AboutPayments";
import AboutStats from "../components/about/AboutStats";
import AboutCategories from "../components/about/AboutCategories";
import ScrollToTopButton from "../components/common/ScrollToTopButton";
import Footer from "../components/common/Footer";

const AboutPage = () => {
  return (
    <div className="bg-white relative">
      <ScrollToTopButton />
      <AboutHero />
      <AboutCategories />
      <AboutFeatures />
      <AboutStats />
      <AboutPayments />
      <AboutRecognitions />
      <AboutFeaturedBy />
      <AboutValues />
      <AboutFooterBanner />
      <Footer />
    </div>
  );
};

export default AboutPage;
