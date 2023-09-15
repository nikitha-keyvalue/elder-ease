import {
  Box,
  Button,
  Checkbox,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

import Map from "../Maps/Map";
import { useNavigate } from "react-router-dom";

const BASE_URL = "http://127.0.0.1:5000/api";

const ProfilePage = () => {
  const [addNewMember, setAddNewMember] = useState(false);

  const [userLocation, setUserLocation] = useState<google.maps.LatLngLiteral>({
    lat: 28.6139,
    lng: 77.209,
  });

  const [formData, setFormData] = useState({
    // Your form data here
    full_name: "",
    contact_number: "",
    age: "",
    gender: "",
    illness: "",
    is_alone: false,
    landmark: "",
    client_relationship: "",
    address: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    if (formData.full_name) {
      try {
        const response = await fetch(`${BASE_URL}/elder?client_id=4`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...formData, age: Number(formData.age) }),
        });

        if (response.status === 200) {
          navigate("/elder-ease/home");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

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
            sx={{ "& .MuiInputBase-input": { fontSize: "14px" } }}
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
            sx={{ "& .MuiInputBase-input": { fontSize: "14px" } }}
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
            <Typography sx={{ fontSize: "15px" }}>Add Elder</Typography>
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
          <form>
            <Grid item mb={2}>
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
                name="full_name"
                value={formData.full_name}
                onChange={handleInputChange}
                sx={{ "& .MuiInputBase-input": { fontSize: "14px" } }}
              />
            </Grid>
            <Grid item mb={2}>
              <TextField
                InputLabelProps={{
                  style: {
                    fontSize: "14px",
                  },
                }}
                label="Contact Number"
                variant="outlined"
                fullWidth
                name="contact_number"
                value={formData.contact_number}
                onChange={handleInputChange}
                sx={{ "& .MuiInputBase-input": { fontSize: "14px" } }}
              />
            </Grid>
            <Grid item mb={2}>
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
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                sx={{ "& .MuiInputBase-input": { fontSize: "14px" } }}
              />
            </Grid>
            <Grid item mb={2}>
              <TextField
                InputLabelProps={{
                  style: {
                    fontSize: "14px",
                  },
                }}
                label="LandMark"
                variant="outlined"
                fullWidth
                size="small"
                name="landmark"
                value={formData.landmark}
                onChange={handleInputChange}
                sx={{ "& .MuiInputBase-input": { fontSize: "14px" } }}
              />
            </Grid>
            <Grid item mb={2}>
              <TextField
                InputLabelProps={{
                  style: {
                    fontSize: "14px",
                  },
                }}
                label="Relationship"
                variant="outlined"
                fullWidth
                size="small"
                name="client_relationship"
                value={formData.client_relationship}
                onChange={handleInputChange}
                sx={{ "& .MuiInputBase-input": { fontSize: "14px" } }}
              />
            </Grid>
            <Grid item mb={2}>
              <Grid container gap="25px">
                <Grid item xs={6}>
                  <FormControl fullWidth size="small">
                    <InputLabel
                      id="demo-simple-select-label"
                      sx={{
                        fontSize: "14px",
                      }}
                    >
                      Gender
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Gender"
                      sx={{ "& .MuiInputBase-input": { fontSize: "14px" } }}
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                    >
                      <MenuItem value="M" sx={{ fontSize: "14px" }}>
                        Male
                      </MenuItem>
                      <MenuItem value="F" sx={{ fontSize: "14px" }}>
                        Female
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={5}>
                  <TextField
                    InputLabelProps={{
                      style: {
                        fontSize: "14px",
                      },
                    }}
                    label="Age"
                    variant="outlined"
                    fullWidth
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    sx={{ "& .MuiInputBase-input": { fontSize: "14px" } }}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item mb={2}>
              <Grid item mb={2}>
                <TextField
                  InputLabelProps={{
                    style: {
                      fontSize: "14px",
                    },
                  }}
                  label="Any illness that we should know about"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={2}
                  size="small"
                  name="illness"
                  value={formData.illness}
                  onChange={handleInputChange}
                  sx={{ "& .MuiInputBase-input": { fontSize: "14px" } }}
                />
              </Grid>
            </Grid>
            <Grid item mb={2}>
              <Map
                userLocation={userLocation}
                setUserLocation={setUserLocation}
              />
            </Grid>
            {/* <Grid item mb={1}>
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
                // name="additional"
                // value={formData.additional}
                onChange={handleInputChange}
              />
            </Grid> */}
          </form>

          <Grid
            item
            sx={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button
              variant="outlined"
              onClick={() => {
                setAddNewMember(false);
                handleSubmit();
              }}
            >
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
