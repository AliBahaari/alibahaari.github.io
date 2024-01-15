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

      <h1>This Is Me! Ali Bahaari...</h1>
      <p>
        I'm a Full Stack developer who has expertise in JavaScript, TypeScript,
        Node.js, React.js, React-Native, Next.js, Jest, Express.js, NestJS,
        MySQL, Nginx and Git. Certainly HTML and CSS (Sass and SCSS) are
        included alongside many frameworks and libraries such as Tailwind CSS,
        Material UI, Bootstrap, etc. Also I have expertise in Python. Sometimes
        using Python ends up implementing Neuroscience tasks with PsychoPy
        software. Also I use Python for Web Crawling, Ethical Hacking, Financial
        Tools, etc. In addition, I utilize Adobe Illustrator for Graphic
        Designing such as Logos, Vectors, Icons. Surely, Adobe XD and Figma have
        been using for UIs. At the end, I analyze Financial Markets. I use
        different approaches to do so simultaneously. Favorites are Elliott, MRM
        and Ichimoku.
      </p>
    </div>
  )
}

export default Introduction
