import { Link } from "react-router-dom";

// 1. IProduct Interface: 'to' is mandatory
export interface IProduct {
    id: number;
    name: string;
    category: string;
    image: string;
    rating: number;
    price: number;
    description: string;
    to: string; // Mandatory since all items have it
}


const product: IProduct[] = [
    // IDs are unique (1 through 7)
    {
        id: 1,
        to: "/DomoinHoistanBolog",
        name: "ডোমেইন ও হোস্টিং এর মধ্যে পার্থক্য সমূহ",
        category: "ওয়েবসাইট ডিজাইন",
        image: "imgas/wev-site-imgas/1.jpg",
        rating: 3,
        price: 59.99,
        description: "ডোমেইন ও হোস্টিং এর মধ্যে পার্থক্য সম্পর্কে জানাটা একটি সফল ওয়েবসাইট তৈরির প্রথম পদক্ষেপ। বিস্তারিত পড়ুন."

    },
    {
        id: 2,
        to: "/WevDigintBolog",
        name: "ডোমেইন কি? ডোমেইন এর কাজ কি?",
        category: "ওয়েবসাইট ডিজাইন",
        image: "imgas/wev-site-imgas/2.jpg",
        rating: 3,
        price: 59.99,
        description: "ডোমেইন কি? ডোমেইন এর কাজ কি?—ইন্টারনেটের জগতে ওয়েবসাইট তৈরির জন্য ডোমেইন একটি অপরিহার্য উপাদান। বিস্তারিত পড়ুন."

    },
    {
        id: 3,
        to: "/CreateWevSiteBolog",
        name: "ওয়েবসাইট কিভাবে তৈরী করতে হয়?",
        category: "ওয়েবসাইট ডিজাইন",
        image: "imgas/wev-site-imgas/3.jpg",
        rating: 3,
        price: 59.99,
        description: "ওয়েবসাইট কিভাবে তৈরী করতে হয় এ সম্পর্কে জেনে নিন আপনার নিজের ওয়েবসাইট তৈরির পূর্বে। বিস্তারিত পড়ুন."

    },
    {
        id: 4,
        to: "/CreatewevsiteitemBolg",
        name: "ওয়েবসাইট তৈরি করতে কি কি লাগে?",
        category: "ওয়েবসাইট ডিজাইন",
        image: "imgas/wev-site-imgas/4.jpg",
        rating: 3,
        price: 59.99,
        description: "ওয়েবসাইট তৈরি করতে কি কি লাগে এ সম্পর্কে জেনে নিজের ওয়েবসাইট তৈরীর পরিকল্পনা করুন। বিস্তারিত পড়ুন."

    },
    {
        id: 5,
        to: "/DomineNameBolog",
        name: "ডোমেইন নেম রেজিস্ট্রেশন করতে হয় কেন?",
        category: "ওয়েবসাইট ডিজাইন",
        image: "imgas/wev-site-imgas/5.jpg",
        rating: 3,
        price: 59.99,
        description: "ডোমেইন নেম রেজিস্ট্রেশন করতে হয় কেন এ সম্পর্কে জেনে নিজের ব্যাবসার জন্য সঠিক সিদ্ধান্ত নিন। বিস্তারিত পড়ুন."

    },
    {
        id: 6,
        to: "/BestHostineCompineaBolog",
        name: "বাংলাদেশের সেরা হোস্টিং কোম্পানি সমূহ",
        category: "ওয়েবসাইট ডিজাইন",
        image: "imgas/wev-site-imgas/6.jpg",
        rating: 3,
        price: 59.99,
        description: "বাংলাদেশের সেরা হোস্টিং কোম্পানি গুলো সম্পর্কে জেনে আমাদের সাইটের ভালো প্রোভাইডার নির্বাচন করতে পারি। বিস্তারিত পড়ুন."

    },
    {
        id: 7,
        to: "/BoloingeSiteBolog",
        name: "ব্লগ সাইট কি? ব্লগ সাইট খোলার নিয়ম",
        category: "ওয়েবসাইট ডিজাইন",
        image: "imgas/wev-site-imgas/7.jpg",
        rating: 3,
        price: 59.99,
        description: "ব্লগ সাইট খোলার নিয়ম জেনে নিজের জন্য খুব সহজেই ব্লগ ওয়েবসাইট তৈরী করুন। বিস্তারিত পড়ুন."

    },
];



function WevdesingLiftSite() {


    return (
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 ">
            <h1 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent mb-6">ওয়েবসাইট ডিজাইন</h1>


            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 sm:gap-8 pt-4">

                {product.map((item) => (

                    <div key={item.id} className="pt-5">


                        <div className="w-full overflow-hidden shadow-md transition-shadow duration-300 hover:shadow-xl rounded-lg">

                            <Link to={item.to}>
                                <img

                                    className="cursor-pointer w-full h-auto object-cover transform transition-transform duration-500 hover:scale-[1.03] aspect-video"
                                    src={item.image}
                                    alt={`Image for ${item.name}`}
                                />
                            </Link>
                        </div>



                        <div className="pt-4 w-full">

                            <span className="text-[10px] font-bold text-[#FF4500] uppercase">{item.category}</span>

                            <Link to={item.to}>
                                {/* Ensured text uses w-full and adjusted leading for better readability */}
                                <h1 className="cursor-pointer text-xl sm:text-2xl font-bold leading-normal pt-2 pb-2 text-black hover:text-[#FF4500] transition duration-200 w-full">
                                    {item.name}
                                </h1>
                            </Link>

                            {/* Ensured text uses w-full and used leading-relaxed */}
                            <p className="text-[14px] pt-1 leading-relaxed text-gray-600 w-full">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default WevdesingLiftSite;