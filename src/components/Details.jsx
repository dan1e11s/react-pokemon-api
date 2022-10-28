import React, { useContext, useEffect } from 'react';
import { pokemonsContext } from './PokemonsContext';
import { useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import ExpandIcon from '@mui/icons-material/Expand';

const Details = () => {
  const { onePokemon, getOnePokemon } = useContext(pokemonsContext);

  const { id } = useParams();

  useEffect(() => {
    getOnePokemon(id);
  }, []);
  console.log(onePokemon);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '100px',
      }}
    >
      {onePokemon ? (
        <>
          <Card
            sx={{ maxWidth: 345 }}
            style={{
              textAlign: 'center',
            }}
          >
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={onePokemon.sprites.front_default}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <b>{onePokemon.name.toUpperCase()}</b>
              </Typography>
              <List
                sx={{
                  width: '100%',
                  maxWidth: 360,
                  bgcolor: 'background.paper',
                }}
              >
                <ListItem>
                  <ListItemIcon>
                    <FitnessCenterIcon />
                  </ListItemIcon>
                  <ListItemText primary={`Weight: ${onePokemon.weight}`} />
                </ListItem>

                <ListItem>
                  <ListItemIcon>
                    <ExpandIcon />
                  </ListItemIcon>
                  <ListItemText primary={`Height: ${onePokemon.height}`} />
                </ListItem>

                <ListItem>
                  <ListItemIcon>
                    <KeyboardDoubleArrowUpIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={`Experience: ${onePokemon.base_experience}`}
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </>
      ) : (
        <h3>loading</h3>
      )}
    </div>
  );
};

export default Details;
