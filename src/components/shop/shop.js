import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
	return (
		<div className="shop">
			<div className="shopTitle">
				<h1>Ceylon Herbs Shop</h1>
				<Link to="/client/cart">
					<ShoppingCart
						size={42}
					/>
				</Link>
			</div>

			<div className="productss">
				{PRODUCTS.map((product) => (
					<Product data={product} />
				))}
			</div>
		</div>
	);
};
