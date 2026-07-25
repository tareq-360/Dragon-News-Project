'use client'
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useForm } from "react-hook-form"
import { toast, ToastContainer } from "react-toastify";
const LoginPage = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        const { email, password } = data;
        // console.log(data)
        const { data: res, error } = await authClient.signIn.email({
            /**
             * The user email
             */
            email: email,
            /**
             * The user password
             */
            password: password,
            /**
             * A URL to redirect to after the user verifies their email (optional)
             */
            callbackURL: "/",
            /**
             * remember the user session after the browser is closed. 
             * @default true
             */
            rememberMe: false
        }, {
            //callbacks
        })
        if (error) {
           
            toast.error(error.message) 
                
        }
        else {
            toast.success("success");
        }
        
    }
    return (
        <div className=" container flex justify-center items-center mx-auto bg-slate-100 p-20 rounded-md">
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 shadow-md">
                    <h2 className=" text-center font-bold text-xl p-5">Login your account</h2>


                    <label className="label">Email</label>
                    <input {...register("email", { required: "Email field is empty" })} type="email" className="input" placeholder="Email" />
                    {errors.email && <span className=" text-red-500 font-semibold">{errors.email.message}</span>}
                    <label className="label">Password</label>
                    <input {...register("password", { required: "Password field is empty" })} type="password" className="input" placeholder="Password" />
                    {errors.password && <span className=" text-red-500 font-semibold">{errors.password.message}</span>}

                    <button className="btn btn-neutral mt-4">Login</button>
                    <p>Dont’t Have An Account ? <Link href="/register"><small className=" text-red-500 font-bold"> Register</small></Link></p>
                </fieldset>
            </form>
            <ToastContainer></ToastContainer>
        </div>

    );
};

export default LoginPage;