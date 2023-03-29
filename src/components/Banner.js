import React from "react";
//images
import Image from "../assets/avatar.svg";
//icons
import { FaGithub, FaYoutube, FaDribbble } from "react-icons/fa";
//type aanimation
import { TypeAnimation } from "react-type-animation";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="banner"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:grap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left ">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[70px]"
            >
              Slougui <span>SABRI</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="text-white mr-4">I am a</span>
              <TypeAnimation
                sequence={[
                  "CameraMan",
                  2000,
                  "Designer",
                  2000,
                  "teacher",
                  2000,
                  "youtuber",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max grap-x-6 items-center mb-12 mx-auto lg:mx-0 "
            >
              <button className="btn btn-lg ">contact me</button>
              <pre> </pre>
              <a  href="www.facebook.com/dycard.shigaraki.9" className="text-gradient btn-link ">
                my portfolio
              </a>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] grap-x-6 max-w-max mx-auto lg:mx-0 "
            >
              <a href="www.facebook.com/dycard.shigaraki.9" >
                <FaYoutube />
              </a>
              <pre> </pre>
              <a href="www.facebook.com/dycard.shigaraki.9">
                <FaGithub />
              </a>
              <pre> </pre>
              <a href="www.facebook.com/dycard.shigaraki.9">
                <FaDribbble />
              </a>
            </motion.div>
          </div>
          <motion.div
          variants={fadeIn("down", 0.5)}
          initial="hidden"
          whileInView={"show"}
          
          className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]">
            <img src={Image} alt=" "></img>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
