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

export function DefaultAccordion(): ReactNode {
  const [open, setOpen] = React.useState(1)

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value)

  return (
    <>
      <Accordion open={open === 1}>
        <AccordionHeader
          className=" bg-primary-gray pl-8 py-6 font-body uppercase border-none"
          onClick={() => handleOpen(1)}
        >
          Formations
        </AccordionHeader>
        <AccordionBody className="bg-white font-body p-8">
          <ul className="flex flex-col gap-3 text-sm-body md:text-body">
            <li className="flex">
              <span className="w-1/3">2022</span>
              <span>Licence LLCE Japonais</span>
            </li>
            <li className="flex">
              <span className="w-1/3">2024</span>
              <a
                href="https://openclassrooms.com/fr/paths/900-integrateur-web#projects"
                target="_blank"
                className="group transition duration-300 hover:text-black"
              >
                Intégrateur web, OC
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-700 h-0.5 bg-dark-gray"></span>
              </a>
            </li>
          </ul>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader
          className=" bg-primary-gray pl-8 py-6 font-body uppercase border-none"
          onClick={() => handleOpen(2)}
        >
          Compétences
        </AccordionHeader>
        <AccordionBody className="bg-white font-body p-8">
          <ul className="flex flex-col gap-3 text-sm-body md:text-body">
            <li className="flex">
              <span className="w-2/4 flex items-center gap-2"><img src={JS} className='w-[30px] h-[30px]'/>JavaScript</span>
              <span className='flex items-center gap-2'><img src={CSS} className='w-[30px] h-[30px]'/>CSS</span>
            </li>
            <li className="flex">
              <span className="w-2/4 flex items-center gap-2"><img src={TS} className='w-[30px] h-[30px]'/>TypeScript</span>
              <span className='flex items-center gap-2'><img src={SASS} className='w-[30px] h-[30px]'/>SASS</span>
            </li>
            <li className="flex">
              <span className="w-2/4 flex items-center gap-2"><img src={ReactNative} className='w-[30px] h-[30px]'/>React/Redux</span>
              <span className='flex items-center gap-2'><img src={Tailwind} className='w-[30px] h-[30px]'/>Tailwind</span>
            </li>
          </ul>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3}>
        <AccordionHeader
          className=" bg-primary-gray pl-8 py-6 font-body uppercase border-none"
          onClick={() => handleOpen(3)}
        >
          Langues
        </AccordionHeader>
        <AccordionBody className="bg-white font-body p-8">
          <ul className="flex flex-col gap-3 text-sm-body md:text-body">
            <li className="flex">
              <span className="w-2/4">Français</span>
              <span>Langue natale</span>
            </li>
            <li className="flex">
              <span className="w-2/4">Anglais</span>
              <span>Avancé</span>
            </li>
            <li className="flex">
              <span className="w-2/4">Japonais</span>
              <span>Intermédiaire</span>
            </li>
          </ul>
        </AccordionBody>
      </Accordion>
    </>
  )
}
