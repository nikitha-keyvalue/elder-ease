import {
  Box,
  Typography,
  IconButton,
  Avatar,
  Card,
  CardContent,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import Map from "../../Maps/Map";

const ViewBooking: React.FC = () => {
  const navigate = useNavigate();

  const userLocation = {
    lat: 13.031812,
    lng: 77.4793,
  };

  const destinationLocation = {
    lat: 12.90954,
    lng: 77.64878,
  };

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
            Booking #102356
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
                Booking #102356
              </div>
              <MoreHorizIcon sx={{ color: "#060c0c40" }} />
            </Box>
            <div style={{ fontWeight: 700 }}>
              <span>Status:</span>
              <span style={{ color: "#25a12a", marginLeft: "8px" }}>
                Started
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
          </CardContent>
        </Card>
        <Map
          userLocation={userLocation}
          destinationLocation={destinationLocation}
          isTracking
        />
      </Box>
    </>
  );
};

export default ViewBooking;
