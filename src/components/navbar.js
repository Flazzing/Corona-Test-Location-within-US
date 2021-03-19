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

const item = css`
	color: #909497;
`;

const itembackground = css`
	background-color: #343a40;
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
						<Nav.Link css={navbarItem} as={Link} to="/testlocation/bookmark">
							bookmark
						</Nav.Link>
						<NavDropdown
							css={navbarItem}
							title="Statistics"
							id="collasible-nav-dropdown"
						>
							<NavDropdown.Item css={itembackground}>
								<Nav.Link as={Link} to="/graph/us/cases/30">
									<div css={item}>US Daily Graphical Report</div>
								</Nav.Link>
							</NavDropdown.Item>
							<NavDropdown.Item css={itembackground}>
								<Nav.Link as={Link} to="/statistic/us/cases">
									<div css={item}>US Daily Statistical Report</div>
								</Nav.Link>
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
}

export default NavigationBar;
