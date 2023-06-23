import React, { useState } from "react";

import Layout from "components/layout/Layout";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase-config";
import { useNavigate } from "react-router-dom";
const initFormValue = {
  email: "",
  password: "",
};
const isEmptyValue = (value) => {
  return !value || value.trim().length < 1;
};
const isEmailValid = (email) => {
  // eslint-disable-next-line no-useless-escape
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
};
export default function SigninPage() {
  const [formValue, setFormValue] = useState(initFormValue);
  const [formError, setFormError] = useState({});
  const navigate = useNavigate();

  const { handleSubmit } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const validateForm = () => {
    const error = {};

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
  const handleSignIn = async () => {
    if (validateForm()) {
      console.log("form value", formValue);
      await signInWithEmailAndPassword(
        auth,
        formValue.email,
        formValue.password
      )
        .catch((error) => {
          if (error.code === "auth/user-not-found") {
            toast.error("Account does not exist!", { pauseOnHover: false });
            return;
          }
        })
        .then((info) => {
          if (info?.user) {
            toast.success("Login successfully!", { pauseOnHover: false });
            // setUserAtom([info.user.email]);
            navigate("/");
          }
        });
    } else toast.error("Giá trị không hợp lệ ");
  };

  return (
    <Layout>
      <div className="flex items-center justify-between page-container my-[120px]">
        <img
          className="w-[720px] h-[412px]"
          src="./images/signin.png"
          alt="Signin"
        ></img>
        <div className="bg-white w-[460px] shadow-sign-in px-[65px] pt-[44px] pb-[54px] rounded-[16px]">
          <h1 className="text-purple-1 mb-[24px] leading-[36px] text-center text-[24px] font-semibold">
            Đăng nhập
          </h1>
          <form
            onSubmit={handleSubmit(handleSignIn)}
            className="block mb-[20px]"
          >
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
            <div className="mb-[40px]">
              <label
                htmlFor="password"
                className="text-[16px] block font-semibold leading-[24px] mb-[14px] text-purple-1"
              >
                Password
              </label>
              <input
                id="password"
                className="w-full text-[16px] h-[52px] py-[14px] px-[18px] bg-white border-grey-1 border-[1px] rounded-[10px]"
                type="password"
                name="password"
                value={formValue.password}
                onChange={handleChange}
              />
              {formError.password && (
                <div className="error-feedback">{formError.password}</div>
              )}
            </div>

            <button
              className="py-[10px] text-[16px] w-full text-white bg-[#6557B9] rounded font-semibold hover:opacity-60"
              type="submit"
            >
              Đăng nhập
            </button>
          </form>
          <p>
            Bạn chưa có tài khoản?
            <a
              href="/register"
              className="text-[16px]  ml-[4px] inline-block font-semibold leading-[24px]  text-purple-1"
            >
              Đăng ký
            </a>
          </p>
        </div>
      </div>
    </Layout>
  );
}
