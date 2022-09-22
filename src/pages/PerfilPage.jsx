import { withTheme } from '@emotion/react'
import { Container, Typography, Grid, Button, Avatar } from '@mui/material'
import React from 'react'
import profilephoto from '../assets/profile-photo-circle.png'
import GitHubIcon from '@mui/icons-material/GitHub'
import logoreactmui from '../assets/react-mui.png'
import logotailwind from '../assets/logo-tailwind.png'

export const PerfilPage = () => {
  return (
    <Container
      sx={{
        flexGrow: 1,
        background: "linear-gradient(to left bottom, #AF9E9E, #FCFCFC)",
        paddingTop: 20,
        paddingBottom: 12,
        color: "white",
        paddingX: { xs: 5, md: 20 },
      }}
      maxWidth="full"
    >
      <Grid container>
        <Grid sx={{ textAlign: "center" }} item xs={12} sm={12}>
          <Typography variant="h1" sx={{
            fontFamily: "quicksand",
            fontWeight: "bold",
            color: "primero.main",
            fontSize: 46,
            marginBottom: 6,
          }}>
            LA PERSONA DETRÁS DEL DESARROLLADOR
          </Typography>
          <Typography variant="h1" sx={{
            fontFamily: "quicksand",
            fontWeight: "bold",
            color: "primero.main",
            fontSize: 46,
            marginBottom: 3,
            textAlign: "center",
          }}>
            Mucho gusto 🤝, mi nombre es Luis Enrique Chavez Vergara
          </Typography>
          <img alt="The image" src={profilephoto} className="profile" />
          {/* <Avatar variant={"rounded"} alt="The image" src={profilephoto} className="portafolio" style={{
            width: 500,
            height: 500,
            margin: "auto",
            alignSelf: 'center',
          }} /> */}
          {/* <Avatar variant={"rounded"} alt="The image" src={logotailwind} style={{
            width: 500,
            height: 100,
            margin: "auto",
            marginBottom: 4,
            alignSelf: 'center',
          }} /> */}
          
          <Typography variant="h3" sx={{
            fontFamily: "quicksand",
            fontWeight: "bold",
            color: "primero.main",
            fontSize: 23,
            marginBottom: 3,
            textAlign: "center",
            marginTop: 4,
          }}>
            "Soy una persona que ha podido presenciar a lo largo de mi vida los cambios rápidos y fuertes que ha tenido la humanidad a nivel tecnológico en los últimos años. 
            No deja de ser emocionante preguntarse hasta dónde llegará la humanidad, pero me apasiona hacer parte de este cambio, poder sentirlo de cerca, y por éso decidí ser programador. 
            Cada día busco ser más organizado, practico el ciclismo y escucho música suave, siento que me hacen el ambiente perfecto para sentarme en frente de un computador y hacer que las cosas pasen. 
            Me considero una persona perseverante, con gran entusiasmo por seguir aprendiendo, alguien deseoso de crecer cada día como persona y como profesional. Mi nombre es Luis, y quiero que alcancemos metas".
          </Typography>
          {/* <Avatar variant={"rounded"} alt="The image" src={logoreactmui} style={{
            width: 300,
            height: 150,
            // marginRight: 5,
            // // marginBottom: 4,
            // alignSelf: 'center',
            margin: 'auto',
          }} /> */}
          
        </Grid>
      </Grid>
    </Container>
  );
};
  
          

