import { useState } from "react";
import "./contact.scss";
import {LinkedIn,MailOutline,GitHub,Twitter,LocalPhone} from "@material-ui/icons"

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
        <div className="links">
        <div className="linkedin"><a href="https://linkedin.com/in/nitishkrvrma"><LinkedIn style={{color : "blue"}}></LinkedIn></a></div>
        <div className="mail"><a href="mailto: nitish.kvrma@gmail.com"><MailOutline/></a></div>
        <div className="git"><a href="https://github.com/nitishVrma"><GitHub></GitHub></a></div>
        <div className="twitter"><a href="https://twitter.com/nkvorion"><Twitter></Twitter></a></div>
        <div className="twitter"><a href="tel:7860379662"><LocalPhone></LocalPhone></a></div>
        </div>
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}
