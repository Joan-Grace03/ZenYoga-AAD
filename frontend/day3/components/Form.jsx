import { Link } from "react-router-dom";
import { useState } from "react";

const Form = () => {
  const [formdata, setFormdata] = useState({
    uname: '',
    uemail: '',
    answer: ''
  })

   const handleChange = (e) => {
    e.preventDefault();
    setFormdata({ ...formdata, [e.target.id]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
  }
    return (
    <div className="form">
    <form onSubmit={handleSubmit}>
      <h1>CONTACT US</h1>
      <label>Your Name</label>
      <input type="text" placeholder="Name" name="uname" id="uname" onChange={handleChange} required></input>
      <label>Email</label>
      <input type="email" placeholder="Email ID" name="uemail" id="uemail" onChange={handleChange} required></input>
      <label>Message</label>
      <textarea name="answer" id="answer" rows="6" placeholder="Type your message here" onChange={handleChange} required/>
      <Link to='/'><button type = "submit" className="btn">Submit</button></Link>
    </form>
  </div>
    );
}
export default Form;