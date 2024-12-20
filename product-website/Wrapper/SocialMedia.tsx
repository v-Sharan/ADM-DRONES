import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const SocialMedia = () => (
  <div className="app__social">
    <a href="mailto:mspacedrone@gmail.com" target={"_blank"}>
      <AiOutlineMail />
    </a>
    <a href="tel:+91 9363901791" target={"_blank"}>
      <BsWhatsapp />
    </a>
  </div>
);

export default SocialMedia;
