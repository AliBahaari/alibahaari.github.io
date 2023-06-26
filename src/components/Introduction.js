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
        Nowadays I'm a full-stack developer who is experienced in React.js,
        React-Native, Next.js, Node.js, JavaScript, TypeScript, Express.js,
        Nest.js, MySQL and Git. Certainly HTML and CSS (Sass and SCSS) are
        contained along with many libraries and frameworks as Tailwind CSS,
        Material UI and etc. Also I have worked with Python which caused
        creating cryptos trading bots, financial charts classic patterns
        detector bot, creating Neuroscience tasks with PsychoPy. I'm also an
        artist! I've worked with Adobe Illustrator for creating logos, vectors,
        icons and etc. For UI design, I've used Adobe XD and Figma too. At the
        end, technically I analyze financial charts which includes different
        approaches to do so. The approaches I’ve worked with and I will, are
        Elliott, MRM and Ichimoku. I confess, I love Elliott!
      </p>
    </div>
  );
};

export default Introduction;
