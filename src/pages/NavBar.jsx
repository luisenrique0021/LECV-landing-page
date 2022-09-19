import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from "react-scroll";
import fotoPerfil from "../assets/logo-lecv.png"


export const NavBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    return (
        <AppBar
            position="fixed"
            elevation={0}
            sx={{
                background: "linear-gradient(308deg, rgba(34,26,53,1) 35%, rgba(175,158,158,1) 100%);",
                color: "cuarto.main",
            }}
        >
            <Container maxWidth="full">
                <Toolbar>
                    <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
                        <img className={{ width: 2 }} src={fotoPerfil} />
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'quicksand',
                            fontWeight: 700,
                            color: 'primero.main',
                            textDecoration: 'none',
                        }}
                    >
                        Luis Enrique Chavez Vergara
                    </Typography>

                    {/* Boton del menu movil */}

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >

                            {/* Boton menu movil */}

                            <Link activeClass="active" smooth spy to="inicio">
                                <Typography
                                    sx={{ marginRight: 2, padding: 2, cursor: "pointer" }}
                                >
                                    Inicio
                                </Typography>
                            </Link>
                            <Link activeClass="active" smooth spy to="perfil">
                                <Typography
                                    sx={{ marginRight: 2, padding: 2, cursor: "pointer" }}
                                >
                                    Perfil
                                </Typography>
                            </Link>
                            <Link activeClass="active" smooth spy to="estudios">
                                <Typography
                                    sx={{ marginRight: 2, padding: 2, cursor: "pointer" }}
                                >
                                    Estudios
                                </Typography>
                            </Link>
                            <Link activeClass="active" smooth spy to="experiencia">
                                <Typography
                                    sx={{ marginRight: 2, padding: 2, cursor: "pointer" }}
                                >
                                    Experiencia
                                </Typography>
                            </Link>
                            <Link activeClass="active" smooth spy to="portafolio">
                                <Typography
                                    sx={{ marginRight: 2, padding: 2, cursor: "pointer" }}
                                >
                                    Portafolio
                                </Typography>
                            </Link>
                            <Link activeClass="active" smooth spy to="contacto">
                                <Typography
                                    sx={{ marginRight: 2, padding: 2, cursor: "pointer" }}
                                >
                                    Contacto
                                </Typography>
                            </Link>
                        </Menu>
                    </Box>

                    {/* Logo y nombre móvil */}

                    <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
                        <img className={{ width: 2 }} src={fotoPerfil} />
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'quicksand',
                            fontWeight: 700,
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LECV
                    </Typography>

                    {/* Botones Menú escritorio */}

                    <Box
                        sx={{
                            cursor: "pointer",
                            flex: 1,
                            alignItems: "center",
                            justifyContent: "end",
                            display: { xs: "none", md: "flex" },
                        }}
                    >

                        <Link activeClass='active' smooth spy to="inicio">
                            <Typography sx={{ marginLeft: 6 }}>Inicio</Typography>
                        </Link>
                        <Link activeClass='active' smooth spy to="perfil">
                            <Typography sx={{ marginLeft: 6 }}>perfil</Typography>
                        </Link>
                        <Link activeClass='active' smooth spy to="estudios">
                            <Typography sx={{ marginLeft: 6 }}>estudios</Typography>
                        </Link>
                        <Link activeClass='active' smooth spy to="experiencia">
                            <Typography sx={{ marginLeft: 6 }}>experiencia</Typography>
                        </Link>
                        <Link activeClass='active' smooth spy to="portafolio">
                            <Typography sx={{ marginLeft: 6 }}>portafolio</Typography>
                        </Link>
                        <Link activeClass='active' smooth spy to="contacto">
                            <Typography sx={{ marginLeft: 6 }}>contacto</Typography>
                        </Link>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

