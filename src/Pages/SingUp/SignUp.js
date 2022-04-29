import React, { useState } from "react";
import SocialSignIn from "../Shared/SocialSignIn/SocialSignIn";
import {
	useCreateUserWithEmailAndPassword,
	useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
	const [passwordError, setPasswordError] = useState("");
	const [createUserWithEmailAndPassword, loading, error] =
		useCreateUserWithEmailAndPassword(auth);
	const [updateProfile] = useUpdateProfile(auth);

	const navigate = useNavigate();

	const handleSignUp = async (e) => {
		e.preventDefault();
		const name = e.target.name.value;
		const email = e.target.email.value;
		const password = e.target.password.value;
		const confirmPassword = e.target.confirmPassword.value;

		if (password !== confirmPassword) {
			setPasswordError("Confirm password will be not match!");
			return;
		}
		await createUserWithEmailAndPassword(email, password);
		await updateProfile({ displayName: name });
		toast.success("Sign Up Success!");
		setPasswordError("");
		e.target.reset();
		navigate("/sign-in");
	};

	return (
		<section className="py-20">
			<div className="container mx-auto">
				<div className="flex justify-center items-center w-full">
					<div className="w-[300px] ">
						<form
							onSubmit={handleSignUp}
							action=""
							className="bg-orange-100 p-4 rounded"
						>
							<h3 className="text-2xl text-center font-semibold">
								Sing Up
							</h3>
							<div className="flex flex-col text-lg mb-3 mt-4">
								<label htmlFor="name">Name</label>
								<input
									className="border py-1 px-2 mt-1"
									type="text"
									name="name"
									placeholder="Name"
									required
								/>
							</div>
							<div className="flex flex-col text-lg mb-3">
								<label htmlFor="email">Email Address</label>
								<input
									className="border py-1 px-2 mt-1"
									type="email"
									name="email"
									placeholder="Eamil Address"
									required
								/>
							</div>
							<div className="flex flex-col text-lg mb-3">
								<label htmlFor="password">Password</label>
								<input
									className="border py-1 px-2 mt-1"
									type="password"
									name="password"
									placeholder="Password"
									required
								/>
							</div>
							<div className="flex flex-col text-lg mb-3">
								<label htmlFor="confirmPassword">
									Confirm Password
								</label>
								<input
									className="border py-1 px-2 mt-1"
									type="password"
									name="confirmPassword"
									placeholder="Confirm Password"
									required
								/>
							</div>
							<small className="text-red-500">{passwordError}</small>
							<small className="text-red-500">
								{error ? error.message : ""}
							</small>
							<input
								className="bg-orange-500 hover:bg-orange-600 transition-all cursor-pointer w-full text-white py-2 rounded mt-4"
								type="submit"
								value={loading ? "Loading..." : "Sign Up"}
							/>
						</form>
						<SocialSignIn></SocialSignIn>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SignUp;
