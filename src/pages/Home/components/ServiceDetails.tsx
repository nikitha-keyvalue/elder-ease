import Lottie from "react-lottie";
import animationData from "../../../hospital.json";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import Navbar from "./NavBar";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ServiceDetails: React.FC = () => {
  const defaultOptions = {
    autoplay: true,
    loop: true,
    animationData: animationData,
  };

  const [recurringEventValue, setRecurringEventValue] = useState(false);

  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <Lottie
        width={"200px"}
        options={defaultOptions}
        style={{ paddingTop: "18px" }}
      />
      <Box padding={"18px"}>
        <Typography variant="h4" gutterBottom>
          Reliable rides to checkups at hospitals
        </Typography>
        <Box>
          <Typography
            variant="subtitle1"
            gutterBottom
            textAlign={"justify"}
            fontSize={"16px"}
            lineHeight={1.25}
            marginBottom={"12px"}
            sx={{ fontSize: "10px" }}
          >
            Experience the reassurance of a dedicated buddy accompanying you
            during hospital visits. We ensure you're never alone, supporting you
            throughout the entire process, from the journey there to the journey
            back home. Your comfort and care are our utmost priorities.
          </Typography>
        </Box>
        {/* <Box display={'flex'} justifyContent={'center'}>
          <Typography variant="h4" sx={{ textDecoration: 'underline' }}>Add Details</Typography>
        </Box> */}
        <Typography variant="h5" gutterBottom>
          Enter Service Details
        </Typography>
        <TextField
          InputLabelProps={{
            style: {
              fontSize: "14px",
            },
          }}
          label="Hospital's Name"
          variant="outlined"
          fullWidth
          size="small"
          sx={{ mb: 1.5, "& .MuiInputBase-input": { fontSize: "14px" } }}
        />

        <TextField
          InputLabelProps={{
            style: {
              fontSize: "14px",
            },
          }}
          label="Doctor's Name"
          variant="outlined"
          fullWidth
          size="small"
          sx={{ mb: 1.5, "& .MuiInputBase-input": { fontSize: "14px" } }}
        />
        <Grid container display="flex" justifyContent="space-between" mb={1.5}>
          <Grid item xs={6}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Pickup Date"
                sx={{
                  "& .MuiInputBase-input": { fontSize: "14px" },
                  "& .MuiInputLabel-root": { fontSize: "14px" },
                }}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={5}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <TimePicker
                label="Pickup Time"
                sx={{
                  "& .MuiInputBase-input": { fontSize: "14px" },
                  "& .MuiInputLabel-root": { fontSize: "14px" },
                }}
              />
            </LocalizationProvider>
          </Grid>
        </Grid>
        <TextField
          InputLabelProps={{
            style: {
              fontSize: "14px",
            },
          }}
          label="Pick Up Location"
          variant="outlined"
          fullWidth
          size="small"
          sx={{ mb: 1.5, "& .MuiInputBase-input": { fontSize: "14px" } }}
        />
        <FormControl fullWidth size="small">
          <InputLabel
            id="demo-simple-select-label"
            sx={{
              fontSize: "14px",
            }}
          >
            Buddy gender preference
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label={"Buddy gender preference"}
            sx={{ "& .MuiInputBase-input": { fontSize: "14px" } }}
          >
            <MenuItem value={10} sx={{ fontSize: "15px" }}>
              Male
            </MenuItem>
            <MenuItem value={20} sx={{ fontSize: "15px" }}>
              Female
            </MenuItem>
          </Select>
        </FormControl>
        <FormControlLabel
          control={<Checkbox />}
          label={
            <Typography sx={{ fontSize: "14px" }}>
              Need wheelchair assistance
            </Typography>
          }
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={recurringEventValue}
              onChange={(e) => setRecurringEventValue(e.target.checked)}
            />
          }
          label={
            <Typography sx={{ fontSize: "14px" }}>
              Check if this is a recurring service
            </Typography>
          }
        />
        {recurringEventValue && (
          <Grid container sx={{ display: "flex", ml: 3 }}>
            <FormControl sx={{ display: "block" }} size="small">
              <RadioGroup
                row
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="daily"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="daily"
                  control={<Radio size="small" />}
                  label={
                    <Typography sx={{ fontSize: "12px" }}>Daily</Typography>
                  }
                />
                <FormControlLabel
                  value="weekly"
                  control={<Radio size="small" />}
                  label={
                    <Typography sx={{ fontSize: "12px" }}>Weekly</Typography>
                  }
                />
                <FormControlLabel
                  value="monthly"
                  control={<Radio size="small" />}
                  label={
                    <Typography sx={{ fontSize: "12px" }}>Monthly</Typography>
                  }
                />
              </RadioGroup>
            </FormControl>
          </Grid>
        )}
        <Typography sx={{ fontSize: "14px" }}>
          Preferred mode of transportation
        </Typography>
        <Grid container sx={{ display: "flex", ml: 3 }}>
          <FormControl sx={{ display: "block" }} size="small">
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="daily"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="daily"
                control={<Radio size="small" />}
                label={
                  <Typography sx={{ fontSize: "12px" }}>
                    I have a car, drive me
                  </Typography>
                }
              />
              <FormControlLabel
                value="weekly"
                control={<Radio size="small" />}
                label={
                  <Typography sx={{ fontSize: "12px" }}>
                    Auto/Public Transport
                  </Typography>
                }
              />
              <FormControlLabel
                value="monthly"
                control={<Radio size="small" />}
                label={
                  <Typography sx={{ fontSize: "12px" }}>
                    Come pick me up with a vehicle
                  </Typography>
                }
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Box display={"flex"} flexDirection={"row-reverse"} mt={2} gap="10px">
          <Button
            variant="outlined"
            onClick={() => navigate("/elder-ease/home")}
          >
            Cancel
          </Button>
          <Button variant="contained" sx={{ color: "#fff" }}>
            Book Now
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default ServiceDetails;
