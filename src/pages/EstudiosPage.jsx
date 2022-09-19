import { withTheme } from '@emotion/react'
import { Container, Typography, Grid, Button, Avatar, Paper } from '@mui/material'
import React from 'react'
import profilephoto from '../assets/profile-photo-circle.png'
import GitHubIcon from '@mui/icons-material/GitHub'
import logoreactmui from '../assets/react-mui.png'
import logotailwind from '../assets/logo-tailwind.png'
import { estudiosdbleft } from '../database/estudiosdbleft'
import { estudiosdbright } from '../database/estudiosdbright'


export const EstudiosPage = () => {
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
        ESTUDIOS
      </Typography>

      <Grid container>
        <Grid sx={{ textAlign: "left" }} item xs={12} sm={6}>
          {estudiosdbleft.map((estudio) => (
            <Paper sx={{ margin: 4, padding: 4, borderRadius: 5 }} elevation={8}>
              <Avatar variant={"rounded"} alt={estudio.nombre} src={estudio.imagen} style={{
                width: 90,
                height: 60,
                margin: "auto",
                // alignSelf: 'center',
              }} />
              <Typography
                variant='h1'
                sx={{
                  fontFamily: "quicksand",
                  fontWeight: "bold",
                  fontSize: 22,
                  marginBottom: 1,
                }}
              >
                {estudio.nombre}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "quicksand",
                }}
              >
                INSTITUCIÓN: {estudio.institucion}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "quicksand",
                }}
              >
                AÑO: {estudio.año}
              </Typography>
            </Paper>
          ))}
        </Grid>

        <Grid sx={{ textAlign: "left" }} item xs={12} sm={6}>
          {estudiosdbright.map((estudio) => (
            <Paper sx={{ margin: 4, padding: 4, borderRadius: 5 }} elevation={8}>
              <Avatar variant={"rounded"} alt={estudio.nombre} src={estudio.imagen} style={{
                width: 90,
                height: 60,
                margin: "auto",
                // alignSelf: 'center',
              }} />
              <Typography
                variant='h1'
                sx={{
                  fontFamily: "quicksand",
                  fontWeight: "bold",
                  fontSize: 22,
                  marginBottom: 1,
                }}
              >
                {estudio.nombre}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "quicksand",
                }}
              >
                INSTITUCIÓN: {estudio.institucion}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "quicksand",
                }}
              >
                AÑO: {estudio.año}
              </Typography>
            </Paper>
          ))}
        </Grid>

      </Grid>
    </Container>
  );
};
