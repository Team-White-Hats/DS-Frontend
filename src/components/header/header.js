import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png";

const Header = () => {
	return (
		<div>
			<header>
				<div class="header-1">
					<div class="share">
						<img
							src={logo}
							style={{
								height: 80,
								width: 150,
								marginLeft: 50,
							}}
							alt="tute"
						/>
						<span
							style={{
								fontSize: 35,
								textAlign: "center",
								marginLeft: 500,
								fontStyle: "normal",
								marginTop: 5,
							}}>
							<b>H e r b s</b>
						</span>
						<a href="#" class="fab fa-facebook-f"></a>
						<a href="#" class="fab fa-twitter"></a>
						<a href="#" class="fab fa-instagram"></a>
						<a href="#" class="fab fa-linkedin"></a>
					</div>

					<div class="call">
						<span>
							{" "}
							<b>Call Us :</b>{" "}
						</span>
						<a href="#">011-1748536</a>
					</div>
				</div>

				<div
					class="header-3"
					style={{ backgroundColor: "#d7e9d2" }}>
					<div id="menu-bar" class="fas fa-bars"></div>

					<nav class="navbar">
						<a
							href="/client"
							style={{
								color: "#000",
								marginLeft: 14,
								marginRight: 34,
							}}>
							home
						</a>
						<a
							href="#category"
							style={{ color: "#000", marginRight: 34 }}>
							category
						</a>
						<a
							href="#product"
							style={{ color: "#000", marginRight: 34 }}>
							product
						</a>
						<a
							href="#deal"
							style={{ color: "#000", marginRight: 34 }}>
							deal
						</a>
						<a href="#contact" style={{ color: "#000" }}>
							contact
						</a>
					</nav>

					<div class="icons">
						<a href="#" class="fas fa-shopping-cart"></a>
						<a href="#" class="fas fa-heart"></a>
						<a href="#" class="fas fa-user-circle"></a>
					</div>
					<div>
						<nav>
							<ul>
								<Link
									to="/client/login"
									style={{
										fontSize: 16,
										marginRight: 50,
										color: "#000",
									}}>
									Login
								</Link>
								<br />
								<Link
									to="/client"
									style={{
										fontSize: 16,
										marginRight: 50,
										color: "#000",
									}}>
									Logout
								</Link>
							</ul>
						</nav>
					</div>
				</div>
			</header>
		</div>
	);
};

export default Header;
