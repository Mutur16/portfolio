import { useState } from 'react'
import Header from './containers/Header'
import Footer from './containers/Footer'
import Contact from './containers/Contact'
import WixProjects from './containers/WixProjects'
import WixPricing from './containers/WixPricing'
import { useTranslation } from 'react-i18next'

function Wix() {
  const [, setTheme] = useState(localStorage.getItem('theme')!)
  const { t } = useTranslation()

  return (
    <>
      <Header setTheme={setTheme} />
      <div
        className="py-11 md:py-20 px-8 align-center font-body dark:bg-tertiary"
        id="wix"
      >
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row gap-20 md:gap-10 justify-center items-center mt-32 mb-20 text-primary-light dark:text-link">
            <h1 className="md:flex-1 md:text-4xl text-3xl uppercase font-name font-bold text-center">
              WIX
            </h1>
            <div className="md:flex-1 text-center text-sm-body lg:text-body">
              {t('wix.description')}
              <hr className="border-none mb-10" />
              <a
                href={t('wix.brochureLink')}
                target="_blank"
                className="cursor-pointer text-primary-light dark:text-white bg-secondary-light hover:bg-secondary hover:text-white dark:hover:bg-secondary-light dark:hover:text-primary-light dark:bg-secondary p-3 rounded-lg transition-all duration-500"
              >
                {t('wix.brochure')}
              </a>
            </div>
          </div>
        </div>
      </div>
      <WixProjects />
      <WixPricing />
      <Contact />
      <Footer />
    </>
  )
}

export default Wix
