import Image from "next/image";
import { CiBookmark  } from "react-icons/ci";
import { IoShareSocial } from "react-icons/io5";


const Card = ({ data }) => {
    // console.log("Author Image Link ",data.author.img);
    return (
        <div key={data._id} className="card bg-base-100 shadow-sm py-3">
            <div className=" flex justify-between items-center p-5 bg-slate-100">
                <div className=" flex gap-2 ">
                    <Image className=" rounded-full" src={data.author.img} width={20} height={10} alt={data.author.name}></Image>
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
                <p>{data.total_view}</p>
            </div>
            <figure>
                <Image className=" w-full h-60" src={data.thumbnail_url} width={200} height={100} alt={data.title}></Image>
            </figure>
        </div>
    );
};

export default Card;