import axios from "axios";
const URL =
	"https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";
export const getPlacesData = async (sw, ne) => {
	try {
		const {
			data: { data },
		} = await axios.get(URL, {
			params: {
				bl_latitude: sw.lat,
				bl_longitude: sw.lng,
				tr_longitude: ne.lng,
				tr_latitude: ne.lat,
			},
			headers: {
				"x-rapidapi-key": "7066ad54a7mshe0b8295fabde3dfp13fe27jsn7e01295b2ff1",
				"x-rapidapi-host": "travel-advisor.p.rapidapi.com",
			},
		});

		return data;
	} catch (error) {
		console.log(error);
	}
};
