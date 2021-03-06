import React, { ButtonHTMLAttributes } from 'react';
import { RiMoonFill } from 'react-icons/ri';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const ThemeButton: React.FC<ButtonProps> = (props) => (
  <Container type="button" {...props}>
    <RiMoonFill /> Tema escuro
  </Container>
);

export default ThemeButton;
