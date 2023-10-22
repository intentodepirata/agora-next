import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box component={"footer"} sx={{ m: 2, p: 2, textAlign: "center" }}>
      <Typography variant="body2" color="initial">
        Ágora TechSolutions &copy;. Todos los derechos reservados{" "}
        {new Date().getFullYear()}
      </Typography>
    </Box>
  );
}
