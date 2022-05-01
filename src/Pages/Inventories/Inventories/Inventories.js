import React from "react";
import useProducts from "../../../Hooks/useProducts";
import Product from "../Product/Product";

const Inventories = () => {
	const [products] = useProducts();

	return (
		<section className="pt-20 py-10">
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

export default Inventories;
