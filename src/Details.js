// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile.jpg";
// Tech stack images
import actions from "./assets/techstack/actions.png";
import angular from "./assets/techstack/angular.png";
import argo from "./assets/techstack/argo.png";
import aws from "./assets/techstack/aws.png";
import docker from "./assets/techstack/docker.png";
import dynamodb from "./assets/techstack/dynamodb.png";
import flask from "./assets/techstack/flask.png";
import git from "./assets/techstack/git.png";
import github from "./assets/techstack/github.png";
import gitlab from "./assets/techstack/gitlab.png";
import gitlabci from "./assets/techstack/gitlabci.png";
import java from "./assets/techstack/java.png";
import js from "./assets/techstack/js.png";
import kubernetes from "./assets/techstack/kubernetes.png";
import mongo from "./assets/techstack/mongo.png";
import nodejs from "./assets/techstack/nodejs.png";
import postgres from "./assets/techstack/postgres.png";
import python from "./assets/techstack/python.png";
import react from "./assets/techstack/react.png";
import spring from "./assets/techstack/spring.png";
import terraform from "./assets/techstack/terraform.png";
import typescript from "./assets/techstack/typescript.png";

// Project Images
import binance from "./assets/projects/binance.jpg";
import ghactions from "./assets/projects/actions.jpg";
import fatec from "./assets/projects/fatec.jpg";
import beecrowd from "./assets/projects/beecrowd.png";
import code from "./assets/projects/code.jpg";
import financial from "./assets/projects/financial.jpg";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Pedro Henrique",
  tagline: "I build things with code",
  img: profile,
  about: `Graduated in Systems Analysis and Development, I work as a full-stack developer, applying my technical knowledge to deliver software solutions that combine efficiency and quality. I have practical experience in back-end development with Python and Flask, as well as NodeJS, using JavaScript and TypeScript. On the front-end, I work with React, creating modern and functional user interfaces. In cloud environments, I use AWS services such as Lambda, DynamoDB, RDS, SES, and EKS to build scalable and secure applications. I also have experience in Infrastructure as Code (IaC) with Terraform, which allows me to automate and manage infrastructure effectively. My familiarity with agile methodologies, such as Scrum, facilitates collaboration and continuous delivery in complex projects. Additionally, I have experience with the DevOps culture, regularly using tools and processes that streamline the software delivery cycle, such as Git, Docker, CI/CD with GitLab CI, GitOps, Kubernetes, and ArgoCD. This gives me a comprehensive view of the entire software lifecycle, from development to production. In academic and personal projects, I have worked with Java and the Spring Framework and explored the use of Angular to create front-end applications. I have also used GitHub Actions to automate workflows, further enhancing my skills in continuous integration and delivery. Currently, I am involved in developing a platform aimed at improving the development experience within the company, based on Spotify's open-source software Backstage. The project encompasses everything from microservices creation to cloud infrastructure setup, including automated delivery of AWS services via IaC with Terraform, all with the goal of accelerating the delivery cycle and improving the developer experience.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkedin: "https://www.linkedin.com/in/pedro-henrique-pereira-almeida",
  github: "https://github.com/PedroHPAlmeida",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Software Enginner",
    Company: `Cielo`,
    Location: "Barueri - SP - Brazil",
    Type: "Full Time",
    Duration: "Mar 2024 - Present",
  },
  {
    Position: "Internship",
    Company: `Cielo`,
    Location: "Barueri - SP - Brazil",
    Type: "Internship",
    Duration: "Feb 2022 - Mar 2023",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Higher Technology Course in Systems Analysis and Development",
    Company: "FATEC",
    Location: "Carapicuiba - SP - Brazil",
    Type: "Full Time",
    Duration: "Aug 2020 - Jul 2023",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
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
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Binance Trades Bot",
    image: binance,
    description: "Cryptocurrency purchase recommendation bot. This bot collects data from the Binance API, saves it to MongoDB and sends a personalized AI message via the Telegram bot",
    techstack: "Python, Terraform and Telegram API",
    previewLink: null,
    githubLink: "https://github.com/binance-trades-bot",
  },
  {
    title: "GitHub Actions - Workflows",
    image: ghactions,
    description: "Reusable GitHub Actions workflows. This project groups workflows for Python, Docker, Terraform, AWS Beanstalk, AWS Lambda, among others",
    techstack: "CI/CD and GitHub Actions",
    previewLink: null,
    githubLink: "https://github.com/gh-actions-workflows",
  },
  {
    title: "FATEC - Graduation",
    image: fatec,
    description: "Projects and laboratories developed during my graduation in Systems Analysis and Development at FATEC",
    techstack: "Java, Python, C and Terraform",
    previewLink: null,
    githubLink: "https://github.com/fatec-degree",
  },
  {
    title: "Beecrowd - Code Challenges",
    image: beecrowd,
    description: "Resolutions of programming challenges",
    techstack: "Python, Java, Javascript, C, Kotlin and SQL",
    previewLink: null,
    githubLink: "https://github.com/PedroHPAlmeida/beecrowd-exercises",
  },
  {
    title: "Pagar.me - Challenge",
    image: code,
    description: "Resolution of the Pagar.me Back-end challenge for implementing a Payment Service Provider (PSP)",
    techstack: "NodeJS, Express and MongoDB",
    previewLink: null,
    githubLink: "https://github.com/PedroHPAlmeida/pagarme-challange-node",
  },
  {
    title: "Financial Control System",
    image: financial,
    description: "Personal finance control system",
    techstack: "Java, Spring, Angular and Kotlin",
    previewLink: null,
    githubLink: "https://github.com/my-financial-control",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "pedro.6571almeida@gmail.com",
  phone: "+55 11 95094-0828",
};
