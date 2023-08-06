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
import imageRedux from "../../assets/images/techStack/redux.png";
import imageVSCode from "../../assets/images/techStack/vscode.svg";
import imageGithub from "../../assets/images/techStack/GitHub-dark.svg";
import imageGit from "../../assets/images/techStack/git.svg";
import imagePostman from "../../assets/images/techStack/postman.svg";
import imageNode from "../../assets/images/techStack/nodejs.svg";
import imageJest from "../../assets/images/techStack/jest.svg";

const TechStack = () => {
  return (
    <>
      <div className="flex justify-center items-center text-center pt-20 text-slate-500 pb-20 ">
        <div>
          <h1 className="text-3xl">My Tech Stack</h1>
          <p className="text-sm">Technologies I’ve been working with recently</p>
          <div className="grid grid-cols-6 gap-8 box-border border-4-none pt-5">
            <div>
              <Image src={imageHTML} alt="" className="w-20 h-20 border-1-none bg-slate-50" />
              <p>HTML5</p>
            </div>
            <div>
              <Image src={imageCSS} alt="" className="w-20 h-20 border-1-none bg-slate-50" />
              <p>CSS3</p>
            </div>
            <div>
              <Image src={imageJS} alt="" className="w-20 h-20 border-1-none bg-slate-50" />
              <p>JavaScript</p>
            </div>
            <div>
              <Image src={imageTS} alt="" className="w-20 h-20 border-1-none bg-slate-50" />
              <p>TypeScript</p>
            </div>
            <div>
              <Image src={imageReact} alt="" className="w-20 h-20 border-1-none bg-slate-50" />
              <p>React</p>
            </div>
            <div>
              <Image src={imageNext} alt="" className="w-20 h-20 border-1-none bg-slate-50" />
              <p>Next.js</p>
            </div>
            <div>
              <Image src={imageExpress} alt="" className="w-20 h-20 border-1-none bg-slate-50" />
              <p>Express.js</p>
            </div>
            <div>
              <Image src={imageNest} alt="" className="w-20 h-20 border-1-none bg-slate-50" />
              <p>Nest.js</p>
            </div>
            <div>
              <Image src={imagePostgre} alt="" className="w-20 h-20 border-1-none bg-slate-50" />
              <p>PostgreSQL</p>
            </div>
            <div>
              <Image src={imageTailwind} alt="" className="w-20 h-20 border-1-none bg-slate-50" />
              <p>TailwindCSS</p>
            </div>
            <div>
              <Image src={imageBootstrap} alt="" className="w-20 h-20 border-1-none bg-slate-50" />
              <p>Bootstrap</p>
            </div>
            <div>
              <Image src={imageRedux} alt="" className="w-20 h-20 border-1-none bg-slate-50" />
              <p>Redux</p>
            </div>
            <div>
              <Image src={imageVSCode} alt="" className="w-20 h-20 border-1-none bg-slate-50" />
              <p>VS Code</p>
            </div>
            <div>
              <Image src={imageGithub} alt="" className="w-20 h-20 border-1-none bg-slate-50" />
              <p>Github</p>
            </div>
            <div>
              <Image src={imageGit} alt="" className="w-20 h-20 border-1-none bg-slate-50" />
              <p>Git</p>
            </div>
            <div>
              <Image src={imagePostman} alt="" className="w-20 h-20 border-1-none bg-slate-50" />
              <p>Postman</p>
            </div>
            <div>
              <Image src={imageNode} alt="" className="w-20 h-20 border-1-none bg-slate-50" />
              <p>Node.js</p>
            </div>
            <div>
              <Image src={imageJest} alt="" className="w-20 h-20 border-1-none bg-slate-50" />
              <p>Jest</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TechStack;
