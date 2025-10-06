
import Sidebar from "@/components/pages/Home/rightSiteHome";
import { useState } from "react";
import { Link } from "react-router-dom";

function MobillincomeBolog() {
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
                            src="/imgas/Home-imgas/6.jpg"
                            alt="SEO, Search Engine Optimization"
                        />
                    </div>

                    {/* ব্রেডক্রাম্ব নেভিগেশন */}
                    <span className="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-widest px-4 sm:px-6 lg:px-8">
                        <Link to="/" className="text-blue-600 hover:text-blue-800 transition duration-300">
                            হোম
                        </Link>
                        <span className="mx-2">/</span>
                        <Link to="/অনলাইন ইনকাম" className="text-blue-600 hover:text-blue-800 transition duration-300 font-semibold">
                            অনলাইন ইনকাম
                        </Link>
                    </span>
                </header>

                {/* মূল কনটেন্ট এরিয়া */}
                <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
                    <article className="bg-white p-6 sm:p-10 rounded-3xl shadow-2xl">

                        {/* শিরোনাম */}
                        <h1 className="text-3xl sm:text-5xl font-extrabold text-blue-700 mb-6 border-b-4 border-blue-100 pb-4 leading-tight">
                            মোবাইল দিয়ে ফ্রিল্যান্সিং কিভাবে শিখবো?
                        </h1>

                        {/* ভূমিকা */}
                        <p className="leading-relaxed text-gray-600 mb-8 text-base pb-4 sm:text-lg">
                            মোবাইল দিয়ে ফ্রিল্যান্সিং কিভাবে শিখবো—এটি কি সম্ভব? হ্যাঁ, একদম সম্ভব, আর এই পোস্টে আপনি জানবেন মোবাইল ফোন ব্যবহার করে ফ্রিল্যান্সিং শেখার সহজ ও কার্যকর পদ্ধতি! আপনি কি কখনো ভেবে দেখেছেন, ঘরে বসেই কাজ করে আয় করা সম্ভব? বর্তমান যুগে এটা আর কোনো স্বপ্ন নয়, বরং বাস্তব। অফিসে সময়মতো হাজিরা দেওয়া কিংবা দীর্ঘক্ষণ কাজ করার চাপে অনেকেই ক্লান্ত। অনেকেই চায় নিজের সময়মতো কাজ করতে এবং সেই কাজের মাধ্যমে একটি ভালো আয় নিশ্চিত করতে। ফ্রিল্যান্সিং সেই সুযোগ এনে দিয়েছে।
                        </p>

                        <span className="leading-relaxed  text-gray-600 mb-8 text-base sm:text-lg">
                            বিশেষ করে বাংলাদেশের মতো একটি দেশে, যেখানে কর্মসংস্থানের সুযোগ সীমিত এবং তরুণ জনগোষ্ঠীর সংখ্যা অনেক বেশি, সেখানে ফ্রিল্যান্সিং হয়ে উঠেছে একটি বিপ্লব। ফ্রিল্যান্সিং বলতে বোঝায় এমন একটি কাজ যেখানে আপনি স্বাধীনভাবে কাজ করবেন। এখানে আপনি কারো নিয়মিত কর্মচারী না হয়ে চুক্তিভিত্তিক কাজ করবেন। আর এই কাজ আপনি করতে পারেন আপনার সুবিধামতো সময় এবং স্থান থেকে।
                        </span>
                        <p className="leading-relaxed pt-4 text-gray-600 mb-8 text-base sm:text-lg">
                            বাংলাদেশের তরুণ প্রজন্মের মধ্যে ফ্রিল্যান্সিং একটি জনপ্রিয় পেশা হয়ে উঠেছে। কারণ, এটি শুধু আয়ের একটি ভালো মাধ্যম নয়, বরং এটি একজনকে নিজের দক্ষতা প্রদর্শন এবং গ্লোবাল মার্কেটে নিজের পরিচিতি বাড়ানোর সুযোগ দেয়। অনেকেই মনে করেন, ফ্রিল্যান্সিং শেখার জন্য উচ্চ ক্ষমতাসম্পন্ন ল্যাপটপ বা কম্পিউটার প্রয়োজন। তবে আপনি কি জানেন, একটি স্মার্টফোন ব্যবহার করেও ফ্রিল্যান্সিং শেখা এবং করা সম্ভব? এই ব্লগ পোস্টে আমরা মোবাইল দিয়ে ফ্রিল্যান্সিং কিভাবে শিখবো এ সম্পর্কে বিস্তারিত জানবো।
                        </p>


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
                                মোবাইল দিয়ে ফ্রিল্যান্সিং কিভাবে শিখবো?
                            </h1>

                            <div className="w-full mb-6">
                                <img
                                    className="w-full h-auto max-h-96 rounded-lg object-cover shadow-lg"
                                    src="/imgas/ফ্রিল্যান্সিং/6jpg.jpg"
                                    alt="Why is SEO done"
                                />
                            </div>

                            <p className="mb-8 text-gray-700 leading-relaxed">
                                আপনার যদি একটি স্মার্টফোন এবং ইন্টারনেট সংযোগ থাকে, তবে ফ্রিল্যান্সিং শেখার যাত্রা শুরু করা খুব সহজ। তবে মোবাইল দিয়ে শেখার জন্য সঠিক পদ্ধতি এবং দিকনির্দেশনা জানা খুবই গুরুত্বপূর্ণ। মোবাইলের সীমিত স্ক্রিন এবং ফিচার থাকা সত্ত্বেও এর কার্যক্ষমতা অসাধারণ, যদি আপনি সঠিকভাবে এটি ব্যবহার করতে পারেন। মোবাইল দিয়ে ফ্রিল্যান্সিং কিভাবে শিখবো এ সম্পর্কে নিম্নে বিস্তারিতভাবে আলোচনা করা হলো-
                            </p>

                            {/* কারণ ১: ট্রাফিক বৃদ্ধি */}
                            <div className="bg-blue-50 p-6 rounded-xl shadow-inner mb-6">
                                <h1 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-3 flex items-center">
                                    <span className="text-4xl mr-3">1️⃣</span>  নিজের আগ্রহ নির্ধারণ করুন
                                </h1>



                                <p className="text-gray-700 leading-relaxed mb-4">

                                    মোবাইল দিয়ে ফ্রিল্যান্সিং শেখার প্রথম এবং সবচেয়ে গুরুত্বপূর্ণ ধাপ হলো নিজের আগ্রহ এবং দক্ষতার ক্ষেত্র নির্ধারণ করা। ফ্রিল্যান্সিংয়ের বিভিন্ন শাখা রয়েছে, যেমন কন্টেন্ট রাইটিং, গ্রাফিক ডিজাইন, ডেটা এন্ট্রি, সোশ্যাল মিডিয়া ম্যানেজমেন্ট, ভিডিও এডিটিং, এবং আরও অনেক কিছু।
                                </p>
                                <span className="text-gray-700 leading-relaxed mb-4">আপনার আগ্রহ যদি লেখালেখিতে হয়, তবে কন্টেন্ট রাইটিং হতে পারে আপনার জন্য আদর্শ। আপনি যদি সৃজনশীল হন এবং নকশা তৈরি করতে পছন্দ করেন, তাহলে গ্রাফিক ডিজাইন হতে পারে একটি ভালো পছন্দ। এভাবে নিজের আগ্রহ এবং দক্ষতার ক্ষেত্র নির্ধারণ করলে আপনি একটি নির্দিষ্ট দিকে মনোনিবেশ করতে পারবেন এবং দক্ষতা বাড়াতে পারবেন।</span>
                                <p className="text-gray-700 leading-relaxed mt-4">এটি নির্ধারণ করার সময় আপনার দীর্ঘমেয়াদি লক্ষ্য এবং কাজের সম্ভাবনা বিবেচনা করুন। মনে রাখবেন, একটি নির্দিষ্ট ক্ষেত্রে পারদর্শী হওয়া দীর্ঘমেয়াদে আপনার আয় বাড়াতে সাহায্য করবে।</p>



                            </div>

                            {/* কারণ ২: ব্র্যান্ডের সচেতনতা বৃদ্ধি */}
                            <div className="bg-green-50 p-6 rounded-xl shadow-inner mb-6">
                                <h1 className="text-2xl sm:text-3xl font-bold text-green-700 mb-3 flex items-center">
                                    <span className="text-4xl mr-3">2️⃣</span> অনলাইনে রিসোর্স খুঁজুন
                                </h1>





                                <span className="text-gray-700 leading-relaxed mb-4">
                                    মোবাইল দিয়ে ফ্রিল্যান্সিং শেখার দ্বিতীয় ধাপ হলো অনলাইনে শেখার উপকরণ খোঁজা। বর্তমানে ইন্টারনেট এমন একটি জগৎ, যেখানে প্রায় সব বিষয়ে শেখার উপকরণ পাওয়া যায়। ইউটিউব, Coursera, Udemy, Skillshare-এর মতো প্ল্যাটফর্মে আপনি ফ্রিল্যান্সিং শেখার জন্য অসংখ্য কোর্স পাবেন।
                                </span>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    ইউটিউবে বিশেষ করে ফ্রি টিউটোরিয়াল পাওয়া যায় যা মোবাইল ব্যবহারকারীদের জন্য সহজলভ্য। বাংলায় বিভিন্ন চ্যানেল আছে যারা নতুনদের জন্য ফ্রিল্যান্সিং শেখার বিষয়ে দিকনির্দেশনা প্রদান করে। আপনি যদি ইংরেজি বুঝতে পারেন, তাহলে আরও বেশি টিউটোরিয়াল ও কোর্স আপনার জন্য উন্মুক্ত।
                                </p>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    কিছু জনপ্রিয় প্ল্যাটফর্মে সঠিক রেটিং এবং রিভিউ দেখে কোর্স নির্বাচন করুন। আপনি ফ্রি রিসোর্সের পাশাপাশি পেইড কোর্সেও বিনিয়োগ করতে পারেন। তবে যেকোনো কোর্স শুরুর আগে বিষয়বস্তু ভালোভাবে যাচাই করুন এবং নিশ্চিত করুন যে এটি মোবাইল ব্যবহারকারীদের জন্য প্রযোজ্য।

                                </p>


                            </div>

                            {/* কারণ ৩: ব্যবসার বিক্রি বৃদ্ধি */}
                            <div className="bg-yellow-50 p-6 rounded-xl shadow-inner mb-6">
                                <h1 className="text-2xl sm:text-3xl font-bold text-yellow-700 mb-3 flex items-center">
                                    <span className="text-4xl mr-3">3️⃣</span> স্মার্টফোনের প্রয়োজনীয় অ্যাপ ডাউনলোড করুন
                                </h1>




                                <span className="text-gray-700 leading-relaxed ">
                                    মোবাইল দিয়ে ফ্রিল্যান্সিং শেখার জন্য আপনাকে কিছু নির্দিষ্ট অ্যাপ ডাউনলোড করতে হবে। এই অ্যাপগুলো আপনার কাজের প্রয়োজন অনুযায়ী নির্বাচন করতে হবে।
                                </span>
                                <p className="text-gray-700 leading-relaxed mt-4 mb-4">
                                    লেখালেখির জন্য Google Docs, Microsoft Word, বা Evernote ডাউনলোড করতে পারেন। এগুলোতে আপনি কন্টেন্ট লিখতে এবং সেভ করতে পারবেন।
                                </p>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    যদি আপনি গ্রাফিক ডিজাইনে আগ্রহী হন, তাহলে Canva এবং Adobe Express অ্যাপগুলো ডাউনলোড করুন। এগুলো দিয়ে আপনি সহজেই লোগো, পোস্টার, এবং সোশ্যাল মিডিয়া পোস্ট তৈরি করতে পারবেন।
                                </p>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    ভিডিও এডিটিংয়ের জন্য Kinemaster, CapCut, বা InShot ব্যবহার করতে পারেন। এগুলো ব্যবহার করা খুবই সহজ এবং মোবাইলে সম্পূর্ণ এডিটিং করার জন্য যথেষ্ট।
                                </p>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    এছাড়া, ফ্রিল্যান্সিং প্ল্যাটফর্ম যেমন Fiverr, Upwork, বা Freelancer-এর মোবাইল অ্যাপ ডাউনলোড করুন। এই অ্যাপগুলোর মাধ্যমে আপনি কাজ খুঁজে পেতে এবং ক্লায়েন্টদের সঙ্গে যোগাযোগ করতে পারবেন।
                                </p>
                            </div>
                        </section>

                        {/* বহুল জিজ্ঞাসিত প্রশ্ন ও উত্তর সমূহ (FAQ) */}
                        <section className="mt-12 pt-8 border-t-2 border-dashed border-gray-300">
                            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-6">
                                বহুল জিজ্ঞাসিত প্রশ্ন ও উত্তর সমূহ (FAQ) 💡
                            </h1>
                            <p className="mb-6 text-gray-700">
                                “মোবাইল দিয়ে ফ্রিল্যান্সিং কিভাবে শিখবো?” এই বিষয়ে আপনার মনে বেশ কয়েকটি প্রশ্ন উঁকি দিচ্ছে? তাহলে চলুন জেনে নেই সেই সকল প্রশ্ন ও উত্তরগুলো-
                            </p>

                            {/* FAQ আইটেম */}
                            <div className="space-y-4">
                                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                                    <h4 className="text-xl font-semibold text-gray-900 mb-2">ফ্রিল্যান্সিং কি শুধু শিক্ষার্থীদের জন্য?</h4>
                                    <p className="text-gray-600">না, ফ্রিল্যান্সিং সবার জন্য। এটি এমন একটি পেশা যেখানে যে কেউ তার দক্ষতা ব্যবহার করে কাজ করতে পারে। তবে শিক্ষার্থীদের জন্য এটি আয়ের একটি সহজ এবং কার্যকর উপায় হতে পারে।</p>
                                </div>
                                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                                    <h4 className="text-xl font-semibold text-gray-900 mb-2">ফ্রিল্যান্সিংয়ে সফল হতে কতদিন সময় লাগে?</h4>
                                    <p className="text-gray-600">ফ্রিল্যান্সিংয়ে সফল হতে নির্দিষ্ট সময় নির্ভর করে আপনার শেখার গতি, কাজের অভিজ্ঞতা, এবং ক্লায়েন্টদের সঙ্গে সম্পর্কের ওপর। সাধারণত কয়েক মাস থেকে এক বছরের মধ্যে ভালো আয় শুরু করা সম্ভব।</p>
                                </div>
                            </div>
                        </section>

                        {/* উপসংহার */}
                        <section className="mt-12 pt-8 border-t border-gray-200">
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-red-500 mb-4">
                                উপসংহার 🌟
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                উপরোক্ত আলোচনা থেকে আমরা মোবাইল দিয়ে ফ্রিল্যান্সিং কিভাবে শিখবো এ সম্পর্কে বিস্তারিত জানলাম। মোবাইল দিয়ে ফ্রিল্যান্সিং শেখা একটু সময়সাপেক্ষ হতে পারে, তবে এটি একদমই সম্ভব। আপনি যদি ধৈর্য সহকারে সঠিক পরিকল্পনা অনুসরণ করেন, তাহলে ফ্রিল্যান্সিং আপনার জীবনে আয়ের একটি বড় মাধ্যম হয়ে উঠতে পারে। আশা করি, আজকের ব্লগটি আপনার কাজে আসবে। এছাড়াও আপনার জ্ঞানকে প্রসারিত করার জন্য ফ্রিল্যান্সিং এর কাজ সমূহ সম্পর্কিত আর্টিকেলটি পড়ুন।
                                <a href="#" className="text-blue-600 hover:underline font-medium"> উপরোক্ত আলোচনা থেকে আমরা ফ্রিল্যান্সিং কোন কাজের চাহিদা</a> এ সম্পর্কিত আর্টিকেলটি পড়ুন।
                            </p>

                            <p className="mt-6 text-gray-500 italic">
                                “মোবাইল দিয়ে ফ্রিল্যান্সিং কিভাবে শিখবো?” সম্পর্কিত কোন প্রশ্ন থাকে তাহলে অবশ্যই নিচে কমেন্ট করবেন। আর এমন ধরনের গুরুত্বপূর্ণ বিষয় গুলো বিনামূল্যে জানতে আমাদের সাথে থাকবেন। ধন্যবাদ, ভালো থাকুন, সুস্থ থাকুন।🙏
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

export default MobillincomeBolog;


