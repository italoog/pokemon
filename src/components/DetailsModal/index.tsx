import React from 'react';

import {
  Overlay,
  Container,
  Content,
  Category,
  PokemonAvatar,
  Statistic,
  StatisticalBar,
} from './stytles';
import save from '../../assets/save.svg';
import pokemoDetails from '../../assets/pokemoDetails.svg';
import close from '../../assets/close.svg';

const DetailsModal: React.FC = () => (
  <Overlay>
    <Container>
      <Content>
        <h1>Detalhes</h1>
        <h2>Pikachu</h2>
        <PokemonAvatar>
          <div>
            <img src={pokemoDetails} alt="" />
          </div>
          <div>
            <img src={pokemoDetails} alt="" />
          </div>
        </PokemonAvatar>
        <div>
          <strong>1.23m</strong>
          <strong>54Kg</strong>
        </div>
        <Category>
          <div>Elétrico</div>
          <div>Fire</div>
        </Category>
        <Statistic>
          <div>
            <strong>Estatisticas</strong>
          </div>
          <StatisticalBar>
            <span>HP</span>
            <div>
              <div style={{ width: `80%` }} />
            </div>
            <span>93</span>
          </StatisticalBar>
          <StatisticalBar>
            <span>ATK</span>
            <div>
              <div style={{ width: `50%` }} />
            </div>
            <span>93</span>
          </StatisticalBar>
          <StatisticalBar>
            <span>DEF</span>
            <div>
              <div style={{ width: `59%` }} />
            </div>
            <span>93</span>
          </StatisticalBar>
          <StatisticalBar>
            <span>S.ATK</span>
            <div>
              <div style={{ width: `30%` }} />
            </div>
            <span>93</span>
          </StatisticalBar>
          <StatisticalBar>
            <span>S.DEF</span>
            <div>
              <div style={{ width: `50%` }} />
            </div>
            <span>93</span>
          </StatisticalBar>
          <StatisticalBar>
            <span>SPD</span>
            <div>
              <div style={{ width: `70%` }} />
            </div>
            <span>93</span>
          </StatisticalBar>
        </Statistic>
        <button type="button">
          <img src={save} alt="" /> Adicionar aos favoritos
        </button>
      </Content>
      <button type="button">
        <img src={close} alt="" />
      </button>
    </Container>
  </Overlay>
);

export default DetailsModal;
