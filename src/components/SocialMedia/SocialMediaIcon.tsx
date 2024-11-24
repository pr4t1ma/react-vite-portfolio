import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  // faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SocialMediaIcon = () => {
  return (
    <div className="Social-icon flex justify-center mb-10 wrap-wrap gap-5 text-2xl ">
      <a href="https://www.facebook.com/pr4tima">
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a href="https://www.instagram.com/prati.ma/">
        {" "}
        <FontAwesomeIcon icon={faInstagram} />
      </a>

      {/* <FontAwesomeIcon icon={Github} /> */}
      <a href="https://github.com/pr4t1ma">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      {/* <FontAwesomeIcon icon={LinkedIn} /> */}
      <a href="https://www.linkedin.com/in/pratima-maharjan/">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
    </div>
  );
};
