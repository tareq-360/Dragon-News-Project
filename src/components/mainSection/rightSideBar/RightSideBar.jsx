import { FaGoogle,FaGithub } from "react-icons/fa";

const RightSideBar = () => {
    return (
        <div>
            <h2 className=" font-bold text-xl ">Login With</h2>
            <div className=" flex flex-col gap-2">
                <button className=" btn btn-outline text-blue-700">
                    <FaGoogle></FaGoogle>
                    Login with google
                </button>
                <button className=" btn btn-outline">
                    <FaGithub></FaGithub>
                    Login with github
                </button>
            </div>
        </div>
    );
};

export default RightSideBar;