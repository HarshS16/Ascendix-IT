// import { Container } from "../shared/Container";

// export const Numbers = () => {
//   return (
//     <section className="relative mt-12 md:mt-16">
//       <Container className="flex justify-center align-center">
//         <div
//           className="mx-auto lg:mx-0 p-5 sm:p-6 sm:py-8 max-w-5xl rounded-3xl bg-box-bg
//                         border border-box-border shadow-lg shadow-box-shadow md:divide-x divide-box-border
//                         grid grid-cols-2 md:grid-cols-4"
//         >
//           <div className="text-center px-5">
//             <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">
//               {" "}
//               100+{" "}
//             </h2>
//             <p className="mt-2 text-heading-3"> AI Models Implemented</p>
//           </div>
//           <div className="text-center px-5">
//             <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">
//               {" "}
//               250+{" "}
//             </h2>
//             <p className="mt-2 text-heading-3"> Enterprise Clients</p>
//           </div>
//           <div className="text-center px-5">
//             <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">
//               {" "}
//               99.9%{" "}
//             </h2>
//             <p className="mt-2 text-heading-3"> Uptime Guarantee</p>
//           </div>
//           <div className="text-center px-5">
//             <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">
//               {" "}
//               10+{" "}
//             </h2>
//             <p className="mt-2 text-heading-3"> Years of Innovation</p>
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// };


// import { motion } from "framer-motion";
// import { Container } from "../shared/Container";

// export const Numbers = () => {
//   return (
//     <section className="relative mt-12 md:mt-16 py-12 overflow-hidden">
//       {/* Gradient Background Blurs */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1.5 }}
//         className="absolute inset-0 z-0"
//       >
//         <div className="absolute -top- 10-left-24 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-transparent opacity-30 blur-3xl" />
//         <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-purple-600 via-violet-600 to-transparent opacity-30 blur-3xl" />
//       </motion.div>

//       {/* Stats Container */}
//       <Container className="relative z-10 flex justify-center items-center">
//         <div
//           className="mx-auto lg:mx-0 p-5 sm:p-6 sm:py-8 max-w-5xl rounded-3xl bg-box-bg
//                      border border-box-border shadow-lg shadow-box-shadow md:divide-x divide-box-border
//                      grid grid-cols-2 md:grid-cols-4 backdrop-blur-sm"
//         >
//           <div className="text-center px-5">
//             <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">100+</h2>
//             <p className="mt-2 text-heading-3">AI Models Implemented</p>
//           </div>
//           <div className="text-center px-5">
//             <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">250+</h2>
//             <p className="mt-2 text-heading-3">Enterprise Clients</p>
//           </div>
//           <div className="text-center px-5">
//             <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">99.9%</h2>
//             <p className="mt-2 text-heading-3">Uptime Guarantee</p>
//           </div>
//           <div className="text-center px-5">
//             <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">10+</h2>
//             <p className="mt-2 text-heading-3">Years of Innovation</p>
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// };

import { Container } from "../shared/Container";
import CountUp from "react-countup";

export const Numbers = () => {
  const stats = [
    { value: 100, suffix: "+", label: "Projects delivered" },
    { value: 250, suffix: "+", label: "Enterprise Clients" },
    { value: 99.9, suffix: "%", label: "Uptime Guarantee" },
    { value: 10, suffix: "+", label: "Industries Served" },
  ];

  return (
    <section className="relative">
      <Container className="flex justify-center align-center">
        <div
          className="mx-auto lg:mx-0 pt-0 px-5 sm:px-6 sm:pb-8 max-w-5xl rounded-3xl bg-box-bg
                      border border-box-border shadow-lg shadow-box-shadow md:divide-x divide-box-border
                      grid grid-cols-2 md:grid-cols-4 backdrop-blur-sm"
        >
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="text-center px-5 py-6 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl rounded-xl"
            >
              <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">
                <CountUp
                  end={item.value}
                  duration={2}
                  decimals={item.value % 1 !== 0 ? 1 : 0}
                />
                {item.suffix}
              </h2>
              <p className="mt-2 text-heading-3">{item.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
