/** @format */

// import React from 'react';
import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
import { Button, Card, Input } from "@material-tailwind/react";
// import { MdCancel } from "react-icons/md";
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
	// const navigate = useNavigate();

	const onSubmit = (data) => {
		console.log(data);
		// Here you can call your login API and navigate upon success
		// navigate("/dashboard");
	};

	return (
		<div className="border-blue-600 pt-24 px-4 w-80 ">
			<div className="flex justify-center items-center  border-gray-400 shadow-lg w-full rounded-lg bg-gray-100">
				<Card className="w-full  p-6">
					<h1 className="text-xs font-bold text-center mb-4 text-black">
						Sign in to your Email
					</h1>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="mb-4 flex gap-5 justify-center items-center">
							<label htmlFor="memberId" className=" text-[11px] text-black">
								Member ID
							</label>
							<Input
								className="w-[153px] text-[11px] border-2 placeholder:text-gray-400"
								id="memberId"
								type="text"
								placeholder="Enter your Member ID"
								{...register("memberId", { required: "Member ID is required" })}
							/>
							{errors.memberId && (
								<p className="text-red-500 text-sm mt-1">
									{errors.memberId.message}
								</p>
							)}
						</div>

						<div className="mb-4 flex gap-4 justify-center items-center">
							<label htmlFor="password" className=" text-[11px]">
								Password
							</label>
							<Input
								className="w-[153px] text-[11px]  border-2 placeholder:text-gray-400"
								id="password"
								type="password"
								placeholder="Enter your password"
								{...register("password", { required: "Password is required" })}
							/>
							{errors.password && (
								<p className="text-red-500 text-sm mt-1">
									{errors.password.message}
								</p>
							)}
						</div>

						<a
							href=""
							className=" text-[11px] text-blue-900 flex  w-full  justify-center"
						>
							Forgot your password?
						</a>

						<Button
							type="submit"
							className="w-full text-black mt-4 font-serif "
							onClick={handleClick}
						>
							Login
						</Button>
					</form>
					{/* </CardContent> */}
				</Card>
			</div>
		</div>
	);
};

LoginScreen.propTypes = {
	hideVisibility: PropTypes.func.isRequired, // Specify the expected type and if it's required
};

export default LoginScreen;
