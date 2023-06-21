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
