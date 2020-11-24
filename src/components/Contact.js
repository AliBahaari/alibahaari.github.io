// Styles
import '../styles/Contact.css';

// Images
import Dribbble from '../images/dribbble.svg';
import GitHub from '../images/github.svg';
import Instagram from '../images/instagram.svg';
import Telegram from '../images/telegram.svg';
import Twitter from '../images/twitter.svg';

const Contact = () => {
  return (
    <div className="contact">
      <h2>
        ارتباط
      </h2>
      
      <div className="social-networks-icons">
        <a href="https://github.com/AliBahaari" id="github">
          <img src={ GitHub } alt="GitHub" />
        </a>
        <a href="https://dribbble.com/AliBahaari" id="dribbble">
          <img src={ Dribbble } alt="Dribbble" />
        </a>
        <a href="https://instagram.com/AliBahaari" id="instagram">
          <img src={ Instagram } alt="Instagram" />
        </a>
        <a href="https://www.twitter.com/AliBahaari" id="twitter">
          <img src={ Twitter } alt="Twitter" />
        </a>
        <a href="https://t.me/AliBahaari" id="telegram">
          <img src={ Telegram } alt="Telegram" />
        </a>
      </div>
    </div>
  );
}

export default Contact;