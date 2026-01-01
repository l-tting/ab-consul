import React from 'react'
import PricingHero from '@/components/PriceHero'
import PricingCalculator from '@/components/PricingTiers'

const PricingPage = () => {
  return (
    <div>
        <div>
            <PricingHero/>
        </div>

        <div>
            <PricingCalculator/>
        </div>
      
    </div>
  )
}

export default PricingPage
