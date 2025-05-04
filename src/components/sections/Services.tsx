// import { services } from "../../utils/services-data";
// import { Service } from "../cards/Service";
// import { Container } from "../shared/Container";
// import { Paragraph } from "../shared/Paragraph";
// import { Title } from "../shared/Title";

// export const Services = () => {
//   return (
//     <section id="services">
//       {" "}
//       <Container className="space-y-10 md:space-y-12">
//         <div className="text-center max-w-3xl mx-auto space-y-4">
//           <Title> Our AI Services</Title>
//           <Paragraph>
//             Unlock the potential of advanced machine learning, natural language
//             processing, and predictive analytics. Our services include:
//           </Paragraph>
//         </div>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
//           {services.map((service, key) => (
//             <Service
//               key={key}
//               title={service.title}
//               description={service.description}
//               icon={service.icon}
//             />
//           ))}
//         </div>
//       </Container>
//     </section>
//   );
// };


// import { services } from "../../utils/services-data";
// import { Service } from "../cards/Service";
// import { Container } from "../shared/Container";
// import { Paragraph } from "../shared/Paragraph";
// import { Title } from "../shared/Title";

// export const Services = () => {
//   return (
//     <section id="services">
//       <Container className="space-y-10 md:space-y-12">
//         <div className="text-center max-w-3xl mx-auto space-y-4">
//           <Title> What We Offer</Title>
//           <Paragraph>
//             At Ascendix IT, we help you harness the full potential of modern
//             technology. From responsive web platforms to smart AI-powered solutions,
//             our services are tailored to accelerate your digital transformation.
//           </Paragraph>
//         </div>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
//           {services.map((service, key) => (
//             <Service
//               key={key}
//               title={service.title}
//               description={service.description}
//               icon={service.icon}
//             />
//           ))}
//         </div>
//       </Container>
//     </section>
//   );
// };


// import { services } from "../../utils/services-data";
// import { Service } from "../cards/Service";
// import { Container } from "../shared/Container";
// import { Paragraph } from "../shared/Paragraph";
// import { Title } from "../shared/Title";

// export const Services = () => {
//   return (
//     <section id="services">
//       <Container className="space-y-10 md:space-y-12">
//         <div className="text-center max-w-3xl mx-auto space-y-4">
//           <Title>What We Offer</Title>
//           <Paragraph>
//             At Ascendix IT, we help you harness the full potential of modern
//             technology. From responsive web platforms to smart AI-powered solutions,
//             our services are tailored to accelerate your digital transformation.
//           </Paragraph>
//         </div>

//         {/* Applying transition to the grid */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
//           {services.map((service, key) => (
//             <div
//               key={key}
//               className="transition-all transform hover:scale-105 hover:shadow-xl duration-300"
//             >
//               <Service
//                 title={service.title}
//                 description={service.description}
//                 icon={service.icon}
//               />
//             </div>
//           ))}
//         </div>
//       </Container>
//     </section>
//   );
// };


// import { motion } from "framer-motion";
// import { services } from "../../utils/services-data";
// import { Service } from "../cards/Service";
// import { Container } from "../shared/Container";
// import { Paragraph } from "../shared/Paragraph";
// import { Title } from "../shared/Title";

// export const Services = () => {
//   return (
//     <section id="services" className="relative py-10 overflow-hidden">
//       {/* Gradient background blur effects */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1.5 }}
//         className="absolute inset-0 z-0"
//       >
//         <div className="absolute top-[-100px] left-[-80px] w-[400px] h-[400px] rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-transparent opacity-30 blur-3xl" />
//         <div className="absolute bottom-[-100px] right-[-80px] w-[400px] h-[400px] rounded-full bg-gradient-to-br from-purple-600 via-violet-600 to-transparent opacity-30 blur-3xl" />
//       </motion.div>

//       {/* Foreground content */}
//       <Container className="space-y-10 md:space-y-12 relative z-10">
//         <div className="text-center max-w-3xl mx-auto space-y-4">
//           <Title>What We Offer</Title>
//           <Paragraph>
//             At Ascendix IT, we help you harness the full potential of modern
//             technology. From responsive web platforms to smart AI-powered solutions,
//             our services are tailored to accelerate your digital transformation.
//           </Paragraph>
//         </div>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
//           {services.map((service, key) => (
//             <div
//               key={key}
//               className="transition-all transform hover:scale-105 hover:shadow-xl duration-300"
//             >
//               <Service
//                 title={service.title}
//                 description={service.description}
//                 icon={service.icon}
//               />
//             </div>
//           ))}
//         </div>
//       </Container>
//     </section>
//   );
// };

// import { motion } from "framer-motion";
// import { services } from "../../utils/services-data";
// import { Service } from "../cards/Service";
// import { Container } from "../shared/Container";
// import { Paragraph } from "../shared/Paragraph";
// import { Title } from "../shared/Title";

// export const Services = () => {
//   return (
//     <section id="services" className="relative py-0 overflow-hidden">
//       {/* Gradient background blur effects */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1.5 }}
//         className="absolute inset-0 z-0"
//       >
//         <div className="absolute top-[-100px] left-[-80px] w-[400px] h-[400px] rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-transparent opacity-30 blur-3xl" />
//         <div className="absolute bottom-[-100px] right-[-80px] w-[400px] h-[400px] rounded-full bg-gradient-to-br from-purple-600 via-violet-600 to-transparent opacity-30 blur-3xl" />
//       </motion.div>

//       {/* Foreground content */}
//       <Container className="space-y-10 md:space-y-12 relative z-10">
//         <div className="text-center max-w-3xl mx-auto space-y-4">
//           <Title>What We Offer</Title>
//           <Paragraph>
//             At Ascendix IT, we help you harness the full potential of modern
//             technology. From responsive web platforms to smart AI-powered solutions,
//             our services are tailored to accelerate your digital transformation.
//           </Paragraph>
//         </div>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
//           {services.map((service, key) => (
//             <div
//               key={key}
//               className="transition-all transform hover:scale-105 hover:shadow-xl duration-300"
//             >
//               <Service
//                 title={service.title}
//                 description={service.description}
//                 icon={service.icon}
//               />
//             </div>
//           ))}
//         </div>
//       </Container>
//     </section>
//   );
// };

import { motion } from "framer-motion";
import { services } from "../../utils/services-data";
import { Service } from "../cards/Service";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Title } from "../shared/Title";

export const Services = () => {
  return (
    <section id="services" className="relative py-0 overflow-hidden">
      {/* Gradient background blur effects */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute top-[-100px] left-[-80px] w-[400px] h-[400px] rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-transparent opacity-30 blur-3xl" />
        <div className="absolute bottom-[-100px] right-[-80px] w-[400px] h-[400px] rounded-full bg-gradient-to-br from-purple-600 via-violet-600 to-transparent opacity-30 blur-3xl" />
      </motion.div>

      {/* Foreground content */}
      <Container className="space-y-10 md:space-y-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Title>What We Offer</Title>
          <Paragraph>
            At Ascendix IT, we help you harness the full potential of modern
            technology. From responsive web platforms to smart AI-powered solutions,
            our services are tailored to accelerate your digital transformation.
          </Paragraph>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, key) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: key * 0.1 }}
              className="transition-all transform hover:scale-105 hover:shadow-xl duration-500"
            >
              <Service
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

