/** @jsxImportSource @emotion/react */

import React, { useState } from "react";
import { Form, Button, Row, Nav } from "react-bootstrap";
import { css } from "@emotion/react";

const container = css`
	background-color: white;
	position: fixed;
	top: 80px;
	bottom: 0;
	left: 0;
	min-height: 100vh !important;
	z-index: 100;
	padding: 48px 0 0;
	box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1);
	--offset: var(--space);
	/* ... */
	position: sticky;
	top: var(--offset);
`;

const innerBox = css`
	border: 2px solid grey;
	margin-left: 15px;
	margin-right: 10px;
	padding: 10px;
	width: 90%;
	height: 800px;
	align: center;
`;

const submit = css`
	align: center;
	margin-left: 30%;
	margin-right: 30%;
	width: 40%;
	margin-top: 50%;
	font-size: 0.8vw;
`;

const dropDownItem = css`
	margin: 0px;
`;

function Filterbar() {
	const [dropdown, setDropdown] = useState("");
	const [radioButton, setButton] = useState("cases");

	return (
		<div css={container}>
			<Nav
				className="col-md-12 d-none d-md-block bg-light sidebar"
				activeKey="/home"
				onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
			>
				<div css={innerBox}>
					<div css={dropdown}>Select state to display Location</div>
					<select
						value={dropdown}
						id="states"
						name="state"
						css={dropDownItem}
						onChange={(e) => {
							setDropdown(e.target.value);
						}}
					>
						<option value="">All</option>
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
					<input type="submit" value="Submit" css={submit}></input>
				</div>
			</Nav>
		</div>
	);
}

export default Filterbar;
