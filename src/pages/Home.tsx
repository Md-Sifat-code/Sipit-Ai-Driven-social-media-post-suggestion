import ContactForm from "../components/ContactForm"
import Page from "../components/FAQAccordion"
import Banner from "../components/Home-page/Banner"
import HowItWorks from "../components/Home-page/HowItWorks"
import SocialPostsMarquee from "../components/Home-page/PostCard"
import PricingPage from "../components/PricingPage"
import SiPTLandingPage from "../components/SiPTLandingPage"

const Home = () => {
  return (
    <div>
     <Banner />
     <SocialPostsMarquee/>
     <HowItWorks/>
     <SiPTLandingPage/>
     <PricingPage/>
     <Page/>
     <ContactForm/>
      
    </div>
  )
}

export default Home;


