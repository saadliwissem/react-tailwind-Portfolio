import React from "react";
//countup
import CountUp  from "react-countup";
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
        <div>
          {/*img */}
          <div className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"></div>
          {/*text */}
          <div>
            <h2>About me.</h2>
            <h3>I am sabri l bhim yarh yaaa 7atta nta</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
            {/*state */}
            <div className="flex">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {
                    InView?
                    <CountUp start={0} end={13} dura tion={3}/>: null
                  }
                </div>
                <div className="font-primary text-sm tracking-[2px] ">
                  year of <br/>experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {
                    InView?
                    <CountUp start={0} end={13} dura tion={3}/>: null
                  }
                </div>
                <div className="font-primary text-sm tracking-[2px] ">
                  year of <br/>experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {
                    InView?
                    <CountUp start={0} end={13} dura tion={3}/>: null
                  }
                </div>
                <div className="font-primary text-sm tracking-[2px] ">
                  year of <br/>experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
