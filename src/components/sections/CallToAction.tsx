// import { Button } from "../shared/Button";
// import { Container } from "../shared/Container";
// import { Paragraph } from "../shared/Paragraph";

// export const CTA = () => {
//   return (
//     <section className="pb-20 relative">
//       {" "}
//       <Container>
//         <div className="relative rounded-2xl overflow-hidden">
//           <div className="relative z-10 mx-auto text-center max-w-xl md:max-w-2xl py-8 md:py-10 px-6 md:px-8">
//             <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-heading-1">
//               {" "}
//               Power Up Your Ideas with{" "}
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 ">
//                 Ascendix IT
//               </span>{" "}
              
//             </h1>
//             <Paragraph className="pt-10">
//             Whether you're launching a startup or scaling your operations, Ascendix IT gives you the AI edge — from smarter decisions to automated workflows.
//             </Paragraph>
//             <div className="mx-auto max-w-md sm:max-w-xl pt-10 dark:text-white">
//               <Button> Get In Touch</Button>
//             </div>
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// };

import { Button } from "../shared/Button";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";

export const CTA = () => {
  return (
    <section className="pb-20 pt- 10 relative overflow-hidden">
      <Container>
        {/* Blurred animated background blobs */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div
            className="absolute top-[-50px] left-[-50px] w-80 h-80 bg-purple-700 opacity-30 rounded-full filter blur-3xl animate-pulse"
            style={{
              animationDuration: "6s",
              animationTimingFunction: "ease-in-out",
              animationIterationCount: "infinite",
              transform: "translate3d(0, 0, 0)",
            }}
          ></div>
          <div
            className="absolute bottom-[-50px] right-[-50px] w-80 h-80 bg-indigo-600 opacity-30 rounded-full filter blur-3xl animate-pulse"
            style={{
              animationDuration: "8s",
              animationTimingFunction: "ease-in-out",
              animationIterationCount: "infinite",
              transform: "translate3d(0, 0, 0)",
            }}
          ></div>
        </div>

        <div className="relative z-10 mx-auto text-center max-w-xl md:max-w-2xl py-8 md:py-10 px-6 md:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-heading-1">
            Power Up Your Ideas with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
              Ascendix IT
            </span>
          </h1>
          <Paragraph className="pt-10">
            Whether you're launching a startup or scaling your operations,
            Ascendix IT gives you the AI edge — from smarter decisions to
            automated workflows.
          </Paragraph>
          <div className="mx-auto max-w-md sm:max-w-xl pt-10 dark:text-white">
            <Button>Get In Touch</Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
