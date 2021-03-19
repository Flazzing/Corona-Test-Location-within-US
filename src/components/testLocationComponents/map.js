/** @jsxImportSource @emotion/react */

import { useEffect, useState, memo } from "react";
import {
	GoogleMap,
	useJsApiLoader,
	Marker,
	InfoWindow,
} from "@react-google-maps/api";
import { css } from "@emotion/react";

import { Card, Button, Alert } from "react-bootstrap";
import { useSelector } from "react-redux";
import {
	getTestLocationList,
	getBookmarkLocation,
} from "../../redux/testLocation/selector";

import axios from "axios";

import BookmarkButton from "./bookmarkButton";

const containerStyle = {
	width: "100%",
	height: "860px",
};

const center = {
	lat: 39.011902,
	lng: -98.484245,
};

const shareButton = css``;

function TestLocationMap() {
	const locationList = useSelector(getTestLocationList);
	const bookmarkList = useSelector(getBookmarkLocation);

	bookmarkList.forEach((e) => {
		console.log(e);
	});

	const { isLoaded } = useJsApiLoader({
		id:
			"https://maps.googleapis.com/maps/api/js?key=AIzaSyAFex0mi6Ezx0l9IJDPcCiXTw-Xsac0xqg",
		googleMapsApiKey: "AIzaSyAFex0mi6Ezx0l9IJDPcCiXTw-Xsac0xqg",
	});

	const [selectedData, setSelectedData] = useState(null);
	const [bookmark, setBookmark] = useState(false);

	// true = success
	// false = fail
	const [shareStatus, setShareStatus] = useState(null);
	const [show, setShow] = useState(false);

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
						setSelectedData(null);
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
							{show ? (
								shareStatus ? (
									<Alert show={show} variant="success">
										Test location is successfully shared.
									</Alert>
								) : (
									<Alert show={show} variant="danger">
										Test location is fail to be shared.
									</Alert>
								)
							) : (
								<></>
							)}
							<BookmarkButton selectedData={selectedData} />
							<Card.Title>{selectedData.centername}</Card.Title>
							<Card.Text>{selectedData.address}</Card.Text>
							<Card.Text>
								<small className="text-muted">
									Last updated {selectedData.lastupdateddate}
								</small>
							</Card.Text>
							<Button
								css={shareButton}
								size="sm"
								onClick={() => {
									axios
										.post(" http://localhost:3000/testLocation", selectedData)
										.then((response) => {
											setShareStatus(true);
											setShow(true);
										})
										.catch((error) => {
											setShareStatus(false);
											setShow(true);
										});
								}}
							>
								Share test location
							</Button>
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
