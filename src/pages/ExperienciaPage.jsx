import { Avatar, Box, Button, Container, Grid, Paper, Stack, Typography } from '@mui/material'
import { proyectos } from '../database/proyectos'
import React from 'react'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import GitHubIcon from '@mui/icons-material/GitHub';
import { experienciadb } from '../database/experienciadb';

export const ExperienciaPage = () => {
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
        color: "primero.main",
        fontFamily: "quicksand",
        fontSize: 42,
        fontWeight: "bold",
        marginBottom: 6,
        textAlign: "center",
      }}>
        EXPERIENCIA
      </Typography>
      {experienciadb.map((experiencia) => (
        <Box key={experiencia.id} sx={{ width: "100%" }}>
          <Paper sx={{ margin: 4, padding: 4, borderRadius: 5 }} elevation={24}>
            <Grid
              container
              rowSpacing={2}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid sx={{ textAlign: "center" }} item md={6} xs={12}>
                {/* <Avatar variant={"rounded"} alt={experiencia.cargo} src={experiencia.imagen} style={{
                   width: 470,
                   height: 350,
                  margin: "auto",
                  // alignSelf: 'center',
                }} /> */}
                <img
                  className="experience"
                  src={experiencia.imagen}
                  alt={experiencia.nombre}
                  // style={{maxWidth: 250,
                  //   height: "auto",
                  //   padding: 0,
                  //   marginTop: 39,}}
                  
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
                  {experiencia.cargo}
                </Typography>
                <Typography sx={{
                  fontFamily: "quicksand",
                  fontSize: 16,
                  marginBottom: 2,
                }}>FUNCIONES: {experiencia.funciones}</Typography>
                <Typography sx={{
                  fontFamily: "quicksand",
                  fontSize: 16,
                  marginBottom: 2,
                }}>EMPRESA: {experiencia.empresa}</Typography>
                <Typography sx={{
                  fontFamily: "quicksand",
                  fontSize: 16,
                  marginBottom: 2,
                }}>TIEMPO: {experiencia.tiempo}</Typography>
                <Typography sx={{
                  fontFamily: "quicksand",
                  fontSize: 16,
                  marginBottom: 2,
                }}>AÑO: {experiencia.año}</Typography>
                {/* <Typography sx={{
                  fontFamily: "quicksand",
                  fontSize: 18,
                  fontWeight: "bold",
                  color: "tercero.main",
                  marginBottom: 6,
                }}
                >
                  {proyecto.stack}
                </Typography> */}
                <Stack spacing={2} direction="row">
                  <Button
                    sx={{
                      borderRadius: 10,
                      backgroundColor: "quinto.main",
                      margin: "auto",
                    }}
                    size="large"
                    variant="contained"
                    startIcon={<ArrowOutwardIcon />}
                    href={experiencia.link_preview}
                    target="_blank"
                  >
                    Visitar empresa
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
