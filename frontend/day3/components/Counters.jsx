import CountUp  from "react-countup";
const Counters = () => {
    return (
        <div className="c-wrapper">
            <div className="paddings innerWidth flexCenter c-container">
            <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={0} end={100} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Certified Trainers</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={0} end={50} duration={7} /> <span>+</span>
              </span>
              <span className="secondaryText">Premium Courses</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={1950} end={2000} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Happy Students</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={28} /> <span>+</span>
              </span>
              <span className="secondaryText">Awards Won</span>
            </div>
          </div>
            </div>
        </div>
    )
}
export default Counters;