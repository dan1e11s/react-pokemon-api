import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';

export default function ButtonAppBar() {
  const [style, setStyle] = useState(false);

  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => {
              setStyle(!style);
            }}
          >
            <CatchingPokemonIcon />
          </IconButton>
          <Typography
            style={{
              cursor: 'pointer',
            }}
            onClick={() => navigate('/')}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Pokemon API
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
