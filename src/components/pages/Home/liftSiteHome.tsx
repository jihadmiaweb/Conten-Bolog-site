import React from "react";
import { Link } from "react-router-dom";

// 1. Define the data structure outside the component
const blogPosts = [
    {
        id: 1,
        to: "/ContentBlog",
        imgSrc: "imgas/Home-imgas/9.jpg",
        categories: [{ name: "ব্লগিং", link: "/ব্লগিং" }],
        title: "ডিজিটাল কনটেন্ট কত প্রকার ও কি কি?",
        excerpt: "ডিজিটাল কনটেন্ট কত প্রকার ও কি কি এ সম্পর্কে জেনে ব্যবসার জন্য সঠিক ধরণের কনটেন্ট ব্যবহার করুন। বিস্তারিত পড়ুন",
    },
    {
        id: 2,
        to: "/ContentMarketing",
        imgSrc: "imgas/Home-imgas/1.jpg",
        categories: [
            { name: "এসইও", link: "/এসইও" },
            { name: "ব্লগিং", link: "/ব্লগিং" },
        ],
        title: "Content Marketing এর Strategy কয়টি ও কি কি?",
        excerpt: "Content Marketing এর Strategy কয়টি ও কি কি এ সম্পর্কে জেনে ব্যবসাকে সফল করতে পারেন। বিস্তারিত পড়ুন",
    },
    {
        id: 3,
        to: "/SeoBolog",
        imgSrc: "imgas/Home-imgas/10.jpg",
        categories: [{ name: "এসইও", link: "/এসইও" }],
        title: "এসইও কি? SEO কেন করা হয়?",
        excerpt: "SEO কেন করা হয় এ সম্পর্কে জেনে ওয়েবসাইট কিংবা ব্লগে ট্রাফিক ও বিক্রয় বৃদ্ধি করতে পারেন। বিস্তারিত পড়ুন",
    },
    {
        id: 4,
        to: "/ফ্রিল্যান্সিং",
        imgSrc: "imgas/Home-imgas/4.jpg",
        categories: [{ name: "অনলাইন ইনকাম", link: "/অনলাইন ইনকাম" }],
        title: "ফ্রিল্যান্সিং কোন কাজের চাহিদা বেশি?",
        excerpt: "ফ্রিল্যান্সিং কোন কাজের চাহিদা বেশি এ সম্পর্কে জেনে বেশি চাহিদা সম্পুর্ণ কাজ শিখতে পারেন। বিস্তারিত পড়ুন",
    },
    {
        id: 5,
        to: "/মোবাইলদিয়েফ্রিল্যান্সিংBolog",
        imgSrc: "imgas/Home-imgas/6.jpg",
        categories: [{ name: "অনলাইন ইনকাম", link: "/অনলাইন ইনকাম" }],
        title: "মোবাইল দিয়ে ফ্রিল্যান্সিং কিভাবে শিখবো?",
        excerpt: "মোবাইল দিয়ে ফ্রিল্যান্সিং কিভাবে শিখবো এ সম্পর্কে জেনে আপনিও ফ্রিল্যান্সিং শুরু করতে পারেন। বিস্তারিত পড়ুন",
    },
    {
        id: 6,
        to: "/Businessidea",
        imgSrc: "imgas/Home-imgas/7.jpg",
        categories: [{ name: "ই-ব্যবসা", link: "/ই-ব্যবসা" }],
        title: "বাড়িতে বসে ছোট ব্যবসার আইডিয়া সমূহ",
        excerpt: "বাড়িতে বসে ছোট ব্যবসার আইডিয়াগুলো সম্পর্কে জেনে আপনিও আয়ের পথকে সুগম করতে পারেন। বিস্তারিত পড়ুন",
    },
    {
        id: 7,
        to: "/Midieamirkiten",
        imgSrc: "imgas/Home-imgas/5.jpg",
        categories: [{ name: "ডিজিটাল মার্কেটিং", link: "/ডিজিটাল মার্কেটিং" }],
        title: "সোশ্যাল মিডিয়া মার্কেটিং এর গুরুত্ব সমূহ",
        excerpt: "সোশ্যাল মিডিয়া মার্কেটিং এর গুরুত্ব অস্বীকার করার উপায় নেই কারণ এটি ব্যবসার অপরিহার্য অংশ। বিস্তারিত পড়ুন",
    },
    {
        id: 8,
        to: "/DomoinHoistanBolog",
        imgSrc: "imgas/Home-imgas/2.jpg",
        categories: [{ name: "ওয়েবসাইট ডিজাইন", link: "/ওয়েবসাইট ডিজাইন" }],
        title: "ডোমেইন ও হোস্টিং এর মধ্যে পার্থক্য সমূহ",
        excerpt: "ডোমেইন ও হোস্টিং এর মধ্যে পার্থক্য সম্পর্কে জানাটা একটি সফল ওয়েবসাইট তৈরির প্রথম পদক্ষেপ। বিস্তারিত পড়ুন",
    },
    {
        id: 9,
        to: "/MarketingBolog",
        imgSrc: "imgas/Home-imgas/3.jpg",
        categories: [
            { name: "ই-ব্যবসা", link: "/ই-ব্যবসা " },
            { name: "ডিজিটাল মার্কেটিং", link: "/ডিজিটাল মার্কেটিং" },
        ],
        title: "মার্কেট ও মার্কেটিং এর মধ্যে পার্থক্য সমূহ",
        excerpt: "মার্কেট ও মার্কেটিং এর মধ্যে পার্থক্য বোঝা ব্যবসার সফলতা অর্জনের জন্য অপরিহার্য। বিস্তারিত পড়ুন",
    },
    {
        id: 10,
        to: "/OnlinePodateBologe",
        imgSrc: "imgas/Home-imgas/8.jpg",
        categories: [{ name: "ই-ব্যবসা", link: "/ই-ব্যবসা" }],
        title: "অনলাইনে পণ্য বিক্রির কৌশল সমূহ",
        excerpt: "অনলাইনে পণ্য বিক্রির কৌশল শুধু একটি ব্যবসার জন্য নয়, বরং সাফল্যের জন্য অপরিহার্য। বিস্তারিত পড়ুন",
    },
];

