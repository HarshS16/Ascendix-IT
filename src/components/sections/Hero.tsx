
import { motion } from "framer-motion";
import { Button } from "../shared/Button";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Numbers } from "./Numbers";

export const Hero = () => {
  return (
    <section className="relative pt-10 pb-10 lg:pt-36 overflow-hidden">
      {/* 3D Gradient Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-purple-600 via-indigo-600 to-transparent opacity-40 blur-3xl rotate-45" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-indigo-700 via-blue-600 to-transparent opacity-40 blur-3xl rotate-12" />
      </motion.div>

      {/* Main Content */}
      <Container className="relative z-10 flex flex-col lg:flex-row gap-10 lg:gap-12">
        {/* Hero Text Content */}
        <div className="flex flex-col items-center text-center lg:text-left lg:py-8 lg:items-start max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2">
          <h1 className="text-heading-1 text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold">
            Transform Ideas into{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 ml-2">
              Scalable Solutions
            </span>
          </h1>
          <Paragraph className="mt-8">
            At Ascendix IT, we specialize in delivering custom web apps, mobile apps, and AI/ML-powered solutions that help businesses innovate and scale faster.
          </Paragraph>
          <div className="mt-10 w-full flex max-w-md mx-auto lg:mx-0">
            <form
              action="#"
              className="py-1 pl-6 w-full pr-1 flex gap-3 items-center text-heading-3 shadow-lg border border-box-border bg-box-bg rounded-full"
            >
              <span className="min-w-max pr-2 border-r border-box-border">📧</span>
              <input
                type="email"
                placeholder="johndoe@gmail.com"
                className="w-full py-3 outline-none bg-transparent"
              />
              <Button className="min-w-max text-white">
                <span className="relative z-[5]">Get Started</span>
              </Button>
            </form>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex flex-1 lg:w-1/2 lg:h-auto relative lg:mx-0 mx-auto max-w-3xl">
          <img
            src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg"
            alt="Hero"
            className="lg:absolute lg:w-full lg:h-full rounded-3xl object-cover max-h-96 lg:max-h-none"
          />
        </div>
      </Container>

      <Numbers />
    </section>
  );
};
