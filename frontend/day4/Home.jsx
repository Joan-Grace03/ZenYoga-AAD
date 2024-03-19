import Background from "../components/Background"
import Gallery from "../components/Gallery"
import Counters from "../components/Counters"
import HeroSection from "../components/HeroSection"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
// import Carousel from "../components/Carousel"

const Home = () => {
    return (
        <div className="App">
            <Navbar/>
            <HeroSection/>
            <Counters/>
            <Background/>
            <Gallery/>
            {/* <Carousel/> */}
            <Footer/>
        </div>
    )
}
export default Home