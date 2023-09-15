import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const BookingsCard: React.FC = () => {
  return (
    <>
      <Box>
        <Card variant="outlined">
          <CardContent>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Box
                sx={{
                  backgroundColor: "#33bf33a3",
                  borderRadius: "50%",
                  width: "45px",
                  height: "45px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                }}
              >
                <AddShoppingCartIcon />
              </Box>
              <Typography variant="h5">Health Store Delivery</Typography>
              <MoreHorizIcon sx={{ color: "#fff" }} />
            </Box>
          </CardContent>
          <CardActions></CardActions>
        </Card>
      </Box>
    </>
  );
};

export default BookingsCard;
