import ServicesPricingHero from "@/components/ServicesPricingHero"
import ServiceGrid  from "@/components/ServicesGrid"
import { TechnicalHandover } from "@/components/TechnicalHandover"
import  IndustrySpecializations  from "@/components/ServicesSpecializations"

const ServicesPage = () => {

    return (
        <div> 
            <div>
               <ServicesPricingHero/>
            </div>
            <div>
                <ServiceGrid/>
            </div>
           
            <div>
                <IndustrySpecializations/>
            </div>
             <div>
                <TechnicalHandover/>
            </div>
        </div>
    )
}


export default ServicesPage