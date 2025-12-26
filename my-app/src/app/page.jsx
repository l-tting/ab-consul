import HeroHome from "@/components/HeroHome"
import TrustedLogos from "@/components/PartnerLogo"
import Process from "@/components/Process"

const HomePage = () => {
    return (
        <div>
             <section className="ml-4">
                <p className="text-xl font-medium uppercase tracking-widest text-muted-foreground mb-2 mt-4">
                    AB CONSUL
                </p>

                <h2 className="text-xl font-semibold tracking-tight mb-6">
                    Consulting services built for modern teams
                </h2>

                
             </section> 


            <HeroHome />
            <TrustedLogos/>
            <Process/>

        </div>
    )
}

export default HomePage
