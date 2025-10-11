
import Sidebar from "@/components/pages/Home/rightSiteHome";
import { useState } from "react";

import { Link } from "react-router-dom";

function ContenBolog() {
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
                            src=" imgas/bloging-images/7.jpg"
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
                            কন্টেন্ট রাইটিং কত প্রকার ও কি কি?
                        </h1>

                        {/* ভূমিকা */}
                        <p className="leading-relaxed text-gray-600 mb-8 text-base pb-4 sm:text-lg">
                            কন্টেন্ট রাইটিং কত প্রকার ও কি কি এ সম্পর্কে জানলে আপনি সহজেই বুঝতে পারবেন কিভাবে সঠিক কন্টেন্ট তৈরির মাধ্যমে আপনার টার্গেটেড পাঠকদের আকৃষ্ট করা যায়। বর্তমান বিশ্বে যোগাযোগের একটি প্রধান মাধ্যম হলো ইন্টারনেট। এর প্রভাবে বিভিন্ন প্ল্যাটফর্মে কন্টেন্টের চাহিদা দিন দিন বেড়েই চলেছে। কন্টেন্ট রাইটিং (Content Writing) এখন কেবল একটি শখ নয়, বরং এটি একটি পেশায় রূপান্তরিত হয়েছে। ডিজিটাল প্ল্যাটফর্মের মাধ্যমে বিভিন্ন প্রতিষ্ঠান তাদের ব্র্যান্ডের প্রচারণা চালাতে এবং গ্রাহকদের সঙ্গে সম্পর্ক স্থাপন করতে কন্টেন্ট রাইটিংয়ের সহায়তা নিচ্ছে। এই কারণে, দক্ষ কন্টেন্ট রাইটারদের প্রয়োজনীয়তা প্রচুর পরিমাণে বেড়ে গেছে। একজন কন্টেন্ট রাইটার তার লেখার মাধ্যমে শুধু তথ্য সরবরাহ করে না, বরং তিনি পাঠকের মনোযোগ আকর্ষণ করতে এবং তাদের প্রভাবিত করতেও সক্ষম হন।
                        </p>
                        <p className="leading-relaxed text-gray-600 mb-8 text-base pb-4 sm:text-lg">
                            কন্টেন্ট রাইটিংয়ের গুরুত্ব এত বেশি যে, এটি আজকের দিনের বিপণন কৌশলের মূল অংশ হয়ে উঠেছে। একটি সফল কন্টেন্ট রাইটার কেবল সুন্দরভাবে লিখতে জানলেই হয় না, বরং তাকে SEO (সার্চ ইঞ্জিন অপটিমাইজেশন), কীওয়ার্ড প্লেসমেন্ট এবং পাঠকের মনস্তত্ত্বও বুঝতে হয়। কন্টেন্ট রাইটিংয়ের মূল উদ্দেশ্য হলো, তথ্য পৌঁছানোর পাশাপাশি এমন একটি সংযোগ তৈরি করা যা পাঠক বা গ্রাহককে নির্দিষ্ট পদক্ষেপ নিতে প্ররোচিত করবে। এই ব্লগ পোস্টে আমরা কন্টেন্ট রাইটিং কত প্রকার ও কি কি এ সম্পর্কে বিস্তারিত জানবো।
                        </p>


                        <h1 className="text-3xl sm:text-3xl md:text-3xl  font-extrabold mb-6 border-b-4 border-blue-100 pb-4 leading-tight">
                            কন্টেন্ট রাইটিং কি?
                        </h1>

                        <p className="leading-relaxed text-gray-600 mb-6 text-base sm:text-lg">
                            কন্টেন্ট রাইটিং বলতে বোঝায় এমন একটি প্রক্রিয়া, যেখানে তথ্য বা বার্তা নির্দিষ্ট উদ্দেশ্য নিয়ে একটি নির্দিষ্ট শৈলীতে লেখা হয়। এটি একাধিক মাধ্যম ও প্ল্যাটফর্মে ব্যবহার করা হয়, যেমন: ব্লগ পোস্ট, ওয়েবসাইট কন্টেন্ট, সোশ্যাল মিডিয়া পোস্ট, বিজ্ঞাপন, নিউজ আর্টিকেল ইত্যাদি। কন্টেন্ট রাইটিং শুধুমাত্র তথ্য প্রদানের জন্য নয়; এটি এমনভাবে রচিত হয় যাতে পাঠকের মনে প্রভাব ফেলে এবং তাদের নির্দিষ্ট কিছু পদক্ষেপ নিতে প্ররোচিত করে। যেমন, একটি প্রভাবশালী ব্লগ পোস্ট পাঠককে সেই বিষয়ে নতুন চিন্তা করতে উদ্বুদ্ধ করতে পারে, বা একটি সফল বিজ্ঞাপন পাঠককে কোনো পণ্য কিনতে প্ররোচিত করতে পারে।
                        </p>

                        <p className="leading-relaxed text-gray-600 mb-6 text-base sm:text-lg">
                            কনটেন্ট শুধুমাত্র তথ্য প্রচারের মাধ্যম নয়, বরং এটি ব্র্যান্ড, ব্যবসা এবং ব্যক্তিগত পরিচয় গড়ে তুলতেও সাহায্য করে। একজন উদ্যোক্তা তার ব্যবসার প্রচারের জন্য কনটেন্ট ব্যবহার করতে পারেন, আবার একজন লেখক তার লেখনীর মাধ্যমে নতুন ধারনা শেয়ার করতে পারেন। সঠিকভাবে তৈরি করা কনটেন্ট পাঠকের মনোযোগ ধরে রাখতে সাহায্য করে এবং তাদেরকে কার্যকরভাবে বার্তা পৌঁছে দেয়।
                        </p>

                        <p className="leading-relaxed text-gray-600 mb-6 text-base sm:text-lg">
                            SEO (সার্চ ইঞ্জিন অপটিমাইজেশন) এর গুরুত্ব কন্টেন্ট রাইটিংয়ে অপরিসীম। সঠিক কীওয়ার্ড ব্যবহারের মাধ্যমে ওয়েব কন্টেন্টের সার্চ ইঞ্জিন র‌্যাঙ্কিং বৃদ্ধি করা যায়, যা ওয়েবসাইটের ট্রাফিক বাড়ায় এবং ব্যবসার জন্য নতুন সুযোগ সৃষ্টি করে। কন্টেন্ট রাইটিংয়ের মূল লক্ষ্য কেবল পাঠকের মনোযোগ আকর্ষণ নয়, বরং তাদের সঙ্গে দীর্ঘমেয়াদী সম্পর্ক তৈরি করা। সঠিক ভাষা, বিন্যাস ও শৈলীর সমন্বয়ে একজন দক্ষ কন্টেন্ট রাইটার পাঠকদের প্রয়োজনীয় তথ্য প্রদান করতে এবং তাদের প্রভাবিত করতে সক্ষম হন।
                        </p>



                        {/* এসইও কি? */}
                        <section className="mt-12">
                            <h2 className="text-3xl sm:text-3xl font-bold text-gray-800 mb-6 border-l-4 border-red-500 pl-3">
                                কন্টেন্ট রাইটিং কত প্রকার ও কি কি?
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
                                    কোন বিষয়কে লেখার মাধ্যমে ফুটিয়ে তোলা যদিও কন্টেন্ট রাইটিং এর কাজ প্রধান কাজ। কিন্তু নিদ্ধিষ্ট বিষয়কে ফুটিয়ে তোলার জন্য কন্টেন্ট রাইটিং বিভিন্ন ধরনের হয়। প্রতিটি কন্টেন্ট রাইটিং ধরনের নিজস্ব উদ্দেশ্য ও বৈশিষ্ট্য রয়েছে। কন্টেন্ট রাইটিং কত প্রকার ও কি কি এ সম্পর্কে নিম্নে বিস্তারিতভাবে আলোচনা করা হলো-
                                </p>


                            </div>
                        </section>

                        {/* SEO কেন করা হয়? */}
                        <section className="mt-12 pt-8 border-t border-gray-200">
                            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-8 border-l-4 border-green-500 pl-3">
                                ১। ব্লগ রাইটিং (Blog Writing)

                            </h1>

                            <div className="w-full mb-6">
                                <img
                                    className="w-full h-auto max-h-96 rounded-lg object-cover shadow-lg"
                                    src="imgas/simpol-bolog-imgas/2.jpg"
                                    alt="Why is SEO done"
                                />
                            </div>

                            <p className="mb-5 text-gray-700 leading-relaxed">
                                ব্লগ রাইটিং হলো কন্টেন্ট রাইটিংয়ের একটি অত্যন্ত জনপ্রিয় ধরন, যা সাধারণত একটি নির্দিষ্ট বিষয় বা টপিক নিয়ে বিস্তারিতভাবে লেখা হয়। ব্লগ পোস্টের মাধ্যমে লেখক কোনো বিষয়ে তার নিজস্ব মতামত, অভিজ্ঞতা বা গবেষণার ভিত্তিতে তথ্য প্রদান করেন। ব্লগ লেখার উদ্দেশ্য হলো পাঠকদের শিক্ষিত করা, বিনোদন দেওয়া, বা একটি নির্দিষ্ট বিষয়ে তাদের মতামত তৈরি করতে সহায়তা করা। একজন ব্লগার সহজ ভাষায় গুরুত্বপূর্ণ তথ্য শেয়ার করেন, যা পাঠকের জন্য বোধগম্য এবং উপকারী হয়।
                            </p>

                            <p className="mb-8 text-gray-700 leading-relaxed">
                                ব্লগ রাইটিং SEO-ফ্রেন্ডলি হওয়া জরুরি, কারণ এটি ওয়েবসাইটের অর্গানিক ট্রাফিক বাড়াতে সহায়তা করে। SEO টেকনিক ব্যবহার করে, যেমন সঠিক কীওয়ার্ড ইনসার্ট করা, মেটা ট্যাগ ব্যবহার করা ইত্যাদি, একটি ব্লগ পোস্ট সার্চ ইঞ্জিনের মাধ্যমে সহজে খুঁজে পাওয়া যায়। ব্লগ লেখার মাধ্যমে কোনো পণ্যের রিভিউ, নির্দেশিকা, টিপস এবং নতুন ট্রেন্ড নিয়ে আলোচনা করা যায়। ব্লগ রাইটিং বর্তমানে ডিজিটাল মার্কেটিং-এর অন্যতম গুরুত্বপূর্ণ অংশ হয়ে উঠেছে।

                            </p>


                            {/* কারণ ১: ট্রাফিক বৃদ্ধি */}
                            <div className="bg-blue-50 p-6 rounded-xl shadow-inner mb-6">
                                <h1 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-3 flex items-center">
                                    <span className="text-4xl mr-3"></span>
                                    ২। সোশ্যাল মিডিয়া পোস্ট রাইটিং (Social Media Post Writing)
                                </h1>

                                <div className="w-full mb-4">
                                    <img
                                        className="w-full h-auto max-h-80 rounded-lg object-cover shadow-md"
                                        src="imgas/simpol-bolog-imgas/3.jpg"
                                        alt="Increase Traffic with SEO"
                                    />
                                </div>

                                <p className="text-gray-700 leading-relaxed mb-4">
                                    সোশ্যাল মিডিয়া পোস্ট রাইটিং হলো এমন একটি লেখার ধরন, যেখানে সংক্ষিপ্ত অথচ প্রভাবশালী বার্তা ব্যবহার করে পাঠকের মনোযোগ আকর্ষণ করা হয়। ফেসবুক, টুইটার, ইনস্টাগ্রাম, লিঙ্কডইন ইত্যাদি সামাজিক মাধ্যমগুলোতে ব্র্যান্ডের প্রচারণা, পণ্যের আপডেট এবং গ্রাহকদের সঙ্গে যোগাযোগের জন্য এই ধরনের লেখা ব্যবহৃত হয়। সোশ্যাল মিডিয়ায় লেখা সংক্ষিপ্ত, সোজাসাপ্টা এবং আকর্ষণীয় হতে হয়, যাতে পাঠক সহজেই সেই বার্তাটি গ্রহণ করতে পারে এবং তার ওপর প্রতিক্রিয়া জানাতে পারে।
                                </p>
                                <p className="text-gray-700 leading-relaxed mb-4">

                                    সোশ্যাল মিডিয়া পোস্ট রাইটিংয়ে সাধারণত ট্রেন্ডি, ভাইরাল এবং সময়োপযোগী বিষয়বস্তু অন্তর্ভুক্ত থাকে, যা পাঠকদের দ্রুত আকর্ষণ করে এবং তাদের সঙ্গে সম্পর্ক স্থাপন করতে সহায়তা করে। এই ধরনের লেখার মূল উদ্দেশ্য হলো, পাঠকের সঙ্গে দ্রুত এবং কার্যকরভাবে সংযোগ স্থাপন করা। সোশ্যাল মিডিয়া প্ল্যাটফর্মের গতি এবং পরিবর্তনশীলতা মাথায় রেখে, লেখাকে সংক্ষিপ্ত ও সরল রাখতে হয়, যাতে তা সহজেই শেয়ার করা যায় এবং বেশি মানুষের কাছে পৌঁছায়।
                                </p>


                            </div>

                            {/* কারণ ২: ব্র্যান্ডের সচেতনতা বৃদ্ধি */}
                            <div className="bg-green-50 p-6 rounded-xl shadow-inner mb-6">
                                <h1 className="text-2xl sm:text-3xl font-bold text-green-700 mb-3 flex items-center">
                                    <span className="text-4xl mr-3"></span>
                                    ৩। কপি রাইটিং (Copy Writing)
                                </h1>

                                <div className="w-full mb-4">
                                    <img
                                        className="w-full h-auto max-h-80 rounded-lg object-cover shadow-md"
                                        src="imgas/simpol-bolog-imgas/4.jpg"
                                        alt="Increase Brand Awareness"
                                    />
                                </div>

                                <p className="text-gray-700 leading-relaxed mb-4">
                                    কপি রাইটিং হলো একটি বিশেষ ধরনের কন্টেন্ট রাইটিং, যা মূলত বিজ্ঞাপন এবং বিক্রয় বৃদ্ধির জন্য লেখা হয়। এটি সংক্ষিপ্ত, কার্যকরী এবং প্রভাবশালী হতে হয়, যাতে পাঠক বা গ্রাহক সেই পণ্য বা সেবা গ্রহণে প্ররোচিত হয়। কপি রাইটিংয়ের উদাহরণ হিসেবে বিজ্ঞাপন কপি, ল্যান্ডিং পেজ কন্টেন্ট, প্রমোশনাল ইমেইল এবং সোশ্যাল মিডিয়া বিজ্ঞাপন উল্লেখ করা যায়। একজন সফল কপি রাইটার অল্প শব্দের মাধ্যমে পাঠকের মনে গভীর প্রভাব ফেলতে পারেন।

                                </p>


                                <p className="mb-8 text-gray-700 leading-relaxed">
                                    কপি রাইটিংয়ের মাধ্যমে একটি ব্র্যান্ডের বার্তা পাঠকের কাছে পৌঁছে যায় এবং তাদের ক্রয় সিদ্ধান্তে প্রভাব ফেলে। এটি মূলত একটি বিক্রয়মুখী লেখা, যেখানে পাঠককে নির্দিষ্ট পদক্ষেপ নিতে, যেমন পণ্য কেনা বা কোনো সেবা গ্রহণ করা, প্ররোচিত করা হয়। এই ধরনের লেখায় পাঠকের প্রয়োজন, আগ্রহ এবং সমস্যা সম্পর্কে সচেতনতা থাকতে হয়, যাতে লেখাটি তাদের মনোযোগ আকর্ষণ করতে পারে এবং তাদের জন্য কার্যকর সমাধান প্রদান করতে পারে।
                                </p>






                            </div>

                            {/* কারণ ৩: ব্যবসার বিক্রি বৃদ্ধি */}
                            <div className="bg-yellow-50 p-6 rounded-xl shadow-inner mb-6">
                                <h1 className="text-2xl sm:text-3xl font-bold text-yellow-700 mb-3 flex items-center">
                                    <span className="text-4xl mr-3"></span>
                                    ৪। নিউজ কন্টেন্ট রাইটিং (News Content Writing)
                                </h1>

                                <div className="w-full mb-4">
                                    <img
                                        className="w-full h-auto max-h-80 rounded-lg object-cover shadow-md"
                                        src="imgas/simpol-bolog-imgas/5.jpg"
                                        alt="Increase Business Sales"
                                    />
                                </div>

                                <p className="text-gray-700 leading-relaxed mb-4">
                                    নিউজ কন্টেন্ট রাইটিং হলো এমন ধরনের লেখা, যেখানে সাম্প্রতিক ঘটনা বা খবর সঠিক এবং নির্ভুলভাবে পাঠকের কাছে পৌঁছে দেওয়া হয়। সংবাদপত্র, অনলাইন নিউজ পোর্টাল, ম্যাগাজিন ইত্যাদিতে এই ধরনের লেখা প্রকাশিত হয়। নিউজ রাইটিংয়ে তথ্য অত্যন্ত গুরুত্বপূর্ণ এবং নির্ভুল হতে হয়, কারণ পাঠকেরা এখানে সঠিক ও নির্ভরযোগ্য তথ্যের জন্য আসেন। এই ধরনের লেখায় সাধারণত নিরপেক্ষতা বজায় রাখতে হয় এবং কোনো পক্ষপাতিত্ব বা মিথ্যা তথ্য দেওয়া উচিত নয়।
                                </p>

                                <p className="text-gray-700 leading-relaxed mb-2">
                                    নিউজ কন্টেন্ট লেখার সময় সময়ানুবর্তিতা গুরুত্বপূর্ণ, কারণ নতুন ঘটনার খবর দ্রুত পাঠকের কাছে পৌঁছে দিতে হয়। এছাড়াও, লেখায় এমন একটি শৈলী ব্যবহার করতে হয়, যা পাঠকের মনোযোগ ধরে রাখতে সক্ষম। নিউজ রাইটিং সাধারণত সংক্ষিপ্ত হয় এবং এতে শুধুমাত্র প্রয়োজনীয় তথ্য প্রদান করা হয়, যাতে পাঠক সহজে ঘটনাটি বুঝতে পারে এবং সংশ্লিষ্ট বিষয়ে অবগত থাকতে পারে।


                                </p>







                            </div>
                        </section>

                        {/* বহুল জিজ্ঞাসিত প্রশ্ন ও উত্তর সমূহ (FAQ) */}
                        <section className="mt-12 pt-8 border-t-2 border-dashed border-gray-300">
                            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-6">
                                বহুল জিজ্ঞাসিত প্রশ্ন ও উত্তর সমূহ (FAQ) 💡
                            </h1>
                            <p className="mb-6 text-gray-700">
                                “কন্টেন্ট রাইটিং কত প্রকার ও কি কি” এই বিষয়ে আপনার মনে বেশ কয়েকটি প্রশ্ন উঁকি দিচ্ছে? তাহলে চলুন জেনে নেই সেই সকল প্রশ্ন ও উত্তরগুলো-
                            </p>

                            {/* FAQ আইটেম */}
                            <div className="space-y-4">
                                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                                    <h4 className="text-xl font-semibold text-gray-900 mb-2">একজন কন্টেন্ট রাইটার হওয়ার জন্য কোন যোগ্যতাগুলি প্রয়োজন?</h4>
                                    <p className="text-gray-600">
                                        একজন কন্টেন্ট রাইটার হওয়ার জন্য ভালো লিখিত যোগাযোগ দক্ষতা, সৃজনশীলতা এবং নির্দিষ্ট বিষয়ে গভীর গবেষণার ক্ষমতা প্রয়োজন।

                                    </p>
                                </div>
                                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                                        কন্টেন্ট রাইটিংয়ে ক্যারিয়ার গড়ার সুযোগ কেমন?

                                    </h4>
                                    <p className="text-gray-600">
                                        কন্টেন্ট রাইটিংয়ে ক্যারিয়ার গড়ার জন্য প্রচুর সুযোগ রয়েছে। ফ্রিল্যান্সিং, ব্লগিং, ডিজিটাল মার্কেটিং সংস্থা এবং বিভিন্ন প্রতিষ্ঠানে কন্টেন্ট রাইটারের চাহিদা প্রতিনিয়ত বাড়ছে।
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* উপসংহার */}
                        <section className="mt-12 pt-8 border-t border-gray-200">
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-red-500 mb-4">
                                উপসংহার 🌟
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                উপরোক্ত আলোচনা থেকে আমরা কন্টেন্ট রাইটিং কত প্রকার ও কি কি এ সম্পর্কে বিস্তারিত জানলাম। কন্টেন্ট রাইটিং বর্তমানে একটি গুরুত্বপূর্ণ দক্ষতা এবং পেশা হিসেবে প্রতিষ্ঠিত হয়েছে। ডিজিটাল মার্কেটিং থেকে শুরু করে একাডেমিক কাজ, সবক্ষেত্রেই কন্টেন্ট রাইটিংয়ের প্রভাব অপরিসীম। বিভিন্ন ধরনের কন্টেন্ট রাইটিং-এর মাধ্যমে পাঠকের সঙ্গে সংযোগ স্থাপন করা যায় এবং তাদের কাছে প্রয়োজনীয় বার্তা পৌঁছে দেওয়া যায়। এক দক্ষ কন্টেন্ট রাইটার তার লেখার মাধ্যমে পাঠকের মনে দীর্ঘস্থায়ী প্রভাব ফেলার ক্ষমতা রাখেন। এছাড়াও আপনার জ্ঞানকে প্রসারিত করার জন্য
                                <span className="text-amber-800 font-bold p-2">
                                    বাংলা আর্টিকেল লেখার নিয়ম
                                </span>
                                সম্পর্কে আর্টিকেলটি পড়তে পারেন।
                            </p>
                            <p className="mt-6 text-gray-500 italic">
                                <span className="font-bold">    “কন্টেন্ট রাইটিং কত প্রকার ও কি কি?”</span>

                                সম্পর্কিত কোন প্রশ্ন থাকে তাহলে অবশ্যই নিচে কমেন্ট করবেন। আর এমন ধরনের গুরুত্বপূর্ণ বিষয় গুলো বিনামূল্যে জানতে আমাদের সাথে থাকবেন। ধন্যবাদ, ভালো থাকুন, সুস্থ থাকুন।🙏
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

export default ContenBolog;
