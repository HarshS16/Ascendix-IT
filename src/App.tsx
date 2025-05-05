// import { Layout } from "./components/Layout";
// import { AboutUs } from "./components/sections/AboutUs";
// import { Brands } from "./components/sections/Brands";
// import { CTA } from "./components/sections/CallToAction";
// import { Hero } from "./components/sections/Hero";
// import { Pricing } from "./components/sections/Pricing";
// import { Services } from "./components/sections/Services";


// function App() {
//   return (
//     <Layout title="Ascendix IT">
//       <Hero />
//       <Brands />
//       <Services />
//       <AboutUs />
//       <Pricing />
//       <CTA />
//     </Layout>
//   );
// }

// export default App;


// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// import { Layout } from "./components/Layout";
// import { AboutUs } from "./components/sections/AboutUs";
// import { Brands } from "./components/sections/Brands";
// import { CTA } from "./components/sections/CallToAction";
// import { Hero } from "./components/sections/Hero";
// // import { Pricing } from "./components/sections/Pricing";
// import { Services } from "./components/sections/Services";

// function App() {
//   useEffect(() => {
//     AOS.init({
//       duration: 800,
//       easing: "ease-in-out",
//       once: true,
//     });
//   }, []);

//   return (
//     <Layout title="Ascendix IT">
//       <Hero />
//       <Brands />
//       <Services />
//       <AboutUs />
//       {/* <Pricing /> */}
//       <CTA />
//     </Layout>
//   );
// }

// export default App;

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Layout } from "./components/Layout";
import { AboutUs } from "./components/sections/AboutUs";
import { Brands } from "./components/sections/Brands";
import { CTA } from "./components/sections/CallToAction";
import { Hero } from "./components/sections/Hero";
// import { Pricing } from "./components/sections/Pricing";
import { Services } from "./components/sections/Services";
import { ContactModal } from "./components/core/ContactModal";
import { Navbar } from "./components/elements/Navbar";

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
      {/* Pass setIsModalOpen to Navbar */}
      <Navbar setIsModalOpen={setIsModalOpen} />
      <Layout title="Ascendix IT">
        <Hero />
        <Brands />
        <Services />
        <AboutUs />
        {/* <Pricing /> */}
        <CTA setIsModalOpen={setIsModalOpen} />
      </Layout>
      {/* Contact Modal */}
      <ContactModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </>
  );
}

export default App;
