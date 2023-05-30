import React, { useState } from "react";

import "./RegisterAccount.css"
const initFormValue ={
	firstName:"",
	lastName:"",
	email:"",
	password:"",
	confirmPassword:"",
};
const isEmptyValue=(value)=>{
	return !value || value.trim().length<1;
}
const isEmailValid =(email)=>{
	return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}
export default function RegisterPage(){
	const [formValue, setFormValue]=useState(initFormValue);
	const [formError,setFormError]=useState({});
	
const validateForm=()=>{
	const error ={};

	if(isEmptyValue(formValue.firstName)){
		error['firstName']= "First name is required"
	} 
	if(isEmptyValue(formValue.lastName)){
		error['lastName']= "Last name is required"
	}
	if(isEmptyValue(formValue.email)){
		error['email']= "Email is required"
	}else{
		if(!isEmailValid(formValue.email)){
			error["email"]="Email is invalid";
		}
	}
	if(isEmptyValue(formValue.password)){
		error['password']= "Password is required"
	}
	if(isEmptyValue(formValue.confirmPassword)){
		error['confirmPassword']= "Confirm Password is required"
	}else{
		if(formValue.confirmPassword!==formValue.password){
			error["confirmPassword"]="Confirm Password is not match";
		}
	}
	setFormError(error);
	return Object.keys(error).length ===0;

};

	const handleChange =(event)=>{
		const {value,name}=event.target;
		setFormValue({
			...formValue,
			[name]: value,
		});
	};
	const handleSubmit =(event)=>{
		event.preventDefault();

		if(validateForm()){
			console.log("form value",formValue);
		}else
		console.log("form invalid")
		
	};
	console.log(formError);

	return(
	
	<div className="register-page">
		<img className="img" src="http://webcoban.vn/image/cat-2.jpg"></img>
      
      
		<div className="register-form-container">
			<h1 className="title color">Đăng ký</h1>
             <form onSubmit={handleSubmit}>
				<div className="nb-2">
					<label htmlFor="first-name" className="form-label">
						First name
					</label>
					<input id="first-name" 
					className="form-control"
					type="text"
					name="firstName"
					value={formValue.firstName}
					onChange={handleChange}
					/>
					{formError.firstName && (
						<div className="error-feedback">{formError.firstName}</div>
					)}
				</div>
				<div className="nb-2">
					<label htmlFor="last-name" className="form-label">
						Last name
					</label>
					<input id="last-name" 
					className="form-control"
					type="text"
					name="lastName"
					value={formValue.lastName}
					onChange={handleChange}
					/>
					{formError.lastName && (
						<div className="error-feedback">{formError.lastName}</div>
					)}
				</div>
				<div className="nb-2">
					<label htmlFor="email" className="form-label">
						Email
					</label>
					<input id="email" 
					className="form-control"
					type="text"
					name="email"
					value={formValue.email}
					onChange={handleChange}
					/>
					{formError.email && (
						<div className="error-feedback">{formError.email}</div>
					)}
				</div>
				<div className="nb-2">
					<label htmlFor="password" className="form-label">
						Password
					</label>
					<input id="password" 
					className="form-control"
					type="password"
					name="password"
					value={formValue.password}
					onChange={handleChange}
					/>
					{formError.password && (
						<div className="error-feedback">{formError.password}</div>
					)}
				</div>
				<div className="nb-2">
					<label htmlFor="confirmpassword" className="form-label">
						Confirm Password
					</label>
					<input id="confirm-password" 
					className="form-control"
					type="password"
					name="confirmPassword"
					value={formValue.confirmPassword}
					onChange={handleChange}
					/>
					{formError.confirmPassword && (
						<div className="error-feedback">{formError.confirmPassword}</div>
					)}
				</div>
				
				<button type="submit" className="submit-btn">
					Đăng ký
				</button>
				<br></br>
				<br></br>
				<text > Bạn đã có tài khoản? </text>
				<b type="submit" className="color hoho" > Đăng nhập</b>
				
			 </form>
		</div>
	</div>
	);
}