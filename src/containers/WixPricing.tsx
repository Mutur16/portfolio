import { ReactNode } from 'react'
import { PricingCard } from '../components/PricingCard'
import { useTranslation } from 'react-i18next'

const pricingDetails: WixPricingType[] = [
  {
    title: 'wix.price.simple.name',
    price: '350€',
    details: [
      'wix.price.simple.one',
      'wix.price.simple.two',
      'wix.price.simple.three',
    ],
  },
  {
    title: 'wix.price.intermediate.name',
    price: '800€',
    details: [
      'wix.price.intermediate.one',
      'wix.price.intermediate.two',
      'wix.price.intermediate.three',
      'wix.price.intermediate.four',
    ],
  },
  {
    title: 'wix.price.advanced.name',
    price: 'wix.price.advanced.request',
    details: ['wix.price.advanced.one', 'wix.price.advanced.two'],
  },
]

function WixPricing(): ReactNode {
  const { t } = useTranslation()

  return (
    <div className="py-11 md:py-20 px-8 align-center font-body dark:bg-tertiary">
      <div className="max-w-screen-2xl mx-auto">
        <h2 className="flex text-sm-body lg:text-body font-bold uppercase md:pb-5 text-primary-light dark:text-primary gap-4">
          <span className="block mt-3 w-5 h-0.5 lg:mt-3 lg:w-7 bg-primary-light dark:bg-primary"></span>
          {t('wix.priceTitle')}
        </h2>
        <div className="flex flex-col xl:flex-row gap-12 xl:gap-24 mt-12">
          {pricingDetails.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              price={plan.price}
              details={plan.details}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default WixPricing

export type WixPricingType = {
  title: string
  price: string
  details: string[]
}
