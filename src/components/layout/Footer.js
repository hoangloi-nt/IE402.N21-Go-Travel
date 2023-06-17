import React from "react";
import { NavLink } from "react-router-dom";
import Facebook from "assets/images/facebook.png";
import Linkedin from "assets/images/linkedin.png";
import Twitter from "assets/images/twitter.png";
import Pinterest from "assets/images/pinterest.png";

const Footer = () => {
	return (
		<div className="w-full h-full bg-[#6557B9]">
			<div className="page-container flex items-center justify-center text-white gap-x-[181px] py-24">
				<div>
					<NavLink to="/">
						<img srcSet="/logoNew.png 1x" alt="logo" />
					</NavLink>
					<p className="mt-[27px] max-w-[240px] font-light">
						Khám phá Việt Nam trong từng hơi thở
					</p>
				</div>
				<div className="grid grid-cols-2 gap-x-[54px] gap-y-5">
					<img src={Facebook} alt="Facebook" />
					<img src={Linkedin} alt="Linkedin" />
					<img src={Twitter} alt="Twitter" />
					<img src={Pinterest} alt="Pinterest" />
				</div>
				<div>
					<h5 className="mb-5 text-xl font-semibold">Contact</h5>
					<p className="font-light">
						Team 2 UIT <br></br>
						May 10, 2023
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
