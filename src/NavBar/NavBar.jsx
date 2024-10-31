import React from 'react';
import { Stack, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <Stack
            spacing={2}
            alignItems="center"
            sx={{ padding: '10px', borderRadius: '4px' }}
        >
            <Button
                variant="contained"
                component={Link}
                to="/"
                sx={{ width: '120px' }}
            >
                Inicio
            </Button>
            <Button
                variant="contained"
                component={Link}
                to="/about"
                sx={{ width: '120px' }}
            >
                Acerca de
            </Button>
            <Button
                variant="contained"
                component={Link}
                to="/favoritos"
                sx={{ width: '120px' }}
            >
                Favoritos
            </Button>
            <Button
                variant="contained"
                component={Link}
                to=""
                sx={{ width: '120px' }}
            >
                Todos los Personajes
            </Button>
        </Stack>
    );
};

export default NavBar;
