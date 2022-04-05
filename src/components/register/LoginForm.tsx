import React, { Component, useState } from "react";
import LoginRequest from "../dto/LoginRequest";
import ApiService from "../auth/ApiService";
import APIResponse from "../auth/APIResponse";
import LoginResponse from "../dto/LoginResponse";
import cardImage from "../../static/ahihi.jpg";
import Card from "../Parcel/Card";
import { useLocation, Navigate, useNavigate } from "react-router-dom";

export default function LoginForm({
    logo,
}: {
    logo?: string,
}) {

    let request = new LoginRequest();
    const apiService = new ApiService<LoginRequest, LoginResponse>();
    let response = new APIResponse<LoginResponse>();
    const location = useLocation();
    const [{ userIdentity, password }, setCredentials] = useState({
        userIdentity: '',
        password: ''
    })

    const history = useNavigate();

    const login = async (event: React.FormEvent) => {
        event.preventDefault();
        request.password = password;
        request.userIdentity = userIdentity;
        apiService.callApi(
            request,
            "/cms/admin/users/login",
            "POST"
        ).then((res) => response = res)
        if (response.success === true) {
            history("/card");
            console.log("Login success");
        }
    }

    return (
        <main className="h-screen flex items-center justify-center bg-[#e4e5e6] box-border">
            <div className="max-w-3xl flex flex-col rounded-2xl">
                {/* Logo */}
                <div className="w-full h-20 bg-[#1f1d48] flex justify-center items-center rounded-t-lg">
                    <img className="w-32" src={logo} alt="logo"></img>
                </div>

                <form className="max-w-md bg-white p-7 box-border" onSubmit={login}>
                    <input className="input-login"
                        type="text"
                        placeholder="Tài khoản*"
                        value={userIdentity}
                        onChange={(event) => setCredentials({
                            userIdentity: event.target.value,
                            password
                        })}
                    />

                    <input className="input-login"
                        type="text"
                        placeholder="Mật khẩu*"
                        value={password}
                        onChange={(event) => setCredentials({
                            password: event.target.value,
                            userIdentity
                        })}
                    />

                    <div className="flex flex-row justify-between mt-3">
                        <div>
                            <input className="checkbox" type="checkbox" />
                            <label className="text-sm" htmlFor="">Nhớ mật khẩu</label>
                        </div>
                        <a className="hover:underline cursor-pointer" href="">Quên mật khẩu?</a>
                    </div>

                    <button className="login-button" type="submit">Đăng nhập</button>

                    <div className="flex flex-col justify-between p-4 mt-5 items-center">
                        <span className="">Bạn chưa có tài khoản</span>
                        <a className="mt-5 underline underline-offset-4 cursor-pointer text-[#292663]">Đăng ký</a>
                    </div>
                </form>
            </div>
        </main>
    );
}