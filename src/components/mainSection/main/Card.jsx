import Image from "next/image";
import Link from "next/link";
import { CiBookmark } from "react-icons/ci";
import { FaEye, FaStar } from "react-icons/fa";
import { IoShareSocial } from "react-icons/io5";


const Card = ({ data }) => {
    // console.log("Author Image Link ",data.author.img);
    return (
        <div key={data._id} className="card bg-base-100 shadow-sm py-3 ">
            <div className=" flex justify-between items-center p-5 bg-slate-100">
                <div className=" flex gap-2 ">
                    <Image className=" rounded-full" src={data.author.img} width={40} height={40} alt={data.author.name}></Image>
                    <div>
                        <p className=" font-bold">{data.author.name}</p>
                        <small>{data.author.published_date}</small>
                    </div>
                </div>
                <div className=" flex gap-2">
                    <CiBookmark size={25}></CiBookmark >
                    <IoShareSocial size={25}></IoShareSocial>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">{data.title}</h2>

            </div>
            <figure>
                <Image className=" w-full h-70 p-5 rounded-md" src={data.thumbnail_url} width={300} height={300} alt={data.title}></Image>
            </figure>
            <div className=" px-5">
                <p className=" line-clamp-3">{data.details}</p>
                <button className=" text-left p-2 text-orange-400 font-bold"><Link href={`/news/${data._id}`}>Read more</Link></button>
                <hr className=""></hr>
                <div className=" flex justify-between pt-2">

                    <div className=" flex items-center gap-2">
                        <FaStar></FaStar>
                        <p>{data.rating.number}</p>
                    </div>
                    <div className=" flex gap-2 items-center">
                        <FaEye></FaEye>
                        <p>{data.total_view}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;