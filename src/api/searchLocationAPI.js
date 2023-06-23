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
