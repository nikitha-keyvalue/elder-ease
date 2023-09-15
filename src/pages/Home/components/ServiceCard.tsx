import * as React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { Button, Typography } from "@mui/material";
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
  const navigate = useNavigate();

  const serviceCards = [
    {
      title: "Reliable rides to checkups at hospitals",
      subTitle:
        "Experience the reassurance of a dedicated buddy accompanying you during hospital visits.",
      src: "/hospital.jpg",
    },
    {
      title: "Prescriptions, Right at your doorstep",
      subTitle:
        "Get medications delivered to your loved ones' doorstep,eliminating the stress of pharmacy visits and ensuring they never miss a dose.",
      src: "/medications_delivery.png",
    },
    {
      title: "Bridging Generations, One Outing at a Time",
      subTitle:
        "Enjoy the company of a vibrant new generation buddy during events and shopping sprees.",
      src: "/shopping_with_elderly.jpg",
    },
    {
      title: "Safe Travels, Trusted Companionship",
      subTitle:
        "  Whether heading to the hospital or the airport, our buddies ensure a reliable and comforting journey. Your journey, our responsibility.",
      src: "/transportation.jpg",
    },
  ];

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
          {serviceCards.map((details) => {
            return (
              <Item
                elevation={2}
                sx={{ boxShadow: "0px 3px 6px 1px rgb(119 143 157 / 26%)" }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div
                    style={{
                      paddingTop: "13px",
                      width: "40%",
                      minWidth: "40%",
                    }}
                  >
                    <img
                      src={details.src}
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
                      textAlign={"left"}
                      lineHeight={1.2}
                    >
                      {details.title}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        textAlign: "left",
                        marginRight: "20px",
                        lineHeight: "1.3",
                        fontSize: "13px",
                      }}
                    >
                      {details.subTitle}
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
                        variant="outlined"
                        sx={{ width: "57%", fontSize: "12px" }}
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
            );
          })}
        </>
      </Box>
    </div>
  );
}
