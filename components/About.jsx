import React from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import CoderAnimation from "./CoderAnimation";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-2 gap-8">
        <div className="col-span-1">
          <p className="py-4 uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <RoughNotationGroup show={true}>
            <p className="py-2">
              <RoughNotation type="highlight" color="gold" multiline>
                I am not your normal developer.
              </RoughNotation>
            </p>
            <p className="py-2 text-gray-600">
              I&apos;m Tettei Shahday-Annang. I build highly performant,
              scalable and production-ready web applications. In the past 7
              years I&apos;ve built wordpress-based websites on part time basis,
              helping put online websites for individuals and small businesses.
              I decided to learn JavaScript so I can take on React, and I was
              blown away by its awesomeness. Since then, I haven&apos;t looked
              back. Creating and fixing things on the web has become my main job
              now.
            </p>
            <p className="py-2 text-gray-600">
              I spend most of my day experimenting with HTML, CSS and JavaScript
              (and it&apos;s endless list of frameworks). I enjoy coding and the
              challenge of learning something new everyday.
            </p>
            <p className="py-2 text-gray-600 cursor-pointer">
              <a
                href="https://github.com/tetteis"
                rel="noopener noreferrer"
                target="_blank"
              >
                <RoughNotation type="box" color="#5651E5" multiline>
                  Check out what I&apos;ve been working on.
                </RoughNotation>
              </a>
            </p>
          </RoughNotationGroup>
        </div>
        <div className="w-full h-auto m-auto flex items-center justify center p-4 ">
          <CoderAnimation />
        </div>
      </div>
    </div>
  );
};

export default About;
