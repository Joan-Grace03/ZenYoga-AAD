import background from '../assets/videos and images/background-2.jpg';
import gallery2 from '../assets/videos and images/gallery2.jpg';
import gallery3 from '../assets/videos and images/gallery3.jpg';
import gallery4 from '../assets/videos and images/gallery4.jpg';
const Gallery = () => {
    return(
        <div>
        <section className="g-wrapper">
          <br/>
          <p>Gallery</p>
          <br/>
        <div className="paddings innerWidth flexCenter g-container">
        <img src={background} alt="" />
        <img src={gallery3} alt="" />
        <img src={gallery2} alt="" />
        <img src={gallery4} alt="" />
      </div>
    </section>
        </div>
    )
}
export default Gallery;