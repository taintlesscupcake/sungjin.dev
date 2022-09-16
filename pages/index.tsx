import * as React from "react";
import Container from "../components/Container";
import Image from "next/image";
import Link from "next/link";
import Project from "../components/Project";

export default function Home() {
  return (
    <React.Suspense fallback={null}>
      <Container>
        <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
          <div className="flex flex-col-reverse sm:flex-row items-start">
            <div className="flex flex-col pr-8">
              <p className="text-gray-600 dark:text-gray-400 fomt-semibold text-xl mb-16">
                #This website is under development.
              </p>
              <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
                SungJin
              </h1>
              <h2 className="text-gray-700 dark:text-gray-200 mb-8">
                Student Developer in{" "}
                <a
                  className="font-semibold"
                  href="https://ce.khu.ac.kr/ce/user/main/view.do"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  KyeongHee Univ.
                </a>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-16">
                I am a student developer from Korea. Full-Stack Developer, but
                Backend-Focused. React, Node.js, Golang, and more.
              </p>
            </div>
            <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto"></div>
          </div>

          <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
            Featured Projects
          </h3>
          <Project
            title="Learn In Web"
            img="asdf.png"
            link="https://github.com/taintlesscupcake/learn-in-web"
            description="A web-based learning platform for students and teachers."
          />
          <Link href="/projects">
            <a className="flex mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6">
              See all Projects
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="h-6 w-6 ml-1"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
                />
              </svg>
            </a>
          </Link>

          <span className="h-16" />
        </div>
      </Container>
    </React.Suspense>
  );
}
