import React from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import PageTitle from "../Shared/PageTitle/PageTitle";

const ForgotPassword = () => {
	const [sendPasswordResetEmail, sending, error] =
		useSendPasswordResetEmail(auth);

	const handleResetPassword = async (e) => {
		e.preventDefault();
		const email = e.target.email.value;
		if (!email) {
			return toast.error("Please Provide an email!");
		}
		await sendPasswordResetEmail(email);
		toast.success("Check your email and reset!");
		e.target.reset();
	};

	return (
		<section className="py-20">
			<PageTitle title="Forgot Password"></PageTitle>
			<div className="container mx-auto">
				<div className="bg-orange-200 p-8 rounded w-[400px] mx-auto">
					<form
						onSubmit={handleResetPassword}
						className="flex flex-col"
						action=""
					>
						<h2 className="text-3xl text-center mb-8">Forgot Password</h2>
						<input
							name="email"
							className="border p-2 border-orange-500 rounded"
							type="email"
							placeholder="Eamil Address"
							required
						/>
						<input
							className="border text-lg p-2 text-white mt-4 rounded bg-orange-500"
							type="submit"
							value={`${sending ? "Sending..." : "Send"}`}
						/>
					</form>
				</div>
			</div>
		</section>
	);
};

export default ForgotPassword;
