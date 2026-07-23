import Marquee from "react-fast-marquee";

const news = [
    {
        "id": "bcdefa0123456789bcdefa01",
        "category_id": 2,
        "title": "Bangladesh's Export Earnings Show Strong Growth in Q1 2025",
        
        },
        
        
    {
        "id": "23456789abcdef0123456789",
        "category_id": 2,
        "title": "Central Bank Announces New Monetary Policy to Control Inflation",
        
        },
    {
        "id": "23456789abcdef01234567819",
        "category_id": 2,
        "title": "Central Bank Announces New Monetary Policy to Control Inflation",
        
        }
];

const MarqueePage = () => {
    return (
        <div className=" flex p-2 bg-slate-300 justify-between container mx-auto">
            <button className="  btn bg-pink-500 text-white">Latest</button>
            <Marquee pauseOnHover={true}>
                {news.map(n => <span key={n.id}>{n.title}<span> | </span></span>)}
            </Marquee>
        </div>
    );
};

export default MarqueePage;