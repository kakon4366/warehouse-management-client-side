import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Inventory = () => {
	const { productId } = useParams();
	const [product, setProduct] = useState([]);

	const url = `http://localhost:5000/inventory/${productId}`;
	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => setProduct(data));
	}, []);

	return (
		<div className="border">
			<h2>This is Inventory Page {product.name}</h2>
		</div>
	);
};

export default Inventory;
