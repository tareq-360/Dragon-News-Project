import LeftSideBar from "@/components/mainSection/leftSideBar/LeftSideBar";
import RightSideBar from "@/components/mainSection/rightSideBar/RightSideBar";

const MainPage = async() => {
  const res= await fetch("https://openapi.programming-hero.com/api/news/categories");
  const data=await res.json();
  const mainData=data.data.news_category;
  // console.log(mainData);
  return (
    <div className=" grid grid-cols-12 gap-2 text-center mx-auto container">
      {/* Left section */}
        <div className=" col-span-3 shadow-md">
            <LeftSideBar mainData={mainData} isActive={"01"}></LeftSideBar>
        </div>
        {/* Middle Section */}
        <div className=" bg-pink-200 col-span-6">
          <h2>News Section</h2>
        </div>
        {/* Right Section */}
        <div className="  col-span-3">
          <RightSideBar></RightSideBar>
        </div>

    </div>
  );
};

export default MainPage;