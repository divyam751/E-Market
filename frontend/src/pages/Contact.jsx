import "../styles/Contact.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage } from "../redux/features/contactSlice";
import contactImg from "../assets/images/contact/contactPerson.webp";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [inputMessage, setInputMessage] = useState("");

  const dispatch = useDispatch();
  const { status, message } = useSelector((state) => state.contact);

  console.log({ status, message });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(sendMessage({ name, email, message: inputMessage }));
    resetInputs();
  };
  const resetInputs = () => {
    setName("");
    setEmail("");
    setInputMessage("");
  };

  return (
    <div className="contact-container">
      <div className="contact-parentCard">
        <div className="contact-childCard">
          <img
            src={contactImg}
            alt="Contact Person"
            className="contact-image"
          />
          <form onSubmit={handleSubmit} className="contact-form">
            <h2>Contact Us</h2>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
              ></textarea>
            </div>
            <button type="submit" className="contact-submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
