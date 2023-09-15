import {
  Box,
  Button,
  Divider,
  Grid,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import Dropzone from "react-dropzone";
import DeleteIcon from "@mui/icons-material/Delete";

const HealthRecords = () => {
  const records = ["Aadhar", "Health Report"];
  const [addNewRecord, setAddNewRecord] = useState(false);

  return (
    <Box>
      <Box
        sx={({ palette }: any) => ({
          backgroundColor: palette.white.main,
          height: "50px",
          display: "flex",
          alignItems: "center",
          mb: 2,
          boxShadow: "0px 3px 6px rgb(119 143 157 / 26%)",
        })}
      >
        <Typography variant="h3" sx={{ ml: 2, color: "#00A699" }}>
          Health Records
        </Typography>
      </Box>
      {records.map((record: string) => {
        return (
          <>
            <ListItem
              secondaryAction={<DeleteIcon sx={{ color: "#00A699" }} />}
            >
              <ListItemIcon>
                <FileCopyIcon sx={{ color: "#00A699" }} />
              </ListItemIcon>
              <ListItemText>
                <Typography variant="body2">{record}</Typography>
              </ListItemText>
            </ListItem>
            <Divider />
          </>
        );
      })}
      {!addNewRecord && (
        <Grid item px={2}>
          <Button
            variant="contained"
            fullWidth
            sx={{
              mt: 2,
              color: "#ffffff",
            }}
            onClick={() => setAddNewRecord(true)}
          >
            <AddIcon />
            Add new record
          </Button>
        </Grid>
      )}
      {addNewRecord && (
        <Box sx={{ border: "1px solid #00A699", margin: 2, padding: "20px" }}>
          {/* <Typography variant="h6">Whose record are you uploading ?</Typography>
          <RadioGroup defaultValue="value1">
            <FormControlLabel
              value="value1"
              control={<Radio />}
              label={<Typography variant="body2">Member 1</Typography>}
            />
            <FormControlLabel
              value="value2"
              control={<Radio />}
              label={<Typography variant="body2">Member 2</Typography>}
            />
          </RadioGroup> */}
          <Dropzone onDrop={() => {}}>
            {({ getRootProps, getInputProps }) => (
              <Grid
                {...getRootProps({
                  style: {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                    border: "1px dashed #00A699",
                    padding: "25px",
                  },
                })}
              >
                <input {...getInputProps()} />
                <Typography variant="h6">Drop your files here</Typography>
              </Grid>
            )}
          </Dropzone>
        </Box>
      )}
    </Box>
  );
};

export default HealthRecords;
