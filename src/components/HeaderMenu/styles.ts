import { shade } from 'polished';
import styled from 'styled-components';

export const Header = styled.header`
  /* padding-top: 15px; */
  /* padding-bottom: 5px; */
  background: #ffcb05;
`;

export const HeaderContent = styled.div`
  max-width: 1164px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Nav = styled.nav`
  padding-top: 15px;
  max-width: 320px;

  ul {
    display: flex;
    list-style: none;
    align-items: center;

    li {
      flex: 1;
      margin: 0 5px;
      width: 120px;

      a {
        display: flex;
        justify-content: space-around;
        color: #000;
        text-decoration: none;
        padding-bottom: 15px;
        padding-left: 15px;
        padding-right: 15px;
        border-bottom: 2px solid #ffcb05;
        transition: font-weight, border-bottom 0.2s;

        &:hover {
          font-weight: 600;
          border-bottom: 2px solid #000000;
        }
        /* &:focus {
          font-weight: 600;
          border-bottom: 2px solid #000000;
        } */

        > div {
          margin-left: 5px;
          width: 17px;
          height: 17px;
          color: #fff;
          font-weight: 600;
          text-align: center;

          background: #343232;
          border-radius: 50%;
        }
      }
    }
  }
`;

export const ExitButton = styled.button`
  width: 89px;
  height: 28px;
  border: 1px solid #343232;
  border-radius: 8px;
  background: #ffcb05;
  font-weight: 400;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.1, '#ffcb05')};
  }

  img {
    position: relative;
    top: 2px;
    margin-left: 30px;
  }
`;
