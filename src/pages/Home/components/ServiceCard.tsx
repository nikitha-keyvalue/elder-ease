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
        <>
          <Item elevation={2}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  paddingTop: "13px",
                  width: "40%",
                  minWidth: "40%",
                }}
              >
                <img
                  src="/hospital.jpg"
                  alt="hospital"
                  width="93%"
                  height="56%"
                />
                {/* <Lottie width={130} height={118} options={defaultOptions} /> */}
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
                  variant="h5"
                  gutterBottom
                  color="#000"
                  textAlign={"left"}
                  lineHeight={1.2}
                >
                  Reliable rides to checkups at hospitals
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    textAlign: "left",
                    marginRight: "20px",
                    lineHeight: "1.3",
                    fontSize: '13px'
                  }}
                >
                  Experience the reassurance of a dedicated buddy accompanying
                  you during hospital visits.
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
                    Book now
                  </Button>
                </div>
              </div>
            </div>
          </Item>
          <Item elevation={2}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  paddingTop: "13px",
                  width: "40%",
                  minWidth: "40%",
                }}
              >
                <img
                  src="/medications_delivery.png"
                  alt="hospital"
                  width="93%"
                  height="56%"
                />
                {/* <Lottie width={130} height={118} options={defaultOptions} /> */}
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
                  variant="h5"
                  gutterBottom
                  color="#000"
                  textAlign={"left"}
                  lineHeight={1.2}
                >
                  Prescriptions, Right at your doorstep
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    textAlign: "left",
                    marginRight: "20px",
                    lineHeight: 1.3,
                    fontSize: '13px'
                  }}
                >
                  Get medications delivered to your loved ones' doorstep,
                  eliminating the stress of pharmacy visits and ensuring they
                  never miss a dose.
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
                    Book now
                  </Button>
                </div>
              </div>
            </div>
          </Item>
          <Item elevation={2}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  paddingTop: "13px",
                  width: "40%",
                  minWidth: "40%",
                }}
              >
                <img
                  src="/shopping_with_elderly.jpg"
                  alt="hospital"
                  width="93%"
                  height="56%"
                />
                {/* <Lottie width={130} height={118} options={defaultOptions} /> */}
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
                  variant="h5"
                  gutterBottom
                  color="#000"
                  textAlign={"left"}
                  lineHeight={1.2}
                >
                  Bridging Generations, One Outing at a Time
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    textAlign: "left",
                    marginRight: "20px",
                    lineHeight: 1.3,
                    fontSize: '13px'
                  }}
                >
                  Enjoy the company of a vibrant new generation buddy during
                  events and shopping sprees.
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
                    Book now
                  </Button>
                </div>
              </div>
            </div>
          </Item>
          <Item elevation={2}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  paddingTop: "13px",
                  width: "40%",
                  minWidth: "40%",
                }}
              >
                <img
                  src="/transportation.jpg"
                  alt="hospital"
                  width="93%"
                  height="56%"
                />
                {/* <Lottie width={130} height={118} options={defaultOptions} /> */}
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
                  variant="h5"
                  gutterBottom
                  color="#000"
                  textAlign={"left"}
                  lineHeight={1.2}
                >
                  Safe Travels, Trusted Companionship
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    textAlign: "left",
                    marginRight: "20px",
                    lineHeight: 1.3,
                    fontSize: '13px'
                  }}
                >
                  Whether heading to the hospital or the airport, our buddies
                  ensure a reliable and comforting journey. Your journey, our
                  responsibility.
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
                    Book now
                  </Button>
                </div>
              </div>
            </div>
          </Item>
          <Item elevation={2}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  paddingBottom: "13px",
                  width: "40%",
                  minWidth: "40%",
                }}
              >
                <Lottie width={130} height={118} options={defaultOptions} />
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
                  variant="h5"
                  gutterBottom
                  color="#000"
                  textAlign={"left"}
                  lineHeight={1.2}
                >
                  Reliable rides to checkups at hospitals
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    textAlign: "left",
                    marginRight: "20px",
                    lineHeight: 1.3,
                    fontSize: '13px'
                  }}
                >
                  Experience the reassurance of a dedicated buddy accompanying
                  you during hospital visits.
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
                    Book now
                  </Button>
                </div>
              </div>
            </div>
          </Item>
        </>
      </Box>
    </div>
  );
}
