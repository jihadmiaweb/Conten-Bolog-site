
import Sidebar from "@/components/pages/Home/rightSiteHome";
import { useState } from "react";

import { Link } from "react-router-dom";

function BestHostineCompineaBolog() {
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
                            src="imgas/wev-site-imgas/6.jpg"
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
                            বাংলাদেশের সেরা হোস্টিং কোম্পানি সমূহ
                        </h1>

                        {/* ভূমিকা */}
                        <p className="leading-relaxed text-gray-600 mb-8 text-base pb-4 sm:text-lg">
                            বাংলাদেশের সেরা হোস্টিং কোম্পানি গুলো সম্পর্কে জেনে আমরা আমাদের ওয়েবসাইটের জন্য সবচেয়ে ভালো হোস্টিং প্রোভাইডার নির্বাচন করতে পারি। বর্তমান সময়টা হলো ইন্টারনেটের যুগ। আর এই ইন্টারনেটের যুগে কোনো ব্যক্তি এবং ব্যবসা প্রতিষ্ঠানের জন্য একটি ওয়েবসাইট থাকা অপরিহার্য। কিন্তু যখন আপনি অনলাইনে উপস্থিতি তৈরি করার কথা ভাববেন, তখন শুধুমাত্র একটি ওয়েবসাইট তৈরি করলেই হবেনা। বরং আপনার ওয়েবসাইটের ডেটা সংরক্ষণ এবং বিশ্বব্যাপী ব্যবহারকারীদের কাছে অ্যাক্সেসযোগ্য করার জন্য একটি হোস্টিং প্রোভাইডার প্রয়োজন হবে।
                        </p>
                        <p className="leading-relaxed text-gray-600 mb-8 text-base pb-4 sm:text-lg">
                            আর সে কারণে আজকের এই আর্টিকেলে আমি আপনাকে বাংলাদেশের সেরা হোস্টিং কোম্পানি এর সাথে পরিচয় করিয়ে দিবো। যাদের কাছ থেকে আপনি নিশ্চিন্তে হোস্টিং ক্রয় করতে পারবেন এবং আপনার ওয়েবসাইটকে পরিচালনা করতে পারবেন।
                        </p>



                        <h1 className="text-3xl sm:text-4xl md:text-4xl  font-extrabold mb-6 border-b-4 border-blue-100 pb-4 leading-tight">
                            হোস্টিং কাকে বলে?
                        </h1>

                        <p className="leading-relaxed text-gray-600 mb-6 text-base sm:text-lg">
                            হোস্টিং বলতে বোঝায় আপনার ওয়েবসাইটের ফাইল, ইমেইল, অ্যাপ্লিকেশন বা অন্যান্য ডিজিটাল ডেটা সংরক্ষণের জন্য সার্ভার ব্যবহার করার ব্যবস্থা। সার্ভার হলো একটি শক্তিশালী কম্পিউটার, যা সার্বক্ষণিক ইন্টারনেটের সাথে সংযুক্ত থাকে এবং বিশ্বব্যাপী ব্যবহারকারীদের কাছে ডেটা সরবরাহ করে।
                        </p>

                        <p className="leading-relaxed text-gray-600 mb-6 text-base sm:text-lg">
                            আর এই সার্ভারের সাথে আপনার ওয়েবসাইট যুক্ত থাকার ফলে, যখন কোনো ইউজার তার ব্রাউজারে আপনার ওয়েবসাইটের URL টাইপ করবে। তখন তার কম্পিউটার সেই সার্ভারের সাথে সংযোগ স্থাপন করবে এবং আপনার ওয়েবসাইট এর ডেটা ডাউনলোড করার সুবিধা প্রদান করবে।
                        </p>

                        <h1 className="text-3xl sm:text-4xl md:text-4xl  font-extrabold mb-6 border-b-4 border-blue-100 pb-4 leading-tight">
                            ১। হোস্টিং বাজেট
                        </h1>

                        <p className="leading-relaxed text-gray-600 mb-6 text-base sm:text-lg">
                            হোস্টিং মাসিক ও বাৎসরিক হিসেবে মাত্র কয়েক শত টাকা থেকে শুরু করে হাজার টাকা পর্যন্ত হতে পারে। তাই আপনার বাজেট কত তা নির্ধারণ করে তারপর হোস্টিং প্রোভাইডার বেছে নিতে হবে। তবে মনে রাখবেন, সবচেয়ে ব্যয়বহুল হোস্টিং কিনলেই যে ভালো সুবিধা পাবেন বিষয়টা এমন নয়। বরং আপনার চাহিদা অনুযায়ী সঠিক প্যাকেজ নির্বাচন করাই হবে বুদ্ধিমানের কাজ।
                        </p>

                        <h1 className="text-3xl sm:text-4xl md:text-4xl  font-extrabold mb-6 border-b-4 border-blue-100 pb-4 leading-tight">
                            ২। লোকেশন
                        </h1>

                        <p className="leading-relaxed text-gray-600 mb-6 text-base sm:text-lg">
                            আপনার টার্গেট অডিয়েন্স কোথায়? -সেটি নির্ধারন করা অত্যন্ত গুরুত্বপূর্ণ একটি বিষয়। তাদের কাছে দ্রুত সার্ভিস প্রদানের জন্য আপনার হোস্টিং সার্ভারের অবস্থান সিলেক্ট করতে হবে। যেমন, আপনার টার্গেট অডিয়েন্স যদি বাংলাদেশে থাকে, তাহলে আপনার বাংলাদেশে অবস্থিত সার্ভার ব্যবহার করা ভালো হবে।
                        </p>

                        <h1 className="text-3xl sm:text-4xl md:text-4xl  font-extrabold mb-6 border-b-4 border-blue-100 pb-4 leading-tight">

                            ৩। হোস্টিংয়ের বৈশিষ্ট্য
                        </h1>
                        <p className="leading-relaxed text-gray-600 mb-6 text-base sm:text-lg">
                            বিভিন্ন হোস্টিং কোম্পানি বিভিন্ন বৈশিষ্ট্য প্রদান করে। যেমন, আপনার কত ডিস্ক স্পেস প্রয়োজন হবে, কি পরিমান ব্যান্ডউইথ লাগবে, কত গুলো ইমেইল অ্যাকাউন্ট প্রয়োজন হবে তা ভেবে চিন্তে নির্ধারণ করতে হবে। তবে মাথায় রাখবেন, আপনার প্রয়োজনের চেয়ে বেশি বৈশিষ্ট্যের জন্য অতিরিক্ত টাকা খরচ করার দরকার নেই।
                        </p>


                        <h1 className="text-3xl sm:text-4xl md:text-4xl  font-extrabold mb-6 border-b-4 border-blue-100 pb-4 leading-tight">

                            ৪। আপটাইম
                        </h1>

                        <p className="leading-relaxed text-gray-600 mb-6 text-base sm:text-lg">
                            আপনার ওয়েবসাইট যত বেশি সময় চলবে, ততই ভালো। তাই 99.9% বা তার বেশি আপটাইম সার্ভিস প্রদানকারী কোম্পানি বেছে নিবেন। এরফলে আপনার সাইটের ডাউন হওয়া নিয়ে খুব একটা ভাবতে হবেনা।
                        </p>



                        <h1 className="text-3xl sm:text-4xl md:text-4xl  font-extrabold mb-6 border-b-4 border-blue-100 pb-4 leading-tight">
                            ৫। গ্রাহক সেবা
                        </h1>

                        <p className="leading-relaxed text-gray-600 mb-6 text-base sm:text-lg">
                            আপনার হোস্টিংয়ের কোন সমস্যা হলে কাস্টমার সাপোর্ট নেওয়া অত্যন্ত জরুরি একটি বিষয়। তাই 24/7 গ্রাহক পরিষেবা প্রদানকারী কোম্পানি বেছে নিবেন। তাহলে আপনি যখনি কোনো সমস্যায় পড়বেন ঠিক তখনি হোস্টিং প্রোভাইডারের সাপোর্ট টিম থেকে উক্ত সমস্যা সমাধান করতে পারবেন।
                        </p>



                        <h1 className="text-3xl sm:text-4xl md:text-4xl  font-extrabold mb-6 border-b-4 border-blue-100 pb-4 leading-tight">
                            বাংলাদেশের সেরা হোস্টিং কোম্পানি সমূহ
                        </h1>

                        <p className="leading-relaxed text-gray-600 mb-6 text-base sm:text-lg">
                            নতুন ওয়েবসাইট কিংবা চলমান ওয়েবসাইটের জন্য হোস্টিং ক্রয় করার আগে যে গুরুত্বপূর্ণ বিষয় আছে, সে গুলো নিয়ে উপরে বিস্তারিত বলা হয়েছে। তো এবার আমরা বাংলাদেশের সেরা হোস্টিং কোম্পানি সম্পর্কে জানবো। যারা ইতিমধ্যে বাংলাদেশের মানুষের কাছে বিশ্বস্ততা অর্জন করতে পেরেছে এবং তাদের অনলাইন রেটিং চোখে পড়ার মতো।
                        </p>


                        {/* এসইও কি? */}
                        <section className="mt-12">
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 border-l-4 border-red-500 pl-3">
                                ডোমেইন নেম রেজিস্ট্রেশন করতে হয় কেন?
                            </h2>

                            {/* ইমেজ */}
                            <div className="w-full mb-6">
                                <img
                                    className="w-full h-auto max-h-96 rounded-lg object-cover shadow-lg"
                                    src="imgas/wev-site-imgas/1.jpg"
                                    alt="What is SEO"
                                />
                            </div>

                            {/* কনটেন্ট */}
                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p>
                                    ডোমেইন নামের বিভিন্ন গুরুত্বপূর্ণ কাজ রয়েছে। এটি কেবল একটি ওয়েবসাইটের ঠিকানা বা পরিচয় নয়, বরং এর অনেকগুলো কার্যকরী ভূমিকা রয়েছে। ডোমেইন এর কাজ কি এ সম্পর্কে নিম্নে বিস্তারিতভাবে আলোচনা করা হলো-
                                </p>


                            </div>
                        </section>

                        {/* SEO কেন করা হয়? */}
                        <section className="mt-12 pt-8 border-t border-gray-200">
                            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-8 border-l-4 border-green-500 pl-3">
                                অনন্যতা নিশ্চিতকরণ

                            </h1>

                            <div className="w-full mb-6">
                                <img
                                    className="w-full h-auto max-h-96 rounded-lg object-cover shadow-lg"
                                    src="imgas/wev-site-imgas/3.jpg"
                                    alt="Why is SEO done"
                                />
                            </div>

                            <p className="mb-8 text-gray-700 leading-relaxed">
                                ইন্টারনেটে প্রতিটি ডোমেইন নাম অনন্য হতে হয়। রেজিস্ট্রেশন প্রক্রিয়ার মাধ্যমে এটি নিশ্চিত করা হয় যে আপনার নির্বাচিত নামটি আর কেউ ব্যবহার করতে পারবে না। এটি আপনার ওয়েবসাইটের পরিচয়কে নিশ্চিত করে এবং অন্যান্য সাইট থেকে আলাদা করে। একটি অনন্য ডোমেইন নাম নিশ্চিত করে যে আপনার ওয়েবসাইট একটি নির্দিষ্ট পরিচয় নিয়ে দাঁড়াবে এবং দর্শকদের জন্য সহজে খুঁজে পাওয়া যাবে। এটি ইন্টারনেটের বিশাল সমুদ্রে আপনার ব্র্যান্ডকে আলাদা করে তোলে এবং আপনার দর্শকদের মধ্যে একটি স্বতন্ত্র ছাপ ফেলে।
                            </p>


                            {/* কারণ ১: ট্রাফিক বৃদ্ধি */}
                            <div className="bg-blue-50 p-6 rounded-xl shadow-inner mb-6">
                                <h1 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-3 flex items-center">
                                    <span className="text-4xl mr-3">1️⃣</span>
                                    বিশ্বাসযোগ্যতা বৃদ্ধি
                                </h1>

                                <div className="w-full mb-4">
                                    <img
                                        className="w-full h-auto max-h-80 rounded-lg object-cover shadow-md"
                                        src="imgas/wev-site-imgas/6.jpg"
                                        alt="Increase Traffic with SEO"
                                    />
                                </div>

                                <p className="text-gray-700 leading-relaxed mb-4">
                                    একটি ডোমেইন নাম আপনার ব্যবসা বা ব্যক্তিগত ওয়েবসাইটের জন্য পেশাদারিত্বের প্রতীক। এটি দর্শকদের মধ্যে বিশ্বাসযোগ্যতা ও গ্রহণযোগ্যতা বাড়ায়। একটি ভালো ডোমেইন নাম দর্শকদের মনোযোগ আকর্ষণ করে এবং তাদের মধ্যে একটি ইতিবাচক ধারণা সৃষ্টি করে। যদি আপনার একটি পেশাদার ডোমেইন নাম থাকে, তাহলে দর্শকরা আপনার ওয়েবসাইটকে আরও বিশ্বাস করবে এবং আপনার প্রদত্ত তথ্য, পণ্য বা পরিষেবার উপর আরও আস্থা স্থাপন করবে।

                                </p>





                            </div>

                            {/* কারণ ২: ব্র্যান্ডের সচেতনতা বৃদ্ধি */}
                            <div className="bg-green-50 p-6 rounded-xl shadow-inner mb-6">
                                <h1 className="text-2xl sm:text-3xl font-bold text-green-700 mb-3 flex items-center">
                                    <span className="text-4xl mr-3">2️⃣</span> ব্র্যান্ডিং এবং মার্কেটিং
                                </h1>

                                <div className="w-full mb-4">
                                    <img
                                        className="w-full h-auto max-h-80 rounded-lg object-cover shadow-md"
                                        src="imgas/wev-site-imgas/5.jpg"
                                        alt="Increase Brand Awareness"
                                    />
                                </div>

                                <p className="text-gray-700 leading-relaxed mb-4">
                                    ডোমেইন নামটি আপনার ব্র্যান্ডের একটি গুরুত্বপূর্ণ অংশ। একটি সহজে মনে রাখা এবং প্রাসঙ্গিক নাম আপনার ব্যবসার প্রচারণা এবং গ্রাহকদের সাথে সংযোগ স্থাপনের জন্য সহায়ক হয়। একটি ভালো ডোমেইন নাম আপনার ব্র্যান্ডের সচেতনতা বাড়াতে এবং আপনার লক্ষ্য বাজারে পৌঁছাতে সাহায্য করে। আপনার ডোমেইন নামটি যদি আপনার ব্যবসার নাম বা প্রধান কার্যকলাপের সাথে সামঞ্জস্যপূর্ণ হয়, তাহলে এটি দর্শকদের মনের মধ্যে একটি স্থায়ী ছাপ ফেলে এবং আপনার ব্র্যান্ডের পরিচিতি বাড়ায়। এছাড়া, আপনার ডোমেইন নামটি যদি সহজে উচ্চারণযোগ্য এবং সংক্ষিপ্ত হয়, তাহলে এটি দর্শকদের জন্য সহজে মনে রাখা এবং শেয়ার করা সহজ হবে।

                                </p>

                            </div>

                            {/* কারণ ৩: ব্যবসার বিক্রি বৃদ্ধি */}
                            <div className="bg-yellow-50 p-6 rounded-xl shadow-inner mb-6">
                                <h1 className="text-2xl sm:text-3xl font-bold text-yellow-700 mb-3 flex items-center">
                                    <span className="text-4xl mr-3">3️⃣</span>
                                    আইনি সুরক্ষা
                                </h1>

                                <div className="w-full mb-4">
                                    <img
                                        className="w-full h-auto max-h-80 rounded-lg object-cover shadow-md"
                                        src="imgas/wev-site-imgas/7.jpg"
                                        alt="Increase Business Sales"
                                    />
                                </div>

                                <p className="text-gray-700 leading-relaxed mb-4">
                                    ডোমেইন নাম রেজিস্ট্রেশন আপনাকে আইনি সুরক্ষা প্রদান করে। এটি নিশ্চিত করে যে আপনার নামটি কপিরাইট বা ট্রেডমার্ক আইন দ্বারা সুরক্ষিত। এটি অন্য কেউ আপনার ডোমেইন নাম ব্যবহার করতে পারে না এবং আপনার নামের অধিকার নিশ্চিত করে। আইনি সুরক্ষা নিশ্চিত করার মাধ্যমে, আপনি আপনার ব্যবসার নাম এবং ব্র্যান্ডকে অননুমোদিত ব্যবহার থেকে রক্ষা করতে পারেন। এটি কেবল আপনার ব্র্যান্ডের সুরক্ষাই নয়, বরং এটি একটি শক্তিশালী আইনি ভিত্তি স্থাপন করে যা আপনার ব্যবসাকে ভবিষ্যতে আরও স্থিতিশীল করে তোলে।

                                </p>




                            </div>
                        </section>

                        {/* বহুল জিজ্ঞাসিত প্রশ্ন ও উত্তর সমূহ (FAQ) */}
                        <section className="mt-12 pt-8 border-t-2 border-dashed border-gray-300">
                            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-6">
                                বহুল জিজ্ঞাসিত প্রশ্ন ও উত্তর সমূহ (FAQ) 💡
                            </h1>
                            <p className="mb-6 text-gray-700">
                                “ডোমেইন নেম রেজিস্ট্রেশন করতে হয় কেন?” এই বিষয়ে আপনার মনে বেশ কয়েকটি প্রশ্ন উঁকি দিচ্ছে? তাহলে চলুন জেনে নেই সেই সকল প্রশ্ন ও উত্তরগুলো-
                            </p>

                            {/* FAQ আইটেম */}
                            <div className="space-y-4">
                                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                                    <h4 className="text-xl font-semibold text-gray-900 mb-2">ডোমেইন এর কাজ কি?</h4>
                                    <p className="text-gray-600">ডোমেইন হলো ইন্টারনেটে একটি ওয়েবসাইটের ঠিকানা যা ব্যবহারকারীদের নির্দিষ্ট ওয়েবসাইটে পৌঁছানোর জন্য ব্যবহৃত হয়। এটি মূলত একটি পাঠযোগ্য URL যা আইপি ঠিকানার পরিবর্তে সহজে মনে রাখা যায়।</p>
                                </div>
                                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                                    <h4 className="text-xl font-semibold text-gray-900 mb-2">সবচেয়ে ভালো ওয়েব ডোমেইন কোনটি?</h4>
                                    <p className="text-gray-600">সর্বোত্তম ওয়েব ডোমেইন হলো .com, কারণ এটি সবচেয়ে জনপ্রিয় এবং বিশ্বাসযোগ্য। এছাড়া, .org ও .netও ভালো বিকল্প হিসেবে বিবেচিত হয়।</p>
                                </div>
                            </div>
                        </section>

                        {/* উপসংহার */}
                        <section className="mt-12 pt-8 border-t border-gray-200">
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-red-500 mb-4">
                                উপসংহার 🌟
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                উপরোক্ত আলোচনা থেকে আমরা ডোমেইন নেম রেজিস্ট্রেশন করতে হয় কেন? সম্পর্কে বিস্তারিত জানলাম। ডোমেইন নাম একটি ওয়েবসাইটের পরিচয়পত্র। এটি আপনার অনলাইন উপস্থিতির ভিত্তি এবং ডিজিটাল বিশ্বে আপনার পরিচিতি সুনিশ্চিত করে। ডোমেইন নাম রেজিস্ট্রেশন করে আপনি আপনার ওয়েবসাইটের নিরাপত্তা, ব্র্যান্ডিং এবং বিশ্বাসযোগ্যতা নিশ্চিত করতে পারেন। ইন্টারনেটে আপনার একটি দৃঢ় উপস্থিতি গড়ে তুলতে ডোমেইন নাম রেজিস্ট্রেশন অত্যন্ত গুরুত্বপূর্ণ। এটি শুধু আপনার ওয়েবসাইটের পরিচয় নয়, বরং এটি আপনার ব্র্যান্ডের একটি গুরুত্বপূর্ণ অংশ যা আপনার ব্যবসা বা ব্যক্তিগত প্রচেষ্টাকে আরও এগিয়ে নিয়ে যেতে সাহায্য করে। সুতরাং, যদি আপনি এখনও আপনার ডোমেইন নাম রেজিস্ট্রেশন না করে থাকেন, তবে আজই এটি করার সময় এসেছে। এছাড়াও আপনার জ্ঞানকে প্রসারিত করার জন্য
                                <span className="text-amber-800 font-bold">
                                    বাংলাদেশের সেরা হোস্টিং কোম্পানি সমূহ
                                </span>
                                সম্পর্কিত আর্টিকেলটি পড়ুন।
                            </p>
                            <p className="mt-6 text-gray-500 italic">
                                “ডোমেইন নেম রেজিস্ট্রেশন করতে হয় কেন?” সম্পর্কিত কোন প্রশ্ন থাকে তাহলে অবশ্যই নিচে কমেন্ট করবেন। আর এমন ধরনের গুরুত্বপূর্ণ বিষয় গুলো বিনামূল্যে জানতে আমাদের সাথে থাকবেন। ধন্যবাদ, ভালো থাকুন, সুস্থ থাকুন।🙏
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

export default BestHostineCompineaBolog;
