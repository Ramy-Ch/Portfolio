import meter1 from "../assets/img/HTML5_logo.svg";
import meter2 from "../assets/img/CSS3_logo.svg";
import meter3 from "../assets/img/Javascript_logo.svg";
import meter4 from "../assets/img/MySQL_logo.svg";
import meter5 from "../assets/img/React_logo.svg";
import meter6 from "../assets/img/Tailwind_CSS_Logo.svg";
import meter7 from "../assets/img/Flag_of_France.svg";
import meter8 from "../assets/img/Flag_of_England.svg";
import meter9 from "../assets/img/Flag_of_Portugal.svg";
import meter10 from "../assets/img/Flag_of_Spain.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>I have learned different programming languages ​​so far and as far as my skills are concerned<br></br></p>
                        <Carousel 
  responsive={responsive} 
  infinite={true} 
  autoPlay={true} 
  autoPlaySpeed={1800} 
  arrows={true}
  className="owl-carousel owl-theme skill-slider"
>
    <div className="item">
        <img src={meter1} alt="Image" />
        <h5>HTML</h5>
    </div>
    <div className="item">
        <img src={meter2} alt="Image" />
        <h5>CSS</h5>
    </div>
    <div className="item">
        <img src={meter3} alt="Image" />
        <h5>Javascript</h5>
    </div>
    <div className="item">
        <img src={meter4} alt="Image" />
        <h5>MySQL</h5>
    </div>
    <div className="item">
        <img src={meter5} alt="Image" />
        <h5>React JS</h5>
    </div>
    <div className="item">
        <img src={meter6} alt="Image" />
        <h5>Tailwind CSS</h5>
    </div>
    <div className="item">
        <img src={meter7} alt="Image" />
        <h5>Français (langue maternelle)</h5>
    </div>
    <div className="item">
        <img src={meter8} alt="Image" />
        <h5>English (C2)</h5>
    </div>
    <div className="item">
        <img src={meter9} alt="Image" />
        <h5>Português (C1)</h5>
    </div>
    <div className="item">
        <img src={meter10} alt="Image" />
        <h5>Español (B2)</h5>
    </div>
</Carousel>

                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
