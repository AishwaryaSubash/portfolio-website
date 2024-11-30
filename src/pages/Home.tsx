// import { useEffect } from "react";
import {
  Link,
  // useNavigate
} from "react-router-dom";
import MediaQuery from "react-responsive";
import { motion } from "framer-motion";
import pageTransition from "../utils/pageTransition";
import { buttonHover } from "../utils/motion";
// import Projects from "./Projects";

const Home = () => {
  // const navigate = useNavigate();

  // Disable tab switching
  // useEffect(() => {
  //   const handleBlur = () => {
  //     alert(
  //       "Tab switch/ screenshot attempt detected. Redirecting to a different page."
  //     );
  //     navigate("/about");
  //   };
  //   window.addEventListener("blur", handleBlur);
  //   return () => {
  //     window.removeEventListener("blur", handleBlur);
  //   };
  // }, [navigate]);

  // Image rendering using Canvas
  // useEffect(() => {
  //   const canvas = document.getElementById(
  //     "photoCanvas"
  //   ) as HTMLCanvasElement | null;
  //   if (!canvas) return;

  //   const ctx = canvas.getContext("2d");
  //   if (!ctx) return;

  //   const img = new Image();
  //   img.src = "Picture.jpg";
  //   img.onload = () => {
  //     const targetWidth = 350;
  //     const targetHeight = 485;

  //     // Calculate aspect ratio
  //     const aspectRatio = img.width / img.height;

  //     // Calculate scaled dimensions respecting aspect ratio
  //     let renderWidth = targetWidth;
  //     let renderHeight = renderWidth / aspectRatio;

  //     if (renderHeight > targetHeight) {
  //       renderHeight = targetHeight;
  //       renderWidth = renderHeight * aspectRatio;
  //     }

  //     // Calculate position to center image
  //     const x = (targetWidth - renderWidth) / 2;
  //     const y = (targetHeight - renderHeight) / 2;

  //     // Clear canvas
  //     ctx.clearRect(0, 0, canvas.width, canvas.height);

  //     // Draw rounded rectangle with shadow
  //     ctx.shadowOffsetX = 0;
  //     ctx.shadowOffsetY = 25;
  //     ctx.shadowBlur = 50;
  //     ctx.shadowColor = "#f0b6fe4e";

  //     ctx.fillStyle = "#ffffff";
  //     ctx.beginPath();
  //     ctx.moveTo(24, 0);
  //     ctx.lineTo(targetWidth - 24, 0);
  //     ctx.quadraticCurveTo(targetWidth, 0, targetWidth, 24);
  //     ctx.lineTo(targetWidth, targetHeight - 24);
  //     ctx.quadraticCurveTo(
  //       targetWidth,
  //       targetHeight,
  //       targetWidth - 24,
  //       targetHeight
  //     );
  //     ctx.lineTo(24, targetHeight);
  //     ctx.quadraticCurveTo(0, targetHeight, 0, targetHeight - 24);
  //     ctx.lineTo(0, 24);
  //     ctx.quadraticCurveTo(0, 0, 24, 0);
  //     ctx.closePath();
  //     ctx.fill();

  //     // Draw image with rounded corners
  //     ctx.save();
  //     ctx.beginPath();
  //     ctx.arc(x + 24, y + 24, 24, Math.PI, 1.5 * Math.PI);
  //     ctx.lineTo(x + renderWidth - 24, y);
  //     ctx.arc(x + renderWidth - 24, y + 24, 24, 1.5 * Math.PI, 0);
  //     ctx.lineTo(x + renderWidth, y + renderHeight - 24);
  //     ctx.arc(
  //       x + renderWidth - 24,
  //       y + renderHeight - 24,
  //       24,
  //       0,
  //       0.5 * Math.PI
  //     );
  //     ctx.lineTo(x + 24, y + renderHeight);
  //     ctx.arc(x + 24, y + renderHeight - 24, 24, 0.5 * Math.PI, Math.PI);
  //     ctx.closePath();
  //     ctx.clip();
  //     ctx.drawImage(img, x, y, renderWidth, renderHeight);
  //     ctx.restore();
  //   };
  // }, []);

  return (
    <main className="pt-40 pb-20 flex flex-col justify-center items-center bg-lightBg text-lightbg-lightHighlight dark:bg-darkBg dark:text-darkText max-sm:pt-32">
      <div className="w-9/12 flex items-center justify-between max-[1440px]:flex-col max-[1440px]:gap-12 max-[680px]:w-11/12 max-sm:gap-6">
        {/* <canvas id="photoCanvas" width="350" height="485"></canvas> */}
        <MediaQuery maxWidth={1439}>
          <div className="relative">
            <img
              src="PictureSquare.jpg"
              alt="Picture"
              draggable="false"
              className="w-[350px] h-[350px] rounded-full bg-lightText shadow-2xl-light dark:shadow-2xl-dark bg-cover bg-center max-md:w-[250px] max-md:h-[250px] max-sm:w-[200px] max-sm:h-[200px]"
            />
            <div
              className="absolute inset-0 bg-transparent"
              contextMenu="return false;"
            ></div>
          </div>
        </MediaQuery>
        <MediaQuery minWidth={1440}>
          <div className="relative">
            <img
              src="Picture.jpg"
              alt="Picture"
              draggable="false"
              className="w-[350px] h-[485px] rounded-3xl bg-lightText shadow-2xl-light dark:shadow-2xl-dark"
            />
            <div
              className="absolute inset-0 bg-transparent"
              contextMenu="return false;"
            ></div>
          </div>
        </MediaQuery>
        <div className="w-[650px] h-[485px] flex flex-col justify-between p-8 rounded-3xl font-textFont bg-lightBg text-darkBg dark:bg-darkBg dark:text-lightBg max-[1440px]:items-center max-md:w-full max-md:h-auto max-md:gap-4">
          <div className="flex gap-3 font-headingFont text-5xl text-lightText dark:text-darkText font-bold max-md:text-4xl max-md:gap-2 max-sm:text-3xl max-xs:flex-col max-xs:items-center">
            <MediaQuery maxWidth={500}>
              <p>Hi there!!</p>
              <div className="flex items-center gap-2">
                <p>This is</p>
                <p className="text-lightHighlight dark:text-darkHighlight">
                  Aishwarya
                </p>
              </div>
            </MediaQuery>
            <MediaQuery minWidth={501}>
              <p>Hi there!! This is</p>
              <p className="text-lightHighlight dark:text-darkHighlight">
                Aishwarya
              </p>
            </MediaQuery>
          </div>
          <hr className="h-1 w-9/12 border-2 mt-2 mb-4 bg-lightText border-lightText rounded-full dark:bg-white dark:border-white max-md:h-0.5 max-md:my-0" />
          <p className="text-xl text-lightText dark:text-darkText leading-relaxed mb-4 max-[1440px]:text-center max-md:text-lg max-sm:text-sm">
            Fueled by a passion for coding and innovation, I'm a skilled
            Full-Stack Developer crafting dynamic and scalable solutions. I love
            tackling complex problems and exploring new technologies. But code
            isn't everything - I believe in collaboration and fostering a shared
            knowledge environment for collective success.
          </p>
          <Link to="/about">
            <motion.div
              variants={buttonHover}
              initial="initial"
              animate="animate"
              className="flex font-semibold items-center justify-center w-[200px] py-2 px-3 mt-2 rounded-2xl bg-lightHighlight text-white border-2 border-lightHighlight hover:bg-transparent hover:border-2 hover:border-lightHighlight hover:text-lightHighlight dark:text-darkBg dark:bg-darkHighlight dark:border-2 dark:border-darkHighlight dark:hover:bg-transparent dark:hover:border-2 dark:hover:border-darkHighlightOpacity dark:hover:text-darkHighlightOpacity text-lg max-sm:text-base max-sm:justify-around max-sm:w-[160px] max-sm:rounded-[10px] max-sm:py-1 max-sm:px-4 max-sm:mt-0"
            >
              <p>My Profile</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M9.29 15.88L13.17 12L9.29 8.12a.996.996 0 1 1 1.41-1.41l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3a.996.996 0 0 1-1.41 0c-.38-.39-.39-1.03 0-1.42"
                />
              </svg>
            </motion.div>
          </Link>
        </div>
      </div>
      <div className="pt-52 w-10/12 flex flex-row-reverse gap-24 items-center justify-between max-[1440px]:flex-col max-[1440px]:gap-12 max-[680px]:w-11/12 max-sm:w-10/12 max-sm:gap-8 max-sm:pt-40">
        {/* <canvas id="photoCanvas" width="350" height="485"></canvas> */}
        <MediaQuery maxWidth={1439}>
          <img
            src="/projects/all-projects2.png"
            alt="Projects"
            className="w-[450px] bg-cover bg-center max-md:w-[350px] max-sm:w-[290px]"
          />
        </MediaQuery>
        <MediaQuery minWidth={1440}>
          <img
            src="/projects/all-projects2.png"
            alt="Projects"
            className="w-[600px]"
          />
        </MediaQuery>
        <div className="w-[650px] h-[485px] flex flex-col items-end justify-between rounded-3xl font-textFont text-darkBg dark:text-lightBg max-[1440px]:gap-8 max-[1440px]:justify-start max-[1440px]:items-center max-md:w-full max-md:h-auto max-md:gap-4">
          <div className="flex gap-3 font-headingFont text-5xl text-lightText dark:text-darkText font-bold max-md:text-4xl max-md:gap-2 max-sm:text-3xl max-xs:flex-col max-xs:items-center">
            <p>My Digital Alchemy</p>
          </div>
          <hr className="h-1 w-8/12 border-2 mt-2 mb-4 bg-lightText border-lightText rounded-full dark:bg-white dark:border-white max-md:h-0.5 max-md:my-0" />
          <p className="text-xl text-lightText dark:text-darkText text-right leading-relaxed mb-4 max-[1440px]:text-center max-md:text-lg max-sm:text-sm">
            With a passion for every aspect of web development, I create
            holistic digital solutions that shine from the user interface to the
            database. My projects highlight my ability to leverage the full
            stack, showcasing skills in building robust, scalable, and
            user-friendly applications. Each project reflects my commitment to
            developing seamless, efficient, and innovative web experiences. Dive
            into my work!!
          </p>
          <Link to="/projects">
            <motion.div
              variants={buttonHover}
              initial="initial"
              animate="animate"
              className="flex font-semibold items-center justify-center w-[250px] py-2 px-3 mt-2 rounded-2xl bg-lightHighlight text-white border-2 border-lightHighlight hover:bg-transparent hover:border-2 hover:border-lightHighlight hover:text-lightHighlight dark:text-darkBg dark:bg-darkHighlight dark:border-2 dark:border-darkHighlight dark:hover:bg-transparent dark:hover:border-2 dark:hover:border-darkHighlightOpacity dark:hover:text-darkHighlightOpacity text-lg max-sm:text-base max-sm:justify-around max-sm:w-[200px] max-sm:rounded-[10px] max-sm:py-1 max-sm:mt-0"
            >
              <p>Explore my work</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M9.29 15.88L13.17 12L9.29 8.12a.996.996 0 1 1 1.41-1.41l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3a.996.996 0 0 1-1.41 0c-.38-.39-.39-1.03 0-1.42"
                />
              </svg>
            </motion.div>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default pageTransition(Home);
