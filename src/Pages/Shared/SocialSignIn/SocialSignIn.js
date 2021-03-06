import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import google from "../../../Images/google.png";
import "./SocialSignIn.css";

const SocialSignIn = () => {
	const [signInWithGoogle] = useSignInWithGoogle(auth);

	const navigate = useNavigate();

	return (
		<div className="mt-2">
			<div className="separetor text-center mb-2">
				<span className="text-center relative px-2 bg-[#DCF7FA] z-30">
					or
				</span>
			</div>
			<button
				onClick={async () => {
					await signInWithGoogle();
					navigate("/home");
				}}
				className="text-lg flex items-center justify-center border w-full py-2 font-semibold border-gray-400 rounded bg-white hover:bg-orange-100 transition-all"
			>
				<img width="30px" src={google} alt="" />
				<span className="ml-2">Google Sign In</span>
			</button>
		</div>
	);
};

export default SocialSignIn;
