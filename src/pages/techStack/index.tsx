import Image from "next/image";
import imageHTML from "../../assets/images/techStack/html.svg";
import imageCSS from "../../assets/images/techStack/css.svg";
import imageJS from "../../assets/images/techStack/js.svg";
import imageTS from "../../assets/images/techStack/ts.svg";
import imageReact from "../../assets/images/techStack/react.svg";
import imageNext from "../../assets/images/techStack/nextjs.svg";
import imageExpress from "../../assets/images/techStack/express.svg";
import imageNest from "../../assets/images/techStack/nest.svg";
import imagePostgre from "../../assets/images/techStack/postgresql.svg";
import imageTailwind from "../../assets/images/techStack/tailwind.svg";
import imageBootstrap from "../../assets/images/techStack/bootstrap.svg";
import imageRedux from "../../assets/images/techStack/redux.svg";
import imageGit from "../../assets/images/techStack/git.svg";
import imagePostman from "../../assets/images/techStack/postman.svg";
import imageNode from "../../assets/images/techStack/nodejs.svg";
import imageJest from "../../assets/images/techStack/jest.svg";
import { useContext } from "react";
import { DarkModeContext } from "@/context/DarkMode";

const TechStack = () => {
  const darkModeContext = useContext(DarkModeContext);

  if (!darkModeContext) {
    return null;
  }

  const { isDarkMode } = darkModeContext;

  return (
    <div className={`py-2 ${isDarkMode && "bg-gray-800"}`}>
      <div className={`flex justify-center items-center text-center lg:my-20 ${isDarkMode ? "text-slate-50" : "text-slate-500"}`}>
        <div>
          <h1 className="text-2xl font-semibold lg:text-3xl">My Tech Stack</h1>
          <p className="text-sm lg:text-base">Technologies I`ve been working with recently</p>
          <div className="max-w-full max-h-full mx-auto grid grid-cols-3 gap-8  pt-5 md:grid-cols-4 lg:grid-cols-8 lg:gap-12 ">
            <div className="w-16 h-16 lg:w-20 lg:h-20 ">
              <Image src={imageHTML} alt="" />
              <p>HTML5</p>
            </div>
            <div className="w-16 h-16 lg:w-20 lg:h-20 ">
              <Image src={imageCSS} alt="" />
              <p>CSS3</p>
            </div>
            <div className="w-16 h-16 lg:w-20 lg:h-20 ">
              <Image src={imageJS} alt="" />
              <p>JavaScript</p>
            </div>
            <div className="w-16 h-16 lg:w-20 lg:h-20 ">
              <Image src={imageTS} alt="" />
              <p>TypeScript</p>
            </div>
            <div className="w-16 h-16 lg:w-20 lg:h-18 ">
              <Image src={imageReact} alt="" />
              <p>React</p>
            </div>
            <div className="w-16 h-16 lg:w-20 lg:h-20 ">
              <Image src={imageNext} alt="" />
              <p>Next.js</p>
            </div>
            <div className="w-16 h-16 lg:w-20 lg:h-20 ">
              <Image src={imageExpress} alt="" />
              <p>Express.js</p>
            </div>
            <div className="w-16 h-16 lg:w-20 lg:h-20 ">
              <Image src={imageNest} alt="" />
              <p>Nest.js</p>
            </div>
            <div className="w-16 h-16 lg:w-20 lg:h-20 ">
              <Image src={imagePostgre} alt="" />
              <p>PostgreSQL</p>
            </div>
            <div className="w-16 h-16 lg:w-20 lg:h-20 ">
              <Image src={imageTailwind} alt="" />
              <p>Tailwind</p>
            </div>
            <div className="w-16 h-16 lg:w-20 lg:h-20 ">
              <Image src={imageBootstrap} alt="" />
              <p>Bootstrap</p>
            </div>
            <div className="w-16 h-16 lg:w-20 lg:h-20 ">
              <Image src={imageRedux} alt="" />
              <p>Redux</p>
            </div>
            <div className="w-16 h-16 lg:w-20 lg:h-20 ">
              <Image src={imageGit} alt="" />
              <p>Git</p>
            </div>
            <div className="w-16 h-16 lg:w-20 lg:h-20 ">
              <Image src={imagePostman} alt="" />
              <p>Postman</p>
            </div>
            <div className="w-16 h-16 lg:w-20 lg:h-20 ">
              <Image src={imageNode} alt="" />
              <p>Node.js</p>
            </div>
            <div className="w-16 h-16 lg:w-20 lg:h-20 ">
              <Image src={imageJest} alt="" />
              <p>Jest</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
