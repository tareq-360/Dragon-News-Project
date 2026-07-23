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

        <div className=" grid grid-cols-12 gap-2 mx-auto container">

            {/* Left section */}
            <div className=" col-span-3 shadow-md">
                <LeftSideBar mainData={mainData} isActive={id}></LeftSideBar>
            </div>
            {/* Middle Section */}
            <div className=" col-span-6 flex flex-col gap-5">
                <h2>News Section</h2>

                {news.length > 0 ? news.map(data => <Card key={data.category_id} data={data}></Card>) : <p>No News Found</p>}

            </div>
            {/* Right Section */}
            <div className="  col-span-3">
                <RightSideBar></RightSideBar>
            </div>

        </div>
    );
};

export default NewsDetails;