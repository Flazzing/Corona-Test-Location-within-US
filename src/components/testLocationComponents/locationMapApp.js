/** @jsxImportSource @emotion/react */
import TestLocationMap from "./testLocationMap";
import FilterApp from "./filterBar";
import { css } from "@emotion/react";

const container = css`
	display: flex;
`;

function locationMapApp() {
	return (
		<div css={container}>
			<FilterApp />
			<TestLocationMap />
		</div>
	);
}

export default locationMapApp;
