import React from 'react';
import {Input, Form} from '@rocketseat/unform'
import * as Yup from 'yup'

const schema = Yup.object().shape({
  name: Yup.string()
  .required('O campo nome é obrigatório.'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O campo e-mail é obrigatório.'),
  password: Yup.string()
    .required('O campo senha é obrigatório.')
}
)

function Register() {
  function handleSubmit(data){
    console.log(data)
  }
  return (
    <div>
      <h1>Register</h1>
      <Form schema={schema} onSubmit={handleSubmit}>

        <Input name="name" type="text"/>
        <Input name="email" type="email"/>
        <Input name="password" type="password"/>
        <button type="submit">Cadastrar</button>
      </Form>
    </div>
  );
}

export default Register;