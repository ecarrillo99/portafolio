import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import { HashLink } from 'react-router-hash-link';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Router } from "react-router-dom";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "<Desarrollador/>", "<Ingeniero en TI/>"];
  const period = 500;


  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(period);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn text-center" : "text-center text-sm-start"}>
                <span className="tagline ">Bienvenidos a mi portafolio</span>
                <h1 className="texto-encabezado">{`Hola! Soy Edisson`} </h1>
                <h1 className="texto-encabezado"><span className="txt-rotate texto-encabezado" dataPeriod="1000" data-rotate='[ "Desarrollador", "Full Stack en proceso"]'><span className="wrap">{text}</span></span></h1>
                {/*<h1 className="texto-encabezado text-center text-sm-start">Hola! me llamo Edisson <br/>&lt;Desarrollador/&gt; </h1>*/}
                <p >Un desarrollador Junior con experiencia en el desarrollo de aplicaciones móviles, con ganas de aprender mucho más y convertirme en Full-Stack Developer.</p>
                      {/*<button onClick={window.location.href = "#connect"}>Contáctame <ArrowRightCircle size={25} /></button>*/}
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={ isVisible ? "animate__animated animate__zoomIn text-center" : "text-center text-sm-start"}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
