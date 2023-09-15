import { Button, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Lottie from "react-lottie";

import animationData from "../../animations/signing-contract.json";

const RegisterPage = () => {
  const defaultOptions = {
    autoplay: true,
    loop: true,
    animationData: animationData,
  };

  return (
    <Box
      color="primary"
      sx={(palette) => ({
        display: "flex",
        flexDirection: "column",
        padding: "10px",
        height: "95vh",
        justifyContent: "center",
        alignItems: "center",
        width: "100wv",
        gap: "15px",
        color: (palette as any)?.primary?.main,
      })}
    >
      {/* <>
        <Typography variant="h5">Elder</Typography>

        <Lottie
          width={200}
          height={200}
          // eventListeners={eventListeners}
          options={defaultOptions}
        />

        <Typography variant="h5">Welcome Back !</Typography>
        <Typography variant="h6" textAlign="center">
          Please login or sign up to continue using our app
        </Typography>
        <Box paddingY={2} display="flex" gap={2} flexDirection="column">
          <TextField label="Email" variant="outlined" fullWidth />
          <TextField label="Password" variant="outlined" fullWidth />
          <Button variant="contained" fullWidth sx={{ display: "flex" }}>
            <Typography variant="h4" textAlign="center" color="#ffff">
              Sign In
            </Typography>
          </Button>
        </Box>
      </> */}

      <>
        <Typography variant="h5">Elder Ease</Typography>

        <Lottie width={200} height={200} options={defaultOptions} />

        <Typography variant="h5">REGISTER</Typography>
        <Typography variant="h6" textAlign="center">
          Please sign up to continue using our app
        </Typography>
        <Box paddingY={2} display="flex" gap={2} flexDirection="column">
          <TextField
            InputLabelProps={{
              style: {
                fontSize: "14px",
              },
            }}
            label="Email"
            variant="outlined"
            fullWidth
            size="small"
          />
          <TextField
            InputLabelProps={{
              style: {
                fontSize: "14px",
              },
            }}
            label="Password"
            variant="outlined"
            fullWidth
            size="small"
          />
          <TextField
            InputLabelProps={{
              style: {
                fontSize: "14px",
              },
            }}
            label="Confirm password"
            variant="outlined"
            fullWidth
            size="small"
          />
          <Button variant="contained" fullWidth sx={{ display: "flex" }}>
            <Typography variant="h5" textAlign="center" color="#ffff">
              Sign Up
            </Typography>
          </Button>
        </Box>
      </>
    </Box>
  );
};

export default RegisterPage;
