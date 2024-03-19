import "../assets/css/PricingCardStyles.css";
import { Link } from 'react-router-dom';

const PricingCard = () => {
  return (
    <div className="pricing">
      <div className="card1">
        <h1>Courses</h1>
        </div>
    <div className="card1-container">
      <div className="card1">
        <h3>-  Hatha Yoga Certification Course  -</h3>
        <span className="bar"></span>
        <p className="btc">$ 200</p>
        <p>-  Develops strength, flexibility, and balance.  -</p>
        <p>-   Enhances mental clarity and focus.   -</p>
        <p>- Promotes relaxation and stress relief.  -</p>
        <p>- Instructor - Aria Sharma  -</p>
        <Link to="/services" className="btn">ENROLL NOW</Link>
      </div>

      <div className="card1">
        <h3>- Vinyasa Flow Yoga Certification Course  -</h3>
        <span className="bar"></span>                                            
        <p className="btc">$ 200</p>
        <p>- Improves cardiovascular health and endurance. -</p>
        <p>- Increases body awareness and mindfulness.   -</p>
        <p>-  Fosters creativity in sequencing and movement.  -</p>
        <p>- Instructor - Rishi Patel -</p>
        <Link to="/services" className="btn">ENROLL NOW</Link>
      </div>

      <div className="card1">
        <h3>- Yin Yoga Certification Course  -</h3>
        <span className="bar"></span>
        <p className="btc">$ 200</p>
        <p>-  Targets deep connective tissues for improved flexibility.  -</p>
        <p>- Facilitates emotional healing and relaxation.  -</p>
        <p>-  Enhances joint mobility and reduces stiffness. -</p>
        <p>- Instructor - Ananda Devi  -</p>
        <Link to="/services" className="btn">ENROLL NOW</Link>
      </div>
      <div className="card1">
        <h3>- Ashtanga Yoga Certification Course  -</h3>
        <span className="bar"></span>
        <p className="btc">$ 200</p>
        <p>-  Builds physical strength, stamina, and endurance.  -</p>
        <p>- Improves flexibility and body alignment.  -</p>
        <p>- Promotes mental discipline and concentration. -</p>
        <p>- Instructor - Maya Singhania  -</p>
        <Link to="/services" className="btn">ENROLL NOW</Link>
      </div>
      <div className="card1">
        <h3>- Kundalini Yoga Certification Course  -</h3>
        <span className="bar"></span>
        <p className="btc">$ 200</p>
        <p>-  Stimulates energy flow and balances chakras.  -</p>
        <p>- Strengthens the nervous system and boosts vitality.  -</p>
        <p>-  Cultivates inner peace and spiritual awareness. -</p>
        <p>- Instructor - Ananya Gupta -</p>
        <Link to="/services" className="btn">ENROLL NOW</Link>
      </div>
      <div className="card1">
        <h3>- Restorative Yoga Certification Course  -</h3>
        <span className="bar"></span>
        <p className="btc">$ 200</p>
        <p>-  Supports deep relaxation and rejuvenation.  -</p>
        <p>-  Alleviates tension and promotes healing. -</p>
        <p>-  Enhances sleep quality and overall well-being. -</p>
        <p>- Instructor - Siddhartha Gupta  -</p>
        <Link to="/services" className="btn">ENROLL NOW</Link>
      </div>


    </div>
  </div>
  );
};

export default PricingCard;
