import Image from "next/image";
import imageProfile from "../../assets/images/hero/profile portfolio.png";

const Hero = () => {
  return (
    <>
      <div className="mt-10 flex justify-between items-center box-border border-4-none mx-72 pb-10 ">
        <div className="text-3xl pt-5 text-slate-500">
          <h1>
            Hi 👋, <br />
            My name is <br />
            <span className="text-sky-600">Agung Aji Pradana</span> <br />I build things for web
          </h1>
        </div>
        <div className="border rounded-full object-cover z-10 border-sky-500">
          <Image src={imageProfile} alt="" className="z-0" />
        </div>
      </div>
    </>
  );
};

export default Hero;
