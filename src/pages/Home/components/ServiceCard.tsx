import * as React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { Button, Typography } from "@mui/material";
import animationData from "../../../hospital.json";
import Lottie from "react-lottie";
import { useNavigate } from "react-router-dom";
// import StarRateIcon from "@mui/icons-material/StarRate";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  lineHeight: "60px",
  // height: "171px",
}));

// const darkTheme = createTheme({ palette: { mode: 'dark' } });
// const lightTheme = createTheme({ palette: { mode: 'light' } });

export default function ServiceCard() {
  const defaultOptions = {
    autoplay: true,
    loop: true,
    animationData: animationData,
  };

  const navigate = useNavigate();

  return (
    <div>
      <Box
        sx={{
          p: 2,
          borderRadius: 2,
          bgcolor: "background.default",
          display: "grid",
          gridTemplateColumns: { md: "1fr" },
          gap: 2,
        }}
      >
        {[0, 1, 2, 3, 4, 6, 8, 12, 16, 24].map((elevation) => (
          <Item key={elevation} elevation={2}>
            <div style={{ display: "flex" }}>
              <div
                style={{
                  paddingTop: "13px",
                  width: "40%",
                  minWidth: "40%",
                }}
              >
                {/* <img
                  src="/hospital-visit.png"
                  alt="hospital"
                  width="93%"
                  height="85%"
                /> */}
                <Lottie width={130} height={118} options={defaultOptions} />
                {/* <Box>
                  {[1, 2, 3, 4, 5].map((_i) => (
                    <StarRateIcon sx={{ width: "10%" }} />
                  ))}
                </Box> */}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  paddingTop: "17px",
                  paddingBottom: "17px",
                }}
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  color="#000"
                  textAlign={"left"}
                >
                  Title
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    textAlign: "justify",
                    marginRight: "20px",
                    lineHeight: "1",
                  }}
                >
                  subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Quos blanditiis tenetur Lorem ipsum dolor sit amet
                </Typography>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row-reverse",
                    marginRight: "20px",
                    marginTop: "10px",
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{ width: "57%", fontSize: "12px", color: "#fff" }}
                    onClick={() => {
                      navigate("/elder-ease/home/service-details");
                    }}
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </div>
          </Item>
        ))}
      </Box>
    </div>
  );
}
