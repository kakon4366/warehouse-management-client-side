import React from "react";
import Slider from "../Slider/Slider";
import { ArrowRightIcon } from "@heroicons/react/solid";
import { useNavigate } from "react-router-dom";
import Inventories from "../../Inventories/Inventories/Inventories";
import useProducts from "../../../Hooks/useProducts";
import Product from "../../Inventories/Product/Product";

const Home = () => {
	const [products] = useProducts();
	const navigate = useNavigate();
	return (
		<div>
			<Slider></Slider>
			<div className="pt-20 py-10">
				<div className="container mx-auto">
					<h2 className="text-4xl text-center font-semibold">Inventory</h2>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
						{products.slice(0, 6).map((product) => (
							<Product product={product} key={product._id}></Product>
						))}
					</div>
				</div>

				<div className="flex justify-end container mx-auto mt-4">
					<button
						onClick={() => navigate("/inventories")}
						className="text-orange-600 flex justify-center items-center"
					>
						See All Products{" "}
						<ArrowRightIcon className="w-4 h-4 ml-1"></ArrowRightIcon>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Home;
