import { Box, Typography, Card, CardContent, Divider } from "@mui/material";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import Map from "../../Maps/Map";

const ViewBooking: React.FC = () => {
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
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        height="60px"
        sx={{ boxShadow: "0px 3px 6px rgb(119 143 157 / 26%)" }}
      >
        <Typography variant="h3" sx={{ color: "rgb(7,55,99)", ml: 2 }}>
          Booking #102356
        </Typography>
      </Box>
      <Box paddingX={"16px"} mb={2}>
        <Card
          variant="outlined"
          sx={{
            boxShadow: "0px 3px 6px rgb(119 143 157 / 26%)",
            border: 0,
            borderRadius: "3px",
            marginTop: "10px",
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
              style={{ color: "#db8149bd", marginLeft: "8px", fontWeight: 700 }}
            >
              Estimated Amount: ₹500
            </span>
            <Typography
              variant="h6"
              sx={{
                color: "#000",
                marginLeft: "9px",
                marginTop: "8px",
                fontWeight: 100,
              }}
            >
              *Note that this amount is only applicable for the first four
              hours. An extra ₹50 will be charged for every extra hour.
            </Typography>
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
