import React from "react";
import google from "../../../Images/google.png";
import "./SocialSignIn.css";

const SocialSignIn = () => {
	return (
		<div className="mt-2">
			<div className="separetor text-center mb-2">
				<span className="text-center relative px-2 bg-white z-30">or</span>
			</div>
			<button className="text-lg flex items-center justify-center border w-full py-2 font-semibold border-orange-500 rounded">
				<img width="30px" src={google} alt="" />
				<span className="ml-2">Google Sign In</span>
			</button>
		</div>
	);
};

export default SocialSignIn;
