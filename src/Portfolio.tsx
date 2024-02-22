import Header from './components/Header'
import Footer from './components/Footer'
import About from './containers/About'
import Contact from './containers/Contact'
import Projects from './containers/Projects'

import imgJour from './assets/jour.png'
import imgNuit from './assets/nuit.png'

import './main.css'
import './animation.css'
import { useState } from 'react'

function Portfolio() {
  const [theme, setTheme] = useState(localStorage.getItem('theme')!)

  return (
    <>
      <Header setTheme={setTheme} />
      <div className="flex flex-col xl:flex-row h-screen px-4 overflow-hidden dark:bg-tertiary transition-all duration-500">
        <div className="flex flex-1 items-center justify-center xl:justify-end img-animation">
          <img
            className="xl:w-2/4 sm:w-1/3 w-2/3 rounded-full border-8 border-tertiary-light dark:border-primary mt-20 xl:mt-0 xl:mr-32 -rotate-3"
            src={theme === 'dark' ? imgNuit : imgJour}
            alt="Illustration d'Alexandra"
          />
        </div>
        <div className="flex flex-1 flex-col items-center xl:items-start justify-start xl:justify-center gap-5 xl:gap-10 text-animation">
          <div className="text-center xl:text-start">
            <h2 className="2xl:text-4xl md:text-3xl text-2xl text-tertiary-light dark:text-primary uppercase font-name font-bold ">
              Alexandra <hr className="border-none" /> Marti-Montessinos
            </h2>
          </div>
          <p className="font-body font-semibold text-tertiary-light dark:text-white bg-secondary-light dark:bg-secondary p-5 rounded-lg transition-all duration-500">
            Front-End Developer
          </p>
        </div>
      </div>
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default Portfolio
