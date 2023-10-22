"use client";

import FormLogin from "../../components/FormLogin/FormLogin";
import { loginUser } from "../../api/users";
import { useMutation } from "@tanstack/react-query";
import { enqueueSnackbar } from "notistack";
import { useUserContext } from "../../contexts/UserContext";
import { useRouter } from "next/navigation";
import { Box } from "@mui/material";

const Login = () => {
  const { login } = useUserContext();
  const router = useRouter();
  const loginMutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      enqueueSnackbar(`Bienvenido ${data.data.nombre} ${data.data.apellidos}`, {
        variant: "success",
      });
      login(data.data);

      router.push("/home");
    },
    onError: (error) => {
      enqueueSnackbar(error.response.data, {
        variant: "error",
      });
    },
  });
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
      <FormLogin loginMutation={loginMutation} />
    </Box>
  );
};

export default Login;
