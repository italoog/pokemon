import styled from 'styled-components';
import { shade } from 'polished';

import signInBackgroundImg from '../../assets/sign-in-background.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  place-content: center;

  width: 100%;
  max-width: 500px;
  margin: 50px;
  padding: 50px;

  img {
    margin-right: 193px;
    margin-bottom: 78px;
  }

  h1 {
    margin-right: 50px;
    font-size: 36px;
    font-weight: 700;
  }

  form {
    margin: 48px 0;
    width: 340;
    text-align: center;

    input {
      background: #f5f7fa;
      border-radius: 8px;
      border: 1px solid #7d7e80;
      padding: 16px;
      width: 100%;
      color: #1e1e1f;

      &::placeholder {
        color: #7d7e80;
      }

      & + input {
        margin-top: 15px;
      }
    }

    button {
      background: #ffcb05;
      height: 56px;
      border-radius: 8px;
      border: 0;
      padding: 16px;
      font-weight: 500;
      font-size: 0 16px;
      width: 100%;
      margin-top: 33px;
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.1, '#ffcb05')};
      }
    }
  }

  > button {
    position: absolute;
    background: transparent;
    height: 31px;
    width: 139px;
    left: 100px;
    border: 1px solid #4b4b4d;
    bottom: 20px;
    border-radius: 22px;

    svg {
      -webkit-transform: scaleX(-1);
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackgroundImg}) no-repeat center;
  background-size: cover;
`;
