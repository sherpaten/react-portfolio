import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="pt-36 pb-24">
      {/* ABOUT */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">ABOUT {""}</span>ME
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
        I am a self-taught web developer with a strong passion for creating engaging digital experiences.
          <br />
          My expertise lies in web and mobile app development, with a focus on building robust and dynamic websites.
          <br />I thrive on exploring new technologies and approaches to problem-solving,
           always aiming to enhance my skills and deliver innovative solutions.
          <br />  I actively seek opportunities to take on challenges that allow me to grow,
          </p>
      </motion.div>
    </section>
  );
};

export default About;
