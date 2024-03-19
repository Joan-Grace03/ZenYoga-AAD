import {motion} from "framer-motion"; 
import yoga from '../assets/videos and images/gallery1.jpg'
const Background = () => {
    return (
        <div className="paddings innerWidth flexCenter v-container">
        <div className="flexCenter hero-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 7,
              type: "ease-in",
            }}
            className="image-container"
          >
            <img src={yoga} alt="houses" />
          </motion.div>
        </div>
        <div className="flexColStart v-right">
          <span className="secondaryText">Our Background</span>


          <span className="primaryText">
            Welcome to ZenYoga, your sanctuary for holistic wellness and inner transformation. 
            Immerse yourself in a world of serenity, where ancient wisdom meets modern mindfulness. 
            From gentle flows to dynamic sequences, each session invites you to explore your inner landscape and cultivate a deeper connection with yourself. 
            Our experienced instructors guide you on a journey of self-discovery and personal growth, empowering you to unlock your full potential. 
            Embrace the harmony of breath and movement, and awaken your inner peace and vitality with ZenYoga.
          </span>
          </div>
        </div>
    )
}
export default Background;