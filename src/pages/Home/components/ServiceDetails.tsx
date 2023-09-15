import Lottie from "react-lottie";
import animationData from "../../../hospital.json";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import Navbar from "./NavBar";
import { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const ServiceDetails: React.FC = () => {
  const defaultOptions = {
    autoplay: true,
    loop: true,
    animationData: animationData,
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subscribe: false,
  });

  const [recurringFrequency, setRecurringFrequency] = useState("daily");
  const [isRecurring, setRecurring] = useState(false);
  const [value, setValue] = useState<Dayjs | null>(dayjs('2022-04-17'));

  const handleChange = (event: any) => {
    const { name, value, checked, type } = event.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // Process the form data, e.g., send it to an API
    console.log(formData);
  };

  const handleCheckboxChange = (e: any) => {
    setRecurringFrequency(e.target.value);
  };

  return (
    <>
      <Navbar />
      <Lottie
        width={"75%"}
        height={"90%"}
        options={defaultOptions}
        style={{ paddingTop: "18px" }}
      />
      <Box padding={"45px"}>
        <Typography variant="h4" gutterBottom textAlign={"center"}>
          Title
        </Typography>
        <Box>
          <Typography
            variant="body1"
            gutterBottom
            textAlign={"justify"}
            fontSize={"16px"}
            lineHeight={1.25}
            marginBottom={"12px"}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            blanditiis tenetur Lorem ipsum dolor sit amet Lorem ipsum dolor sit
            amet, consectetur adipisicing elit.
          </Typography>
          {/* <Typography
            variant="body1"
            gutterBottom
            textAlign={"justify"}
            fontSize={"16px"}
            lineHeight={1.25}
          >
            Quos blanditiis tenetur Lorem ipsum dolor sit amet Lorem ipsum dolor
            sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
            Lorem ipsum dolor sit amet.
          </Typography> */}
        </Box>
        {/* <Box display={'flex'} justifyContent={'center'}>
          <Typography variant="h4" sx={{ textDecoration: 'underline' }}>Add Details</Typography>
        </Box> */}
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="outlined"
            size="small"
            sx={{
              "& .MuiInputLabel-root": {
                fontSize: "14px",
                paddingTop: "4px",
              },
            }}
          />

          <TextField
            label="Email"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="outlined"
            size="small"
            sx={{
              "& .MuiInputLabel-root": {
                fontSize: "14px",
                paddingTop: "4px",
              },
            }}
          />
        </form>
        <FormControlLabel
          control={
            <Checkbox
              size="small"
              onChange={(e) => {
                setRecurring(e.target.checked);
              }}
            />
          }
          label={
            <Typography variant="subtitle2" fontSize={13} lineHeight={1.2}>
              Check this box if this is a recurring event
            </Typography>
          }
        />
        {isRecurring && (
          <Box>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="daily"
              name="radio-buttons-group"
              onChange={handleCheckboxChange}
            >
              <FormControlLabel
                control={<Radio color="primary" size="small" />}
                label="Daily"
                sx={{
                  "& .MuiFormControlLabel-label": {
                    fontSize: "15px",
                  },
                }}
                value="daily"
              />
              <FormControlLabel
                control={<Radio color="primary" size="small" />}
                label="Weekly"
                sx={{
                  "& .MuiFormControlLabel-label": {
                    fontSize: "15px",
                  },
                }}
                value="weekly"
              />
              <FormControlLabel
                control={<Radio color="primary" size="small" />}
                label="Monthly"
                sx={{
                  "& .MuiFormControlLabel-label": {
                    fontSize: "15px",
                  },
                }}
                value="monthly"
              />
            </RadioGroup>
          </Box>
        )}
        {isRecurring && recurringFrequency === "monthly" && (
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Controlled picker"
                  value={value}
                  onChange={(newValue) => setValue(newValue)}
                />
            </LocalizationProvider>
        
        )}
        <Box display={"flex"} flexDirection={"row-reverse"}>
          <Button variant="contained" sx={{ color: "#fff" }}>
            Book Now
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default ServiceDetails;
