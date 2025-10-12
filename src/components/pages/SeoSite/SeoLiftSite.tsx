





import { Link } from "react-router-dom";

// 1. FIX: Add 'to' to the IProduct interface (optional property for better flexibility)
export interface IProduct {
    id: number;
    name: string;
    category: string;
    image: string;
    rating: number;
    price: number;
    description: string;
    to?: string; // Added 'to' property for routing
}

const bolog: IProduct[] = [
    {
        id: 1,
        to: "/ContentMarketing",
        name: "Content Marketing এর Strategy কয়টি ও কি কি?",
        category: "এসইও",
        image: "imgas/sou-imgas/1.jpg",
        rating: 3,
        price: 59.99,
        description: "Content Marketing এর Strategy কয়টি ও কি কি এ সম্পর্কে জেনে ব্যবসাকে সফল করতে পারেন। বিস্তারিত পড়ুন."
    },
    {
        id: 2,
        // Added 'to' to all items for consistent structure
        to: "/SeoBolog",
        name: "এসইও কি? SEO কেন করা হয়?",
        category: "এসইও",
        image: "imgas/sou-imgas/2.jpg",
        rating: 3,
        price: 59.99,
        description: "SEO কেন করা হয় এ সম্পর্কে জেনে ওয়েবসাইট কিংবা ব্লগে ট্রাফিক ও বিক্রয় বৃদ্ধি করতে পারেন। বিস্তারিত পড়ুন."
    },
    {
        id: 3,
        to: "/SeoWorkingBolog",
        name: "SEO এর কাজ শেখার উপায় সমূহ",
        category: "এসইও",
        image: "imgas/sou-imgas/3.jpg",
        rating: 3,
        price: 59.99,
        description: "SEO এর কাজ শেখার উপায় সমূহ জেনে আপনিও সহজেই এসইও মার্কেটিং শিখে ফেলতে পারেন। বিস্তারিত পড়ুন."
    },
    {
        id: 4,
        to: "/KeywordRicercBolog",
        name: "কিওয়ার্ড রিসার্চ কি?",
        category: "এসইও",
        image: "imgas/sou-imgas/4.jpg",
        rating: 3,
        price: 59.99,
        description: "কিওয়ার্ড রিসার্চ কি? এটি SEO এর একটি অতি গুরুত্বপূর্ণ দিক যা সঠিক কন্টেন্ট তৈরিতে সহায়ক। বিস্তারিত পড়ুন."
    },
    {
        id: 5,
        to: "/LokilSeoBolog",
        name: "লোকাল এসইও কি? লোকাল এসইও কেন গুরুত্বপূর্ণ?",
        category: "এসইও",
        image: "imgas/sou-imgas/5.jpg",
        rating: 3,
        price: 59.99,
        description: "লোকাল এসইও কি? লোকাল এসইও কেন গুরুত্বপূর্ণ?” এ সম্পর্কে জানুন স্থানীয় ব্যবসা শুরু করার আগে। বিস্তারিত পড়ুন."
    },
    {
        id: 6,
        to: "/SchemaBolog",
        name: "এসইওতে স্কিমা ব্যবহার করা হয় কেন?",
        category: "এসইও",
        image: "imgas/sou-imgas/6.jpg",
        rating: 3,
        price: 59.99,
        description: "এসইওতে স্কিমা ব্যবহার করা হয় কেন এ সম্পর্কে জানলে আপনার সাইটের সার্চ ইঞ্জিন র‍্যাঙ্কিং উন্নত হবে। বিস্তারিত পড়ুন."
    },
    {
        id: 7,
        to: "/DomienAtourteBolog",
        name: "কিভাবে ডোমেইন অথরিটি বাড়ানো যায়?",
        category: "এসইও",
        image: "imgas/sou-imgas/8.jpg",
        rating: 3,
        price: 59.99,
        description: "কিভাবে ডোমেইন অথরিটি বাড়ানো যায় এ সম্পর্কে জেনে নিজের ওয়েবসাইটের ব্যাপারে সিদ্ধান্ত নিন। বিস্তারিত পড়ুন."
    },
    {
        id: 8,
        to: "/WevSiteLoding",
        name: "ওয়েবসাইটের লোডিং স্পিড কেন গুরুত্বপূর্ণ?",
        category: "এসইও",
        image: "imgas/sou-imgas/7.jpg",
        rating: 3,
        price: 59.99,
        description: "ওয়েবসাইটের লোডিং স্পিড কেন গুরুত্বপূর্ণ এ সম্পর্কে জেনে নিজের সাইট সম্পর্কে সচেতন হন। বিস্তারিত পড়ুন."
    },
    {
        id: 9,
        to: "/HidenTagBolog",
        name: "হেডিং ট্যাগ কি? হেডিং ট্যাগ কয়টি ও কি কি?",
        category: "এসইও",
        image: "imgas/sou-imgas/9.jpg",
        rating: 3,
        price: 59.99,
        description: "হেডিং ট্যাগ কি? হেডিং ট্যাগ কয়টি ও কি কি? এ সম্পর্কে জেনে নিজের সাইটের ব্যাপারে সিদ্ধান্ত নিন। বিস্তারিত পড়ুন."
    },
    {
        id: 10,
        to: "/SeoImasBolog",
        name: "ইমেজ এসইও কি? ইমেজ এসইও কেন গুরুত্বপূর্ণ?",
        category: "এসইও",
        image: "imgas/sou-imgas/10.jpg",
        rating: 3,
        price: 59.99,
        description: "ইমেজ এসইও কি? ইমেজ এসইও কেন গুরুত্বপূর্ণ? এ সম্পর্কে জেনে নিজের সাইটের ব্যাপারে সিদ্ধান্ত নিন। বিস্তারিত পড়ুন."
    },
]

function SeoLiftSite() {
    return (
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 ">
            <h1 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent mb-6">এসইও</h1>

            {/*
                GRID LAYOUT:
                Mobile (default): 1 Column
                sm (640px+): 2 Columns
                md (768px+): 3 Columns (Added for better desktop layout)
            */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
                {bolog.map((ite) => (

                    <div key={ite.id} className="pt-5 ">
                        <Link to={ite.to || "#"} className="block"> {/* Added block for full link area */}
                            <div className="w-full overflow-hidden shadow-md transition-shadow duration-300 hover:shadow-xl rounded-lg"> {/* Removed fixed width, using w-full */}

                                <img
                                    className="cursor-pointer w-full h-auto object-cover transform transition-transform duration-500 hover:scale-[1.03] aspect-video"
                                    src={ite.image}
                                    alt={ite.name}
                                /> {/* Added aspect-video for consistent image height */}
                            </div>
                        </Link>
                        <div className="pt-4">

                            <span className="text-[10px] cursor-pointer text-[#FF4500] font-bold uppercase">{ite.category}</span>
                            <Link to={ite.to || "#"}>

                                {/* Adjusted title width to w-full and made text size more flexible */}
                                <h1 className="cursor-pointer text-xl sm:text-2xl font-bold leading-normal pt-2 pb-2 text-black hover:text-[#FF4500]">{ite.name}</h1>
                            </Link>
                            {/* Adjusted paragraph width to w-full */}
                            <p className="text-[14px] w-full pt-1 leading-relaxed">{ite.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SeoLiftSite;