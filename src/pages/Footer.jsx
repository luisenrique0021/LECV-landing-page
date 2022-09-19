import { Box, Container, Typography } from '@mui/material'
import { fontWeight } from '@mui/system'
import fotoPerfil from '../assets/logo-lecv.png'

export const Footer = () => {
    return (
        <Container
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "tercero.main",
                paddingY: 2,
                paddingX: { xs: 5, md: 20 },
            }}
            maxWidth="full"
        >
            <Box sx={{ display: "flex" }}>
                <img src={fotoPerfil} />
                {/* <Typography
                    variant="h6"
                    component="a"
                    href="/"
                    sx={{
                        mt: 1,
                        ml: 2,
                        display: "flex",
                        fontFamily: "quicksand",
                        fontWeight: 700,
                        color: "inherit",
                        textDecoration: "none",
                    }}
                >
                    Luis Enrique Chavez Vergara
                </Typography> */}
            </Box>
        </Container>
    )
}
