
import Sidebar from "@/components/pages/Home/rightSiteHome";
import { useState } from "react";

import { Link } from "react-router-dom";

function WhatcontenWriten() {
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
                            src=" imgas/bloging-images/5.jpg"
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
                            কন্টেন্ট রাইটিং শেখার উপায় সমূহ
                        </h1>

                        {/* ভূমিকা */}
                        <p className="leading-relaxed text-gray-600 mb-8 text-base pb-4 sm:text-lg">
                            কন্টেন্ট রাইটিং শেখার উপায় সম্পর্কে জানলে আপনার লেখার দক্ষতা বৃদ্ধি পাবে এবং পাঠকদের মনোযোগ আকর্ষণ করতে পারবেন। বর্তমান ডিজিটাল যুগে কন্টেন্ট রাইটিং একটি গুরুত্বপূর্ণ দক্ষতা। লেখালেখির মাধ্যমে মানুষ তার ভাবনা, ধারণা এবং তথ্য শেয়ার করতে পারে। ব্লগ, সোশ্যাল মিডিয়া, ওয়েবসাইট এবং বিভিন্ন অনলাইন প্ল্যাটফর্মে কন্টেন্ট লেখার প্রয়োজন হয়। এটি শুধুমাত্র লেখার ক্ষমতা নয়, বরং পাঠকের আগ্রহ আকৃষ্ট করার একটি কৌশলও। সঠিক কন্টেন্ট রাইটিং দক্ষতা অর্জন করলে একজন লেখক তার পাঠকের সাথে একটি শক্তিশালী সংযোগ গড়ে তুলতে পারে এবং তার লেখা আরো কার্যকরী হয়ে ওঠে। এই ব্লগ পোস্টে আমরা কন্টেন্ট রাইটিং শেখার উপায় সমূহ সম্পর্কে বিস্তারিত জানবো।
                        </p>





                        <h1 className="text-3xl sm:text-3xl md:text-3xl  font-extrabold mb-6 border-b-4 border-blue-100 pb-4 leading-tight">
                            কন্টেন্ট রাইটিং কি?
                        </h1>

                        <p className="leading-relaxed text-gray-600 mb-6 text-base sm:text-lg">
                            কন্টেন্ট রাইটিং হল এমন একটি প্রক্রিয়া যেখানে লেখক তথ্য, ধারণা এবং গল্পগুলোকে লিখিত রূপে উপস্থাপন করেন। এর মূল উদ্দেশ্য হল পাঠকদের আকৃষ্ট করা এবং তাদের মনোযোগ ধরে রাখা। কন্টেন্ট রাইটাররা বিভিন্ন ধরনের লেখা তৈরি করেন, যেমন ব্লগ পোস্ট, প্রবন্ধ, সোশ্যাল মিডিয়া পোস্ট, ওয়েবসাইট কন্টেন্ট, ই-বুক এবং নিউজলেটার।
                        </p>

                        <p className="leading-relaxed text-gray-600 mb-6 text-base sm:text-lg">
                            একটি সফল কন্টেন্ট রাইটিংয়ে মৌলিক তথ্যের পাশাপাশি লেখকের কল্পনা ও সৃজনশীলতারও প্রয়োজন হয়। কন্টেন্ট লেখার সময় লেখককে অবশ্যই তার লক্ষ্য পাঠকদের চাহিদা বুঝতে হবে এবং সেই অনুযায়ী লেখা তৈরি করতে হবে। এর ফলে পাঠকের জন্য তথ্যসমৃদ্ধ এবং আকর্ষণীয় একটি লেখার সৃষ্টি হয়। কন্টেন্ট রাইটিং একটি সৃজনশীল শিল্প এবং এটি একটি গুরুত্বপূর্ণ মার্কেটিং কৌশল, যা ব্র্যান্ডের পরিচিতি ও বিক্রয় বৃদ্ধি করতে সহায়ক। লেখকের শব্দচয়ন, বাক্য গঠন, এবং রচনার গঠন যেনো সবকিছুই পাঠকদের জন্য সুবিধাজনক এবং সহজবোধ্য হয়, তা নিশ্চিত করা প্রয়োজন।
                        </p>

                        <p className="leading-relaxed text-gray-600 mb-6 text-base sm:text-lg">
                            কন্টেন্ট লেখার সময় লেখককে বিভিন্ন দিক বিবেচনা করতে হয়। যেমন, কোন তথ্য পাঠকের জন্য উপকারী হবে, কি ধরনের ভাষা ব্যবহার করা হবে, এবং লেখার স্টাইল কেমন হবে। লেখককে নিশ্চিত করতে হবে যে, লেখাটি আকর্ষণীয়, তথ্যপূর্ণ এবং সহজবোধ্য। এছাড়াও, লেখকের শৈলী এবং টোন লেখার প্রভাব ফেলে, যা পাঠকের মনোযোগ ধরে রাখতে সাহায্য করে। সফল কন্টেন্ট রাইটারদের লেখায় পাঠকের সঙ্গে একটি গভীর সংযোগ তৈরি করার ক্ষমতা থাকে, যা তাদের লেখাকে বিশেষ করে তোলে।
                        </p>



                        {/* এসইও কি? */}
                        <section className="mt-12">
                            <h2 className="text-3xl sm:text-3xl font-bold text-gray-800 mb-6 border-l-4 border-red-500 pl-3">
                                কন্টেন্ট রাইটিং শেখার উপায় সমূহ
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
                                    কন্টেন্ট রাইটিং শেখা একটি অত্যন্ত মূল্যবান দক্ষতা, যা ডিজিটাল মার্কেটিং থেকে শুরু করে ব্যক্তিগত ব্লগ পর্যন্ত সবক্ষেত্রেই গুরুত্বপূর্ণ। তবে কিভাবে এই দক্ষতা অর্জন করবেন? কোর্স, ইন্টার্নশিপ, ইউটিউব টিউটোরিয়াল—কোন উপায়টি সবচেয়ে কার্যকর? কন্টেন্ট রাইটিং শেখার উপায় সমূহ সম্পর্কে নিম্নে বিস্তারিতভাবে আলোচনা করা হলো-
                                </p>


                            </div>
                        </section>

                        {/* SEO কেন করা হয়? */}
                        <section className="mt-12 pt-8 border-t border-gray-200">
                            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-8 border-l-4 border-green-500 pl-3">
                                ১। কন্টেন্ট রাইটিংয়ে কোর্স করে

                            </h1>

                            <div className="w-full mb-6">
                                <img
                                    className="w-full h-auto max-h-96 rounded-lg object-cover shadow-lg"
                                    src="imgas/simpol-bolog-imgas/2.jpg"
                                    alt="Why is SEO done"
                                />
                            </div>

                            <p className="mb-5 text-gray-700 leading-relaxed">
                                অনলাইনে এবং অফলাইনে কন্টেন্ট রাইটিংয়ের অনেক কোর্স পাওয়া যায়। এই কোর্সগুলো সাধারণত বিভিন্ন দক্ষতা স্তরের জন্য তৈরি করা হয়। আপনি শুরু করতে চাইলে একটি মৌলিক কোর্স থেকে শিখতে পারেন। এতে লেখার বিভিন্ন কৌশল, স্টাইল এবং টেকনিক শেখানো হয়। কোর্সে প্রায়শই লেখকের কাছ থেকে প্রতিক্রিয়া পাওয়ার সুযোগ থাকে, যা আপনার লেখার উন্নতি করতে সহায়ক।
                            </p>

                            <p className="mb-8 text-gray-700 leading-relaxed">
                                এই কোর্সগুলোর মাধ্যমে আপনি জানতে পারবেন কীভাবে বিভিন্ন ধরনের কন্টেন্ট তৈরি করতে হয়, যেমন ব্লগ পোস্ট, সোশ্যাল মিডিয়া কন্টেন্ট এবং SEO কন্টেন্ট। আরও বিশেষায়িত কোর্সগুলি থাকে, যেখানে SEO কন্টেন্ট রাইটিং বা মার্কেটিং কন্টেন্ট লেখার উপর ফোকাস করা হয়। এই ধরনের কোর্সগুলোর মাধ্যমে আপনি আপনার লেখার দক্ষতাকে আরো নিখুঁত করতে পারবেন। কোর্সের সময় আপনি অন্যান্য শিক্ষার্থীদের সাথে আলোচনা এবং অভিজ্ঞতা বিনিময় করার সুযোগ পাবেন, যা শেখার প্রক্রিয়াকে আরো উন্নত করে।

                            </p>



                            <p className="mb-8 text-gray-700 leading-relaxed">
                                কিছু প্ল্যাটফর্মে আপনি সনদপত্র অর্জন করতে পারেন, যা আপনার সিভিতে যোগ করতে পারবেন। এটি আপনার চাকরি পাওয়ার সম্ভাবনাও বাড়িয়ে দেয়। সুতরাং, একটি ভালো কন্টেন্ট রাইটিং কোর্স নির্বাচন করা আপনার লেখালেখির দক্ষতা উন্নত করার জন্য একটি কার্যকরী পদক্ষেপ।
                            </p>




                            {/* কারণ ১: ট্রাফিক বৃদ্ধি */}
                            <div className="bg-blue-50 p-6 rounded-xl shadow-inner mb-6">
                                <h1 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-3 flex items-center">
                                    <span className="text-4xl mr-3"></span>
                                    ২। YouTube টিউটোরিয়াল দেখে
                                </h1>

                                <div className="w-full mb-4">
                                    <img
                                        className="w-full h-auto max-h-80 rounded-lg object-cover shadow-md"
                                        src="imgas/simpol-bolog-imgas/3.jpg"
                                        alt="Increase Traffic with SEO"
                                    />
                                </div>

                                <p className="text-gray-700 leading-relaxed mb-4">
                                    YouTube একটি আদর্শ প্ল্যাটফর্ম যেখানে বিভিন্ন বিষয়ে টিউটোরিয়াল পাওয়া যায়। কন্টেন্ট রাইটিংয়ের জন্যও অসংখ্য ভিডিও টিউটোরিয়াল রয়েছে। আপনি এই ভিডিওগুলো দেখে লেখার বিভিন্ন কৌশল শিখতে পারেন। অনেক সফল কন্টেন্ট রাইটার তাদের অভিজ্ঞতা শেয়ার করেন এবং লেখার টিপস ও ট্রিকস দে
                                </p>
                                <p className="text-gray-700 leading-relaxed mb-4">

                                    এই টিউটোরিয়ালগুলো সাধারণত বিনামূল্যে হয়, তাই আপনি সহজেই আপনার সুবিধামত সময়ে দেখে শিখতে পারেন। ভিডিওগুলি চিত্র এবং বাস্তব উদাহরণের মাধ্যমে শেখায়, যা শেখার প্রক্রিয়াকে সহজতর করে। কিছু ভিডিওতে কন্টেন্ট লেখার উদাহরণ দেখানো হয়, যা আপনাকে বাস্তব দৃষ্টিভঙ্গি দেয়।
                                </p>

                                <p className="text-gray-700 leading-relaxed mb-4">
                                    এছাড়া, অনেক ইউটিউবার লেখার সময় যে ভুলগুলো করা উচিত নয় তা নিয়ে আলোচনা করেন। এর ফলে আপনি শিখতে পারবেন কীভাবে সেগুলো এড়িয়ে চলতে হবে। কিছু ইউটিউব চ্যানেল নির্দিষ্ট বিষয়ে কন্টেন্ট লেখার কৌশল নিয়ে বিস্তারিত আলোচনা করে, যা আপনার জ্ঞান বাড়াতে সাহায্য করবে। সুতরাং, ইউটিউবে লেখার টিউটোরিয়াল দেখা আপনার জন্য একটি কার্যকরী উপায় হতে পারে।

                                </p>






                            </div>

                            {/* কারণ ২: ব্র্যান্ডের সচেতনতা বৃদ্ধি */}
                            <div className="bg-green-50 p-6 rounded-xl shadow-inner mb-6">
                                <h1 className="text-2xl sm:text-3xl font-bold text-green-700 mb-3 flex items-center">
                                    <span className="text-4xl mr-3"></span>৩। ব্লগ ও আর্টিকেল পড়ে
                                </h1>

                                <div className="w-full mb-4">
                                    <img
                                        className="w-full h-auto max-h-80 rounded-lg object-cover shadow-md"
                                        src="imgas/simpol-bolog-imgas/4.jpg"
                                        alt="Increase Brand Awareness"
                                    />
                                </div>

                                <p className="text-gray-700 leading-relaxed mb-4">
                                    বিভিন্ন ধরনের ব্লগ ও আর্টিকেল পড়া কন্টেন্ট রাইটিং শেখার একটি চমৎকার উপায়। জনপ্রিয় ব্লগ এবং পোর্টালে অভিজ্ঞ লেখকদের লেখা পড়লে তাদের স্টাইল এবং কৌশলগুলি বোঝা সম্ভব হয়। এতে আপনি বিভিন্ন ধরনের লেখার ধরন এবং বিষয়বস্তু সম্পর্কে ধারণা পাবেন।

                                </p>


                                <p className="mb-8 text-gray-700 leading-relaxed">
                                    নিবন্ধগুলো পাঠকের জন্য তথ্যসমৃদ্ধ ও আকর্ষণীয় করার জন্য কিভাবে লেখা হয়, তা বোঝার চেষ্টা করুন। লেখার বিষয়বস্তু এবং উপস্থাপনার কৌশল সম্পর্কে আপনার ধারণা বাড়ানোর জন্য নিয়মিত ব্লগ পড়া গুরুত্বপূর্ণ। বিভিন্ন লেখকের লেখায় ব্যবহৃত শব্দভাণ্ডার এবং বাক্য গঠনও আপনার লেখার মান উন্নত করতে সাহায্য করবে।
                                </p>

                                <p className="mb-8 text-gray-700 leading-relaxed">
                                    একজন লেখক হিসেবে আপনি সৃজনশীল হতে হলে আপনার লেখার অন্যান্য উদাহরণগুলি জানার প্রয়োজন। বিভিন্ন ধরনের ব্লগ পড়ার মাধ্যমে আপনি বুঝতে পারবেন কোন লেখা পাঠকদের মধ্যে অধিক জনপ্রিয়। আরও ভালো হবে যদি আপনি সেই লেখাগুলোর লেখকদের সাথে যোগাযোগ করেন এবং তাদের অভিজ্ঞতা সম্পর্কে জানার চেষ্টা করেন। এর ফলে আপনার লেখার দক্ষতা আরও বাড়বে।
                                </p>




                            </div>

                            {/* কারণ ৩: ব্যবসার বিক্রি বৃদ্ধি */}
                            <div className="bg-yellow-50 p-6 rounded-xl shadow-inner mb-6">
                                <h1 className="text-2xl sm:text-3xl font-bold text-yellow-700 mb-3 flex items-center">
                                    <span className="text-4xl mr-3"></span>
                                    ৪। কন্টেন্ট রাইটিংয়ে ইন্টার্নশিপ করে
                                </h1>

                                <div className="w-full mb-4">
                                    <img
                                        className="w-full h-auto max-h-80 rounded-lg object-cover shadow-md"
                                        src="imgas/simpol-bolog-imgas/5.jpg"
                                        alt="Increase Business Sales"
                                    />
                                </div>

                                <p className="text-gray-700 leading-relaxed mb-4">
                                    ইন্টার্নশিপ কন্টেন্ট রাইটিং শেখার একটি কার্যকর উপায়। অনেক কোম্পানি তাদের কন্টেন্ট টিমে ইন্টার্ন নিয়োগ করে, যেখানে আপনি বাস্তব পরিবেশে কাজ করার সুযোগ পাবেন। এই অভিজ্ঞতার মাধ্যমে আপনি প্রফেশনাল কন্টেন্ট রাইটিংয়ের স্ট্যান্ডার্ড এবং নিয়ম শিখতে পারবেন।
                                </p>

                                <p className="text-gray-700 leading-relaxed mb-2">
                                    ইন্টার্নশিপের সময়, আপনি বিশেষজ্ঞদের কাছ থেকে গাইডেন্স পাবেন এবং আপনার কাজের ওপর প্রতিক্রিয়া পেয়ে লেখার মান উন্নত করতে পারবেন। এছাড়া, এটি আপনাকে নেটওয়ার্কিংয়ের সুযোগও দেয়, যা ভবিষ্যতে চাকরির ক্ষেত্রে সহায়ক হতে পারে।
                                </p>

                                <p className="text-gray-700 leading-relaxed mb-2">
                                    আপনার কাজের পরিবেশে কিভাবে লেখার মান বাড়ানো যায়, সে সম্পর্কে আপনি ধারণা পাবেন। ইন্টার্নশিপের সময়, আপনি বিভিন্ন ধরনের প্রকল্পে কাজ করবেন এবং একটি পোর্টফোলিও গড়ে তুলতে পারবেন, যা ভবিষ্যতে চাকরির জন্য সাহায্য করবে। এটি আপনার আত্মবিশ্বাস বাড়াতে সহায়ক হবে, কারণ আপনি আপনার কাজের ফলাফল দেখতে পাবেন।
                                </p>





                            </div>
                        </section>

                        {/* বহুল জিজ্ঞাসিত প্রশ্ন ও উত্তর সমূহ (FAQ) */}
                        <section className="mt-12 pt-8 border-t-2 border-dashed border-gray-300">
                            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-6">
                                বহুল জিজ্ঞাসিত প্রশ্ন ও উত্তর সমূহ (FAQ) 💡
                            </h1>
                            <p className="mb-6 text-gray-700">
                                “কন্টেন্ট রাইটিং শেখার উপায় সমূহ” এই বিষয়ে আপনার মনে বেশ কয়েকটি প্রশ্ন উঁকি দিচ্ছে? তাহলে চলুন জেনে নেই সেই সকল প্রশ্ন ও উত্তরগুলো-
                            </p>

                            {/* FAQ আইটেম */}
                            <div className="space-y-4">
                                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                                    <h4 className="text-xl font-semibold text-gray-900 mb-2">কন্টেন্ট রাইটিংয়ের জন্য কি ধরনের দক্ষতা প্রয়োজন?</h4>
                                    <p className="text-gray-600">কন্টেন্ট রাইটিংয়ের জন্য মৌলিক লেখার দক্ষতা, সৃজনশীলতা, গবেষণা দক্ষতা এবং পাঠকের চাহিদা বোঝার ক্ষমতা প্রয়োজন।</p>
                                </div>
                                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                                    <h4 className="text-xl font-semibold text-gray-900 mb-2">কন্টেন্ট রাইটার হওয়ার জন্য কি স্নাতক ডিগ্রি থাকা জরুরি?</h4>
                                    <p className="text-gray-600">কন্টেন্ট রাইটার হওয়ার জন্য স্নাতক ডিগ্রি থাকা জরুরি নয়; তবে যোগাযোগ এবং লেখার দক্ষতা থাকা অপরিহার্য।</p>
                                </div>
                            </div>
                        </section>

                        {/* উপসংহার */}
                        <section className="mt-12 pt-8 border-t border-gray-200">
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-red-500 mb-4">
                                উপসংহার 🌟
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                উপরোক্ত আলোচনা থেকে আমরা কন্টেন্ট রাইটিং শেখার উপায় সমূহ সম্পর্কে বিস্তারিত জানলাম। কন্টেন্ট রাইটিং শেখা একটি ধারাবাহিক প্রক্রিয়া এবং এটি সময় ও প্রচেষ্টার প্রয়োজন। বিভিন্ন উপায়ে কন্টেন্ট রাইটিংয়ের দক্ষতা অর্জন করা সম্ভব, যেমন কোর্স, ইউটিউব, ব্লগ পড়া, ইন্টার্নশিপ, ই-বুক পড়া এবং ওয়ার্কশপে অংশগ্রহণ। নিয়মিত অভ্যাস এবং শেখার মানসিকতা গড়ে তুললে আপনি একজন সফল কন্টেন্ট রাইটার হতে পারবেন। লেখার দক্ষতা উন্নত করতে চাইলে এই সব পদ্ধতি অনুসরণ করতে পারেন। এছাড়াও আপনার জ্ঞানকে প্রসারিত করার জন্য
                                <span className="text-amber-800 font-bold p-2">
                                    কন্টেন্ট রাইটিং কত প্রকার ও কি কি?
                                </span>
                                সম্পর্কে আর্টিকেলটি পড়তে পারেন।
                            </p>
                            <p className="mt-6 text-gray-500 italic">
                                “কন্টেন্ট রাইটিং শেখার উপায় সমূহ” সম্পর্কিত কোন প্রশ্ন থাকে তাহলে অবশ্যই নিচে কমেন্ট করবেন। আর এমন ধরনের গুরুত্বপূর্ণ বিষয় গুলো বিনামূল্যে জানতে আমাদের সাথে থাকবেন। ধন্যবাদ, ভালো থাকুন, সুস্থ থাকুন।🙏
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

export default WhatcontenWriten;
