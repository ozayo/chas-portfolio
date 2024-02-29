import { ContactForm } from "@/components/ContactForm";
import Link from "next/link";
import {
  FaSquareGithub,
  FaSquareXTwitter,
  FaLinkedin,
  FaSquareInstagram,
  FaFigma,
  FaAt,
} from "react-icons/fa6";

function contact() {
  return (
    <div className="flex flex-col md:flex-row gap-7">
      <div className="basis-full md:basis-1/2 flex flex-col justify-center">
        <h1 className="text-5xl font-extrabold mt-3 mb-8">
          Let’s
          <br />
          <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
            Build Something
          </span>{" "}
          Together
        </h1>
        <p className="mb-3 text-sm md:text-base font-light">
          You can contact me using the form on the side or the links below. If
          you have any questions, feel free to ask.
        </p>
        <div className="flex gap-3 justify-center md:justify-start mt-8">
          <Link
            href="mailto:ozay.ozdemir@chasacademy.se"
            target="_blank"
            alt="Email"
          >
            <FaAt
              size="1.4em"
              className=" hover:fill-blue-500 hover:scale-125"
            />
          </Link>
          <Link href="https://github.com/ozayo" target="_blank" alt="Github">
            <FaSquareGithub
              size="1.5em"
              className=" hover:fill-blue-500 hover:scale-125"
            />
          </Link>
          <Link
            href="https://twitter.com/ozayozdemir"
            target="_blank"
            alt="Twitter"
          >
            <FaSquareXTwitter
              size="1.5em"
              className=" hover:fill-blue-500 hover:scale-125"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/ozay-ozdemir/"
            target="_blank"
            alt="Linkedin"
          >
            <FaLinkedin
              size="1.5em"
              className=" hover:fill-blue-500 hover:scale-125"
            />
          </Link>
          <Link
            href="https://www.instagram.com/ozayo"
            target="_blank"
            alt="Instagram"
          >
            <FaSquareInstagram
              size="1.5em"
              className=" hover:fill-blue-500 hover:scale-125"
            />
          </Link>
        </div>
      </div>
      <div className="basis-full md:basis-1/2">
        <ContactForm />
      </div>
    </div>
  );
}
export default contact;
