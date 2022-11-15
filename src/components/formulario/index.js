import React, { useRef } from "react";
import {
  FormButton,
  FormH2,
  FormInput,
  FormSectionDiv,
  FormTextArea,
  StyledForm,
} from "./Form.styled";
import emailjs from "@emailjs/browser";

//pruebaemailjs0@gmail.com     Akamaru//

const Form = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
    .sendForm(
      process.env.React_App_Service_IP,
      process.env.React_App_Template_ID,
      form.current,
      process.env.React_App_Public_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
        alert('Email sent successfully'),
        );
    e.target.reset();
  };

  return (
    <FormSectionDiv id="contact">
      <FormH2>CONTACTO</FormH2>
      <StyledForm ref={form} onSubmit={sendEmail}>
        <FormInput type="text" placeholder="Nombre" name="user_name" />
        <FormInput type="email" placeholder="Email" name="user_email" />
        <br />
        <FormTextArea
          name="message"
          cols="30"
          rows="10"
          placeholder="Déjanos tu mensaje"
        ></FormTextArea>
        <br />
        <FormButton type="submit">Enviar</FormButton>
      </StyledForm>
    </FormSectionDiv>
  );
};

export default Form;
