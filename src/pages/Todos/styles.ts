import styled from 'styled-components';

export const Container = styled.div`
  /* background: #f5f7fa; */
`;

export const Content = styled.div`
  max-width: 1164px;
  margin: 0 auto;
`;

export const Filtro = styled.div`
  margin-top: 40px;
  margin-bottom: 38px;

  button {
    width: 145px;
    height: 42px;
    border-radius: 8px;
    border: 1px solid #6b6868;
    background: transparent;
    transition: background-color 0.2s;

    & + button {
      margin-left: 8px;
    }

    :focus {
      border: 0;
      background: #ffcb05;
    }
  }
`;

export const ContentCards = styled.section`
  display: flex;
  flex-direction: row;
  max-width: 1164px;
  flex-wrap: wrap;
`;
