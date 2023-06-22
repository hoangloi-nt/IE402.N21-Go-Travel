import React, { useRef, useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import SearchResult from "./searchResult";
import { useEffect } from "react";
import { searchPlacesData } from "api/searchLocationAPI";
import { CircularProgress, setRef } from "@material-ui/core";
const SearchBar = ({ places, setPlaces }) => {
	const searchBarRef = useRef(null);
	const [searchResults, setSearchResults] = useState();
	const [value, setValue] = useState();
	const [showResult, setShowResult] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		if (value?.length > 2) {
			setIsLoading(true);
			setSearchResults([]);
			searchPlacesData({ query: value }).then((data) => {
				setSearchResults(data);
				setIsLoading(false);
				console.log(data);
			});
		}
	}, [value]);
	useEffect(() => {
		const handleClickOutside = (e) => {
			if (searchBarRef.current && !searchBarRef.current.contains(e.target)) {
				setShowResult(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [searchBarRef]);

	return (
		<div
			className="z-[10] absolute top-5 right-5 w-[328px] p-5 bg-white text-[14px] rounded-sm drop-shadow-md"
			ref={searchBarRef}
		>
			<p className="mb-4">Tìm và thêm địa điểm (trên 3 kí tự)</p>
			<div className="relative mb-[12px]">
				<input
					className="block w-full px-[32px] py-[6px] bg-white border shadow-sm h-[42px] placeholder:text-slate-400 border-slate-300 focus:outline-none focus:border-slate-500"
					type="text"
					value={value}
					onChange={(e) => setValue(e.target.value)}
					name="name"
					onFocus={() => setShowResult(true)}
					placeholder="Tìm kiếm địa điểm"
				/>
				<div className="absolute left-[5px] top-[50%] translate-y-[-50%]">
					<SearchIcon />
				</div>
			</div>
			{showResult &&
				(isLoading ? (
					<div className="h-[600px] flex justify-center items-center">
						<CircularProgress size="5rem" />
					</div>
				) : (
					searchResults?.map((result) => (
						<SearchResult
							setPlaces={setPlaces}
							places={places}
							place={result.result_object}
							type={result.result_type}
						/>
					))
				))}
		</div>
	);
};

export default SearchBar;
