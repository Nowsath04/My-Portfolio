import React from "react";
import Work from "../Components/Work";
import { personalDetails, eduDetails } from "../Details";

function About() {
  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          About Me
        </h1>
        <p className="text-content py-8 lg:max-w-3xl">
          {personalDetails.about}
        </p>
        <a
          className="Nowsath"
          href="https://drive.google.com/file/d/1hECeZQoWGXBfYab6yuyKsSyBWMufKprL/view"
          target="_blank"
        >
          Resume
        </a>
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Education
        </h1>
        {React.Children.toArray(
          eduDetails.map(({ Position, Company, Location, Duration }) => (
            <Work
              position={Position}
              company={Company}
              location={Location}
              duration={Duration}
            />
          ))
        )}
      </section>
    </main>
  );
}

export default About;
