import React, { useState } from "react";
import axios from "axios";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [comment, setComment] = useState("");

  const handleFormSubmit = () => {
    console.log("name:", name);
    console.log("email:", email);
    console.log("mobile:", mobile);
    console.log("comment:", comment);

    if (name.length === 0) {
      alert("Name has left Blank");
    } else if (email.length === 0) {
      alert("email has left Blank");
    } else if (mobile.length === "") {
      alert("mobile has left Blank");
    } else if (comment.length === 0) {
      alert("comment has left Blank");
    } else {
      const url = "http://localhost/react/form.php";

      let fData = new FormData();
      fData.append("name", name);
      fData.append("email", email);
      fData.append("mobile", mobile);
      fData.append("comment", comment);

      axios.post( url , fData)
      .then(response => alert(response.data))
      .catch(error => {
        console.log(error)
        alert(error)});
    }
  };

  return (
    <div>
      <h1 className="heading-main">Contact US</h1>

      <div className="contact-form">
        <div className="contact-form-left">
          <h1>
            Showroom & Store <i className="fa-solid fa-store"></i>
          </h1>
          <h3>
            Address <i className="fa-solid fa-location-dot"></i>
          </h3>
          <p>Street 24 beside flipcart mart Mumbai India</p>
          <div className="contact-form-1">
            <div>
              <h3>
                Email <i className="fa-solid fa-envelope-open-text"></i>
              </h3>
              <p>shanu77199@gmail.com</p>
              <p>himanshu@gmial.com</p>
            </div>
            <div>
              <h3>
                Phone No <i className="fa-solid fa-phone"></i>
              </h3>
              <p>8959580638</p>
              <p>8819919096</p>
            </div>
          </div>
          <ul className="wrapper" style={{ marginTop: "30px" }}>
            <li className="icon facebook">
              <span className="tooltip">Facebook</span>
              <span>
                <i className="fab fa-facebook-f"></i>
              </span>
            </li>
            <li className="icon twitter">
              <span className="tooltip">Whatsapp</span>
              <span>
                <i className="fab fa-whatsapp"></i>
              </span>
            </li>
            <li className="icon instagram">
              <span className="tooltip">Instagram</span>
              <span>
                <i className="fab fa-instagram"></i>
              </span>
            </li>
          </ul>
        </div>

        <div className="contact-form-right">
          <h1>Contact Details </h1>

          <div>
            <p className="name">
              <input
                name="name"
                type="text"
                className="feedback-input"
                placeholder="Name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </p>

            <p className="email">
              <input
                name="email"
                type="text"
                className="feedback-input"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </p>

            <p className="email">
              <input
                name="number"
                type="text"
                className="feedback-input"
                id="mobile"
                placeholder="Mobile Number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </p>

            <p className="text">
              <input
                name="text"
                className="feedback-input"
                id="comment"
                placeholder="Comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </p>

            <div className="submit">
              <input
                type="button"
                id="button-blue"
                value="SEND !"
                onClick={handleFormSubmit}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="Map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.42105419023!2d72.56932960033654!3d19.08198853353541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1692810797964!5m2!1sen!2sin"
          width="95%"
          height="400"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
