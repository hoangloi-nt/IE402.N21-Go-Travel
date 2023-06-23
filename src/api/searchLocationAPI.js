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
						"94b4df05b1msha3e39b019aa27dfp14bc33jsnaffbbc3f4aff",
					"x-rapidapi-host": "travel-advisor.p.rapidapi.com",
				},
			},
		);

		return data;
	} catch (error) {
		console.log(error);
	}
};
