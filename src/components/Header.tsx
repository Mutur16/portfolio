import { ReactNode, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const navAnchors = [
  {
    title: 'Home',
    anchor: '/',
  },
  {
    title: 'About',
    anchor: '#about',
  },
  {
    title: 'Portfolio',
    anchor: '/',
  },
  {
    title: 'Contact',
    anchor: '/',
  },
]

function Header(): ReactNode {
  const [open, setOpen] = useState(false)
  const handleMenu = () => {
    setOpen((prev) => !prev)
  }
  const handleLinkClick = () => {
    setOpen(false)
  }
  return (
    <nav className="fixed top-0 w-full bg-white z-10">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <p className="text-black font-body text-xl font-bold uppercase">
              amm
            </p>
          </div>
          {/* navlinks */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navAnchors.map((anchor, index) => (
                <a
                  key={index}
                  className="text-text-gray transition-all duration-500 hover:text-black px-2 text-lg font-body"
                  href={anchor.anchor}
                >
                  {anchor.title}
                </a>
              ))}
            </div>
          </div>
          {/* hamburger button */}
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              onClick={handleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-black focus:outline-none"
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
                  className="text-gray-900 hover:text-black hover:bg-white px-3 py-2 font-medium font-body flex justify-end"
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
