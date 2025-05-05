// import { Container } from "../shared/Container";
// import logo from "/assets/icon.svg";
// import { NavItem } from "../shared/NavItem";
// import { BtnLink } from "../shared/BtnLink";
// import { useThemeStore } from "../../store/ThemeStore";

// export const navItems = [
//   { href: "#", text: "Home" },
//   { href: "#services", text: "Services" },
//   { href: "#about-us", text: "About Us" },
//   { href: "#pricing", text: "Pricing" },
// ];

// export const Navbar = () => {
//   const { toggleTheme, theme } = useThemeStore();

//   return (
//     <header className="absolute inset-x-0 top-0 z-50 py-6">
//       <Container>
//         <nav className="w-full flex justify-between gap-6 relative">
//           {/* Logo */}
//           <div className="min-w-max inline-flex relative">
//             <a href="/" className="relative flex items-center gap-3">
//               <img src={logo} alt="EdgeAI Logo" className="w-10 h-10" />
//               <div className="inline-flex text-lg font-semibold text-heading-1">
//                 Ascendix IT 
//               </div>
//             </a>
//           </div>

//           <div
//             className="flex flex-col lg:flex-row w-full lg:justify-between lg:items-center 
//                       absolute top-full left-0 lg:static lg:top-0 bg-body lg:bg-transparent 
//                       border-x border-x-box-border lg:border-x-0 lg:h-auto h-0 overflow-hidden"
//           >
//             <ul
//               className="border-t border-box-border lg:border-t-0 px-6 lg:px-0 
//                            pt-6 lg:pt-0 flex flex-col lg:flex-row gap-y-4 gap-x-3 
//                            text-lg text-heading-2 w-full lg:justify-center lg:items-center"
//             >
//               {navItems.map((item, key) => (
//                 <NavItem href={item.href} text={item.text} key={key} />
//               ))}
//             </ul>
//             <div
//               className="lg:min-w-max flex items-center sm:w-max w-full pb-6 
//                             lg:pb-0 border-b border-box-border lg:border-0
//                             px-6 lg:px-0"
//             >
//               <BtnLink text="Get Started" href="#cta" className="" />
//             </div>
//           </div>

//           <div className="min-w-max flex items-center gap-x-3">
//             <button
//               onClick={toggleTheme}
//               className="outline-hidden flex relative text-heading-2 rounded-full p-2 lg:p-3 border border-box-border cursor-pointer"
//             >
//               {theme === "dark" ? (
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth="1.5"
//                   stroke="currentColor"
//                   className="w-6 h-6"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
//                   />
//                 </svg>
//               ) : (
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth="1.5"
//                   stroke="currentColor"
//                   className="w-6 h-6"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
//                   />
//                 </svg>
//               )}
//             </button>
//           </div>
//         </nav>
//       </Container>
//     </header>
//   );
// };

// import { Container } from "../shared/Container";
// import logo from "/assets/icon.svg";
// // import { NavItem } from "../shared/NavItem";
// import { BtnLink } from "../shared/BtnLink";
// import { useThemeStore } from "../../store/ThemeStore";

// export const navItems = [
//   { href: "#", text: "Home" },
//   { href: "#services", text: "Services" },
//   { href: "#about-us", text: "About Us" },
//    { href: "#contact", text: "Contact Us" } ,
// ];

// export const Navbar = () => {
//   const { toggleTheme, theme } = useThemeStore();

//   return (
//     <header className="absolute inset-x-0 top-0 z-50 py-6">
//       <Container>
//         <nav className="w-full flex justify-between gap-6 relative transition-all duration-300 ease-in-out">
//           <div
//             className="flex items-center justify-between bg-white/10 backdrop-blur-md border border-box-border 
//                        rounded-full px-8 py-3 w-full gap-x-8 transition-all duration-300 ease-in-out"
//           >
//             {/* Logo + Brand Name */}
//             <a
//               href="/"
//               className="flex items-center gap-3 min-w-max hover:opacity-80 transition-all duration-300 ease-in-out"
//             >
//               <img
//                 src={logo}
//                 alt="EdgeAI Logo"
//                 className="w-10 h-10 transition-transform duration-300 hover:rotate-6"
//               />
//               <div className="text-2xl font-semibold text-heading-1 transition-all duration-300 ease-in-out">
//                 Ascendix IT
//               </div>
//             </a>

//             {/* Nav Items */}
//             <ul
//               className="flex flex-col lg:flex-row gap-y-3 gap-x-6 
//                          text-lg text-heading-2 w-full lg:justify-center lg:items-center
//                          transition-all duration-300 ease-in-out"
//             >
//               {navItems.map((item, key) => (
//                 <li key={key} className="transition-all duration-300 ease-in-out hover:opacity-90">
//                   <a
//                     href={item.href}
//                     className="px-4 py-2 rounded-md hover:bg-muted transition-all duration-300 ease-in-out"
//                   >
//                     {item.text}
//                   </a>
//                 </li>
//               ))}
//             </ul>

