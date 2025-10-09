

import Sidebar from "@/components/pages/Home/rightSiteHome";
import { useState } from "react";

import { Link } from "react-router-dom";

function HidenTagBolog() {
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
                            src=" imgas/sou-imgas/9.jpg"
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
                            হেডিং ট্যাগ কি? হেডিং ট্যাগ কয়টি ও কি কি?
                        </h1>

                        {/* ভূমিকা */}
                        <p className="leading-relaxed text-gray-600 mb-8 text-base pb-4 sm:text-lg">
                            হেডিং ট্যাগ কি? হেডিং ট্যাগ কয়টি ও কি কি? ওয়েব পেজের কনটেন্টকে গুছিয়ে প্রদর্শন করতে হেডিং ট্যাগ গুরুত্বপূর্ণ ভূমিকা পালন করে। এই ট্যাগগুলো HTML এর মধ্যে বিভিন্ন স্তরে ব্যবহার করা হয়, যা কনটেন্টের গঠন ও গুরুত্ব বোঝাতে সহায়ক। ওয়েব পেজ ডিজাইন এবং ব্লগ লেখার ক্ষেত্রে সঠিকভাবে কনটেন্ট সাজানো অত্যন্ত গুরুত্বপূর্ণ। পাঠকরা সহজেই তথ্য খুঁজে পেতে এবং বুঝতে পারবে এমন একটি উপস্থাপনা সৃষ্টির জন্য হেডিং ট্যাগ একটি মূল ভূমিকা পালন করে। সার্চ ইঞ্জিন অপটিমাইজেশন (SEO) এর জন্যও হেডিং ট্যাগ অপরিহার্য, কারণ এটি সার্চ ইঞ্জিনকে কনটেন্টের গুরুত্ব এবং সংগঠন বুঝতে সাহায্য করে। এই ব্লগ পোস্টে আমরা হেডিং ট্যাগ কি? হেডিং ট্যাগ কয়টি ও কি কি এ সম্পর্কে বিস্তারিত জানবো।
                        </p>




                        <h1 className="text-3xl sm:text-3xl md:text-3xl  font-extrabold mb-6 border-b-4 border-blue-100 pb-4 leading-tight">
                            হেডিং ট্যাগ কি?
                        </h1>

                        <p className="leading-relaxed text-gray-600 mb-6 text-base sm:text-lg">
                            হেডিং ট্যাগ হলো HTML এর একটি ট্যাগ যা ওয়েব পেজের কনটেন্টের শিরোনাম এবং উপ-শিরোনাম প্রদর্শনের জন্য ব্যবহৃত হয়। এটি কনটেন্টকে বিভিন্ন স্তরে বিভক্ত করে এবং একটি সুসংগঠিত স্ট্রাকচার প্রদান করে, যা পাঠকদের জন্য পেজের তথ্য দ্রুত এবং সহজে উপলব্ধ করে। হেডিং ট্যাগগুলি সাধারণত বিভিন্ন স্তরের শিরোনাম প্রদর্শনের জন্য ব্যবহৃত হয় এবং এটি কনটেন্টের বিভিন্ন অংশের গুরুত্ব বুঝাতে সহায়তা করে।
                        </p>

                        <p className="leading-relaxed text-gray-600 mb-6 text-base sm:text-lg">
                            এছাড়া, হেডিং ট্যাগগুলি সার্চ ইঞ্জিনের জন্য কনটেন্টের কাঠামো স্পষ্ট করে, যার ফলে সার্চ ইঞ্জিন সহজে কনটেন্টের বিষয়বস্তু বুঝতে পারে এবং পেজকে সার্চ রেজাল্টে সঠিকভাবে র্যাংক করে।
                        </p>



                        {/* এসইও কি? */}
                        <section className="mt-12">
                            <h2 className="text-3xl sm:text-3xl font-bold text-gray-800 mb-6 border-l-4 border-red-500 pl-3">
                                হেডিং ট্যাগ কয়টি ও কি কি?
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
                                    হেডিং ট্যাগগুলি HTML এর একটি গুরুত্বপূর্ণ অংশ যা ওয়েব পেজের কনটেন্টকে সুশৃঙ্খলভাবে উপস্থাপন করতে সাহায্য করে। এই ট্যাগগুলি বিভিন্ন স্তরের শিরোনাম হিসেবে ব্যবহৃত হয়, যা পেজের তথ্যকে শ্রেণীবদ্ধ করে এবং পাঠকদের জন্য কনটেন্ট সহজে বুঝতে সহায়তা করে। হেডিং ট্যাগ কয়টি ও কি কি এ সম্পর্কে নিচে বিস্তারিত তুলে ধরা হলো –
                                </p>

                                {/* <KeywordTypes /> */}
                            </div>
                        </section>

                        {/* SEO কেন করা হয়? */}
                        <section className="mt-12 pt-8 border-t border-gray-200">




                            <span className="font-bold text-2xl mb-2 text-black"> ১। H1 হেডিং ট্যাগ</span>
                            <p className="mb-5 text-gray-700 leading-relaxed">
                                ওয়েবসাইটের লোডিং স্পিড ব্যবহারকারীর অভিজ্ঞতার একটি মৌলিক অংশ। একটি দ্রুত লোডিং সাইট ব্যবহারকারীর জন্য একটি মসৃণ অভিজ্ঞতা প্রদান করে, যা তাদের সাইটে আরও সময় কাটাতে সহায়ক হয়। ব্যবহারকারীরা ধীরগতির সাইটের কারণে হতাশ হয়ে পড়ে এবং প্রায়ই সাইটটি ত্যাগ করে। গবেষণায় দেখা গেছে, একটি ওয়েবসাইটের লোডিং সময় যদি ৩ সেকেন্ডের বেশি হয়, তবে প্রায় ৪০% ব্যবহারকারী সেই সাইট ত্যাগ করে। দ্রুত লোডিং ওয়েবসাইটগুলি ব্যবহারকারীদের সন্তুষ্টি বৃদ্ধি করে এবং তাদের সাইটে আরও বেশি সময় ধরে রাখতে সহায়ক হয়।
                            </p>



                            <span className="font-bold text-2xl mb-2 text-black">২। H2 হেডিং ট্যাগ</span>
                            <p className="mb-5 text-gray-700 leading-relaxed">
                                H2 হেডিং ট্যাগ হলো দ্বিতীয় স্তরের শিরোনাম যা H1 হেডিংয়ের অধীনে ব্যবহার করা হয়। এটি সাধারণত একটি সেকশনের মূল বিষয়বস্তু বা উপ-বিষয় উপস্থাপন করে। H2 ট্যাগ ব্যবহার করে আপনি পেজের কনটেন্টকে বিভিন্ন সেকশনে ভাগ করতে পারেন, যা পাঠকদের জন্য কনটেন্টের বিভিন্ন অংশ সহজে খুঁজে পাওয়া সম্ভব করে তোলে। এক পেজে একাধিক H2 ট্যাগ ব্যবহার করা যেতে পারে এবং এটি পেজের তথ্যের সাংগঠনিক কাঠামো উন্নত করে।
                            </p>




                            <span className="font-bold text-2xl mb-2 text-black">৩। H3 হেডিং ট্যাগ</span>
                            <p className="mb-5 text-gray-700 leading-relaxed">
                                H3 হেডিং ট্যাগ হলো তৃতীয় স্তরের শিরোনাম, যা H2 হেডিংয়ের অধীনে আরও বিস্তারিত উপ-বিভাগ বা সাবটপিক দেখানোর জন্য ব্যবহৃত হয়। এটি পাঠকদের আরও বিস্তারিত বিষয়বস্তু প্রদান করতে সহায়তা করে এবং কনটেন্টের আরও গভীরে যাওয়ার সুযোগ দেয়। H3 ট্যাগ ব্যবহার করে আপনি H2 হেডিংয়ের বিভিন্ন সেকশনকে আরও ছোট ছোট অংশে ভাগ করতে পারেন, যা পাঠকদের তথ্য খুঁজে পেতে সহজ করে তোলে।
                            </p>



                            <span className="font-bold text-2xl mb-2 text-black">   ৪। H4 হেডিং ট্যাগ</span>
                            <p className="mb-5 text-gray-700 leading-relaxed">
                                H4 হেডিং ট্যাগ হলো চতুর্থ স্তরের শিরোনাম যা H3 হেডিংয়ের অধীনে ব্যবহৃত হয়। এটি আরও বিস্তারিত উপ-বিভাগ বা বিষয়বস্তু উপস্থাপন করতে সাহায্য করে। H4 ট্যাগ ব্যবহার করে আপনি কনটেন্টের বিভিন্ন স্তরকে আরও সূক্ষ্মভাবে উপস্থাপন করতে পারেন, যা পাঠকদের জন্য বিষয়বস্তু সহজভাবে বুঝতে সহায়ক হয়।
                            </p>


                            <span className="font-bold text-2xl mb-2 text-black">৫। H5 হেডিং ট্যাগ</span>
                            <p className="mb-5 text-gray-700 leading-relaxed">
                                H5 হেডিং ট্যাগ হলো পঞ্চম স্তরের শিরোনাম, যা H4 হেডিংয়ের অধীনে আরও বিস্তারিত উপ-বিভাগ দেখানোর জন্য ব্যবহৃত হয়। এটি সাধারণত অত্যন্ত বিস্তারিত তথ্য বা নির্দিষ্ট বিষয়বস্তু প্রদর্শনের জন্য ব্যবহৃত হয়। H5 ট্যাগ ব্যবহারে কনটেন্টের আরও সূক্ষ্ম বিষয়বস্তু পাঠকদের কাছে পৌঁছে যায় এবং কনটেন্টের উপস্থাপনা আরও পরিষ্কার হয়।
                            </p>


                            <span className="font-bold text-2xl mb-2 text-black">৬। H6 হেডিং ট্যাগ</span>
                            <p className="mb-5 text-gray-700 leading-relaxed">
                                H6 হেডিং ট্যাগ হলো ষষ্ঠ স্তরের শিরোনাম, যা H5 হেডিংয়ের অধীনে ব্যবহৃত হয়। এটি সাধারণত সর্বশেষ স্তরের শিরোনাম হিসেবে কাজ করে এবং সবচেয়ে কম গুরুত্বের শিরোনাম হিসেবে ব্যবহৃত হয়। H6 ট্যাগ ব্যবহার করে আপনি কনটেন্টের সর্বশেষ স্তরের বিস্তারিত বিষয়বস্তু প্রদর্শন করতে পারেন।
                            </p>


                            <span className="font-bold text-2xl mb-2 text-black">7| হোস্টিং খরচ কমানো</span>
                            <p className="mb-5 text-gray-700 leading-relaxed">
                                বাজারে প্রতিযোগিতা তীব্র এবং প্রতিদিন নতুন নতুন সাইট উদ্বোধন হচ্ছে। একটি দ্রুত লোডিং সাইট আপনাকে আপনার প্রতিযোগীদের তুলনায় এগিয়ে রাখবে, কারণ ব্যবহারকারীরা সবসময় দ্রুত এবং সুবিধাজনক সেবা পছন্দ করে। আপনার প্রতিযোগী যদি ধীরগতির সাইট ব্যবহার করে, তবে আপনি সহজেই ব্যবহারকারীদের আকর্ষণ করতে পারবেন। একটি দ্রুত লোডিং সাইট ব্যবহারকারীদের জন্য একটি ভাল অভিজ্ঞতা নিশ্চিত করে এবং তাদের আপনার সাইটে ফিরে আসার সম্ভাবনা বাড়ায়।
                            </p>



                            <span className="font-bold text-2xl mb-2 text-black">৮| হোস্টিং খরচ কমানো</span>
                            <p className="mb-5 text-gray-700 leading-relaxed">
                                ওয়েবসাইটের লোডিং স্পিড উন্নত করা হলে, হোস্টিং খরচ কমানো সম্ভব। দ্রুত লোডিং সাইট কম ব্যান্ডউইথ ব্যবহার করে এবং সার্ভারের লোড কমায়, যা হোস্টিং খরচ কমাতে সহায়ক। এছাড়া, সাইট অপ্টিমাইজেশন এবং কম্প্রেশন প্রযুক্তির সাহায্যে সার্ভার রিকোয়েস্ট কমানো যায়, যা দীর্ঘমেয়াদে খরচ কমাতে সহায়ক হয়। দ্রুত লোডিং স্পিড ব্যবস্থাপনা সহজ করে এবং সামগ্রিক হোস্টিং খরচ কমায়।
                            </p>



                            <span className="font-bold text-2xl mb-2 text-black">৯| সাইটের অ্যাক্সেসিবিলিটি বাড়ানো</span>
                            <p className="mb-5 text-gray-700 leading-relaxed">
                                দ্রুত লোডিং সাইটের অ্যাক্সেসিবিলিটি বাড়াতে সহায়ক হয়। একটি ধীরগতির সাইট ব্যবহারকারীদের জন্য অ্যাক্সেস করা কঠিন হতে পারে এবং তারা প্রায়ই অন্য সাইটে চলে যায়। দ্রুত লোডিং সাইট ব্যবহারকারীদের দ্রুত এবং সহজে অ্যাক্সেসযোগ্য করে তোলে, যা তাদের আকর্ষণ করে এবং সাইটে দীর্ঘ সময় ধরে রাখে। এটি সাইটের সামগ্রিক ব্যবহারকারীর অভিজ্ঞতা উন্নত করে এবং গ্রাহকদের সন্তুষ্টি বাড়ায়।
                            </p>




                        </section>

                        {/* বহুল জিজ্ঞাসিত প্রশ্ন ও উত্তর সমূহ (FAQ) */}
                        <section className="mt-12 pt-8 border-t-2 border-dashed border-gray-300">
                            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-6">
                                বহুল জিজ্ঞাসিত প্রশ্ন ও উত্তর সমূহ (FAQ) 💡
                            </h1>
                            <p className="mb-6 text-gray-700">
                                “হেডিং ট্যাগ কি? হেডিং ট্যাগ কয়টি ও কি কি?” এই বিষয়ে আপনার মনে বেশ কয়েকটি প্রশ্ন উঁকি দিচ্ছে? তাহলে চলুন জেনে নেই সেই সকল প্রশ্ন ও উত্তরগুলো-
                            </p>

                            {/* FAQ আইটেম */}
                            <div className="space-y-4">
                                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                                    <h4 className="text-xl font-semibold text-gray-900 mb-2">হেডিং ট্যাগ ব্যবহারের সুবিধা কি?</h4>
                                    <p className="text-gray-600"></p>
                                </div>
                                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                                    <h4 className="text-xl font-semibold text-gray-900 mb-2">ধীরগতির ওয়েবসাইটের কি কি সমস্যা হতে পারে?</h4>
                                    <p className="text-gray-600">হেডিং ট্যাগ ব্যবহার করলে ওয়েব পেজের কনটেন্ট সহজভাবে সংগঠিত হয়, পাঠকদের তথ্য দ্রুত খুঁজে পেতে সহায়তা করে, এবং সার্চ ইঞ্জিনের জন্য পেজের বিষয়বস্তু বুঝতে সহজ করে তোলে।</p>
                                </div>
                            </div>
                        </section>

                        {/* উপসংহার */}
                        <section className="mt-12 pt-8 border-t border-gray-200">
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-red-500 mb-4">
                                উপসংহার 🌟
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                উপরোক্ত আলোচনা থেকে আমরা হেডিং ট্যাগ কি? হেডিং ট্যাগ কয়টি ও কি কি? এ সম্পর্কে বিস্তারিত জানলাম। হেডিং ট্যাগ হল ওয়েব পেজের কনটেন্টকে সুসংগঠিত এবং পাঠকদের জন্য সহজবোধ্য করার একটি গুরুত্বপূর্ণ উপাদান। এটি কেবল কনটেন্টের গুরুত্ব বোঝাতে সাহায্য করে না, বরং সার্চ ইঞ্জিনের জন্যও পেজের বিষয়বস্তু স্পষ্ট করে তোলে। সঠিকভাবে হেডিং ট্যাগ ব্যবহার করলে আপনার ওয়েব পেজের SEO উন্নত হয় এবং পাঠকদের অভিজ্ঞতা আরও উন্নত হয়। তাই, ব্লগ বা ওয়েব পেজ তৈরি করার সময় হেডিং ট্যাগের সঠিক ব্যবহার নিশ্চিত করা উচিত। এছাড়াও আপনার জ্ঞানকে প্রসারিত করার জন্য অন পেজ এসইও তে কি কি করতে হয় সম্পর্কিত আর্টিকেলটি পড়ুন।
                                <span className="text-amber-800 font-bold">
                                    অন পেজ এসইও তে কি কি করতে হয়
                                </span>

                            </p>
                            <p className="mt-6 text-gray-500 italic">
                                “হেডিং ট্যাগ কি? হেডিং ট্যাগ কয়টি ও কি কি?” সম্পর্কিত কোন প্রশ্ন থাকে তাহলে অবশ্যই নিচে কমেন্ট করবেন। আর এমন ধরনের গুরুত্বপূর্ণ বিষয় গুলো বিনামূল্যে জানতে আমাদের সাথে থাকবেন। ধন্যবাদ, ভালো থাকুন, সুস্থ থাকুন।🙏
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

export default HidenTagBolog;
