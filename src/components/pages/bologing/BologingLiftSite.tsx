import { Link } from "react-router-dom";

// --- Corrected IProduct Interface ---
export interface IProduct {
    id: number;
    name: string;
    category: string;
    image: string;
    rating: number;
    price: number;
    description: string;
    // Added 'to' property to match the usage in the data array
    to?: string;
}


const bloging: IProduct[] = [
    {
        id: 1,
        to: "/ContentBlog",
        name: "ডিজিটাল কনটেন্ট কত প্রকার ও কি কি?",
        category: "ব্লগিং",
        image: "imgas/bloging-images/1.jpg",
        rating: 3,
        price: 59.99,
        description: "ডিজিটাল কনটেন্ট কত প্রকার ও কি কি এ সম্পর্কে জেনে ব্যবসার জন্য সঠিক ধরণের কনটেন্ট ব্যবহার করুন। বিস্তারিত পড়ুন."

    },
    {
        id: 2,
        to: "/ContentMarketing",
        name: "Content Marketing এর Strategy কয়টি ও কি কি?",
        category: "ব্লগিং",
        image: "imgas/bloging-images/2.jpg",
        rating: 3,
        price: 59.99,
        description: "Content Marketing এর Strategy কয়টি ও কি কি এ সম্পর্কে জেনে ব্যবসাকে সফল করতে পারেন। বিস্তারিত পড়ুন."

    },

    {
        id: 3,
        to: "/Contenloungouse",
        name: "কন্টেন্ট কোন ভাষায় লিখতে হয়?",
        category: "ব্লগিং",
        image: "imgas/bloging-images/3.jpg",
        rating: 3,
        price: 59.99,
        description: "কন্টেন্ট কোন ভাষায় লিখতে হয়, এটি নির্ভর করে সম্পূর্ণ পাঠক ও তাদের ভাষাগত দক্ষতার উপর। বিস্তারিত পড়ুন."

    },

    {
        id: 4,
        to: "/",
        name: "কন্টেন্ট রাইটিং শেখার উপায় সমূহ",
        category: "ব্লগিং",
        image: "imgas/bloging-images/4.jpg",
        rating: 3,
        price: 59.99,
        description: "কন্টেন্ট রাইটিং শেখার উপায় সমূহ জেনে আপনিও সহজেই কন্টেন্ট রাইটিং শিখতে পারেন। বিস্তারিত পড়ুন."

    },

    {
        id: 5,
        to: "/",
        name: "কনটেন্ট রাইটিং কি?",
        category: "ব্লগিং",
        image: "imgas/bloging-images/5.jpg",
        rating: 3,
        price: 59.99,
        description: "কনটেন্ট রাইটিং কি এ সম্পর্কে জেনে আপনার ব্যবসার প্রচারণা ও যোগাযোগের গতি পরিবর্তন করতে পারেন। বিস্তারিত পড়ুন."

    },

    {
        id: 6,
        to: "/",
        name: "কনটেন্ট টাইপ গুলো কি কি?",
        category: "ব্লগিং",
        image: "imgas/bloging-images/6.jpg",
        rating: 3,
        price: 59.99,
        description: "কনটেন্ট টাইপ গুলো কি কি এ সম্পর্কে জেনে সঠিক কনটেন্ট নির্বাচন করে মার্কেটিং প্রচারণা করুন। বিস্তারিত পড়ুন."

    },

    {
        id: 7,
        to: "/",
        name: "কন্টেন্ট রাইটিং কত প্রকার ও কি কি?",
        category: "ব্লগিং",
        image: "imgas/bloging-images/7.jpg",
        rating: 3,
        price: 59.99,
        description: "কন্টেন্ট রাইটিং কত প্রকার ও কি কি এ সম্পর্কে জেনে নিজের প্রয়োজনে সঠিক কন্টেন্ট তৈরি করুন। বিস্তারিত পড়ুনকন্টেন্ট রাইটিং কত প্রকার ও কি কি এ সম্পর্কে জেনে নিজের প্রয়োজনে সঠিক কন্টেন্ট তৈরি করুন। বিস্তারিত পড়ুন."

    },

    {
        id: 8,
        to: "/",
        name: "বাংলা আর্টিকেল লেখার নিয়ম সমূহ",
        category: "ব্লগিং",
        image: "imgas/bloging-images/8.jpg",
        rating: 3,
        price: 59.99,
        description: "বাংলা আর্টিকেল লেখার নিয়মগুলো জেনে নিজের ব্লগ সাইটের জন্য সহজেই আর্টিকেল লিখতে পারেন। বিস্তারিত পড়ুন."

    },

    {
        id: 9,
        to: "/",
        name: "নিশ কি? নিশ কেন গুরুত্বপূর্ণ?",
        category: "ব্লগিং",
        image: "imgas/bloging-images/9.jpg",
        rating: 3,
        price: 59.99,
        description: "নিশ কি? নিশ কেন গুরুত্বপূর্ণ এ সম্পর্কে জেনে ব্লগ/ব্যবসার নিশ নির্বাচন করুন। বিস্তারিত পড়ুন."

    },

    {
        id: 10,
        to: "/DomineNameBolog",
        name: "ডোমেইন নেম রেজিস্ট্রেশন করতে হয় কেন?",
        category: "ব্লগিং",
        image: "imgas/bloging-images/10.jpg",
        rating: 3,
        price: 59.99,
        description: "ডোমেইন নেম রেজিস্ট্রেশন করতে হয় কেন এ সম্পর্কে জেনে নিজের ব্যাবসার জন্য সঠিক সিদ্ধান্ত নিন। বিস্তারিত পড়ুন."

    },
]


// --- Corrected BoloingLift Component ---
function BoloingLift() {
    return (
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 ">
            <h1 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent">ব্লগিং</h1>

            {/* Correct: The grid container is outside the map */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 sm:gap-3 md:gap-6">
                {bloging.map((list) => (
                    // Correct: Each blog post is a grid item
                    <div key={list.id} className="pt-5 ">
                        <div className="w-full max-w-[320px] overflow-hidden shadow-md transition-shadow duration-300 hover:shadow-xl ">
                            <Link to={list.to || "#"}>
                                <img
                                    className="cursor-pointer w-full h-auto object-cover transform transition-transform duration-500 hover:scale-[1.03]"
                                    src={list.image}
                                    alt={list.name}
                                />
                            </Link>
                        </div>
                        <div className="pt-4">
                            <span className="text-[10px] cursor-pointer text-[#FF4500] font-bold">{list.category}</span>
                            <Link to={list.to || "#"}>
                                <h1 className="cursor-pointer text-2xl w-[300px] md:text-2xl font-bold leading-[40px] pt-2 pb-2 text-black hover:text-[#FF4500]">{list.name}</h1>
                            </Link>
                            <p className=" text-[14px] w-[300px] pt-1 leading-[26px]">{list.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BoloingLift;