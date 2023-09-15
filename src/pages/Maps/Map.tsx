import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import { FC, useEffect, useState } from "react";
import "./Map.css";
import { getLocationFromZipCode } from "./getLocationFromZipCode";
import { Button, Grid, TextField, Typography } from "@mui/material";

interface Props {
  userLocation: google.maps.LatLngLiteral;
  setUserLocation: React.Dispatch<
    React.SetStateAction<google.maps.LatLngLiteral>
  >;
  defaultLocation?: boolean;
}

const Map: FC<Props> = ({
  userLocation,
  setUserLocation,
  defaultLocation = true,
}) => {
  const [zipCode, setZipcode] = useState<number>(110001);
  const [map, setMap] = useState<google.maps.Map | null>(null);

  //   const getUserLocation = () => {
  //     if (navigator.geolocation) {
  //       navigator.geolocation.getCurrentPosition(
  //         (position) => {
  //           setUserLocation({
  //             lat: position.coords.latitude,
  //             lng: position.coords.longitude,
  //           });
  //         },
  //         (error) => {
  //           console.error("Error getting user location:", error);
  //         }
  //       );
  //     } else {
  //       console.error("Geolocation is not supported by your browser.");
  //     }
  //   };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyB1oqDTFzaS_yWVrE1HvCmevtbGcZlqJ88",
  });

  const handleGetLocation = async (zipCode: number) => {
    try {
      const result = await getLocationFromZipCode(zipCode);
      setUserLocation(result);
    } catch (error) {
      setUserLocation({ lat: 0, lng: 0 });
    }
  };

  return (
    <Grid display="flex" direction="column" gap={2}>
      <Grid item display="flex" alignItems="center" gap={1}>
        <TextField
          InputLabelProps={{
            style: {
              fontSize: "14px",
              width: "90%",
            },
          }}
          type="number"
          label="Zipcode"
          variant="outlined"
          size="small"
          onChange={(e) => setZipcode(Number(e.target.value))}
          sx={{ "& .MuiInputBase-input": { fontSize: "14px" } }}
        />
        <Button
          variant="contained"
          sx={{
            background: "primary",
            p: 0,
            height: "35px",
            textTransform: "capitalize",
          }}
          onClick={() => handleGetLocation(zipCode)}
        >
          Enter
        </Button>
      </Grid>
      <Grid item>
        <Typography
          style={{
            fontSize: "12px",
            marginTop: "-10px",
            marginBottom: "-10px",
          }}
        >
          Please provide your ZIP code and hit "Enter" to set{" "}
          {defaultLocation ? "default" : ""} location
        </Typography>
      </Grid>
      <Grid item>
        <div className="cntr">
          {!isLoaded ? (
            <h1>Loading...</h1>
          ) : (
            <GoogleMap
              mapContainerClassName="map-container"
              center={userLocation}
              zoom={15}
              onLoad={(map) => setMap(map)}
            >
              {userLocation && isLoaded && (
                <MarkerF
                  draggable
                  onDragEnd={(e) =>
                    setUserLocation({
                      lat: e.latLng?.lat()!,
                      lng: e.latLng?.lng()!,
                    })
                  }
                  position={userLocation}
                  title="Your Location"
                  icon={{
                    path: "/pages/Maps/Marker.svg",
                    url: "/pages/Maps/Marker.svg",
                    scaledSize: new window.google.maps.Size(40, 40),
                  }}
                />
              )}
            </GoogleMap>
          )}
        </div>
      </Grid>
    </Grid>
  );
};

export default Map;
