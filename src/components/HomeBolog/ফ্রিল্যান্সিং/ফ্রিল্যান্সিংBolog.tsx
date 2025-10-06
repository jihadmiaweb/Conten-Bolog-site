
import Sidebar from "@/components/pages/Home/rightSiteHome";
import { useState } from "react";

import { Link } from "react-router-dom";

function FreelancingBolog() {
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
                            src="/imgas/Home-imgas/4.jpg"
                            alt="SEO, Search Engine Optimization"
                        />
                    </div>

                    {/* ব্রেডক্রাম্ব নেভিগেশন */}
                    <span className="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-widest px-4 sm:px-6 lg:px-8">
                        <Link to="/" className="text-blue-600 hover:text-blue-800 transition duration-300">
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
                        <h1 className="text-3xl sm:text-5xl font-extrabold text-blue-700 mb-6 border-b-4 border-blue-100 pb-4 leading-tight">
                            ফ্রিল্যান্সিং কোন কাজের চাহিদা বেশি?
                        </h1>

                        {/* ভূমিকা */}
                        <p className="leading-relaxed text-gray-600 mb-8 text-base pb-4 sm:text-lg">
                            ফ্রিল্যান্সিং কোন কাজের চাহিদা বেশি? – এটি এমন একটি প্রশ্ন যা প্রতিনিয়ত ফ্রিল্যান্সিংয়ে নতুনদের মনে উদয় হয়। প্রযুক্তির এই যুগে চাকরি বা ব্যবসার পাশাপাশি আরেকটি বিশেষ আয়ের মাধ্যম জনপ্রিয় হয়ে উঠেছে। এই মাধ্যমটির নাম হলো “ফ্রিল্যান্সিং।” এটি এমন একটি ক্ষেত্র যেখানে আপনার দক্ষতাই আপনার পরিচয়। আপনি কি কখনো ভেবেছেন, বাড়িতে বসে দেশের বাইরের কারো জন্য কাজ করা সম্ভব? ফ্রিল্যান্সিংয়ের মাধ্যমে এটি এখন খুবই সহজ এবং বাস্তবসম্মত।</p>

                        <span className="leading-relaxed text-gray-600 mb-8 text-base sm:text-lg">
                            বাংলাদেশে ফ্রিল্যান্সিং দিন দিন জনপ্রিয় হচ্ছে। দেশের তরুণ সমাজ থেকে শুরু করে অভিজ্ঞ পেশাজীবীরাও ফ্রিল্যান্সিংকে গ্রহণ করছেন। এর প্রধান কারণ হলো স্বাধীনভাবে কাজ করার সুযোগ, সময়ের সঠিক ব্যবহার এবং বিশ্বব্যাপী কাজের সহজলভ্যতা। আমাদের দেশের অনেকেই ইন্টারনেট এবং প্রযুক্তির সুবিধা কাজে লাগিয়ে ফ্রিল্যান্সিংয়ের মাধ্যমে তাদের জীবনের মোড় ঘুরিয়ে দিয়েছেন। এই ব্লগ পোস্টে আমরা ফ্রিল্যান্সিং কোন কাজের চাহিদা বেশি এ সম্পর্কে বিস্তারিত জানবো।
                        </span>


                        {/* এসইও কি? */}
                        <section className="mt-12">
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 border-l-4 border-red-500 pl-3">
                                ফ্রিল্যান্সিং কি? 🤔
                            </h2>

                            {/* ইমেজ */}
                            <div className="w-full mb-6">
                                <img
                                    className="w-full h-auto max-h-96 rounded-lg object-cover shadow-lg"
                                    src="/imgas/ফ্রিল্যান্সিং/1.jpg"
                                    alt="What is SEO"
                                />
                            </div>

                            {/* কনটেন্ট */}
                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p>
                                    ফ্রিল্যান্সিং শব্দটি এসেছে “ফ্রি” এবং “ল্যান্স” শব্দ থেকে, যার মানে হলো স্বাধীনভাবে কাজ করা। এটি এমন একটি পেশা যেখানে আপনি কোনো নির্দিষ্ট কোম্পানির স্থায়ী কর্মচারী না হয়ে নির্দিষ্ট কাজের জন্য চুক্তিভিত্তিক সেবা প্রদান করেন। ফ্রিল্যান্সাররা সাধারণত বিভিন্ন ক্লায়েন্টের জন্য নির্দিষ্ট প্রকল্প সম্পন্ন করেন এবং কাজ শেষে পারিশ্রমিক পান।
                                </p>
                                <p>
                                    ফ্রিল্যান্সিংয়ে কাজের ধরন এবং সময়ের উপর সম্পূর্ণ নিয়ন্ত্রণ থাকে। আপনি দিনে কত ঘণ্টা কাজ করবেন বা কোন প্রকল্পে কাজ করবেন, সেটি সম্পূর্ণ আপনার সিদ্ধান্ত। এটি বিশেষত তাদের জন্য উপযোগী যারা স্বাধীনভাবে কাজ করতে পছন্দ করেন এবং একাধিক প্রকল্পে কাজ করতে চান।
                                </p>
                                <h4 className="text-lg font-semibold text-blue-600">
                                    প্রথম দিকে, ফ্রিল্যান্সিং মূলত লেখালেখি এবং ডিজাইনের কাজের মধ্যেই সীমাবদ্ধ ছিল। তবে সময়ের সাথে সাথে এর ক্ষেত্রটি অনেক বড় হয়েছে। বর্তমানে ওয়েব ডেভেলপমেন্ট, সফটওয়্যার ডেভেলপমেন্ট, ডিজিটাল মার্কেটিং, ভিডিও এডিটিং, মোবাইল অ্যাপ তৈরি ইত্যাদি কাজগুলোও ফ্রিল্যান্সিংয়ের অন্তর্ভুক্ত।
                                </h4>
                                <p>
                                    এই কাজগুলো সাধারণত অনলাইন প্ল্যাটফর্মের মাধ্যমে পরিচালিত হয়। জনপ্রিয় কিছু ফ্রিল্যান্সিং প্ল্যাটফর্ম হলো Upwork, Fiverr, Freelancer, এবং Toptal। এসব প্ল্যাটফর্মে কাজ পাওয়া এবং ক্লায়েন্টদের সাথে যোগাযোগ করা অনেক সহজ।
                                </p>
                                <p>
                                    বাংলাদেশের প্রেক্ষাপটে, ফ্রিল্যান্সিং শুধুমাত্র আয়ের মাধ্যম নয়, এটি একটি সম্ভাবনাময় পেশা। দেশে ইন্টারনেট সহজলভ্য হওয়ায় এখন গ্রামের তরুণরাও এই কাজে যুক্ত হচ্ছেন। ফ্রিল্যান্সিংয়ে নতুনদের জন্য শিক্ষণীয় অনেক উৎস রয়েছে, যেমন অনলাইন কোর্স, ইউটিউব ভিডিও, এবং স্থানীয় প্রশিক্ষণ কেন্দ্র।
                                </p>
                                <p>
                                    ফ্রিল্যান্সিংয়ের আরেকটি বড় সুবিধা হলো এটি শিক্ষার্থীদের জন্য একটি ভালো পার্ট-টাইম পেশা। অনেক শিক্ষার্থী পড়াশোনার পাশাপাশি ফ্রিল্যান্সিংয়ের মাধ্যমে আয় করছেন এবং অভিজ্ঞতা অর্জন করছেন।
                                </p>
                            </div>
                        </section>

                        {/* SEO কেন করা হয়? */}
                        <section className="mt-12 pt-8 border-t border-gray-200">
                            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-8 border-l-4 border-green-500 pl-3">
                                ফ্রিল্যান্সিং কোন কাজের চাহিদা বেশি?
                            </h1>

                            <div className="w-full mb-6">
                                <img
                                    className="w-full h-auto max-h-96 rounded-lg object-cover shadow-lg"
                                    src="/imgas/ফ্রিল্যান্সিং/2.jpg"
                                    alt="Why is SEO done"
                                />
                            </div>

                            <p className="mb-8 text-gray-700 leading-relaxed">
                                বর্তমানে আন্তর্জাতিক বাজারে কিছু নির্দিষ্ট কাজের চাহিদা তুলনামূলকভাবে বেশি। এগুলোতে দক্ষতা অর্জন করলে আপনি সহজেই কাজ পেতে পারেন। ফ্রিল্যান্সিং কোন কাজের চাহিদা বেশি এ সম্পর্কে নিম্নে বিস্তারিতভাবে আলোচনা করা হলো-
                            </p>

                            {/* কারণ ১: ট্রাফিক বৃদ্ধি */}
                            <div className="bg-blue-50 p-6 rounded-xl shadow-inner mb-6">
                                <h1 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-3 flex items-center">
                                    <span className="text-4xl mr-3">1️⃣</span> ওয়েব ডিজাইন এবং ডেভেলপমেন্ট
                                </h1>

                                <div className="w-full mb-4">
                                    <img
                                        className="w-full h-auto max-h-80 rounded-lg object-cover shadow-md"
                                        src="/imgas/ফ্রিল্যান্সিং/3.jpg"
                                        alt="Increase Traffic with SEO"
                                    />
                                </div>

                                <p className="text-gray-700 leading-relaxed mb-4">
                                    <span className="text-amber-800 cursor-pointer pr-3 font-bold">

                                        ওয়েব ডিজাইন ও ডেভেলপমেন্ট
                                    </span>
                                    বর্তমান সময়ে একটি অত্যন্ত জনপ্রিয় এবং চাহিদাসম্পন্ন কাজ। প্রতিটি ব্যবসা বা প্রতিষ্ঠান তাদের অনলাইন উপস্থিতি তৈরি করতে চায়, এবং এর জন্য প্রয়োজন একটি পেশাদার ওয়েবসাইট। এই কাজের জন্য HTML, CSS, JavaScript, এবং বিভিন্ন ফ্রেমওয়ার্ক যেমন React, Angular, এবং Vue.js সম্পর্কে ভালো জ্ঞান থাকতে হয়। এছাড়া, ওয়েব ডেভেলপমেন্টের পাশাপাশি, ডিজাইনের ক্ষেত্রেও দক্ষতা থাকতে হবে, যেমন: Adobe XD, Figma বা Sketch এর মতো ডিজাইন টুলসের ব্যবহার। ওয়েব ডিজাইন/ডেভেলপমেন্টের কাজগুলি সাধারণত বিভিন্ন প্রতিষ্ঠানের জন্য কাস্টমাইজড ওয়েবসাইট তৈরি করতে বা তাদের ওয়েবসাইটের কার্যকারিতা উন্নত করতে করা হয়। এই কাজের চাহিদা বর্তমানে শুধু দেশের মধ্যেই নয়, আন্তর্জাতিক পর্যায়েও ব্যাপকভাবে বৃদ্ধি পেয়েছে।
                                </p>



                            </div>

                            {/* কারণ ২: ব্র্যান্ডের সচেতনতা বৃদ্ধি */}
                            <div className="bg-green-50 p-6 rounded-xl shadow-inner mb-6">
                                <h1 className="text-2xl sm:text-3xl font-bold text-green-700 mb-3 flex items-center">
                                    <span className="text-4xl mr-3">2️⃣</span> ২| গ্রাফিক ডিজাইন
                                </h1>

                                <div className="w-full mb-4">
                                    <img
                                        className="w-full h-auto max-h-80 rounded-lg object-cover shadow-md"
                                        src="/imgas/ফ্রিল্যান্সিং/4.jpg"
                                        alt="Increase Brand Awareness"
                                    />
                                </div>

                                <p className="text-gray-700 leading-relaxed mb-4">

                                    <span className="text-amber-900 cursor-pointer pr-3 font-bold">
                                        গ্রাফিক ডিজাইন
                                    </span>
                                    ফ্রিল্যান্সিংয়ের   মধ্যে অন্যতম একটি অত্যন্ত সৃজনশীল এবং চাহিদাসম্পন্ন কাজ। সোশ্যাল মিডিয়ার উত্থান এবং ডিজিটাল মার্কেটিংয়ের প্রচারে গ্রাফিক ডিজাইনের ভূমিকা অপরিহার্য হয়ে উঠেছে। ব্যবসাগুলির জন্য লোগো ডিজাইন, সোশ্যাল মিডিয়া পোস্ট, ইভেন্ট ব্যানার, পোস্টার এবং বিজ্ঞাপন ডিজাইন করা হচ্ছে প্রতিদিন। গ্রাফিক ডিজাইনের কাজের জন্য, আপনাকে Adobe Photoshop, Illustrator, এবং InDesign এর মতো ডিজাইন সফটওয়্যারের জ্ঞান থাকতে হবে। অধিকাংশ প্রতিষ্ঠান তাদের পণ্য বা সেবা বিক্রির জন্য আকর্ষণীয় গ্রাফিক্স চায়। এজন্য গ্রাফিক ডিজাইনারদের মধ্যে সৃজনশীলতা, রঙের ব্যবহার, এবং টাইপোগ্রাফি সম্পর্কে ভালো ধারণা থাকা জরুরি। ই-কমার্স সাইটগুলো বিশেষভাবে গ্রাফিক ডিজাইনের উপর অনেক নির্ভরশীল।
                                </p>


                            </div>

                            {/* কারণ ৩: ব্যবসার বিক্রি বৃদ্ধি */}
                            <div className="bg-yellow-50 p-6 rounded-xl shadow-inner mb-6">
                                <h1 className="text-2xl sm:text-3xl font-bold text-yellow-700 mb-3 flex items-center">
                                    <span className="text-4xl mr-3">3️⃣</span>  কনটেন্ট রাইটিং এবং কপিরাইটিং
                                </h1>

                                <div className="w-full mb-4">
                                    <img
                                        className="w-full h-auto max-h-80 rounded-lg object-cover shadow-md"
                                        src="/imgas/ফ্রিল্যান্সিং/5.jpg"
                                        alt="Increase Business Sales"
                                    />
                                </div>

                                <p className="text-gray-700 leading-relaxed mb-4">
                                    <span className="text-amber-900 font-bold cursor-pointer pr-3">
                                        কনটেন্ট রাইটিং ও কপিরাইটিং
                                    </span>
                                    এমন দুটি ক্ষেত্র যা ডিজিটাল মার্কেটিং এবং ওয়েব ডেভেলপমেন্টের সাথে গভীরভাবে সম্পর্কিত। কনটেন্ট রাইটিংয়ে, ব্লগ, আর্টিকেল, ওয়েব পেজ কনটেন্ট, সোশ্যাল মিডিয়া পোস্ট ইত্যাদি তৈরি করা হয়। কনটেন্ট রাইটারের মূল কাজ হলো পাঠককে তথ্য বা বিনোদন প্রদান করা, যা পাঠকের আগ্রহ আকর্ষণ করবে। কপিরাইটিং মূলত বিজ্ঞাপনী লেখালেখির জন্য হয়, যার মাধ্যমে পণ্য বা সেবা বিক্রি বাড়ানো হয়। এই ক্ষেত্রে, শব্দের মাধ্যমে ক্রেতার মনোভাব পরিবর্তন করার ক্ষমতা থাকতে হয়। কনটেন্ট রাইটিং এবং কপিরাইটিং উভয় ক্ষেত্রেই SEO (Search Engine Optimization) এর গুরুত্বপূর্ণ ভূমিকা রয়েছে। ভালো কনটেন্ট রাইটাররা SEO পদ্ধতি বুঝে কাজ করে থাকেন, যাতে তাদের লেখা গুগল সার্চে শীর্ষে আসে।
                                </p>

                            </div>
                        </section>

                        {/* বহুল জিজ্ঞাসিত প্রশ্ন ও উত্তর সমূহ (FAQ) */}
                        <section className="mt-12 pt-8 border-t-2 border-dashed border-gray-300">
                            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-6">
                                বহুল জিজ্ঞাসিত প্রশ্ন ও উত্তর সমূহ (FAQ) 💡
                            </h1>
                            <p className="mb-6 text-gray-700">
                                “ফ্রিল্যান্সিং কোন কাজের চাহিদা বেশি?” এই বিষয়ে আপনার মনে বেশ কয়েকটি প্রশ্ন উঁকি দিচ্ছে? তাহলে চলুন জেনে নেই সেই সকল প্রশ্ন ও উত্তরগুলো-
                            </p>

                            {/* FAQ আইটেম */}
                            <div className="space-y-4">
                                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                                    <h4 className="text-xl font-semibold text-gray-900 mb-2">ফ্রিল্যান্সিং শুরু করতে কী প্রয়োজন?</h4>
                                    <p className="text-gray-600">আপনার প্রয়োজন একটি কম্পিউটার, ইন্টারনেট সংযোগ, এবং নির্দিষ্ট কাজের দক্ষতা।</p>
                                </div>
                                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                                    <h4 className="text-xl font-semibold text-gray-900 mb-2">ফ্রিল্যান্সিং কি নিরাপদ?</h4>
                                    <p className="text-gray-600">হ্যাঁ, নির্ভরযোগ্য প্ল্যাটফর্মের মাধ্যমে কাজ করলে ফ্রিল্যান্সিং নিরাপদ।</p>
                                </div>
                            </div>
                        </section>

                        {/* উপসংহার */}
                        <section className="mt-12 pt-8 border-t border-gray-200">
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-red-500 mb-4">
                                উপসংহার 🌟
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                উপরোক্ত আলোচনা থেকে আমরা ফ্রিল্যান্সিং কোন কাজের চাহিদা বেশি এ সম্পর্কে বিস্তারিত জানলাম। ফ্রিল্যান্সিং হলো এমন একটি পেশা যা আপনাকে স্বাধীনতা এবং আয়ের সুযোগ দুটোই প্রদান করে। বাংলাদেশে এর ভবিষ্যৎ অত্যন্ত উজ্জ্বল। যদি আপনার শেখার ইচ্ছা এবং কঠোর পরিশ্রম করার মানসিকতা থাকে, তবে এই ক্ষেত্রটি আপনার জন্য হতে পারে আদর্শ। এছাড়াও আপনার জ্ঞানকে প্রসারিত করার জন্য ফ্রিল্যান্সিং এর ভবিষ্যৎ কি? সম্পর্কিত আর্টিকেলটি পড়ুন।
                                <a href="#" className="text-blue-600 hover:underline font-medium"> উপরোক্ত আলোচনা থেকে আমরা ফ্রিল্যান্সিং কোন কাজের চাহিদা</a> এ সম্পর্কিত আর্টিকেলটি পড়ুন।
                            </p>

                            <p className="mt-6 text-gray-500 italic">
                                ফ্রিল্যান্সিং কোন কাজের চাহিদা বেশি?” সম্পর্কিত কোন প্রশ্ন থাকে তাহলে অবশ্যই নিচে কমেন্ট করবেন। আর এমন ধরনের গুরুত্বপূর্ণ বিষয় গুলো বিনামূল্যে জানতে আমাদের সাথে থাকবেন। ধন্যবাদ, ভালো থাকুন, সুস্থ থাকুন।🙏
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
                            className="w-full sm:w-auto bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-200 shadow-md"
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

export default FreelancingBolog;
