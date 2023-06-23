import axios from "axios";

export const searchPlacesData = async ({ query }) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/locations/auto-complete`,
      {
        params: {
          query: query,
          limit: "6",
        },
        headers: {
          "x-rapidapi-key":
            "174b0d6ea4mshd6d3787b92e1a2ep1d4a0cjsn6ba9d8c2d758",
          "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
        },
      }
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};
