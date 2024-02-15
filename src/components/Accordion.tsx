import React from 'react'
import { ReactNode } from 'react'
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react'

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
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-700 h-0.5 bg-primary-gray"></span>
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
              <span className="w-2/4">JavaScript</span>
              <span>CSS</span>
            </li>
            <li className="flex">
              <span className="w-2/4">TypeScript</span>
              <span>SASS</span>
            </li>
            <li className="flex">
              <span className="w-2/4">React/Redux</span>
              <span>Tailwind</span>
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
