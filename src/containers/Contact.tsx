import { ReactNode } from 'react'
import email from '../assets/email.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Contact(): ReactNode {
  return (
    <div id="contact" className="bg-bg-gray py-11 px-8 align-center font-body">
      <div className="max-w-screen-2xl flex flex-col lg:flex-row lg:gap-10 mx-auto gap-2">
        <div className="lg:w-2/3 flex flex-col gap-4">
          <h3 className="flex text-sm-body lg:text-body font-bold uppercase text-text-gray gap-4">
            <span className="block mt-3 w-5 h-0.5 lg:mt-3 lg:w-7 bg-text-gray"></span>
            Contact
          </h3>
          <h4 className="text-sm-h4 lg:text-h4 font-bold">
            Vous souhaitez me contacter ?
          </h4>
          <div className="flex flex-wrap md:m-0 items-baseline gap-1.5">
            <p className="flex lg:justify-center gap-1.5 text-text-gray text-sm-body lg:text-body">
              Envoyez-moi un message à
            </p>
            <a
              className="text-text-gray text-sm-body lg:text-body hover:text-black"
              href="mailto:alex.m-m@outlook.com"
              title=""
            >
              alex.m-m@outlook.com
            </a>
          </div>
          <div className="flex justify-center pt-3 lg:py-5 gap-10 text-xl lg:text-2xl">
            <a
              href="https://github.com/Mutur16"
              target="_blank"
              className="group transition duration-300 hover:text-black"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/alexandra-marti-montessinos-469a9a19b/"
              target="_blank"
              className="group transition duration-300 hover:text-black"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
        <img className="m-auto w-0 lg:w-1/6" src={email} alt="" />
      </div>
    </div>
  )
}

export default Contact
