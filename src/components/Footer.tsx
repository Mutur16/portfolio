import { ReactNode } from 'react'

function Footer(): ReactNode {
  return (
    <footer className=" bg-dark-gray px-8 py-3 md:py-11">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:justify-between text-white font-body">
          <p className="text-xl font-bold uppercase">AMM</p>
          <p className="">Copyright © 2024 by Alexandra MM</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
