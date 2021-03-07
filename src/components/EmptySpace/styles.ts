import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 100%;
    max-width: 500px;
    margin-top: 30px;
  }

  h1 {
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
  }

  p {
    width: 100%;
    max-width: 400px;
    text-align: center;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #7d7e80;
  }

  button {
    margin-top: 39px;
    width: 233px;
    height: 45px;
    border: 1px solid #7d7e80;
    border-radius: 8px;
    background: #f5f7fa;
    color: #7d7e80;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.1, '#f5f7fa')};
    }
  }
`;
