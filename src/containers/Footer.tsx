import { ReactNode } from 'react'

function Footer(): ReactNode {
  return (
    <footer className=" bg-primary-light dark:bg-tertiary px-8 py-3 md:py-11 transition-all duration-500">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:justify-between text-primary font-body">
          <span className="text-xl font-bold uppercase">AMM</span>
          <span className="">Copyright © 2024 by Alexandra MM</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
