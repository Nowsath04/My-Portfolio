import React from "react";

function Project({
  title,
  image,
  description,
  techstack,
  frontend,
  backend,
  DeployUrl,
}) {
  return (
    <article className="rounded-xl mt-10 overflow-hidden shadow-xl shadow-slate-300 dark:shadow-slate-900">
      <img src={image} alt="" loading="lazy" />
      <div className="dark:bg-dark-card p-4">
        <h1 className="dark:text-light-heading font-semibold text-lg pt-1">
          {title}
        </h1>
        <p className="text-content pt-4 font-light">{description}</p>
        <h3 className="text-dark-heading dark:text-light-heading font-medium pt-4">
          Tech Stack : <span className="font-light">{techstack}</span>
        </h3>
        <div className="flex justify-between items-center mt-5">
          <a
            href={DeployUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="deploy"
          >
            Deploy
          </a>

          <a
            href={frontend}
            target="_blank"
            rel="noreferrer noopener"
            className="deploy"
          >
            Frontend
          </a>

          <a
            href={backend}
            target="_blank"
            rel="noreferrer noopener"
            className="deploy"
          >
            backend
          </a>
        </div>
      </div>
    </article>
  );
}

export default Project;
