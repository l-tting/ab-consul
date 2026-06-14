import HeroHome1 from "@/components/HeroHome1"
import HeroHome from "@/components/HeroHome"
import TrustedLogos from "@/components/PartnerLogo"
import Process from "@/components/Process"
import ResultsSection from "@/components/ProofOfVal"

const HomePage = () => {


    return (
        <div>
           

            {/* Hero comp */}
            <div>
                <HeroHome1 />
            </div>

            <div>
                <HeroHome />
            </div>

            

            {/* final CTA comp */}
            <div>
                <ResultsSection />
            </div>

            {/* Partnerships */}
            <div>
                <TrustedLogos />
            </div>



            {/* Process comp */}
            <div>
                <Process />
            </div>





        </div>
    )
}

export default HomePage
