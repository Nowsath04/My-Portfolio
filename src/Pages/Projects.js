import React from "react";
import Project from "../Components/Project";
import { projectDetails } from "../Details";

function Projects() {
  return (
    <main className="container mx-auto max-width pt-10 mb-20">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Projects
        </h1>
        <br />
        <div className="text-2xl text-dark-heading dark:text-light-heading md:text-1xl xl:text-2xl xl:leading-tight font-bold">
          <h2>
            Credentials :-{" "}
            <span
              style={{
                fontSize: "20px",
                fontFamily: "'Times New Roman', Times, serif",
              }}
            >
              USER : mydemo@gmail.com | PASSWORD : Mydemo@123
              <br />
              ADMIN : admin123@gmail.com | PASSWORD : Admin@123
            </span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10">
          {React.Children.toArray(
            projectDetails.map(
              ({
                title,
                image,
                description,
                techstack,
                frontend,
                backend,
                DeployUrl,
              }) => (
                <Project
                  title={title}
                  image={image}
                  description={description}
                  techstack={techstack}
                  frontend={frontend}
                  DeployUrl={DeployUrl}
                  backend={backend}
                />
              )
            )
          )}
        </div>
      </section>
    </main>
  );
}

export default Projects;
