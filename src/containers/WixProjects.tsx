import { ReactNode } from 'react'
import { WixCard } from '../components/WixCard'

import yoga from '../assets/wix/yoga.webp'
import cafe from '../assets/wix/cafe.webp'
import wachaya from '../assets/wix/wachaya.png'

const wixDetails: WixProjectType[] = [
  {
    image: yoga,
    title: 'wix.portfolio.yoga.title',
    name: 'wix.portfolio.yoga.name',
    site: 'https://alexandrammdev.wixsite.com/lorem-yoga',
  },
  {
    image: cafe,
    title: 'wix.portfolio.cafe.title',
    name: 'wix.portfolio.cafe.name',
    site: 'https://alexandrammdev.wixsite.com/lorem-cafe',
  },
  {
    image: wachaya,
    title: 'wix.portfolio.wachaya.title',
    name: 'wix.portfolio.wachaya.name',
    site: 'https://wachaya.com/',
  },
]

function WixProjects(): ReactNode {
  return (
    <div
      id="portfolio"
      className="py-11 md:py-20 px-8 align-center font-body transition-all duration-500 bg-secondary-light dark:bg-secondary"
    >
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col gap-10">
          <h2 className="flex text-sm-body lg:text-body font-bold uppercase md:pb-5 text-primary-light dark:text-primary gap-4">
            <span className="block mt-3 w-5 h-0.5 lg:mt-3 lg:w-7 bg-primary-light dark:bg-primary"></span>
            Portfolio
          </h2>
          <div className="flex flex-col xl:flex-row gap-12 md:gap-24 mt-2">
            {wixDetails.map((wix, index) => (
              <WixCard
                key={index}
                image={wix.image}
                title={wix.title}
                name={wix.name}
                site={wix.site}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default WixProjects

export type WixProjectType = {
  image: string
  title: string
  name: string
  site: string
}
