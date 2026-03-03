import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaTiktok, FaYoutube } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";

export const FooterData = {
  companyLinks: [
    { name: "About Us", path: "/about" },
    { name: "FAQs", path: "/faqs" },
    { name: "Contact Us", path: "/contact" },
    { name: "Careers", path: "/careers" },
    { name: "Terms & Conditions", path: "/terms" },
  ],

  serviceLinks: [
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Installments Plan", path: "/bnpl" },
    { name: "Warranty Centre", path: "/warranty-center" },
    { name: "Asli Warranty Challenge", path: "/asli-warranty-challenge" },
    { name: "Login", path: "/login" },
  ],

  socialLinks: [
    { icon: FaYoutube, url: "https://youtube.com" },
    { icon: FaFacebook, url: "https://facebook.com" },
    { icon: AiFillInstagram, url: "https://instagram.com" },
    { icon: IoLogoLinkedin, url: "https://linkedin.com" },
    { icon: FaTiktok, url: "https://tiktok.com" },
  ],
};