//             {/* Get Started Button */}
//             <div className="min-w-max">
//               <BtnLink
//                 text="Get Started"
//                 href="#cta"
//                 className="transition-all duration-300 ease-in-out hover:scale-105"
//               />
//             </div>
//           </div>

//           {/* Theme Toggle Button */}
          // <div className="min-w-max flex items-center gap-x-3 transition-all duration-300 ease-in-out">
          //   <button
          //     onClick={toggleTheme}
          //     className="outline-hidden flex relative text-heading-2 rounded-full p-2 lg:p-3 border border-box-border cursor-pointer
          //                hover:bg-muted transition-all duration-300 ease-in-out"
          //   >
          //     {theme === "dark" ? (
          //       <svg
          //         xmlns="http://www.w3.org/2000/svg"
          //         fill="none"
          //         viewBox="0 0 24 24"
          //         strokeWidth="1.5"
          //         stroke="currentColor"
          //         className="w-6 h-6 transition-transform duration-300 hover:rotate-12"
          //       >
          //         <path
          //           strokeLinecap="round"
          //           strokeLinejoin="round"
          //           d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
          //         />
          //       </svg>
          //     ) : (
          //       <svg
          //         xmlns="http://www.w3.org/2000/svg"
          //         fill="none"
          //         viewBox="0 0 24 24"
          //         strokeWidth="1.5"
          //         stroke="currentColor"
          //         className="w-6 h-6 transition-transform duration-300 hover:rotate-12"
          //       >
          //         <path
          //           strokeLinecap="round"
          //           strokeLinejoin="round"
          //           d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
          //         />
          //       </svg>
          //     )}
          //   </button>
          // </div>
//         </nav>
//       </Container>
//     </header>
//   );
// };

// import { useState } from "react";
// import { Container } from "../shared/Container";
// import logo from "/assets/icon.svg";
// import { BtnLink } from "../shared/BtnLink";
// import { useThemeStore } from "../../store/ThemeStore";

// export const navItems = [
//   { href: "#", text: "Home" },
//   { href: "#services", text: "Services" },
//   { href: "#about-us", text: "About Us" },
//   // "Contact Us" handled separately
// ];

