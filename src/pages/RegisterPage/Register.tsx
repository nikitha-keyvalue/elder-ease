import { Button, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Lottie from "react-lottie";

import animationData from "../../animations/signing-contract.json";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BASE_URL = "http://127.0.0.1:5000/api";

const RegisterPage = () => {
  const defaultOptions = {
    autoplay: true,
    loop: true,
    animationData: animationData,
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = async () => {
    if (email && password) {
      try {
        const response = await fetch(`${BASE_URL}/client`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            full_name: "name",
            contact_number: "9067168910",
            address: "address",
            email: email,
            password: password,
          }),
        });

        if (response) {
          navigate("/elder-ease/profile");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
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
      <>
        {/* <img src="./logo.png" alt="logo" /> */}
        <Typography variant="h1" fontFamily="cursive">
          Elder Ease
        </Typography>

        <Lottie width={200} height={200} options={defaultOptions} />

        <Typography variant="h5">REGISTER</Typography>
        <Typography variant="h6" textAlign="center">
          Please sign up to continue using our app
        </Typography>
        <Box
          paddingY={2}
          display="flex"
          gap={2}
          flexDirection="column"
          sx={{ width: "90%" }}
        >
          <TextField
            InputLabelProps={{
              style: {
                fontSize: "14px",
              },
            }}
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
            fullWidth
            size="small"
            sx={{ "& .MuiInputBase-input": { fontSize: "14px" } }}
          />
          <TextField
            InputLabelProps={{
              style: {
                fontSize: "14px",
              },
            }}
            type="password"
            label="Password"
            variant="outlined"
            fullWidth
            size="small"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ "& .MuiInputBase-input": { fontSize: "14px" } }}
          />
          <TextField
            InputLabelProps={{
              style: {
                fontSize: "14px",
              },
            }}
            type="password"
            label="Confirm password"
            variant="outlined"
            fullWidth
            size="small"
            sx={{ "& .MuiInputBase-input": { fontSize: "14px" } }}
          />
          <Button
            variant="contained"
            fullWidth
            sx={{ display: "flex" }}
            onClick={() => handleRegister()}
          >
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
