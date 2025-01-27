/** @format */

import { Button } from "@material-tailwind/react";

const Header = () => {
	return (
		<div className=" border-1  ">
			<div className="flex justify-between items-center px-4  py-2  ">
				<div>
					<img src="/src/assets/logo_j.gif" alt="" />
				</div>
				<div className="">
					<div className="flex gap-2  justify-center">
						<h1 className=" text-[#004182] text-sm ">Help</h1>
						<h1 className=" text-[#004182] text-sm ">FAQS</h1>
					</div>

					<Button
						style={{
							backgroundColor: "gray",
							color: "white",
							// padding: "10px 20px",
							height: 4,
							justifyContent: "center",
							alignItems: "center",

							border: "none",
							borderRadius: "5px",
							cursor: "pointer",
							display: "flex",
						}}
					>
						Sign In
					</Button>
				</div>
			</div>
			<div className="h-1 bg-[#20487f] w-full"></div>
		</div>
	);
};

export default Header;
