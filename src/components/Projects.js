import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import HappyFruitApp from "../assets/img/happyfruit.webp";
import HappyFruitWeb from "../assets/img/happyfruitweb.png";
import Hexiwear from "../assets/img/hexiwear.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const mobileProjects = [
    {
      title: "Happy Fruit",
      description: "App para android con lector de códigos QR, TTS y galerías. Programada con Kotlin, haciendo uso de dependencias como Firebase Realtime Database, Google Maps, FireStore.",
      imgUrl: HappyFruitApp,
    },
  ];

  const webProjects = [
    {
      title: "Happy Fruit",
      description: "Sitio web de la empresa Happy Fruit. Se utilizaron tecnologías como PHP, HTML, JS, CSS. El despliegue se realizó en Sitegraound.",
      imgUrl: HappyFruitWeb,
    },
  ];

  const othersProjects = [
    {
      title: "Weareable para Smart Home",
      description: "Dispositivo wearable con reconocimiento de gestos para el control de dispositivos Smart Home. Desarrollado con librerias para ML en Python y Hexiwear como pataforma de hardware.",
      imgUrl: Hexiwear,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Proyectos</h2>
                <p>A continuación te detallo algunos de los proyectos en los que he colaborado.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Móvil</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Web</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Otros</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          mobileProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          webProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          othersProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
