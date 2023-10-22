import { Box } from "@mui/material";
import "./styles/index.css";
import ThemeRegistry from "./ThemeRegistry";
import { NotificationProvider } from "../ui/NotificationProvider";
import Providers from "../tanstackquery/queryClient";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

export const metadata = {
  title:
    "Ágora TechSolutions | El mejor software para administrar tu servicio técnico.",
  description:
    "Optimiza la gestión de tu negocio de reparación de smartphones con nuestro software especializado. Simplifica la administración, controla inventarios, gestiona órdenes de reparación y brinda un servicio eficiente a tus clientes. Descubre cómo nuestro software puede ayudarte a impulsar tu negocio. Totalmente gratis el primer mes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry options={{ key: "mui" }}>
          <Providers>
            <NotificationProvider>
              <Box
                component={"main"}
                sx={{
                  backgroundImage: "url('/img/background-landpage.svg')",
                  backgroundColor: "#F3F4F6",
                  backgroundPosition: "100% ",
                  backgroundSize: "cover",
                  backgroundOrigin: "content-box",
                  height: "100vh",
                }}
              >
                <Header />
                <Box>{children}</Box>
                <Footer />
              </Box>
            </NotificationProvider>
          </Providers>
        </ThemeRegistry>
      </body>
    </html>
  );
}
