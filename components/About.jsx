import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="py-4 uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">I am not your normal developer</p>
          <p className="py-2 text-gray-600">
            I&apos;m Tettei Shahday-Annang. Gloria&apos;s husband, Kester&apos;s
            dad and Sir Laydrown&apos;s son. I build scalable, reliable,
            production-ready and highly performant web applications. In the past
            7 years I&apos;ve built wordpress-based websites on part time basis.
            I decided to learn JavaScript so I can take on React, and I&apos;s
            blown away by its awesomeness. Since then, I haven&apos;t looked
            back. Creating and fixing things on the web has become my main job
            now.
          </p>
          <p className="py-2 text-gray-600">
            I spend most of my day experimenting with HTML, CSS and JavaScript
            (and it&apos;s endless list of frameworks). I enjoy coding and the
            challenge of learning something new everyday.
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer  ">
            Check out some of my latest projects
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify center p-4 hover:scale-105 ease-in duration-300">
          <Image
            className="rounded-xl"
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
            alt="Tettei coding"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
