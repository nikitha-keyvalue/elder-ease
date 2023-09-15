import { Box, Card, CardContent, Typography } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";

const BookingsCard: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box>
        {" "}
        <Card
          variant="outlined"
          sx={{
            boxShadow: "0px 3px 6px rgb(119 143 157 / 26%)",
            border: 0,
            borderRadius: "3px",
          }}
          onClick={() => {
            navigate("/elder-buddy/view-booking/1");
          }}
        >
          <CardContent>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Box
                sx={{
                  backgroundColor: "#007cff94",
                  borderRadius: "50%",
                  width: "32px",
                  height: "32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                }}
              >
                <LocalHospitalIcon sx={{ width: "16px" }} />
              </Box>
              <Typography
                variant="h5"
                sx={{ fontSize: "14px", marginRight: "118px", color: "#000" }}
              >
                Hospital Visit
              </Typography>
              <MoreHorizIcon sx={{ color: "#060c0c40" }} />
            </Box>
            <Box
              display={"flex"}
              flexDirection={"column"}
              sx={{
                marginLeft: "2px",
                marginTop: "12px",
              }}
            >
              <Box display={"flex"} marginBottom={"3px"}>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: "14px",
                    marginRight: "59px",
                    color: "#0000005c",
                  }}
                >
                  Booking ID:
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: "14px",
                    color: "#00000085",
                  }}
                >
                  #102356
                </Typography>
              </Box>
              <Box display={"flex"} marginBottom={"3px"}>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: "14px",
                    marginRight: "43px",
                    color: "#0000005c",
                  }}
                >
                  Booking date:
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: "14px",
                    color: "#00000085",
                  }}
                >
                  15/09/2023
                </Typography>
              </Box>
              <Box display={"flex"}>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: "14px",
                    marginRight: "34px",
                    color: "#0000005c",
                  }}
                >
                  Estimated amt:
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: "14px",
                    color: "#00000085",
                  }}
                >
                  ₹500
                </Typography>
              </Box>
              <Box
                sx={{
                  padding: "11px",
                  backgroundColor: "#01796426",
                  textAlign: "center",
                  borderRadius: "14px",
                  marginTop: "20px",
                }}
              >
                <Typography
                  variant="h3"
                  fontSize={"16px"}
                  sx={{ color: "#126359" }}
                >
                  Started
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
        <Card
          variant="outlined"
          sx={{
            boxShadow: "0px 3px 6px rgb(119 143 157 / 26%)",
            border: 0,
            borderRadius: "3px",
            marginTop: "30px",
          }}
        >
          <CardContent>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Box
                sx={{
                  backgroundColor: "#33bf33a3",
                  borderRadius: "50%",
                  width: "32px",
                  height: "32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                }}
              >
                <AddShoppingCartIcon sx={{ width: "16px" }} />
              </Box>
              <Typography
                variant="h5"
                sx={{ fontSize: "14px", marginRight: "78px", color: "#000" }}
              >
                Medicine Purchase
              </Typography>
              <MoreHorizIcon sx={{ color: "#060c0c40" }} />
            </Box>
            <Box
              display={"flex"}
              flexDirection={"column"}
              sx={{
                marginLeft: "2px",
                marginTop: "12px",
              }}
            >
              <Box display={"flex"} marginBottom={"3px"}>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: "14px",
                    marginRight: "59px",
                    color: "#0000005c",
                  }}
                >
                  Booking ID:
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: "14px",
                    color: "#00000085",
                  }}
                >
                  #102357
                </Typography>
              </Box>
              <Box display={"flex"} marginBottom={"3px"}>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: "14px",
                    marginRight: "43px",
                    color: "#0000005c",
                  }}
                >
                  Booking date:
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: "14px",
                    color: "#00000085",
                  }}
                >
                  15/09/2023
                </Typography>
              </Box>
              <Box display={"flex"}>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: "14px",
                    marginRight: "34px",
                    color: "#0000005c",
                  }}
                >
                  Estimated amt:
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: "14px",
                    color: "#00000085",
                  }}
                >
                  ₹100
                </Typography>
              </Box>
              <Box
                sx={{
                  padding: "11px",
                  backgroundColor: "#efefc173",
                  textAlign: "center",
                  borderRadius: "14px",
                  marginTop: "20px",
                }}
              >
                <Typography
                  variant="h3"
                  fontSize={"16px"}
                  sx={{ color: "#db8149" }}
                >
                  Accepted
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
        <Card
          variant="outlined"
          sx={{
            boxShadow: "0px 3px 6px rgb(119 143 157 / 26%)",
            border: 0,
            borderRadius: "3px",
            marginTop: "30px",
          }}
        >
          <CardContent>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Box
                sx={{
                  backgroundColor: "#e1ad34a3",
                  borderRadius: "50%",
                  width: "32px",
                  height: "32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                }}
              >
                <TimeToLeaveIcon sx={{ width: "16px" }} />
              </Box>
              <Typography
                variant="h5"
                sx={{ fontSize: "14px", marginRight: "121px", color: "#000" }}
              >
                Pickup/Drop
              </Typography>
              <MoreHorizIcon sx={{ color: "#060c0c40" }} />
            </Box>
            <Box
              display={"flex"}
              flexDirection={"column"}
              sx={{
                marginLeft: "2px",
                marginTop: "12px",
              }}
            >
              <Box display={"flex"} marginBottom={"3px"}>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: "14px",
                    marginRight: "59px",
                    color: "#0000005c",
                  }}
                >
                  Booking ID:
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: "14px",
                    color: "#00000085",
                  }}
                >
                  #102358
                </Typography>
              </Box>
              <Box display={"flex"} marginBottom={"3px"}>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: "14px",
                    marginRight: "43px",
                    color: "#0000005c",
                  }}
                >
                  Booking date:
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: "14px",
                    color: "#00000085",
                  }}
                >
                  15/09/2023
                </Typography>
              </Box>
              <Box display={"flex"}>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: "14px",
                    marginRight: "34px",
                    color: "#0000005c",
                  }}
                >
                  Estimated amt:
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: "14px",
                    color: "#00000085",
                  }}
                >
                  ₹200
                </Typography>
              </Box>
              <Box
                sx={{
                  padding: "11px",
                  backgroundColor: "#4589f533",
                  textAlign: "center",
                  borderRadius: "14px",
                  marginTop: "20px",
                }}
              >
                <Typography
                  variant="h3"
                  fontSize={"16px"}
                  sx={{ color: "#4287f5" }}
                >
                  Requested
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
        <Card
          variant="outlined"
          sx={{
            boxShadow: "0px 3px 6px rgb(119 143 157 / 26%)",
            border: 0,
            borderRadius: "3px",
            marginTop: "30px",
          }}
          onClick={() => {
            navigate("/elder-buddy/view-booking/2");
          }}
        >
          <CardContent>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Box
                sx={{
                  backgroundColor: "#e37493",
                  borderRadius: "50%",
                  width: "32px",
                  height: "32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                }}
              >
                <ShoppingCartIcon sx={{ width: "16px" }} />
              </Box>
              <Typography
                variant="h5"
                sx={{ fontSize: "14px", marginRight: "98px", color: "#000" }}
              >
                Companionship
              </Typography>
              <MoreHorizIcon sx={{ color: "#060c0c40" }} />
            </Box>
            <Box
              display={"flex"}
              flexDirection={"column"}
              sx={{
                marginLeft: "2px",
                marginTop: "12px",
              }}
            >
              <Box display={"flex"} marginBottom={"3px"}>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: "14px",
                    marginRight: "59px",
                    color: "#0000005c",
                  }}
                >
                  Booking ID:
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: "14px",
                    color: "#00000085",
                  }}
                >
                  #102359
                </Typography>
              </Box>
              <Box display={"flex"} marginBottom={"3px"}>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: "14px",
                    marginRight: "43px",
                    color: "#0000005c",
                  }}
                >
                  Booking date:
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: "14px",
                    color: "#00000085",
                  }}
                >
                  15/09/2023
                </Typography>
              </Box>
              <Box display={"flex"}>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: "14px",
                    marginRight: "34px",
                    color: "#0000005c",
                  }}
                >
                  Estimated amt:
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: "14px",
                    color: "#00000085",
                  }}
                >
                  ₹450
                </Typography>
              </Box>
              <Box
                sx={{
                  padding: "11px",
                  backgroundColor: "#d7d5dd",
                  textAlign: "center",
                  borderRadius: "14px",
                  marginTop: "20px",
                }}
              >
                <Typography
                  variant="h3"
                  fontSize={"16px"}
                  sx={{ color: "#49515175" }}
                >
                  Completed
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default BookingsCard;
