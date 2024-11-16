// Styles
import '../styles/Introduction.css'

// Images
import Me from '../images/me.jpg'

const Introduction = () => {
  return (
    <div className="introduction">
      <div className="picture-frame">
        <img src={Me} alt="Ali Bahaari" className="ali-bahaari-picture" />
      </div>

      <h1>This is me! Ali Bahaari..</h1>
      <p>
        I am a skilled full stack and mobile developer with extensive experience
        in various technologies, including frameworks and libraries.
        <br />
        My expertise in Python allows me to handle a wide range of tasks, from
        Neuroscience experiments with PsychoPy software to web crawling, ethical
        hacking, and financial bots development.
        <br />I am also passionate about analyzing financial markets, using
        multiple approaches with a special interest in the Elliott.
      </p>
    </div>
  )
}

export default Introduction
