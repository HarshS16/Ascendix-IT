
import { useEffect } from "react";
import { Container } from "../shared/Container";
import { Title } from "../shared/Title";

const logos = ["discord", "openai", "paypal", "slack", "spotify", "youtube"];

export const Brands = () => {
  useEffect(() => {
    if (typeof window !== "undefined" && window.Aos) {
      window.Aos.refresh();
    }
  }, []);

  return (
    <section className="overflow-hidden space-y-5">
      <Container className="space-y-5 pt-10 pb-15">
        <div
          className="text-center max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <Title> Trusted by Industry Leaders </Title>
        </div>

        {/* Top row with marquee left */}
        <div
          className="relative w-full"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <div className="flex gap-6 animate-slide whitespace-nowrap">
            {logos.map((logo, key) => (
              <div
                key={key}
                className="p-4 sm:p-5 rounded-xl bg-body border border-box-border group flex-shrink-0"
                data-aos="zoom-in"
                data-aos-delay={100 + key * 50}
                data-aos-anchor-placement="center-bottom"
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
