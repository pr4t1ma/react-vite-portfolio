import {
  faGithub,
  faLinkedin,
  // faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SocialMediaIcon = () => {
  return (
    <div className="Social-icon flex justify-center  wrap-wrap gap-8 text-2xl ">
      <a href="https://github.com/pr4t1ma" target="_blank">
        <FontAwesomeIcon icon={faGithub} size="xl" />
      </a>

      <a href="https://www.linkedin.com/in/pratima-maharjan/" target="_blank">
        <FontAwesomeIcon icon={faLinkedin} size="xl" />
      </a>
    </div>
  );
};
