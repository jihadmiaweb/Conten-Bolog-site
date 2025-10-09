

import Sidebar from "@/components/pages/Home/rightSiteHome";
import { useState } from "react";

import { Link } from "react-router-dom";

function DomienAtourteBolog() {
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
                            src=" imgas/sou-imgas/8.jpg"
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
                            কিভাবে ডোমেইন অথরিটি বাড়ানো যায়?
                        </h1>

                        {/* ভূমিকা */}
                        <p className="leading-relaxed text-gray-600 mb-8 text-base pb-4 sm:text-lg">
                            কিভাবে ডোমেইন অথরিটি বাড়ানো যায় এটি একটি গুরুত্বপূর্ণ প্রশ্ন, কারণ এটি আপনার ওয়েবসাইটের সার্চ ইঞ্জিন র‍্যাঙ্কিং উন্নত করতে এবং অনলাইন উপস্থিতি শক্তিশালী করতে সহায়ক। সঠিক এসইও কৌশল, উচ্চ মানের ব্যাকলিংক, এবং প্রাসঙ্গিক কনটেন্টের মাধ্যমে ডোমেইন অথরিটি বাড়ানো সম্ভব। বর্তমান ইন্টারনেটের যুগে একটি ওয়েবসাইটের গুরুত্ব ক্রমবর্ধমান। ব্যক্তিগত ব্লগ থেকে শুরু করে বৃহৎ ব্যবসা প্রতিষ্ঠান, সকলেই নিজেদের উপস্থিতি ইন্টারনেটে দৃঢ় করতে চায়। একটি ওয়েবসাইটের জন্য সার্চ ইঞ্জিনে ভালো অবস্থানে থাকা অত্যন্ত গুরুত্বপূর্ণ। গুগল এবং অন্যান্য সার্চ ইঞ্জিনে উপরের দিকে থাকা মানে আপনার ওয়েবসাইটে বেশি ভিজিটর আসবে, যা ব্যবসা বৃদ্ধি, ব্র্যান্ডিং এবং বিজ্ঞাপনী আয়ের সুযোগ তৈরি করে। এইসব কিছু অর্জন করতে একটি প্রধান ভূমিকা পালন করে ডোমেইন অথরিটি (Domain Authority বা DA)।
                        </p>
                        <p className="leading-relaxed text-gray-600 mb-8 text-base pb-4 sm:text-lg">
                            ডোমেইন অথরিটি মূলত একটি স্কোর যা ওয়েবসাইটের গুণগত মান ও সার্চ ইঞ্জিনের সামনে তার গুরুত্ব নির্দেশ করে। উচ্চ ডোমেইন অথরিটি মানে আপনার ওয়েবসাইট সার্চ রেজাল্টে উপরে থাকার সম্ভাবনা বেশি। এই আর্টিকেলে আমরা ডোমেইন অথরিটি কীভাবে কাজ করে, এটি কেন গুরুত্বপূর্ণ এবং কীভাবে আপনি এটি বৃদ্ধি করতে পারেন তা নিয়ে বিস্তারিত আলোচনা করবো।
                        </p>




                        <h1 className="text-3xl sm:text-3xl md:text-3xl  font-extrabold mb-6 border-b-4 border-blue-100 pb-4 leading-tight">
                            ডোমেইন অথরিটি কি?
                        </h1>

                        <p className="leading-relaxed text-gray-600 mb-6 text-base sm:text-lg">
                            ডোমেইন অথরিটি (Domain Authority বা DA) হল একটি মেট্রিক যা Moz নামক একটি প্রতিষ্ঠান দ্বারা তৈরি করা হয়েছে। এটি ১ থেকে ১০০ এর মধ্যে একটি স্কেল যা সার্চ ইঞ্জিনে একটি ওয়েবসাইটের শক্তি ও প্রভাব নির্ধারণ করে। স্কোর যত বেশি হবে, ওয়েবসাইটের সার্চ ইঞ্জিন র‍্যাঙ্কিং তত বেশি ভালো হওয়ার সম্ভাবনা।
                        </p>

                        <p className="leading-relaxed text-gray-600 mb-6 text-base sm:text-lg">
                            ডোমেইন অথরিটি মূলত ওয়েবসাইটের ব্যাকলিঙ্ক প্রোফাইল, কন্টেন্টের গুণগত মান, ওয়েবসাইটের বয়স এবং অন্যান্য SEO ফ্যাক্টরের ভিত্তিতে নির্ধারিত হয়। এটি সরাসরি গুগলের র‍্যাঙ্কিং ফ্যাক্টর নয়, তবে এটি একটি ভালো ইন্ডিকেটর যে ওয়েবসাইটটি সার্চ ইঞ্জিনে কতটা ভালো পারফর্ম করতে পারে। নতুন ওয়েবসাইটগুলির DA সাধারণত কম থাকে, তবে সময়ের সাথে সাথে, নিয়মিত আপডেটেড এবং মানসম্পন্ন কন্টেন্ট, এবং ভালো ব্যাকলিঙ্ক প্রোফাইল থাকার মাধ্যমে এটি বৃদ্ধি পেতে পারে।
                        </p>



                        {/* এসইও কি? */}
                        <section className="mt-12">
                            <h2 className="text-3xl sm:text-3xl font-bold text-gray-800 mb-6 border-l-4 border-red-500 pl-3">
                                কিভাবে ডোমেইন অথরিটি বাড়ানো যায়?
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
                                    ডোমেইন অথরিটি বাড়ানোর প্রক্রিয়া সময়সাপেক্ষ এবং ধৈর্য প্রয়োজন। এটি কোনো সহজ বা একদিনের কাজ নয়। কিভাবে ডোমেইন অথরিটি বাড়ানো যায় এবং তাদের বিস্তারিত বর্ণনা নিচে প্রদান করা হলো-
                                </p>

                                {/* <KeywordTypes /> */}
                            </div>
                        </section>

                        {/* SEO কেন করা হয়? */}
                        <section className="mt-12 pt-8 border-t border-gray-200">
                            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-8 border-l-4 border-green-500 pl-3">
                                কিওয়ার্ড রিসার্চ কেন এত গুরুত্বপূর্ণ

                            </h1>

                            <div className="w-full mb-6">
                                <img
                                    className="w-full h-auto max-h-96 rounded-lg object-cover shadow-lg"
                                    src="imgas/simpol-bolog-imgas/2.jpg"
                                    alt="Why is SEO done"
                                />
                            </div>

                            <span className="font-bold text-2xl mb-2 text-black">১| মানসম্পন্ন কন্টেন্ট তৈরি করুন</span>
                            <p className="mb-5 text-gray-700 leading-relaxed">
                                কন্টেন্ট একটি ওয়েবসাইটের প্রাণ। মানসম্পন্ন এবং ইউনিক কন্টেন্ট কেবলমাত্র আপনার ওয়েবসাইটে ভিজিটর ধরে রাখে না, বরং এটি সার্চ ইঞ্জিনের র‍্যাঙ্কিংয়েও সহায়তা করে। গুগল এমন কন্টেন্ট পছন্দ করে যা পাঠকের জন্য মূল্যবান। কন্টেন্টের মাধ্যমে আপনার ভিজিটরদের সমস্যা সমাধান করতে পারলে আপনার ওয়েবসাইটের বিশ্বাসযোগ্যতা বাড়বে।
                            </p>

                            <p className="mb-2">

                                নতুন কন্টেন্ট তৈরি করার সময় বিষয়টি নিশ্চিত করুন যে তা হবে ইনফরমেটিভ, আকর্ষণীয় এবং সঠিক তথ্যসমৃদ্ধ। কন্টেন্টের দৈর্ঘ্যও গুরুত্বপূর্ণ। লম্বা কন্টেন্ট সার্চ ইঞ্জিনের জন্য ভালো, কারণ এতে তথ্যের গভীরতা এবং প্রাসঙ্গিকতা বেশি থাকে। নিয়মিতভাবে নতুন ও ইউনিক কন্টেন্ট তৈরি করে ওয়েবসাইট আপডেট রাখা ডোমেইন অথরিটি বৃদ্ধির একটি গুরুত্বপূর্ণ কৌশল।
                            </p>

                            <span className="font-bold text-2xl mb-2 text-black">২| উচ্চমানের ব্যাকলিঙ্ক তৈরি করুন</span>
                            <p className="mb-5 text-gray-700 leading-relaxed">
                                ডোমেইন অথরিটি বৃদ্ধির জন্য ব্যাকলিঙ্ক একটি প্রধান উপাদান। ব্যাকলিঙ্ক হলো অন্য কোনো ওয়েবসাইট থেকে আপনার ওয়েবসাইটে আসা লিঙ্ক। তবে, এখানে শুধু সংখ্যায় নয়, গুণমানও অত্যন্ত গুরুত্বপূর্ণ।
                            </p>

                            <p className="mb-2">
                                উচ্চমানের এবং প্রাসঙ্গিক ওয়েবসাইট থেকে ব্যাকলিঙ্ক পেলে গুগল আপনার ওয়েবসাইটকে বিশ্বাসযোগ্য মনে করবে এবং এটি আপনার র‍্যাঙ্কিং উন্নত করবে। ব্যাকলিঙ্ক পেতে গেস্ট পোস্টিং, ইনফ্লুয়েন্সার আউটরিচ, এবং কন্টেন্ট মার্কেটিং করতে পারেন। তবে, সাবধান থাকতে হবে যেন স্প্যামি বা কম মানের সাইট থেকে ব্যাকলিঙ্ক না হয়, কারণ তা আপনার ডোমেইন অথরিটিতে নেতিবাচক প্রভাব ফেলতে পারে।
                            </p>


                            <span className="font-bold text-2xl mb-2 text-black">৩| অভ্যন্তরীণ লিঙ্কিং (Internal Linking) উন্নত করুন</span>
                            <p className="mb-5 text-gray-700 leading-relaxed">
                                অভ্যন্তরীণ লিঙ্কিং আপনার ওয়েবসাইটের বিভিন্ন পেজের মধ্যে সংযোগ স্থাপন করে। এটি ব্যবহারকারীর অভিজ্ঞতা উন্নত করে এবং সার্চ ইঞ্জিনকে ওয়েবসাইটের স্ট্রাকচার বুঝতে সাহায্য করে।
                            </p>
                            <p className="mb-2">সঠিক অভ্যন্তরীণ লিঙ্কিং সার্চ ইঞ্জিনকে আপনার ওয়েবসাইটের কন্টেন্টের গুরুত্ব বুঝতে সাহায্য করে এবং কীভাবে আপনার পেজগুলো একে অপরের সঙ্গে সম্পর্কিত তা নির্ধারণ করে। এতে ওয়েবসাইটের বিভিন্ন পেজের জন্য পেইজ অথরিটি বৃদ্ধি পায় এবং সামগ্রিকভাবে ডোমেইন অথরিটি বাড়ে।</p>


                            <span className="font-bold text-2xl mb-2 text-black">৪| ওয়েবসাইটের লোডিং স্পিড বৃদ্ধি করুন</span>
                            <p className="mb-5 text-gray-700 leading-relaxed">
                                গুগল এবং অন্যান্য সার্চ ইঞ্জিন দ্রুত লোড হওয়া ওয়েবসাইটকে উচ্চ মূল্যায়ন করে। ব্যবহারকারীরা ধীরগতির ওয়েবসাইট পছন্দ করে না এবং এটি আপনার বাউন্স রেট বৃদ্ধি করতে পারে। ফলে সার্চ ইঞ্জিন আপনার ওয়েবসাইটকে নিচের দিকে সরিয়ে দেবে।
                            </p>
                            <p className="m2">ওয়েবসাইটের লোডিং স্পিড বৃদ্ধির জন্য বড় ইমেজ ফাইল কমপ্রেস করা, কম সংখ্যক HTTP রিকোয়েস্ট করা, এবং ফাস্ট হোস্টিং সার্ভার ব্যবহার করা গুরুত্বপূর্ণ। এছাড়া, ব্রাউজার ক্যাশিং এবং কন্টেন্ট ডেলিভারি নেটওয়ার্ক (CDN) ব্যবহার করা ওয়েবসাইটের গতি উন্নত করতে পারে।</p>

                            <span className="font-bold text-2xl mb-2 text-black">৫| মোবাইল ফ্রেন্ডলি ওয়েবসাইট তৈরি করুন</span>
                            <p className="mb-5 text-gray-700 leading-relaxed">
                                নিয়মিতভাবে এসইও অডিট করা আপনার ওয়েবসাইটের জন্য অত্যন্ত গুরুত্বপূর্ণ। এটি আপনাকে জানতে সহায়তা করে আপনার ওয়েবসাইটের কোন জায়গাগুলো উন্নতির প্রয়োজন। এসইও অডিট করতে আপনার ওয়েবসাইটের অন-পেজ এবং অফ-পেজ ফ্যাক্টরগুলো পর্যালোচনা করতে হবে।
                            </p>
                            <p className="mb-2">অডিটের মাধ্যমে আপনি জানতে পারবেন কোন কীওয়ার্ডে আপনি র‍্যাঙ্ক করছেন, আপনার ব্যাকলিঙ্ক প্রোফাইল কেমন, কোন পেজগুলো ভালো পারফর্ম করছে, এবং কোন জায়গায় উন্নতির প্রয়োজন। এই বিশ্লেষণগুলো আপনাকে সঠিক কৌশল নিতে সহায়তা করবে এবং আপনার ডোমেইন অথরিটি বৃদ্ধি করতে সহায়তা করবে।</p>

                            <span className="font-bold text-2xl mb-2 text-black">৭| সামাজিক যোগাযোগ মাধ্যমে কার্যক্রম বৃদ্ধি করুন</span>
                            <p className="mb-5 text-gray-700 leading-relaxed">
                                সামাজিক যোগাযোগ মাধ্যম যেমন ফেসবুক, টুইটার, লিঙ্কডইন ইত্যাদি ব্যবহার করে আপনার কন্টেন্ট প্রচার করা ডোমেইন অথরিটি বৃদ্ধিতে সহায়তা করতে পারে। সোশ্যাল মিডিয়া শেয়ার এবং ব্যাকলিঙ্কের মাধ্যমে আপনি আপনার কন্টেন্টে আরো বেশি ভিজিটর আনতে পারেন।
                            </p>
                            <p className="mb-2">এটি শুধু ট্রাফিক বৃদ্ধি করে না, বরং আপনার ব্র্যান্ডের উপস্থিতি ও বিশ্বাসযোগ্যতাও বাড়ায়। গুগলও সোশ্যাল সিগন্যালকে গুরুত্বপূর্ণ মনে করে এবং এর মাধ্যমে আপনার ওয়েবসাইটের সার্চ র‍্যাঙ্কিং উন্নত হতে পারে।</p>

                            <span className="font-bold text-2xl mb-2 text-black">৮| নিয়মিতভাবে আপডেটেড কন্টেন্ট প্রদান করুন</span>
                            <p className="mb-5 text-gray-700 leading-relaxed">
                                পুরোনো কন্টেন্ট নিয়মিতভাবে আপডেট করে রাখতে হবে যাতে তা সর্বশেষ তথ্য প্রদান করে। গুগল নতুন এবং আপডেটেড কন্টেন্টকে বেশি মূল্যায়ন করে। এছাড়া, নিয়মিত আপডেটেড কন্টেন্ট ইউজারদের জন্য কার্যকর এবং আকর্ষণীয় থাকে।
                            </p>



                            <span className="font-bold text-2xl mb-2 text-black">৯| টেকনিক্যাল এসইও উন্নত করুন</span>
                            <p className="mb-5 text-gray-700 leading-relaxed">
                                টেকনিক্যাল এসইও ওয়েবসাইটের ব্যাকেন্ড পারফরম্যান্সের সাথে সম্পর্কিত। সাইট ম্যাপ, Robots.txt, SSL সার্টিফিকেট ইত্যাদি উপাদান টেকনিক্যাল এসইও এর অংশ। এই বিষয়গুলির সঠিক কনফিগারেশন নিশ্চিত করুন যাতে সার্চ ইঞ্জিন আপনার ওয়েবসাইটকে সহজে ক্রল করতে পারে।
                            </p>



                            <span className="font-bold text-2xl mb-2 text-black">১০| কম্পিটিটর অ্যানালাইসিস করুন</span>
                            <p className="mb-5 text-gray-700 leading-relaxed">
                                আপনার প্রতিযোগীদের বিশ্লেষণ করা আপনাকে তাদের শক্তি ও দুর্বলতা বোঝাতে সাহায্য করে। তারা কোন কৌশল ব্যবহার করছে এবং তাদের কন্টেন্ট কেমন তা বিশ্লেষণ করে আপনি নিজে কিভাবে উন্নতি করতে পারবেন তা নির্ধারণ করুন। প্রতিযোগিতামূলক বিশ্লেষণ আপনার কৌশলকে আরও কার্যকরী করতে সহায়ক হতে পারে।
                            </p>




                        </section>

                        {/* বহুল জিজ্ঞাসিত প্রশ্ন ও উত্তর সমূহ (FAQ) */}
                        <section className="mt-12 pt-8 border-t-2 border-dashed border-gray-300">
                            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-6">
                                বহুল জিজ্ঞাসিত প্রশ্ন ও উত্তর সমূহ (FAQ) 💡
                            </h1>
                            <p className="mb-6 text-gray-700">
                                “কিভাবে ডোমেইন অথরিটি বাড়ানো যায়?” এই বিষয়ে আপনার মনে বেশ কয়েকটি প্রশ্ন উঁকি দিচ্ছে? তাহলে চলুন জেনে নেই সেই সকল প্রশ্ন ও উত্তরগুলো-
                            </p>

                            {/* FAQ আইটেম */}
                            <div className="space-y-4">
                                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                                    <h4 className="text-xl font-semibold text-gray-900 mb-2">ডোমেইন অথরিটি কেন গুরুত্বপূর্ণ?</h4>
                                    <p className="text-gray-600">ডোমেইন অথরিটি একটি ওয়েবসাইটের সার্চ ইঞ্জিন র‍্যাঙ্কিং ক্ষমতা নির্দেশ করে এবং প্রতিযোগিতায় এগিয়ে থাকতে সহায়ক হয়।</p>
                                </div>
                                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                                    <h4 className="text-xl font-semibold text-gray-900 mb-2">ডোমেইন অথরিটি বাড়াতে কত সময় লাগে?</h4>
                                    <p className="text-gray-600">ডোমেইন অথরিটি বাড়ানোর জন্য নির্দিষ্ট সময় নেই; এটি সাইটের অবস্থা এবং কৌশলের উপর নির্ভর করে কয়েক মাস থেকে এক বছর পর্যন্ত সময় লাগতে পারে।</p>
                                </div>
                            </div>
                        </section>

                        {/* উপসংহার */}
                        <section className="mt-12 pt-8 border-t border-gray-200">
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-red-500 mb-4">
                                উপসংহার 🌟
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                উপরোক্ত আলোচনা থেকে আমরা কিভাবে ডোমেইন অথরিটি বাড়ানো যায় এ সম্পর্কে বিস্তারিত জানলাম। ডোমেইন অথরিটি ওয়েবসাইটের সার্চ ইঞ্জিন র‍্যাঙ্কিংয়ের একটি গুরুত্বপূর্ণ সূচক। এটি আপনার ওয়েবসাইটের শক্তি এবং গুণমান মাপার একটি উপায়। উচ্চ ডোমেইন অথরিটি প্রাপ্তি শুধুমাত্র সময়ের ব্যাপার, যদি আপনি নিয়মিতভাবে মানসম্পন্ন কন্টেন্ট তৈরি করেন, উচ্চমানের ব্যাকলিঙ্ক অর্জন করেন, এবং অন্যান্য এসইও কৌশল অনুসরণ করেন। মনোযোগ সহকারে এবং ধৈর্যের সাথে কাজ করলে, আপনার ওয়েবসাইটের ডোমেইন অথরিটি বৃদ্ধি পাবে এবং সার্চ ইঞ্জিনে উচ্চ স্থান অধিকার করবে। এছাড়াও আপনার জ্ঞানকে প্রসারিত করার জন্য সম্পর্কিত আর্টিকেলটি পড়ুন।
                                <span className="text-amber-800 font-bold">
                                    ব্যাকলিংক কি? ব্যাকলিংক এর কাজ কি
                                </span>

                            </p>
                            <p className="mt-6 text-gray-500 italic">
                                “কিভাবে ডোমেইন অথরিটি বাড়ানো যায়?” সম্পর্কিত কোন প্রশ্ন থাকে তাহলে অবশ্যই নিচে কমেন্ট করবেন। আর এমন ধরনের গুরুত্বপূর্ণ বিষয় গুলো বিনামূল্যে জানতে আমাদের সাথে থাকবেন। ধন্যবাদ, ভালো থাকুন, সুস্থ থাকুন।🙏
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

export default DomienAtourteBolog;
