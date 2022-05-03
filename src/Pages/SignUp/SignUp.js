import React, { useEffect, useState } from "react";
import SocialSignIn from "../Shared/SocialSignIn/SocialSignIn";
import {
	useCreateUserWithEmailAndPassword,
	useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";
import { Link, useLocation, useNavigate } from "react-router-dom";
import PageTitle from "../Shared/PageTitle/PageTitle";
import "./SignUp.css";
import Loading from "../Shared/Loading/Loading";

const SignUp = () => {
	const [passwordError, setPasswordError] = useState("");
	const [check, setCheck] = useState(false);
	const [createUserWithEmailAndPassword, user, loading, error] =
		useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
	const [updateProfile] = useUpdateProfile(auth);

	const navigate = useNavigate();
	const location = useLocation();

	const from = location.state?.from?.pathname || "/";

	useEffect(() => {
		if (user) {
			navigate(from, { replace: true });
		}
	}, [user]);

	if (loading) {
		return <Loading></Loading>;
	}

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
		toast.success("Send email Varification!");
		setPasswordError("");
		e.target.reset();
	};

	return (
		<section className="py-20 singup-area">
			<PageTitle title="Sign Up"></PageTitle>
			<div className="container mx-auto">
				<div className="flex justify-center items-center w-full">
					<div
						className=" w-full mx-2 sm:w-[400px] "
						data-aos="zoom-out-up"
					>
						<form
							onSubmit={handleSignUp}
							action=""
							className="bg-white border-gray-300 border-2 p-6 rounded"
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
							<div className="flex items-center">
								<input
									onChange={(e) => setCheck(e.target.checked)}
									type="checkbox"
									id="check"
								/>
								<label
									htmlFor="check"
									className={`ml-1 text-sm ${
										check ? "text-gray-800" : "text-gray-500"
									}`}
								>
									Accept terms and conditions?
								</label>
							</div>
							<input
								disabled={check ? false : true}
								className={`transition-all cursor-pointer w-full text-white py-2 rounded mt-4 ${
									check
										? "bg-orange-500 hover:bg-orange-600"
										: "bg-orange-400"
								}`}
								type="submit"
								value={loading ? "Loading..." : "Sign Up"}
							/>
							<p className="mt-2">
								Have an Account?{" "}
								<Link className="text-orange-500" to="/sign-in">
									Sign in
								</Link>
							</p>
						</form>
						<SocialSignIn></SocialSignIn>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SignUp;
