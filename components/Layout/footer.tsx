import {
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { useMemo } from "react";

export default function Footer() {
  const randomSize = useMemo(() => 3 + Math.random() * 3, []);

  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Animated Stars Background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              left: `${(() => Math.random())() * 95}%`,
              top: `${(() => Math.random())() * 100}%`,
              width: `${randomSize}px`,
              height: `${randomSize}px`,
              animationDelay: `${(() => Math.random())() * 2}s`,
              animationDuration: `${2 + (() => Math.random())() * 2}s`,
              opacity: 0.3,
            }}
          ></div>
        ))}
        {/* {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${star.animationDelay}s`,
              animationDuration: `${star.animationDuration}s`,
              opacity: 0.3,
            }}
          />
        ))} */}
      </div>
      {/* Main Footer Content */}
      <div className="flex justify-center">
        <div className="text-white py-8 text-3xl border-[#f59e0b] border-b-1 w-[90vw] flex justify-center text-center">
          Admissions Open — Call Now and Secure Your Seat.
          <br /> @ +91-810 261 1868
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="space-y-6 md:pr-3">
            <h2 className="text-3xl font-bold tracking-wider">GIFD</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Crafting the future of fashion through innovative design education
              and creative excellence.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/gifdfashioninstitute/"
                className="w-10 h-10 border border-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.facebook.com/Gifdinstitute"
                className="w-10 h-10 border border-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Programs */}
          <div className="">
            <h3 className="text-lg font-semibold mb-6 tracking-wide">
              PROGRAMS
            </h3>
            <ul className="space-y-3">
              {[
                ["Fashion Design", "/Programs/Fashion/Bachelor"],
                ["Interior Design", "/Programs/Interior/Bachelor"],
                ["Textile Design", "/Programs/Textile/Bachelor"],
                ["Modeling", "/Programs/Modeling"],
                ["Boutique", "/Programs/Fashion/ProfessionalCertificate"],
                ["Beautician", "/Programs/Textile/Bachelor"],
              ].map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item[1]}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {item[0]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 tracking-wide">
              QUICK LINKS
            </h3>
            <ul className="space-y-3">
              {[
                ["About Us", "/about/AboutGIFD"],
                ["Admissions", "/Admissions/HowToApply"],
                ["Gallery", "/campus/Campus"],
                ["Student Work", "/jds"],
                ["Facilities", "/Facilities"],
                ["Enquiry", "/Contact"],
                ["Recognitions", "/about/Recognitions"],
              ].map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item[1]}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {item[0]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 tracking-wide">
              CONTACT
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="mt-1 shrink-0" />
                <span className="text-gray-400 text-sm">
                  2nd Floor, Birenu Trade Center,
                  <br />
                  Pennar Road, Avove ICIC Bank,
                  <br />
                  Sakchi, Jamshedpur
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="shrink-0" />
                <a
                  href="tel:+ 91810 261 1868"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  +91 810 261 1868
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="shrink-0" />
                <a
                  href="mailto:info@gifd.edu"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  info@gifdinstitute.com
                </a>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-8 md:mr-3">
              <h4 className="text-sm font-semibold mb-3">NEWSLETTER</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-transparent border border-white px-3 py-2 text-sm flex-1 focus:outline-none focus:border-gray-400"
                />
                <button className="bg-white text-black px-4 py-2 text-sm font-semibold hover:bg-gray-200 transition-colors">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row max-w-[1200px] justify-between items-center space-y-4 md:space-y-0">
            <p className="text-[#f59e0b] text-sm">
              © 2022 Gifd Fashion Institute. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-[#f59e0b] hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-[#f59e0b] hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-[#f59e0b] hover:text-white text-sm transition-colors"
              >
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
