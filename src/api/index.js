import axios from "axios";

export const getPlacesData = async (sw, ne, type) => {
	try {
		const {
			data: { data },
		} = await axios.get(
			`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
			{
				params: {
					bl_latitude: sw.lat,
					bl_longitude: sw.lng,
					tr_longitude: ne.lng,
					tr_latitude: ne.lat,
				},
				headers: {
					"x-rapidapi-key":
						"75e6f4b7e6msh9280109288d26a3p1e1c83jsn0c41f1586d8f",
					"x-rapidapi-host": "travel-advisor.p.rapidapi.com",
				},
			},
		);

		return data;
	} catch (error) {
		console.log(error);
	}
};
