import React from "react";

import Brand1 from "../../assets/brands/1.svg";
import Brand2 from "../../assets/brands/2.svg";
import Brand3 from "../../assets/brands/3.svg";
import Brand4 from "../../assets/brands/4.svg";
import Brand5 from "../../assets/brands/5.svg";

// #9c9c9c
const BrandsLogo = () => {
	return (
		<>
			<div className="container mb-16 sm:mt-0">
				<h1 className="text-center text-lg text-gray-400 mt-16">
					Companies that choose us
				</h1>
				<div className="py-16 md:px-36 flex flex-wrap items-center justify-evenly gap-3">
					<img src={Brand1} alt="" />
					<img src={Brand2} alt="" />
					<img src={Brand3} alt="" />
					<img src={Brand4} alt="" />
					<img src={Brand5} alt="" />
				</div>
			</div>
		</>
	);
};

export default BrandsLogo;
