import React, { useEffect } from "react";
import axios from "axios";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";
import PageTitle from "../Shared/PageTitle/PageTitle";
import SocialSignIn from "../Shared/SocialSignIn/SocialSignIn";
import "./SignIn.css";

const SignIn = () => {
	const [signInWithEmailAndPassword, user, loading, LoginError] =
		useSignInWithEmailAndPassword(auth);

	const navigate = useNavigate();
	const location = useLocation();

	const from = location.state?.from?.pathname || "/";

	useEffect(() => {
		if (user) {
			// navigate(from, { replace: true });
		}
	}, [user]);

	if (loading) {
		return <Loading></Loading>;
	}

	const handleSignIn = async (e) => {
		e.preventDefault();
		const email = e.target.email.value;
		const password = e.target.password.value;

		await signInWithEmailAndPassword(email, password);
		const { data } = await axios.post(
			"https://fierce-garden-50697.herokuapp.com/signin",
			{
				email,
			}
		);
		localStorage.setItem("access_token", data.accessToken);
		navigate(from, { replace: true });
	};
	return (
		<section className="py-20 singin-area">
			<PageTitle title="Sign In"></PageTitle>
			<div className="container mx-auto">
				<div className="flex justify-center items-center w-full">
					<div className="w-full mx-2 sm:w-[400px]" data-aos="zoom-in-up">
						<form
							onSubmit={handleSignIn}
							action=""
							className="bg-white border-gray-300 border-2 p-6 rounded"
						>
							<h3 className="text-2xl text-center font-semibold">
								Sign In
							</h3>
							<div className="flex flex-col text-lg mb-3">
								<label htmlFor="email">Email Address</label>
								<input
									className="border py-1 px-2 mt-1"
									type="text"
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
							<small className="text-red-500">
								{LoginError ? LoginError.message : ""}
							</small>
							<input
								className="bg-orange-500 hover:bg-orange-600 transition-all cursor-pointer w-full text-white py-2 rounded mt-4"
								type="submit"
								value={loading ? "Loading..." : "Sign In"}
							/>
							<p className="mt-2">
								Need an Account?{" "}
								<Link className="text-orange-500" to="/sign-up">
									Sign up
								</Link>
							</p>
							<p className="text-orange-500 mt-2">
								<Link to="/forgot-password">Forgot Password?</Link>
							</p>
						</form>
						<SocialSignIn></SocialSignIn>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SignIn;
