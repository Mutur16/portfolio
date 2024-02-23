import { ReactNode } from 'react'
import { DefaultAccordion } from '../components/Accordion'
import { useTranslation } from 'react-i18next'

function About(): ReactNode {
  const { t } = useTranslation()

  return (
    <div
      id="about"
      className="bg-secondary-light dark:bg-secondary flex flex-col xl:flex-row gap-14 py-11 md:py-20 px-8 align-center font-body transition-all duration-500"
    >
      <div className="max-w-screen-2xl flex flex-col lg:flex-row gap-10 mx-auto">
        <div className="lg:w-3/5 lg:pr-10 flex flex-col gap-3">
          <h3 className="flex text-sm-body lg:text-body font-bold uppercase text-primary-light dark:text-primary gap-4">
            <span className="block mt-3 w-5 h-0.5 lg:mt-3 lg:w-7 bg-primary-light dark:bg-primary"></span>
            {t('about.title')}
          </h3>
          <h4 className="text-sm-h4 lg:text-h4 text-tertiary-light dark:text-primary font-bold">
            {t('about.subtitle')}
          </h4>
          <span className="text-primary-light dark:text-primary text-sm-body lg:text-body">
            {t('about.content.welcome')}
            <hr className="border-none" />
            {t('about.content.introduction')} <hr className="border-none" />
            {t('about.content.background')}
            <hr className="border-none" />
            {t('about.content.portfolio')}
          </span>
        </div>
        <div className="flex flex-col gap-3 lg:w-2/5 ">
          <DefaultAccordion />
        </div>
      </div>
    </div>
  )
}

export default About
