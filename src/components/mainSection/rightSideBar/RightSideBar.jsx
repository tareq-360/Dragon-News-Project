'use client'
import { authClient } from "@/lib/auth-client";
import { FaGoogle, FaGithub } from "react-icons/fa";

const handleGoogleSignin = async () => {
    const data = await authClient.signIn.social({
        provider: "google",
    });
    console.log("User Data ", data);
}
const handleGithubSignin = async () => {
    const data = await authClient.signIn.social({
        provider: "github"
    })
    console.log("User Data ", data);

}
const RightSideBar = () => {
    return (
        <div>
            <h2 className=" font-bold text-xl ">Login With</h2>
            <div className=" flex flex-col gap-2">
                <button onClick={handleGoogleSignin} className=" btn btn-outline text-blue-700">
                    <FaGoogle></FaGoogle>
                    Login with google
                </button>
                <button onClick={handleGithubSignin} className=" btn btn-outline">
                    <FaGithub></FaGithub>
                    Login with github
                </button>
            </div>
        </div>
    );
};

export default RightSideBar;