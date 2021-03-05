import React from 'react';
import { RiMoonFill } from 'react-icons/ri';

import logoImg from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="Pokémon" />

      <h1>Comece a coletar pokémons!</h1>

      <form>
        <input placeholder="E-mail" />

        <input type="password" placeholder="Senha" />

        <button type="submit">Entrar</button>
      </form>

      <button type="button">
        <RiMoonFill /> Tema escuro
      </button>
    </Content>
    <Background />
  </Container>
);

export default SignIn;
