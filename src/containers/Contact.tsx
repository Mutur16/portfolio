import { ReactNode } from 'react'
import email from '../assets/email.svg'
import { IconButton } from '@material-tailwind/react'

function Contact(): ReactNode {
  return (
    <div id="contact" className="bg-bg-gray py-11 md:py-20 px-8 align-center font-body">
      <div className="max-w-screen-2xl flex flex-col lg:flex-row lg:gap-10 mx-auto gap-2">
        <div className="lg:w-2/3 flex flex-col gap-3">
          <h3 className="flex text-sm-body lg:text-body font-bold uppercase text-text-gray gap-4">
            <span className="block mt-3 w-5 h-0.5 lg:mt-3 lg:w-7 bg-text-gray"></span>
            Contact
          </h3>
          <h4 className="text-sm-h4 lg:text-h4 text-dark-gray font-bold">
            Vous souhaitez me contacter ?
          </h4>
          <div className="flex flex-wrap md:m-0 items-baseline gap-1.5">
            <p className="flex lg:justify-center gap-1.5 text-text-gray text-sm-body lg:text-body">
              Envoyez-moi un message à
            </p>
            <a
              className="group text-text-gray text-sm-body lg:text-body hover:text-black"
              href="mailto:alex.m-m@outlook.com"
              title=""
            >
              alex.m-m@outlook.com
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-700 h-0.5 bg-dark-gray"></span>
            </a>
          </div>
          <div className="flex items-baseline pt-3 lg:py-5 gap-5 text-xl lg:text-2xl">
            <p className="flex lg:justify-center gap-1.5 text-text-gray text-sm-body lg:text-body">
              Mes réseaux :
            </p>
            <a href="https://github.com/Mutur16" target="_blank">
              <IconButton className="rounded-full bg-dark-gray">
                <i className="fab fa-github text-lg" />
              </IconButton>
            </a>
            <a
              href="https://www.linkedin.com/in/alexandra-marti-montessinos-469a9a19b/"
              target="_blank"
            >
              <IconButton className="rounded-full bg-dark-gray">
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
