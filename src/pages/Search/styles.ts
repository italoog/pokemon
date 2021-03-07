import styled from 'styled-components';

export const Container = styled.div`
  background: #f5f7fa;
`;

export const Content = styled.div`
  max-width: 765px;
  margin: 0 auto;
`;
export const InputSearch = styled.div`
  margin-top: 29px;
  width: 100%;
  height: 54px;
  background: #ffffff;
  border: 1px solid #dee0e3;
  box-sizing: border-box;
  border-radius: 8px;
  display: flex;
  align-items: center;
  margin-bottom: 39px;
  padding-left: 20px;

  input {
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    color: #000000;
    flex: 1;
    background: transparent;
    border: 0;

    &::placeholder {
      font-weight: normal;
      font-size: 14px;
      line-height: 21px;
      color: #000000;
    }
  }

  button {
    border: 0;
    size: 0;
    background: transparent;

    img {
      position: relative;
      top: 2px;
      padding: 0 26px;
    }
  }
`;

export const ContentCards = styled.section`
  display: flex;
  flex-direction: row;
`;
