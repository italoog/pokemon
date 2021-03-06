import React from 'react';

import logoImg from '../../assets/logo.svg';

import ThemeButton from '../../components/ThemeButton';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const Login: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="Pokémon" />

      <h1>Comece a coletar pokémons!</h1>

      <form>
        <Input name="email" placeholder="E-mail" />

        <Input name="password" type="password" placeholder="Senha" />

        <Button type="submit">Entrar</Button>
      </form>

      <ThemeButton />
    </Content>
    <Background />
  </Container>
);

export default Login;
