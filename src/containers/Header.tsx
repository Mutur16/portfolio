import { ReactNode, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FaBars, FaMoon, FaSun, FaTimes } from 'react-icons/fa'
import LanguageSelector from '../components/LanguageSelector'

const navAnchors = [
  {
    title: 'header.navbar.home',
    anchor: '/',
  },
  {
    title: 'header.navbar.about',
    anchor: '#about',
  },
  {
    title: 'header.navbar.portfolio',
    anchor: '#portfolio',
  },
  {
    title: 'header.navbar.contact',
    anchor: '#contact',
  },
]

function Header({ setTheme }: HeaderProps): ReactNode {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const handleMenu = () => {
    setOpen((prev) => !prev)
  }
  const handleLinkClick = () => {
    setOpen(false)
  }

  function darkTheme() {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
    setTheme('dark')
  }

  function lightTheme() {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
    setTheme('light')
  }

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-tertiary z-10 transition-all duration-500">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <span className="text-black dark:text-primary font-body text-xl md:text-2xl font-bold uppercase transition-all duration-500">
              amm
            </span>
            <div className="flex md:ml-4">
              <button onClick={darkTheme} className="dark:hidden">
                <FaMoon />
              </button>
              <button
                onClick={lightTheme}
                className="hidden dark:text-link dark:hover:text-white dark:flex"
              >
                <FaSun />
              </button>
            </div>
            <LanguageSelector />
          </div>
          {/* navlinks */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navAnchors.map((anchor, index) => (
                <a
                  key={index}
                  className="text-primary-light dark:text-link transition-all duration-300 hover:text-black dark:hover:text-white px-2 text-lg font-body"
                  href={anchor.anchor}
                >
                  {t(anchor.title)}
                </a>
              ))}
            </div>
          </div>
          {/* hamburger button */}
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              onClick={handleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-black dark:text-primary hover:text-black focus:outline-none"
            >
              <span className="sr-only">Open</span>
              {open == true ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
        {/* mobile-menu */}
        {open ? (
          <div className="md:hidden">
            <div className="ox-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navAnchors.map((anchor) => (
                <a
                  className="text-primary-light hover:text-black hover:bg-white px-3 py-2 font-medium font-body flex justify-end"
                  href={anchor.anchor}
                  onClick={handleLinkClick}
                >
                  {anchor.title}
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  )
}

export default Header

type HeaderProps = {
  setTheme: HeaderSetTheme
}

type HeaderSetTheme = {
  (theme: 'dark' | 'light'): void
}
