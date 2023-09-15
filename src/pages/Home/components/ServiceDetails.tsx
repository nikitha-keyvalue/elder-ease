import Lottie from "react-lottie";
import animationData from "../../../hospital.json";
import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogContent,
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
import Map from "../../Maps/Map";

const BASE_URL = "http://127.0.0.1:5000/api";

const ServiceDetails: React.FC = () => {
  const defaultOptions = {
    autoplay: true,
    loop: true,
    animationData: animationData,
  };

  const [userLocation, setUserLocation] = useState<google.maps.LatLngLiteral>({
    lat: 28.6139,
    lng: 77.209,
  });

  const [openPaymentModal, setOpenPaymentModal] = useState(false);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [formData, setFormData] = useState({
    // Your form data here
    service_name: "hospital visit",
    date_of_service: null,
    time_of_service: null,
    pickup_location: "",
    pickup_latitude: "",
    pickup_longitude: "",
    gender_preference: "",
    recurring_event: false,
    recurring_freq: "daily",
    wheelchair_assistance: false,
    transportation: "car",
    status: "PENDING",
    elder_id: 1,
    client_id: 1,
    buddy_id: 1,
    hospital_name: "",
    doctor_name: "",
    appointment_time: "2001-09-29 03:00:00",
  });

  const [recurringEventValue, setRecurringEventValue] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (formData.hospital_name) {
      try {
        const response = await fetch(`${BASE_URL}/service/request`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            service_name: "hospital visit",
            date_time_of_service: "2001-09-29 03:00:00",
            pickup_location: "location",
            pickup_latitude: userLocation.lat,
            pickup_longitude: userLocation.lng,
            gender_preference: "M",
            recurring_event: false,
            recurring_freq: formData.recurring_freq,
            wheelchair_assistance: false,
            transportation: formData.transportation,
            status: "PENDING",
            elder_id: 1,
            client_id: 1,
            buddy_id: 1,
            hospital_name: formData.hospital_name,
            doctor_name: formData.doctor_name,
            appointment_time: "2001-09-29 03:00:00",
          }),
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
        <form>
          <>
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
              name="hospital_name"
              value={formData.hospital_name}
              onChange={handleInputChange}
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
              name="doctor_name"
              value={formData.doctor_name}
              onChange={handleInputChange}
              sx={{ mb: 1.5, "& .MuiInputBase-input": { fontSize: "14px" } }}
            />
            <Grid
              container
              display="flex"
              justifyContent="space-between"
              mb={1.5}
            >
              <Grid item xs={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Pickup Date"
                    sx={{
                      "& .MuiInputBase-input": { fontSize: "14px" },
                      "& .MuiInputLabel-root": { fontSize: "14px" },
                    }}
                    value={formData.date_of_service}
                    onChange={(value) =>
                      setFormData({ ...formData, date_of_service: value })
                    }
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
                    value={formData.time_of_service}
                    onChange={(value) =>
                      setFormData({ ...formData, time_of_service: value })
                    }
                  />
                </LocalizationProvider>
              </Grid>
            </Grid>
            <Grid item mb={2}>
              <Map
                userLocation={userLocation}
                setUserLocation={setUserLocation}
                defaultLocation={false}
              />
            </Grid>
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
                // value={formData.gender_preference}
                // onChange={handleInputChange}
              >
                <MenuItem value="M" sx={{ fontSize: "15px" }}>
                  Male
                </MenuItem>
                <MenuItem value="F" sx={{ fontSize: "15px" }}>
                  Female
                </MenuItem>
              </Select>
            </FormControl>
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.wheelchair_assistance}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      wheelchair_assistance: e.target.checked,
                    })
                  }
                />
              }
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
                    name=""
                    value={formData.recurring_freq}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        recurring_freq: e.target.value,
                      })
                    }
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
                        <Typography sx={{ fontSize: "12px" }}>
                          Weekly
                        </Typography>
                      }
                    />
                    <FormControlLabel
                      value="monthly"
                      control={<Radio size="small" />}
                      label={
                        <Typography sx={{ fontSize: "12px" }}>
                          Monthly
                        </Typography>
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
                  name="transportation"
                  value={formData.transportation}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      transportation: e.target.value,
                    })
                  }
                >
                  <FormControlLabel
                    value="car"
                    control={<Radio size="small" />}
                    label={
                      <Typography sx={{ fontSize: "12px" }}>
                        I have a car, drive me
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    value="auto"
                    control={<Radio size="small" />}
                    label={
                      <Typography sx={{ fontSize: "12px" }}>
                        Auto/Public Transport
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    value="other"
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
          </>
        </form>

        <Box display={"flex"} flexDirection={"row-reverse"} mt={2} gap="10px">
          <Button
            variant="outlined"
            onClick={() => navigate("/elder-ease/home")}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            sx={{ color: "#fff" }}
            onClick={() => {
              handleSubmit();
              setOpenPaymentModal(true);
            }}
          >
            Book Now
          </Button>
        </Box>
      </Box>
      <Dialog
        open={openPaymentModal}
        onClose={() => setOpenPaymentModal(false)}
      >
        <DialogContent
          sx={{
            height: "200px",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h4">Redirecting to payment ...</Typography>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ServiceDetails;
