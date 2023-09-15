import { Avatar, Box, IconButton, Typography } from "@mui/material";
import SearchBar from "../Home/components/SearchBar";
import BookingsCard from "./components/Card";

const MyBookings: React.FC = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Box padding={5}>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Typography variant="h3" sx={{ color: "#000" }}>
            My Bookings
          </Typography>
          <IconButton sx={{ p: 0 }}>
            <Avatar alt="Remy Sharp" src="/user.png" />
          </IconButton>
        </Box>
        <SearchBar marginLeft={0} width={"100%"} />
        <Box marginTop={'40px'}>
          <BookingsCard />
        </Box>
      </Box>
    </>
  );
};

export default MyBookings;
