import React from "react";
import Project from "../Components/Project";
import { useTranslation } from 'react-i18next';
import { projectImages } from "../Details";

function Projects() {
  const { t } = useTranslation();

  return (
    <main className="bg-white dark:bg-dark-mode container mx-auto max-width pt-10 mb-20">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          {t('projects.title')}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10">
          <Project
            title={t('projects.list.project1.title')}
            image={projectImages.project1}
            description={t('projects.list.project1.description')}
            techstack={t('projects.list.project1.stack')}
            previewLink={null}
            githubLink="https://github.com/binance-trades-bot"
          />
          <Project
            title={t('projects.list.project2.title')}
            image={projectImages.project2}
            description={t('projects.list.project2.description')}
            techstack={t('projects.list.project2.stack')}
            previewLink={null}
            githubLink="https://github.com/gh-actions-workflows"
          />
          <Project
            title={t('projects.list.project3.title')}
            image={projectImages.project3}
            description={t('projects.list.project3.description')}
            techstack={t('projects.list.project3.stack')}
            previewLink={null}
            githubLink="https://github.com/fatec-degree"
          />
          <Project
            title={t('projects.list.project4.title')}
            image={projectImages.project4}
            description={t('projects.list.project4.description')}
            techstack={t('projects.list.project4.stack')}
            previewLink={null}
            githubLink="https://github.com/PedroHPAlmeida/beecrowd-exercises"
          />
          <Project
            title={t('projects.list.project5.title')}
            image={projectImages.project5}
            description={t('projects.list.project5.description')}
            techstack={t('projects.list.project5.stack')}
            previewLink={null}
            githubLink="https://github.com/PedroHPAlmeida/pagarme-challange-node"
          />
          <Project
            title={t('projects.list.project6.title')}
            image={projectImages.project6}
            description={t('projects.list.project6.description')}
            techstack={t('projects.list.project6.stack')}
            previewLink={null}
            githubLink="https://github.com/my-financial-control"
          />
        </div>
      </section>
    </main>
  );
}

export default Projects;
