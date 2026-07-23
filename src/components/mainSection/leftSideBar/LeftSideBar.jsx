import Link from "next/link";

const LeftSideBar = ({mainData , isActive}) => {
    return (
        <div>
            <h2 className=" font-bold text-xl">All categories </h2>
            <ul className=" flex flex-col gap-2">
                {mainData.map(data => <li key={data.category_id} className={`${isActive===data.category_id  && " bg-slate-500"} " bg-slate-100 rounded-md m-2"`}>
                    <Link href={`/category/${data.category_id}`} className=" block">{data.category_name}</Link>
                </li>)}
            </ul>
        </div>
    );
};

export default LeftSideBar;