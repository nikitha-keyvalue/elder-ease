const API_KEY = "8109d7c81c143dbeb497597332e2a1c2";
const BASE_URL = "https://thezipcodes.com/api/v1/search";

async function getLocationFromZipCode(zipCode: number) {
  try {
    const response = await fetch(
      `${BASE_URL}?zipCode=${zipCode}&apiKey=${API_KEY}`
    );

    if (response.ok) {
      const data = await response.json();
      const result = data.location[0];
      return {
        lat: Number(result.latitude),
        lng: Number(result.longitude),
      };
    } else {
      throw new Error("Geocoding API request failed.");
    }
  } catch (error) {
    throw new Error("Error retrieving location information: ");
  }
}

export { getLocationFromZipCode };
