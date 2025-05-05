
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Layout } from "./components/Layout";
import { AboutUs } from "./components/sections/AboutUs";
import { Brands } from "./components/sections/Brands";
import { CTA } from "./components/sections/CallToAction";
import { Hero } from "./components/sections/Hero";
import { Services } from "./components/sections/Services";
import { ContactModal } from "./components/core/ContactModal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <>
      <Layout title="Ascendix IT" setIsModalOpen={setIsModalOpen}>
        <Hero />
        <Brands />
        <Services />
        <AboutUs />
        <CTA setIsModalOpen={setIsModalOpen} />
      </Layout>
      <ContactModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </>
  );
}

export default App;
