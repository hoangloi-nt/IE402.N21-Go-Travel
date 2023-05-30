import React, { useState } from "react";

import "../RegisterAccount/RegisterAcount"
const initFormValue ={
	
	email:"",
	password:"",
};
const isEmptyValue=(value)=>{
	return !value || value.trim().length<1;
}
const isEmailValid =(email)=>{
	return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}
export default function SigninPage(){
	const [formValue, setFormValue]=useState(initFormValue);
	const [formError,setFormError]=useState({});
	
const validateForm=()=>{
	const error ={};

	
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
			<h1 className="title color">Đăng nhập</h1>
             <form onSubmit={handleSubmit}>
				
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
				
				
				<button type="submit" className="submit-btn">
					Đăng nhập
				</button>
				<br></br>
				<br></br>
				<text > Bạn chưa có tài khoản? </text>
				<b type="submit" className="color hoho" > Đăng ký</b>
				
			 </form>
		</div>
	</div>
	);
}