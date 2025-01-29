/** @format */

import { useForm } from "react-hook-form";
import { Button, Card, Input } from "@material-tailwind/react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate("/landingpage");
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<div className="flex justify-center items-center min-h-screen ">
			<Card className="w-full max-w-xs p-6 shadow-lg">
				<h1 className="text-lg font-bold text-center mb-6 text-blue-800">
					Sign in to Your Email
				</h1>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="mb-4">
						<label
							htmlFor="memberId"
							className="block text-sm font-medium text-gray-700 mb-1"
						>
							Member ID
						</label>
						<Input
							className="text-sm border-gray-300 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
							id="memberId"
							type="text"
							placeholder="Enter your Member ID"
							{...register("memberId", { required: "Member ID is required" })}
						/>
						{errors.memberId && (
							<p className="text-red-500 text-xs mt-1">
								{errors.memberId.message}
							</p>
						)}
					</div>

					<div className="mb-4">
						<label
							htmlFor="password"
							className="block text-sm font-medium text-gray-700 mb-1"
						>
							Password
						</label>
						<Input
							className="text-sm border-gray-300 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
							id="password"
							type="password"
							placeholder="Enter your password"
							{...register("password", { required: "Password is required" })}
						/>
						{errors.password && (
							<p className="text-red-500 text-xs mt-1">
								{errors.password.message}
							</p>
						)}
					</div>

					<a
						href="#"
						className="block text-sm text-blue-800 text-center mt-2 mb-4 hover:underline"
					>
						Forgot your password?
					</a>

					<Button
						type="submit"
						className="w-full  bg-blue-600 hover:bg-blue-700 text-black"
						onClick={handleClick}
					>
						Login
					</Button>
				</form>
			</Card>
		</div>
	);
};

LoginScreen.propTypes = {
	hideVisibility: PropTypes.func.isRequired,
};

export default LoginScreen;
