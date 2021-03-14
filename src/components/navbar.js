/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const navBarSize = css`
	padding-top: 13px;
	padding-left: 50px;
	padding-bottom: 13px;
`;

const navBarTitle = css`
	font-size: 30px;
`;

const navbarItem = css`
	font-size: 22px;
	margin-right: 8px;
`;

function NavigationBar(props) {
	return (
		<div>
			<Navbar
				css={navBarSize}
				collapseOnSelect
				expand="lg"
				bg="dark"
				variant="dark"
			>
				<Navbar.Brand css={navBarTitle}>Corona Tracker</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link css={navbarItem} as={Link} to="/home">
							Home
						</Nav.Link>

						<Nav.Link css={navbarItem} as={Link} to="/testlocation">
							Test Location
						</Nav.Link>
						<NavDropdown
							css={navbarItem}
							title="Statistics"
							id="collasible-nav-dropdown"
						>
							<NavDropdown.Item>US Daily Report</NavDropdown.Item>
							<NavDropdown.Item>State Daily Report</NavDropdown.Item>
							<NavDropdown.Item>Hospitalization Daily Report</NavDropdown.Item>
							<NavDropdown.Item>Mortality rate Report</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
}

export default NavigationBar;
