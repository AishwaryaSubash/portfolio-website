import MediaQuery from "react-responsive";
import CountUp from "react-countup";
import { professionalSkills, skills } from "../utils/constants";
// import pageTransition from "../utils/pageTransition";
import "../index.css";
import {
  motion,
  // , useScroll
} from "framer-motion";
// import { useRef } from "react";

const Skills = () => {
  // const ref = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["0 1", "1 2", "2 3"],
  // });

  return (
    <div className="flex flex-col justify-center items-center bg-lightBg text-lightText dark:bg-darkBg dark:text-darkText">
      <p className="text-6xl font-headingFont my-4">Skills</p>
      <div className="flex flex-col justify-center">
        <p className="text-4xl font-headingFont my-4 text-center text-lightHighlight dark:text-darkHighlight max-lg:px-4">
          Technical Skills
        </p>
        <div>
          {skills.map((skill, index) => {
            return (
              <div key={index}>
                <p className="text-2xl font-headingFont mt-6 max-lg:px-4">
                  {skill.skillType}
                </p>
                <div className="grid grid-cols-3 items-end max-lg:grid-cols-2 max-lg:gap-x-8 max-md:grid-cols-2">
                  {skill.skillArray.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center justify-start m-4 p-4 gap-4 text-center font-textFont rounded-xl max-md:flex-col"
                    >
                      <MediaQuery minWidth={800}>
                        <div className="w-full flex justify-between items-center">
                          <div className="w-full flex items-center gap-3 max-w-[200px]">
                            <div
                              dangerouslySetInnerHTML={{ __html: item.svg }}
                              className="w-12 h-12"
                            ></div>
                            <h3 className="text-left justify-self-center">
                              {item.name}
                            </h3>
                          </div>
                          <CountUp
                            start={0}
                            end={item.proficiency}
                            duration={1}
                            delay={1}
                          />
                          <h3>%</h3>
                        </div>
                      </MediaQuery>
                      <MediaQuery maxWidth={795}>
                        <div className="w-full flex justify-between items-center max-tablet:justify-start max-tablet:gap-3">
                          <div
                            dangerouslySetInnerHTML={{ __html: item.svg }}
                            className="w-12 h-12"
                          ></div>
                          <div className="flex flex-col items-start">
                            <h3 className="text-left justify-self-center">
                              {item.name}
                            </h3>
                            <h3>{item.proficiency}%</h3>
                          </div>
                        </div>
                      </MediaQuery>
                      <div className="flex flex-start overflow-hidden w-full font-sans rounded-full text-xs font-medium h-3 bg-lightHighlightBg dark:bg-darkHighlightBg">
                        <motion.div
                          className="flex justify-center items-center h-full overflow-hidden break-all rounded-full bg-lightAltHighlight dark:bg-darkAltHighlight"
                          initial={{ width: 0 }}
                          animate={{ width: `${item.proficiency}%` }}
                          transition={{ duration: 1, delay: 1 }}
                          // ref={ref}
                          // style={{
                          //   scale: scrollYProgress,
                          //   opacity: scrollYProgress,
                          // }}
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-4xl font-headingFont mt-12 mb-4 text-center text-lightHighlight dark:text-darkHighlight max-lg:px-4">
          Professional Skills
        </p>
        <div>
          <div className="grid grid-cols-3 items-end max-lg:grid-cols-2 max-lg:gap-x-8 max-md:grid-cols-2">
            {professionalSkills.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-start m-4 p-4 gap-4 text-center font-textFont rounded-xl max-md:flex-col"
              >
                <MediaQuery minWidth={800}>
                  <div className="w-full flex justify-between items-center">
                    <div className="w-full flex items-center gap-3 max-w-[215px]">
                      <div
                        dangerouslySetInnerHTML={{ __html: item.svg }}
                        className="w-12 h-12"
                      ></div>
                      <h3 className="text-left justify-self-center">
                        {item.name}
                      </h3>
                    </div>
                    <CountUp
                      start={0}
                      end={item.proficiency}
                      duration={1}
                      delay={1}
                    />
                    <h3>%</h3>
                  </div>
                </MediaQuery>
                <MediaQuery maxWidth={795}>
                  <div className="w-full flex justify-between items-center max-tablet:justify-start max-tablet:gap-3">
                    <div
                      dangerouslySetInnerHTML={{ __html: item.svg }}
                      className="w-12 h-12"
                    ></div>
                    <div className="flex flex-col items-start">
                      <h3 className="text-left justify-self-center">
                        {item.name}
                      </h3>
                      <h3>{item.proficiency}%</h3>
                    </div>
                  </div>
                </MediaQuery>
                <div className="flex flex-start overflow-hidden w-full font-sans rounded-full text-xs font-medium h-3 bg-gray-400 dark:bg-neutral-600 ">
                  <motion.div
                    className="flex justify-center items-center h-full overflow-hidden break-all rounded-full  bg-red-950 dark:bg-yellow-100"
                    initial={{ width: 0 }}
                    animate={{ width: `${item.proficiency}%` }}
                    transition={{ duration: 0.5, delay: 1 }}
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
