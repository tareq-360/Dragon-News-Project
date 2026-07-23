import { format, compareAsc } from "date-fns";
import Image from "next/image";
import logo from "@/assets/logo.png";
const Header = () => {
    return (
        <div className=" text-center space-y-3 my-5">
            <Image src={logo} width={300} height={200} alt="logo" className=" mx-auto"></Image>
            <p>Journalism Without Fear or Favour</p>
            <p>{format(new Date(), "EEEE MMMM dd , yyyy")}</p>
        </div>
    );
};

export default Header;