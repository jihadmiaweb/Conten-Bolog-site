
import Sidebar from "@/components/pages/Home/rightSiteHome";
import { useState } from "react";

import { Link } from "react-router-dom";

function NiseContenBolog() {
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
                            src=" imgas/bloging-images/9.jpg"
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
                            নিশ কি? নিশ কেন গুরুত্বপূর্ণ?
                        </h1>

                        {/* ভূমিকা */}
                        <p className="leading-relaxed text-gray-600 mb-8 text-base pb-4 sm:text-lg">
                            নিশ কি? নিশ কেন গুরুত্বপূর্ণ এ সম্পর্কে জেনে আপনার নিজের ব্লগ/ব্যবসার নিশ নির্বাচন করার গুরুত্ব উপলব্ধি করবেন সহজেই। বিস্তারিত পড়ুন ব্লগিং বর্তমান ডিজিটাল যুগে একটি গুরুত্বপূর্ণ মাধ্যম হয়ে উঠেছে, যেখানে মানুষ তাদের চিন্তা, অভিজ্ঞতা এবং তথ্য শেয়ার করতে পারে। এটি কেবল ব্যক্তিগত উপলব্ধি বা শখ নয়, বরং একটি প্রফেশনাল এবং ব্যবসায়িক মাধ্যম হিসেবেও ব্যবহৃত হয়। আপনি যদি একটি ব্লগ শুরু করতে চান বা ইতিমধ্যে ব্লগ লিখছেন, তবে নিশ নির্ধারণ করা আপনার ব্লগের সফলতার জন্য অত্যন্ত গুরুত্বপূর্ণ। আজকের এই পোস্টটি নিশ কি? নিশ কেন গুরুত্বপূর্ণ এ বিষয় নিয়েই সাজানো হয়েছে তাই এই পোস্টটি সম্পূর্ণ পড়ার অনুরোধ রইল।
                        </p>
                        <p className="leading-relaxed text-gray-600 mb-8 text-base pb-4 sm:text-lg">
                            কন্টেন্ট রাইটিংয়ের গুরুত্ব এত বেশি যে, এটি আজকের দিনের বিপণন কৌশলের মূল অংশ হয়ে উঠেছে। একটি সফল কন্টেন্ট রাইটার কেবল সুন্দরভাবে লিখতে জানলেই হয় না, বরং তাকে SEO (সার্চ ইঞ্জিন অপটিমাইজেশন), কীওয়ার্ড প্লেসমেন্ট এবং পাঠকের মনস্তত্ত্বও বুঝতে হয়। কন্টেন্ট রাইটিংয়ের মূল উদ্দেশ্য হলো, তথ্য পৌঁছানোর পাশাপাশি এমন একটি সংযোগ তৈরি করা যা পাঠক বা গ্রাহককে নির্দিষ্ট পদক্ষেপ নিতে প্ররোচিত করবে। এই ব্লগ পোস্টে আমরা কন্টেন্ট রাইটিং কত প্রকার ও কি কি এ সম্পর্কে বিস্তারিত জানবো।
                        </p>


                        <h1 className="text-3xl sm:text-3xl md:text-3xl  font-extrabold mb-6 border-b-4 border-blue-100 pb-4 leading-tight">
                            নিশ কি?
                        </h1>

                        <p className="leading-relaxed text-gray-600 mb-6 text-base sm:text-lg">
                            ব্লগ নিশ বলতে বোঝায় ব্লগের নির্দিষ্ট একটি বিষয় বা ক্ষেত্র, যা নিয়ে একটি ব্লগ লেখা হয়। এটি একটি নির্দিষ্ট শ্রেণীর পাঠকদের উদ্দেশ্য করে তৈরি করা হয় এবং তাদের আগ্রহের বিষয়বস্তু নিয়ে আলোচনা করে। উদাহরণস্বরূপ, খাদ্য ব্লগ, ভ্রমণ ব্লগ, প্রযুক্তি ব্লগ, স্বাস্থ্য ব্লগ ইত্যাদি। প্রতিটি নিশ ব্লগের বিষয়বস্তু এবং লক্ষ্য ভিন্ন হতে পারে, তবে উদ্দেশ্য একটাই – নির্দিষ্ট পাঠকদের জন্য মানসম্পন্ন এবং প্রাসঙ্গিক তথ্য প্রদান করা।
                        </p>





                        {/* এসইও কি? */}
                        <section className="mt-12">
                            <h2 className="text-3xl sm:text-3xl font-bold text-gray-800 mb-6 border-l-4 border-red-500 pl-3">
                                নিশ কেন গুরুত্বপূর্ণ?
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
                                    নিশ গুরুত্বপূর্ণ কারণ এটি ব্যবসাকে একটি নির্দিষ্ট লক্ষ্যবাজারের ওপর মনোযোগ দিতে সহায়তা করে, যা প্রতিযোগিতামূলক সুবিধা ও বিশেষীকরণ নিশ্চিত করে। এছাড়া, এটি নির্দিষ্ট কাস্টমারদের প্রয়োজন মেটানোর মাধ্যমে ব্যবসার সাফল্য ও বৃদ্ধি ত্বরান্বিত করে। নিম্নে ব্লগ নিশ কেন গুরুত্বপূর্ণ এ সম্পর্কে বিস্তারিত তুলে ধরা হল-
                                </p>


                            </div>
                        </section>

                        {/* SEO কেন করা হয়? */}
                        <section className="mt-12 pt-8 border-t border-gray-200">
                            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-8 border-l-4 border-green-500 pl-3">
                                ১। নির্দিষ্ট পাঠকদের টার্গেট করা

                            </h1>

                            <div className="w-full mb-6">
                                <img
                                    className="w-full h-auto max-h-96 rounded-lg object-cover shadow-lg"
                                    src="imgas/simpol-bolog-imgas/2.jpg"
                                    alt="Why is SEO done"
                                />
                            </div>

                            <p className="mb-5 text-gray-700 leading-relaxed">
                                নিশ ব্লগিং এর মাধ্যমে আপনি নির্দিষ্ট একটি শ্রেণীর পাঠকদের টার্গেট করতে পারেন। এটি আপনাকে একটি নিবেদিত পাঠকবৃন্দ তৈরি করতে সহায়তা করে, যারা নিয়মিত আপনার ব্লগ পড়তে আগ্রহী থাকবে। একটি নির্দিষ্ট নিশ নির্ধারণ করার মাধ্যমে আপনি সেই বিষয়ে বিশেষজ্ঞ হয়ে উঠতে পারেন, যা আপনার ব্লগের উপর পাঠকদের আস্থা বাড়ায়।
                            </p>




                            {/* কারণ ১: ট্রাফিক বৃদ্ধি */}
                            <div className="bg-blue-50 p-6 rounded-xl shadow-inner mb-6">
                                <h1 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-3 flex items-center">
                                    <span className="text-4xl mr-3"></span>
                                    ২। সঠিক বিষয়বস্তু প্রদান
                                </h1>

                                <div className="w-full mb-4">
                                    <img
                                        className="w-full h-auto max-h-80 rounded-lg object-cover shadow-md"
                                        src="imgas/simpol-bolog-imgas/3.jpg"
                                        alt="Increase Traffic with SEO"
                                    />
                                </div>

                                <p className="text-gray-700 leading-relaxed mb-4">
                                    একটি নিশ নির্ধারণ করার মাধ্যমে আপনি নির্দিষ্ট বিষয়বস্তু তৈরি করতে পারেন যা আপনার পাঠকদের জন্য প্রাসঙ্গিক এবং আকর্ষণীয় হবে। এটি আপনার ব্লগের মান বাড়ায় এবং পাঠকদের সন্তুষ্টি নিশ্চিত করে। উদাহরণস্বরূপ, যদি আপনার নিশ হয় স্বাস্থ্য এবং ফিটনেস, তবে আপনি সেই বিষয়ে স্বাস্থ্যকর খাবার, ব্যায়াম, এবং মানসিক সুস্থতা নিয়ে ব্লগ লিখতে পারেন। এতে আপনার পাঠকরা প্রাসঙ্গিক তথ্য পাবেন এবং আপনার ব্লগে আরও সময় ব্যয় করবেন।
                                </p>



                            </div>

                            {/* কারণ ২: ব্র্যান্ডের সচেতনতা বৃদ্ধি */}
                            <div className="bg-green-50 p-6 rounded-xl shadow-inner mb-6">
                                <h1 className="text-2xl sm:text-3xl font-bold text-green-700 mb-3 flex items-center">
                                    <span className="text-4xl mr-3"></span>
                                    ৩। সার্চ ইঞ্জিন অপটিমাইজেশন (SEO)
                                </h1>

                                <div className="w-full mb-4">
                                    <img
                                        className="w-full h-auto max-h-80 rounded-lg object-cover shadow-md"
                                        src="imgas/simpol-bolog-imgas/4.jpg"
                                        alt="Increase Brand Awareness"
                                    />
                                </div>

                                <p className="text-gray-700 leading-relaxed mb-4">
                                    নিশ ব্লগিং SEO এর ক্ষেত্রে খুবই কার্যকর। নির্দিষ্ট নিশের উপর ভিত্তি করে কিওয়ার্ড এবং বিষয়বস্তু তৈরি করা সহজ হয়, যা সার্চ ইঞ্জিনে আপনার ব্লগকে উচ্চ স্থান অর্জনে সহায়তা করে। এটি অর্গানিক ট্রাফিক বাড়ায় এবং আপনার ব্লগের জনপ্রিয়তা বৃদ্ধি করে। উদাহরণস্বরূপ, যদি আপনার নিশ হয় ভ্রমণ, তবে আপনি ‘ভ্রমণ টিপস’, ‘সেরা পর্যটন স্থান’, ‘কম বাজেটে ভ্রমণ’ ইত্যাদি কিওয়ার্ড ব্যবহার করতে পারেন, যা আপনার ব্লগকে সার্চ রেজাল্টে উচ্চ স্থানে নিয়ে আসবে।

                                </p>









                            </div>

                            {/* কারণ ৩: ব্যবসার বিক্রি বৃদ্ধি */}
                            <div className="bg-yellow-50 p-6 rounded-xl shadow-inner mb-6">
                                <h1 className="text-2xl sm:text-3xl font-bold text-yellow-700 mb-3 flex items-center">
                                    <span className="text-4xl mr-3"></span>
                                    ৪। প্রতিযোগিতার মুখোমুখি হওয়া
                                </h1>

                                <div className="w-full mb-4">
                                    <img
                                        className="w-full h-auto max-h-80 rounded-lg object-cover shadow-md"
                                        src="imgas/simpol-bolog-imgas/5.jpg"
                                        alt="Increase Business Sales"
                                    />
                                </div>

                                <p className="text-gray-700 leading-relaxed mb-4">
                                    নিশ ব্লগিং এর মাধ্যমে আপনি প্রতিযোগিতার মুখোমুখি হতে পারেন। যেহেতু আপনি নির্দিষ্ট একটি বিষয় নিয়ে ব্লগ লিখছেন, তাই সেই বিষয়ের অন্যান্য ব্লগের সাথে প্রতিযোগিতা করতে পারেন এবং আপনার ব্লগের মান উন্নত করতে পারবেন। এটি আপনাকে ক্রমাগত নতুন এবং মানসম্পন্ন বিষয়বস্তু তৈরি করতে প্রেরণা দেয় এবং আপনার ব্লগকে আরও জনপ্রিয় করে তোলে।
                                </p>









                            </div>

                            <div className="bg-blue-50 p-6 rounded-xl shadow-inner mb-6">
                                <h1 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-3 flex items-center">
                                    <span className="text-4xl mr-3"></span>
                                    ৫। বিজ্ঞাপন এবং আয়
                                </h1>

                                <div className="w-full mb-4">
                                    <img
                                        className="w-full h-auto max-h-80 rounded-lg object-cover shadow-md"
                                        src="imgas/simpol-bolog-imgas/3.jpg"
                                        alt="Increase Traffic with SEO"
                                    />
                                </div>

                                <p className="text-gray-700 leading-relaxed mb-4">
                                    নিশ ব্লগিং এর মাধ্যমে আপনি বিজ্ঞাপন এবং স্পন্সরশিপের মাধ্যমে ব্লগ থেকে আয় করতে পারেন। যেহেতু আপনি নির্দিষ্ট একটি বিষয়ে ব্লগ লিখছেন, তাই সেই বিষয়ে আগ্রহী বিজ্ঞাপনদাতারা আপনার ব্লগে বিজ্ঞাপন দিতে আগ্রহী হবে। এছাড়াও, আপনি নির্দিষ্ট পণ্য বা সেবা নিয়ে স্পন্সরশিপ পেতে পারেন, যা আপনার আয় বাড়াতে সহায়তা করবে।
                                </p>



                            </div>
                        </section>

                        {/* বহুল জিজ্ঞাসিত প্রশ্ন ও উত্তর সমূহ (FAQ) */}
                        <section className="mt-12 pt-8 border-t-2 border-dashed border-gray-300">
                            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-6">
                                বহুল জিজ্ঞাসিত প্রশ্ন ও উত্তর সমূহ (FAQ) 💡
                            </h1>
                            <p className="mb-6 text-gray-700">
                                “নিশ কি? নিশ কেন গুরুত্বপূর্ণ?” এই বিষয়ে আপনার মনে বেশ কয়েকটি প্রশ্ন উঁকি দিচ্ছে? তাহলে চলুন জেনে নেই সেই সকল প্রশ্ন ও উত্তরগুলো-
                            </p>

                            {/* FAQ আইটেম */}
                            <div className="space-y-4">
                                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                                        ব্লগের নিশ কিভাবে বের করব?
                                    </h4>
                                    <p className="text-gray-600">
                                        আপনার আগ্রহের বিষয়গুলি বিবেচনা করুন এবং কোন বিষয়গুলি নিয়ে আপনি গভীরভাবে লেখার যোগ্য তা নির্ধারণ করুন। এছাড়াও, নির্দিষ্ট পাঠকশ্রেণীর চাহিদা এবং সার্চ ইঞ্জিনে জনপ্রিয় কিওয়ার্ডগুলির উপর গবেষণা করুন।

                                    </p>
                                </div>
                                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                                        এসইও ট্রেন্ডিং টপিক কিভাবে বের করব?

                                    </h4>
                                    <p className="text-gray-600">
                                        এসইও ট্রেন্ডিং টপিক বের করার জন্য Google Trends, Ahrefs, এবং SEMrush ব্যবহার করতে পারেন। এছাড়াও সোশ্যাল মিডিয়া এবং জনপ্রিয় ব্লগ পর্যবেক্ষণ করেও ট্রেন্ডিং বিষয়বস্তু জানতে পারেন।
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
                                উপরোক্ত আলোচনা থেকে আমরা নিশ কি? নিশ কেন গুরুত্বপূর্ণ সম্পর্কে বিস্তারিত জানলাম। ব্লগ নিশ নির্ধারণ করা একটি গুরুত্বপূর্ণ পদক্ষেপ যা আপনার ব্লগিং যাত্রাকে সফল করতে সহায়তা করে। এটি কেবল নির্দিষ্ট পাঠকদের টার্গেট করতে সহায়তা করে না, বরং আপনার ব্লগের মান, SEO, এবং প্রতিযোগিতার মুখোমুখি হওয়ার ক্ষমতাকেও উন্নত করে। সঠিক নিশ নির্ধারণ এবং তার উপর ভিত্তি করে মানসম্পন্ন বিষয়বস্তু তৈরি করলে আপনার ব্লগ সফল হতে বাধ্য। আশা করি, এই ব্লগ পোস্টটি আপনাকে ব্লগ নিশ সম্পর্কে একটি পরিষ্কার ধারণা দিয়েছে এবং আপনি আপনার ব্লগিং যাত্রায় আরও সফল হবেন। এছাড়াও আপনার জ্ঞানকে প্রসারিত করার জন্য
                                <span className="text-amber-800 font-bold p-2">
                                    নিশ কি? ১০ টি নিশ এর নাম সমূহ
                                </span>
                                সম্পর্কে আর্টিকেলটি পড়তে পারেন।
                            </p>
                            <p className="mt-6 text-gray-500 italic">
                                <span className="font-bold">  “নিশ কি? নিশ কেন গুরুত্বপূর্ণ?”  </span>

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

export default NiseContenBolog;
