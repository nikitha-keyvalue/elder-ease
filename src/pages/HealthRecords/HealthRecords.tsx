import {
  Box,
  Button,
  Divider,
  FormControlLabel,
  Grid,
  ListItem,
  ListItemIcon,
  ListItemText,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import Dropzone from "react-dropzone";
import DeleteIcon from "@mui/icons-material/Delete";

const HealthRecords = () => {
  const records = ["Record 1", "Record 2", "Record 3"];
  const [addNewRecord, setAddNewRecord] = useState(false);

  return (
    <Box>
      <Box
        sx={({ palette }: any) => ({
          backgroundColor: palette.primary.main,
          height: "50px",
          display: "flex",
          alignItems: "center",
          mb: 2,
        })}
      >
        <Typography sx={{ ml: 2, color: "whitesmoke" }}>
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
          <Typography variant="h6">Whose record are you uploading ?</Typography>
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
          </RadioGroup>
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
