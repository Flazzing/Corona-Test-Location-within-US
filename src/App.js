/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import Navbar from "./components/navbar";
import { Switch, Route } from "react-router-dom";
import LocationMapApp from "./components/testLocationComponents/locationMapApp";

const backgroundColor = css`
	background-color: #000000;
	${"" /* height: 200px; */}
`;

function App() {
	return (
		<div css={backgroundColor}>
			<Navbar />

			<Switch>
				<Route path="/home"></Route>
				<Route path="/statistic/us"></Route>
				<Route path="/statistic/us/:state"></Route>
				<Route path="/statistic/us/:states/hospitalizations"></Route>
				<Route path="/statistic/us/:states/deaths"></Route>
				<Route path="/testlocation">
					<LocationMapApp />
				</Route>
				<Route exact path="/"></Route>
			</Switch>
		</div>
	);
}

export default App;
