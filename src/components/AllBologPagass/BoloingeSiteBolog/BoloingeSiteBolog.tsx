
import Sidebar from "@/components/pages/Home/rightSiteHome";
import { useState } from "react";

import { Link } from "react-router-dom";

function BoloingeSiteBolog() {
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
                            src="imgas/wev-site-imgas/7.jpg"
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
                        <h1 className="text-3xl sm:text-4xl md:text-3xl  font-extrabold text-blue-700 mb-6 border-b-4 border-blue-100 pb-4 leading-tight">
                            ব্লগ সাইট কি? ব্লগ সাইট খোলার নিয়ম
                        </h1>

                        {/* ভূমিকা */}
                        <p className="leading-relaxed text-gray-600 mb-8 text-base pb-4 sm:text-lg">
                            ব্লগ সাইট খোলার নিয়ম – ফ্রিতে খুলবেন নাকি অর্থ ব্যয় করে একটি প্রফেশনাল লেভেলের ব্লগ সাইট তৈরী করবেন তা নির্ভর করবে আপনার উপর। তবে ব্লগ সাইট কিভাবে খুলতে হয় সেটা কিন্তু আপনাকে জানতেই হবে। সুতরাং ব্লগিং করে অনলাইন থেকে অর্থ উপার্জন করতে কিংবা নিজের ব্র্যান্ডিংকে ফুটে তুলতে ব্লগ সাইটের তুলনায় হয় না। তাই ব্লগ সাইটের মাধ্যমে আয় করতে চাইলে চলুন আমরা ব্লগ সাইট খোলার জন্য প্রয়োজনীয় সকল নিয়ম জেনে নিই।
                        </p>




                        <h1 className="text-3xl sm:text-3xl md:text-3xl  font-extrabold mb-6 border-b-4 border-blue-100 pb-4 leading-tight">
                            ব্লগ সাইট কি?
                        </h1>

                        <p className="leading-relaxed text-gray-600 mb-6 text-base sm:text-lg">
                            একটি ব্লগ সাইট হল একটি ওয়েবসাইট যেখানে একজন ব্যক্তি বা একটি দল নিয়মিত পোস্ট করে থাকে। এই পোস্টগুলো সাধারণত ব্যক্তিগত অভিজ্ঞতা, চিন্তাভাবনার উপর ভিত্তি করে; করা হয়ে থাকে। ব্লগ সাইটগুলো প্রায়শই একটি নির্দিষ্ট বিষয়ের উপর আলোকপাত করে, যেমন প্রযুক্তি, ফ্যাশন বা খাবার ইত্যাদি। আর এই ব্লগ সাইটগুলো তৈরি করা এবং পরিচালনা করা অত্যন্ত সহজ। আপনি একটি বিনামূল্যের ব্লগ হোস্টিং পরিষেবা ব্যবহার করে ব্লগিং যাত্রা শুরু করতে পারেন, যেমন Blogger বা WordPress। এই পরিষেবাগুলো আপনাকে আপনার নিজস্ব ব্লগ সাইট তৈরি করতে এবং আপনার লেখা কনটেন্টগুলো শেয়ার করার জন্য বিশেষ সুবিধা প্রদান করবে।
                        </p>




                        {/* এসইও কি? */}
                        <section className="mt-12">
                            <h2 className="text-3xl sm:text-3xl font-bold text-gray-800 mb-6 border-l-4 border-red-500 pl-3">
                                ব্লগ সাইট খোলার জন্য প্রয়োজনীয় উপাদান
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
                                    ব্লগ সাইট খোলার জন্য নিচের বিষয়গুলোর প্রতি গুরুত্বারোপ করতে হবে। অর্থাৎ, আপনি যদি একটি ব্লগ খুলতে চান তবে নিচের উপাদানগুলো অবশ্যই প্রয়োজন পড়বে।
                                </p>
                                <p className="leading-relaxed text-gray-600 mb-3 text-base sm:text-lg">
                                    একটি ডোমেইন নেম যা আপনার ব্লগ সাইটের অনলাইন ঠিকানা।
                                </p>
                                <p className="leading-relaxed text-gray-600 mb-3 text-base sm:text-lg">
                                    একটি হোস্টিং পরিষেবা যা আপনার ব্লগ সাইটের ফাইলগুলো সংরক্ষণ করার জন্য একটি সার্ভার।
                                </p>
                                <p className="leading-relaxed text-gray-600 mb-3 text-base sm:text-lg">
                                    একটি ব্লগ প্ল্যাটফর্ম যার মাধ্যমে আপনার ব্লগ সাইট তৈরি এবং পরিচালনা করতে পারেন।
                                </p>
                                <p className="leading-relaxed text-gray-600 mb-3 text-base sm:text-lg">
                                    একটি থিম বা ডিজাইন যা আপনার ব্লগ সাইটের আকর্ষণীয় আউটলুক দিতে ভূমিকা পালন করে।
                                </p>
                                <p className="leading-relaxed text-gray-600 mb-3 text-base sm:text-lg">
                                    পোস্ট তৈরি করার জন্য একটি কন্টেন্ট ম্যানেজমেন্ট সিস্টেম (CMS) যা আপনার ব্লগ পোস্টগুলি তৈরি, সম্পাদনা এবং প্রকাশ করার জন্য ব্যবহার করতে হবে।
                                </p>
                                <p className="leading-relaxed text-gray-600 mb-3 text-base sm:text-lg">
                                    সোশ্যাল মিডিয়া উপস্থিতি অত্যন্ত প্রয়োজন যার মাধ্যমে আপনার ব্লগ সাইটের বিষয়বস্তু প্রচার করতে পারেন।
                                </p>


                            </div>
                        </section>

                        {/* SEO কেন করা হয়? */}
                        <section className="mt-12 pt-8 border-t border-gray-200">
                            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-8 border-l-4 border-green-500 pl-3">
                                ব্লগ সাইট খোলার নিয়ম

                            </h1>

                            <div className="w-full mb-6">
                                <img
                                    className="w-full h-auto max-h-96 rounded-lg object-cover shadow-lg"
                                    src="imgas/simpol-bolog-imgas/2.jpg"
                                    alt="Why is SEO done"
                                />
                            </div>

                            <p className="mb-5 text-gray-700 leading-relaxed">
                                এবার চলুন ধাপে ধাপে আমরা ব্লগ সাইট খোলার নিয়ম দেখে নিই। ব্লগ সাইট খোলার জন্য আপনাকে নিম্নলিখিত পদক্ষেপগুলি অনুসরণ করতে হবে।
                            </p>
                            <span className="font-bold mb-1 text-2xl">ধাপ-১ : একটি ডোমেইন নেম নিবন্ধন করুন</span>
                            <p className="mb-8 text-gray-700 leading-relaxed">
                                ওয়েবসাইট খোলার জন্য প্রথমেই আপনাকে একটি ডোমেইন নেম রেজিস্ট্রেশন করতে হবে। আপনি নিশ্চয় জানেন ডোমেইন নেম কি? একটি ডোমেইন নেম হল আপনার ব্লগ সাইটের অনলাইন ঠিকানা। আপনি একটি ডোমেইন সার্ভিস প্রদানকারীর কাছ থেকে ডোমেইন নেম নিবন্ধন করে নিতে পারেন।

                            </p>


                            <span className="font-bold mb-1 text-2xl">ধাপ-২ : একটি হোস্টিং পরিষেবা নির্বাচন করুন</span>
                            <p className="mb-8 text-gray-700 leading-relaxed">
                                কোন বিশ্বস্ত হোস্টিং সেবা প্রদানকারি নেটওয়ার্ক থেকে হোস্টিং ক্রয় করুন। হোস্টিং পরিষেবা হল একটি সার্ভার যেখানে আপনার ব্লগ সাইটের যাবতীয় ফাইল সংরক্ষণ করা থাকে।
                            </p>

                            <span className="font-bold mb-1 text-2xl">ধাপ-৩ : একটি ব্লগ প্ল্যাটফর্ম নির্বাচন করুন</span>
                            <p className="mb-8 text-gray-700 leading-relaxed">
                                এবার ব্লগের কনটেন্টগুলো ম্যানেজ করার জন্য একটি উপযুক্ত ব্লগিং প্লাটফর্ম নির্বাচন করুন। একটি ব্লগ প্ল্যাটফর্ম হল একটি সফ্টওয়্যার যা আপনাকে আপনার ব্লগ সাইট তৈরি এবং পরিচালনা করতে দেয়। আপনি Blogger, WordPress, বা অন্য কোনও ব্লগ প্ল্যাটফর্ম ব্যবহার করতে পারেন।
                            </p>

                            <span className="font-bold mb-1 text-2xl">ধাপ-৪ : আপনার ব্লগ সাইট তৈরি করুন</span>
                            <p className="mb-8 text-gray-700 leading-relaxed">
                                ডোমেইন নেম, হোস্টিং পরিষেবা, এবং ব্লগ প্ল্যাটফর্ম নির্বাচন করার পরে, আপনি আপনার ব্লগ সাইট তৈরি করা শুরু করে দিন।
                            </p>

                            <span className="font-bold mb-1 text-2xl">ধাপ-৫ : আপনার ব্লগ সাইটের ডিজাইন সম্পূর্ণ করে তাকে ইন্টার-এক্টিভ করুন</span>
                            <p className="mb-8 text-gray-700 leading-relaxed">
                                ব্লগ সাইট তৈরী করার পর প্রয়োজনীয় থিম ইনস্টল করে তার ডিজাইন সম্পন্ন করুন। সেই সাথে প্লাগিন সেটাপ দেওয়ার মধ্য দিয়ে ওয়েবসাইটকে ইন্টার-এক্টিভ করে তুলুন।
                            </p>




                            {/* কারণ ১: ট্রাফিক বৃদ্ধি */}
                            <div className="bg-blue-50 p-6 rounded-xl shadow-inner mb-6">
                                <h1 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-3 flex items-center">
                                    <span className="text-4xl mr-3"></span>
                                    কিভাবে বিনামূল্যে ব্লগ সাইট তৈরি করা যায়?
                                </h1>

                                <div className="w-full mb-4">
                                    <img
                                        className="w-full h-auto max-h-80 rounded-lg object-cover shadow-md"
                                        src="imgas/simpol-bolog-imgas/3.jpg"
                                        alt="Increase Traffic with SEO"
                                    />
                                </div>

                                <p className="text-gray-700 leading-relaxed mb-4">

                                    আপনি যদি ফ্রিতেই একটি ওয়েবসাইট তৈরীর চিন্তা করে থাকেন তবে আপনার জন্য গুগল নিয়ে এসেছে গুগল ব্লগার প্লাটফর্ম। যেই প্লাটফর্ম ব্যবহার করে আপনি একটি প্রফেশনাল মানের ওয়েবসাইট তৈরী করতে পারেন।
                                </p>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    আপনি চাইলে ব্লগ সাইট ফ্রিতে খুলতে পারেন অথবা অর্থ ব্যয় করে কাস্টম ডোমেইন দিয়েও আপনার ওয়েবসাইটকে সাজিয়ে নিতে পারেন।

                                </p>






                            </div>

                            {/* কারণ ২: ব্র্যান্ডের সচেতনতা বৃদ্ধি */}
                            <div className="bg-green-50 p-6 rounded-xl shadow-inner mb-6">
                                <h1 className="text-2xl sm:text-3xl font-bold text-green-700 mb-3 flex items-center">
                                    <span className="text-4xl mr-3"></span> ব্লগ সাইট কেন খুলবেন?
                                </h1>

                                <div className="w-full mb-4">
                                    <img
                                        className="w-full h-auto max-h-80 rounded-lg object-cover shadow-md"
                                        src="imgas/simpol-bolog-imgas/4.jpg"
                                        alt="Increase Brand Awareness"
                                    />
                                </div>

                                <p className="text-gray-700 leading-relaxed mb-4">
                                    উদ্দেশ্য বিহীন যেমন কিছু হয় না তেমনি এক ব্লগ সাইটও কিন্তু আমরা প্রয়োজন ছাড়া খুলি না। তার মানে একটি ব্লগ সাইট খোলার জন্য নিশ্চয় কিছু কারণ রয়েছে। চলুন এমন কিছু কারণ দেখা যাক-

                                </p>

                                <span className="mb-1 text-2xl font-bold">নিজেকে কিংবা নিজের ব্র্যান্ডিং ফুটে তুলতে</span>
                                <p className="mb-8 text-gray-700 leading-relaxed">
                                    আপনি যদি ব্লগিং করে নিজের ক্যারিয়ার গড়তে চান অর্থাৎ ব্লগ সাইট খুলে সেখান থেকে আয় করতে চান তবে এটি অত্যন্ত চমৎকার একটি উপায় হতে পারে। নিজের পরিচিতি বাড়াতে কিংবা নিজের ব্র্যান্ডিং ফুটে তুলতে ব্লগ সাইট খোলা জরুরী।
                                </p>
                                <span className="mb-1 text-2xl font-bold">নিজের কোন পণ্যের কিংবা কোন কোম্পানির পণ্যের প্রচার চালাতে</span>
                                <p className="mb-8 text-gray-700 leading-relaxed">
                                    আপনি যদি নিজের কোন পণ্যকে সকলের মাঝে ছড়িয়ে দিতে চান এবং সেখান থেকে কিছু অর্থ আয়ের চিন্তা করে থাকেন তবে একটি ব্লগ সাইট খোলার প্রয়োজন পড়বে। চাইলে নিজের কোন পণ্যের পাশাপাশি কিংবা সম্পূর্ণরূপে নিজের সাইটে অন্যের প্রচার চালিয়েও কিন্তু আয় করতে পারেন। এক্ষেত্রেও কিন্তু আপনাকে একটি ব্লগ সাইট খুলতেই হবে।
                                </p>

                                <span className="mb-1 text-2xl font-bold">নিজের অর্জিত জ্ঞানকে সকলের মাঝে ছড়িয়ে দিতে</span>
                                <p className="mb-8 text-gray-700 leading-relaxed">
                                    আপনি যদি একজন জ্ঞানপিপাসু মানুষ হয়ে থাকেন। তবে আপনার জ্ঞানের মাত্রা বাড়াতে এবং তা সকলের মাঝে ছড়িয়ে দিতে ব্লগ সাইট খোলার কোন বিকল্প নেই। আপনার জ্ঞান সকলের মাঝে ছড়িয়ে দেওয়ার পাশাপাশি আপনি সেখান থেকে প্রচুর পরিমাণ অর্থ আয় করতে পারেন।
                                </p>


                            </div>

                            {/* কারণ ৩: ব্যবসার বিক্রি বৃদ্ধি */}
                            <div className="bg-yellow-50 p-6 rounded-xl shadow-inner mb-6">
                                <h1 className="text-2xl sm:text-3xl font-bold text-yellow-700 mb-3 flex items-center">
                                    <span className="text-4xl mr-3"></span>
                                    ব্লগ সাইটের সুবিধা ও অসুবিধা সমূহ
                                </h1>

                                <div className="w-full mb-4">
                                    <img
                                        className="w-full h-auto max-h-80 rounded-lg object-cover shadow-md"
                                        src="imgas/simpol-bolog-imgas/5.jpg"
                                        alt="Increase Business Sales"
                                    />
                                </div>

                                <p className="text-gray-700 leading-relaxed mb-4">
                                    এ পর্যায়ে আমরা ব্লগ সাইটের সুবিধা এবং অসুবিধা বিস্তররূপে জানার চেষ্টা করবো। সত্যিকার অর্থে একটি ব্লগের যেমন সুবিধা রয়েছে তেমনি অসুবিধাও কিন্তু কম নয়। চলুন জেনে নেওয়া যাক-
                                </p>

                                <p className="text-gray-700 leading-relaxed mb-2">
                                    ব্লগ সাইট আমাদের চিন্তাভাবনা এবং ধারণাগুলো ভাগ করে নেওয়ার জন্য একটি ব্যক্তিগত প্ল্যাটফর্ম তৈরি করার অনন্য উপায়।
                                </p>
                                <p className="text-gray-700 leading-relaxed mb-2">
                                    ব্লগ সাইটগুলো অন্যান্য লোকেদের সাথে সংযোগ স্থাপন এবং একটি সম্প্রদায় তৈরি করার জন্যও তুলনাবিহীন একটি উপায় হতে পারে।
                                </p>
                                <p className="text-gray-700 leading-relaxed mb-2">
                                    ব্যবসায়িকগণ তাদের পণ্য বা পরিষেবাগুলো প্রচার করার জন্য ব্লগ সাইট ব্যবহার করতে পারে।
                                </p>
                                <p className="text-gray-700 leading-relaxed mb-2">
                                    আপনার অনলাইন উপস্থিতির পাশাপাশি পরিচিতির জন্য অনন্য একটি উপায় কিন্তু এই ব্লগ সাইট।
                                </p>
                                <p className="text-gray-700 leading-relaxed mb-2">
                                    ব্লগ সাইটগুলো বিজ্ঞাপন, পণ্য প্রচার বা অন্যান্য উপায়ে আয়ের উৎস হতে পারে।
                                </p>




                            </div>
                        </section>

                        {/* বহুল জিজ্ঞাসিত প্রশ্ন ও উত্তর সমূহ (FAQ) */}
                        <section className="mt-12 pt-8 border-t-2 border-dashed border-gray-300">
                            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-6">
                                বহুল জিজ্ঞাসিত প্রশ্ন ও উত্তর সমূহ (FAQ) 💡
                            </h1>
                            <p className="mb-6 text-gray-700">
                                বর্তমান সময় ব্লগিং করে অনেকেই অনলাইন থেকে হাজার হাজার ডলার আয় করছেন। চাইলে আপনিও একজন ভালোমানের ব্লগার হয়ে অনলাইন থেকে টাকা আয় করতে পারেন। চলুন ব্লগ সম্পর্কে আমরা ‍কিছু প্রশ্ন এবং তার যথাযথ উত্তর জানার চেষ্টা করি।
                            </p>

                            {/* FAQ আইটেম */}
                            <div className="space-y-4">
                                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                                    <h4 className="text-xl font-semibold text-gray-900 mb-2">একটি ব্লগ সাইট খোলার জন্য কত খরচ হয়?</h4>
                                    <p className="text-gray-600">বিভিন্ন বিষয়ের উপর ভিত্তি করে একটি ব্লগ সাইটের খরচ নির্ধারণ করা হয়। তবে আপনি গুগল ব্লগার ব্যবহার করে সম্পূর্ণ বিনামূল্যে একটি ব্লগ সাইট তৈরী করতে পারেন।</p>
                                </div>
                                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                                    <h4 className="text-xl font-semibold text-gray-900 mb-2">ব্লগ সাইট খোলার জন্য কী কী জিনিস দরকার?</h4>
                                    <p className="text-gray-600">একটি ব্লগের জন্য আপনার একটি ডোমেইন নাম, হোস্টিং এবং নির্দিষ্ট প্ল্যাটফর্ম যেমন, গুগল ব্লগার, ওয়ার্ডপ্রেস কোন ফ্রেমওয়ার্ক প্রয়োজন। সেই সাথে ওয়েবসাইটের সুন্দর আউটলুকের জন্য দরকার থিম আর ইন্টারএক্টিভ করার জন্য প্রয়োজন বিভিন্ন প্লাগিন এর।</p>
                                </div>
                            </div>
                        </section>

                        {/* উপসংহার */}
                        <section className="mt-12 pt-8 border-t border-gray-200">
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-red-500 mb-4">
                                উপসংহার 🌟
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                আলোচনার শেষে এটা বলা যায় যে, পুরো পোস্টটি আপনি যদি ভালোভাবে তথা মনোযোগের সাথে পড়ে থাকেন তবে আশা করা যায় একটি ব্লগ সাইট দাঁড় করানো আপনার জন্য খুব কঠিন একটি বিষয় হবে না। তাহলে আপনার প্রয়োজন অনুযায়ী ব্লগ সাইট খোলার নিয়ম পড়ে নিজের জন্য কিংবা আপনার প্রতিষ্ঠানের জন্য একটি সুন্দর এবং তথ্যবহুল ব্লগ সাইট খুলুন। এছাড়াও আপনার জ্ঞানকে প্রসারিত করতে
                                <span className="text-amber-800 font-bold">
                                    ব্লগ কি? ব্লগ থেকে কি ধরনের আয় হয়?
                                </span>
                                সম্পর্কে আর্টিকেলটি পড়তে পারেন।
                            </p>
                            <p className="mt-6 text-gray-500 italic">
                                “ব্লগ সাইট কি? ব্লগ সাইট খোলার নিয়ম” এই বিষয়ে আপনার যদি কিছু জানার থাকে তবে আপনি এই পোস্টের নিচে মন্তব্য করতে পারেন। এছাড়াও এই পোস্ট-টি তথ্যবহুল মনে হলে আপনার বন্ধুদের সাথে শেয়ার করতে পারেন। ধন্যবাদ।🙏
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

export default BoloingeSiteBolog;
