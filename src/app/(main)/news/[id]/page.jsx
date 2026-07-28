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
        // <div className=" grid grid-cols-12 mx-auto container gap-5">
        //     <div className=" col-span-8">
        //         <div className="card bg-base-100  shadow-sm">
        //             <figure>
        //                 <Image className=" w-full" src={newsData.image_url} width={400} height={400} alt={newsData.title}></Image>
        //             </figure>
        //             <div className="card-body">
        //                 <h2 className="card-title">{newsData.title}</h2>
        //                 <p>{newsData.details}</p>
        //                 <div className="card-actions justify-start">
        //                     <button className="btn btn-primary "><Link href={`/category/${newsData.category_id}`}>All news in this category</Link></button>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     <div className=" col-span-4">
        //         <RightSideBar></RightSideBar>
        //     </div>
        // </div>


        <div className="container mx-auto grid grid-cols-1 gap-6 px-4 lg:grid-cols-12">
            {/* News Details Card Section */}
            <div className="col-span-1 lg:col-span-8">
                <div className="card bg-base-100 shadow-md border border-gray-100 rounded-lg overflow-hidden">
                    <figure className="relative w-full h-[250px] sm:h-[350px] md:h-[450px]">
                        <Image
                            className="object-cover"
                            src={newsData.image_url}
                            fill
                            priority
                            alt={newsData.title}
                        />
                    </figure>
                    <div className="card-body p-4 sm:p-6 md:p-8">
                        <h2 className="card-title text-xl sm:text-2xl md:text-3xl font-bold leading-tight text-gray-900">
                            {newsData.title}
                        </h2>
                        <p className="text-gray-700 leading-relaxed my-4 text-sm sm:text-base">
                            {newsData.details}
                        </p>
                        <div className="card-actions justify-start mt-4">
                            <Link
                                href={`/category/${newsData.category_id}`}
                                className="btn btn-primary bg-pink-600 hover:bg-pink-700 border-none text-white px-5"
                            >
                                All news in this category
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Sidebar Section */}
            <div className="col-span-1 lg:col-span-4">
                <RightSideBar />
            </div>
        </div>
    );
};

export default News;