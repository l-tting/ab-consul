
import AboutHero from "@/components/AboutHero"
import AboutContrast from "@/components/AboutHero2"
import TeamSection from "@/components/Team"
import StrategicVelocity from "@/components/AboutMethodology"
import AboutClosing from "@/components/AboutClosing"

const AboutPage = () => {
    return (
        <div>
           <div>
                <AboutHero/>
           </div>
           
           <div>
            <TeamSection/>
           </div>
           <div>
                <AboutContrast/>
           </div>
           <div>
                <StrategicVelocity/>
           </div>
           <div>
                <AboutClosing/>
           </div>
        </div>
    )
}

export default AboutPage