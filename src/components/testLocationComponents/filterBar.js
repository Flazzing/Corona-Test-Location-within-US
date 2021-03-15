/** @jsxImportSource @emotion/react */

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Nav } from "react-bootstrap";
import { css } from "@emotion/react";
import {
	receivedFilterStateLocation,
	updateTestLocation,
} from "../../redux/testLocation/action";

const container = css`
	background-color: white;
	position: fixed;
	top: 80px;
	bottom: 0;
	left: 0;
	min-height: 100% !important;
	z-index: 100;
	padding: 48px 0 0;
	box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1);
	--offset: var(--space);
	position: sticky;
	top: var(--offset); 
	}
`;

const innerBox = css`
	border: 2px solid grey;
	margin-left: 15px;
	margin-right: 10px;
	padding: 25px;
	width: 90%;
	height: 800px;
	align: center;
`;

const submit = css`
	width: 40%;
	font-size: 0.8vw;
	margin-left: 45%;
	margin-top: 25%;
`;

const dropDownItem = css`
	margin: 0px;
`;

function Filterbar() {
	const dispatch = useDispatch();
	// default value is all
	const [selectedState, setSelectedState] = useState("AL");

	return (
		<div css={container}>
			<Nav
				className="col-md-12 d-none d-md-block bg-light sidebar"
				activeKey="/home"
			>
				<div css={innerBox}>
					<form
						onSubmit={(e) => {
							e.preventDefault();
							const addFilter = receivedFilterStateLocation(selectedState);
							dispatch(addFilter);

							var url = new URL(
									"https://sheetlabs.com/NCOR/covidtestcentersinUS"
								),
								params = { state: selectedState };

							// update data
							Object.keys(params).forEach((key) =>
								url.searchParams.append(key, params[key])
							);

							fetch(url)
								.then((response) => {
									return response.json();
								})
								.then((data) => {
									const updateLocation = updateTestLocation(data);
									dispatch(updateLocation);
								});
						}}
					>
						<div css={dropDownItem}>Select state to display Location</div>
						<select
							value={selectedState}
							css={dropDownItem}
							onChange={(e) => setSelectedState(e.currentTarget.value)}
						>
							<option value="AL">Alabama</option>
							<option value="AK">Alaska</option>
							<option value="AZ">Arizona</option>
							<option value="AR">Arkansas</option>
							<option value="CA">California</option>
							<option value="CO">Colorado</option>
							<option value="CT">Connecticut</option>
							<option value="DE">Delaware</option>
							<option value="DC">District Of Columbia</option>
							<option value="FL">Florida</option>
							<option value="GA">Georgia</option>
							<option value="HI">Hawaii</option>
							<option value="ID">Idaho</option>
							<option value="IL">Illinois</option>
							<option value="IN">Indiana</option>
							<option value="IA">Iowa</option>
							<option value="KS">Kansas</option>
							<option value="KY">Kentucky</option>
							<option value="LA">Louisiana</option>
							<option value="ME">Maine</option>
							<option value="MD">Maryland</option>
							<option value="MA">Massachusetts</option>
							<option value="MI">Michigan</option>
							<option value="MN">Minnesota</option>
							<option value="MS">Mississippi</option>
							<option value="MO">Missouri</option>
							<option value="MT">Montana</option>
							<option value="NE">Nebraska</option>
							<option value="NV">Nevada</option>
							<option value="NH">New Hampshire</option>
							<option value="NJ">New Jersey</option>
							<option value="NM">New Mexico</option>
							<option value="NY">New York</option>
							<option value="NC">North Carolina</option>
							<option value="ND">North Dakota</option>
							<option value="OH">Ohio</option>
							<option value="OK">Oklahoma</option>
							<option value="OR">Oregon</option>
							<option value="PA">Pennsylvania</option>
							<option value="RI">Rhode Island</option>
							<option value="SC">South Carolina</option>
							<option value="SD">South Dakota</option>
							<option value="TN">Tennessee</option>
							<option value="TX">Texas</option>
							<option value="UT">Utah</option>
							<option value="VT">Vermont</option>
							<option value="VA">Virginia</option>
							<option value="WA">Washington</option>
							<option value="WV">West Virginia</option>
							<option value="WI">Wisconsin</option>
							<option value="WY">Wyoming</option>
						</select>

						<input
							type="submit"
							value="Submit"
							css={submit}
							onChange={(e) => setSelectedState(e.target.value)}
						/>
					</form>
				</div>
			</Nav>
		</div>
	);
}

export default Filterbar;
