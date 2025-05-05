
import { Container } from "../shared/Container";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPaperPlane,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#0c0c0c] via-[#1a013e] to-[#2a0656] text-white pt-16 pb-8 font-sans">
      <Container>
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Services */}
          <div className="w-full md:w-1/3">
            <h4 className="text-xl font-semibold mb-6 relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-white transition-all duration-300 transform hover:-translate-y-1.5">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-purple-400 transition">Web Development</a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition">Mobile Apps</a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition">AI & ML Solutions</a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition">Cloud Consulting</a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition">UI/UX Design</a>
              </li>
            </ul>
          </div>

          {/* Page Links */}
          <div className="w-full md:w-1/3">
            <h4 className="text-xl font-semibold mb-6 relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-white transition-all duration-300 transform hover:-translate-y-1.5">
              Page Links
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-purple-400 transition">About Us</a></li>
              <li><a href="#" className="hover:text-purple-400 transition">Our Services</a></li>
              <li><a href="#" className="hover:text-purple-400 transition">Projects</a></li>
              <li><a href="#" className="hover:text-purple-400 transition">Careers</a></li>
              <li><a href="#" className="hover:text-purple-400 transition">Contact</a></li>
            </ul>
          </div>

          {/* Subscribe */}
          <div className="w-full md:w-1/3">
            <h4 className="text-xl font-semibold mb-6 relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-white transition-all duration-300 transform hover:-translate-y-1.5">
              Subscribe
            </h4>
            <form className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-4 pr-14 rounded-md text-white placeholder-gray-600 text-sm"
              />
              <button
                type="submit"
                className="absolute right-2 top-2 bg-purple-600 text-white p-2 rounded-md hover:bg-purple-500 transition"
              >
                <FaPaperPlane />
              </button>
            </form>

            <div className="mt-6">
              <ul className="flex gap-4">
                <li>
                  <a
                    href="https://www.facebook.com/people/Ascendix/61575716981476/"
                    className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-full hover:bg-purple-600 transition"
                  >
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/Ascendix_IT"
                    className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-full hover:bg-purple-600 transition"
                  >
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/ascendixit/"
                    className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-full hover:bg-purple-600 transition"
                  >
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/ascendix-it/"
                    className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-full hover:bg-purple-600 transition"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="border-t border-white/20 mt-12 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Ascendix IT. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};
