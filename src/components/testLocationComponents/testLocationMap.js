import React, { useEffect, useState, memo } from "react";
import {
	GoogleMap,
	useJsApiLoader,
	Marker,
	InfoWindow,
} from "@react-google-maps/api";
import { Card } from "react-bootstrap";

import useTestCenters from "../../hooks/useTestCenters";

const containerStyle = {
	width: "100%",
	height: "700px",
};

const center = {
	lat: 44.564568,
	lng: -123.262047,
};

function TestLocationMap() {
	const { isLoaded } = useJsApiLoader({
		id:
			"https://maps.googleapis.com/maps/api/js?key=AIzaSyAFex0mi6Ezx0l9IJDPcCiXTw-Xsac0xqg",
		googleMapsApiKey: "AIzaSyAFex0mi6Ezx0l9IJDPcCiXTw-Xsac0xqg",
	});

	const { testLocations, isLoading } = useTestCenters("OR");
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
		<GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
			{
				/* Child components, such as markers, info windows, etc. */

				testLocations.map((location) => (
					<Marker
						key={key++}
						position={{
							lat: parseFloat(location.lat),
							lng: location.lon,
						}}
						onClick={() => {
							setSelectedData(location);
						}}
					/>
				))
			}

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

			<></>
		</GoogleMap>
	) : (
		<></>
	);
}

export default memo(TestLocationMap);
