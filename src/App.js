import React, {
	useState,
	useEffect,
} from "react";
import "./style/main.css";
import { GiShoppingBag } from "react-icons/gi";
import RatingStars from "./components/RatingStars";
import ShoppingCart from "./components/ShoppingCart";

const products = [
	{
		id: 1,
		name: "Ring Balls vitae",
		rating: 4.3,
		description:
			"Golden light, with Blue rings.",
		price: 38000,
		image: require("./assets/images/product-1.jpg"),
	},
	{
		id: 2,
		name: "Crown Ring Light",
		rating: 4.2,
		description:
			"Big Crown with 3 sub cone lights.",
		price: 35000,
		image: require("./assets/images/product-2.jpg"),
	},
	{
		id: 3,
		name: "Center Light wave circle Light",
		rating: 3.2,
		description:
			"Wave light with central golden moon light",
		price: 37000,
		image: require("./assets/images/product-3.jpg"),
	},
	{
		id: 4,
		name: "Spiral Light",
		rating: 4.8,
		description:
			"Cone Spiral with golden and brownish lighting.",
		price: 40000,
		image: require("./assets/images/product-8.jpg"),
	},
	{
		id: 5,
		name: "Drop Down Chan",
		rating: 4.5,
		description:
			"Snake curl with 3 drop cone lights.",
		price: 29000,
		image: require("./assets/images/product-5.jpeg"),
	},
	{
		id: 6,
		name: "Ring Light",
		rating: 3.8,
		description:
			" Upper ring light with 3 drop down",
		price: 49000,
		image: require("./assets/images/product-6.jpg"),
	},
	{
		id: 7,
		name: "Star Cone",
		rating: 3.8,
		description:
			"Star Cone with 3 light drop down",
		price: 32000,
		image: require("./assets/images/DropChan.jpeg"),
	},
	{
		id: 8,
		name: "Wall Ring",
		rating: 3.8,
		description:
			" Household wall colored chad ring",
		price: 49000,
		image: require("./assets/images/product-12.jpg"),
	},
	{
		id: 9,
		name: "Star Cone",
		rating: 3.8,
		description:
			"Star Cone with 3 light drop down",
		price: 32000,
		image: require("./assets/images/product-22.jpg"),
	},
	{
		id: 10,
		name: "Wall Pacifier",
		rating: 3.8,
		description:
			" Household wall colored chad",
		price: 49000,
		image: require("./assets/images/product-23.jpg"),
	},
	{
		id: 11,
		name: "Star Cone",
		rating: 3.8,
		description:
			"Star Cone with 3 light drop down",
		price: 32000,
		image: require("./assets/images/DropChan.jpeg"),
	},
	{
		id: 12,
		name: "Wall Pacifier",
		rating: 3.8,
		description:
			" Household wall colored chad",
		price: 49000,
		image: require("./assets/images/product-10.jpg"),
	},
	{
		id: 13,
		name: "Star Cone",
		rating: 3.8,
		description:
			"Star Cone with 3 light drop down",
		price: 32000,
		image: require("./assets/images/product-22.jpg"),
	},
	{
		id: 14,
		name: "Wall Pacifier",
		rating: 3.8,
		description:
			" Household wall colored chad",
		price: 49000,
		image: require("./assets/images/product-23.jpg"),
	},
	{
		id: 15,
		name: "Star Cone",
		rating: 3.8,
		description:
			"Star Cone with 3 light drop down",
		price: 32000,
		image: require("./assets/images/DropChan.jpeg"),
	},
	{
		id: 16,
		name: "Wall Pacifier",
		rating: 3.8,
		description:
			" Household wall colored chad",
		price: 49000,
		image: require("./assets/images/product-10.jpg"),
	},
];

function App() {
	const [cartsVisibilty, setCartVisible] =
		useState(false);
	const [productsInCart, setProducts] =
		useState(
			JSON.parse(
				localStorage.getItem(
					"shopping-cart"
				)
			) || []
		);
	useEffect(() => {
		localStorage.setItem(
			"shopping-cart",
			JSON.stringify(productsInCart)
		);
	}, [productsInCart]);
	

	const onQuantityChange = (
		productId,
		count
	) => {
		setProducts((oldState) => {
			const productsIndex =
				oldState.findIndex(
					(item) =>
						item.id === productId
				);
			if (productsIndex !== -1) {
				oldState[productsIndex].count =
					count;
			}
			return [...oldState];
		});
	};

	const onProductRemove = (product) => {
		setProducts((oldState) => {
			const productsIndex =
				oldState.findIndex(
					(item) =>
						item.id === product.id
				);
			if (productsIndex !== -1) {
				oldState.splice(productsIndex, 1);
			}
			return [...oldState];
		});
	};

	return (
		<div className="App">
			<ShoppingCart
				visibilty={cartsVisibilty}
				products={productsInCart}
				onClose={() =>
					setCartVisible(false)
				}
				onQuantityChange={
					onQuantityChange
				}
				onProductRemove={onProductRemove}
			/>
			<div className="navbar">
				<h3 className="logo">LatFaj</h3>
				<button
					className="btn shopping-cart-btn"
					onClick={() =>
						setCartVisible(true)
					}>About me
					<GiShoppingBag size={24} />
					{productsInCart.length >
						0 && (
						<span className="product-count">
							{
								productsInCart.length
							}
						</span>
					)}
				</button>				
			</div>
			<main>
				<h2 className="title">
					Products
				</h2>
				<div className="products">
					{products.map((product) => (
						<div
							className="product"
							key={product.id}>
							<img
								className="product-image"
								src={
									product.image
								}
								alt={
									product.image
								}
							/>
							<h4 className="product-name">
								{product.name}
							</h4>
							<RatingStars
								rating={
									product.rating
								}
							/>
							<p>
								{
									product.description
								}
							</p>
							<span className="product-price">
								NGN{product.price}
							</span>							
						</div>
					))}
				</div>
			</main>
		</div>
	);
}

export default App;
