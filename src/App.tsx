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


import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Layout } from "./components/Layout";
import { AboutUs } from "./components/sections/AboutUs";
import { Brands } from "./components/sections/Brands";
import { CTA } from "./components/sections/CallToAction";
import { Hero } from "./components/sections/Hero";
// import { Pricing } from "./components/sections/Pricing";
import { Services } from "./components/sections/Services";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <Layout title="Ascendix IT">
      <Hero />
      <Brands />
      <Services />
      <AboutUs />
      {/* <Pricing /> */}
      <CTA />
    </Layout>
  );
}

export default App;
