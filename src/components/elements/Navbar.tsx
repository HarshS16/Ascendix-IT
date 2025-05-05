
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
