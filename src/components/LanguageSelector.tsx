import { useTranslation } from 'react-i18next'
import { ReactNode, useState } from 'react'

const lngs = {
  en: { nativeName: 'English' },
  fr: { nativeName: 'Français' },
  jp: { nativeName: '日本語' },
}

const LanguageSelector = (): ReactNode => {
  const { i18n } = useTranslation()
  const [open, setOpen] = useState(false)

  const handleLanguageChange = (lng: string) => {
    i18n.changeLanguage(lng)
    setOpen(false)
  }

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="inline-flex justify-center w-full rounded-full border-gray-300 dark:border-primary px-4 py-2 bg-white dark:bg-tertiary text-sm text-black dark:text-primary hover:bg-gray-50 dark:hover:bg-secondary font-body transition-all duration-500"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
        >
          {i18n.resolvedLanguage === 'en' && 'EN'}
          {i18n.resolvedLanguage === 'fr' && 'FR'}
          {i18n.resolvedLanguage === 'jp' && 'JP'}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {open && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white dark:bg-tertiary ring-1 ring-black ring-opacity-5"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            {Object.keys(lngs).map((lng) => (
              <button
                key={lng}
                onClick={() => handleLanguageChange(lng)}
                className={`block py-2 text-sm w-full text-gray-700 dark:text-primary ${
                  i18n.language === lng
                    ? 'bg-gray-100 dark:bg-secondary w-full'
                    : ''
                } hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-secondary`}
                role="menuitem"
              >
                {lngs[lng as keyof typeof lngs].nativeName}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default LanguageSelector
