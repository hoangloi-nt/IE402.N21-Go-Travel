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

export const fetchDataLocation = async ({ offset, limit }) => {
	try {
		const response = await axios.request({
			method: "GET",
			url: "https://travel-advisor.p.rapidapi.com/attractions/list-in-boundary",
			params: {
				tr_longitude: "109.262909",
				tr_latitude: "12.346705",
				bl_longitude: "109.095887",
				bl_latitude: "12.113245",
				currency: "USD",
				lunit: "km",
				lang: "en_US",
				offset: offset,
				limit: limit,
			},
			headers: {
				"X-RapidAPI-Key": "94b4df05b1msha3e39b019aa27dfp14bc33jsnaffbbc3f4aff",
				"X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
			},
		});
		return response.data.data;
	} catch (error) {
		console.error(error);
	}
};
