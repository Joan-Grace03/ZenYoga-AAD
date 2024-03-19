import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {motion} from 'framer-motion'
import Form from "../components/Form";
import yoga from '../assets/videos and images/gallery2.jpg'
import '../assets/css/Contact.css'
const Contact = () => {
  return (
    <>
    <Navbar/>
    <div className="paddings innerWidth flexCenter1 c-container1">
        <div className="flexCenter1 c-right1">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 7,
              type: "ease-in",
            }}
            className="image-container1"
          >
            <img src={yoga} alt="houses" />
          </motion.div>
        </div>
        <div className="flexColStart1 c-right1">
            <Form/>
          </div>
        </div>
      <Footer/>
    </>
  )
}

export default Contact;