import React from "react";
import { useDispatch } from "react-redux";
import { Input, Form } from "@rocketseat/unform";
import { Link } from "react-router-dom";

import {
  Container,
  ContainerInput,
  ImageSection,
  ElementsContainer,
} from "./styles";

import * as Yup from "yup";
import { signUpRequest } from "../../store/modules/auth/actions";

import draw from '../../assets/draw.svg'

const schema = Yup.object().shape({
  name: Yup.string().required("O campo nome é obrigatório."),
  email: Yup.string()
    .email("Insira um e-mail válido")
    .required("O campo e-mail é obrigatório."),
  password: Yup.string().required("O campo senha é obrigatório."),
});

function Register() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }
  return (
    <Container>

      <ElementsContainer>
        <ImageSection>
          <img src={draw} alt="ilustração" />
        </ImageSection>
        <ContainerInput>
          <h2>Cadastre-se</h2>
          <p>Informe seus dados para realizar seu cadastro.</p>
          <Form schema={schema} onSubmit={handleSubmit}>
            <Input name="name" label="Nome" type="text" />
            <Input name="email" label="Email" type="email" />
            <Input name="password" label="Senha" type="password" />
            <button type="submit">Cadastrar</button>
            <Link to="/">Já possuo cadastro</Link>
          </Form>
        </ContainerInput>
      </ElementsContainer>
    </Container>
  );
}

export default Register;
