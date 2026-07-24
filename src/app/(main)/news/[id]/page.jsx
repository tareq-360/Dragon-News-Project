import RightSideBar from "@/components/mainSection/rightSideBar/RightSideBar";
import Image from "next/image";
import Link from "next/link";


const News = async ({ params }) => {

    const { id } = await params;
    const res = await fetch(`https://openapi.programming-hero.com/api/news/${id}`);
    const news = await res.json();
    const newsData = news.data[0];
    // console.log("News  ",newsData);
    return (
        <div className=" grid grid-cols-12 mx-auto container gap-5">
            <div className=" col-span-8">
                <div className="card bg-base-100  shadow-sm">
                    <figure>
                        <Image className=" w-full" src={newsData.image_url} width={400} height={400} alt={newsData.title}></Image>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{newsData.title}</h2>
                        <p>{newsData.details}</p>
                        <div className="card-actions justify-start">
                            <button className="btn btn-primary "><Link href={`/category/${newsData.category_id}`}>All news in this category</Link></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" col-span-4">
                <RightSideBar></RightSideBar>
            </div>
        </div>
    );
};

export default News;