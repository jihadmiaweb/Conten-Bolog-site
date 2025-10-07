
import Sidebar from "@/components/pages/Home/rightSiteHome";
import { useState } from "react";

import { Link } from "react-router-dom";

function CreatewevsiteitemBolg() {
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
                            src="imgas/wev-site-imgas/4.jpg"
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
                        <h1 className="text-3xl sm:text-4xl md:text-4xl  font-extrabold text-blue-700 mb-6 border-b-4 border-blue-100 pb-4 leading-tight">
                            ওয়েবসাইট তৈরি করতে কি কি লাগে?
                        </h1>

                        {/* ভূমিকা */}
                        <p className="leading-relaxed text-gray-600 mb-8 text-base pb-4 sm:text-lg">
                            ওয়েবসাইট তৈরি করতে কি কি লাগে এ সম্পর্কে জেনে নিজের ওয়েবসাইট তৈরীর পরিকল্পনা করতে পারেন। আজকের যুগে ডিজিটাল প্রযুক্তি আমাদের দৈনন্দিন জীবনের অঙ্গ হয়ে উঠেছে। ইন্টারনেটের ব্যাপক বিস্তৃতি ও সহজলভ্যতার কারণে, এটি এখন মানুষের জীবনের এক অপরিহার্য অংশ। আমরা এখন তথ্য অনুসন্ধান, যোগাযোগ, কেনাকাটা, বিনোদন, শিক্ষা এবং ব্যবসার জন্য ইন্টারনেটের ওপর নির্ভরশীল। এই বিশাল ডিজিটাল জগতের একটি গুরুত্বপূর্ণ উপাদান হলো ওয়েবসাইট।
                        </p>
                        <p className="leading-relaxed text-gray-600 mb-8 text-base pb-4 sm:text-lg">
                            একটি ভালোভাবে ডিজাইন ও উন্নত ওয়েবসাইট শুধু মাত্র একটি অনলাইন উপস্থিতি নয়, বরং এটি একটি শক্তিশালী বিপণন ও যোগাযোগ মাধ্যম। কিন্তু একটি ওয়েবসাইট কিভাবে তৈরি হয় এবং তার পেছনে কী কী প্রযুক্তি ও উপকরণ ব্যবহৃত হয়, সে সম্পর্কে অনেকেই অজ্ঞাত। আজকের ব্লগ পোস্টে আমি একটি সম্পূর্ণ ওয়েবসাইট তৈরি করতে কি কি লাগে এ সম্পর্কে বিস্তারিত আলোচনা করব।
                        </p>

                        <h1 className="text-3xl sm:text-4xl md:text-4xl  font-extrabold mb-6 border-b-4 border-blue-100 pb-4 leading-tight">
                            ওয়েবসাইট কি?
                        </h1>

                        <p className="leading-relaxed text-gray-600 mb-6 text-base sm:text-lg">
                            ওয়েবসাইট হচ্ছে একটি ডিজিটাল প্ল্যাটফর্ম যা ইন্টারনেটের মাধ্যমে এক্সেস করা যায় এবং যেখানে বিভিন্ন ধরনের কনটেন্ট, যেমন তথ্য, ছবি, ভিডিও, ব্লগ পোস্ট, এবং অন্যান্য মিডিয়া উপস্থাপন করা হয়। এটি একটি নির্দিষ্ট ডোমেইন নামের মাধ্যমে অ্যাক্সেসযোগ্য হয়, যা ব্যবহারকারীদের ওয়েবসাইটের ঠিকানা হিসেবে কাজ করে। একটি ওয়েবসাইট বিভিন্ন ধরণের হতে পারে, যেমন:
                        </p>

                        <span className="leading-relaxed text-gray-600 mb-8 text-base sm:text-lg">
                            ডোমেইন নামগুলি মূলত দুইটি অংশে বিভক্ত: প্রথম অংশটি হলো নাম (যেমন “example”) এবং দ্বিতীয় অংশটি হলো টপ-লেভেল ডোমেইন (TLD) যা “com”, “org” ইত্যাদি হতে পারে। TLD-এর মাধ্যমে ওয়েবসাইটের উদ্দেশ্য বা প্রকার বোঝা যায়।
                        </span>



                        {/* এসইও কি? */}
                        <section className="mt-12">
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 border-l-4 border-red-500 pl-3">
                                ডোমেইন এর কাজ কি?
                            </h2>

                            {/* ইমেজ */}
                            <div className="w-full mb-6">
                                <img
                                    className="w-full h-auto max-h-96 rounded-lg object-cover shadow-lg"
                                    src="imgas/wev-site-imgas/2.jpg"
                                    alt="What is SEO"
                                />
                            </div>

                            {/* কনটেন্ট */}
                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p>
                                    ডোমেইন নামের বিভিন্ন গুরুত্বপূর্ণ কাজ রয়েছে। এটি কেবল একটি ওয়েবসাইটের ঠিকানা বা পরিচয় নয়, বরং এর অনেকগুলো কার্যকরী ভূমিকা রয়েছে। ডোমেইন এর কাজ কি এ সম্পর্কে নিম্নে বিস্তারিতভাবে আলোচনা করা হলো-
                                </p>
                                <p className="text-gray-700 text-sm mb-8 sm:text-base leading-relaxed">
                                    <span className="font-bold"> ব্যক্তিগত ব্লগ:</span>
                                    যেখানে ব্যক্তির দৈনন্দিন জীবন, অভিজ্ঞতা বা চিন্তা-ভাবনা শেয়ার করা হয়।
                                </p>

                                <p className="text-gray-700 text-sm mb-8 sm:text-base leading-relaxed">
                                    <span className="font-bold"> কর্পোরেট ওয়েবসাইট: </span>
                                    একটি প্রতিষ্ঠানের পণ্য, সেবা, এবং অন্যান্য তথ্য প্রদর্শন করে।
                                </p>

                                <p className="text-gray-700 text-sm mb-8 sm:text-base leading-relaxed">
                                    <span className="font-bold"> ই-কমার্স সাইট:</span>
                                    যেখানে অনলাইনে পণ্য ও সেবা বিক্রি হয়।
                                </p>

                                <p className="text-gray-700 text-sm mb-8 sm:text-base leading-relaxed">
                                    <span className="font-bold">শিক্ষামূলক ওয়েবসাইট:  </span>
                                    যা শিক্ষার উদ্দেশ্যে তৈরি এবং বিভিন্ন শিক্ষা উপকরণ প্রদান করে।
                                </p>
                                <p className="text-gray-700 text-sm mb-8 sm:text-base leading-relaxed">
                                    <span className="font-bold">সামাজিক নেটওয়ার্কিং সাইট: </span>
                                    যা মানুষের মধ্যে যোগাযোগ ও মিথস্ক্রিয়া স্থাপন করে।
                                </p>
                                <p className="text-gray-700 text-sm mb-8 sm:text-base leading-relaxed">
                                    ওয়েবসাইটের উদ্দেশ্য ও লক্ষ্য অনুসারে তার ডিজাইন ও কনটেন্ট পরিবর্তিত হতে পারে, তবে সকলের মূল উদ্দেশ্যই হলো ব্যবহারকারীদের তথ্য প্রদান ও তাদের প্রয়োজনীয়তা পূরণ করা।
                                </p>

                            </div>
                        </section>

                        {/* SEO কেন করা হয়? */}
                        <section className="mt-12 pt-8 border-t border-gray-200">
                            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-8 border-l-4 border-green-500 pl-3">
                                ওয়েবসাইট তৈরি করতে কি কি লাগে?

                            </h1>

                            <div className="w-full mb-6">
                                <img
                                    className="w-full h-auto max-h-96 rounded-lg object-cover shadow-lg"
                                    src="imgas/wev-site-imgas/3.jpg"
                                    alt="Why is SEO done"
                                />
                            </div>

                            <p className="mb-8 text-gray-700 leading-relaxed">
                                ডোমেইন নাম ওয়েবসাইটের একটি ইউনিক ঠিকানা তৈরি করে। এটি ব্যবহারকারীদেরকে আপনার ওয়েবসাইটে প্রবেশের জন্য একটি সহজ পথ প্রদান করে। ঠিক যেমন একটি বাড়ির ঠিকানা দিয়ে মানুষ সেই বাড়ি খুঁজে পায়, তেমনই ডোমেইন নামের মাধ্যমে ব্যবহারকারীরা সহজেই আপনার ওয়েবসাইটে পৌঁছাতে পারে।
                            </p>
                            <p className="mb-8 text-gray-700 leading-relaxed">
                                একটি সঠিক ডোমেইন নাম ব্যবহারকারীদের মনে রাখা সহজ হয় এবং এটি ব্যবহারকারীদেরকে আরও ভালো অভিজ্ঞতা প্রদান করে। উদাহরণস্বরূপ, “yourbusiness.com”  এর মতো সহজ এবং স্বচ্ছ ডোমেইন নাম ব্যবহারকারীদের কাছে আপনাকে পরিচিত করে তোলে।
                            </p>

                            {/* কারণ ১: ট্রাফিক বৃদ্ধি */}
                            <div className="bg-blue-50 p-6 rounded-xl shadow-inner mb-6">
                                <h1 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-3 flex items-center">
                                    <span className="text-4xl mr-3">1️⃣</span>
                                    ডোমেইন নাম
                                </h1>

                                <div className="w-full mb-4">
                                    <img
                                        className="w-full h-auto max-h-80 rounded-lg object-cover shadow-md"
                                        src="imgas/wev-site-imgas/6.jpg"
                                        alt="Increase Traffic with SEO"
                                    />
                                </div>

                                <p className="text-gray-700 leading-relaxed mb-4">
                                    আমাদের মধ্যে অনেকেই মনে করেন যে, ডোমেইন নেম কেন রেজিস্ট্রেশন করতে হয়? ডোমেইন নাম হলো ওয়েবসাইটের পরিচিতি বা ঠিকানা। এটি ইন্টারনেটে কোনো ওয়েবসাইট খুঁজে পেতে সাহায্য করে। যেমন Example.com একটি ডোমেইন নাম। এটি ব্যবহারকারীদের ওয়েবসাইটে সহজে প্রবেশ করতে সহায়তা করে।

                                </p>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    ডোমেইন নাম হলো একটি ওয়েবসাইটের অনন্য ঠিকানা যা ইন্টারনেটের মাধ্যমে ওয়েবসাইটে প্রবেশ করতে সাহায্য করে। এটি ব্যবহারকারীদের স্মরণীয় ও সহজে খুঁজে পাওয়ার মতো একটি নাম হওয়া উচিত। ডোমেইন নাম নির্বাচনের সময় কিছু বিষয় বিবেচনায় রাখতে হয়:

                                </p>
                                <p className="text-gray-700 text-sm mb-8 sm:text-base leading-relaxed">
                                    <span className="font-bold">সহজ এবং মনে রাখার মতো:  </span>
                                    একটি সহজ ও ছোট নাম ব্যবহারকারীদের মনে রাখা সহজ করে।
                                </p>
                                <p className="text-gray-700 text-sm mb-8 sm:text-base leading-relaxed">
                                    <span className="font-bold"> বিষয়বস্তু অনুসারে:</span>
                                    ডোমেইন নামটি আপনার ওয়েবসাইটের কনটেন্ট বা ব্যবসার সাথে সম্পর্কিত হওয়া উচিত।
                                </p>
                                <p className="text-gray-700 text-sm mb-8 sm:text-base leading-relaxed">
                                    <span className="font-bold"> SEO-ফ্রেন্ডলি: </span>
                                    কিছু কিওয়ার্ড অন্তর্ভুক্ত করলে সার্চ ইঞ্জিনে র‍্যাংকিং উন্নত করতে সাহায্য করতে পারে।
                                </p>

                                <p className="text-gray-700 text-sm mb-8 sm:text-base leading-relaxed">
                                    ডোমেইন নাম কেনার জন্য বিভিন্ন ডোমেইন রেজিস্ট্রার যেমন GoDaddy, Namecheap, বা Google Domains ব্যবহার করা যেতে পারে। এছাড়া, ডোমেইন নামের বৈধতা ও রেজিস্ট্রেশন সময় সীমাও নজরে রাখতে হবে।

                                </p>




                            </div>

                            {/* কারণ ২: ব্র্যান্ডের সচেতনতা বৃদ্ধি */}
                            <div className="bg-green-50 p-6 rounded-xl shadow-inner mb-6">
                                <h1 className="text-2xl sm:text-3xl font-bold text-green-700 mb-3 flex items-center">
                                    <span className="text-4xl mr-3">2️⃣</span> ওয়েব হোস্টিং
                                </h1>

                                <div className="w-full mb-4">
                                    <img
                                        className="w-full h-auto max-h-80 rounded-lg object-cover shadow-md"
                                        src="imgas/wev-site-imgas/5.jpg"
                                        alt="Increase Brand Awareness"
                                    />
                                </div>

                                <p className="text-gray-700 leading-relaxed mb-4">
                                    ওয়েব হোস্টিং হলো সেই জায়গা যেখানে আপনার ওয়েবসাইটের সমস্ত ফাইল, ডেটা, এবং কনটেন্ট সংরক্ষিত থাকে। এটি একটি সার্ভারে হোস্ট করা হয় যা ২৪/৭ ইন্টারনেটের সাথে সংযুক্ত থাকে, ফলে যেকোনো সময় আপনার ওয়েবসাইট অ্যাক্সেসযোগ্য হয়।

                                </p>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    ওয়েব হোস্টিং হলো সেই সেবা যা আপনার ওয়েবসাইটের ফাইল ও ডেটা সংরক্ষণ করে এবং ইন্টারনেটের মাধ্যমে ব্যবহারকারীদের জন্য অ্যাক্সেসযোগ্য করে তোলে। বিভিন্ন ধরনের ওয়েব হোস্টিং সেবা উপলব্ধ রয়েছে, যেমন:

                                </p>
                                <p className="text-gray-700 text-sm mb-8 sm:text-base leading-relaxed">
                                    <span className="font-bold">  নিরাপত্তা: </span>
                                    SSL সার্টিফিকেট ব্যবহারকারীর তথ্য এনক্রিপ্ট করে, যা হ্যাকিং থেকে রক্ষা করে।
                                </p>

                                <p className="text-gray-700 text-sm mb-8 sm:text-base leading-relaxed">
                                    <span className="font-bold">   বিশ্বাসযোগ্যতা: </span>
                                    একটি ‘https’ URL এবং তালাবন্ধ চিহ্ন ব্যবহারকারীদের কাছে আপনার ওয়েবসাইটের বিশ্বাসযোগ্যতা বৃদ্ধি করে।
                                </p>

                                <p className="text-gray-700 text-sm mb-8 sm:text-base leading-relaxed">
                                    <span className="font-bold">   SEO সুবিধা: </span>
                                    গুগল সহ সার্চ ইঞ্জিনগুলো SSL-যুক্ত সাইটগুলোকে অগ্রাধিকার দেয়।
                                </p>

                                <p className="text-gray-700 text-sm mb-8 sm:text-base leading-relaxed">
                                    SSL সার্টিফিকেট কেনার জন্য বিভিন্ন সেবা প্রদানকারী প্রতিষ্ঠান যেমন Comodo, DigiCert, এবং Let’s Encrypt থেকে নির্বাচন করা যেতে পারে।
                                </p>


                            </div>

                            {/* কারণ ৩: ব্যবসার বিক্রি বৃদ্ধি */}
                            <div className="bg-yellow-50 p-6 rounded-xl shadow-inner mb-6">
                                <h1 className="text-2xl sm:text-3xl font-bold text-yellow-700 mb-3 flex items-center">
                                    <span className="text-4xl mr-3">3️⃣</span>
                                    ওয়েব ডেভেলপমেন্ট প্ল্যাটফর্ম
                                </h1>

                                <div className="w-full mb-4">
                                    <img
                                        className="w-full h-auto max-h-80 rounded-lg object-cover shadow-md"
                                        src="imgas/wev-site-imgas/1.jpg"
                                        alt="Increase Business Sales"
                                    />
                                </div>

                                <p className="text-gray-700 leading-relaxed mb-4">
                                    ওয়েবসাইট তৈরি করতে সাধারণত কিছু প্ল্যাটফর্ম ব্যবহার করা হয় যেমন WordPress, Blogger, বা Wix। এই প্ল্যাটফর্মগুলো ব্যবহার করে ওয়েবসাইট তৈরি করা সহজ হয় এবং কোনো প্রকার কোডিং জ্ঞান ছাড়াই আপনি ওয়েবসাইট ডেভেলপ করতে পারেন। ওয়েব ডেভেলপমেন্ট প্ল্যাটফর্ম এমন সফটওয়্যার বা সেবা যা ব্যবহার করে ওয়েবসাইট তৈরি করা যায়। এই প্ল্যাটফর্মগুলির মধ্যে বেশ কিছু জনপ্রিয় প্ল্যাটফর্ম রয়েছে, যেমন:
                                </p>

                                <p className="text-gray-700 text-sm mb-8 sm:text-base leading-relaxed">
                                    <span className="font-bold"> WordPress:  </span>
                                    এটি একটি ওপেন-সোর্স প্ল্যাটফর্ম যা ব্লগ থেকে শুরু করে বড় ই-কমার্স সাইট পর্যন্ত তৈরি করতে ব্যবহৃত হয়। এর বিস্তৃত প্লাগইন এবং থিমগুলি ওয়েবসাইট কাস্টমাইজ করতে সহায়ক।
                                </p>
                                <p className="text-gray-700 text-sm mb-8 sm:text-base leading-relaxed">
                                    <span className="font-bold">  Joomla: </span>
                                    একটি শক্তিশালী এবং নমনীয় প্ল্যাটফর্ম যা সামজিক নেটওয়ার্কিং সাইট এবং কর্পোরেট সাইট তৈরিতে ব্যবহৃত হয়।
                                </p>
                                <p className="text-gray-700 text-sm mb-8 sm:text-base leading-relaxed">
                                    <span className="font-bold"> Drupal: </span>
                                    এটি একটি উচ্চমানের কন্টেন্ট ম্যানেজমেন্ট সিস্টেম যা বড় ও জটিল ওয়েবসাইটের জন্য উপযুক্ত।
                                </p>
                                <p className="text-gray-700 text-sm mb-8 sm:text-base leading-relaxed">
                                    <span className="font-bold">  Wix: </span>
                                    এটি একটি ড্র্যাগ-এন্ড-ড্রপ প্ল্যাটফর্ম যা ব্যবহারকারীদের কোডিং ছাড়াই ওয়েবসাইট তৈরি করতে দেয়।
                                </p>



                                <p className="text-gray-700 leading-relaxed mb-4">
                                    প্রতিটি প্ল্যাটফর্মের নিজস্ব সুবিধা ও সীমাবদ্ধতা রয়েছে, তাই আপনার সাইটের প্রয়োজনীয়তার ওপর ভিত্তি করে সঠিক প্ল্যাটফর্ম নির্বাচন করা উচিত।
                                </p>

                            </div>
                        </section>

                        {/* বহুল জিজ্ঞাসিত প্রশ্ন ও উত্তর সমূহ (FAQ) */}
                        <section className="mt-12 pt-8 border-t-2 border-dashed border-gray-300">
                            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-6">
                                বহুল জিজ্ঞাসিত প্রশ্ন ও উত্তর সমূহ (FAQ) 💡
                            </h1>
                            <p className="mb-6 text-gray-700">
                                “ওয়েবসাইট তৈরি করতে কি কি লাগে?” এই বিষয়ে আপনার মনে বেশ কয়েকটি প্রশ্ন উঁকি দিচ্ছে? তাহলে চলুন জেনে নেই সেই সকল প্রশ্ন ও উত্তরগুলো-
                            </p>

                            {/* FAQ আইটেম */}
                            <div className="space-y-4">
                                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                                    <h4 className="text-xl font-semibold text-gray-900 mb-2">ওয়েবসাইট তৈরীর জন্য কোন প্ল্যাটফর্ম ব্যবহার করা উচিত?</h4>
                                    <p className="text-gray-600">আপনি ওয়েবসাইট তৈরীর জন্য WordPress, Wix, বা Squarespace ব্যবহার করতে পারেন। প্রতিটি প্ল্যাটফর্মের নিজস্ব সুবিধা ও সীমাবদ্ধতা রয়েছে, তাই আপনার প্রয়োজন অনুযায়ী বেছে নিন।</p>
                                </div>
                                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                                    <h4 className="text-xl font-semibold text-gray-900 mb-2">ওয়েবসাইট তৈরী করতে কত সময় লাগে?</h4>
                                    <p className="text-gray-600">ওয়েবসাইট তৈরীর সময় আপনার প্রোজেক্টের জটিলতা ও ডিজাইন অনুযায়ী পরিবর্তিত হয়। সাধারণভাবে, একটি মৌলিক ওয়েবসাইট তৈরী করতে ১-২ সপ্তাহ লাগতে পারে।</p>
                                </div>
                            </div>
                        </section>

                        {/* উপসংহার */}
                        <section className="mt-12 pt-8 border-t border-gray-200">
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-red-500 mb-4">
                                উপসংহার 🌟
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                উপরোক্ত আলোচনা থেকে আমরা ওয়েবসাইট তৈরি করতে কি কি লাগে এ সম্পর্কে বিস্তারিত জানলাম। ওয়েবসাইট তৈরি একটি জটিল প্রক্রিয়া হলেও, সঠিক উপকরণ ও প্রযুক্তি ব্যবহার করে এটি সহজ ও কার্যকরীভাবে সম্পন্ন করা যায়। ডোমেইন নাম থেকে শুরু করে হোস্টিং, ডিজাইন, ডেভেলপমেন্ট, এবং SEO সবকিছুই গুরুত্বপূর্ণ ভূমিকা পালন করে একটি সফল ওয়েবসাইট তৈরিতে। যেকোনো ব্যক্তি বা প্রতিষ্ঠান যদি একটি ওয়েবসাইট তৈরি করতে চায়, তাহলে এ বিষয়গুলো সম্পর্কে ভালোভাবে জানা প্রয়োজন। এছাড়াও আপনার জ্ঞানকে প্রসারিত করার জন্য ব্লগ কি? কিভাবে ব্লগ সাইট বানাব? সম্পর্কিত আর্টিকেলটি পড়ুন।
                            </p>
                            <p className="mt-6 text-gray-500 italic">
                                “ওয়েবসাইট তৈরি করতে কি কি লাগে?” সম্পর্কিত কোন প্রশ্ন থাকে তাহলে অবশ্যই নিচে কমেন্ট করবেন। আর এমন ধরনের গুরুত্বপূর্ণ বিষয় গুলো বিনামূল্যে জানতে আমাদের সাথে থাকবেন। ধন্যবাদ, ভালো থাকুন, সুস্থ থাকুন।🙏
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

export default CreatewevsiteitemBolg;
