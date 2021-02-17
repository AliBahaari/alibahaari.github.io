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
        روان شناسی خوانده ام با اینکه برای مسائل بنیادی انسان هیچ وقت جوابی پیدا نکردم،<br />
        بازار های مالی را تحلیل می کنم با استفاده از استراتژی MRM, استراتژی Ichimoku امواج و Elliott به سبک رابرت برکتر،<br />
        به برنامه نویسی Front-End + Python تسلط دارم،<br />
        به نرم افزار PsychoPy و برنامه نویسی آن تسلط دارم و تسک های نوروساینس می سازم و<br />
        با Adobe Ilustrator طراحی می کنم.
      </p>
    </div>
  );
}

export default Introduction;