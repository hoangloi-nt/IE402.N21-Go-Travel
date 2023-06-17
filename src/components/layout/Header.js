import UserIcon from "assets/icons/UserIcon";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const menuLinks = [
	{
		url: "/manage-tour",
		title: "Chuyến đi",
	},
	{
		url: "/famous-site",
		title: "Địa điểm",
	},
	{
		url: "/contact",
		title: "Liên hệ",
	},
];

const Header = () => {
	const [isUser, setIsUser] = useState(false);

	return (
		<div className="bg-[#6557B9] w-full h-full">
			<div className="flex items-center justify-between text-white page-container px-9 py-[22px]">
				<NavLink to="/">
					<img srcSet="/logoNew.png 1x" alt="logo" />
				</NavLink>
				<div className="flex items-center justify-center gap-x-10">
					{menuLinks.map((item, index) => (
						<NavLink
							to={item.url}
							key={index}
							className="cursor-pointer hover:opacity-70 "
						>
							{item.title}
						</NavLink>
					))}
				</div>
				<div className="relative group">
					<UserIcon className="cursor-pointer hover:opacity-70"></UserIcon>
					<div className="scale-0 absolute top-[50px] right-0 p-5 text-lg text-black bg-white rounded-lg shadow-sm flex flex-col gap-y-3 group-hover:scale-100 transition-all min-w-[150px] z-10">
						{isUser ? (
							<>
								<p className="transition-all cursor-pointer hover:-translate-x-2">
									Thông tin cá nhân
								</p>
								<p className="transition-all cursor-pointer hover:-translate-x-2">
									Chuyến đi của tôi
								</p>
								<p className="font-semibold text-red-500 transition-all cursor-pointer hover:-translate-x-2">
									Đăng xuất
								</p>
							</>
						) : (
							<>
								<p className="font-semibold text-[#6557B9] transition-all cursor-pointer hover:-translate-x-2">
									Đăng nhập
								</p>
								<p className="font-semibold text-[#6557B9] transition-all cursor-pointer hover:-translate-x-2">
									Đăng ký
								</p>
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
