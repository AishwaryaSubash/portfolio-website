import { professionalSkills, skills } from "../utils/constants";

const Skills = () => {
  return (
    <div className="w-9/12 mt-20 flex flex-col justify-center items-center bg-lightBg text-lightHighlight dark:bg-darkBg dark:text-darkText">
      <p className="font-headingFont text-5xl text-lightText dark:text-darkText font-bold my-8 max-md:text-4xl max-sm:text-3xl max-sm:my-0">
        My Skills
      </p>
      <div className="w-full flex flex-col justify-center gap-20">
        <p className="text-4xl font-semibold font-headingFont text-center text-lightHighlight dark:text-darkHighlight max-lg:px-4 max-md:text-3xl max-sm:text-2xl">
          Technical Skills
        </p>
        <div className="flex flex-col gap-20">
          {skills.map((skill, index) => {
            return (
              <div
                className="w-full flex flex-col gap-10 max-sm:gap-0"
                key={index}
              >
                <p className="text-3xl text-center text-lightText dark:text-darkText font-semibold font-headingFont max-lg:px-4 max-md:text-2xl max-sm:text-xl">
                  {skill.skillType}
                </p>
                <div className="w-full grid grid-cols-5 gap-8 justify-items-center items-end max-lg:grid-cols-4 max-md:grid-cols-3">
                  {skill.skillArray.map((item, index) => (
                    <div key={index} className="relative group">
                      <div
                        dangerouslySetInnerHTML={{ __html: item.svg }}
                        className="w-12 h-12"
                      ></div>
                      <div className="z-10 absolute left-1/2 transform -translate-x-1/2 top-full mb-2 w-fit p-2 bg-gray-800 text-white text-center text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {item.name}
                      </div>
                    </div>
                    // <div
                    //   key={index}
                    //   className="flex flex-col items-center justify-start m-4 p-4 gap-4 text-center font-textFont rounded-xl max-md:flex-col"
                    // >
                    //   <MediaQuery maxWidth={795}>
                    //     <div className="w-full flex justify-between items-center max-tablet:justify-start max-tablet:gap-3">
                    //       <div
                    //         dangerouslySetInnerHTML={{ __html: item.svg }}
                    //         className="w-12 h-12"
                    //       ></div>
                    //       <div className="flex flex-col items-start">
                    //         <p className="text-left text-lightText dark:text-darkText justify-self-center max-sm:text-sm">
                    //           {item.name}
                    //         </p>
                    //         <p className="text-lightText dark:text-darkText max-sm:text-sm">
                    //           {item.proficiency}%
                    //         </p>
                    //       </div>
                    //     </div>
                    //   </MediaQuery>
                    //   <MediaQuery minWidth={800}>
                    //     <div className="w-[240px] flex justify-between items-center">
                    //       <div className="w-full flex items-center gap-3">
                    //         <div
                    //           dangerouslySetInnerHTML={{ __html: item.svg }}
                    //           className="w-12 h-12"
                    //         ></div>
                    //         <p className="text-left text-lightText dark:text-darkText justify-self-center max-sm:text-sm">
                    //           {item.name}
                    //         </p>
                    //       </div>
                    //       <CountUp
                    //         className="text-lightText dark:text-darkText"
                    //         start={0}
                    //         end={item.proficiency}
                    //         duration={1}
                    //         delay={1}
                    //       />
                    //       <p>%</p>
                    //     </div>
                    //   </MediaQuery>
                    //   <div className="flex flex-start overflow-hidden w-full font-sans rounded-full text-xs font-medium h-2 bg-lightHighlightBg dark:bg-gray-800">
                    //     <motion.div
                    //       className="flex justify-center items-center h-full overflow-hidden break-all rounded-full bg-lightHighlight dark:bg-darkHighlight"
                    //       initial={{ width: 0 }}
                    //       animate={{ width: `${item.proficiency}%` }}
                    //       transition={{ duration: 1, delay: 1 }}
                    //       // ref={ref}
                    //       // style={{
                    //       //   scale: scrollYProgress,
                    //       //   opacity: scrollYProgress,
                    //       // }}
                    //     ></motion.div>
                    //   </div>
                    // </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full mt-24 flex flex-col gap-10 items-center justify-center max-sm:gap-0">
        <p className="text-4xl font-semibold font-headingFont text-center text-lightHighlight dark:text-darkHighlight max-lg:px-4 max-md:text-3xl max-sm:text-2xl">
          Professional Skills
        </p>
        <div className="w-full grid grid-cols-5 gap-8 justify-items-center items-end justify-center max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:gap-y-0">
          {professionalSkills.map((item, index) => (
            <div key={index} className="relative group">
              <div
                dangerouslySetInnerHTML={{ __html: item.svg }}
                className="w-12 h-12"
              ></div>
              <div className="z-10 absolute left-1/2 transform -translate-x-1/2 top-full mb-2 w-fit p-2 bg-gray-800 text-white text-center text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.name}
              </div>
            </div>
            // <div
            //   key={index}
            //   className="flex flex-col items-center justify-start m-4 p-4 gap-[1.3rem] text-center font-textFont rounded-xl max-md:flex-col"
            // >
            //   <MediaQuery minWidth={800}>
            //     <div className="w-[240px] flex justify-between items-center">
            //       <div className="w-full flex items-center gap-3">
            //         <div
            //           dangerouslySetInnerHTML={{ __html: item.svg }}
            //           className="w-12 h-12"
            //         ></div>
            //         <p className="text-left text-lightText dark:text-darkText justify-self-center max-sm:text-sm">
            //           {item.name}
            //         </p>
            //       </div>
            //       <CountUp
            //         className="w-6 text-lightText dark:text-darkText"
            //         start={0}
            //         end={item.proficiency}
            //         duration={1}
            //         delay={1}
            //       />
            //       <p>%</p>
            //     </div>
            //   </MediaQuery>
            //   <MediaQuery maxWidth={795}>
            //     <div className="w-full flex justify-between items-center max-tablet:justify-start max-tablet:gap-3">
            //       <div
            //         dangerouslySetInnerHTML={{ __html: item.svg }}
            //         className="w-12 h-12"
            //       ></div>
            //       <div className="flex flex-col items-start">
            //         <p className="text-left justify-self-center max-sm:text-sm">
            //           {item.name}
            //         </p>
            //         <p>{item.proficiency}%</p>
            //       </div>
            //     </div>
            //   </MediaQuery>
            //   <div className="flex flex-start overflow-hidden w-full font-sans rounded-full text-xs font-medium h-2 bg-gray-400 dark:bg-gray-800">
            //     <motion.div
            //       className="flex justify-center items-center h-full overflow-hidden break-all rounded-full  bg-lightHighlight dark:bg-darkHighlight"
            //       initial={{ width: 0 }}
            //       animate={{ width: `${item.proficiency}%` }}
            //       transition={{ duration: 0.5, delay: 1 }}
            //     ></motion.div>
            //   </div>
            // </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
