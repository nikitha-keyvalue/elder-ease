import {
  Box,
  Button,
  Checkbox,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

const ProfilePage = () => {
  const [addNewMember, setAddNewMember] = useState(false);

  return (
    <Box mb={2}>
      <Box
        sx={({ palette }: any) => ({
          backgroundColor: palette.primary.main,
          height: "90px",
          display: "flex",
          alignItems: "center",
          mb: 2,
        })}
      >
        <Typography sx={{ ml: 2, color: "whitesmoke" }}>
          Set Up Your Profile
        </Typography>
      </Box>
      <Grid
        container
        display="flex"
        flexDirection="column"
        sx={{ paddingX: "10px" }}
        gap="15px"
      >
        <Typography variant="h5">PRIMARY DETAILS</Typography>
        <Grid item>
          <TextField
            InputLabelProps={{
              style: {
                fontSize: "14px",
              },
            }}
            label="Full Name"
            variant="outlined"
            fullWidth
            size="small"
          />
        </Grid>
        <Grid item>
          <TextField
            InputLabelProps={{
              style: {
                fontSize: "14px",
              },
            }}
            label="Contact Number"
            variant="outlined"
            fullWidth
            size="small"
          />
        </Grid>
        <Grid item>
          <TextField
            InputLabelProps={{
              style: {
                fontSize: "14px",
              },
            }}
            label="Email Address"
            variant="outlined"
            fullWidth
            size="small"
          />
        </Grid>
      </Grid>
      {!addNewMember && (
        <Grid item px={2}>
          <Button
            variant="contained"
            onClick={() => setAddNewMember(true)}
            fullWidth
            sx={{
              mt: 2,
              color: "#ffffff",
              justifySelf: "center",
              display: "flex",
            }}
          >
            <AddIcon />
            Add a grandpal
          </Button>
        </Grid>
      )}
      {addNewMember && (
        <Grid
          container
          sx={{ px: "10px", mt: 1 }}
          display="flex"
          flexDirection="column"
          gap="10px"
        >
          <Grid container display="flex" justifyContent="space-between">
            <Grid item>
              <Typography variant="h5">GRANDPAL DETAILS</Typography>
            </Grid>
            <Grid item>
              <DeleteIcon
                sx={{ color: "#00A699" }}
                onClick={() => setAddNewMember(false)}
              />
            </Grid>
          </Grid>
          <Grid item>
            <TextField
              InputLabelProps={{
                style: {
                  fontSize: "14px",
                },
              }}
              label="Full Name"
              variant="outlined"
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item>
            <TextField
              InputLabelProps={{
                style: {
                  fontSize: "14px",
                },
              }}
              label="Contact Number"
              variant="outlined"
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item>
            <TextField
              InputLabelProps={{
                style: {
                  fontSize: "14px",
                },
              }}
              label="Address"
              multiline
              rows={2}
              variant="outlined"
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item>
            <TextField
              InputLabelProps={{
                style: {
                  fontSize: "14px",
                },
              }}
              label="Pincode"
              variant="outlined"
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item>
            <TextField
              InputLabelProps={{
                style: {
                  fontSize: "14px",
                },
              }}
              label="Any medical conditions that we need to know about"
              multiline
              rows={2}
              variant="outlined"
              fullWidth
              size="small"
            />
          </Grid>
          <Grid
            item
            sx={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button variant="outlined" onClick={() => setAddNewMember(false)}>
              Save Details
            </Button>
          </Grid>
        </Grid>
      )}
      <Grid item display="flex" direction="row" alignItems="center" mt={1}>
        <Checkbox defaultChecked />
        <Typography variant="body2">
          Do you need health record management ?
        </Typography>
      </Grid>
    </Box>
  );
};

export default ProfilePage;
