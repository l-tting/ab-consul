
import AboutHero from "@/components/AboutHero"
import AboutContrast from "@/components/AboutHero2"
import TeamSection from "@/components/Team"

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
        </div>
    )
}

export default AboutPage