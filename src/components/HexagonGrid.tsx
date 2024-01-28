import { interests, hexPositions } from "../utils/constants";

const HexagonGrid = () => {
  return (
    <div className="flex">
      {interests.map((item, index) => {
        return (
          <div
            className={`absolute top-[${hexPositions[index].top}rem] left-[${hexPositions[index].left}rem]`}
            key={index}
          >
            <div className="relative flex items-center justify-center">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="192"
                  height="192"
                  viewBox="0 0 24 24"
                >
                  <g fill="none">
                    <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                    <path
                      fill="currentColor"
                      d="M10.75 2.567a2.5 2.5 0 0 1 2.5 0L19.544 6.2a2.5 2.5 0 0 1 1.25 2.165v7.268a2.5 2.5 0 0 1-1.25 2.165l-6.294 3.634a2.5 2.5 0 0 1-2.5 0l-6.294-3.634a2.5 2.5 0 0 1-1.25-2.165V8.366A2.5 2.5 0 0 1 4.456 6.2z"
                    />
                  </g>
                </svg>
              </div>
              <p className="absolute p-8 text-center font-textFont text-lightBg dark:text-darkBg">
                {item}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HexagonGrid;

// <div className="relative flex items-center justify-center w-full">
//   <div className="absolute top-0 left-12">
//     <div className="relative flex items-center justify-center">
//       <div>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="192"
//           height="192"
//           viewBox="0 0 24 24"
//         >
//           <g fill="none">
//             <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
//             <path
//               fill="currentColor"
//               d="M10.75 2.567a2.5 2.5 0 0 1 2.5 0L19.544 6.2a2.5 2.5 0 0 1 1.25 2.165v7.268a2.5 2.5 0 0 1-1.25 2.165l-6.294 3.634a2.5 2.5 0 0 1-2.5 0l-6.294-3.634a2.5 2.5 0 0 1-1.25-2.165V8.366A2.5 2.5 0 0 1 4.456 6.2z"
//             />
//           </g>
//         </svg>
//       </div>
//       <p className="absolute p-8 text-center font-textFont text-lightBg dark:text-darkBg">
//         Professional Singer
//       </p>
//     </div>
//   </div>
//   <div className="absolute top-0 left-[13rem]">
//     <div className="relative flex items-center justify-center">
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="192"
//         height="192"
//         viewBox="0 0 256 256"
//       >
//         <path
//           fill="currentColor"
//           d="m221.76 69.66l-88-48.18a12 12 0 0 0-11.52 0l-88 48.18A12 12 0 0 0 28 80.18v95.64a12 12 0 0 0 6.24 10.52l88 48.18a11.95 11.95 0 0 0 11.52 0l88-48.18a12 12 0 0 0 6.24-10.52V80.18a12 12 0 0 0-6.24-10.52M220 175.82a4 4 0 0 1-2.08 3.5l-88 48.18a4 4 0 0 1-3.84 0l-88-48.18a4 4 0 0 1-2.08-3.5V80.18a4 4 0 0 1 2.08-3.5l88-48.18a3.94 3.94 0 0 1 3.84 0l88 48.18a4 4 0 0 1 2.08 3.5Z"
//         />
//       </svg>
//       <p className="absolute font-textFont text-lightText dark:text-darkText">
//         Interests
//       </p>
//     </div>
//   </div>
//   <div className="absolute top-0 left-[23rem]">
//     <div className="relative flex items-center justify-center">
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="192"
//         height="192"
//         viewBox="0 0 24 24"
//       >
//         <g fill="none">
//           <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
//           <path
//             fill="currentColor"
//             d="M10.75 2.567a2.5 2.5 0 0 1 2.5 0L19.544 6.2a2.5 2.5 0 0 1 1.25 2.165v7.268a2.5 2.5 0 0 1-1.25 2.165l-6.294 3.634a2.5 2.5 0 0 1-2.5 0l-6.294-3.634a2.5 2.5 0 0 1-1.25-2.165V8.366A2.5 2.5 0 0 1 4.456 6.2z"
//           />
//         </g>
//       </svg>
//       <p className="absolute p-8 text-center font-textFont text-lightBg dark:text-darkBg">
//         Badminton Player
//       </p>
//     </div>
//   </div>
//   <div className="absolute top-32 left-32">
//     <div className="relative flex items-center justify-center">
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="192"
//         height="192"
//         viewBox="0 0 24 24"
//       >
//         <g fill="none">
//           <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
//           <path
//             fill="currentColor"
//             d="M10.75 2.567a2.5 2.5 0 0 1 2.5 0L19.544 6.2a2.5 2.5 0 0 1 1.25 2.165v7.268a2.5 2.5 0 0 1-1.25 2.165l-6.294 3.634a2.5 2.5 0 0 1-2.5 0l-6.294-3.634a2.5 2.5 0 0 1-1.25-2.165V8.366A2.5 2.5 0 0 1 4.456 6.2z"
//           />
//         </g>
//       </svg>
//       <p className="absolute p-8 text-center font-textFont text-lightBg dark:text-darkBg">
//         Aspiring Artist
//       </p>
//     </div>
//   </div>
//   <div className="absolute top-32 left-[18rem]">
//     <div className="relative flex items-center justify-center">
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="192"
//         height="192"
//         viewBox="0 0 24 24"
//       >
//         <g fill="none">
//           <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
//           <path
//             fill="currentColor"
//             d="M10.75 2.567a2.5 2.5 0 0 1 2.5 0L19.544 6.2a2.5 2.5 0 0 1 1.25 2.165v7.268a2.5 2.5 0 0 1-1.25 2.165l-6.294 3.634a2.5 2.5 0 0 1-2.5 0l-6.294-3.634a2.5 2.5 0 0 1-1.25-2.165V8.366A2.5 2.5 0 0 1 4.456 6.2z"
//           />
//         </g>
//       </svg>
//       <p className="absolute p-8 text-center font-textFont text-lightBg dark:text-darkBg">
//         Chess Player
//       </p>
//     </div>
//   </div>
// </div>
