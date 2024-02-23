import { ReactNode } from 'react'
import { IconButton } from '@material-tailwind/react'
import { useTranslation } from 'react-i18next'

import email from '../assets/email.svg'

function Contact(): ReactNode {
  const { t } = useTranslation()

  return (
    <div
      id="contact"
      className="bg-secondary-light dark:bg-secondary py-11 md:py-20 px-8 align-center font-body transition-all duration-500"
    >
      <div className="max-w-screen-2xl flex flex-col lg:flex-row lg:gap-10 mx-auto gap-2">
        <div className="lg:w-2/3 flex flex-col gap-3">
          <h3 className="flex text-sm-body lg:text-body font-bold uppercase text-primary-light dark:text-primary gap-4">
            <span className="block mt-3 w-5 h-0.5 lg:mt-3 lg:w-7 bg-primary-light dark:bg-primary"></span>
            {t('contact.title')}
          </h3>
          <h4 className="text-sm-h4 lg:text-h4 text-tertiary-light dark:text-primary font-bold">
            {t('contact.subtitle')}
          </h4>
          <div className="flex flex-wrap md:m-0 items-baseline gap-1.5">
            <p className="flex lg:justify-center gap-1.5 text-primary-light dark:text-primary text-sm-body lg:text-body">
              {t('contact.content.mail')}
            </p>
            <a
              className="group text-primary-light dark:text-link text-sm-body lg:text-body hover:text-black dark:hover:text-white"
              href="mailto:alex.m-m@outlook.com"
              title=""
            >
              alex.m-m@outlook.com
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-700 h-0.5 bg-tertiary-light dark:bg-white"></span>
            </a>
          </div>
          <div className="flex items-baseline pt-3 lg:py-5 gap-5 text-xl lg:text-2xl">
            <p className="flex lg:justify-center gap-1.5 text-primary-light dark:text-primary text-sm-body lg:text-body">
              {t('contact.content.links')}
            </p>
            <a href="https://github.com/Mutur16" target="_blank">
              <IconButton className="rounded-full bg-tertiary">
                <i className="fab fa-github text-lg" />
              </IconButton>
            </a>
            <a
              href="https://www.linkedin.com/in/alexandra-marti-montessinos-469a9a19b/"
              target="_blank"
            >
              <IconButton className="rounded-full bg-tertiary">
                <i className="fab fa-linkedin text-lg" />
              </IconButton>
            </a>
          </div>
        </div>
        <img
          className="m-auto w-0 lg:w-1/6"
          src={email}
          alt="Illistration d'une enveloppe"
        />
      </div>
    </div>
  )
}

export default Contact
