import Header from './containers/Header'
import Footer from './containers/Footer'
import About from './containers/About'
import Contact from './containers/Contact'
import Projects from './containers/Projects'

import imgJour from './assets/jour.png'
import imgNuit from './assets/nuit.png'

import './main.css'
import './animation.css'

import { useState } from 'react'
import { useTranslation } from 'react-i18next'

function Portfolio() {
  const [theme, setTheme] = useState(localStorage.getItem('theme')!)
  const { t } = useTranslation()

  return (
    <>
      <Header setTheme={setTheme} />
      <div className="flex flex-col xl:flex-row h-screen px-4 overflow-hidden dark:bg-tertiary transition-all duration-500 z-0">
        <div className="flex flex-1 items-center justify-center xl:justify-end img-animation ">
          <img
            className="xl:w-2/4 sm:w-1/3 w-2/3 rounded-full border-4 md:border-8 border-primary-light dark:border-link mt-20 xl:mt-0 xl:mr-32 -rotate-3 dark:bg-secondary"
            src={theme === 'dark' ? imgNuit : imgJour}
            alt={t('profilePicture')}
          />
        </div>
        <div className="flex flex-1 flex-col items-center xl:items-start justify-start xl:justify-center gap-5 xl:gap-10 text-animation">
          <div className="text-center xl:text-start">
            <h1 className="2xl:text-4xl md:text-3xl text-2xl text-primary-light dark:text-link uppercase font-name font-bold ">
              Alexandra <hr className="border-none" /> Marti-Montessinos
            </h1>
          </div>
          <p className="font-body font-semibold text-primary-light dark:text-white bg-secondary-light dark:bg-secondary p-5 rounded-lg transition-all duration-500">
            {t('developer')}
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
