import {
  Box,
  Typography,
  IconButton,
  Avatar,
  Card,
  CardContent,
  Divider,
  TextField,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useState } from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";

const ViewCompletedBooking: React.FC = () => {
  const navigate = useNavigate();
  const [rating, setRating] = useState([0, 0, 0, 0, 0]);
  console.log({ rating });
  return (
    <>
      <Box padding={"16px"}>
        <Box onClick={() => navigate(-1)}>
          <ArrowBackIosNewIcon sx={{ marginBottom: "8px", color: "#000" }} />
        </Box>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography variant="h3" sx={{ color: "#000" }}>
            Booking #102359
          </Typography>
          <IconButton sx={{ p: 0 }}>
            <Avatar alt="Remy Sharp" src="/user.png" />
          </IconButton>
        </Box>
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
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  color: "#060c0c40",
                  marginBottom: "13px",
                }}
              >
                Booking #102359
              </div>
              <MoreHorizIcon sx={{ color: "#060c0c40" }} />
            </Box>
            <div style={{ fontWeight: 700 }}>
              <span>Status:</span>
              <span style={{ color: "rgb(90 80 92 / 52%)", marginLeft: "8px" }}>
                Completed
              </span>
            </div>
            <Typography variant="subtitle2" fontSize={"12px"} marginTop={"2px"}>
              Date: 15/09/2023
            </Typography>
            <Divider sx={{ marginTop: "18px" }} />
            <Box sx={{ marginTop: "16px" }}>
              <Typography fontSize={"13px"} fontWeight={700}>
                Hospital Name:
              </Typography>
              <Typography
                fontSize={"13px"}
                fontWeight={600}
                sx={{ color: "rgb(0 0 0 / 33%)" }}
              >
                Riverside Wellness Institute
              </Typography>
            </Box>
            <Box sx={{ marginTop: "16px" }}>
              <Typography fontSize={"13px"} fontWeight={700}>
                Hospital Address:
              </Typography>
              <Typography
                fontSize={"13px"}
                fontWeight={600}
                sx={{ color: "rgb(0 0 0 / 33%)" }}
              >
                789 Sunshine Avenue Greenwood Lane Extension Bengaluru,
                Karnataka 560123 India
              </Typography>
            </Box>
            <Box sx={{ marginTop: "16px" }}>
              <Typography fontSize={"13px"} fontWeight={700}>
                Pickup Location:
              </Typography>
              <Typography
                fontSize={"13px"}
                fontWeight={600}
                sx={{ color: "rgb(0 0 0 / 33%)" }}
              >
                567 Serenity Boulevard Royal Oak Street, Golden Valley
                Bangalore, 411456 India
              </Typography>
            </Box>
            <Box sx={{ marginTop: "16px" }}>
              <Typography fontSize={"13px"} fontWeight={700}>
                Pickup Date:
              </Typography>
              <Typography
                fontSize={"13px"}
                fontWeight={600}
                sx={{ color: "rgb(0 0 0 / 33%)" }}
              >
                16/09/2023
              </Typography>
            </Box>
            <Box sx={{ marginTop: "16px" }}>
              <Typography fontSize={"13px"} fontWeight={700}>
                Pickup Time:
              </Typography>
              <Typography
                fontSize={"13px"}
                fontWeight={600}
                sx={{ color: "rgb(0 0 0 / 33%)" }}
              >
                5:30 PM
              </Typography>
            </Box>
            <Divider sx={{ marginTop: "18px" }} />
            <Box sx={{ marginTop: "16px" }}>
              <Typography fontSize={"13px"} fontWeight={700}>
                Is this a recurring event?
              </Typography>
              <Typography
                fontSize={"13px"}
                fontWeight={600}
                sx={{ color: "rgb(0 0 0 / 33%)" }}
              >
                No
              </Typography>
            </Box>
            <Box sx={{ marginTop: "16px" }}>
              <Typography fontSize={"13px"} fontWeight={700}>
                Do you need wheelchair assistance?
              </Typography>
              <Typography
                fontSize={"13px"}
                fontWeight={600}
                sx={{ color: "rgb(0 0 0 / 33%)" }}
              >
                Yes
              </Typography>
            </Box>
            <Box sx={{ marginTop: "16px" }}>
              <Typography fontSize={"13px"} fontWeight={700}>
                What is your preferred mode of transportation?
              </Typography>
              <Typography
                fontSize={"13px"}
                fontWeight={600}
                sx={{ color: "rgb(0 0 0 / 33%)" }}
              >
                I have a car, drive me.
              </Typography>
            </Box>
            <Box sx={{ marginTop: "16px" }}>
              <Typography fontSize={"13px"} fontWeight={700}>
                What gender do you prefer for your buddy?
              </Typography>
              <Typography
                fontSize={"13px"}
                fontWeight={600}
                sx={{ color: "rgb(0 0 0 / 33%)" }}
              >
                Female
              </Typography>
            </Box>
            <Divider sx={{ marginTop: "18px" }} />
            <Box sx={{ marginTop: "16px" }}>
              <Typography fontSize={"13px"} fontWeight={700}>
                Buddy Name:
              </Typography>
              <Typography
                fontSize={"13px"}
                fontWeight={600}
                sx={{ color: "rgb(0 0 0 / 33%)" }}
              >
                Anika Patel
              </Typography>
            </Box>
            <Box sx={{ marginTop: "16px" }}>
              <Typography fontSize={"13px"} fontWeight={700}>
                Buddy Gender:
              </Typography>
              <Typography
                fontSize={"13px"}
                fontWeight={600}
                sx={{ color: "rgb(0 0 0 / 33%)" }}
              >
                Female
              </Typography>
            </Box>
            <Box sx={{ marginTop: "16px" }}>
              <Typography fontSize={"13px"} fontWeight={700}>
                Phone Number:
              </Typography>
              <Typography
                fontSize={"13px"}
                fontWeight={600}
                sx={{ color: "rgb(0 0 0 / 33%)" }}
              >
                +91-9876789678
              </Typography>
            </Box>
            <Divider sx={{ marginY: "18px" }} />
            <span
              style={{ color: "#25a12a", marginLeft: "8px", fontWeight: 700 }}
            >
              Paid: ₹450.00
            </span>
            <Divider sx={{ marginY: "18px" }} />
            <Typography
              sx={{ fontSize: "17px", fontWeight: 700, marginBottom: "8px" }}
            >
              Submit feedback for your Buddy
            </Typography>
            <Box position={"relative"} right={"8px"}>
              <Box display={"flex"} alignItems={"center"}>
                <IconButton sx={{ p: 0 }}>
                  <Avatar
                    alt="Remy Sharp"
                    src="/buddy.jpg"
                    sx={{ width: "52px" }}
                  />
                </IconButton>
                <Typography variant="h6" sx={{ color: "#000" }}>
                  Anika Patel
                </Typography>
              </Box>
              <Box marginLeft={"7px"}>
                {rating.map((r, i) => (
                  <>
                    {r === 0 ? (
                      <StarBorderIcon
                        key={i}
                        onClick={() => {
                          let arr: number[] = [0, 0, 0, 0, 0];
                          arr.fill(1, 0, i + 1);
                          console.log(arr);
                          setRating(arr);
                        }}
                        sx={{ color: "#e6bb67", width: "18px" }}
                      />
                    ) : (
                      <StarIcon
                        key={i}
                        onClick={() => {
                          let arr: number[] = [0, 0, 0, 0, 0];
                          arr.fill(1, 0, i + 1);
                          setRating(arr);
                        }}
                        sx={{ color: "#e6bb67", width: "18px" }}
                      />
                    )}
                  </>
                ))}
              </Box>
              <TextField
                id="outlined-multiline-static"
                label="Type your feedback here..."
                multiline
                rows={4}
                InputLabelProps={{
                  style: {
                    fontSize: "14px",
                  },
                }}
                size="small"
                sx={{
                  width: "100%",
                  "& .MuiInputBase-input": { fontSize: "14px" },
                }}
              />
              <Button
                variant="contained"
                style={{ marginTop: "10px", fontWeight: 600 }}
              >
                Submit
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default ViewCompletedBooking;
