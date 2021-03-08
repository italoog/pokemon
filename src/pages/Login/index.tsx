import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import getValidationError from '../../utils/getValidationsErrors';

import logoImg from '../../assets/logo.svg';

import ThemeButton from '../../components/ThemeButton';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';
import { useAuth } from '../../hooks/Auth';

interface LoginFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const history = useHistory();

  const formRef = useRef<FormHandles>(null);

  const { login } = useAuth();

  const handleSubmit = useCallback(
    async (data: LoginFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail valido'),
          password: Yup.string().required('Senha obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        login({
          email: data.email,
          password: data.password,
        });
        history.push('/home');
      } catch (err) {
        const errors = getValidationError(err);

        formRef.current?.setErrors(errors);
      }
    },
    [login, history],
  );

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Pokémon" />

        <h1>Comece a coletar pokémons!</h1>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="email" placeholder="E-mail" />

          <Input name="password" type="password" placeholder="Senha" />

          <Button type="submit">Entrar</Button>
        </Form>

        <ThemeButton />
      </Content>
      <Background />
    </Container>
  );
};

export default Login;
