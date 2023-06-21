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
						"7f35bae2d7msh16b3b59c8875bcbp142730jsna9bca751f82e",
					"x-rapidapi-host": "travel-advisor.p.rapidapi.com",
				},
			},
		);

		return data;
	} catch (error) {
		console.log(error);
	}
};
