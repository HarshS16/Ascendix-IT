// import { Container } from "../shared/Container";
// import logo from "/assets/icon.svg";
// import { navItems } from "./Navbar";
// import { NavItem } from "../shared/NavItem";

// export const Footer = () => {
//   return (
//     <footer className="relative pt-28 rounded-t-3xl bg-box-bg">
//       <Container className="pb-8">
//         <div className="flex flex-col md:flex-row justify-between items-center">
//           <div className="flex items-center gap-3 mb-4 md:mb-0">
//             <img src={logo} className="w-7 h-7" alt="EdgeAI Logo" />
//             <span className="text-lg font-semibold text-heading-1">Ascendix IT</span>
//           </div>

//           <ul className="flex gap-6 text-heading-1">
//             {navItems.map((item, key) => (
//               <NavItem key={key} href={item.href} text={item.text} />
//             ))}
//           </ul>
//         </div>
//       </Container>
//     </footer>
//   );
// };


// import { Container } from "../shared/Container";
// import logo from "/assets/icon.svg";
// import { navItems } from "./Navbar";
// import { NavItem } from "../shared/NavItem";

// export const Footer = () => {
//   return (
//     <footer className="relative pt-20 pb-8 rounded-t-3xl bg-box-bg text-heading-1">
//       <Container>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
//           {/* Logo and description */}
//           <div className="flex flex-col items-start">
//             <div className="flex items-center gap-3 mb-4">
//               <img src={logo} className="w-8 h-8" alt="Ascendix IT Logo" />
//               <span className="text-xl font-bold">Ascendix IT</span>
//             </div>
//             <p className="text-sm text-gray-400 max-w-xs">
//               Empowering businesses with next-gen web, mobile, and AI/ML solutions that drive real impact.
//             </p>
//           </div>

//           {/* Navigation links */}
//           <div>
//             <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
//             <ul className="space-y-2">
//               {navItems.map((item, key) => (
//                 <li key={key} className="transition-all hover:translate-x-1 hover:text-primary cursor-pointer">
//                   <NavItem href={item.href} text={item.text} />
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Call to Action */}
//           <div className="flex flex-col gap-4">
//             <h4 className="text-lg font-semibold mb-2">Let’s Build Something Great</h4>
//             <p className="text-sm text-gray-400">
//               Ready to transform your idea into reality? Let’s collaborate!
//             </p>
//             <a
//               href="#contact"
//               className="inline-block bg-primary text-white py-2 px-4 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-primary/80"
//             >
//               Get in Touch
//             </a>
//           </div>
//         </div>

//         <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
//           <p>&copy; {new Date().getFullYear()} Ascendix IT. All rights reserved.</p>
//           <div className="flex gap-4">
//             <a
//               href="#"
//               className="hover:text-primary transition-colors"
//               aria-label="Twitter"
//             >
//               <i className="fab fa-twitter"></i>
//             </a>
//             <a
//               href="#"
//               className="hover:text-primary transition-colors"
//               aria-label="LinkedIn"
//             >
//               <i className="fab fa-linkedin"></i>
//             </a>
//             <a
//               href="#"
//               className="hover:text-primary transition-colors"
//               aria-label="GitHub"
//             >
//               <i className="fab fa-github"></i>
//             </a>
//           </div>
//         </div>
//       </Container>
//     </footer>
//   );
// };


// import { FaFacebookF, FaTwitter, FaGooglePlusG, FaInstagram, FaPaperPlane } from "react-icons/fa";

// export const Footer = () => {
//   return (
//     <footer className="bg-gradient-to-br from-blue-400 via-blue-700 to-blue-900 text-white pt-20 pb-10">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
//           {/* Services */}
//           <div>
//             <h4 className="text-xl font-bold uppercase mb-6 relative after:content-[''] after:block after:w-10 after:h-0.5 after:bg-white after:mt-3">
//               Services
//             </h4>
//             <ul className="space-y-2 text-sm">
//               <li><a href="#" className="hover:text-pink-400 transition">Lorem Ipsum</a></li>
//               <li><a href="#" className="hover:text-pink-400 transition">Simply dummy text</a></li>
//               <li><a href="#" className="hover:text-pink-400 transition">The printing and typesetting</a></li>
//               <li><a href="#" className="hover:text-pink-400 transition">Standard dummy text</a></li>
//               <li><a href="#" className="hover:text-pink-400 transition">Type specimen book</a></li>
//             </ul>
//           </div>

