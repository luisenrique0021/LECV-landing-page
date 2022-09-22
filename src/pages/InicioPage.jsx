import { withTheme } from '@emotion/react'
import { Container, Typography, Grid, Button } from '@mui/material'
import React from 'react'
import imagenlogos from '../assets/logos-languages-rbg.png'
import GitHubIcon from '@mui/icons-material/GitHub'
import frase from '../assets/frase.png'

export const InicioPage = () => {
  return (
    <Container
      sx={{
        flexGrow: 1,
        background: "linear-gradient(to left bottom, #AF9E9E, #FCFCFC)",
        paddingTop: 25,
        paddingBottom: 12,
        color: "white",
        paddingX: { xs: 5, md: 20 },
      }}
      maxWidth="full"
    >
      <Grid container>
        <Grid sx={{ textAlign: "left" }} item xs={12} sm={6}>
          <Typography variant="h1" sx={{
            fontFamily: "quicksand",
            fontWeight: "bold",
            color: "primero.main",
            fontSize: 46,
            marginBottom: 1,
          }}>
            Hola, me llamo Luis Enrique
          </Typography>
          <Typography variant="h2" sx={{
            fontFamily: "quicksand",
            fontWeight: "bold",
            color: "quinto.main",
            fontSize: 26,
            marginBottom: 3
          }}>
            ... y juntos, vamos a hacerlo posible 👋
          </Typography>
          <Grid sx={{
            textAlign: "center",
            marginTop: { xs: 1, md: 1 },
          }}
          >
            <img src={frase}
              className="frasemain"
            // style={{
            //   maxWidth: 400,
            //   height: "auto",
            //   padding: 0,
            //   marginTop: 25,
            // }}
            />
            {/* <Button
            sx={{ borderRadius: 10, backgroundColor: "black", marginTop: 3, backgroundPosition: "center",
            textAlign: { xs: "center", md: "center" } }}
            href="https://github.com/luisenrique0021"
            target="_blank"
            size="large"
            variant="outlined"
            startIcon={<GitHubIcon />}
          >My GitHub Profile</Button> */}

          </Grid>
        </Grid>
        <Grid sx={{
          textAlign: { xs: "center", md: "right" },
          // marginTop: { xs: 5, md: 18 },
          margin: "auto",
        }}
          item
          xs={12}
          sm={6}
        >
          <img src={imagenlogos}
            className="portafolio"
          />
        </Grid>
        <Grid sx={{
          textAlign: { margin: "auto" },
          // marginTop: { xs: 10, md: 0 },
        }}
        // item
        // xs={12}
        // sm={6}
        >
          <Button
            sx={{
              borderRadius: 10, backgroundColor: "black", marginTop: 3, backgroundPosition: "center",
              textAlign: { xs: "center", md: "center" }, '&:hover': {
                background: "white",    
                             
                }
            }}
            href="https://github.com/luisenrique0021"
            target="_blank"
            size="large"
            variant="outlined"
            startIcon={<GitHubIcon />}
          >My GitHub Profile</Button>
        </Grid>
      </Grid>
    </Container>
  );
};
