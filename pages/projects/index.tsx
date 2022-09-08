import * as React from "react";
import Link from "next/link";
import Container from "../../components/Container";
import Project from "../../components/Project";

export default function Projects() {
  return (
    <React.Suspense fallback={null}>
      <Container>
        <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
          <div className="flex flex-col-reverse sm:flex-row items-start">
            <div className="flex flex-col pr-8">
              <h1 className="font-bold text-3xl md:text-5xl tracking-tight text-black dark:text-white mb-12">
                Projects
              </h1>

              <Project
                title="Learn In Web"
                img="asdf.png"
                link="https://github.com/taintlesscupcake/learn-in-web"
              />
            </div>
          </div>
        </div>
      </Container>
    </React.Suspense>
  );
}
