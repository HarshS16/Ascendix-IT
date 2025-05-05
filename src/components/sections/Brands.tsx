// import { Container } from "../shared/Container";
// import { Title } from "../shared/Title";

// const logos = ["discord", "openai", "paypal", "slack", "spotify", "youtube"];

// export const Brands = () => {
//   return (
//     <section>
//       {" "}
//       <Container className="space-y-8">
//         <div className="text-center max-w-3xl mx-auto">
//           <Title> Trusted by Industry Leaders </Title>
//         </div>
//         <div className="flex justify-center flex-wrap gap-4">
//           {logos.map((logo, key) => (
//             <div
//               key={key}
//               className="p-4 sm:p-5 rounded-xl bg-body border border-box-border group"
//             >
//               <img
//                 src={`/assets/logos/${logo}.png`}
//                 width="100"
//                 height="60"
//                 alt={logo}
//                 className="h-7 sm:h-10 w-auto ease-linear duration-300 grayscale group-hover:!grayscale-0 group-hover:scale-105"
//               />
//             </div>
//           ))}
//         </div>
//       </Container>
//     </section>
//   );
// };


// import { motion } from "framer-motion";
// import { Container } from "../shared/Container";
// import { Title } from "../shared/Title";

// const logos = ["discord", "openai", "paypal", "slack", "spotify", "youtube"];

// export const Brands = () => {
//   return (
//     <section className="relative py-0 overflow-hidden">
//       {/* Gradient Blurred Backgrounds */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1.5 }}
//         className="absolute inset-0 z-0"
//       >
//         <div className="absolute -top-20 -left-20 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-transparent opacity-30 blur-3xl" />
//         <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-purple-600 via-violet-600 to-transparent opacity-30 blur-3xl" />
//       </motion.div>

//       {/* Main Content */}
//       <Container className="relative z-10 space-y-8">
//         <div className="text-center max-w-3xl mx-auto">
//           <Title>Trusted by Industry Leaders</Title>
//         </div>
//         <div className="flex justify-center flex-wrap gap-4">
//           {logos.map((logo, key) => (
//             <div
//               key={key}
//               className="p-4 sm:p-5 rounded-xl bg-body border border-box-border group transition-all duration-300 hover:scale-105"
//             >
//               <img
//                 src={`/assets/logos/${logo}.png`}
//                 width="100"
//                 height="60"
//                 alt={logo}
//                 className="h-7 sm:h-10 w-auto ease-linear duration-300 grayscale group-hover:grayscale-0 group-hover:scale-110"
//               />
//             </div>
//           ))}
//         </div>
//       </Container>
//     </section>
//   );
// };

// import { motion } from "framer-motion";
// import { Container } from "../shared/Container";
// import { Title } from "../shared/Title";

// const logos = ["discord", "openai", "paypal", "slack", "spotify", "youtube"];

// export const Brands = () => {
//   return (
//     <section className="relative py-16 overflow-hidden">
//       {/* Gradient Blurred Backgrounds */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1.5 }}
//         className="absolute inset-0 z-0"
//       >
//         <div className="absolute -top-20 -left-20 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-transparent opacity-30 blur-3xl" />
//         <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-purple-600 via-violet-600 to-transparent opacity-30 blur-3xl" />
//       </motion.div>

//       {/* Main Content */}
//       <Container className="relative z-10">
//         <div className="text-center max-w-3xl mx-auto mb-12">
//           <Title>Trusted by Industry Leaders</Title>
//         </div>
        
//         {/* Grid Layout for Logos - Removes gaps between items */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 w-full max-w-5xl mx-auto">
//           {logos.map((logo, key) => (
//             <motion.div
//               key={key}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ 
//                 duration: 0.5,
//                 delay: key * 0.1,
//                 ease: "easeOut"
//               }}
//               className="flex items-center justify-center h-24 border-box-border group transition-all duration-300 hover:bg-white/5 backdrop-blur-sm"
//             >
//               <img
//                 src={`/assets/logos/${logo}.png`}
//                 width="100"
//                 height="60"
//                 alt={logo}
//                 className="h-8 sm:h-10 w-auto ease-linear duration-300 grayscale group-hover:grayscale-0 group-hover:scale-110"
//               />
//             </motion.div>
//           ))}
//         </div>
//       </Container>
//     </section>
//   );
// };

import { Container } from "../shared/Container";
import { Title } from "../shared/Title";

const logos = ["discord", "openai", "paypal", "slack", "spotify", "youtube"];

export const Brands = () => {
  return (
    <section className="overflow-hidden space-y-5">
      <Container className="space-y-5 pt-20 pb-40">
        <div className="text-center max-w-3xl mx-auto">
          <Title> Trusted by Industry Leaders </Title>
        </div>

        {/* Marquee animation wrapper */}
        <div className="relative w-full">
          <div className="flex gap-6 animate-slide whitespace-nowrap">
            {[...logos, ...logos].map((logo, key) => (
              <div
                key={key}
                className="p-4 sm:p-5 rounded-xl bg-body border border-box-border group flex-shrink-0"
              >
                <img
                  src={`/assets/logos/${logo}.png`}
                  width="100"
                  height="60"
                  alt={logo}
                  className="h-7 sm:h-10 w-auto ease-linear duration-100 grayscale group-hover:!grayscale-0 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
