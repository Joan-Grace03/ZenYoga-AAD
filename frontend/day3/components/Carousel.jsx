import gallery1 from '../assets/videos and images/gallery1.jpg'
import Slider from "react-slick";
const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <div className='slider-container'>
      <div className="silder-item">
      <Slider {...settings}>
        {data.map((d) => (
          <div key={d.name} className="slider-image">
            <div className='image-container'>
              <img src={d.img} alt="" className="slider-image"/>
            </div>

            <div className="slider-content">
              <p className="title">{d.name}</p>
              <p className="description">{d.review}</p>
              <button className='read-more-btn'>Read More</button>
            </div>
          </div>
        ))}
      </Slider>
      </div>
      
    </div>
  );
}
export default Carousel;

const data = [
  {
    name: 'John Morgan',
    img: {gallery1},
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Ellie Anderson`,
    img: `/students/Ellie_Anderson.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Nia Adebayo`,
    img: `/students/Nia_Adebayo.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Rigo Louie`,
    img: `/students/Rigo_Louie.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Mia Williams`,
    img: `/students/Mia_Williams.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  
];