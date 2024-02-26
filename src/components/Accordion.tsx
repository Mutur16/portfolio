import React from 'react'
import { ReactNode } from 'react'
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react'

import CSS from '../assets/icons/css.svg'
import Tailwind from '../assets/icons/tailwind-css.svg'
import SASS from '../assets/icons/sass.svg'
import JS from '../assets/icons/javascript.svg'
import ReactNative from '../assets/icons/react-native.svg'
import TS from '../assets/icons/typescript.svg'
import { useTranslation } from 'react-i18next'

export function DefaultAccordion(): ReactNode {
  const { t } = useTranslation()

  const [open, setOpen] = React.useState(1)

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value)

  return (
    <>
      <Accordion className="transition-all duration-500" open={open === 1}>
        <AccordionHeader
          className=" bg-accordion-light pl-8 py-6 font-body uppercase border-none dark:bg-tertiary dark:text-link dark:hover:text-white"
          onClick={() => handleOpen(1)}
        >
          {t('accordion.education.header')}
        </AccordionHeader>
        <AccordionBody className="bg-white dark:bg-accordion dark:text-primary font-body p-8 transition-all duration-500">
          <ul className="flex flex-col gap-3 text-sm-body md:text-body">
            <li className="flex">
              <span className="w-1/3">2022</span>
              <span>{t('accordion.education.body.licence')}</span>
            </li>
            <li className="flex">
              <span className="w-1/3">2024</span>
              <a
                href="https://openclassrooms.com/fr/paths/900-integrateur-web#projects"
                target="_blank"
                className="group hover:text-black dark:hover:text-white"
              >
                {t('accordion.education.body.oc')}
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-700 h-0.5 bg-primary-light dark:bg-white"></span>
              </a>
            </li>
          </ul>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader
          className=" bg-accordion-light pl-8 py-6 font-body uppercase border-none dark:bg-tertiary dark:text-link dark:hover:text-white"
          onClick={() => handleOpen(2)}
        >
          {t('accordion.skills.header')}
        </AccordionHeader>
        <AccordionBody className="bg-white dark:bg-accordion dark:text-primary font-body p-8 transition-all duration-500">
          <ul className="flex flex-col gap-3 text-sm-body md:text-body">
            <li className="flex">
              <span className="w-2/4 flex items-center gap-2">
                <img src={JS} className="w-[30px] h-[30px]" />
                JavaScript
              </span>
              <span className="flex items-center gap-2">
                <img src={CSS} className="w-[30px] h-[30px]" />
                CSS
              </span>
            </li>
            <li className="flex">
              <span className="w-2/4 flex items-center gap-2">
                <img src={TS} className="w-[30px] h-[30px]" />
                TypeScript
              </span>
              <span className="flex items-center gap-2">
                <img src={SASS} className="w-[30px] h-[30px]" />
                SASS
              </span>
            </li>
            <li className="flex">
              <span className="w-2/4 flex items-center gap-2">
                <img src={ReactNative} className="w-[30px] h-[30px]" />
                React
              </span>
              <span className="flex items-center gap-2">
                <img src={Tailwind} className="w-[30px] h-[30px]" />
                Tailwind
              </span>
            </li>
          </ul>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3}>
        <AccordionHeader
          className=" bg-accordion-light pl-8 py-6 font-body uppercase border-none dark:bg-tertiary dark:text-link dark:hover:text-white"
          onClick={() => handleOpen(3)}
        >
          {t('accordion.languages.header')}
        </AccordionHeader>
        <AccordionBody className="bg-white dark:bg-accordion dark:text-primary font-body p-8 transition-all duration-500">
          <ul className="flex flex-col gap-3 text-sm-body md:text-body">
            <li className="flex">
              <span className="w-2/4">
                {t('accordion.languages.body.french')}
              </span>
              <span>{t('accordion.languages.body.french.level')}</span>
            </li>
            <li className="flex">
              <span className="w-2/4">
                {t('accordion.languages.body.english')}
              </span>
              <span>{t('accordion.languages.body.english.level')}</span>
            </li>
            <li className="flex">
              <span className="w-2/4">
                {t('accordion.languages.body.japanese')}
              </span>
              <span>{t('accordion.languages.body.japanese.level')}</span>
            </li>
          </ul>
        </AccordionBody>
      </Accordion>
    </>
  )
}
