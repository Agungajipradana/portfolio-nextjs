import Image from "next/image";
import imageProject1 from "../../assets/images/projects/project1.jpg";
import imageProject2 from "../../assets/images/projects/project2.jpg";
import imageProject3 from "../../assets/images/projects/project3.jpg";
import iconLink from "../../assets/images/projects/icon-link.svg";
import iconLinkDarkMode from "../../assets/images/projects/icon-link2.svg";
import iconGithub from "../../assets/images/projects/icon-github.svg";
import iconGithubDarkMode from "../../assets/images/projects/icon-github2.svg";
import Link from "next/link";
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
import imageRedux from "../../assets/images/techStack/redux.png";
import imageVSCode from "../../assets/images/techStack/vscode.svg";
import imageGithub from "../../assets/images/techStack/GitHub-dark.svg";
import imageGit from "../../assets/images/techStack/git.svg";
import imagePostman from "../../assets/images/techStack/postman.svg";
import imageNode from "../../assets/images/techStack/nodejs.svg";
import imageJest from "../../assets/images/techStack/jest.svg";
import { useContext } from "react";
import { DarkModeContext } from "@/context/DarkMode";

const Projects = () => {
  const darkModeContext = useContext(DarkModeContext);

  if (!darkModeContext) {
    return null;
  }

  const { isDarkMode } = darkModeContext;

  return (
    <div className={`py-2 ${isDarkMode && "bg-gray-800"}`}>
      <div className={`flex justify-center items-center text-center my-24 ${isDarkMode ? "text-slate-50" : "text-slate-500"}`}>
        <div>
          <h1 className="text-3xl">Projects</h1>
          <p className="text-sm">Things I’ve built so far</p>
          <div className={`max-w-sm max-h-sm mx-20 gap-2 pt-5 pb-4 border rounded-lg mt-2 lg:max-w-full lg:max-h-full  ${isDarkMode ? "bg-gray-900" : "bg-slate-200"}`}>
            <div className="carousel carousel-center space-x-4 mx-4 max-w-sm max-h-sm lg:max-w-full lg:max-h-full">
              <div className="carousel-item">
                <div className={`max-w-xs  bg-no-repeat bg-center rounded-lg  border-gray-800 lg:max-w-md ${isDarkMode ? "bg-slate-200 shadow-slate-200" : "bg-gray-800 shadow-gray-800"}`}>
                  <Image className="rounded-t-lg w-[450px] h-[300px]" src={imageProject1} alt="" />
                  <div className={`p-5 ${isDarkMode ? "text-gray-800" : "text-slate-200"}`}>
                    <h5 className="mb-2 text-xl font-bold tracking-tight lg:text-2xl">Hoo Bank</h5>
                    <p className="mb-3 font-normal text-sm   text-left lg:text-md">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <div className="flex flex-wrap gap-2">
                      <p className=" font-semibold text-sm text-left lg:text-md">Tech Used:</p>
                      <div className="flex justify-between">
                        <Image src={imageJS} alt="" className="w-8 h-8 py-2 px-2 mr-2 rounded-full flex justify-center items-center bg-white lg:py-2 lg:px-2 lg:w-10 lg:h-10" />
                        <Image src={imageReact} alt="" className="w-8 h-8  py-2 px-2 mr-2 rounded-full flex justify-center items-center bg-white  lg:py-2 lg:px-2 lg:w-10 lg:h-10" />
                        <Image src={imageTailwind} alt="" className="w-8 h-8 py-2 px-2 mr-2 rounded-full flex justify-center items-center bg-white lg:py-2 lg:px-2 lg:w-10 lg:h-10" />
                      </div>
                    </div>
                    <div className="pt-4 grid grid-cols-2 gap-x-3">
                      <div className="flex justify-center items-center box-border border-2-none gap-x-2 ">
                        <Image src={isDarkMode ? iconLinkDarkMode : iconLink} alt="" className="w-5 h-5" />
                        <Link href="http://bank-modern-azure.vercel.app/" target="_blank">
                          Live Preview
                        </Link>
                      </div>
                      <div className="flex justify-center items-center box-border border-2-none gap-x-2">
                        <Image src={isDarkMode ? iconGithubDarkMode : iconGithub} alt="" className="w-5 h-5" />
                        <Link href="https://github.com/Agungajipradana/bank-modern.git" target="_blank">
                          View Code
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className={`max-w-xs  bg-no-repeat bg-center rounded-lg  border-gray-800 lg:max-w-md ${isDarkMode ? "bg-slate-200 shadow-slate-200" : "bg-gray-800 shadow-gray-800"}`}>
                  <Image className="rounded-t-lg w-[450px] h-[300px]" src={imageProject2} alt="" />
                  <div className={`p-5 ${isDarkMode ? "text-gray-800" : "text-slate-200"}`}>
                    <h5 className="mb-2 text-xl font-bold tracking-tight lg:text-2xl">Car Hub</h5>
                    <p className="mb-3 font-normal text-sm   text-left lg:text-md">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <div className="flex flex-wrap gap-2">
                      <p className=" font-semibold text-sm text-left lg:text-md">Tech Used:</p>
                      <div className="flex justify-between">
                        <Image src={imageTS} alt="" className="w-8 h-8 py-2 px-2 mr-2 rounded-full flex justify-center items-center bg-white lg:py-2 lg:px-2 lg:w-10 lg:h-10" />
                        <Image src={imageNext} alt="" className="w-8 h-8  py-2 px-2 mr-2 rounded-full flex justify-center items-center bg-white  lg:py-2 lg:px-2 lg:w-10 lg:h-10" />
                        <Image src={imageTailwind} alt="" className="w-8 h-8 py-2 px-2 mr-2 rounded-full flex justify-center items-center bg-white lg:py-2 lg:px-2 lg:w-10 lg:h-10" />
                      </div>
                    </div>
                    <div className="pt-4 grid grid-cols-2 gap-x-3">
                      <div className="flex justify-center items-center box-border border-2-none gap-x-2 ">
                        <Image src={isDarkMode ? iconLinkDarkMode : iconLink} alt="" className="w-5 h-5" />
                        <Link href="https://cars-showroom-auu4kqgs6-agungajipradana.vercel.app/" target="_blank">
                          Live Preview
                        </Link>
                      </div>
                      <div className="flex justify-center items-center box-border border-2-none gap-x-2">
                        <Image src={isDarkMode ? iconGithubDarkMode : iconGithub} alt="" className="w-5 h-5" />
                        <Link href="https://github.com/Agungajipradana/cars_showroom.git" target="_blank">
                          View Code
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className={`max-w-xs bg-no-repeat bg-center rounded-lg  border-gray-800 lg:max-w-md ${isDarkMode ? "bg-slate-200 shadow-slate-200" : "bg-gray-800 shadow-gray-800"}`}>
                  <Image className="rounded-t-lg w-[450px] h-[300px]" src={imageProject3} alt="" />
                  <div className={`p-5 ${isDarkMode ? "text-gray-800" : "text-slate-200"}`}>
                    <h5 className="mb-2 text-xl font-bold tracking-tight lg:text-2xl">My Portfolio</h5>
                    <p className="mb-3 font-normal text-sm   text-left lg:text-md">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <div className="flex flex-wrap gap-2">
                      <p className=" font-semibold text-sm text-left lg:text-md">Tech Used:</p>
                      <div className="flex justify-between">
                        <Image src={imageJS} alt="" className="w-8 h-8  py-2 px-2 mr-2 rounded-full flex justify-center items-center bg-white  lg:py-2 lg:px-2 lg:w-10 lg:h-10" />
                        <Image src={imageHTML} alt="" className="w-8 h-8 py-2 px-2 mr-2 rounded-full flex justify-center items-center bg-white lg:py-2 lg:px-2 lg:w-10 lg:h-10" />
                        <Image src={imageTailwind} alt="" className="w-8 h-8 py-2 px-2 mr-2 rounded-full flex justify-center items-center bg-white lg:py-2 lg:px-2 lg:w-10 lg:h-10" />
                      </div>
                    </div>
                    <div className="pt-4 grid grid-cols-2 gap-x-3">
                      <div className="flex justify-center items-center box-border border-2-none gap-x-2 ">
                        <Image src={isDarkMode ? iconLinkDarkMode : iconLink} alt="" className="w-5 h-5" />
                        <Link href="https://agungaji.agung-ajiaji.repl.co/" target="_blank">
                          Live Preview
                        </Link>
                      </div>
                      <div className="flex justify-center items-center box-border border-2-none gap-x-2">
                        <Image src={isDarkMode ? iconGithubDarkMode : iconGithub} alt="" className="w-5 h-5" />
                        <Link href="https://github.com/Agungajipradana/My-Portfolio.git" target="_blank">
                          View Code
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

{
  /* <div className="carousel-item">
                <div className="max-w-xs shadow-gray-800 bg-gray-800 bg-no-repeat bg-center rounded-lg  border-gray-800 lg:max-w-md">
                  <Image className="rounded-t-lg" src={imageProject1} alt="" />
                  <div className="p-5">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-slate-200 lg:text-2xl">Hoo Bank</h5>
                    <p className="mb-3 font-normal text-sm text-slate-200 dark:text-gray-400 text-left lg:text-md">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <div className="flex flex-wrap gap-2">
                      <p className=" font-semibold text-sm text-slate-200 dark:text-gray-400 text-left lg:text-md">Tech Used:</p>
                      <div className="flex justify-between">
                        <Image src={imageJS} alt="" className="w-8 h-8 py-2 px-2 mr-2 rounded-full flex justify-center items-center bg-white lg:py-2 lg:px-2 lg:w-10 lg:h-10" />
                        <Image src={imageNext} alt="" className="w-8 h-8  py-2 px-2 mr-2 rounded-full flex justify-center items-center bg-white  lg:py-2 lg:px-2 lg:w-10 lg:h-10" />
                        <Image src={imageTailwind} alt="" className="w-8 h-8 py-2 px-2 mr-2 rounded-full flex justify-center items-center bg-white lg:py-2 lg:px-2 lg:w-10 lg:h-10" />
                      </div>
                    </div>
                    <div className="pt-4 grid grid-cols-2 gap-x-3 text-slate-200">
                      <div className="flex justify-center items-center box-border border-2-none gap-x-2 ">
                        <Image src={iconAkar} alt="" className="w-5 h-5" />
                        <Link href="">Live Preview</Link>
                      </div>
                      <div className="flex justify-center items-center box-border border-2-none gap-x-2">
                        <Image src={iconGithub} alt="" className="w-5 h-5" />
                        <Link href="">View Code</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */
}

{
  /* <div className="max-w-full max-h-full mx-6 grid grid-cols-1 gap-3 box-border border-4 pt-5 lg:gap-10 lg:grid-cols-2">
          <div className="max-w-sm shadow-slate-500 bg-slate-200 bg-no-repeat bg-center rounded-lg ">
            <Image className="rounded-t-lg" src={imageProject1} alt="" />
            <div className="p-5">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-slate-500 lg:text-2xl">Hoo Bank</h5>
              <p className="mb-3 font-normal text-sm text-slate-500 dark:text-gray-400 text-left lg:text-md">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              <div className="flex flex-wrap gap-2">
                <p className=" font-semibold text-sm text-slate-500 dark:text-gray-400 text-left lg:text-md">Tech Stack:</p>
                <div className="flex justify-between">
                  <Image src={imageJS} alt="" className="w-8 h-8 py-2 px-2 mr-2 rounded-full flex justify-center items-center bg-white lg:py-2 lg:px-2 lg:w-10 lg:h-10" />
                  <Image src={imageNext} alt="" className="w-8 h-8  py-2 px-2 mr-2 rounded-full flex justify-center items-center bg-white  lg:py-2 lg:px-2 lg:w-10 lg:h-10" />
                  <Image src={imageTailwind} alt="" className="w-8 h-8 py-2 px-2 mr-2 rounded-full flex justify-center items-center bg-white lg:py-2 lg:px-2 lg:w-10 lg:h-10" />
                </div>
              </div>
              <div className="pt-4 lg:grid lg:grid-cols-2 lg:gap-x-3 ">
                <div className="flex justify-center items-center box-border border-2-none gap-x-2 ">
                  <Image src={iconAkar} alt="" className="w-5 h-5" />
                  <Link href="">Live Preview</Link>
                </div>
                <div className="flex justify-center items-center box-border border-2-none gap-x-2">
                  <Image src={iconGithub} alt="" className="w-5 h-5" />
                  <Link href="">View Code</Link>
                </div>
              </div>
            </div>
          </div>
        </div> */
}

{
  /* <div className="gap-2 pt-2 ">
<button className="btn btn-outline btn-primary ">Prev</button>
<div className="join mx-2">
  <button className="join-item btn">1</button>
</div>
<button className="btn btn-outline btn-primary">Next</button>
</div> */
}
