
// import KeywordTypes from "@/components/AllBologPagass/KeywordRicercBolog/KeywordRicercBolog;item";
import Sidebar from "@/components/pages/Home/rightSiteHome";
import { useState } from "react";

import { Link } from "react-router-dom";

function SchemaBolog() {
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
                            src=" imgas/sou-imgas/6.jpg"
                            alt="SEO, Search Engine Optimization"
                        />
                    </div>

                    {/* ব্রেডক্রাম্ব নেভিগেশন */}
                    <span className="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-widest px-4 sm:px-6 lg:px-8">
                        <Link to="/" className="text-blue-600 font-bold hover:text-blue-800 transition duration-300">
                            হোম
                        </Link>
                        <span className="mx-2">/</span>
                        <Link to="/এসইও" className="text-blue-600 hover:text-blue-800 transition duration-300 font-semibold">
                            এসইও
                        </Link>
                    </span>
                </header>

                {/* মূল কনটেন্ট এরিয়া */}
                <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
                    <article className="bg-white p-6 sm:p-10 rounded-3xl shadow-2xl">

                        {/* শিরোনাম */}
                        <h1 className="text-3xl sm:text-4xl md:text-3xl  font-extrabold text-blue-700 mb-6 border-b-4 border-blue-100 pb-4 leading-tight">
                            এসইওতে স্কিমা ব্যবহার করা হয় কেন?
                        </h1>

                        {/* ভূমিকা */}
                        <p className="leading-relaxed text-gray-600 mb-8 text-base pb-4 sm:text-lg">
                            এসইওতে স্কিমা ব্যবহার করা হয় কেন—এই প্রশ্নের উত্তর জানলে আপনার ওয়েবসাইটের সার্চ ইঞ্জিন র‍্যাঙ্কিং উল্লেখযোগ্যভাবে উন্নত হতে পারে। বর্তমান ডিজিটাল যুগে, ওয়েবসাইট এবং অনলাইন কনটেন্টের র‌্যাঙ্কিং এবং দৃশ্যমানতা উন্নত করা একটি অত্যন্ত গুরুত্বপূর্ণ বিষয়। এর জন্য এসইও (Search Engine Optimization) একটি মৌলিক কৌশল হিসেবে ব্যবহৃত হয়। এসইও-এর মধ্যে একটি গুরুত্বপূর্ণ উপাদান হলো স্কিমা মার্কআপ। স্কিমা মার্কআপ এমন একটি প্রযুক্তি যা সার্চ ইঞ্জিনগুলির জন্য ওয়েবসাইটের কনটেন্টকে আরও বোধগম্য করে তোলে এবং এর মাধ্যমে বিভিন্ন ধরনের তথ্য সঠিকভাবে প্রদর্শিত হয়। এই ব্লগ পোস্টে আমরা এসইওতে স্কিমা ব্যবহার করা হয় কেন এ সম্পর্কে বিস্তারিত জানবো।
                        </p>





                        <h1 className="text-3xl sm:text-3xl md:text-3xl  font-extrabold mb-6 border-b-4 border-blue-100 pb-4 leading-tight">
                            স্কিমা কি?
                        </h1>

                        <p className="leading-relaxed text-gray-600 mb-6 text-base sm:text-lg">
                            স্কিমা মার্কআপ হলো একটি স্ট্যান্ডার্ডাইজড কোড যা HTML কোডের সাথে যুক্ত থাকে এবং এটি সার্চ ইঞ্জিনগুলোকে ওয়েবপেজের কনটেন্টের বিষয়বস্তু বুঝতে সাহায্য করে। স্কিমা মার্কআপ Schema.org দ্বারা প্রস্তাবিত একটি ফরম্যাটে থাকে, যা বিভিন্ন ধরণের কনটেন্টের জন্য বিশেষ ধরণের ট্যাগ প্রদান করে। এটি সার্চ ইঞ্জিনের কাছে কনটেন্টের বিস্তারিত তথ্য সহজে উপস্থাপন করতে সহায়ক হয়।
                        </p>

                        <p className="leading-relaxed text-gray-600 mb-6 text-base sm:text-lg">
                            স্কিমা কোডের মাধ্যমে আপনি বিভিন্ন ধরনের তথ্য যেমন পণ্যের দাম, রিভিউ স্কোর, ব্যবসার ঠিকানা, ইভেন্টের তারিখ ইত্যাদি সরাসরি সার্চ ইঞ্জিনে প্রদর্শন করতে পারেন। উদাহরণস্বরূপ, যদি আপনার ওয়েবসাইটে একটি রিভিউ থাকে, তাহলে স্কিমা মার্কআপ ব্যবহার করে আপনি সেই রিভিউয়ের স্কোর, লেখকের নাম, এবং রিভিউয়ের বিস্তারিত তথ্য সার্চ রেজাল্টে প্রদর্শন করতে পারেন। এটি ব্যবহারকারীদের জন্য কনটেন্টের মান এবং প্রাসঙ্গিকতা সম্পর্কে একটি সুস্পষ্ট ধারণা প্রদান করে। স্কিমা মার্কআপ বিভিন্ন ধরনের তথ্য উপস্থাপন করতে পারে, যেমন:
                        </p>


                        <p className="leading-relaxed text-gray-600 mb-3 text-base sm:text-lg">
                            <span className="font-bold text-black  text-xl"><span className="font-bold  text-2xl">*</span> প্রোডাক্ট: </span>
                            পণ্যের নাম, দাম, প্রস্তুতকারক, রিভিউ স্কোর ইত্যাদি।
                        </p>

                        <p className="leading-relaxed text-gray-600 mb-3 text-base sm:text-lg">
                            <span className="font-bold text-black  text-xl"><span className="font-bold text-2xl">*</span> রিভিউ:  </span>
                            রিভিউয়ের লেখক, স্কোর, কনটেন্ট ইত্যাদি।
                        </p>

                        <p className="leading-relaxed text-gray-600 mb-3 text-base sm:text-lg">
                            <span className="font-bold text-black  text-xl"><span className="font-bold text-2xl">*</span>  ইভেন্ট: </span>
                            ইভেন্টের নাম, তারিখ, সময়, অবস্থান ইত্যাদি।
                        </p>

                        <p className="leading-relaxed text-gray-600 mb-3 text-base sm:text-lg">
                            <span className="font-bold text-black  text-xl"><span className="font-bold text-2xl">*</span>সেবা:  </span>
                            সেবার নাম, বিবরণ, মূল্য ইত্যাদি।
                        </p>

                        <p className="leading-relaxed text-gray-600 mb-3 text-base sm:text-lg">
                            <span className="font-bold text-black  text-xl"><span className="font-bold text-2xl">*</span> ভাইসেস: </span>
                            জ্ঞানের উৎস, উইকি পেজ ইত্যাদি।
                        </p>




                        {/* এসইও কি? */}
                        <section className="mt-12">
                            <h2 className="text-3xl sm:text-3xl font-bold text-gray-800 mb-6 border-l-4 border-red-500 pl-3">
                                এসইওতে স্কিমা ব্যবহার করা হয় কেন?
                            </h2>

                            {/* ইমেজ */}
                            <div className="w-full mb-6">
                                <img
                                    className="w-full h-auto max-h-96 rounded-lg object-cover shadow-lg"
                                    src="imgas/simpol-bolog-imgas/1.jpg"
                                    alt="What is SEO"
                                />
                            </div>

                            {/* কনটেন্ট */}
                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p className="leading-relaxed text-gray-600 mb-6 text-base sm:text-lg">
                                    এসইও (Search Engine Optimization) এর মূল উদ্দেশ্য হলো ওয়েবসাইটের দৃশ্যমানতা এবং র‌্যাঙ্কিং উন্নত করা। স্কিমা মার্কআপ একটি শক্তিশালী টুল যা সার্চ ইঞ্জিনের কাছে কনটেন্টের বিস্তারিত তথ্য সঠিকভাবে উপস্থাপন করে। এটি কনটেন্টকে আরও বোধগম্য এবং আকর্ষণীয় করে তোলে, ফলে সার্চ রেজাল্টে উচ্চ র‌্যাঙ্ক পাওয়ার সম্ভাবনা বাড়ায়। এসইওতে স্কিমা ব্যবহার করা হয় কেন এ সম্পর্কে নিচে বিস্তারিতভাবে তুলে ধরা হলো-
                                </p>

                                {/* <KeywordTypes /> */}
                            </div>
                        </section>

                        {/* SEO কেন করা হয়? */}
                        <section className="mt-12 pt-8 border-t border-gray-200">
                            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-8 border-l-4 border-green-500 pl-3">
                                ১। সার্চ ইঞ্জিনের বোঝার উন্নতি

                            </h1>

                            <div className="w-full mb-6">
                                <img
                                    className="w-full h-auto max-h-96 rounded-lg object-cover shadow-lg"
                                    src="imgas/simpol-bolog-imgas/2.jpg"
                                    alt="Why is SEO done"
                                />
                            </div>

                            <p className="mb-5 text-gray-700 leading-relaxed">
                                স্কিমা মার্কআপ সার্চ ইঞ্জিনগুলিকে ওয়েবপেজের কনটেন্টের বিষয়বস্তু গভীরভাবে বুঝতে সাহায্য করে। সার্চ ইঞ্জিনগুলির অ্যালগরিদম কনটেন্ট বিশ্লেষণের জন্য বিভিন্ন ধরনের ফ্যাক্টর ব্যবহার করে, কিন্তু স্কিমা মার্কআপ তাদের জন্য কনটেন্টের বিস্তারিত তথ্য সরাসরি প্রদান করে। এটি কনটেন্টের বিষয়বস্তু এবং কৌশল নির্ধারণে সহায়ক হয় এবং কনটেন্টকে আরও প্রাসঙ্গিকভাবে শ্রেণীবদ্ধ করে। স্কিমা মার্কআপ সার্চ ইঞ্জিনগুলিকে নিম্নলিখিত তথ্য বোঝার সুযোগ দেয়:
                            </p>





                            <p className="leading-relaxed text-gray-600 mb-3 text-base sm:text-lg">
                                <span className="font-bold text-black  text-xl"><span className="font-bold text-2xl">*</span>  কনটেন্টের প্রকার: </span>
                                এটি বুঝতে সাহায্য করে কনটেন্ট একটি প্রোডাক্টের রিভিউ, একটি ইভেন্টের বিবরণ, অথবা কোনো সেবার বিস্তারিত।
                            </p>

                            <p className="leading-relaxed text-gray-600 mb-3 text-base sm:text-lg">
                                <span className="font-bold text-black  text-xl"><span className="font-bold text-2xl">*</span>        বিষয়বস্তু সম্পর্কিত বিস্তারিত তথ্য:  </span>
                                স্কিমা কনটেন্টের বিস্তারিত যেমন দাম, রিভিউ স্কোর, সেবার বৈশিষ্ট্য সরাসরি উপস্থাপন করে।
                            </p>

                            <p className="leading-relaxed text-gray-600 mb-6 text-base sm:text-lg">
                                <span className="font-bold text-black  text-xl"><span className="font-bold text-2xl">*</span>কনটেন্টের অর্গানাইজেশন: </span>
                                কনটেন্টের কাঠামো এবং সংজ্ঞা বুঝতে সাহায্য করে, যেমন একটি প্রোডাক্টের নাম এবং তার বিবরণ।
                            </p>





                            {/* কারণ ১: ট্রাফিক বৃদ্ধি */}
                            <div className="bg-blue-50 p-6 rounded-xl shadow-inner mb-6">
                                <h1 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-3 flex items-center">
                                    <span className="text-4xl mr-3"></span>
                                    ২। রিচ স্নিপেট তৈরি করা
                                </h1>

                                <div className="w-full mb-4">
                                    <img
                                        className="w-full h-auto max-h-80 rounded-lg object-cover shadow-md"
                                        src="imgas/simpol-bolog-imgas/3.jpg"
                                        alt="Increase Traffic with SEO"
                                    />
                                </div>

                                <p className="text-gray-700 leading-relaxed mb-4">
                                    স্কিমা মার্কআপ ব্যবহার করে আপনি রিচ স্নিপেট তৈরি করতে পারেন যা সার্চ রেজাল্ট পেজে আপনার কনটেন্টের বিস্তারিত এবং আকর্ষণীয় তথ্য প্রদর্শন করে। রিচ স্নিপেট হলো একটি বিশেষ ধরণের ফলাফল যা সাধারণ সার্চ রেজাল্টের চেয়ে বেশি তথ্য প্রদর্শন করে। উদাহরণস্বরূপ, একটি রিচ স্নিপেট পণ্যের রেটিং, দাম, প্রস্তুতকারকের নাম এবং অন্যান্য গুরুত্বপূর্ণ তথ্য সরাসরি সার্চ রেজাল্টে প্রদর্শন করতে পারে। রিচ স্নিপেটের সুবিধা:
                                </p>


                                <p className="leading-relaxed text-gray-600 mb-3 text-base sm:text-lg">
                                    <span className="font-bold text-black  text-xl"><span className="font-bold text-2xl">*</span>   বৃদ্ধি করা টিআরসিটি: </span>
                                    রিচ স্নিপেটের মাধ্যমে কনটেন্টকে আরও তথ্যপূর্ণ ও আকর্ষণীয় দেখানো যায়, যা ক্লিক-থ্রু রেট (CTR) বাড়াতে সহায়ক।
                                </p>

                                <p className="leading-relaxed text-gray-600 mb-3 text-base sm:text-lg">
                                    <span className="font-bold text-black  text-xl"><span className="font-bold text-2xl">*</span>     বৈশিষ্ট্যযুক্ত তথ্য:   </span>
                                    এটি ব্যবহারকারীদেরকে দ্রুত ও সহজে প্রয়োজনীয় তথ্য প্রদান করে, যা তাদের প্রশ্নের উত্তর প্রদান করে।
                                </p>

                                <p className="leading-relaxed text-gray-600 mb-6 text-base sm:text-lg">
                                    <span className="font-bold text-black  text-xl"><span className="font-bold text-2xl">*</span>  সার্চ রেজাল্টে আরও দৃশ্যমানতা:</span>
                                    এটি আপনার কনটেন্টকে অন্যান্য সার্চ রেজাল্টের থেকে আলাদা করে তুলে ধরে।
                                </p>



                            </div>

                            {/* কারণ ২: ব্র্যান্ডের সচেতনতা বৃদ্ধি */}

                        </section>

                        {/* বহুল জিজ্ঞাসিত প্রশ্ন ও উত্তর সমূহ (FAQ) */}
                        <section className="mt-12 pt-8 border-t-2 border-dashed border-gray-300">
                            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-6">
                                বহুল জিজ্ঞাসিত প্রশ্ন ও উত্তর সমূহ (FAQ) 💡
                            </h1>
                            <p className="mb-6 text-gray-700">
                                “এসইওতে স্কিমা ব্যবহার করা হয় কেন?” এই বিষয়ে আপনার মনে বেশ কয়েকটি প্রশ্ন উঁকি দিচ্ছে? তাহলে চলুন জেনে নেই সেই সকল প্রশ্ন ও উত্তরগুলো-
                            </p>

                            {/* FAQ আইটেম */}
                            <div className="space-y-4">
                                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                                    <h4 className="text-xl font-semibold text-gray-900 mb-2">স্কিমা মার্কআপ কিভাবে ব্যবহার করতে হয়?</h4>
                                    <p className="text-gray-600">স্কিমা মার্কআপ ব্যবহার করতে হলে আপনাকে আপনার ওয়েবপেজের HTML কোডে স্কিমা ট্যাগ যুক্ত করতে হবে। এটি সাধারণত JSON-LD, Microdata, বা RDFa ফরম্যাটে লেখা হয়।</p>
                                </div>
                                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                                    <h4 className="text-xl font-semibold text-gray-900 mb-2">স্কিমা মার্কআপের সুবিধা কি?</h4>
                                    <p className="text-gray-600">স্কিমা মার্কআপ সার্চ ইঞ্জিনের জন্য কনটেন্টকে আরও বোধগম্য করে তোলে, যা সার্চ রেজাল্টে রিচ স্নিপেট তৈরি করতে সাহায্য করে এবং সার্চ ইঞ্জিনের র‌্যাঙ্কিং উন্নত করে।</p>
                                </div>
                            </div>
                        </section>

                        {/* উপসংহার */}
                        <section className="mt-12 pt-8 border-t border-gray-200">
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-red-500 mb-4">
                                উপসংহার 🌟
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                উপরোক্ত আলোচনা থেকে আমরা এসইওতে স্কিমা ব্যবহার করা হয় কেন এ সম্পর্কে বিস্তারিত জানলাম। স্কিমা মার্কআপ এসইও প্রক্রিয়ার একটি অত্যন্ত গুরুত্বপূর্ণ অংশ যা সার্চ ইঞ্জিনের জন্য কনটেন্টের বোধগম্যতা বৃদ্ধি করে এবং রিচ স্নিপেট তৈরি করতে সাহায্য করে। এটি কেবল সার্চ ইঞ্জিনের কার্যকারিতা উন্নত করে না, বরং ব্যবহারকারীদের জন্য আরও ভাল অভিজ্ঞতা প্রদান করে। স্কিমা ব্যবহার করে আপনি আপনার ওয়েবসাইটের সার্চ রেজাল্টে উন্নতি করতে সক্ষম হবেন এবং সার্চ ইঞ্জিনের সাথে আপনার কনটেন্টের সঠিক সম্পর্ক গড়ে তুলতে পারবেন। এসইওতে স্কিমার কার্যকারিতা সর্বোচ্চ পর্যায়ে আনার জন্য এটি একটি অত্যন্ত শক্তিশালী টুল হিসেবে কাজ করে। এছাড়াও আপনার জ্ঞানকে প্রসারিত করার জন্য
                                <span className="text-amber-800 font-bold">
                                    অন পেজ এসইও তে কি কি করতে হয়
                                </span>
                                সম্পর্কে আর্টিকেলটি পড়তে পারেন।
                            </p>
                            <p className="mt-6 text-gray-500 italic">
                                “এসইওতে স্কিমা ব্যবহার করা হয় কেন?” সম্পর্কিত কোন প্রশ্ন থাকে তাহলে অবশ্যই নিচে কমেন্ট করবেন। আর এমন ধরনের গুরুত্বপূর্ণ বিষয় গুলো বিনামূল্যে জানতে আমাদের সাথে থাকবেন। ধন্যবাদ, ভালো থাকুন, সুস্থ থাকুন।🙏
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

export default SchemaBolog;