// export const Navbar = () => {
//   const { toggleTheme, theme } = useThemeStore();
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   return (
//     <>
//       <header className="absolute inset-x-0 top-0 z-50 py-6">
//         <Container>
//           <nav className="w-full flex justify-between gap-6 relative transition-all duration-300 ease-in-out">
//             <div className="flex items-center justify-between bg-white/10 backdrop-blur-md border border-box-border rounded-full px-8 py-3 w-full gap-x-8">
//               {/* Logo */}
//               <a href="/" className="flex items-center gap-3 min-w-max hover:opacity-80">
//                 <img src={logo} alt="Ascendix IT Logo" className="w-10 h-10 transition-transform duration-300 hover:rotate-6" />
//                 <div className="text-2xl font-semibold text-heading-1">Ascendix IT</div>
//               </a>

//               {/* Nav Items */}
//               <ul className="flex flex-col lg:flex-row gap-y-3 gap-x-6 text-lg text-heading-2 w-full lg:justify-center lg:items-center">
//                 {navItems.map((item, key) => (
//                   <li key={key} className="hover:opacity-90">
//                     <a
//                       href={item.href}
//                       className="px-4 py-2 rounded-md hover:bg-muted transition-all"
//                     >
//                       {item.text}
//                     </a>
//                   </li>
//                 ))}
//                 {/* Contact Us opens modal */}
//                 <li>
//                   <button
//                     onClick={() => setIsModalOpen(true)}
//                     className="px-4 py-2 rounded-md hover:bg-muted transition-all cursor-pointer"
//                   >
//                     Contact Us
//                   </button>
//                 </li>
//               </ul>

//               {/* Get Started Button */}
//               <div className="min-w-max">
//                 <BtnLink
//                   text="Get Started"
//                   href="#cta"
//                   className="transition-all duration-300 ease-in-out hover:scale-105"
//                 />
//               </div>
//             </div>

//             {/* Theme toggle */}
//             {/* <div className="min-w-max flex items-center gap-x-3">
//               <button
//                 onClick={toggleTheme}
//                 className="p-2 lg:p-3 border border-box-border rounded-full hover:bg-muted"
//               >
//                 {theme === "dark" ? (
//                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 hover:rotate-12 transition-transform duration-300">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75..." />
//                   </svg>
//                 ) : (
//                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 hover:rotate-12 transition-transform duration-300">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25..." />
//                   </svg>
//                 )}
//               </button>
//             </div> */}
//             <div className="min-w-max flex items-center gap-x-3 transition-all duration-300 ease-in-out">
//             <button
//               onClick={toggleTheme}
//               className="outline-hidden flex relative text-heading-2 rounded-full p-2 lg:p-3 border border-box-border cursor-pointer
//                          hover:bg-muted transition-all duration-300 ease-in-out"
//             >
//               {theme === "dark" ? (
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth="1.5"
//                   stroke="currentColor"
//                   className="w-6 h-6 transition-transform duration-300 hover:rotate-12"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
//                   />
//                 </svg>
//               ) : (
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth="1.5"
//                   stroke="currentColor"
//                   className="w-6 h-6 transition-transform duration-300 hover:rotate-12"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
//                   />
//                 </svg>
//               )}
//             </button>
//           </div>
//           </nav>
//         </Container>
//       </header>

//       {/* Contact Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black/60 z-[9999] flex items-center justify-center p-4">
//           <div className="bg-gradient-to-br from-indigo-800 to-violet-800 text-white rounded-xl p-6 w-full max-w-md shadow-lg relative">
//             <button
//               onClick={() => setIsModalOpen(false)}
//               className="absolute top-3 right-4 text-2xl font-bold text-white hover:text-red-400 transition-all cursor-pointer"
//             >
//               ×
//             </button>
//             <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
//             <form className="space-y-4">
//               <input
//                 type="text"
//                 placeholder="Full Name"
//                 className="w-full p-3 rounded bg-white/10 placeholder-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-white"
//               />
//               <input
//                 type="email"
//                 placeholder="Email"
//                 className="w-full p-3 rounded bg-white/10 placeholder-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-white"
//               />
//               <input
//                 type="tel"
//                 placeholder="Phone Number"
//                 className="w-full p-3 rounded bg-white/10 placeholder-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-white"
//               />
//               <textarea
//                 placeholder="Purpose of Contact"
//                 className="w-full p-3 rounded bg-white/10 placeholder-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-white"
//                 rows={3}
//               ></textarea>
//               <button
//                 type="submit"
//                 className="w-full py-3 rounded bg-white text-indigo-800 font-semibold hover:bg-gray-200 transition-all cursor-pointer"
//               >
//                 Submit
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

import { Dispatch, SetStateAction } from "react";
import { Container } from "../shared/Container";
import logo from "/assets/icon.svg";
import { BtnLink } from "../shared/BtnLink";
import { useThemeStore } from "../../store/ThemeStore";

export const navItems = [
  { href: "#", text: "Home" },
  { href: "#services", text: "Services" },
  { href: "#about-us", text: "About Us" },
];

interface NavbarProps {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Navbar = ({ setIsModalOpen }: NavbarProps) => {
  const { toggleTheme, theme } = useThemeStore();

  return (
    <header className="absolute inset-x-0 top-0 z-50 py-6">
      <Container>
        <nav className="w-full flex justify-between gap-6 relative transition-all duration-300 ease-in-out">
          <div className="flex items-center justify-between bg-white/10 backdrop-blur-md border border-box-border rounded-full px-8 py-3 w-full gap-x-8">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3 min-w-max hover:opacity-80">
              <img
                src={logo}
                alt="Ascendix IT Logo"
                className="w-10 h-10 transition-transform duration-300 hover:rotate-6"
              />
              <div className="text-2xl font-semibold text-heading-1">Ascendix IT</div>
            </a>

            {/* Nav Items */}
            <ul className="flex flex-col lg:flex-row gap-y-3 gap-x-6 text-lg text-heading-2 w-full lg:justify-center lg:items-center">
              {navItems.map((item, key) => (
                <li key={key} className="hover:opacity-90">
                  <a
                    href={item.href}
                    className="px-4 py-2 rounded-md hover:bg-muted transition-all"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
              {/* Contact Us opens modal */}
              <li>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-4 py-2 rounded-md hover:bg-muted transition-all cursor-pointer"
                >
                  Contact Us
                </button>
              </li>
            </ul>

            {/* Get Started Button */}
            <div className="min-w-max">
              <BtnLink
                text="Get Started"
                href="#cta"
                className="transition-all duration-300 ease-in-out hover:scale-105"
              />
            </div>
          </div>

          {/* Theme toggle */}
          <div className="min-w-max flex items-center gap-x-3 transition-all duration-300 ease-in-out">
            <button
              onClick={toggleTheme}
              className="outline-hidden flex relative text-heading-2 rounded-full p-2 lg:p-3 border border-box-border cursor-pointer hover:bg-muted transition-all duration-300 ease-in-out"
            >
              {theme === "dark" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 transition-transform duration-300 hover:rotate-12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 transition-transform duration-300 hover:rotate-12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </Container>
    </header>
  );
};
