'use client'
import Image from "next/image";
import Link from "next/link";
import avater from "@/assets/user.png";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";


const Navbar = () => {
    const { data: session, isPending } = authClient.useSession()
    // console.log("Session Data ", session?.user);
    const userInfo = session?.user;
    // console.log("user info ", userInfo);
    // console.log("Photo ",userInfo?.image)

    return (
        <div className=" container mx-auto my-5">

            <div className="navbar bg-base-100 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><NavLink href="/">Home</NavLink></li>
                            <li><NavLink href="/about-us">About</NavLink></li>
                            <li><NavLink href="/career">Career</NavLink></li>

                        </ul>
                    </div>
                    {/* <div></div> */}
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink href="/">Home</NavLink></li>
                        <li><NavLink href="/about-us">About</NavLink></li>
                        <li><NavLink href="/career">Career</NavLink></li>
                    </ul>
                </div>

                {isPending ? <span>Lading.....<span className="loading loading-spinner text-accent"></span>
                </span> : userInfo ?
                    <div className="navbar-end gap-2">
                        <h2>{`Hello, ${userInfo?.name}`}</h2>
                        <Image className=" rounded-full w-10 h-10" src={ avater} width={30} height={30} alt="User Image"></Image>
                        <button onClick={async () => await authClient.signOut()} className="btn bg-gray-700 text-white">Sign Out</button>

                    </div>
                    :
                    <div className="navbar-end gap-2">
                        <h2>{` Hello, ${userInfo?.name || ""}`}</h2>
                        <Image className=" rounded-full w-10 h-10" src={ avater} width={30} height={30} alt="User Image"></Image>
                        <Link href="/login" className="btn bg-gray-700 text-white">Login</Link>

                    </div>
                }
            </div>
        </div>
    );
};

export default Navbar;