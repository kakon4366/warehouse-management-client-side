import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import PageTitle from "../Shared/PageTitle/PageTitle";

const Inventory = () => {
	const { productId } = useParams();
	const [product, setProduct] = useState([]);
	const [updateStock, setUpdateStock] = useState(false);

	const { name, img, quote, price, stock, suppliername } = product;

	const url = `https://fierce-garden-50697.herokuapp.com/inventory/${productId}`;
	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => setProduct(data));
	}, [updateStock]);

	//delivered product
	const handleDelivered = () => {
		const deliveredProduct = stock - 1;

		if (deliveredProduct < 0) {
			return toast.error("Product stock not available!");
		}

		const updateProduct = { stock: deliveredProduct };
		const url = `https://fierce-garden-50697.herokuapp.com/delivered/${productId}`;
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
				toast.success(data.message);
			});
	};

	//stock product
	const handleAddStockProduct = (e) => {
		e.preventDefault();
		const stockCount = e.target.stockCount.value;

		if (!stockCount) {
			toast.error("Please Provide Stock Count!");
			return;
		}

		const addStockCount = parseInt(stock) + parseInt(stockCount);
		const updateProduct = { stock: addStockCount };

		const url = `https://fierce-garden-50697.herokuapp.com/addstock/${productId}`;
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
				toast.success(data.message);
				e.target.reset();
			});
	};

	return (
		<section className="py-20" data-aos="slide-left">
			<PageTitle title="Inventory"></PageTitle>
			<div className="container mx-auto">
				<div className="grid lg:grid-cols-3 gap-12">
					<div className="border bg-orange-100 lg:col-span-2 md:flex rounded-l-lg rounded">
						<div className="md:border-l-8 md:rounded-l-lg md:border-orange-600">
							<img src={img} alt="" width="100%" className="lg:h-full" />
						</div>
						<div className="mx-4 my-6">
							<h2 className="text-2xl mb-2 font-semibold">{name}</h2>
							<p className="text-md">{quote}</p>
							<h4 className="text-xl my-2">
								Price: $<span>{price}</span>
								<span className="text-sm"> (per KG)</span>
							</h4>
							<div className="flex justify-between items-center">
								<div>
									<p className="text-sm italic">
										Stock:{" "}
										<span>
											{stock <= 0
												? "Product stock not avilable."
												: stock}
										</span>
										<span> (KG)</span>
									</p>
									<p className="text-sm italic">
										Supplier Name: {suppliername}
									</p>
								</div>
								<button
									onClick={handleDelivered}
									className="bg-orange-400 hover:bg-orange-600 transition-all py-2 px-6 text-white rounded uppercase font-semibold"
								>
									delivered
								</button>
							</div>
						</div>
					</div>
					<div className="bg-yellow-100 p-8 w-full rounded border">
						<h2 className="text-3xl text-center mb-4">
							Restock the items
						</h2>
						<hr />
						<form
							onSubmit={handleAddStockProduct}
							className="flex flex-col items-center mt-8"
							action=""
						>
							<input
								name="stockCount"
								type="number"
								placeholder="Stock Count (KG)"
								className="w-full border border-gray-300 py-2 px-4 text-lg"
							/>
							<input
								className="bg-green-500 hover:bg-green-600 transition-all py-2 px-6 w-full text-white rounded uppercase font-semibold mt-6 cursor-pointer"
								type="submit"
								value="Add Stock"
							/>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Inventory;
