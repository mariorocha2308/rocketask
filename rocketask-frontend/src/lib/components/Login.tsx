"use client";

import React, { useRef, useState } from "react";
import { useRouter } from 'next/navigation'
import { useDispatch } from "react-redux";
import { setCookie } from 'cookies-next';
import * as API from "../HttpClient";
import { session } from "../redux/slices/user.slice";

const Login = () => {
	const dispatch = useDispatch()
	const router = useRouter()
	const [header, setHeader] = useState({
		title: 'Please enter your credentials to continue.',
		status: 'OK'
	})
	const loginForm = useRef<{ user: string; password: string }>({
		user: "",
		password: "",
	});

	const handleSubmitAuth = async (e) => {
		e.preventDefault();

		const res = await API.post('users/auth', loginForm.current)
		if (res?.msg) {
			setHeader({title: res.msg, status: 'ERROR'})
			setTimeout(() => {
				setHeader({
					title: 'Please enter your credentials to continue.',
					status: 'OK'
				})
				return;
			},3000)
			return;
		};

		dispatch(session(res))
		setCookie("session", res)
		router.push('/dashboard')
	};

	const eventInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		loginForm.current[e.target.name] = e.target.value;
	};

	return (
		<section>
			<div className="shadow-md p-8 rounded-lg text-center mt-10">
				<header>
					<h2 className="text-2xl font-semibold">Login</h2>
					<p className={`mt-2 text-sm font-medium ${header.status === 'OK' ? 'text-gray-500' : 'text-red-500'}`}>
						{header.title}
					</p>
				</header>
				<form className="flex gap-2 flex-col pt-7" onSubmit={handleSubmitAuth}>
					<div className="flex flex-col text-start gap-2">
						<span className="font-medium text-sm">Username</span>
						<input
							type="text"
							className="py-2 px-2 bg-gray-100 rounded-sm w-100"
							placeholder="admin"
							name="user"
							onChange={eventInput}
						/>
					</div>
					<div className="flex flex-col text-start gap-2">
						<span className="font-medium text-sm">Password</span>
						<input
							type="password"
							className="py-2 px-2 bg-gray-100 rounded-sm w-100"
							placeholder="1234"
							name="password"
							onChange={eventInput}
						/>
					</div>
					<button className="bg-green-300 py-3 rounded-sm cursor-pointer font-medium mt-5">
						Login
					</button>
				</form>
			</div>
		</section>
	);
};

export default Login;
