 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const SocialLogin = () => {
  return (
    <div className="social-login">
      <button className="social-button">
        {/* Use Font Awesome icon for Google */}
        <FontAwesomeIcon icon={faGoogle} alt="Google" />
        Google
      </button>
      <button className="social-button">
      <FontAwesomeIcon icon={faFacebook} alt="Google" />
        Facebook
      </button>
    </div>
  );
};

export default SocialLogin;