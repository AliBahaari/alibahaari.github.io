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
        I'm a Full Stack Developer who has expertise in JavaScript, TypeScript,
        React.js, React Native, Next.js, Redux (Toolkit), Zustand, RTK Query,
        TanStack Query, AG-Grid, Three.js, GSAP, Jest, React Testing Library,
        Express.js, NestJS, MySQL, Nginx and Git.
        <br />
        Certainly HTML and CSS (SCSS) are included alongside Tailwind CSS,
        Material UI, Bootstrap, etc. Also I have expertise in Python. Sometimes
        using Python ends up implementing Neuroscience tasks with PsychoPy
        software. Also I use Python for Web Crawling, Ethical Hacking, Financial
        Tools, etc.
        <br />
        In addition, I utilize Adobe Illustrator for Graphic Designing such as
        Logos, Vectors, Icons, etc. Surely, Adobe XD and Figma have been using
        for UIs.
        <br />
        At the end, I analyze Financial Markets. I use different approaches to
        do so simultaneously. My favorite one is Elliott.
      </p>
    </div>
  )
}

export default Introduction
