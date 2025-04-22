import { useEffect, useState } from "react";
import {
  FaFacebook,
  FaXTwitter,
  FaWhatsapp,
  FaLinkedin,
  FaArrowUp,
  FaInstagram,
  FaTelegram,
  FaTiktok,
} from "react-icons/fa6";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Main Footer */}
      <footer className="bg-teal-200 text-black dark:bg-cyan-900 dark:text-white py-12 px-6 sm:px-8 w-full">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Left Column */}
          <div className="space-y-5">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
              CHIZO_U INTERNATION LTD
            </h3>
            <p className="text-black text-base sm:text-lg leading-relaxed">
              We are a dynamic organization offering comprehensive solutions
              across various sectors, including: International Trading & General
              Logistics Procurement and Supplies Distribution of General Goods
              Good Management Consulting Human Resource Development. Our team of
              experts is committed to delivering tailored solutions that drive
              efficiency, growth, and sustainable development for businesses
              around the globe.
            </p>
            <p className="font-medium text-black dark:text-gray-200">
              📍 19, Hospital Road, Tudun Wada, Zaria, Kaduna State, Nigeria
            </p>
          </div>

          {/* Right Column - Socials */}
          <div className="flex flex-col items-start md:items-end space-y-5">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Connect With Us
            </h3>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.facebook.com/share/192pUVKyUr/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-2xl p-3 bg-cyan-800 hover:bg-cyan-700 rounded-full transition-all duration-300 hover:scale-110"
              >
                <FaFacebook className="text-white" />
              </a>
              <a
                href="https://x.com/Abubaka36533120?t=jotyzodgrhF1DpeUGH50HA&s=09"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-2xl p-3 bg-cyan-800 hover:bg-cyan-700 rounded-full transition-all duration-300 hover:scale-110"
              >
                <FaXTwitter className="text-white" />
              </a>
              <a
                href="https://www.instagram.com/chizo_1_germany?igsh=OWhuZ3J2OHkxOWMy&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-2xl p-3 bg-cyan-800 hover:bg-cyan-700 rounded-full transition-all duration-300 hover:scale-110"
              >
                <FaInstagram className="text-white" />
              </a>
              <a
                href="https://t.me/chizogerman"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="text-2xl p-3 bg-cyan-800 hover:bg-cyan-700 rounded-full transition-all duration-300 hover:scale-110"
              >
                <FaTelegram className="text-white" />
              </a>
              <a
                href="https://www.tiktok.com/@chizo_1_germany?_t=ZN-8vhMI3KaS5m&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="text-2xl p-3 bg-cyan-800 hover:bg-cyan-700 rounded-full transition-all duration-300 hover:scale-110"
              >
                <FaTiktok className="text-white" />
              </a>
              <a
                href="https://whatsapp.com/channel/0029Vb30yRN0bIdfT0Rb2v2a"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Channel"
                className="text-2xl p-3 bg-cyan-800 hover:bg-cyan-700 rounded-full transition-all duration-300 hover:scale-110"
              >
                <FaWhatsapp className="text-white" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Section */}
      <div className="bg-teal-400 dark:bg-cyan-950 text-black dark:text-gray-300 py-6 px-6 flex flex-col sm:flex-row items-center justify-between relative rounded-bl-3xl rounded-br-3xl">
        {/* Scroll to Top Button */}
        {showButton && (
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="absolute left-1/2 transform -translate-x-1/2 -top-6 bg-cyan-900 text-white p-3 rounded-full shadow-xl hover:bg-cyan-850 transition-all duration-300 hover:scale-110 border-2 border-white z-50"
          >
            <FaArrowUp className="text-xl" />
          </button>
        )}

        {/* Left */}
        <p className="text-sm sm:text-base mb-4 sm:mb-0 text-center sm:text-left">
          &copy; {new Date().getFullYear()} Chizo_u International LTD. All rights
          reserved.
        </p>

        {/* Right */}
        <p className="text-sm sm:text-base text-center sm:text-right">
          Crafted with ❤️ by{" "}
          <a
            href="https://www.facebook.com/el.ahmed5"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-cyan-300 underline underline-offset-4 transition-colors"
          >
            AhmadGlobe
          </a>
        </p>
      </div>
    </>
  );
};

export default Footer;
