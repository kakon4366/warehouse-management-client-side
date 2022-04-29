import React from "react";
import Slider from "../Slider/Slider";
import { ArrowRightIcon } from "@heroicons/react/solid";
import { useNavigate } from "react-router-dom";
import ManageInventories from "../../ManageInventories/ManageInventories";

const Home = () => {
	const navigate = useNavigate();
	return (
		<div>
			<Slider></Slider>
			<div>
				<ManageInventories></ManageInventories>
				<div className="flex justify-end container mx-auto">
					<button
						onClick={() => navigate("/manage-inventories")}
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
