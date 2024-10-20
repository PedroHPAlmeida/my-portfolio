import React from "react";
import { techStackDetails } from "../Details";

function Technologies() {
  const {
    actions,
    angular,
    argo,
    aws,
    docker,
    dynamodb,
    flask,
    git,
    github,
    gitlab,
    gitlabci,
    java,
    js,
    kubernetes,
    nodejs,
    mongo,
    postgres,
    python,
    react,
    spring,
    terraform,
    typescript,
  } = techStackDetails;
  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Languages & Frameworks
        </h1>
        <p className="text-content py-2 lg:max-w-3xl">
          Languages and Frameworks I've been working with recently
        </p>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img className="img-container" src={python} title="Python" alt="Python" />
        <img className="img-container" src={flask} title="Flask" alt="Flask" />
        <img className="img-container" src={js} title="JavaScript" alt="JavaScript" />
        <img className="img-container" src={typescript} title="TypeScript" alt="TypeScript" />
        <img className="img-container" src={nodejs} title="NodeJS" alt="NodeJS" />
        <img className="img-container" src={java} title="Java" alt="Java" />
        <img className="img-container" src={spring} title="Spring" alt="Spring" />
        <img className="img-container" src={react} title="React" alt="React" />
        <img className="img-container" src={angular} title="Angular" alt="Angular" />
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          DevOps Tools
        </h1>
        <p className="text-content py-2 lg:max-w-3xl">
          Tools I use for DevOps
        </p>
        <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
          <img className="img-container" src={aws} title="AWS" alt="AWS" />
          <img className="img-container" src={terraform} title="Terraform" alt="Terraform" />
          <img className="img-container" src={gitlab} title="Gitlab" alt="Gitlab" />
          <img className="img-container" src={gitlabci} title="Gitlab CI/CD" alt="Gitlab CI/CD" />
          <img className="img-container" src={github} title="Github" alt="Github" />
          <img className="img-container" src={actions} title="Actions" alt="Actions" />
          <img className="img-container" src={git} title="Git" alt="Git" />
          <img className="img-container" src={kubernetes} title="Kubernetes" alt="Kubernetes" />
          <img className="img-container" src={argo} title="Argo" alt="Argo" />
          <img className="img-container" src={docker} title="Docker" alt="Docker" />
        </section>
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Databases
        </h1>
        <p className="text-content py-2 lg:max-w-3xl">
          Databases I've worked with
        </p>
        <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
          <img className="img-container" src={postgres} title="Postgres" alt="Postgres" />
          <img className="img-container" src={dynamodb} title="DynamoDB" alt="DynamoDB" />
          <img className="img-container" src={mongo} title="MongoDB" alt="MongoDB" />
        </section>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
      </section>
    </main>
  );
}

export default Technologies;
