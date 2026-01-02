import React from 'react'
import PricingHero from '@/components/PriceHero'
import PricingCalculator from '@/components/PricingTiers'
// import SuccessPage from '@/components/PriceComp'
import PricingCTA from '@/components/PriceComp'

const PricingPage = () => {
  return (
    <div>
        <div>
            <PricingHero/>
        </div>

        <div>
            <PricingCalculator/>
        </div>

        {/* <div>
            <SuccessPage/>
        </div> */}
         {/* <div>
            <PricingCTA/>
        </div> */}
      
    </div>
  )
}

export default PricingPage
