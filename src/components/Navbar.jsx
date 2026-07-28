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
        // <div className=" container mx-auto my-5">

        //     <div className="navbar bg-base-100 ">
        //         <div className="navbar-start">
        //             <div className="dropdown">
        //                 <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        //                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
        //                 </div>
        //                 <ul
        //                     tabIndex="-1"
        //                     className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        //                     <li><NavLink href="/">Home</NavLink></li>
        //                     <li><NavLink href="/about-us">About</NavLink></li>
        //                     <li><NavLink href="/career">Career</NavLink></li>

        //                 </ul>
        //             </div>
        //             {/* <div></div> */}
        //         </div>
        //         <div className="navbar-center hidden lg:flex">
        //             <ul className="menu menu-horizontal px-1">
        //                 <li><NavLink href="/">Home</NavLink></li>
        //                 <li><NavLink href="/about-us">About</NavLink></li>
        //                 <li><NavLink href="/career">Career</NavLink></li>
        //             </ul>
        //         </div>

        //         {isPending ? <span>Lading.....<span className="loading loading-spinner text-accent"></span>
        //         </span> : userInfo ?
        //             <div className="navbar-end gap-2">
        //                 <h2>{`Hello, ${userInfo?.name}`}</h2>
        //                 <Image className=" rounded-full w-10 h-10" src={ avater} width={30} height={30} alt="User Image"></Image>
        //                 <button onClick={async () => await authClient.signOut()} className="btn bg-gray-700 text-white">Sign Out</button>

        //             </div>
        //             :
        //             <div className="navbar-end gap-2">
        //                 <h2>{` Hello, ${userInfo?.name || ""}`}</h2>
        //                 <Image className=" rounded-full w-10 h-10" src={ avater} width={30} height={30} alt="User Image"></Image>
        //                 <Link href="/login" className="btn bg-gray-700 text-white">Login</Link>

        //             </div>
        //         }
        //     </div>
        // </div>

        <div className="container mx-auto my-5 px-2 sm:px-4">
            <div className="navbar bg-base-100 min-h-[4rem]">

                {/* Left Side: Mobile Menu Button */}
                <div className="navbar-start w-auto lg:w-1/2">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[50] mt-3 w-52 p-2 shadow-lg border border-gray-100"
                        >
                            <li><NavLink href="/">Home</NavLink></li>
                            <li><NavLink href="/about-us">About</NavLink></li>
                            <li><NavLink href="/career">Career</NavLink></li>
                        </ul>
                    </div>
                </div>

                {/* Middle Section: Desktop Menu */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-medium gap-2">
                        <li><NavLink href="/">Home</NavLink></li>
                        <li><NavLink href="/about-us">About</NavLink></li>
                        <li><NavLink href="/career">Career</NavLink></li>
                    </ul>
                </div>

                {/* Right Side: Auth / Profile Section */}
                <div className="navbar-end flex-1 justify-end gap-2 sm:gap-3">
                    {isPending ? (
                        <div className="flex items-center gap-2">
                            <span className="text-sm hidden sm:inline">Loading...</span>
                            <span className="loading loading-spinner loading-md text-accent"></span>
                        </div>
                    ) : userInfo ? (
                        <div className="flex items-center gap-2 sm:gap-3">
                            {/* Truncated single-line greeting */}
                            <h2 className="text-sm font-medium whitespace-nowrap max-w-[100px] xs:max-w-[140px] sm:max-w-[200px] truncate">
                                Hello, {userInfo?.name}
                            </h2>
                            <Image
                                className="rounded-full shrink-0 w-8 h-8 sm:w-10 sm:h-10 object-cover border border-gray-200"
                                src={avater}
                                width={40}
                                height={40}
                                alt="User Image"
                            />
                            <button
                                onClick={async () => await authClient.signOut()}
                                className="btn btn-sm sm:btn-md bg-gray-800 hover:bg-gray-900 text-white border-none shrink-0"
                            >
                                Sign Out
                            </button>
                        </div>
                    ) : (
                        <div className="flex items-center gap-2 sm:gap-3">
                            {userInfo?.name && (
                                <h2 className="text-sm font-medium whitespace-nowrap max-w-[100px] xs:max-w-[140px] sm:max-w-[200px] truncate">
                                    Hello, {userInfo?.name}
                                </h2>
                            )}
                            <Image
                                className="rounded-full shrink-0 w-8 h-8 sm:w-10 sm:h-10 object-cover border border-gray-200"
                                src={avater}
                                width={40}
                                height={40}
                                alt="User Image"
                            />
                            <Link
                                href="/login"
                                className="btn btn-sm sm:btn-md bg-gray-800 hover:bg-gray-900 text-white border-none shrink-0"
                            >
                                Login
                            </Link>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default Navbar;