// 2. Component using map function
function LiftSiteHome() {
    // Component to render categories with a separator
    const CategoryLinks = ({ categories }) => (
        <span className="text-[10px] cursor-pointer text-[#FF4500] font-bold uppercase">
            {categories.map((cats, catIndexs) => (
                <React.Fragment key={cats.link}>
                    {catIndexs > 0 && " | "}
                    <Link to={cats.link}>{cats.name}</Link>
                </React.Fragment>
            ))}
        </span>
    );

    return (
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">


            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">

                {blogPosts.map((post) => (

                    <div key={post.id} className="pt-5">


                        <div className="w-full overflow-hidden shadow-md transition-shadow duration-300 hover:shadow-xl rounded-lg">
                            <Link to={post.to}>
                                <img

                                    className="cursor-pointer w-full h-auto object-cover transform transition-transform duration-500 hover:scale-[1.03] aspect-video"
                                    src={post.imgSrc}
                                    alt={`Image for ${post.title}`}
                                />
                            </Link>
                        </div>


                        <div className="pt-4 w-full">
                            <CategoryLinks categories={post.categories} />

                            <Link to={post.to}>

                                <h1 className="cursor-pointer text-xl sm:text-2xl font-bold leading-normal pt-2 pb-2 text-black hover:text-[#FF4500] transition duration-200 w-full">
                                    {post.title}
                                </h1>
                            </Link>


                            <p className="text-[14px] pt-1 leading-relaxed text-gray-600 w-full">
                                {post.excerpt}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LiftSiteHome;