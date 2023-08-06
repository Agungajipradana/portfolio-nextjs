import Image from "next/image";
import imageGithub from "../../../assets/images/navbar/Github.svg";
import imageLinkedin from "../../../assets/images/navbar/linkedin.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="pb-5 border-t-2 border-slate-500 mx-20  ">
        <div className=" flex justify-center items-center box-border border-4-none gap-4 pt-2">
          <Link href="https://github.com/Agungajipradana" target="_blank">
            <Image src={imageGithub} alt="" />
          </Link>
          <Link href="https://www.linkedin.com/in/agungajipradana/" target="_blank">
            <Image src={imageLinkedin} alt="" />
          </Link>
        </div>
        <div className="pt-2 flex justify-center">Created By Agung Aji Pradana | All Rights Reserved 2023.</div>
      </div>
    </>
  );
};

export default Footer;
