// Styles
import '../styles/Contact.css';

// Images
import Dribbble from '../images/dribbble.svg';
import GitHub from '../images/github.svg';
import Telegram from '../images/telegram.svg';
import Medium from '../images/medium.svg';
import LinkedIn from '../images/linkedin.svg';
import Twitter from '../images/twitter.svg';
import TradingView from '../images/tradingview.svg';
import Gmail from '../images/gmail.svg';

const Contact = () => {
  return (
    <div className="contact">
      <h2>
        ارتباط
      </h2>
      
      <div className="social-networks-icons">
        <a href="https://github.com/AliBahaari" id="github" target="_blank">
          <img src={ GitHub } alt="GitHub" />
        </a>
        <a href="https://dribbble.com/AliBahaari" id="dribbble" target="_blank">
          <img src={ Dribbble } alt="Dribbble" />
        </a>
        <a href="https://t.me/AliBahaari" id="telegram" target="_blank">
          <img src={ Telegram } alt="Telegram" />
        </a>
        <a href="https://alibahaari.medium.com" id="medium" target="_blank">
          <img src={ Medium } alt="Medium" />
        </a>
        <a href="https://linkedin.com/in/alibahaari" id="linkedin" target="_blank">
          <img src={ LinkedIn } alt="LinkedIn" />
        </a>
        <a href="https://twitter.com/AliBahaari" id="twitter" target="_blank">
          <img src={ Twitter } alt="Twitter" />
        </a>
        <a href="https://tradingview.com/u/AliBahaari" id="tradingview" target="_blank">
          <img src={ TradingView } alt="TradingView" />
        </a>
        <a href="mailto:alibahaari1997@gmail.com" id="gmail" target="_blank">
          <img src={ Gmail } alt="Gmail" />
        </a>                                              
      </div>
    </div>
  );
}

export default Contact;