import { Box } from "@mui/material";
import React from "react";
import { InicioPage, PerfilPage, ContactoPage, ExperienciaPage, PortafolioPage, EstudiosPage } from "./"


export const LandingPage = () => {
  return (
    <>
      <Box>
        <Box id="inicio">
          <InicioPage />
        </Box>
        <Box id="perfil">
          <PerfilPage />
        </Box>
        <Box id="estudios">
          <EstudiosPage />
        </Box>
        <Box id="experiencia">
          <ExperienciaPage />
        </Box>
        <Box id="portafolio">
          <PortafolioPage />
        </Box>
        <Box id="contacto">
          <ContactoPage />
        </Box>
      </Box>
    </>
  )
}
