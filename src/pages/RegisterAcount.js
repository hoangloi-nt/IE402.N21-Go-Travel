import React, { useState } from "react";

import Layout from "components/layout/Layout";
const initFormValue = {
	firstName: "",
	lastName: "",
	email: "",
	password: "",
	confirmPassword: "",
};
const isEmptyValue = (value) => {
	return !value || value.trim().length < 1;
};
const isEmailValid = (email) => {
	// eslint-disable-next-line no-useless-escape
	return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
};
export default function RegisterPage() {
	const [formValue, setFormValue] = useState(initFormValue);
	const [formError, setFormError] = useState({});

	const validateForm = () => {
		const error = {};

		if (isEmptyValue(formValue.firstName)) {
			error["firstName"] = "First name is required";
		}
		if (isEmptyValue(formValue.lastName)) {
			error["lastName"] = "Last name is required";
		}
		if (isEmptyValue(formValue.email)) {
			error["email"] = "Email is required";
		} else {
			if (!isEmailValid(formValue.email)) {
				error["email"] = "Email is invalid";
			}
		}
		if (isEmptyValue(formValue.password)) {
			error["password"] = "Password is required";
		}
		if (isEmptyValue(formValue.confirmPassword)) {
			error["confirmPassword"] = "Confirm Password is required";
		} else {
			if (formValue.confirmPassword !== formValue.password) {
				error["confirmPassword"] = "Confirm Password is not match";
			}
		}
		setFormError(error);
		return Object.keys(error).length === 0;
	};

	const handleChange = (event) => {
		const { value, name } = event.target;
		setFormValue({
			...formValue,
			[name]: value,
		});
	};
	const handleSubmit = (event) => {
		event.preventDefault();

		if (validateForm()) {
			console.log("form value", formValue);
		} else console.log("form invalid");
	};
	console.log(formError);

	return (
		<Layout>
			<div className="flex items-center justify-between page-container my-[80px]">
				<img
					className="w-[720px] h-[412px]"
					src="./images/signin.png"
					alt="Signin"
				></img>

				<div className="bg-white w-[550px] shadow-sign-in px-[65px] pt-[44px] pb-[54px] rounded-[16px]">
					<h1 className="text-purple-1 mb-[24px] leading-[36px] text-center text-[24px] font-semibold">
						Đăng ký
					</h1>
					<form onSubmit={handleSubmit} className="mb-[30px]">
						<div className="mb-[22px]">
							<label
								htmlFor="first-name"
								className="text-[16px] block font-semibold leading-[24px] mb-[14px] text-purple-1"
							>
								First name
							</label>
							<input
								id="first-name"
								className="w-full bg-white py-[14px] px-[18px]  border-grey-1 border-[1px] rounded-[10px]"
								type="text"
								name="firstName"
								value={formValue.firstName}
								onChange={handleChange}
							/>
							{formError.firstName && (
								<div className="error-feedback">{formError.firstName}</div>
							)}
						</div>
						<div className="mb-[22px]">
							<label
								htmlFor="last-name"
								className="text-[16px] block font-semibold leading-[24px] mb-[14px] text-purple-1"
							>
								Last name
							</label>
							<input
								id="last-name"
								className="w-full bg-white py-[14px] px-[18px]  border-grey-1 border-[1px] rounded-[10px]"
								type="text"
								name="lastName"
								value={formValue.lastName}
								onChange={handleChange}
							/>
							{formError.lastName && (
								<div className="error-feedback">{formError.lastName}</div>
							)}
						</div>
						<div className="mb-[22px]">
							<label
								htmlFor="email"
								className="text-[16px] block font-semibold leading-[24px] mb-[14px] text-purple-1"
							>
								Email
							</label>
							<input
								id="email"
								className="w-full bg-white py-[14px] px-[18px]  border-grey-1 border-[1px] rounded-[10px]"
								type="text"
								name="email"
								value={formValue.email}
								onChange={handleChange}
							/>
							{formError.email && (
								<div className="error-feedback">{formError.email}</div>
							)}
						</div>
						<div className="mb-[22px]">
							<label
								htmlFor="password"
								className="text-[16px] block font-semibold leading-[24px] mb-[14px] text-purple-1"
							>
								Password
							</label>
							<input
								id="password"
								className="w-full bg-white py-[14px] px-[18px]  border-grey-1 border-[1px] rounded-[10px]"
								type="password"
								name="password"
								value={formValue.password}
								onChange={handleChange}
							/>
							{formError.password && (
								<div className="error-feedback">{formError.password}</div>
							)}
						</div>
						<div className="mb-[40px]">
							<label
								htmlFor="confirmpassword"
								className="text-[16px] block font-semibold leading-[24px] mb-[14px] text-purple-1"
							>
								Confirm Password
							</label>
							<input
								id="confirm-password"
								className="w-full bg-white py-[14px] px-[18px]  border-grey-1 border-[1px] rounded-[10px]"
								type="password"
								name="confirmPassword"
								value={formValue.confirmPassword}
								onChange={handleChange}
							/>
							{formError.confirmPassword && (
								<div className="error-feedback">
									{formError.confirmPassword}
								</div>
							)}
						</div>

						<button className="py-[10px] text-[16px] w-full text-white bg-[#6557B9] rounded font-semibold hover:opacity-60">
							Đăng kí
						</button>
					</form>
					<p>
						Bạn đã có tài khoản?
						<a
							href="/signin"
							className="text-[16px] ml-[4px] inline-block font-semibold leading-[24px]  text-purple-1"
						>
							Đăng nhập
						</a>
					</p>
				</div>
			</div>
		</Layout>
	);
}
