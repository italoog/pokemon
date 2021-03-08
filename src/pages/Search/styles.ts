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
  max-width: 765px;
  width: 100%;

  flex-wrap: wrap;
`;

export const Card = styled.div`
  position: relative;
  width: 165px;
  height: 236px;
  padding-top: 10px;
  padding-bottom: 20px;

  background: #ffffff;
  box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.05);
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 13px 13px;
  right: 10px;

  button {
    background: transparent;
    border: 0;

    img {
      position: absolute;
      top: 3.33%;
      right: 3.33%;
    }
  }

  > img {
    margin-bottom: 10px;
  }

  > div {
    width: 100%;
    padding: 0 9px;

    h1 {
      font-weight: 600;
      font-size: 18px;
      line-height: 27px;
      color: #000000;
    }
    > span {
      font-weight: 500;
      font-size: 13px;
      line-height: 19px;
      color: #8e8787;
      margin-bottom: 8px;
    }

    div {
      display: flex;
      margin-top: 8px;
      margin-left: -4px;

      div {
        display: flex;
        justify-content: center;

        max-width: 50.53px;
        min-width: 50.53px;

        border-radius: 8px;
        text-align: center;

        background: #ffcb05;
        color: #343232;

        font-weight: 500;
        padding: 3px;
        font-size: 8px;
        margin-left: 4px;

        & + div {
          background: #ff3326;
          color: #ffffff;
        }
      }
    }

    button {
      margin-top: 16px;
      background: #ffcb05;
      width: 147px;
      height: 32px;
      border-radius: 8px;
    }
  }
`;
