// import { Ebusiness } from "@/components/data/data";
// import EBusinessItem from "@/components/pages/EBusiness/EBusinessItem";

import { Link } from "react-router-dom";

// function EBusinessLift() {
//     return (
//         <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 ">
//             <h1 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent">ই-ব্যবসা</h1>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 sm:gap-3  md:gap-6">
//                 {Ebusiness.map((item) => (
//                     <EBusinessItem key={item.id} item={item} />
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default EBusinessLift;





export interface IProduct {
    id: number;
    name: string;
    category: string;
    image: string;
    rating: number;
    price: number;
    description: string;
    to?: string;


}


const Ebusiness: IProduct[] = [


    {
        id: 1,
        to: "/Businessidea",
        name: "বাড়িতে বসে ছোট ব্যবসার আইডিয়া সমূহ",
        category: "ই-ব্যবসা",
        image: "imgas/E-business-imgass/1.jpg",
        rating: 3,
        price: 59.99,
        description: "বাড়িতে বসে ছোট ব্যবসার আইডিয়াগুলো সম্পর্কে জেনে আপনিও আয়ের পথকে সুগম করতে পারেন। বিস্তারিত পড়ুন."

    },
    {
        id: 1,
        to: "/",
        name: "মার্কেট ও মার্কেটিং এর মধ্যে পার্থক্য সমূহ",
        category: "ই-ব্যবসা",
        image: "imgas/E-business-imgass/2.jpg",
        rating: 3,
        price: 59.99,
        description: "মার্কেট ও মার্কেটিং এর মধ্যে পার্থক্য বোঝা ব্যবসার সফলতা অর্জনের জন্য অপরিহার্য। বিস্তারিত পড়ুন."

    },
    {
        id: 1,
        to: "/",
        name: "অনলাইনে পণ্য বিক্রির কৌশল সমূহ",
        category: "ই-ব্যবসা",
        image: "imgas/E-business-imgass/3.jpg",
        rating: 3,
        price: 59.99,
        description: "অনলাইনে পণ্য বিক্রির কৌশল শুধু একটি ব্যবসার জন্য নয়, বরং সাফল্যের জন্য অপরিহার্য। বিস্তারিত পড়ুন."

    },
    {
        id: 1,
        to: "/",
        name: "মার্কেটিং ও সেলস এর পার্থক্য সমূহ",
        category: "ই-ব্যবসা",
        image: "imgas/E-business-imgass/4.jpg",
        rating: 3,
        price: 59.99,
        description: "মার্কেটিং ও সেলস এর পার্থক্য বোঝা ব্যবসায়ীর জন্য গুরুত্বপূর্ণ কারণ একটি অপরটির পরিপূরক। বিস্তারিত পড়ুন."

    },
    {
        id: 1,
        to: "/",
        name: "সেলস বৃদ্ধির কৌশল সমূহ",
        category: "ই-ব্যবসা",
        image: "imgas/E-business-imgass/5.jpg",
        rating: 3,
        price: 59.99,
        description: "সেলস বৃদ্ধির কৌশল সমূহ সম্পর্কে জেনে বিক্রয় কৌশল বাস্তবায়ন করে ব্যবসার আয় বৃদ্ধি করতে পারেন। বিস্তারিত পড়ুন."

    },
    {
        id: 1,
        to: "/",
        name: "সেলস কত প্রকার ও কি কি?",
        category: "ই-ব্যবসা",
        image: "imgas/E-business-imgass/6.jpg",
        rating: 3,
        price: 59.99,
        description: "সেলস কত প্রকার ও কি কি এ বিষয়ে জেনে ব্যবসায়ের সেলস কৌশলকে আরও কার্যকরীভাবে পরিকল্পনা করুন। বিস্তারিত পড়ুন.."

    },

    {
        id: 1,
        to: "/",
        name: "অনলাইন ব্যবসা করার নিয়ম সমূহ",
        category: "ই-ব্যবসা",
        image: "imgas/E-business-imgass/7.jpg",
        rating: 3,
        price: 59.99,
        description: "অনলাইন ব্যবসা করার নিয়ম জেনে সঠিক পরিকল্পনা ও কৌশল অনুসরণ করে ব্যবসা সফল করতে পারেন। বিস্তারিত পড়ুন."

    },
    {
        id: 1,
        to: "/",
        name: "প্রোডাক্ট ডেসক্রিপশন লেখার নিয়ম সমূহ",
        category: "ই-ব্যবসা",
        image: "imgas/E-business-imgass/8.jpg",
        rating: 3,
        price: 59.99,
        description: "প্রোডাক্ট ডেসক্রিপশন লেখার নিয়মগুলো শুধু তথ্য উপস্থাপন মাধ্যম নয় বরং এটি পণ্য বিক্রির সেরা হাতিয়ার। বিস্তারিত পড়ুন."

    },
    {
        id: 1,
        to: "/",
        name: "বাংলাদেশের ই-কমার্স সাইট সমূহ",
        category: "ই-ব্যবসা",
        image: "imgas/E-business-imgass/10.jpg",
        rating: 3,
        price: 59.99,
        description: "বাংলাদেশের ই-কমার্স সাইট আমাদের ক্রয়-বিক্রয়ের অভিজ্ঞতাকে নতুন দিগন্তে নিয়ে গেছে। বিস্তারিত পড়ুন."

    },
    {
        id: 1,
        to: "/",
        name: "বাংলাদেশে ই-কমার্সের গুরুত্ব সমূহ",
        category: "ই-ব্যবসা",
        image: "imgas/E-business-imgass/7.jpg",
        rating: 3,
        price: 59.99,
        description: "বাংলাদেশে ই-কমার্সের গুরুত্ব কেবল ব্যবসার ক্ষেত্রেই নয়, বরং দেশের অর্থনীতির দিগন্ত খুলে দিয়েছে। বিস্তারিত পড়ুন."

    },
]




function EBusinessLift() {
    return (
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 ">
            <h1 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent">ব্লগিং</h1>

            {/* Correct: The grid container is outside the map */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 sm:gap-3 md:gap-6">
                {Ebusiness.map((lists) => (
                    // Correct: Each blog post is a grid item
                    <div key={lists.id} className="pt-5 ">
                        <div className="w-full max-w-[320px] overflow-hidden shadow-md transition-shadow duration-300 hover:shadow-xl ">
                            <Link to={lists.to || "#"}>
                                <img
                                    className="cursor-pointer w-full h-auto object-cover transform transition-transform duration-500 hover:scale-[1.03]"
                                    src={lists.image}
                                    alt={lists.name}
                                />
                            </Link>
                        </div>
                        <div className="pt-4">
                            <span className="text-[10px] cursor-pointer text-[#FF4500] font-bold">{lists.category}</span>
                            <Link to={lists.to || "#"}>
                                <h1 className="cursor-pointer text-2xl w-[300px] md:text-2xl font-bold leading-[40px] pt-2 pb-2 text-black hover:text-[#FF4500]">{lists.name}</h1>
                            </Link>
                            <p className=" text-[14px] w-[300px] pt-1 leading-[26px]">{lists.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default EBusinessLift;