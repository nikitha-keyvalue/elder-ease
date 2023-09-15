import { Avatar, Box, IconButton, Typography } from "@mui/material";
import SearchBar from "../Home/components/SearchBar";
import BookingsCard from "./components/Card";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";

const MyBookings: React.FC = () => {
  let navigate = useNavigate();
  return (
    <>
      {/* <Navbar /> */}
      <Box padding={"16px"}>
        <Box onClick={() => navigate(-1)}>
          <ArrowBackIosNewIcon sx={{ marginBottom: "12px", color: "#000" }} />
        </Box>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Typography variant="h3" sx={{ color: "#000" }}>
            My Bookings
          </Typography>
          <IconButton sx={{ p: 0 }}>
            <Avatar alt="Remy Sharp" src="/user.png" />
          </IconButton>
        </Box>
        <SearchBar marginLeft={0} width={"100%"} />
        <Box marginTop={"40px"}>
          <BookingsCard />
        </Box>
      </Box>
    </>
  );
};

export default MyBookings;
