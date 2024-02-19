import { ReactNode } from 'react'
import { DefaultAccordion } from '../components/Accordion'

function About(): ReactNode {
  return (
    <div
      id="about"
      className="bg-bg-gray flex flex-col xl:flex-row gap-14 py-11 md:py-20 px-8 align-center font-body"
    >
      <div className="max-w-screen-2xl flex flex-col lg:flex-row gap-10 mx-auto">
        <div className="lg:w-3/5 lg:pr-10 flex flex-col gap-3">
          <h3 className="flex text-sm-body lg:text-body font-bold uppercase text-text-gray gap-4">
            <span className="block mt-3 w-5 h-0.5 lg:mt-3 lg:w-7 bg-text-gray"></span>
            A propos
          </h3>
          <h4 className="text-sm-h4 lg:text-h4 text-dark-gray font-bold">
            Développeuse Front-End basée en région parisienne
          </h4>
          <p className="text-text-gray text-sm-body lg:text-body">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
            quis ipsum, fuga ratione dolor nam. Dolores laborum, quae ducimus
            quia modi voluptate corporis sint aut saepe. Hic reiciendis soluta
            perferendis! Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Tempora quis ipsum, fuga ratione dolor nam. Dolores laborum,
            quae ducimus quia modi voluptate corporis sint aut saepe. Hic
            reiciendis soluta perferendis!
          </p>
        </div>
        <div className="flex flex-col gap-3 lg:w-2/5 ">
          <DefaultAccordion />
        </div>
      </div>
    </div>
  )
}

export default About
