import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import { FC, useState } from "react";
import "./Map.css";
import { getLocationFromZipCode } from "./getLocationFromZipCode";
import { Button, Grid, TextField, Typography } from "@mui/material";

interface Props {
  userLocation: google.maps.LatLngLiteral;
  destinationLocation?: google.maps.LatLngLiteral;
  setUserLocation?: React.Dispatch<
    React.SetStateAction<google.maps.LatLngLiteral>
  >;
  defaultLocation?: boolean;
  isTracking?: boolean;
}

const Map: FC<Props> = ({
  userLocation,
  destinationLocation = { lat: 0, lng: 0 },
  setUserLocation = () => null,
  defaultLocation = true,
  isTracking = false,
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

  console.log(userLocation);

  return (
    <>
      {!isTracking ? (
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
                        url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
                        scaledSize: new window.google.maps.Size(40, 40),
                      }}
                    />
                  )}
                </GoogleMap>
              )}
            </div>
          </Grid>
        </Grid>
      ) : (
        <>
          <div className="cntr">
            {!isLoaded ? (
              <h1>Loading...</h1>
            ) : (
              <GoogleMap
                mapContainerClassName="map-container"
                center={{
                  lat: (userLocation.lat + destinationLocation.lat) / 2,
                  lng: (userLocation.lng + destinationLocation.lng) / 2,
                }}
                zoom={10}
                onLoad={(map) => setMap(map)}
              >
                {userLocation && isLoaded && (
                  <MarkerF
                    position={userLocation}
                    title="Your Location"
                    icon={{
                      url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
                      scaledSize: new window.google.maps.Size(40, 40),
                    }}
                  />
                )}
                {isLoaded && (
                  <MarkerF
                    position={destinationLocation}
                    icon={{
                      url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
                      scaledSize: new window.google.maps.Size(40, 40),
                    }}
                  />
                )}
                {isLoaded && (
                  <MarkerF
                    position={{ lat: 13.01, lng: 77.55 }}
                    icon={{
                      url: "https://maps.gstatic.com/intl/en_us/mapfiles/markers2/measle_blue.png",
                      scaledSize: new window.google.maps.Size(10, 10),
                    }}
                  />
                )}
              </GoogleMap>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Map;