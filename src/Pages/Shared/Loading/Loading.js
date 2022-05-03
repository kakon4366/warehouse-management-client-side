import React from "react";
import spinner from "../../../Images/spinner.gif";

const Loading = () => {
	return (
		<section className="bg-[#F5FEFE] py-20">
			<div className="container mx-auto">
				<div className="my-20">
					<img className="mx-auto" src={spinner} alt="" />
					<h2 className="text-center text-3xl text-orange-500">
						Loadding...
					</h2>
				</div>
			</div>
		</section>
	);
};

export default Loading;
