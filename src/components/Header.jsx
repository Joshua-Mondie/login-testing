/** @format */

const Header = () => {
	return (
		<div className=" border-1   ">
			<div className="flex justify-between items-center px-4  py-4">
				<div>
					<img src="/src/assets/logo_j.gif" alt="" className="w-56  h-14" />
				</div>
				<div className="py-2">
					<div className="flex gap-2">
						<h1 className=" text-[#004182]  ">Help</h1>
						<h1 className=" text-[#004182]  ">FAQS</h1>
					</div>

					<button className="w-full mt-2 bg-gray-900 border">Sign In</button>
				</div>
			</div>
			<div className="h-1 bg-[#20487f] w-full"></div>
		</div>
	);
};

export default Header;
