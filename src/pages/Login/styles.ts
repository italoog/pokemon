import styled from 'styled-components';

import signInBackgroundImg from '../../assets/sign-in-background.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;

  width: 100%;
  max-width: 500px;
  margin: 0 50px;
  padding: 0 50px;

  img {
    margin-top: 2rem;
    margin-bottom: 6rem;
  }

  h1 {
    font-size: 36px;
    font-weight: 700;
  }

  form {
    margin-top: 4rem;
    width: 340;
    text-align: center;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackgroundImg}) no-repeat center;
  background-size: cover;
`;
