import Link from "next/link";
const RegisterPage = () => {
    return (
        <div className=" container flex justify-center items-center mx-auto bg-slate-100 rounded-md  p-10">
            <form>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 shadow-md">
                    <h2 className=" text-center font-bold text-xl p-5">Register your account</h2>


                    <label className="label">Name</label>
                    <input type="text" className="input" placeholder="Your Name" />
                    <label className="label">Photo URL</label>
                    <input type="text" className="input" placeholder="Your Photo URL" />
                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email" />

                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password" />
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