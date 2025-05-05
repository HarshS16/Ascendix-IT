
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
