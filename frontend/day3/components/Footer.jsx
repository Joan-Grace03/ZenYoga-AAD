import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate()
  const contactRoute = () => {
        navigate('/contact')
    }
    const coursesRoute = () => {
        navigate('/courses')
    }
    const admissionRoute = () => {
        navigate('/admission')
    }
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <span className="primaryText">
             Explore enlightening resources that illuminate   <br />
             mindfullness, wellness, and self-discovery at ZenYoga.</span>
        </div>

        <div className="flexColStart f-right">
          <span className="secondaryText">Information</span>
          <span className="primaryText">Coimbatore, Kovaiputhur </span>
          <div className="flexCenter f-menu">
            <div className='f-hover' onClick={coursesRoute}>Courses</div>
            <div className='f-hover' onClick={admissionRoute}>Admissions</div>
            <div className='f-hover' onClick={contactRoute}>Contact Us</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;