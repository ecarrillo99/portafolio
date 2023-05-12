import { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser'

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Enviar');
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  /*const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Enviando...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Enviado");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code == 200) {
      setStatus({ succes: true, message: 'Mensaje enviado correctamente'});
    } else {
      setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
    }
  };**/

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    setButtonDisabled(true);
    setButtonText("Enviando...");
    emailjs.sendForm('service_whc29k9', 'template_tvnpp2w', form.current, 'EV6oGPV_iQn6Irbsa')
      .then((result) => {
          setButtonText("Enviado");
          setFormDetails(formInitialDetails);
          setStatus({ succes: true, message: 'Mensaje enviado correctamente.'});
          setButtonDisabled(false);
      }, (error) => {
        setStatus({ succes: false, message: 'Ha ocurrido un error. Por favor, intente más tarde.'});
        setButtonDisabled(false);
      });
  };


  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2 className="text-center">Contáctame</h2>
                <form  ref={form} onSubmit={sendEmail}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input required type="text" name= "name" value={formDetails.firstName} placeholder="Nombres" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input required type="text" name= "lastName" value={formDetails.lastName} placeholder="Apellidos" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input required type="email" name= "email" value={formDetails.email} placeholder="Correo" onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input required type="tel" name= "tel" value={formDetails.phone} placeholder="Teléfono" onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                    </Col>
                    <Col size={12} className="px-1 text-center">
                      <textarea required rows="6"  name= "message" value={formDetails.message} placeholder="Mensaje" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                      {
                      status.message &&
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      }
                      <button  type="submit" disabled={buttonDisabled}  ><span>{buttonText}</span></button>
                    </Col>
                    
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
