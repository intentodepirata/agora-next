"use client";
import { Box, Button, Typography } from "@mui/material";

import Link from "next/link";

const Header = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      component="header"
      sx={{
        maxWidth: {
          xs: "100%",
          sm: "100%",
          md: "960px",
          lg: "1280px",
          xl: "1440px",
          xxl: "1920px",
          xxxl: "2560px",
        },
        margin: "0 auto",
        p: 2,
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Link href="/">
        <Box
          component="img"
          src="/img/logo-trans.png"
          alt="Agora Tech solutions"
          width="160px"
          height="59px"
        />
      </Link>

      <Box
        component="nav"
        sx={{
          display: "flex",
          gap: "16px",
          alignItems: "center",
        }}
      >
        <Typography
          variant="body1"
          color="inherit"
          sx={{
            cursor: "pointer",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
          onClick={() => scrollToSection("caracteristicas")}
        >
          Caracteristicas
        </Typography>
        <Typography
          variant="body1"
          color="inherit"
          sx={{
            cursor: "pointer",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
          onClick={() => scrollToSection("planes")}
        >
          Precios
        </Typography>
        <Typography
          href={"/login"}
          variant="body1"
          color="inherit"
          component={Link}
          sx={{
            cursor: "pointer",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          Iniciar Sesion
        </Typography>

        <Button
          variant="contained"
          color="primary"
          component={Link}
          href="/register"
          sx={{ textTransform: "none", fontSize: "16px" }}
        >
          Registrate
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
