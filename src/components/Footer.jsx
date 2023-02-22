import twitter from "../images/twitter.png";
import instagram from "../images/instagram.png";
import github from "../images/github-logo.png";

const Footer = () => {
  return (
    <div className="bg-veryLightGrayLM dark:bg-veryDarkBlueDM h-[400px] flex flex-col justify-around text-center pt-[50px]">
      <div className="flex justify-center items-center">
        <a href="https://twitter.com/DezmondFon">
          <img src={twitter} alt="twitter" className="w-8 h-8 mr-8" />
        </a>
        <a href="https://www.instagram.com/dezmond_fon">
          <img src={instagram} alt="insta" className="w-8 h-8 mr-8" />
        </a>
        <a href="https://github.com/Desmond-Fon">
          <img src={github} alt="git" className="w-8 h-8" />
        </a>
      </div>

      <div className="flex justify-center items-center">
        <p className="dark:text-whiteLMDM text-veryDarkBlueLM font-bold mr-8">
          Condition of Use
        </p>
        <p className="dark:text-whiteLMDM text-veryDarkBlueLM font-bold mr-8">
          Privacy & Policy
        </p>
        <p className="dark:text-whiteLMDM text-veryDarkBlueLM font-bold mr-8">
          Press Room
        </p>
      </div>
      <div className="dark:text-whiteLMDM text-veryDarkBlueLM font-bold">
        Copyright Movieville by Fon Desmond
      </div>
    </div>
  );
};

export default Footer;
