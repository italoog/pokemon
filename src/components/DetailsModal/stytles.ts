import styled from 'styled-components';

export const Overlay = styled.div`
  background: rgba(120, 120, 120, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  position: relative;
  background: #ffffff;
  width: 378px;
  height: 639px;
  max-width: 400px;
  border-radius: 8px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  position: relative;
  justify-content: center;
  padding: 24px;

  button {
    background: transparent;
    border: 0;

    img {
      position: absolute;
      top: 25px;
      right: 25px;
    }
  }
`;

export const Content = styled.div`
  max-width: 330px;

  h1 {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #343232;
    padding-bottom: 9px;
    max-width: 330px;
    border-bottom: 1px solid #e7dfdf;
  }

  h2 {
    padding-top: 18px;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    color: #000000;
    padding-bottom: 13px;
  }

  div {
    strong {
      margin-top: 24px;
      font-weight: 500;
      font-size: 18px;
      line-height: 27px;
      color: #000000;
      margin-right: 18px;
      margin-bottom: 23px;
    }
  }

  button {
    margin-top: 39px;
    width: 331px;
    height: 46px;
    background: #ffcb05;
    border-radius: 8px;
    border: 0;

    img {
      position: relative;
      top: 4px;
      margin-right: 6px;
    }
  }
`;

export const PokemonAvatar = styled.div`
  display: flex;

  div {
    display: flex;
    width: 79.52px;
    height: 69.98px;
    margin-left: 4.48px;
    background: #f5f5f4;
    border-radius: 8px;
    margin-bottom: 24px;

    img {
      margin: 0 auto;
      width: 44.53px;
    }
  }
`;

export const Category = styled.div`
  display: flex;
  margin-top: 23px;
  margin-left: -4px;

  div {
    display: flex;
    justify-content: center;

    width: 90px;
    height: 30px;

    border-radius: 8px;
    text-align: center;

    background: #ffcb05;
    color: #343232;

    margin-left: 4px;

    font-weight: 500;
    font-size: 12px;
    line-height: 18px;

    align-items: center;

    margin-bottom: 23px;

    & + div {
      background: #ff3326;
      color: #ffffff;
    }
  }
`;

export const Statistic = styled.section`
  > div {
    strong {
      font-weight: 600;
      font-size: 13px;
      line-height: 19px;
      color: #b8b8b8;
    }
  }
`;

export const StatisticalBar = styled.div`
  margin-top: 13px;
  display: flex;
  align-items: center;
  max-width: 330px;

  & + div {
    margin-top: 13px;
  }

  > span {
    width: 33px;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    color: #525150;
  }

  > div {
    flex: 1;
    height: 9px;
    border-radius: 8px;
    background: #f3f3f3;
    margin: 0 1.5rem;
    position: relative;
  }

  > div > div {
    height: 9px;
    border-radius: 8px;
    background: #ffcb05;
  }
`;
