

import Sidebar from "@/components/pages/Home/rightSiteHome";
import { useState } from "react";

import { Link } from "react-router-dom";

function SeoImasBolog() {
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
                            src=" imgas/sou-imgas/10.jpg"
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
                            ইমেজ এসইও কি? ইমেজ এসইও কেন গুরুত্বপূর্ণ?
                        </h1>

                        {/* ভূমিকা */}
                        <p className="leading-relaxed text-gray-600 mb-5 text-base pb-4 sm:text-lg">
                            ইমেজ এসইও কি? ইমেজ এসইও কেন গুরুত্বপূর্ণ? ইমেজ এসইও হচ্ছে ইমেজ অপটিমাইজেশন প্রক্রিয়া যা ওয়েবসাইটের ছবি গুলিকে সার্চ ইঞ্জিনে আরও দৃশ্যমান করে তোলে। ইমেজ এসইও ওয়েবসাইটের লোড টাইম কমায়, অর্গানিক ট্র্যাফিক বাড়ায় এবং সার্চ ইঞ্জিন র‍্যাঙ্কিং উন্নত করে। ডিজিটাল মার্কেটিং এবং ওয়েবসাইট অপটিমাইজেশনে ইমেজ বা ছবির গুরুত্ব দিন দিন বৃদ্ধি পাচ্ছে। ছবি কেবল একটি ওয়েবসাইটের ভিজ্যুয়াল আকর্ষণ বাড়ায় না, এটি ব্যবহারকারীদের তথ্য প্রদানের একটি প্রধান উপাদান হিসেবেও কাজ করে। ইমেজ এসইও (ইমেজ সার্চ ইঞ্জিন অপটিমাইজেশন) নিশ্চিত করে যে আপনার ওয়েবসাইটের ছবিগুলি সার্চ ইঞ্জিনের জন্য অপটিমাইজড। একটি সঠিকভাবে অপটিমাইজড ছবি সার্চ ইঞ্জিনের ফলাফলে উচ্চ স্থান পেতে সাহায্য করে এবং ওয়েবসাইটের ট্রাফিক বৃদ্ধি করে। এই ব্লগ পোস্টে, আমরা বিস্তারিতভাবে জানবো ইমেজ এসইও কি? ইমেজ এসইও কেন গুরুত্বপূর্ণ? এবং কিভাবে আপনি এটি কার্যকরভাবে প্রয়োগ করতে পারেন।
                        </p>




                        <span className="font-bold text-2xl mb-2 text-black">ফাইল নাম:</span>
                        <p className="mb-5 text-gray-700 leading-relaxed">
                            ছবির ফাইল নাম একটি গুরুত্বপূর্ণ ভূমিকা পালন করে। একটি বর্ণনামূলক এবং কীওয়ার্ডসমৃদ্ধ ফাইল নাম সার্চ ইঞ্জিনের জন্য ছবির বিষয়বস্তু স্পষ্টভাবে নির্দেশ করে।
                        </p>

                        <span className="font-bold text-2xl mb-2 text-black">অ্যালট ট্যাগ (Alternative Text):</span>
                        <p className="mb-5 text-gray-700 leading-relaxed">
                            অ্যালট ট্যাগ ছবির জন্য একটি বিকল্প টেক্সট হিসেবে কাজ করে যা সার্চ ইঞ্জিন এবং ভিজ্যুয়ালি চ্যালেঞ্জড ব্যবহারকারীদের সহায়ক। এটি ছবির বিষয়বস্তু বুঝতে এবং ছবির কনটেক্সট বোঝাতে সাহায্য করে।
                        </p>

                        <span className="font-bold text-2xl mb-2 text-black">কেপশন:</span>
                        <p className="mb-5 text-gray-700 leading-relaxed">
                            ছবির নিচে প্রদর্শিত কেপশন ব্যবহারকারীদের জন্য ছবির বিষয়ে অতিরিক্ত তথ্য সরবরাহ করে। এটি ছবির প্রাসঙ্গিকতা এবং তার কনটেক্সট নির্ধারণ করতে সহায়ক।
                        </p>

                        <span className="font-bold text-2xl mb-2 text-black"> ছবির সাইজ:</span>
                        <p className="mb-5 text-gray-700 leading-relaxed">
                            ছবির আকার এবং ফাইল সাইজও ইমেজ এসইও এর একটি অংশ। বড় আকারের ছবি পেজ লোডিং সময় বাড়িয়ে দেয় যা ব্যবহারকারীর অভিজ্ঞতাকে প্রভাবিত করতে পারে। সঠিক সাইজ এবং ফরম্যাটের ছবি ব্যবহার করলে লোডিং সময় কমে যায়।
                        </p>

                        <span className="font-bold text-2xl mb-2 text-black">ইমেজ ফরম্যাট:</span>
                        <p className="mb-5 text-gray-700 leading-relaxed">
                            সঠিক ইমেজ ফরম্যাট নির্বাচন (যেমন JPEG, PNG, বা WebP) ওয়েবপেজের কার্যকারিতা উন্নত করে এবং লোডিং সময় কমিয়ে আনে।
                        </p>

                        <span className="font-bold text-2xl mb-2 text-black">ইমেজ সাইটম্যাপ:</span>
                        <p className="mb-5 text-gray-700 leading-relaxed">
                            সার্চ ইঞ্জিনকে ছবি ইন্ডেক্স করতে সাহায্য করার জন্য ইমেজ সাইটম্যাপ একটি কার্যকরী উপায়। এটি সার্চ ইঞ্জিনকে সাইটের ছবিগুলি সম্পর্কে তথ্য সরবরাহ করে।
                        </p>

                        <span className="font-bold text-2xl mb-2 text-black">স্ট্রাকচার্ড ডেটা মার্কআপ:</span>
                        <p className="mb-5 text-gray-700 leading-relaxed">
                            স্ট্রাকচার্ড ডেটা মার্কআপ সার্চ ইঞ্জিনকে ছবির প্রাসঙ্গিকতা এবং বিষয়বস্তু সম্পর্কে আরও বিস্তারিত ধারণা প্রদান করে।
                        </p>





                        {/* SEO কেন করা হয়? */}
                        <section className="mt-12 pt-8 border-t border-gray-200">
                            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-8 border-l-4 border-green-500 pl-3">
                                ওয়েবসাইটের লোডিং স্পিড কেন গুরুত্বপূর্ণ?
                            </h1>

                            <div className="w-full mb-6">
                                <img
                                    className="w-full h-auto max-h-96 rounded-lg object-cover shadow-lg"
                                    src="imgas/simpol-bolog-imgas/2.jpg"
                                    alt="Why is SEO done"
                                />
                            </div>

                            <span className="font-bold text-2xl mb-2 text-black">১। সার্চ ইঞ্জিন র‍্যাঙ্কিং উন্নত করা</span>
                            <p className="mb-5 text-gray-700 leading-relaxed">
                                ইমেজ এসইও সঠিকভাবে প্রয়োগ করলে আপনার ছবি সার্চ ইঞ্জিন রেজাল্টে উচ্চ স্থান পেতে পারে। সার্চ ইঞ্জিনগুলি কেবল ওয়েবপেজের টেক্সট কনটেন্ট নয়, ছবির কনটেন্টও ইন্ডেক্স করে। সঠিক ফাইল নাম, অ্যালট ট্যাগ এবং কেপশন ব্যবহার করে আপনি সার্চ ইঞ্জিনকে আপনার ছবির বিষয়বস্তু সম্পর্কে স্পষ্ট ধারণা দিতে পারেন। উদাহরণস্বরূপ, একটি অনলাইন স্টোরের প্রোডাক্ট ছবির অ্যালট ট্যাগ যদি স্পষ্টভাবে “red leather jacket for men” হয়, তবে সার্চ ইঞ্জিন সেই ছবিকে সহজেই প্রাসঙ্গিক সার্চ রেজাল্টে অন্তর্ভুক্ত করতে পারে।
                            </p>



                            <span className="font-bold text-2xl mb-2 text-black">২। পেজ লোড সময় কমানো</span>
                            <p className="mb-5 text-gray-700 leading-relaxed">
                                ওয়েবসাইটের পেজ লোডিং সময় হল একটি গুরুত্বপূর্ণ ফ্যাক্টর যা সার্চ ইঞ্জিন র‍্যাঙ্কিং এবং ব্যবহারকারীর অভিজ্ঞতা উভয়কেই প্রভাবিত করে। বড় আকারের এবং অনুপযুক্ত ফরম্যাটের ছবি পেজ লোডিং সময় বৃদ্ধি করে, যা ব্যবহারকারীর অভিজ্ঞতা খারাপ করে তোলে। ইমেজ কম্প্রেশন টুলগুলি ব্যবহার করে (যেমন TinyPNG, JPEG-Optimizer) ছবি গুলিকে সঙ্কুচিত করে রাখা যায়, যা পেজ লোডিং সময় কমাতে সহায়ক।
                            </p>




                            <span className="font-bold text-2xl mb-2 text-black">৩। ইমেজ সার্চের মাধ্যমে ট্রাফিক বাড়ানো</span>
                            <p className="mb-5 text-gray-700 leading-relaxed">
                                গুগল ইমেজ সার্চের মাধ্যমে প্রতিদিন প্রচুর ব্যবহারকারী ছবি খুঁজে থাকে। আপনার সাইটের ছবি যদি সঠিকভাবে অপটিমাইজ করা থাকে, তবে সেগুলি ইমেজ সার্চে উচ্চ স্থান পেতে পারে এবং সেখান থেকে আপনার সাইটে ট্রাফিক আসতে পারে। উদাহরণস্বরূপ, যদি আপনার সাইটের একটি ইমেজ “modern office design ideas” সম্পর্কিত হয়, তবে এটি গুগল ইমেজ সার্চে প্রদর্শিত হতে পারে এবং নতুন দর্শক আকর্ষণ করতে পারে।
                            </p>



                            <span className="font-bold text-2xl mb-2 text-black">৪। পেজ ইন্ডেক্সিং উন্নত করা</span>
                            <p className="mb-5 text-gray-700 leading-relaxed">
                                সার্চ ইঞ্জিন ইমেজ ইন্ডেক্স করে এবং ছবির বিষয়বস্তু এবং প্রাসঙ্গিকতা নির্ধারণ করে। ইমেজ সাইটম্যাপ তৈরি করে সার্চ ইঞ্জিনকে আপনার সাইটের সমস্ত ছবি সনাক্ত এবং ইন্ডেক্স করতে সহায়ক হতে পারে। এটি সাইটের সামগ্রিক ইন্ডেক্সিং উন্নত করতে সাহায্য করে এবং সার্চ ইঞ্জিনের জন্য আরও ভালোভাবে সাইটের কনটেন্ট প্রদর্শন নিশ্চিত করে।
                            </p>


                            <span className="font-bold text-2xl mb-2 text-black">৫। ছবির কনটেন্টের কনটেক্সট স্পষ্ট করা</span>
                            <p className="mb-5 text-gray-700 leading-relaxed">
                                কনভার্শন রেট হচ্ছে ব্যবহারকারীদের সেই শতাংশ যারা আপনার সাইটে প্রবেশ করে এবং একটি নির্দিষ্ট ক্রিয়া সম্পন্ন করে, যেমন ক্রয়, সাবস্ক্রিপশন, বা অন্যান্য কর্ম। দ্রুত লোডিং সাইট কনভার্শন রেট বাড়াতে সাহায্য করে কারণ এটি ব্যবহারকারীদের অভিজ্ঞতাকে উন্নত করে এবং তাদের ক্রয় প্রক্রিয়া সম্পন্ন করার সম্ভাবনা বাড়ায়। গবেষণায় দেখা গেছে, লোডিং সময় প্রতি এক সেকেন্ডে কনভার্শন রেট ২.৩ গুণ বেড়ে যায়। একটি দ্রুত লোডিং সাইট ব্যবহারকারীদের দ্রুত এবং সহজ অভিজ্ঞতা প্রদান করে, যা কনভার্শন রেট বাড়াতে সহায়ক।
                            </p>


                            <span className="font-bold text-2xl mb-2 text-black">৬| ব্র্যান্ড ইমেজ উন্নত করা</span>
                            <p className="mb-5 text-gray-700 leading-relaxed">
                                ছবির অ্যালট ট্যাগ এবং কেপশন ব্যবহার করে ছবির কনটেক্সট স্পষ্ট করে তোলা যায়। এটি বিশেষভাবে সহায়ক হয় ভিজ্যুয়ালি চ্যালেঞ্জড ব্যবহারকারীদের জন্য এবং সার্চ ইঞ্জিনের জন্য সঠিক কনটেক্সট প্রদান করে। উদাহরণস্বরূপ, “A child playing with a ball in the park” এমন একটি অ্যালট ট্যাগ সরবরাহ করে যা স্পষ্টভাবে ছবির বিষয়বস্তু বর্ণনা করে।
                            </p>


                            <span className="font-bold text-2xl mb-2 text-black">৬। সাইটের সামগ্রিক SEO উন্নতি</span>
                            <p className="mb-5 text-gray-700 leading-relaxed">
                                ইমেজ এসইও শুধুমাত্র ছবি সম্পর্কিত নয়, বরং এটি আপনার সাইটের সামগ্রিক সার্চ ইঞ্জিন অপটিমাইজেশন উন্নত করতে সাহায্য করে। সঠিকভাবে অপটিমাইজড ছবি সার্চ ইঞ্জিনের জন্য প্রাসঙ্গিক এবং ব্যবহারকারীদের জন্য আকর্ষণীয়। এটি সার্চ ইঞ্জিন র‍্যাঙ্কিং উন্নত করে, যা আপনার সাইটে আরও বেশি ট্রাফিক এবং ব্যবসার সুযোগ নিয়ে আসে।
                            </p>



                            <span className="font-bold text-2xl mb-2 text-black">৭। ব্যবহারকারীর অভিজ্ঞতা বৃদ্ধি</span>
                            <p className="mb-5 text-gray-700 leading-relaxed">
                                একটি ওয়েবসাইটের ভিজ্যুয়াল কনটেন্ট ব্যবহারকারীর অভিজ্ঞতা উন্নত করে। দ্রুত লোডিং ছবি এবং স্পষ্ট কনটেন্ট ব্যবহারকারীদের সন্তুষ্টি বাড়ায়। ভালোভাবে অপটিমাইজড ছবি শুধুমাত্র সার্চ ইঞ্জিন নয়, ব্যবহারকারীর জন্যও উপকারী। উচ্চ মানের এবং দ্রুত লোডিং ছবি ব্যবহারকারীর সাইটে থাকার সময় বৃদ্ধি করে এবং তাদের ভিজিটের পরিমাণ বাড়ায়।
                            </p>








                        </section>

                        {/* বহুল জিজ্ঞাসিত প্রশ্ন ও উত্তর সমূহ (FAQ) */}
                        <section className="mt-12 pt-8 border-t-2 border-dashed border-gray-300">
                            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-6">
                                বহুল জিজ্ঞাসিত প্রশ্ন ও উত্তর সমূহ (FAQ) 💡
                            </h1>
                            <p className="mb-6 text-gray-700">
                                “ইমেজ এসইও কি? ইমেজ এসইও কেন গুরুত্বপূর্ণ?” এই বিষয়ে আপনার মনে বেশ কয়েকটি প্রশ্ন উঁকি দিচ্ছে? তাহলে চলুন জেনে নেই সেই সকল প্রশ্ন ও উত্তরগুলো-
                            </p>

                            {/* FAQ আইটেম */}
                            <div className="space-y-4">
                                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                                    <h4 className="text-xl font-semibold text-gray-900 mb-2">ইমেজ এসইও করতে কোন বিষয়গুলো এড়িয়ে চলা উচিত?</h4>
                                    <p className="text-gray-600">ইমেজ এসইওতে অতিরিক্ত কীওয়ার্ড ব্যবহার, বড় ফাইল সাইজ, এবং ভুল ফরম্যাট এড়িয়ে চলা উচিত। এগুলো ওয়েবসাইটের লোডিং সময় বাড়িয়ে দেয় এবং সার্চ ইঞ্জিন র‍্যাঙ্কিংকে নেতিবাচকভাবে প্রভাবিত করতে পারে।</p>
                                </div>
                                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                                    <h4 className="text-xl font-semibold text-gray-900 mb-2">ইমেজ এসইও এর জন্য কোন টুল ব্যবহার করা উচিত?</h4>
                                    <p className="text-gray-600">ছবির অপটিমাইজেশনের জন্য জনপ্রিয় টুলগুলি হল Google PageSpeed Insights, TinyPNG, এবং Compressor.io। এসব টুল আপনার ছবি কম্প্রেস এবং অপটিমাইজ করতে সাহায্য করবে।</p>
                                </div>
                            </div>
                        </section>

                        {/* উপসংহার */}
                        <section className="mt-12 pt-8 border-t border-gray-200">
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-red-500 mb-4">
                                উপসংহার 🌟
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                উপরোক্ত আলোচনা থেকে আমরা ইমেজ এসইও কি? ইমেজ এসইও কেন গুরুত্বপূর্ণ? এ সম্পর্কে বিস্তারিত জানলাম। ইমেজ এসইও হল একটি অত্যন্ত গুরুত্বপূর্ণ কৌশল যা আপনার সাইটের ইমেজগুলিকে সার্চ ইঞ্জিনের জন্য অপটিমাইজ করতে সাহায্য করে। সঠিকভাবে ইমেজ অপটিমাইজেশন করলে, এটি আপনার সাইটের সার্চ ইঞ্জিন র‍্যাঙ্কিং উন্নত করতে পারে, ব্যবহারকারীর অভিজ্ঞতা বৃদ্ধি করতে পারে, এবং আপনার অনলাইন উপস্থিতি মজবুত করতে সহায়ক হতে পারে। আপনি যদি আপনার সাইটের ছবি সঠিকভাবে অপটিমাইজ করেন, তবে আপনি আপনার সাইটের কার্যকারিতা এবং সাফল্য উল্লেখযোগ্যভাবে উন্নত করতে পারবেন। এছাড়াও আপনার জ্ঞানকে প্রসারিত করার জন্য অন পেজ এসইও তে কি কি করতে হয়
                                <span className="text-amber-800 font-bold">
                                    অন পেজ এসইও তে কি কি করতে হয়
                                </span>
                                সম্পর্কিত আর্টিকেলটি পড়ুন।
                            </p>
                            <p className="mt-6 text-gray-500 italic">
                                “ইমেজ এসইও কি? ইমেজ এসইও কেন গুরুত্বপূর্ণ?” সম্পর্কিত কোন প্রশ্ন থাকে তাহলে অবশ্যই নিচে কমেন্ট করবেন। আর এমন ধরনের গুরুত্বপূর্ণ বিষয় গুলো বিনামূল্যে জানতে আমাদের সাথে থাকবেন। ধন্যবাদ, ভালো থাকুন, সুস্থ থাকুন।🙏
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

export default SeoImasBolog;
