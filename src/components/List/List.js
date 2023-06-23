import React, { useState, useEffect, createRef } from "react";
import {
	CircularProgress,
	Grid,
	Typography,
	InputLabel,
	MenuItem,
	FormControl,
	Select,
} from "@material-ui/core";

import PlaceDetails from "../PlaceDetails/PlaceDetails";
import useStyles from "./styles.js";

import { useAtomValue } from "jotai";
import { provinceAtom } from "atom/provinceAtom";
const List = ({
	places,
	type,
	setType,
	rating,
	setRating,
	childClicked,
	isLoading,
}) => {
	const [elRefs, setElRefs] = useState([]);
	const classes = useStyles();

	useEffect(() => {
		setElRefs((refs) =>
			Array(places?.length)
				.fill()
				.map((_, i) => refs[i] || createRef()),
		);
	}, [places]);
	const provinceValue = useAtomValue(provinceAtom);
	return (
		<div className={classes.container}>
			<div className="ml-[5px] text-[24px] font-semibold">
				{type === "restaurants" && "Nhà hàng "}
				{type === "hotels" && "Khách sạn "}
				{type === "attractions" && "Điểm thú vị "} xung quanh {""}
				{provinceValue.name}
			</div>
			{isLoading ? (
				<div className={classes.loading}>
					<CircularProgress size="5rem" />
				</div>
			) : (
				<>
					<FormControl className={classes.formControl}>
						<InputLabel id="type">Loại</InputLabel>
						<Select
							id="type"
							value={type}
							onChange={(e) => setType(e.target.value)}
						>
							<MenuItem value="restaurants">Nhà hàng</MenuItem>
							<MenuItem value="hotels">Khách sạn</MenuItem>
							<MenuItem value="attractions">Điểm thú vị</MenuItem>
						</Select>
					</FormControl>
					<FormControl className={classes.formControl}>
						<InputLabel id="rating">Rating</InputLabel>
						<Select
							id="rating"
							value={rating}
							onChange={(e) => setRating(e.target.value)}
						>
							<MenuItem value="">All</MenuItem>
							<MenuItem value="3">Above 3.0</MenuItem>
							<MenuItem value="4">Above 4.0</MenuItem>
							<MenuItem value="4.5">Above 4.5</MenuItem>
						</Select>
					</FormControl>
					<Grid container spacing={3} className={`${classes.list}`}>
						{places?.map(
							(place, i) =>
								place.latitude &&
								place.longitude && (
									<Grid ref={elRefs[i]} key={i} item xs={12}>
										<PlaceDetails
											selected={Number(childClicked) === i}
											refProp={elRefs[i]}
											place={place}
										/>
									</Grid>
								),
						)}
					</Grid>
				</>
			)}
		</div>
	);
};

export default List;
