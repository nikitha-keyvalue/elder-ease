import { Box, Typography } from "@mui/material";
import SearchBar from "../Home/components/SearchBar";
import BookingsCard from "./components/Card";

const MyBookings: React.FC = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        height="60px"
        sx={{ boxShadow: "0px 3px 6px rgb(119 143 157 / 26%)" }}
      >
        <Typography variant="h3" sx={{ ml: 3, color: "#00A699" }}>
          My Bookings
        </Typography>
      </Box>
      <Box paddingX={"15px"}>
        <SearchBar marginLeft={0} width={"100%"} />
        <Box marginTop={"20px"}>
          <BookingsCard />
        </Box>
      </Box>
    </>
  );
};

export default MyBookings;
