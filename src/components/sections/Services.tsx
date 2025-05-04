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


import { services } from "../../utils/services-data";
import { Service } from "../cards/Service";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Title } from "../shared/Title";

export const Services = () => {
  return (
    <section id="services">
      <Container className="space-y-10 md:space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Title>What We Offer</Title>
          <Paragraph>
            At Ascendix IT, we help you harness the full potential of modern
            technology. From responsive web platforms to smart AI-powered solutions,
            our services are tailored to accelerate your digital transformation.
          </Paragraph>
        </div>

        {/* Applying transition to the grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, key) => (
            <div
              key={key}
              className="transition-all transform hover:scale-105 hover:shadow-xl duration-300"
            >
              <Service
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
