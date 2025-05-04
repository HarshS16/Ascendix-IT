import { Button } from "../shared/Button";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";

export const CTA = () => {
  return (
    <section className="pb-20 relative">
      {" "}
      <Container>
        <div className="relative rounded-2xl overflow-hidden">
          <div className="relative z-10 mx-auto text-center max-w-xl md:max-w-2xl py-8 md:py-10 px-6 md:px-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-heading-1">
              {" "}
              Power Up Your Ideas with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 ">
                Ascendix IT
              </span>{" "}
              
            </h1>
            <Paragraph className="pt-10">
            Whether you're launching a startup or scaling your operations, Ascendix IT gives you the AI edge — from smarter decisions to automated workflows.
            </Paragraph>
            <div className="mx-auto max-w-md sm:max-w-xl pt-10 dark:text-white">
              <Button> Get In Touch</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};


// import { Button } from "../shared/Button";
// import { Container } from "../shared/Container";
// import { Paragraph } from "../shared/Paragraph";

// export const CTA = () => {
//   return (
//     <section className="pb-20 relative bg-gradient-to-br from-black via-[#1e1b2e] to-[#2d1c46] rounded-2xl shadow-xl">
//       <Container>
//         <div className="relative z-10 mx-auto text-center max-w-xl md:max-w-2xl py-12 px-6 md:px-10">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
//             Power Up Your Ideas with{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
//               AI-Driven Tech
//             </span>
//           </h1>

//           <Paragraph className="pt-8 text-gray-300">
//             Whether you're launching a startup or scaling your operations, Ascendix IT gives you the AI edge — from smarter decisions to automated workflows.
//           </Paragraph>

//           <div className="mx-auto max-w-md pt-10">
//             <Button className="transition-transform hover:scale-105 duration-300">
//               Let’s Build Together
//             </Button>
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// };
