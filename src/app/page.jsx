import Caracteristicas from "../components/Caracteristicas/Caracteristicas";
import ComenzarGratis from "../components/ComenzarGratis/ComenzarGratis";
import Planes from "../components/Planes/Planes";
import { Box } from "@mui/material";

export default function LandingPage() {
  return (
    <Box
      component="main"
      sx={{
        margin: "0 auto",
        maxWidth: {
          xs: "100%",
          sm: "100%",
          md: "960px",
          lg: "1280px",
          xl: "1440px",
          xxl: "1920px",
          xxxl: "2560px",
        },
        p: 2,
      }}
    >
      <ComenzarGratis />
      <Caracteristicas />
      <Planes />
    </Box>
  );
}
