import React from "react";
import fruitsBasket from "../../../Images/fruits.jpg";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const NotFound404 = () => {
	const navigate = useNavigate();
	return (
		<section className="py-20 bg-[#F8F7FC]" data-aos="fade-up">
			<div className="container mx-auto">
				<div className="grid grid-cols-2">
					<div className="flex flex-col justify-center items-center">
						<h2 className="text-8xl animate-bounce ">404</h2>
						<h2 className="text-5xl text-orange-500">
							Something is Wrong :({" "}
						</h2>
						<p className="text-lg mt-3 text-gray-600">
							We can't seem to find the page you're looking for.
						</p>
						<button
							onClick={() => navigate("/")}
							className="text-lg bg-orange-400 py-2 px-4 mt-6 rounded text-white font-semibold"
						>
							Go to Home
						</button>
					</div>
					<div>
						<img className="w-full mx-auto" src={fruitsBasket} alt="" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default NotFound404;
