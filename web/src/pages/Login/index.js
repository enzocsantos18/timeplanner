import React from 'react';
import {useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {Form, Input} from '@rocketseat/unform'
import * as Yup from 'yup'

import {signInRequest} from '../../store/modules/auth/actions'
const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O campo e-mail é obrigatório.'),
  password: Yup.string()
    .required('O campo senha é obrigatório.')
}
)

function Login() {
  const dispatch = useDispatch();
  function handleSubmit({email, password}){
    dispatch(signInRequest(email, password))
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