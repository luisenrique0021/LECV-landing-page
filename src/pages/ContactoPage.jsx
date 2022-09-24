import { Button, Container, Grid, Typography } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SendIcon from '@mui/icons-material/Send';

export const ContactoPage = () => {
  return (
    <Container
      sx={{
        flexGrow: 1,
        backgroundColor: "tercero.main",
        paddingY: 3,
        paddingX: { xs: 5, md: 20 },
        margin: "auto",
      }}
      maxWidth="full"
      margin="auto"
    >
      <Typography variant="h1" sx={{
        color: "tercero.main",
        backgroundColor: "segundo.main",
        fontFamily: "quicksand",
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 4,
        textAlign: "center",
      }}>
        CONTACTO
      </Typography>
      <Grid container>
        <Grid
          sx={{ textAlign: { xs: "center", md: "center" } }}
          item
          xs={24}
          md={12}
        >
          <Button
            sx={{
              m: 3,
              borderRadius: 10,
              backgroundColor: "#00405d",
              color: "white",
              '&:hover': {
                background: "white",
                color: "black",
              }
            }}
            size="large"
            variant="contained"
            startIcon={<GitHubIcon />}
            href="https://github.com/luisenrique0021"
            target="_blank"
          >
            GitHub
          </Button>
          <Button
            sx={{
              m: 3,
              borderRadius: 10,
              backgroundColor: "#43d854",
              color: "white",
              fontWeight: "semibold",
              '&:hover': {
                background: "white",
                color: "black"
              }
            }}
            size="large"
            variant="contained"
            startIcon={<WhatsAppIcon />}
            href="https://wa.me/573167009725?text=Hola👋 Luis Enrique, requiero de tus servicios"
            target="_blank"
          >
            WhatsApp
          </Button>
          <Button
            sx={{
              m: 3,
              borderRadius: 10,
              backgroundColor: "#0077b5",
              color: "white",
              '&:hover': {
                background: "white",
                color: "black"
              }
            }}
            size="large"
            variant="contained"
            startIcon={<LinkedInIcon />}
            href="https://www.linkedin.com/in/luis-chve/"
            target="_blank"
          >
            LinkedIn
          </Button>
          <Button
            sx={{
              m: 3,
              borderRadius: 10,
              backgroundColor: "blue",
              color: "white",
              '&:hover': {
                background: "white",
                color: "black"
              }
            }}
            size="large"
            variant="contained"
            startIcon={<SendIcon />}
            href="mailto:luisenrique0021@gmail.com?subject=Hola Luis, requiero de tus servicios 🤓"
            target="_blank"
          >
            correo
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}
