import { motion, useAnimate, useAnimation } from "framer-motion";
import React, { useState } from "react";
import { Power4 } from "gsap/all";

const Featured = () => {
  const cards = [useAnimation(), useAnimation()];
  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };
  return (
    <div className="w-full py-20 ">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className="text-7xl font-['Neue_Montreal'] tracking-tight">
          Featured Projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardcontainer relative w-1/2 h-[75vh]  "
          >
            <h1 className="absolute flex overflow-hidden  text-[#CDEA68] right-0  translate-x-1/2 -translate-y-1/2 top-1/2 z-[9] text-8xl leading-none tracking-tighter ">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.5 }}
                  className="inline-block "
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden ">
              <img
                className="w-full h-full bg-cover"
                src="/Fyde_Illustration_Crypto_2-1326x1101.png"
              ></img>
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardcontainer relative w-1/2 h-[75vh]  "
          >
            {" "}
            <h1 className="absolute flex overflow-hidden text-[#CDEA68] right-full translate-x-1/2 -translate-y-1/2 top-1/2 z-[9] text-8xl leading-none tracking-tighter ">
              {"VICE".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.5 }}
                  className="inline-block "
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="public\Vise_front2-1326x1101.jpg"
              ></img>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
