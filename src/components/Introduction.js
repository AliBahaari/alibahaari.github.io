// Styles
import "../styles/Introduction.css";

// Images
import Me from "../images/me.jpg";

const Introduction = () => {
  return (
    <div className="introduction">
      <div className="picture-frame">
        <img src={Me} alt="Ali Bahaari" className="ali-bahaari-picture" />
      </div>

      <h1>This Is Me! Ali Bahaari...</h1>
      <p>
        Nowadays I'm a front-end developer who is experienced in React.js,
        Next.js, Node.js, JavaScript, Git and Git Flow. I'm familiar with
        Vue.js, Nuxt.js and AngularJS. Certainly HTML and CSS (Sass and SCSS)
        are contained along with many libraries and frameworks as Tailwind CSS,
        Material UI and etc.
        <br />
        Also I have worked with Python which caused creating cryptos trading
        bots, detecting financial charts classic patterns, creating neuroscience
        tasks with PsychoPy and etc.
        <br />
        Blockchain concepts, related platforms programming languages specially
        Solidity and bringing them into web by using Ethers.js, HardHat and etc.
        are my another favorite hobbies.
        <br />
        Also, I’m learning Flutter for creating Android and iOS applications by
        using Dart programming language.
        <br />
        I'm also an artist! I've worked with Adobe Illustrator for creating
        logos, vectors, icons and etc. For UI, I've used Adobe XD and Figma too.
        <br />
        At the end, technically I analyze financial charts which has different
        approaches. The approaches I’ve worked with and I would are MRM,
        Ichimoku and Elliott. I confess, I love Elliott!
      </p>
    </div>
  );
};

export default Introduction;
