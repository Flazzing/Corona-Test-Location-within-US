/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import FilterBar from "./filterBar";
import TestLocationMap from "./map";

const container = css`
	display: flex;
`;

const filter = css`
	flex: 1;
`;

const map = css`
	flex: 4;
`;
function MapApp() {
	return (
		<div css={container}>
			<div css={filter}>
				<FilterBar />
			</div>
			<div css={map}>
				<TestLocationMap />
			</div>
		</div>
	);
}

export default MapApp;
