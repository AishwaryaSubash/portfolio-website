// import Globe from "../components/Globe";
// import { Link } from "react-router-dom";
import {
  aboutMeContent,
  // interests,
  // longTermGoals,
  // shortTermGoals,
  // topSkills,
} from "../utils/constants";
import pageTransition from "../utils/pageTransition";
import Experience from "./Experience";
import Skills from "./Skills";
// import { circleStyles } from "../utils/style";

const About = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-lightBg text-lightText dark:bg-darkBg dark:text-darkText">
      <div className="pt-36 flex flex-col items-center justify-center gap-8 max-sm:gap-6">
        <p className="font-headingFont text-5xl font-bold max-md:text-4xl max-sm:text-3xl">
          About Me
        </p>
        <div className="w-11/12 flex items-center justify-center">
          <div className="flex flex-col items-center gap-4 w-11/12 font-textFont text-xl text-lightHighlightBg max-md:text-lg max-md:text-center max-sm:text-sm">
            {aboutMeContent.map((item, index) => (
              <div className="w-11/12" key={index}>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Skills />
      <Experience />

      {/* <div className="mt-24 flex flex-col gap-16 items-center justify-center w-11/12">
        <p className="text-6xl text-center font-semibold font-headingFont my-4 text-lightHighlight dark:text-darkText max-lg:px-4">
          My Goals
        </p>
        <div className="grid grid-cols-3 grid-rows-6 gap-16 font-textFont items-center justify-items-center">
          <div></div>
          // bg-gradient-to-b from-0% from-black to-95% to-[#26272c] w-64 h-40
          //
          <div className="w-56 h-36 row-span-2 p-4 flex flex-col gap-2 items-center justify-center border-2 border-gray-900 rounded-2xl">
            <svg
              className="w-8 h-8 max-sm:w-10 max-sm:h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M459.26 96L328 225.7V96h-34.525L168 223.267V16H16v480h480V96ZM464 464H48V48h88v216h36.778L296 139.018V264h38.764L464 136.3Z"
              />
              <path
                fill="currentColor"
                d="M136 328v8h32v-32h-32zm0 48h32v32h-32zm80-48v8h32v-32h-32zm0 48h32v32h-32zm80-48v8h32v-32h-32zm0 48h32v32h-32zm80-72h32v32h-32zm0 72h32v32h-32z"
              />
            </svg>
            <p className="w-11/12 text-center">
              Stay Updated with Industry Standards
            </p>
          </div>
          <div></div>
          <div className="w-56 h-36 row-span-2 p-4 flex flex-col gap-2 items-center justify-center border-2 border-gray-900 rounded-2xl">
            <svg
              className="w-8 h-8 max-sm:w-10 max-sm:h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <path d="M12 5a3 3 0 1 0-5.997.125a4 4 0 0 0-2.526 5.77a4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
                <path d="M12 5a3 3 0 1 1 5.997.125a4 4 0 0 1 2.526 5.77a4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
                <path d="M15 13a4.5 4.5 0 0 1-3-4a4.5 4.5 0 0 1-3 4m8.599-6.5a3 3 0 0 0 .399-1.375m-11.995 0A3 3 0 0 0 6.401 6.5m-2.924 4.396a4 4 0 0 1 .585-.396m15.876 0a4 4 0 0 1 .585.396M6 18a4 4 0 0 1-1.967-.516m15.934 0A4 4 0 0 1 18 18" />
              </g>
            </svg>
            <p className="w-11/12 text-center">
              Improve Problem-Solving Skills
            </p>
          </div>
          <div className="w-56 h-36 row-span-2 p-4 flex flex-col gap-2 items-center justify-center border-2 border-gray-900 rounded-2xl">
            <svg
              className="w-8 h-8 max-sm:w-10 max-sm:h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M5 13.18v2.81c0 .73.4 1.41 1.04 1.76l5 2.73c.6.33 1.32.33 1.92 0l5-2.73c.64-.35 1.04-1.03 1.04-1.76v-2.81l-6.04 3.3c-.6.33-1.32.33-1.92 0zm6.04-9.66l-8.43 4.6c-.69.38-.69 1.38 0 1.76l8.43 4.6c.6.33 1.32.33 1.92 0L21 10.09V16c0 .55.45 1 1 1s1-.45 1-1V9.59c0-.37-.2-.7-.52-.88l-9.52-5.19a2.04 2.04 0 0 0-1.92 0"
              />
            </svg>
            <p className="w-11/12 text-center">Learn Java and DevOps</p>
          </div>
          <div className="w-11/12 row-span-2 flex flex-col gap-6 items-center justify-center">
            <img src="/dart2.png" alt="" className="w-20 h-20" />
            <p className="text-3xl text-center font-headingFont text-lightHighlight dark:text-darkHighlight">
              Short Term Goals
            </p>
          </div>
          <div className="w-56 h-36 row-span-2 p-4 flex flex-col gap-2 items-center justify-center border-2 border-gray-900 rounded-2xl">
            <svg
              className="w-8 h-8 max-sm:w-10 max-sm:h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M4.825 12.025L8.7 15.9q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275l-4.6-4.6q-.15-.15-.213-.325T2.426 12q0-.2.063-.375T2.7 11.3l4.6-4.6q.3-.3.713-.3t.712.3q.3.3.3.713t-.3.712zm14.35-.05L15.3 8.1q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l4.6 4.6q.15.15.213.325t.062.375q0 .2-.062.375t-.213.325l-4.6 4.6q-.3.3-.7.288t-.7-.313q-.3-.3-.3-.712t.3-.713z"
              />
            </svg>
            <p className="w-11/12 text-center">
              Improve Code Efficiency and Maintainability
            </p>
          </div>
          <div className="w-56 h-36 row-span-2 p-4 flex flex-col gap-2 items-center justify-center border-2 border-gray-900 rounded-2xl">
            <svg
              className="w-8 h-8 max-sm:w-10 max-sm:h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
            >
              <path
                fill="currentColor"
                d="M50 0C22.427 0 0 22.427 0 50s22.427 50 50 50s50-22.427 50-50S77.573 0 50 0m2.506 7.078c12.818.733 24.105 7.053 31.486 16.568c-1.948-.05-3.887-.062-5.818-.033a138.28 138.28 0 0 0-10.04.532a7.5 7.5 0 0 0-6.747-4.23a7.5 7.5 0 0 0-1.043.073a124.289 124.289 0 0 0-7.838-12.91m-6.078.08c3.637 4.969 6.79 10.013 9.488 15.127a7.5 7.5 0 0 0-1.92 3.858a140.675 140.675 0 0 0-13.83 3.43a7.5 7.5 0 0 0-2.082-1.917c1.887-6.735 4.527-13.559 7.902-20.465c.147-.013.295-.02.442-.033m-6.44 1.022c-2.82 6.165-5.07 12.307-6.744 18.41a7.5 7.5 0 0 0-5.13 2.978a170.51 170.51 0 0 0-13.698-3.748A42.954 42.954 0 0 1 39.988 8.18m41.123 20.418c2.092.013 4.194.08 6.307.19a42.719 42.719 0 0 1 5.037 14.366c-6.05.984-11.94 2.347-17.674 4.065a7.5 7.5 0 0 0-5.043-2.746a107.837 107.837 0 0 0-3.517-11.327a7.5 7.5 0 0 0 2.472-4.048c4.099-.356 8.236-.527 12.418-.5M11.732 30.36c5.102 1.123 10.08 2.436 14.913 3.979a7.5 7.5 0 0 0 .001.03c-6.508 2.673-12.907 5.825-19.199 9.437a42.72 42.72 0 0 1 4.285-13.446m43.094.684a7.5 7.5 0 0 0 6.56 3.87a7.5 7.5 0 0 0 .202-.005a101.851 101.851 0 0 1 3.336 10.694a7.5 7.5 0 0 0-1.057.81A142.695 142.695 0 0 0 41.62 34.57a7.5 7.5 0 0 0 .014-.256a135.084 135.084 0 0 1 13.193-3.27m-26.32 7.941a7.5 7.5 0 0 0 1.93 1.57c-1.232 9.641-.959 19.147.921 28.446a167.383 167.383 0 0 0-12.79 10.355C11.392 71.677 7 61.366 7 50c0-.047.004-.092.004-.139c7.047-4.234 14.21-7.87 21.502-10.875m11.121.159a137.068 137.068 0 0 1 21.902 11.697a7.5 7.5 0 0 0-.082 1.09a7.5 7.5 0 0 0 0 .047c-8.96 3.725-17.514 8.38-25.672 13.914c-1.41-7.998-1.56-16.15-.507-24.444a7.5 7.5 0 0 0 4.359-2.304m53.326 8.994c.026.617.047 1.237.047 1.861a42.929 42.929 0 0 1-3.783 17.666a140.036 140.036 0 0 0-13.469-12.572a7.5 7.5 0 0 0 .7-3.147a134.787 134.787 0 0 1 16.505-3.808m-29.818 8.529a7.5 7.5 0 0 0 4.25 2.598c1.094 9.909.76 20.066-.932 30.48A42.976 42.976 0 0 1 50 93c-1.477 0-2.937-.074-4.375-.219c-4.012-7.064-6.909-14.27-8.729-21.607c8.328-5.823 17.063-10.675 26.239-14.506m9.181 2.06a135.865 135.865 0 0 1 14.438 13.637A43.083 43.083 0 0 1 71.906 87.02c1.285-9.602 1.44-19.043.41-28.291m-39.71 15.555c1.59 5.893 3.834 11.697 6.753 17.393a42.817 42.817 0 0 1-17.162-8.858c3.397-3.02 6.865-5.87 10.408-8.535"
                color="currentColor"
              />
            </svg>
            <p className="w-11/12 text-center">
              Connect with Like-minded People and Grow My Network
            </p>
          </div>
          <div className="w-56 h-36 row-span-2 p-4 flex flex-col gap-2 items-center justify-center border-2 border-gray-900 rounded-2xl">
            <svg
              className="w-8 h-8 max-sm:w-10 max-sm:h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 14 14"
            >
              <g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m13.5 8l-4.12 5.5l-2.75-2.06" />
                <circle cx="5" cy="2.75" r="2.25" />
                <path d="M3 12.5H.5V11a4.5 4.5 0 0 1 7.68-3.18" />
              </g>
            </svg>
            <p className="w-11/12 text-center">
              Work on Enhancing Interpersonal Skills
            </p>
          </div>
          <div></div>
          <div></div>
        </div>

        <div className="mt-24 grid grid-cols-3 grid-rows-6 gap-16 font-textFont items-center justify-items-center">
          <div></div>
          <div className="w-56 h-36 row-span-2 p-4 flex flex-col gap-2 items-center justify-center border-2 border-gray-900 rounded-2xl">
            <svg
              className="w-8 h-8 max-sm:w-10 max-sm:h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 11q-3.75 0-6.375-1.175T3 7q0-1.65 2.625-2.825Q8.25 3 12 3t6.375 1.175Q21 5.35 21 7q0 1.65-2.625 2.825Q15.75 11 12 11Zm0 5q-3.75 0-6.375-1.175T3 12V9.5q0 1.1 1.025 1.863q1.025.762 2.45 1.237q1.425.475 2.963.687q1.537.213 2.562.213t2.562-.213q1.538-.212 2.963-.687q1.425-.475 2.45-1.237Q21 10.6 21 9.5V12q0 1.65-2.625 2.825Q15.75 16 12 16Zm0 5q-3.75 0-6.375-1.175T3 17v-2.5q0 1.1 1.025 1.863q1.025.762 2.45 1.237q1.425.475 2.963.688q1.537.212 2.562.212t2.562-.212q1.538-.213 2.963-.688t2.45-1.237Q21 15.6 21 14.5V17q0 1.65-2.625 2.825Q15.75 21 12 21Z"
              />
            </svg>
            <p className="w-11/12 text-center">Improve Database Skills</p>
          </div>
          <div></div>
          <div className="w-56 h-36 row-span-2 p-4 flex flex-col gap-2 items-center justify-center border-2 border-gray-900 rounded-2xl">
            <svg
              className="w-8 h-8 max-sm:w-10 max-sm:h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 14 14"
            >
              <g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M11.5 2H13a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5H1a.5.5 0 0 1-.5-.5v-8A.5.5 0 0 1 1 2h1.5M6 11l-1 2.5M8 11l1 2.5m-5 0h6" />
                <path d="M6.45 2.36a.59.59 0 0 1 1.1 0L8.19 4H9.9a.61.61 0 0 1 .56.39a.59.59 0 0 1-.16.61L8.79 6.34l.64 1.28a.58.58 0 0 1-.12.69a.59.59 0 0 1-.7.1L7 7.53l-1.61.88a.59.59 0 0 1-.7-.1a.58.58 0 0 1-.12-.69l.64-1.28L3.7 5a.59.59 0 0 1-.16-.65A.61.61 0 0 1 4.1 4h1.71Z" />
              </g>
            </svg>
            <p className="w-11/12 text-center">
              Enhance User Experience (UX) Knowledge
            </p>
          </div>
          <div className="w-56 h-36 row-span-2 p-4 flex flex-col gap-2 items-center justify-center border-2 border-gray-900 rounded-2xl">
            <svg
              className="w-8 h-8 max-sm:w-10 max-sm:h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5.636 19.364a9 9 0 1 1 12.728 0M16 9l-4 4"
              />
            </svg>
            <p className="w-11/12 text-center">
              Practice Test-Driven Development (TDD)
            </p>
          </div>
          <div className="w-11/12 row-span-2 flex flex-col gap-6 items-center justify-center">
            <img src="/dart2.png" alt="" className="w-20 h-20" />
            <p className="text-3xl text-center font-headingFont text-lightHighlight dark:text-darkHighlight">
              Long Term Goals
            </p>
          </div>
          <div className="w-56 h-36 row-span-2 p-4 flex flex-col gap-2 items-center justify-center border-2 border-gray-900 rounded-2xl">
            <svg
              className="w-8 h-8 max-sm:w-10 max-sm:h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
            >
              <path
                fill="currentColor"
                d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16h-8.5a.75.75 0 0 1 0-1.5h8.5a.25.25 0 0 0 .25-.25V6.5h-13v1.75a.75.75 0 0 1-1.5 0ZM6.5 5h8V1.75a.25.25 0 0 0-.25-.25H6.5Zm-5 0H5V1.5H1.75a.25.25 0 0 0-.25.25Z"
              />
              <path
                fill="currentColor"
                d="M1.5 13.737a2.25 2.25 0 0 1 2.262-2.25L4 11.49v1.938c0 .218.26.331.42.183l2.883-2.677a.25.25 0 0 0 0-.366L4.42 7.89a.25.25 0 0 0-.42.183V9.99l-.23-.001A3.75 3.75 0 0 0 0 13.738v1.012a.75.75 0 0 0 1.5 0z"
              />
            </svg>
            <p className="w-11/12 text-center">
              Contribute to Open-Source Projects
            </p>
          </div>
          <div className="w-56 h-36 row-span-2 p-4 flex flex-col gap-2 items-center justify-center border-2 border-gray-900 rounded-2xl">
            <svg
              className="w-8 h-8 max-sm:w-10 max-sm:h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g fill="none">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.636 5.636a1 1 0 0 0-1.414-1.414c-4.296 4.296-4.296 11.26 0 15.556a1 1 0 0 0 1.414-1.414a9 9 0 0 1 0-12.728zm14.142-1.414a1 1 0 1 0-1.414 1.414a9 9 0 0 1 0 12.728a1 1 0 1 0 1.414 1.414c4.296-4.296 4.296-11.26 0-15.556zM8.464 8.464A1 1 0 0 0 7.05 7.05a7 7 0 0 0 0 9.9a1 1 0 1 0 1.414-1.414a5 5 0 0 1 0-7.072zM16.95 7.05a1 1 0 1 0-1.414 1.414a5 5 0 0 1 0 7.072a1 1 0 0 0 1.414 1.414a7 7 0 0 0 0-9.9zM9 12a3 3 0 1 1 6 0a3 3 0 0 1-6 0z"
                  fill="currentColor"
                />
              </g>
            </svg>
            <p className="w-11/12 text-center">
              Build a Professional Online Presence
            </p>
          </div>
          <div className="w-56 h-36 row-span-2 p-4 flex flex-col gap-2 items-center justify-center border-2 border-gray-900 rounded-2xl">
            <svg
              className="w-8 h-8 max-sm:w-10 max-sm:h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <path d="M10.139 3.463c.473-1.95 3.249-1.95 3.722 0a1.916 1.916 0 0 0 2.859 1.185c1.714-1.045 3.678.918 2.633 2.633a1.916 1.916 0 0 0 1.184 2.858c1.95.473 1.95 3.249 0 3.722a1.916 1.916 0 0 0-1.185 2.859c1.045 1.714-.918 3.678-2.633 2.633a1.916 1.916 0 0 0-2.858 1.184c-.473 1.95-3.249 1.95-3.722 0a1.916 1.916 0 0 0-2.859-1.185c-1.714 1.045-3.678-.918-2.633-2.633a1.916 1.916 0 0 0-1.184-2.858c-1.95-.473-1.95-3.249 0-3.722A1.916 1.916 0 0 0 4.648 7.28c-1.045-1.714.918-3.678 2.633-2.633a1.914 1.914 0 0 0 2.858-1.184" />
                <path d="M8 12h6a2 2 0 1 0 0-4H8v8z" />
                <path d="M19 16h-2a2 2 0 0 1-2-2a2 2 0 0 0-2-2h-1M9 8H5m0 8h4" />
              </g>
            </svg>
            <p className="w-11/12 text-center">Learn Rust</p>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="my-12 flex flex-col w-11/12 max-sm:mt-8">
        <p className="text-3xl text-center text-lightHighlight dark:text-darkHighlight font-headingFont my-4 max-lg:px-4">
          My Interests
        </p>
        <div className="grid grid-cols-4 grid-rows-2">
          {interests.map((goal, index) => (
            <>
              {index >= 2 && <div></div>}
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-2"
              >
                <div
                  dangerouslySetInnerHTML={{ __html: goal.image }}
                  className="w-12 h-12 p-2 rounded-full text-lightAltHighlight dark:text-darkHighlight max-sm:w-12 max-sm:h-12 max-md:top-[5px] max-md:-left-[24px] max-sm:top-[10px]"
                />
                <p className="font-textFont">{goal.content}</p>
              </div>
              {index < 2 && <div></div>}
            </>
          ))}
        </div>
        //{" "}
        <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
          {interests.map((goal, index) => (
            <div key={index} className="flex items-center justify-center gap-4">
              <div
                className={`relative w-60 p-6 font-textFont text-right rounded-xl ${
                  index % 2 === 1
                    ? "bg-lightHighlightBg text-lightAltHighlight dark:bg-darkHighlightBg dark:text-lightBg"
                    : "bg-lightAltHighlight text-lightBg dark:bg-darkAltHighlight dark:text-darkBg"
                }`}
              >
                <p>{goal.content}</p>
                <div
                  dangerouslySetInnerHTML={{ __html: goal.image }}
                  className={`absolute top-[4px] -left-[30px] w-16 h-16 p-2 rounded-full max-sm:w-12 max-sm:h-12 max-md:top-[5px] max-md:-left-[24px] max-sm:top-[10px] ${
                    index % 2 === 0
                      ? "bg-lightHighlightBg text-lightAltHighlight dark:bg-darkHighlightBg dark:text-lightBg"
                      : "bg-lightAltHighlight text-lightBg dark:bg-darkAltHighlight dark:text-darkBg"
                  }`}
                />
              </div>
            </div>
          ))}
        </div>{" "}
        //
      </div> */}
    </div>
  );
};

export default pageTransition(About);
