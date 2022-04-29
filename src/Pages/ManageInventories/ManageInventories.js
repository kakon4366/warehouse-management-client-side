import React, { useEffect, useState } from "react";
import Product from "./Product/Product";

const ManageInventories = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch("inventories.json")
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, []);

	return (
		<section>
			<div className="container mx-auto">
				<h2 className="text-4xl text-center font-semibold">Inventory</h2>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
					{products.map((product) => (
						<Product product={product} key={product._id}></Product>
					))}
				</div>
			</div>
		</section>
	);
};

export default ManageInventories;
