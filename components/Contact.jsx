import Image from "next/image";
import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineCodepen } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import Link from "next/link";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

function Contact() {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src="/../assets/contact.svg"
                  alt="Contact Tettei"
                  width={400}
                  height={300}
                />
              </div>
              <div>
                <h2 className="py-2">Tettei Shahday-Annang</h2>
                <p>Front-End Developer</p>
                <p className="py-4">
                  <RoughNotationGroup show={true}>
                    I am available for{" "}
                    <RoughNotation type="underline" color="#eb1700" padding={0}>
                      freelance
                    </RoughNotation>{" "}
                    or&nbsp;
                    <RoughNotation
                      type="underline"
                      color=" #5651E5"
                      padding={0}
                    >
                      full-time position.&nbsp;
                    </RoughNotation>
                    Contact me and let&apos;s talk.
                  </RoughNotationGroup>
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center justify-between py-4">
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
          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2" htmlFor="name">
                      Name
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="name"
                      id="name"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2" htmlFor="phone">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="phone"
                      id="phone"
                    />
                  </div>
                </div>

                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                    name="email"
                    id="email"
                  />
                </div>

                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="subject"
                    id="subject"
                  />
                </div>

                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    name="subject"
                    id="subject"
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
                <button className="w-full p-4 text-gray-100 mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
