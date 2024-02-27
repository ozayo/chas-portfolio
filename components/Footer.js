import Link from "next/link";
import Image from "next/image";
import logoWhite from "@/public/images/oo-logo-white.svg";
import logo from "@/public/images/oo-logo.svg";
import {
  FaSquareGithub,
  FaSquareXTwitter,
  FaLinkedin,
  FaSquareInstagram,
  FaFigma,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="py-8 text-center mt-14">
        <div className="flex justify-center">
          <Link href="/">
            {/* <img className="logo" src={logo} width="60px" alt="Ozay Logo" /> */}
            <Image
              src={logoWhite} // Route of the image file
              className="hidden dark:block"
              height={17} // Desired size with correct aspect ratio
              width={30} // Desired size with correct aspect ratio
              alt="Ozay Logo"
            />
            <Image
              src={logo} // Route of the image file
              className="block dark:hidden"
              height={17} // Desired size with correct aspect ratio
              width={30} // Desired size with correct aspect ratio
              alt="Ozay Logo"
            />
          </Link>
        </div>
        <div className="flex gap-2 justify-center font-normal text-sm my-2 ">
          <Link
            href="/"
            className="text-slate-500 hover:text-black hover:dark:text-white"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-slate-500 hover:text-black hover:dark:text-white"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="text-slate-500 hover:text-black hover:dark:text-white"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="text-slate-500 hover:text-black hover:dark:text-white"
          >
            Contact
          </Link>
        </div>
        <div className="flex gap-3 justify-center">
          <Link href="#" target="_blank" alt="Github">
            <FaSquareGithub size="1.3em" />
          </Link>
          <Link href="#" target="_blank">
            <FaSquareXTwitter size="1.3em" />
          </Link>
          <Link href="#" target="_blank">
            <FaLinkedin size="1.3em" />
          </Link>
          <Link href="#" target="_blank">
            <FaSquareInstagram size="1.3em" />
          </Link>
          <Link href="#" target="_blank">
            <FaFigma size="1.3em" />
          </Link>
        </div>
        <div className="text-slate-500 text-xs my-2 font-light">
          <p>Chas React Portfollio</p> <p>2024 - Ozay - Chas Academy</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
