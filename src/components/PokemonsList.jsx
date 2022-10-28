import * as React from 'react';
import { useContext, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { pokemonsContext } from './PokemonsContext';
import { Container } from '@mui/system';
import { useNavigate } from 'react-router-dom';

export default function MediaCard() {
  const { pokemons, getPokemons, getOnePokemon } = useContext(pokemonsContext);

  const navigate = useNavigate();

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <Container
      style={{
        marginTop: '30px',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
      }}
    >
      {pokemons.map((item) => (
        <Card
          key={item.id}
          style={{
            width: '20%',
            marginBottom: '30px',
            marginRight: '30px',
          }}
        >
          <CardMedia
            component="img"
            height="140"
            image={item.sprites.front_default}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <b>{item.name.toUpperCase()}</b>
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              variant="contained"
              onClick={() => navigate(`/details/${item.id}`)}
            >
              Details
            </Button>
          </CardActions>
        </Card>
      ))}
    </Container>
  );
}
