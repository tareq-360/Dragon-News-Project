import LeftSideBar from "@/components/mainSection/leftSideBar/LeftSideBar";
import Card from "@/components/mainSection/main/Card";
import RightSideBar from "@/components/mainSection/rightSideBar/RightSideBar";

const getNewsById = async (category_id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`);
    const data = res.json();
    return data;
}


const NewsDetails = async ({ params }) => {
    const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
    const data = await res.json();
    const mainData = data.data.news_category;
    // console.log(mainData);

    const { id } = await params;
    const categoryData = await getNewsById(id);
    const news = categoryData.data;
    return (

        // <div className=" grid grid-cols-12 gap-2 mx-auto container">

        //     {/* Left section */}
        //     <div className=" col-span-3 shadow-md">
        //         <LeftSideBar mainData={mainData} isActive={id}></LeftSideBar>
        //     </div>
        //     {/* Middle Section */}
        //     <div className=" col-span-6 flex flex-col gap-5">
        //         <h2 className=" font-bold text-xl">Todays News</h2>

        //         {news.length > 0 ? news.map(data => <Card key={data.category_id} data={data}></Card>) : <p>No News Found</p>}

        //     </div>
        //     {/* Right Section */}
        //     <div className="  col-span-3">
        //         <RightSideBar></RightSideBar>
        //     </div>

        // </div>

        <div className="container mx-auto grid grid-cols-1 gap-6 px-4 md:grid-cols-12">

            {/* Left Sidebar - Order 2 on Mobile/Tablet, Order 1 on Desktop */}
            <div className="order-2 col-span-12 shadow-md md:col-span-4 lg:order-1 lg:col-span-3">
                <LeftSideBar mainData={mainData} isActive={id} />
            </div>

            {/* Middle Content Section - Order 1 on Mobile/Tablet, Order 2 on Desktop */}
            <div className="order-1 col-span-12 flex flex-col gap-5 md:col-span-8 lg:order-2 lg:col-span-6">
                <h2 className="text-xl font-bold">Todays News</h2>

                {news.length > 0 ? (
                    news.map(data => <Card key={data._id || data.category_id} data={data} />)
                ) : (
                    <p className="text-gray-500">No News Found</p>
                )}
            </div>

            {/* Right Sidebar - Order 3 Always */}
            <div className="order-3 col-span-12 md:col-span-12 lg:col-span-3">
                <RightSideBar />
            </div>

        </div>
    );
};

export default NewsDetails;