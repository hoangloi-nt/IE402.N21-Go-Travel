import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
	paper: {
		padding: "10px",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		width: "100px",
	},
	mapContainer: {
		height: "calc(100vh - 90px)",
		width: "100%",
		zIndex: 1,
	},
	markerContainer: {
		position: "absolute",
		transform: "translate(-50%, -50%)",
		zIndex: 100,
		"&:hover": { zIndex: 200 },
		cursor: "default",
	},
	pointer: {
		cursor: "pointer",
	},
}));
