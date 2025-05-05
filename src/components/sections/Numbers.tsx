
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
      <Container className="flex justify-center align-center pt-20">
        <div
          className="mx-auto lg:mx-0 my -2 pt-5 px-5 sm:px-6 sm:pb-8 max-w-5xl rounded-3xl bg-box-bg
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
