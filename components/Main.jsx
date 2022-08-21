import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { AiOutlineCodepen } from "react-icons/ai";
import Image from "next/image";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

function Main() {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <Image
            className="rounded-full"
            src="/assets/tettei-img.jpg"
            width={170}
            height={170}
            alt="Tettei's profile picture"
          />

          <h1 className="py-2 text-gray-700">
            Hey👋, I&apos;m <span className="text-[#5651e5]">Tettei</span>
          </h1>
          <h2 className="text-gray-700">Front-End Developer</h2>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            Building{" "}
            <RoughNotationGroup show={true}>
              <RoughNotation type="underline" color="#eb1700">
                highly performant,
              </RoughNotation>{" "}
              <RoughNotation type="underline" color="#fdd641">
                scalable
              </RoughNotation>{" "}
              and{" "}
              <RoughNotation type="underline" color="#21a2b9">
                production
              </RoughNotation>{" "}
            </RoughNotationGroup>
            web applications that your users would love.
          </p>
          <div className="flex items-center justify-between max-w-[360px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/tettei-shahday-annang/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/tetteis"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <a
              href="https://codepen.io/tetteis"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineCodepen />
              </div>
            </a>
            <a
              href="https://twitter.com/tetteis"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaTwitter />
              </div>
            </a>
            <a
              href="mailto:hey@tetteis.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
