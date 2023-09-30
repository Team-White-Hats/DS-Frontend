import React from "react";
import "../home/home.css";

const Footer = () => {
	return (
		<div className="root">
			<section class="footer" style={{ backgroundColor: "#3A9943" }}>
				<div class="box-container">
					<div class="box" style={{ color: "#fff" }}>
						<h3 style={{ color: "#fff", textAlign: "center" }}>
							branch locations
						</h3>
						<a
							href="#"
							style={{ color: "#fff", textAlign: "center" }}>
							India
						</a>
						<a
							href="#"
							style={{ color: "#fff", textAlign: "center" }}>
							USA
						</a>
						<a
							href="#"
							style={{ color: "#fff", textAlign: "center" }}>
							japan
						</a>
						<a
							href="#"
							style={{ color: "#fff", textAlign: "center" }}>
							France
						</a>
					</div>
					<div class="box">
						<h3 style={{ color: "#fff", textAlign: "center" }}>
							quick links
						</h3>
						<a
							href="#"
							style={{ color: "#fff", textAlign: "center" }}>
							Home
						</a>
						<a
							href="#"
							style={{ color: "#fff", textAlign: "center" }}>
							Category
						</a>
						<a
							href="#"
							style={{ color: "#fff", textAlign: "center" }}>
							Product
						</a>
						<a
							href="#"
							style={{ color: "#fff", textAlign: "center" }}>
							deal
						</a>
						<a
							href="#"
							style={{ color: "#fff", textAlign: "center" }}>
							contact
						</a>
					</div>
					<div class="box">
						<h3 style={{ color: "#fff", textAlign: "center" }}>
							follow us
						</h3>
						<a
							href="#"
							style={{ color: "#fff", textAlign: "center" }}>
							facebook
						</a>
						<a
							href="#"
							style={{ color: "#fff", textAlign: "center" }}>
							Twitter
						</a>
						<a
							href="#"
							style={{ color: "#fff", textAlign: "center" }}>
							Instagram
						</a>
						<a
							href="#"
							style={{ color: "#fff", textAlign: "center" }}>
							Linked
						</a>
					</div>
				</div>

				<h1
					class="credit"
					style={{
						color: "#fff",
						textAlign: "center",
						fontSize: 14,
					}}>
					{" "}
					created by{" "}
					<span
						style={{
							color: "#fff",
							textAlign: "center",
							fontSize: 14,
						}}>
						{" "}
						SpellBinders{" "}
					</span>{" "}
					| all rights reserved!{" "}
				</h1>
			</section>
		</div>
	);
};

export default Footer;
