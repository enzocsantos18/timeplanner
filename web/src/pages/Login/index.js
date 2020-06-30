import React from 'react';
import {Form, Input} from '@rocketseat/unform'
import {Link} from 'react-router-dom'
import * as Yup from 'yup'


const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O campo e-mail é obrigatório.'),
  password: Yup.string()
    .required('O campo senha é obrigatório.')
}
)

function Login() {
  function handleSubmit(data){
    console.log(data)
  }
  return (
    <div>
      <h1>Login</h1>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email"/>
        <Input name="password" type="password"/>
        <button type="submit">Entrar</button>

        <Link to='/register'>Registrar</Link>
      </Form>
    </div>
  );
}

export default Login;