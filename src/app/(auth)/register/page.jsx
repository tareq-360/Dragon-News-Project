'use client'

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form"
import { FaEye, FaEyeSlash } from "react-icons/fa";


const RegisterPage = () => {
    const [isShowPassword,setIsShowPassword]=useState(false);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const onSubmit = async (data) => {
        const { name, email, password, photo } = data;


        const { data: res, error } = await authClient.signUp.email({
            email: email,
            password: password,
            name: name,
            image: photo,
            callbackURL: "/",


        });
        console.log(res, error);
        if (error) {
            alert(error.message);
        }
        else {
            alert("SignIn Successful");
        }

    }
    return (
        <div className=" container flex justify-center items-center mx-auto bg-slate-100 rounded-md  p-10">
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset className=" relative fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 shadow-md">
                    <h2 className=" text-center font-bold text-xl p-5">Register your account</h2>


                    <label className="label">Name</label>
                    <input {...register("name", { required: "Name field is empty" })} type="text" className="input" placeholder="Your Name" />
                    {errors.name && <span className=" text-red-500 font-semibold">{errors.name.message}</span>}

                    <label className="label">Photo URL</label>
                    <input {...register("photo", { required: "photo field is empty" })} type="text" className="input" placeholder="Your Photo URL" />
                    {errors.photo && <span className=" text-red-500 font-semibold">{errors.photo.message}</span>}

                    <label className="label">Email</label>
                    <input {...register("email", { required: "Email field is empty" })} type="email" className="input" placeholder="Email" />
                    {errors.email && <span className=" text-red-500 font-semibold">{errors.email.message}</span>}

                    <label className="label">Password</label>
                    <input {...register("password", { required: "Password field is empty" })}  type={isShowPassword ?  "text": "password"} className="input" placeholder="Password" />
                    {errors.password && <span className=" text-red-500 font-semibold">{errors.password.message}</span>}
                    <span className=" absolute right-8 bottom-35" onClick={() => setIsShowPassword(!isShowPassword)}>{isShowPassword ? <FaEyeSlash size={20}></FaEyeSlash> : <FaEye size={20}></FaEye>}</span>


                    <label className="label">
                        <input type="checkbox" required className="checkbox" />
                        Accept Trams & Conditions
                    </label>
                    <button className="btn btn-neutral mt-4">Register</button>

                    <p>Do You Have An Account ? <Link href="/login"><small className=" text-red-500 font-bold"> Login</small></Link></p>

                </fieldset>
            </form>
        </div>
    );
};

export default RegisterPage;