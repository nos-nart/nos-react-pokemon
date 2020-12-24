import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonCardList } from '../../slices/pokemon-card-list.slice';
import styles from './PokemonCard.module.css';
import { Grid, Col, Row } from 'rsuite';

export const PokemonCardList = () => {
  const data = useSelector(state => state.PokemonCardList.data);
  const dispatch = useDispatch();

  React.useEffect(() => {
    async function fetchPokemons() {
      try {
        dispatch(getPokemonCardList());
      } catch(error) {
        // NOTE: Handle error here!
        console.log('error: ', error);
      }
    }
    fetchPokemons();
  }, [dispatch]);

  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>Pokémon TCG</p>
      <Grid fluid>
        <Row gutter={16}>
          {data.map(i =>
              <Col key={i.code} xs={24} sm={12} md={12} lg={8}>
                <div className={styles.card}>
                  <div className={styles.cardLogo}>
                    <img className={styles.logo} src={i.logoUrl} alt="logo"/>
                  </div>
                  <div className={styles.description}>
                    <img className={styles.symbol} src={i.symbolUrl} alt="symbol"/>
                    <div className={styles.ml4}>
                      <p className={styles.textLg}>{i.name}</p>
                      <p>{i.releaseDate}</p>
                    </div>
                  </div>
                </div>
              </Col>  
            )
          }
        </Row>
      </Grid>
    </div>
  )
}
