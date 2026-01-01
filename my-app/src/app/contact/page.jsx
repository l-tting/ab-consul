import ContactHero from "@/components/ContactHero"
import ContactBody from "@/components/ContactBody"
import ContactTrust from "@/components/FAQContact"

const ContactPage = () => {

    return (
        <div> 
            {/* Hero */}
            <div>
                <ContactHero/>
            </div>

            {/* Contact Form */}
            <div>
                <ContactBody/>
            </div>

                {/* FAQ */}
            <div>
                <ContactTrust/>
            </div>
        </div>
    )
}


export default ContactPage