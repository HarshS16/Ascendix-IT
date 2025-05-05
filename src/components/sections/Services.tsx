
// import { motion } from "framer-motion";
// import { services } from "../../utils/services-data";
// import { Service } from "../cards/Service";
// import { Container } from "../shared/Container";
// import { Paragraph } from "../shared/Paragraph";
// import { Title } from "../shared/Title";

// export const Services = () => {
//   return (
//     <section id="services" className="relative py-10 pb-10 overflow-hidden">
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
//             <motion.div
//               key={key}
//               initial={{ opacity: 0, y: 80 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.2 }}
//               transition={{ duration: 0.5, delay: key * 0.1 }}
//               className="transition-all transform hover:scale-105 hover:shadow-xl duration-500"
//             >
//               <Service
//                 title={service.title}
//                 description={service.description}
//                 icon={service.icon}
//               />
//             </motion.div>
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
//   const topRow = services.slice(0, 3);
//   const bottomRow = services.slice(3);

//   return (
//     <section id="services" className="relative py-10 pb-10 overflow-hidden">
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

//         {/* Top Row */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
//           {topRow.map((service, key) => (
//             <motion.div
//               key={key}
//               initial={{ opacity: 0, y: 80 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.2 }}
//               transition={{ duration: 0.5, delay: key * 0.1 }}
//               className="transition-all transform hover:scale-105 hover:shadow-xl duration-500"
//             >
//               <Service
//                 title={service.title}
//                 description={service.description}
//                 icon={service.icon}
//               />
//             </motion.div>
//           ))}
//         </div>

//         {/* Bottom Row - Centered between top row columns */}
//         <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-center lg:gap-[6rem] mt-10">
//           {bottomRow.map((service, key) => (
//             <motion.div
//               key={key + 3}
//               initial={{ opacity: 0, y: 80 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.2 }}
//               transition={{ duration: 0.5, delay: (key + 3) * 0.1 }}
//               className="transition-all transform hover:scale-105 hover:shadow-xl duration-500 w-full sm:w-[22rem]"
//             >
//               <Service
//                 title={service.title}
//                 description={service.description}
//                 icon={service.icon}
//               />
//             </motion.div>
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
//   const topRow = services.slice(0, 3);
//   const bottomRow = services.slice(3);

//   return (
//     <section id="services" className="relative py-10 pb-10 overflow-hidden">
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

//         {/* Top Row */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
//           {topRow.map((service, key) => (
//             <motion.div
//               key={key}
//               initial={{ opacity: 0, y: 80 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.2 }}
//               transition={{ duration: 0.5, delay: key * 0.1 }}
//               className="transition-all transform hover:scale-105 hover:shadow-xl duration-500"
//             >
//               <Service
//                 title={service.title}
//                 description={service.description}
//                 icon={service.icon}
//               />
//             </motion.div>
//           ))}
//         </div>

//         {/* Bottom Row - Wide horizontal cards */}
//         <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-center lg:gap-[4rem] mt-10">
//           {bottomRow.map((service, key) => (
//             <motion.div
//               key={key + 3}
//               initial={{ opacity: 0, y: 80 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.2 }}
//               transition={{ duration: 0.5, delay: (key + 3) * 0.1 }}
//               className="transition-all transform hover:scale-105 hover:shadow-xl duration-500 w-full max-w-2xl"
//             >
//               <div className="flex items-center gap-4 p-6 rounded-xl bg-white dark:bg-dark-card border border-box-border shadow-md">
//                 <div className="text-indigo-500 text-4xl">{service.icon}</div>
//                 <div>
//                   <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
//                   <p className="text-sm text-muted-foreground mt-1">{service.description}</p>
//                 </div>
//               </div>
//             </motion.div>
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
  const topRow = services.slice(0, 3);
  const bottomRow = services.slice(3);

  return (
    <section id="services" className="relative py-10 pb-10 overflow-hidden">
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

        {/* Top Row */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {topRow.map((service, key) => (
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

        {/* Bottom Row — same width as grid cards, centered manually */}
        <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-center lg:gap-[6rem] mt-10">
          {bottomRow.map((service, key) => (
            <motion.div
              key={key + 3}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (key + 3) * 0.1 }}
              className="w-full sm:w-[calc((100%-2rem)/2)] lg:w-[calc((100%-4rem)/3)] transition-all transform hover:scale-105 hover:shadow-xl duration-500"
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
