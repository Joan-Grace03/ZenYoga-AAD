import yoga from '../assets/videos and images/hero.jpg'
// import HeroSection2 from './HeroSection2';

const HeroSection = () => {
    return (
        <>
        <div className='hero-wrapper'>
       <div className="hero">
            <div className="mask">
                <img className="into-img"
                src={yoga} alt="background"/>
            </div>
            <div className="content">
                <p>THE</p>
                <h1>Power of ZenYoga</h1>
                <p>Your path to inner peace and holistic wellness through yoga.</p>
            </div>
        </div>
        </div>
        </>
    );
}
export default HeroSection