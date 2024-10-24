import React from "react";
import Work from "../Components/Work";
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();

  return (
    <main className="bg-white dark:bg-dark-mode container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          {t('about')}
        </h1>
        <p className="text-content py-8 lg:max-w-3xl">{t('about-me-resume')}</p>
      </section>
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          {t('work-experience')}
        </h1>
        <Work
          position={t('software-enginner')}
          company={'Cielo'}
          location={`Barueri - SP - ${t('brazil')}`}
          type={t('full-time')}
          duration={t('mar-2024-present')}
        />
        <Work
          position={t('intern')}
          company={'Cielo'}
          location={`Barueri - SP - ${t('brazil')}`}
          type={t('intership')}
          duration={t('feb-2022-mar-2023')}
        />
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          {t('education')}
        </h1>
        <Work
          position={t('htc-ads')}
          company='FATEC'
          location={`Carapicuiba - SP - ${t('brazil')}`}
          duration={t('aug-2020-jul-2023')}
        />
      </section>
    </main>
  );
}

export default About;
