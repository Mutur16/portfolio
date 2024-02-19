import { ReactNode } from 'react'
import ActiveSlider from '../components/ActiveSlider'

function Projects(): ReactNode {
  return (
    <div id="portfolio" className="py-11 md:py-20 px-8 align-center font-body">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col gap-10">
          <h3 className="flex text-sm-body lg:text-body font-bold uppercase md:pb-5 text-text-gray gap-4">
            <span className="block mt-3 w-5 h-0.5 lg:mt-3 lg:w-7 bg-text-gray"></span>
            Portfolio
          </h3>
          <ActiveSlider />
        </div>
      </div>
    </div>
  )
}

export default Projects