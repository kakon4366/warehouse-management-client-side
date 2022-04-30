import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Inventory = () => {
	const { productId } = useParams();
	const [product, setProduct] = useState([]);
	const [updateStock, setUpdateStock] = useState(false);

	const { name, img, quote, price, stock, suppliername } = product;

	const url = `http://localhost:5000/inventory/${productId}`;
	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => setProduct(data));
	}, [updateStock]);

	const handleDelivered = () => {
		const deliveredProduct = stock - 1;

		const updateProduct = { stock: deliveredProduct };
		const url = `http://localhost:5000/delivered/${productId}`;
		fetch(url, {
			method: "PUT",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(updateProduct),
		})
			.then((res) => res.json())
			.then((data) => {
				setUpdateStock(!updateStock);
				toast.success("Product Delivered Success!");
			});
	};

	return (
		<section className="py-20">
			<div className="container mx-auto">
				<div className="grid grid-cols-2">
					<div className="border bg-orange-100 flex rounded-l-lg">
						<div>
							<img
								className="border-l-8 rounded-l-lg border-orange-600"
								src={img}
								alt=""
							/>
						</div>
						<div className="ml-4 my-6">
							<h2 className="text-3xl mb-2 font-semibold">{name}</h2>
							<p className="text-lg">{quote}</p>
							<h4 className="text-2xl my-4">
								Price: $<span>{price}</span>
							</h4>
							<p className="text-sm">Stock: {stock}</p>
							<p className="text-sm">Supplier Name: {suppliername}</p>
							<button
								onClick={handleDelivered}
								className="bg-orange-400 hover:bg-orange-600 transition-all py-2 px-6 text-white rounded uppercase font-semibold mt-6"
							>
								delivered
							</button>
						</div>
					</div>
					<div>
						<h2>Other content</h2>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Inventory;
