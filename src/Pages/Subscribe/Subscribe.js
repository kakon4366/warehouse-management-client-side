import React from "react";
import "./Subscribe.css";

const Subscribe = () => {
	return (
		<section className="py-20 subscribe-area">
			<div className="container mx-auto px-2">
				<h2 className="text-3xl text-center text-white uppercase font-bold">
					More Update
				</h2>
				<div className="w-full md:w-1/2 xl:w-[500px] mx-auto mt-6">
					<form
						onSubmit={(e) => e.preventDefault()}
						action=""
						className="flex flex-col md:flex-row justify-center items-center"
					>
						<input
							className="border w-full border-orange-400 p-2"
							type="text"
							placeholder="Email Address"
						/>
						<input
							className="bg-orange-400 mt-4 md:mt-0 p-2 border-orange-400 border cursor-pointer hover:bg-orange-600 transition-all px-6 w-full md:w-auto"
							type="submit"
							value="Subscribe"
						/>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Subscribe;
