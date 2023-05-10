import percent50 from "../assets/img/50percent.svg";
import percent55 from "../assets/img/55percent.svg";
import percent60 from "../assets/img/60percent.svg";
import percent65 from "../assets/img/65percent.svg";
import percent70 from "../assets/img/70percent.svg";
import percent75 from "../assets/img/75percent.svg";
import percent80 from "../assets/img/80percent.svg";
import percent85 from "../assets/img/85percent.svg";
import percent90 from "../assets/img/90percent.svg";
import percent95 from "../assets/img/95percent.svg";
import percent100 from "../assets/img/100percent.svg";
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

  const speed=3000;
  const autoplay=true;

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Habilidades</h2>
                        <p>Te invito a conocer algunas de mis habilidades,<br></br> todos los días aprendo algo nuevo.</p>
                        <h3 className="skills-topic-first">Lenguajes de Programación</h3>
                        <Carousel autoPlay={autoplay} autoPlaySpeed={speed} responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={percent80} alt="Image" />
                                <h5>C#</h5>
                            </div>
                            <div className="item">
                                <img src={percent80} alt="Image" />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={percent80} alt="Image" />
                                <h5>Kotlin</h5>
                            </div>
                        </Carousel>
                        <h3 className="skills-topic">Bases de Datos</h3>
                        <Carousel autoPlay={autoplay} autoPlaySpeed={speed} responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={percent70} alt="Image" />
                                <h5>MySQL</h5>
                            </div>
                            <div className="item">
                                <img src={percent70} alt="Image" />
                                <h5>PostgreSQL</h5>
                            </div>
                            <div className="item">
                                <img src={percent70} alt="Image" />
                                <h5>SQL Server</h5>
                            </div>
                            <div className="item">
                                <img src={percent70} alt="Image" />
                                <h5>Firebase RT Database</h5>
                            </div>
                            <div className="item">
                                <img src={percent60} alt="Image" />
                                <h5>Mongo DB</h5>
                            </div>
                            <div className="item">
                                <img src={percent50} alt="Image" />
                                <h5>Oracle Database</h5>
                            </div>
                        </Carousel>
                        <h3 className="skills-topic">Otras tecnologías</h3>
                        <Carousel autoPlay={autoplay} autoPlaySpeed={speed} responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={percent60} alt="Image" />
                                <h5>Flutter</h5>
                            </div>
                            <div className="item">
                                <img src={percent60} alt="Image" />
                                <h5>Xamarin</h5>
                            </div>
                            <div className="item">
                                <img src={percent50} alt="Image" />
                                <h5>React JS</h5>
                            </div>
                            <div className="item">
                                <img src={percent50} alt="Image" />
                                <h5>Ionic</h5>
                            </div>
                        </Carousel>
                        <h3 className="skills-topic">Ciencia de Datos</h3>
                        <Carousel autoPlay={autoplay} autoPlaySpeed={speed}  responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={percent70} alt="Image" />
                                <h5>Power BI</h5>
                            </div>
                            <div className="item">
                                <img src={percent60} alt="Image" />
                                <h5>SciPy</h5>
                            </div>
                            <div className="item">
                                <img src={percent60} alt="Image" />
                                <h5>Keras</h5>
                            </div>
                            <div className="item">
                                <img src={percent50} alt="Image" />
                                <h5>RStudio</h5>
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
