import { ReactNode } from 'react'
import { DefaultAccordion } from '../components/Accordion'

function About(): ReactNode {
  return (
    <div
      id="about"
      className="bg-secondary-light dark:bg-secondary flex flex-col xl:flex-row gap-14 py-11 md:py-20 px-8 align-center font-body transition-all duration-500"
    >
      <div className="max-w-screen-2xl flex flex-col lg:flex-row gap-10 mx-auto">
        <div className="lg:w-3/5 lg:pr-10 flex flex-col gap-3">
          <h3 className="flex text-sm-body lg:text-body font-bold uppercase text-primary-light dark:text-primary gap-4">
            <span className="block mt-3 w-5 h-0.5 lg:mt-3 lg:w-7 bg-primary-light dark:bg-primary"></span>
            A propos
          </h3>
          <h4 className="text-sm-h4 lg:text-h4 text-tertiary-light dark:text-primary font-bold">
            Développeuse Front-End basée en région parisienne
          </h4>
          <p className="text-primary-light dark:text-primary text-sm-body lg:text-body">
            Bonjour et bienvenue sur mon portfolio. <hr className='border-none' />
            Je me présente, Alexandra Marti-Montessinos, développeuse front-end basée en IDF. <hr className='border-none' />
            J'ai travaillé dans divers domaine tel que l'esthétique et le tourisme. J'ai démarré mes expériences professionnelles au Japon en 2016 et suis rentrée en France en 2020. A cette période j'ai souhaité, tout en passant ma licence de japonais, prendre le temps de déterminer le domaine dans lequel j'aimerais vraiment travaillée. J'ai commencé à apprendre par moi-même les bases du développement web puis j'ai continuer sur une formation OpenClassroom en 2023 pour me conforter dans la voie que j'avais choisi. <hr className='border-none' />
            Retrouvez sur ce portfolio certains projets sur lesquels j'ai travaillé jusqu'à maintenant.
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
