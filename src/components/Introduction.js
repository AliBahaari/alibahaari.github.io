// Styles
import '../styles/Introduction.css';

// Images
import Me from '../images/me.jpg';

const Introduction = () => {
  return (
    <div className="introduction">
      <img src={ Me } alt="Ali Bahaari" className="ali-bahaari-picture" />

      <h1>
        علی بهاری
      </h1>
      <p>
        روان شناسی خوانده ام با اینکه برای مسائل بنیادین انسان هیچ وقت جوابی پیدا نکردم،<br />
        بازار های مالی را با استفاده از استراتژی MRM، استراتژی Ichimoku و امواج Elliott به سبک Robert Prechter تحلیل می کنم،<br />
        به Python و فریمورک Django تسلط دارم,<br />
        به مباحث Front-End و به خصوص زبان JavaScript و پلتفرم Node.js تسلط دارم,<br />
        عاشق React و React Native هستم,<br />
        به نرم افزار PsychoPy و برنامه نویسی آن تسلط دارم و تسک های نوروساینس می سازم و<br />
        با Adobe Ilustrator طراحی می کنم.
      </p>
    </div>
  );
}

export default Introduction;