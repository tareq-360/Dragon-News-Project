import { redirect } from "next/navigation";

const MainPage = async() => {
  
  return (
    <div className=" grid grid-cols-12 gap-2 text-center mx-auto container">
      {redirect("/category/01")}

    </div>
  );
};

export default MainPage;