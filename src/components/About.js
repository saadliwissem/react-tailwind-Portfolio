import React from "react";
//countup
import CountUp from "react-countup";
//intersection oberver hook
import { useInView } from "react-intersection-observer";
//motion
import { motion } from "framer-motion";
//variant
import { fadeIn } from "../variants";

const About = () => {
  const [ref, InView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg: gap-x-20 lg:gap-y-0 h-screen">
          {/*img */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
          ></motion.div>
          {/*text */}
          <motion.div
           variants={fadeIn("left", 0.5)}
           initial="hidden"
           whileInView={"show"}
           viewport={{ once: false, amount: 0.3 }}
          className="flex-1">
            <h2 className="h2 text-accent">About me.</h2>
            <h3 className="h3 mb-4">I am sabri l bhim yarh yaaa 7atta nta</h3>
            <p className="mb-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
            {/*state */}
            <div className="flex grap-x-6 lg:grap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {InView ? <CountUp start={0} end={7} dura tion={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px] ">
                  year of <br />
                  experience
                </div>
              </div>
              <pre> </pre>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {InView ? <CountUp start={0} end={15} dura tion={3} /> : null}
                  K+
                </div>

                <div className="font-primary text-sm tracking-[2px] ">
                  projects <br />
                  completed
                </div>
              </div>
              <pre> </pre>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {InView ? <CountUp start={0} end={13} dura tion={3} /> : null}
                  K+
                </div>
                <div className="font-primary text-sm tracking-[2px] ">
                  satisfied <br />
                  clients
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <button className="btn btn-lg">Contact me</button>
              <pre> </pre>
              <a href="" className="text-gradient btn-link ">
                {" "}
                my portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
