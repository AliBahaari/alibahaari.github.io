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
        I'm a full-stack developer who has expertise in JavaScript, TypeScript,
        React.js, React Native, Next.js, Redux (Toolkit), Zustand, RTK Query,
        TanStack Query, AG-Grid, Three.js, GSAP, Jest, React Testing Library,
        Express.js, NestJS, MySQL, Nginx and Git. Certainly HTML and CSS (SCSS)
        are included alongside Tailwind CSS, Material UI, Bootstrap, etc.
        <br />
        Also I have expertise in Python. Sometimes using Python ends up
        implementing Neuroscience tasks with PsychoPy software. Also I use
        Python for web crawling, ethical hacking, financial tools, etc.
        <br />
        In addition, I utilize Adobe Illustrator for graphic design such as
        logos, vectors, icons, etc. Surely, Adobe XD and Figma have been using
        for UIs.
        <br />
        At the end, I analyze financial markets. I use different approaches to
        do so simultaneously. My favorite one is Elliott.
      </p>
    </div>
  )
}

export default Introduction