//           {/* Page Links */}
//           <div>
//             <h4 className="text-xl font-bold uppercase mb-6 relative after:content-[''] after:block after:w-10 after:h-0.5 after:bg-white after:mt-3">
//               Page Link
//             </h4>
//             <ul className="space-y-2 text-sm">
//               <li><a href="#" className="hover:text-pink-400 transition">Lorem Ipsum</a></li>
//               <li><a href="#" className="hover:text-pink-400 transition">Simply dummy text</a></li>
//               <li><a href="#" className="hover:text-pink-400 transition">The printing and typesetting</a></li>
//               <li><a href="#" className="hover:text-pink-400 transition">Standard dummy text</a></li>
//               <li><a href="#" className="hover:text-pink-400 transition">Type specimen book</a></li>
//             </ul>
//           </div>

//           {/* Subscribe */}
//           <div>
//             <h4 className="text-xl font-bold uppercase mb-6 relative after:content-[''] after:block after:w-10 after:h-0.5 after:bg-white after:mt-3">
//               Subscribe Today
//             </h4>
//             <form className="relative mt-4">
//               <input
//                 type="text"
//                 placeholder="Enter Email Address"
//                 className="w-full px-4 py-3 rounded-full text-black placeholder:text-gray-500 pr-16"
//               />
//               <button
//                 type="button"
//                 className="absolute right-0 top-0 h-full px-4 text-cyan-400 hover:text-pink-500 transition"
//               >
//                 <FaPaperPlane size={20} />
//               </button>
//             </form>

//             {/* Social Icons */}
//             <div className="flex gap-4 mt-8">
//               <a href="#" className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-full hover:bg-pink-500 transition">
//                 <FaFacebookF />
//               </a>
//               <a href="#" className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-full hover:bg-pink-500 transition">
//                 <FaTwitter />
//               </a>
//               <a href="#" className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-full hover:bg-pink-500 transition">
//                 <FaGooglePlusG />
//               </a>
//               <a href="#" className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-full hover:bg-pink-500 transition">
//                 <FaInstagram />
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Copyright */}
//         <div className="mt-12 pt-8 border-t border-white/30 text-center text-sm">
//           Copyright © {new Date().getFullYear()}{" "}
//           <a href="#" className="text-cyan-400 hover:text-pink-400 transition">Ascendix IT</a>. All rights reserved.
//         </div>
//       </div>
//     </footer>
//   );
// };

import { Container } from "../shared/Container";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPaperPlane } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#0c0c0c] via-[#1a013e] to-[#2a0656] text-white pt-16 pb-8 font-sans">
      <Container>
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Services */}
          <div className="w-full md:w-1/3">
            <h4 className="text-xl font-semibold mb-6 relative inline-block after:absolute after:bottom-0 after:left-0 after:w-10 after:h-[2px] after:bg-white after:mt-2">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-purple-400 transition">Web Development</a></li>
              <li><a href="#" className="hover:text-purple-400 transition">Mobile Apps</a></li>
              <li><a href="#" className="hover:text-purple-400 transition">AI & ML Solutions</a></li>
              <li><a href="#" className="hover:text-purple-400 transition">Cloud Consulting</a></li>
              <li><a href="#" className="hover:text-purple-400 transition">UI/UX Design</a></li>
            </ul>
          </div>

          {/* Page Links */}
          <div className="w-full md:w-1/3">
            <h4 className="text-xl font-semibold mb-6 relative inline-block after:absolute after:bottom-0 after:left-0 after:w-10 after:h-[2px] after:bg-white after:mt-2">
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

          {/* Subscribe & Social */}
          <div className="w-full md:w-1/3">
            <h4 className="text-xl font-semibold mb-6 relative inline-block after:absolute after:bottom-0 after:left-0 after:w-10 after:h-[2px] after:bg-white after:mt-2">
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
                    href="#"
                    className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-full hover:bg-purple-600 transition"
                  >
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-full hover:bg-purple-600 transition"
                  >
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-full hover:bg-purple-600 transition"
                  >
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
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
