/** @jsxImportSource @emotion/react */

import { useEffect, useState, memo } from "react";
import {
	GoogleMap,
	useJsApiLoader,
	Marker,
	InfoWindow,
} from "@react-google-maps/api";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import {
	getTestLocationList,
	getBookmarkLocation,
} from "../../redux/testLocation/selector";

import BookmarkButton from "./bookmarkButton";

const containerStyle = {
	width: "100%",
	height: "860px",
};

const center = {
	lat: 39.011902,
	lng: -98.484245,
};

function TestLocationMap() {
	const locationList = useSelector(getTestLocationList);
	const bookmarkList = useSelector(getBookmarkLocation);
	console.log("bookmarkList");
	bookmarkList.forEach((e) => {
		console.log(e);
	});

	const { isLoaded } = useJsApiLoader({
		id:
			"https://maps.googleapis.com/maps/api/js?key=AIzaSyAFex0mi6Ezx0l9IJDPcCiXTw-Xsac0xqg",
		googleMapsApiKey: "AIzaSyAFex0mi6Ezx0l9IJDPcCiXTw-Xsac0xqg",
	});

	const [selectedData, setSelectedData] = useState(null);

	useEffect(() => {
		const listener = (e) => {
			if (e.key === "Escape") {
				setSelectedData(null);
			}
		};
		window.addEventListener("keydown", listener);

		return () => {
			window.removeEventListener("keydown", listener);
		};
	}, []);

	var key = 0;

	return isLoaded ? (
		<GoogleMap mapContainerStyle={containerStyle} center={center} zoom={5}>
			{locationList.map((location) => (
				<Marker
					key={key++}
					position={{
						lat: parseFloat(location.location.lat),
						lng: parseFloat(location.location.lon),
					}}
					onClick={() => {
						setSelectedData(location.location);
					}}
				/>
			))}

			{selectedData && (
				<InfoWindow
					onCloseClick={() => {
						setSelectedData(null);
					}}
					position={{
						lat: parseFloat(selectedData.lat),
						lng: selectedData.lon,
					}}
				>
					<Card>
						<Card.Body>
							<BookmarkButton
								selectedData={selectedData}
								bookmarkerStatus={false}
							/>

							<Card.Title>{selectedData.centername}</Card.Title>
							<Card.Text>{selectedData.address}</Card.Text>
							<Card.Text>
								<small className="text-muted">
									Last updated {selectedData.lastupdateddate}
								</small>
							</Card.Text>
						</Card.Body>
					</Card>
				</InfoWindow>
			)}
		</GoogleMap>
	) : (
		<></>
	);
}

export default memo(TestLocationMap);
