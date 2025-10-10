
import Sidebar from "@/components/pages/Home/rightSiteHome";
import { useState } from "react";

import { Link } from "react-router-dom";

function Contenloungouse() {
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
                            src=
                            "imgas/bloging-images/3.jpg"
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
                            ব্লগিং
                        </Link>
                    </span>
                </header>

                {/* মূল কনটেন্ট এরিয়া */}
                <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
                    <article className="bg-white p-6 sm:p-10 rounded-3xl shadow-2xl">

                        {/* শিরোনাম */}
                        <h1 className="text-3xl sm:text-4xl md:text-3xl  font-extrabold text-blue-700 mb-6 border-b-4 border-blue-100 pb-4 leading-tight">
                            কন্টেন্ট কোন ভাষায় লিখতে হয়?
                        </h1>

                        {/* ভূমিকা */}
                        <p className="leading-relaxed text-gray-600 mb-8 text-base pb-4 sm:text-lg">
                            কন্টেন্ট কোন ভাষায় লিখতে হয়, এটি নির্ভর করে সম্পূর্ণ আপনার পাঠক এবং তাদের ভাষাগত দক্ষতার উপর। কন্টেন্ট বলতে সাধারণত এমন কোনো উপাদান বা মাধ্যম বোঝানো হয়, যার মাধ্যমে মানুষ তথ্য, শিক্ষা, বিনোদন বা প্রেরণা পায়। এটি হতে পারে টেক্সট, ছবি, ভিডিও, অডিও বা গ্রাফিক্সের সমন্বয়ে গঠিত। বর্তমান প্রযুক্তি নির্ভর বিশ্বে কন্টেন্ট একটি অত্যন্ত গুরুত্বপূর্ণ ভূমিকা পালন করছে, বিশেষ করে বাংলাদেশের মতো উদীয়মান ডিজিটাল অর্থনীতিতে। ইন্টারনেট ও সামাজিক যোগাযোগ মাধ্যমের ব্যাপক প্রসার এবং বাংলাদেশের ডিজিটালাইজেশনের কারণে কন্টেন্ট তৈরির চাহিদা বহুগুণ বৃদ্ধি পেয়েছে।
                        </p>
                        <p className="leading-relaxed text-gray-600 mb-8 text-base pb-4 sm:text-lg">
                            বাংলাদেশে এখন বিভিন্ন সেক্টরে কন্টেন্টের ব্যবহার বেড়েছে। ব্যবসা, শিক্ষা, গণমাধ্যম, বিনোদনসহ বিভিন্ন ক্ষেত্রে কন্টেন্ট ব্যবহার করা হচ্ছে। ডিজিটাল মার্কেটিং, ই-কমার্স, ফ্রিল্যান্সিং ইত্যাদি খাতেও কন্টেন্ট গুরুত্বপূর্ণ ভূমিকা পালন করে। সঠিকভাবে কন্টেন্ট তৈরি ও সরবরাহ করতে পারলে তা শুধু ব্যক্তিগত বা পেশাগত সাফল্যই এনে দিতে পারে না, দেশের সামগ্রিক অর্থনৈতিক উন্নয়নেও ভূমিকা রাখতে পারে। এ কারণে কন্টেন্ট রাইটিং এবং কন্টেন্ট ম্যানেজমেন্ট এখন বাংলাদেশের একটি প্রতিশ্রুতিশীল ক্যারিয়ার ক্ষেত্র। এই ব্লগ পোস্টে আমরা কন্টেন্ট কোন ভাষায় লিখতে হয় এ সম্পর্কে বিস্তারিত জানবো।
                        </p>




                        <h1 className="text-3xl sm:text-3xl md:text-3xl  font-extrabold mb-6 border-b-4 border-blue-100 pb-4 leading-tight">
                            কন্টেন্ট কি?
                        </h1>

                        <p className="leading-relaxed text-gray-600 mb-6 text-base sm:text-lg">
                            কন্টেন্ট মূলত এমন কোনো মাধ্যম বা উপাদান যা মানুষের কাছে কোনো বার্তা পৌঁছে দেয় বা কোনো তথ্য প্রদান করে। এটি হতে পারে লেখা, ছবি, অডিও, ভিডিও বা যে কোনো ধরনের মিডিয়া ফাইল, যা মানুষ ব্যবহার করে তথ্য সংগ্রহের জন্য বা বিনোদনের জন্য। কন্টেন্টের প্রধান উদ্দেশ্য হলো মানুষের জ্ঞান বাড়ানো, শিক্ষিত করা, বিনোদন দেওয়া এবং তাদের নির্দিষ্ট কোনো বিষয়ে প্রভাবিত করা।
                        </p>

                        <p className="leading-relaxed text-gray-600 mb-6 text-base sm:text-lg">
                            বাংলাদেশে কন্টেন্টের প্রভাব এখন উল্লেখযোগ্য। যেমন, ই-কমার্স প্রতিষ্ঠানগুলো তাদের পণ্য বিক্রির জন্য কন্টেন্টের ওপর নির্ভর করে। ভালো কন্টেন্ট না থাকলে গ্রাহক আকর্ষণ করা কঠিন হয়। কন্টেন্টের মাধ্যমে তারা তাদের পণ্য সম্পর্কে বিস্তারিত তথ্য দেয়, যা গ্রাহককে পণ্য কেনার আগে সঠিক সিদ্ধান্ত নিতে সহায়তা করে। আবার, গণমাধ্যম ও সংবাদ মাধ্যমগুলোও বিভিন্ন খবর ও তথ্য উপস্থাপনের জন্য কন্টেন্ট ব্যবহার করে।
                        </p>

                        <p className="leading-relaxed text-gray-600 mb-6 text-base sm:text-lg">
                            কন্টেন্টের বিভিন্ন ধরন রয়েছে। ব্লগ পোস্ট, সোশ্যাল মিডিয়া পোস্ট, ইউটিউব ভিডিও, পডকাস্ট, ইনফোগ্রাফিক, ই-বুক ইত্যাদি এর মধ্যে অন্যতম। প্রতিটি মাধ্যমের কন্টেন্টের ধরন আলাদা হতে পারে, তবে সব ক্ষেত্রেই মূল উদ্দেশ্য পাঠকের মনোযোগ ধরে রাখা এবং তাদের কিছু শিক্ষামূলক বা বিনোদনমূলক উপাদান প্রদান করা।
                        </p>

                        <p className="leading-relaxed text-gray-600 mb-6 text-base sm:text-lg">
                            বাংলাদেশে কন্টেন্টের ব্যবহার শুধুমাত্র ব্যবসায়িক ক্ষেত্রেই নয়, বরং শিক্ষা ক্ষেত্রেও ব্যাপকভাবে বিস্তৃত হয়েছে। বিভিন্ন শিক্ষামূলক কন্টেন্ট যেমন অনলাইন কোর্স, ই-বুক, ওয়েবিনার ইত্যাদি ছাত্রছাত্রীদের কাছে অত্যন্ত জনপ্রিয় হয়ে উঠেছে। কন্টেন্টের মাধ্যমে বিভিন্ন বিষয় সহজভাবে শেখানো যায়, যা শিক্ষার্থীদের জন্য উপকারী।
                        </p>



                        {/* এসইও কি? */}
                        <section className="mt-12">
                            <h2 className="text-3xl sm:text-3xl font-bold text-gray-800 mb-6 border-l-4 border-red-500 pl-3">
                                কন্টেন্ট কোন ভাষায় লিখতে হয়?
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
                                    কন্টেন্ট কোন ভাষায় লিখতে হয়? কন্টেন্ট লেখার ক্ষেত্রে ভাষা অত্যন্ত গুরুত্বপূর্ণ বিষয়। কন্টেন্টের ভাষা নির্ধারণ করার সময় এটি নিশ্চিত করা প্রয়োজন যে, ভাষাটি পাঠকদের জন্য বোধগম্য এবং উপযোগী হবে। বাংলাদেশে কন্টেন্ট লেখার সময় প্রধানত দুটি ভাষা ব্যবহৃত হয়—বাংলা এবং ইংরেজি। তবে কন্টেন্টের ভাষা নির্ধারণ করতে গিয়ে পাঠকদের প্রয়োজন, তাদের ভাষাগত দক্ষতা এবং বিষয়বস্তু কেমন হবে তা বিবেচনা করা উচিত।
                                </p>

                                <p className="leading-relaxed text-gray-600 mb-6 text-base sm:text-lg">
                                    বাংলাদেশের জন্য বাংলা ভাষায় কন্টেন্ট লেখা অত্যন্ত জরুরি। কারণ, দেশের অধিকাংশ মানুষ বাংলা ভাষায় কথা বলে এবং তারা তাদের স্থানীয় ভাষায় তথ্য গ্রহণ করতে স্বাচ্ছন্দ্য বোধ করে। বাংলা ভাষায় কন্টেন্ট লেখা হলে তা সাধারণ মানুষের কাছে দ্রুত পৌঁছে যায় এবং তাদের মধ্যে কন্টেন্টের প্রভাবও বেশি হয়। সংবাদমাধ্যম, ব্লগ, এবং বিভিন্ন ওয়েবসাইটে বাংলা ভাষায় কন্টেন্ট লেখা দেশের মানুষের কাছে অত্যন্ত গ্রহণযোগ্য হয়ে উঠেছে।
                                </p>

                                <p className="leading-relaxed text-gray-600 mb-6 text-base sm:text-lg">
                                    অন্যদিকে, ইংরেজি ভাষায় কন্টেন্ট লেখারও বিশেষ গুরুত্ব রয়েছে, বিশেষ করে যখন কন্টেন্ট আন্তর্জাতিক পাঠক বা গ্রাহকদের জন্য লেখা হয়। ইংরেজি ভাষা আন্তর্জাতিক ভাষা হওয়ায় বিদেশি পাঠক বা ব্যবসায়িক অংশীদারদের কাছে সহজে তথ্য পৌঁছাতে ইংরেজি ব্যবহার করা উত্তম। এছাড়া, বাংলাদেশের শিক্ষিত জনগোষ্ঠীও ইংরেজি ভাষায় লেখা কন্টেন্টের প্রতি আগ্রহী। তাই, যদি কন্টেন্টের লক্ষ্য থাকে আন্তর্জাতিক অঙ্গন, তাহলে ইংরেজিতে কন্টেন্ট লেখা উচিত।
                                </p>

                                <p className="leading-relaxed text-gray-600 mb-6 text-base sm:text-lg">
                                    যাই হোক, কন্টেন্টের ভাষা নির্ধারণের ক্ষেত্রে সহজ ও প্রাঞ্জলতা বজায় রাখা গুরুত্বপূর্ণ। পাঠক যদি কন্টেন্টের ভাষা বুঝতে না পারে, তাহলে কন্টেন্ট তার মূল উদ্দেশ্য পূরণ করতে ব্যর্থ হবে। বাংলাদেশের প্রেক্ষাপটে কন্টেন্ট লেখার ক্ষেত্রে স্থানীয় ভাষা, প্রয়োজন এবং পাঠকদের সাথে যোগাযোগ স্থাপনের বিষয়গুলো বিবেচনা করে কাজ করতে হবে।
                                </p>

                                {/* <KeywordTypes /> */}
                            </div>
                        </section>

                        {/* SEO কেন করা হয়? */}
                        <section className="mt-12 pt-8 border-t border-gray-200">
                            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-8 border-l-4 border-green-500 pl-3">
                                Content Writing এর ক্ষেত্রে কোন বিষয়টি করা উচিত নয়?

                            </h1>

                            <div className="w-full mb-6">
                                <img
                                    className="w-full h-auto max-h-96 rounded-lg object-cover shadow-lg"
                                    src="imgas/simpol-bolog-imgas/2.jpg"
                                    alt="Why is SEO done"
                                />
                            </div>


                            <p className="mb-5 text-gray-700 leading-relaxed">
                                কন্টেন্ট লেখার সময় কিছু সাধারণ ভুল রয়েছে, যা এড়িয়ে চলা উচিত। কারণ এই ভুলগুলো পাঠকের মনোযোগ হারাতে পারে এবং কন্টেন্টের কার্যকারিতা কমিয়ে দিতে পারে। Content Writing এর ক্ষেত্রে কোন বিষয়টি করা উচিত নয় এ সম্পর্কে নিম্নে বিস্তারিতভাবে আলোচনা করা হলো-
                            </p>




                            <p className="mb-5 text-gray-700 leading-relaxed">
                                <span className="font-bold text-xl mb-2 text-black">1. অতিমাত্রায় জটিল ভাষা ব্যবহার:</span>
                                কন্টেন্ট যখন খুব জটিল ভাষায় লেখা হয়, তখন তা পাঠকের জন্য বোঝা কঠিন হয়ে যায়। কন্টেন্টকে সহজ ভাষায় এবং প্রাঞ্জলভাবে লেখা উচিত
                            </p>

                            <p className="mb-5 text-gray-700 leading-relaxed">
                                <span className="font-bold text-xl mb-2 text-black">2. একই বিষয় বারবার আলোচনা:</span>
                                একটিই বিষয় নিয়ে বারবার আলোচনা করলে পাঠকের আগ্রহ হারিয়ে যায়। তাই বিষয় বৈচিত্র্য রাখা জরুরি।
                            </p>

                            <p className="mb-5 text-gray-700 leading-relaxed">
                                <span className="font-bold text-xl mb-2 text-black">3.অপ্রাসঙ্গিক তথ্য অন্তর্ভুক্ত করা:</span>
                                কন্টেন্টের মধ্যে অপ্রাসঙ্গিক তথ্য অন্তর্ভুক্ত করলে সেটি পড়তে বিরক্তিকর হয়ে ওঠে এবং পাঠককে বিভ্রান্ত করে।
                            </p>


                            <p className="mb-5 text-gray-700 leading-relaxed">
                                <span className="font-bold text-xl mb-2 text-black">4.ভুল বানান এবং ব্যাকরণগত ত্রুটি: </span>
                                গ্রামাটিকাল ভুল এবং বানান ভুল কন্টেন্টের মান কমিয়ে দেয়। এতে পাঠকের দৃষ্টি অন্যদিকে চলে যেতে পারে।
                            </p>

                            <p className="mb-5 text-gray-700 leading-relaxed">
                                <span className="font-bold text-xl mb-2 text-black">5.প্লেজারিজম বা কপি করা লেখা:</span>
                                অন্যের লেখা বা কন্টেন্ট কপি করা নৈতিকভাবে ভুল এবং এটি পাঠকের কাছে আপনার বিশ্বাসযোগ্যতা নষ্ট করতে পারে।
                            </p>

                            <p className="mb-5 text-gray-700 leading-relaxed">
                                <span className="font-bold text-xl mb-2 text-black">6.কোনো উপসংহার না থাকা:</span>
                                কন্টেন্ট যদি কোনো সুনির্দিষ্ট উপসংহার না থাকে, তাহলে তা অসম্পূর্ণ এবং অস্পষ্ট মনে হয়।
                            </p>

                            <p className="mb-5 text-gray-700 leading-relaxed">
                                <span className="font-bold text-xl mb-2 text-black">7. অতিরিক্ত তথ্য দিয়ে কন্টেন্টকে ভারী করা:</span>
                                অত্যধিক তথ্য ব্যবহার করলে কন্টেন্ট দীর্ঘ ও বিরক্তিকর হয়ে যায়। প্রয়োজনীয় তথ্য সুনির্দিষ্টভাবে উপস্থাপন করা উচিত।
                            </p>

                            <p className="mb-5 text-gray-700 leading-relaxed">
                                <span className="font-bold text-xl mb-2 text-black">8.পাঠকের প্রয়োজন উপেক্ষা করা:</span>
                                পাঠকের প্রয়োজন এবং চাহিদা মাথায় রেখে কন্টেন্ট তৈরি করা উচিত। পাঠকের সমস্যার সমাধান দেওয়া উচিত কন্টেন্টের মূল লক্ষ্য।
                            </p>







                        </section>

                        {/* বহুল জিজ্ঞাসিত প্রশ্ন ও উত্তর সমূহ (FAQ) */}
                        <section className="mt-12 pt-8 border-t-2 border-dashed border-gray-300">
                            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-6">
                                বহুল জিজ্ঞাসিত প্রশ্ন ও উত্তর সমূহ (FAQ) 💡
                            </h1>
                            <p className="mb-6 text-gray-700">
                                “কন্টেন্ট কোন ভাষায় লিখতে হয়?” এই বিষয়ে আপনার মনে বেশ কয়েকটি প্রশ্ন উঁকি দিচ্ছে? তাহলে চলুন জেনে নেই সেই সকল প্রশ্ন ও উত্তরগুলো-
                            </p>

                            {/* FAQ আইটেম */}
                            <div className="space-y-4">
                                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                                    <h4 className="text-xl font-semibold text-gray-900 mb-2">বাংলাদেশে কোন ধরনের কন্টেন্ট বেশি জনপ্রিয়?</h4>
                                    <p className="text-gray-600">বাংলাদেশে ব্লগ পোস্ট, সোশ্যাল মিডিয়া পোস্ট, ভিডিও কন্টেন্ট এবং নিউজ আর্টিকেল বেশি জনপ্রিয়। শিক্ষামূলক এবং বিনোদনমূলক কন্টেন্টও অনেক চাহিদাসম্পন্ন।</p>
                                </div>
                                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                                    <h4 className="text-xl font-semibold text-gray-900 mb-2">কন্টেন্ট রাইটিং কি একটি পেশা হিসেবে গড়ে তোলা যায়?</h4>
                                    <p className="text-gray-600">হ্যাঁ, বাংলাদেশে কন্টেন্ট রাইটিং একটি সম্ভাবনাময় পেশা। অনেক ফ্রিল্যান্সার এবং কোম্পানি কন্টেন্ট রাইটিংয়ের মাধ্যমে আয় করছে।</p>
                                </div>
                            </div>
                        </section>

                        {/* উপসংহার */}
                        <section className="mt-12 pt-8 border-t border-gray-200">
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-red-500 mb-4">
                                উপসংহার 🌟
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                উপরোক্ত আলোচনা থেকে আমরা কন্টেন্ট কোন ভাষায় লিখতে হয় এ সম্পর্কে বিস্তারিত জানলাম। বাংলাদেশে কন্টেন্ট রাইটিং একটি ক্রমবর্ধমান ক্ষেত্র। এই মাধ্যমটি শুধু ব্যক্তিগত মতামত প্রকাশের নয়, বরং প্রতিষ্ঠান ও ব্র্যান্ডগুলির জন্য একটি শক্তিশালী বিপণন কৌশল হয়ে উঠেছে। সঠিকভাবে কন্টেন্ট তৈরি করতে পারলে তা মানুষের মনোযোগ আকর্ষণ করে এবং তাদের চিন্তাভাবনায় পরিবর্তন আনতে সক্ষম হয়। সহজ, প্রাসঙ্গিক এবং দর্শক বা পাঠকের জন্য উপযোগী কন্টেন্ট তৈরি করার মাধ্যমেই সফল কন্টেন্ট রাইটিং সম্ভব। কন্টেন্ট রাইটিংয়ের ক্ষেত্রে আমাদের উচিত পাঠকের চাহিদা এবং সামাজিক, সাংস্কৃতিক ও ভাষাগত বৈশিষ্ট্যগুলো মাথায় রেখে কন্টেন্ট তৈরি করা। এছাড়াও আপনার জ্ঞানকে প্রসারিত করার জন্য এ
                                <span className="text-amber-800 font-bold">
                                    কনটেন্ট টাইপ গুলো কি কি?
                                </span>
                                সম্পর্কিত আর্টিকেলটি পড়ুন।
                            </p>
                            <p className="mt-6 text-gray-500 italic">
                                “কন্টেন্ট কোন ভাষায় লিখতে হয়?” সম্পর্কিত কোন প্রশ্ন থাকে তাহলে অবশ্যই নিচে কমেন্ট করবেন। আর এমন🙏
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

export default Contenloungouse;
