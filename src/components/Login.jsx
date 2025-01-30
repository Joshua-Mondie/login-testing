/** @format */

// import React from 'react';
import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
import { Button, Card, Input } from "@material-tailwind/react";
import { MdCancel } from "react-icons/md";
import PropTypes from "prop-types";
import "../pages/LoginScreen.css";

const LoginPage = ({ hideVisibility }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	// const navigate = useNavigate();

	const onSubmit = (data) => {
		console.log(data);
		// Here you can call your login API and navigate upon success
		// navigate("/dashboard");
	};

	return (
		<div className="flex  justify-center right-1 top-6  rounded-lg z-10 bg-gray-100 absolute">
			<Card className="w-full  p-6">
				{/* <CardContent> */}
				<div className=" justify-end flex">
					<MdCancel className="hover:cursor-pointer" onClick={hideVisibility} />
				</div>

				<h1 className="text-xs font-bold text-center mb-4">
					Sign in to your Email
				</h1>
				<form onSubmit={handleSubmit(onSubmit)} className="md:w-[20rem]">
					<div className="mb-4">
						<label
							htmlFor="memberId"
							// className="block text-sm font-medium text-gray-700 mb-1"
						>
							Member ID
						</label>
						<Input
							// className="text-sm border-gray-300 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
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
							// className="block text-sm font-medium text-gray-700 mb-1"
						>
							Password
						</label>
						<Input
							// className="text-sm border-gray-300 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
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
						// className="block text-sm text-blue-800 text-center mt-2 mb-4 hover:underline"
					>
						Forgot your password?
					</a>

					<Button
						type="submit"
						// className="w-full  bg-blue-600 hover:bg-blue-700 text-black"
						// onClick={handleClick}
					>
						Login
					</Button>
				</form>
				{/* </CardContent> */}
			</Card>
		</div>
	);
};

LoginPage.propTypes = {
	hideVisibility: PropTypes.func.isRequired, // Specify the expected type and if it's required
};

export default LoginPage;
