

import Sidebar from "@/components/pages/Home/rightSiteHome";
import { useState } from "react";

import { Link } from "react-router-dom";

function CreateWevSiteBolog() {
    // 1. Initialize state for the comment form
    const [commentData, setCommentData] = useState({
        name: "",
        email: "",
        website: "",
        comment: "",
        saveInfo: false,
    });

    // 2. Handle input changes and update state
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setCommentData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    // 3. Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation check
        if (!commentData.name || !commentData.email || !commentData.comment) {
            alert("অনুগ্রহ করে নাম, ইমেল এবং মন্তব্য দিন।"); // Please provide name, email, and comment.
            return;
        }

        console.log("Comment Submitted:", commentData);
        alert("আপনার মন্তব্য সফলভাবে জমা দেওয়া হয়েছে! (দেখার জন্য Console চেক করুন)");

        // Reset the form data (optional)
        setCommentData({
            name: "",
            email: "",
            website: "",
            comment: "",
            saveInfo: commentData.saveInfo, // Keep saveInfo state if desired
        });
    };

    return (
        <div className="w-full pt-20  mx-auto  sm:px-6 md:px-12 grid grid-cols-1 md:grid-cols-[3fr_1fr]  gap-8 lg:gap-20">
            <div className="bg-white min-h-screen w-full text-gray-800 font-sans">

                {/* হেডার ইমেজ এবং নেভিগেশন ব্রেডক্রাম্ব */}
                <header className="w-full pb-4 shadow-md bg-gray-50">

                    {/* ইমেজ কন্টেইনার */}
                    <div className="p-4 sm:p-6 lg:p-8">
                        <img
                            className="
                            w-full 
                            h-48 sm:h-64 md:h-80 lg:h-96 
                            rounded-xl 
                            object-cover 
                            cursor-pointer
                            transition-all 
                            duration-500 
                            transform 
                            shadow-xl 
                            hover:shadow-2xl
                            hover:scale-[1.02]
                        "
                            src="imgas/wev-site-imgas/3.jpg"
                            alt="SEO, Search Engine Optimization"
                        />
                    </div>

                    {/* ব্রেডক্রাম্ব নেভিগেশন */}
                    <span className="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-widest px-4 sm:px-6 lg:px-8">
                        <Link to="/" className="text-blue-600 font-bold hover:text-blue-800 transition duration-300">
                            হোম
                        </Link>
                        <span className="mx-2">/</span>
                        <Link to="/ওয়েবসাইট ডিজাইন" className="text-blue-600 hover:text-blue-800 transition duration-300 font-semibold">
                            ওয়েবসাইট ডিজাইন
                        </Link>
                    </span>
                </header>

                {/* মূল কনটেন্ট এরিয়া */}
                <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
                    <article className="bg-white p-6 sm:p-10 rounded-3xl shadow-2xl">

                        {/* শিরোনাম */}
                        <h1 className="text-3xl sm:text-5xl font-extrabold text-blue-700 mb-6 border-b-4 border-blue-100 pb-4 leading-tight">
                            ওয়েবসাইট কিভাবে তৈরী করতে হয়?
                        </h1>

                        {/* ভূমিকা */}
                        <p className="leading-relaxed text-gray-600 mb-8 text-base pb-4 sm:text-lg">
                            ওয়েবসাইট কিভাবে তৈরী করতে হয় এ সম্পর্কে জেনে আপনিও খুব সহজেই যে কোন ধরণের একটি ওয়েবসাইট তৈরী করতে পারেন। বর্তমান ডিজিটাল যুগে ওয়েবসাইট একটি অপরিহার্য উপাদান হয়ে দাঁড়িয়েছে। প্রতিদিন আমরা যে সমস্ত তথ্য ও সেবা অনলাইনে গ্রহণ করি, তার বেশিরভাগই ওয়েবসাইটের মাধ্যমে হয়। ব্যক্তিগত ব্লগ থেকে শুরু করে আন্তর্জাতিক ব্যবসায়িক সাইট, ই-কমার্স স্টোর থেকে সংবাদ সাইট পর্যন্ত, সবকিছুই একটি সঠিকভাবে ডিজাইন করা ওয়েবসাইটের মাধ্যমে পরিচালিত হয়। কিন্তু অনেকেই ভাবেন, ওয়েবসাইট তৈরি করা কি এতটাই সহজ? না, বাস্তবে এটি একটি বেশ জটিল প্রক্রিয়া হতে পারে। তবে সঠিক পরিকল্পনা ও জ্ঞান থাকলে এটি খুবই সম্ভব। এই ব্লগ পোস্টে, আমি ওয়েবসাইট কি এবং ওয়েবসাইট কিভাবে তৈরী করতে হয় তা বিস্তারিতভাবে আলোচনা করব।</p>

                        <h1 className="text-3xl sm:text-4xl md:text-4xl  font-extrabold mb-6 border-b-4 border-blue-100 pb-4 leading-tight">
                            ওয়েবসাইট কি?
                        </h1>

                        <p className="leading-relaxed text-gray-600 mb-6 text-base sm:text-lg">
                            ওয়েবসাইট হলো ইন্টারনেটে উপলব্ধ একটি বা একাধিক ওয়েব পেজের সমষ্টি যা একটি নির্দিষ্ট ঠিকানায় অ্যাক্সেস করা যায়। প্রতিটি ওয়েবসাইটের একটি ইউনিক ডোমেইন নাম থাকে, যেমন example.com। একটি ওয়েবসাইটে সাধারণত বিভিন্ন উপাদান থাকে যেমন লেখা, ছবি, ভিডিও, লিঙ্ক, এবং অন্যান্য মাল্টিমিডিয়া ফাইল। ওয়েবসাইটের মূল উদ্দেশ্য হলো ব্যবহারকারীদের নির্দিষ্ট তথ্য প্রদান করা অথবা অনলাইনে সেবা ও পণ্য বিক্রি করা। একটি ওয়েবসাইট তার কন্টেন্ট এবং ডিজাইনের মাধ্যমে ব্যবহারকারীদের সঙ্গে যোগাযোগ করে এবং তাদের চাহিদা পূরণের চেষ্টা করে।
                        </p>
                        <span className="leading-relaxed text-gray-600 mb-8 text-base sm:text-lg">
                            ওয়েবসাইটের প্রকারভেদও রয়েছে। ব্যক্তিগত ব্লগ, ব্যবসায়িক ওয়েবসাইট, ই-কমার্স সাইট, নিউজ পোর্টাল, ফোরাম, এবং শিক্ষামূলক সাইট সহ বিভিন্ন ধরনের ওয়েবসাইট বিভিন্ন প্রয়োজন মেটানোর জন্য তৈরি করা হয়। এছাড়াও, একটি ওয়েবসাইটের ডিজাইন ও ফাংশনালিটি এর উদ্দেশ্যের ওপর নির্ভর করে পরিবর্তিত হয়।
                        </span>



                        {/* এসইও কি? */}
                        <section className="mt-12">
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 border-l-4 border-red-500 pl-3">
                                ওয়েবসাইট কিভাবে তৈরী করতে হয়?
                            </h2>

                            {/* ইমেজ */}
                            <div className="w-full mb-6">
                                <img
                                    className="w-full h-auto max-h-96 rounded-lg object-cover shadow-lg"
                                    src="imgas/wev-site-imgas/3.jpg"
                                    alt="What is SEO"
                                />
                            </div>

                            {/* কনটেন্ট */}
                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p>
                                    ওয়েবসাইট তৈরি একটি পরিকল্পনা, ডিজাইন, ডেভেলপমেন্ট, এবং রক্ষণাবেক্ষণের সমন্বয়ে গঠিত প্রক্রিয়া। এখানে আমি ধাপে ধাপে আলোচনা করব একটি নতুন ওয়েবসাইট কিভাবে তৈরী করতে হয়:
                                </p>

                            </div>
                        </section>

                        {/* SEO কেন করা হয়? */}
                        <section className="mt-12 pt-8 border-t border-gray-200">
                            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-8 border-l-4 border-green-500 pl-3">
                                ১| লক্ষ্য ও উদ্দেশ্য নির্ধারণ
                            </h1>

                            <div className="w-full mb-6">
                                <img
                                    className="w-full h-auto max-h-96 rounded-lg object-cover shadow-lg"
                                    src="imgas/wev-site-imgas/7.jpg"
                                    alt="Why is SEO done"
                                />
                            </div>

                            <p className="mb-8 text-gray-700 leading-relaxed">
                                ওয়েবসাইট তৈরির প্রাথমিক ধাপ হলো আপনার প্রয়োজন এবং উদ্দেশ্য নির্ধারণ করা। এটি একটি অত্যন্ত গুরুত্বপূর্ণ পদক্ষেপ কারণ এটি আপনার পুরো ওয়েবসাইটের নকশা এবং ফাংশনালিটির ভিত্তি হবে।
                            </p>

                            <p className="text-gray-700 text-sm mb-8 sm:text-base leading-relaxed">
                                <span className="font-bold">ব্যক্তিগত ব্লগ: </span>
                                যদি আপনার উদ্দেশ্য একটি ব্লগ তৈরি করা হয়, তাহলে আপনার লক্ষ্য হবে একটি সহজ এবং আকর্ষণীয় প্ল্যাটফর্ম তৈরি করা
                                যেখানে আপনি আপনার চিন্তা, মতামত, এবং অভিজ্ঞতা শেয়ার করতে পারবেন।
                            </p>
                            <p className="text-gray-700 text-sm mb-8 sm:text-base leading-relaxed">
                                <span className="font-bold"> ব্যবসায়িক সাইট:</span>
                                যদি আপনি একটি ব্যবসায়িক সাইট তৈরি করতে চান, তাহলে আপনাকে আপনার পণ্য ও সেবা প্রদর্শনের জন্য একটি প্রফেশনাল ডিজাইন এবং কন্টেন্ট প্রয়োজন হবে।
                            </p>
                            <p className="text-gray-700 text-sm mb-8 sm:text-base leading-relaxed">
                                <span className="font-bold"> ই-কমার্স সাইট:</span>
                                একটি অনলাইন স্টোর তৈরি করতে হলে আপনাকে পণ্য তালিকা, পেমেন্ট গেটওয়ে, এবং শিপিং ব্যবস্থা অন্তর্ভুক্ত করতে হবে।
                            </p>


                            {/* কারণ ১: ট্রাফিক বৃদ্ধি */}
                            <div className="bg-blue-50 p-6 rounded-xl shadow-inner mb-6">
                                <h1 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-3 flex items-center">
                                    <span className="text-4xl mr-3">1️⃣</span>
                                    ডোমেইন নাম নির্বাচন
                                </h1>

                                <div className="w-full mb-4">
                                    <img
                                        className="w-full h-auto max-h-80 rounded-lg object-cover shadow-md"
                                        src="imgas/wev-site-imgas/1.jpg"
                                        alt="Increase Traffic with SEO"
                                    />
                                </div>

                                <p className="text-gray-700 leading-relaxed mb-4">
                                    ডোমেইন নাম হলো আপনার ওয়েবসাইটের অনন্য ঠিকানা যা ব্যবহারকারীরা আপনার সাইটে প্রবেশ করতে ব্যবহার করবে। এটি একটি গুরুত্বপূর্ণ পদক্ষেপ কারণ এটি আপনার ব্র্যান্ডিংয়ের অংশ।

                                </p>
                                <p className="text-gray-700 text-sm mb-8 sm:text-base leading-relaxed">
                                    <span className="font-bold">  উচ্চারণে সহজ:</span>
                                    ডোমেইন নাম এমন হওয়া উচিত যা উচ্চারণ এবং মনে রাখা সহজ।

                                </p>
                                <p className="text-gray-700 text-sm mb-8 sm:text-base leading-relaxed">
                                    <span className="font-bold">   অনন্য:</span>
                                    নিশ্চিত করুন যে আপনার নির্বাচিত নাম অনন্য এবং অন্য কারও দ্বারা ব্যবহার করা হয়নি।
                                </p>
                                <p className="text-gray-700 text-sm mb-8 sm:text-base leading-relaxed">
                                    <span className="font-bold"> বিষয়বস্তু সম্পর্কিত: </span>
                                    নামটি আপনার সাইটের বিষয়বস্তু বা ব্যবসার সাথে সম্পর্কিত হওয়া উচিত।
                                </p>



                            </div>

                            {/* কারণ ২: ব্র্যান্ডের সচেতনতা বৃদ্ধি */}
                            <div className="bg-green-50 p-6 rounded-xl shadow-inner mb-6">
                                <h1 className="text-2xl sm:text-3xl font-bold text-green-700 mb-3 flex items-center">
                                    <span className="text-4xl mr-3">2️⃣</span>হোস্টিং নির্বাচন
                                </h1>

                                <div className="w-full mb-4">
                                    <img
                                        className="w-full h-auto max-h-80 rounded-lg object-cover shadow-md"
                                        src="imgas/wev-site-imgas/5.jpg"
                                        alt="Increase Brand Awareness"
                                    />
                                </div>

                                <p className="text-gray-700 leading-relaxed mb-4">
                                    ওয়েব হোস্টিং হলো সেই সার্ভার যা আপনার ওয়েবসাইটের ফাইলগুলো সংরক্ষণ করে। একটি ভাল হোস্টিং পরিষেবা আপনার সাইটের পারফরম্যান্স এবং নিরাপত্তা নিশ্চিত করে।

                                </p>
                                <p className="text-gray-700 text-sm mb-8 sm:text-base leading-relaxed">
                                    <span className="font-bold"> শেয়ারড হোস্টিং: </span>

                                    একাধিক সাইট একটি সার্ভারে হোস্ট করা হয়। এটি সাধারণত সস্তা এবং ছোট সাইটের জন্য উপযুক্ত।
                                </p>
                                <p className="text-gray-700 text-sm mb-8 sm:text-base leading-relaxed">
                                    <span className="font-bold">  ভিপিএস হোস্টিং:   </span>
                                    একটি ভার্চুয়াল প্রাইভেট সার্ভার যেখানে আপনাকে নির্দিষ্ট পরিমাণ রিসোর্স বরাদ্দ করা হয়। এটি মাঝারি আকারের সাইটের জন্য উপযুক্ত।
                                </p>
                                <p className="text-gray-700 text-sm mb-8 sm:text-base leading-relaxed">
                                    <span className="font-bold"> ডেডিকেটেড সার্ভার: </span>
                                    একটি সম্পূর্ণ সার্ভার আপনার একক ব্যবহার জন্য। এটি বড় সাইট বা উচ্চ ট্রাফিক সাইটের জন্য উপযুক্ত।
                                </p>




                            </div>

                            {/* কারণ ৩: ব্যবসার বিক্রি বৃদ্ধি */}
                            <div className="bg-yellow-50 p-6 rounded-xl shadow-inner mb-6">
                                <h1 className="text-2xl sm:text-3xl font-bold text-yellow-700 mb-3 flex items-center">
                                    <span className="text-4xl mr-3">3️⃣</span>  ওয়েবসাইটের কাঠামো পরিকল্পনা
                                </h1>

                                <div className="w-full mb-4">
                                    <img
                                        className="w-full h-auto max-h-80 rounded-lg object-cover shadow-md"
                                        src="imgas/wev-site-imgas/4.jpg"
                                        alt="Increase Business Sales"
                                    />
                                </div>

                                <p className="text-gray-700 leading-relaxed mb-4">
                                    ওয়েবসাইটের কাঠামো নির্ধারণ করা হলো কিভাবে আপনার পেজগুলো সাজানো হবে তা পরিকল্পনা করা। এটি একটি গুরুত্বপূর্ণ পদক্ষেপ কারণ এটি ব্যবহারকারীর অভিজ্ঞতা (UX) এবং নেভিগেশনকে প্রভাবিত করে।
                                </p>
                                <p className="text-gray-700 text-sm mb-8 sm:text-base leading-relaxed">
                                    <span className="font-bold"> হোম পেজ:  </span>

                                    এটি আপনার সাইটের মুখ্য পেজ যা প্রথম দর্শনে ব্যবহারকারীদের আকর্ষণ করবে।
                                </p>
                                <p className="text-gray-700 text-sm mb-8 sm:text-base leading-relaxed">
                                    <span className="font-bold">  অ্যাবাউট (About) পেজ: </span>

                                    এখানে আপনার ব্যবসা বা ব্যক্তিত্ব সম্পর্কে বিস্তারিত তথ্য থাকবে।
                                </p>
                                <p className="text-gray-700 text-sm mb-8 sm:text-base leading-relaxed">
                                    <span className="font-bold">     সার্ভিস পেজ:   </span>
                                    আপনার সেবাগুলি বা পণ্যের বিস্তারিত বিবরণ দেওয়া হয়।
                                </p>
                                <p className="text-gray-700 text-sm mb-8 sm:text-base leading-relaxed">
                                    <span className="font-bold"> কন্টাক্ট পেজ: </span>
                                    ব্যবহারকারীরা কিভাবে আপনার সাথে যোগাযোগ করতে পারে তা এখানে উল্লেখ থাকে।
                                </p>


                            </div>
                        </section>

                        {/* বহুল জিজ্ঞাসিত প্রশ্ন ও উত্তর সমূহ (FAQ) */}
                        <section className="mt-12 pt-8 border-t-2 border-dashed border-gray-300">
                            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-6">
                                বহুল জিজ্ঞাসিত প্রশ্ন ও উত্তর সমূহ (FAQ) 💡
                            </h1>
                            <p className="mb-6 text-gray-700">
                                “ওয়েবসাইট কিভাবে তৈরী করতে হয়?” এই বিষয়ে আপনার মনে বেশ কয়েকটি প্রশ্ন উঁকি দিচ্ছে? তাহলে চলুন জেনে নেই সেই সকল প্রশ্ন ও উত্তরগুলো-
                            </p>

                            {/* FAQ আইটেম */}
                            <div className="space-y-4">
                                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                                    <h4 className="text-xl font-semibold text-gray-900 mb-2">ওয়েবসাইট কি একটি ব্যবসার জন্য গুরুত্বপূর্ণ?</h4>
                                    <p className="text-gray-600">হ্যাঁ, ওয়েবসাইট একটি ব্যবসার জন্য অত্যন্ত গুরুত্বপূর্ণ, কারণ এটি আপনার পণ্য বা সেবা অনলাইনে প্রদর্শন করে এবং সম্ভাব্য গ্রাহকদের সাথে সংযোগ স্থাপন করে।</p>
                                </div>
                                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                                    <h4 className="text-xl font-semibold text-gray-900 mb-2">ওয়েবসাইট আপডেট করার প্রয়োজন কেন?</h4>
                                    <p className="text-gray-600">ওয়েবসাইট আপডেট করা প্রয়োজন কারণ এটি নতুন তথ্য এবং ফিচার যোগ করে, সিকিউরিটি সুরক্ষিত রাখে এবং সার্চ ইঞ্জিন র‌্যাংকিং উন্নত করতে সহায়তা করে।</p>
                                </div>
                            </div>
                        </section>

                        {/* উপসংহার */}
                        <section className="mt-12 pt-8 border-t border-gray-200">
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-red-500 mb-4">
                                উপসংহার 🌟
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                উপরোক্ত আলোচনা থেকে আমরা ওয়েবসাইট কি এবং ওয়েবসাইট কিভাবে তৈরী করতে হয়? এ সম্পর্কে বিস্তারিত জানলাম। ওয়েবসাইট তৈরি করা যতটা চ্যালেঞ্জিং মনে হয়, ততটা কঠিন নয়। সঠিক পরিকল্পনা এবং প্রয়োজনীয় ধাপ অনুসরণ করলে আপনি সহজেই একটি সফল ওয়েবসাইট তৈরি করতে পারবেন। আপনার প্রয়োজন অনুযায়ী একটি উপযুক্ত ওয়েবসাইট তৈরি করতে সময় নিন, এবং মনে রাখুন যে একটি ভাল ওয়েবসাইট হতে পারে আপনার সাফল্যের চাবিকাঠি। আশা করি, এই গাইডটি আপনাকে সাহায্য করবে একটি পেশাদার এবং কার্যকরী ওয়েবসাইট তৈরি করতে। এছাড়াও আপনার জ্ঞানকে প্রসারিত করার জন্য
                                <span className="text-amber-800 font-bold cursor-pointer">
                                    ওয়েবসাইট তৈরি করতে কি কি লাগে?
                                </span>
                                সম্পর্কিত আর্টিকেলটি পড়ুন।
                            </p>
                            <p className="mt-6 text-gray-500 italic">
                                “ওয়েবসাইট কিভাবে তৈরী করতে হয়?” সম্পর্কিত কোন প্রশ্ন থাকে তাহলে অবশ্যই নিচে কমেন্ট করবেন। আর এমন ধরনের গুরুত্বপূর্ণ বিষয় গুলো বিনামূল্যে জানতে আমাদের সাথে থাকবেন। ধন্যবাদ, ভালো থাকুন, সুস্থ থাকুন।🙏
                            </p>
                        </section>

                    </article>

                    {/* মন্তব্য ফর্ম সেকশন - Added submission logic */}
                    <section className="mt-8 bg-white p-6 sm:p-8 rounded-xl shadow-lg">
                        <h3 className="text-2xl font-bold mb-4">মন্তব্য দিন</h3>
                        {/* 4. Attached the handleSubmit function to the form */}
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <textarea
                                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                                rows={4}
                                placeholder="Comment *"
                                aria-label="Comment"
                                name="comment" // Added name attribute
                                value={commentData.comment} // Controlled component
                                onChange={handleChange} // Added change handler
                                required
                            ></textarea>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <input
                                    className="border border-gray-300 rounded-lg p-3"
                                    type="text"
                                    placeholder="Name *"
                                    aria-label="Name"
                                    name="name" // Added name attribute
                                    value={commentData.name} // Controlled component
                                    onChange={handleChange} // Added change handler
                                    required
                                />
                                <input
                                    className="border border-gray-300 rounded-lg p-3"
                                    type="email"
                                    placeholder="Email *"
                                    aria-label="Email"
                                    name="email" // Added name attribute
                                    value={commentData.email} // Controlled component
                                    onChange={handleChange} // Added change handler
                                    required
                                />
                                <input
                                    className="border border-gray-300 rounded-lg p-3"
                                    type="url"
                                    placeholder="Website"
                                    aria-label="Website"
                                    name="website" // Added name attribute
                                    value={commentData.website} // Controlled component
                                    onChange={handleChange} // Added change handler
                                />
                            </div>
                            <label className="inline-flex items-center text-sm text-gray-600">
                                <input
                                    type="checkbox"
                                    className="mr-2 rounded text-blue-600 focus:ring-blue-500"
                                    name="saveInfo" // Added name attribute
                                    checked={commentData.saveInfo} // Controlled component
                                    onChange={handleChange} // Added change handler
                                />
                                Save my name, email, and website for next time.
                            </label>
                            {/* The button type is already submit by default inside a form, but kept explicit for clarity */}

                        </form>
                        <button
                            type="submit"
                            className="w-full mt-2 sm:w-auto bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-200 shadow-md"
                        >
                            Post Comment
                        </button>
                    </section>
                </main>
            </div>
            <Sidebar />
        </div>
    );
}

export default CreateWevSiteBolog;
