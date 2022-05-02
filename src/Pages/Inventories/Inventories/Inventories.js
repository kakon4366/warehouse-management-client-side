import React, { useEffect, useState } from "react";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import Product from "../Product/Product";

const Inventories = () => {
	const [products, setProducts] = useState([]);
	const [pageCount, setPageCount] = useState(0);
	const [page, setPage] = useState(0);
	const [limit, setLimit] = useState(5);

	//get all products
	useEffect(() => {
		fetch(
			`https://fierce-garden-50697.herokuapp.com/productsList?page=${page}&limit=${limit}`
		)
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, [page, limit]);

	//get products count
	useEffect(() => {
		fetch("https://fierce-garden-50697.herokuapp.com/productsCount")
			.then((res) => res.json())
			.then((result) => {
				const count = result.count;
				const page = Math.ceil(count / limit);
				setPageCount(page);
			});
	}, [limit]);

	return (
		<section className="pt-20 py-10">
			<PageTitle title="Inventories"></PageTitle>
			<div className="container mx-auto px-2">
				<h2 className="text-4xl text-center font-semibold">Inventory</h2>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
					{products.map((product) => (
						<Product product={product} key={product._id}></Product>
					))}
				</div>
				<div className="mt-8">
					{[...Array(pageCount).keys()].map((num) => (
						<button
							className={`border p-2 border-orange-500 mr-4 ${
								page === num ? "bg-orange-500" : ""
							}`}
							onClick={() => setPage(num)}
							key={num}
						>
							{num + 1}
						</button>
					))}
					<select
						className="border-orange-500 border p-2"
						defaultValue={5}
						onChange={(e) => setLimit(e.target.value)}
					>
						<option value="5">5</option>
						<option value="10">10</option>
						<option value="15">15</option>
						<option value="20">20</option>
					</select>
				</div>
			</div>
		</section>
	);
};

export default Inventories;
