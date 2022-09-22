import { Box, Button, Container, Grid, Paper, Stack, Typography } from '@mui/material'
import { proyectos } from '../database/proyectos'
import React from 'react'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import GitHubIcon from '@mui/icons-material/GitHub';

export const PortafolioPage = () => {
  return (
    <Container

      sx={{
        background: "linear-gradient(to left bottom, #AF9E9E, #FCFCFC)",
        flexGrow: 1,
        paddingX: { xs: 5, md: 20 },
        paddingY: 12,
      }}
      maxWidth="full"
    >
      <Typography variant="h1" sx={{
        color: "tercero.main",
        backgroundColor: "segundo.main",
        fontFamily: "quicksand",
        fontSize: 42,
        fontWeight: "bold",
        marginBottom: 6,
        textAlign: "center",
      }}>
        PORTAFOLIO
      </Typography>
      {proyectos.map((proyecto) => (
        <Box key={proyecto.id} sx={{ width: "100%" }}>
          <Paper sx={{ margin: 4, padding: 4, borderRadius: 5 }} elevation={24}>
            <Grid
              container
              rowSpacing={2}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item md={6} xs={12}>
                <img
                  className="portafolio"
                  src={proyecto.imagen}
                  alt={proyecto.nombre}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <Typography
                  variant="h1"
                  sx={{ 
                  fontFamily: "quicksand", 
                  fontWeight: "bold",
                  fontSize: 28,
                  marginBottom: 2,
                  }}>
                  {proyecto.nombre}
                </Typography>
                <Typography sx={{
                  fontFamily: "quicksand",
                  fontSize: 16,
                  marginBottom: 2,
                }}>{proyecto.descripcion}</Typography>
                <Typography sx={{
                  fontFamily: "quicksand",
                  fontSize: 18,
                  fontWeight: "bold",
                  color: "tercero.main",
                  marginBottom: 6,
                }}
                >
                  {proyecto.stack}
                  </Typography>
                  <Stack spacing={2} direction="row">
                    <Button
                    sx={{
                      borderRadius: 10,
                      backgroundColor: "quinto.main",
                    }}
                      size="large"
                      variant="contained"
                      startIcon={<ArrowOutwardIcon />}
                      href={proyecto.link_preview}
                      target="_blank"
                    >
                      Preview
                    </Button>
                    <Button
                    sx={{
                      borderRadius: 10,
                      backgroundColor: "primero.main",
                    }}
                      size="large"
                      variant="contained"
                      startIcon={<GitHubIcon />}
                      href={proyecto.link_github}
                      target="_blank"
                    >
                      GitHub
                    </Button>
                  </Stack>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      ))}
    </Container>
  )
}
