import { contactDetails } from "../utils/constants";

const Footer = () => {
  return (
    <div className="py-4 flex flex-col gap-2 justify-center items-center bg-lightBg text-lightText dark:bg-darkBg dark:text-darkText">
      <p className="font-textFont"> Aishwarya Subash &#169; 2024</p>
      <div className="flex items-center justify-center gap-6 text-lightHighlight dark:text-darkHighlight max-lg:justify-evenly">
        {contactDetails.map((item, index) => {
          return (
            <div key={index}>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <div
                  dangerouslySetInnerHTML={{ __html: item.icon }}
                  className="w-6 h-6 cursor-pointer dark:text-darkHighlight dark:hover:text-darkHighlightOpacity"
                  title={item.media}
                />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
