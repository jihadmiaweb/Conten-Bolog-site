

import Sidebar from "@/components/pages/Home/rightSiteHome";
import { useState } from "react";

import { Link } from "react-router-dom";

function WevSiteLoding() {
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
                            src=" imgas/sou-imgas/7.jpg"
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
                            ওয়েবসাইটের লোডিং স্পিড কেন গুরুত্বপূর্ণ?
                        </h1>

                        {/* ভূমিকা */}
                        <p className="leading-relaxed text-gray-600 mb-8 text-base pb-4 sm:text-lg">
                            ওয়েবসাইটের লোডিং স্পিড কেন গুরুত্বপূর্ণ এ সম্পর্কে জানা একজন ওয়েবসাইট/ব্লগ মালিকের জন্য অপরিহার্য। বর্তমান ডিজিটাল যুগে, ইন্টারনেট আমাদের জীবনের অবিচ্ছেদ্য অংশ হয়ে উঠেছে। দিনের পর দিন, আমরা অনলাইন প্ল্যাটফর্মের উপর নির্ভরশীল হচ্ছি—থাকা, কাজ, কেনাকাটা, বিনোদন এবং আরও অনেক কিছু। কিন্তু, এই বিশাল ডিজিটাল জগতের মধ্যে একটি মূল দিক যা সবার নজর এড়িয়ে যায়, তা হল একটি ওয়েবসাইটের লোডিং স্পিড। এই স্পিড হল একটি গুরুত্বপূর্ণ সূচক যা ব্যবহারকারীর অভিজ্ঞতা, ব্যবসায়িক সাফল্য, এবং সার্চ ইঞ্জিন অপ্টিমাইজেশন (SEO) এর উপর বড় ধরনের প্রভাব ফেলে। এই ব্লগ পোস্টে আমরা ওয়েবসাইটের লোডিং স্পিড কেন গুরুত্বপূর্ণ এ সম্পর্কে বিস্তারিত জানবো।
                        </p>




                        <h1 className="text-3xl sm:text-3xl md:text-3xl  font-extrabold mb-6 border-b-4 border-blue-100 pb-4 leading-tight">
                            ওয়েবসাইট লোডিং স্পিড কি?
                        </h1>

                        <p className="leading-relaxed text-gray-600 mb-6 text-base sm:text-lg">
                            ওয়েবসাইট লোডিং স্পিড হল সেই সময় যা একটি ব্যবহারকারী যখন ওয়েবসাইটে প্রবেশ করে, তখন থেকে শুরু করে পৃষ্ঠা সম্পূর্ণরূপে লোড হয়ে ওঠে। এটি মূলত একটি পরিমাপ যা বলে দেয় যে একটি পৃষ্ঠা কত দ্রুত ব্যবহারকারীর ব্রাউজারে সম্পূর্ণরূপে প্রদর্শিত হচ্ছে। এই সময়ের মধ্যে টেক্সট, ইমেজ, ভিডিও, সিএসএস ফাইল, জাভাস্ক্রিপ্ট স্ক্রিপ্ট এবং অন্যান্য সব উপাদান লোড হয়। একটি দ্রুত লোডিং স্পিড ব্যবহারের অভিজ্ঞতা উন্নত করে এবং একটি সুন্দর, স্মুথ, এবং সন্তোষজনক ইউজার ইন্টারফেস প্রদান করে।
                        </p>

                        <p className="leading-relaxed text-gray-600 mb-6 text-base sm:text-lg">
                            ধীর লোডিং স্পিড ব্যবহারকারীর ধৈর্যকে পরীক্ষা করে এবং প্রায়ই ব্যবহারকারী সেই সাইট থেকে চলে যায়। এটি ওয়েবসাইটের ট্রাফিক হ্রাস করতে পারে এবং পরবর্তীতে কনভার্শন রেটও কমিয়ে দিতে পারে। ফলে, একটি দ্রুত লোডিং স্পিড শুধুমাত্র ব্যবহারকারীর অভিজ্ঞতাকে উন্নত করে না, বরং ব্যবসায়িক সাফল্যের জন্যও গুরুত্বপূর্ণ।
                        </p>



                        {/* এসইও কি? */}
                        <section className="mt-12">
                            <h2 className="text-3xl sm:text-3xl font-bold text-gray-800 mb-6 border-l-4 border-red-500 pl-3">
                                ওয়েবসাইটের লোডিং স্পিড কেন গুরুত্বপূর্ণ?
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
                                    ওয়েবসাইটের লোডিং স্পিড বিভিন্ন কারণে গুরুত্বপূর্ণ। এটি কেবল ব্যবহারকারীর অভিজ্ঞতাকেই প্রভাবিত করে না, বরং সার্চ ইঞ্জিন অপ্টিমাইজেশন (SEO), ব্যবসায়িক সাফল্য, ব্র্যান্ড ইমেজ এবং গ্রাহক সন্তুষ্টির ওপরও বিশাল প্রভাব ফেলে। নিম্নে বিস্তারিতভাবে আলোচনা করা হলো ওয়েবসাইটের লোডিং স্পিড কেন গুরুত্বপূর্ণ?
                                </p>

                                {/* <KeywordTypes /> */}
                            </div>
                        </section>

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

                            <span className="font-bold text-2xl mb-2 text-black">১| ব্যবহারকারীর অভিজ্ঞতা উন্নত করা</span>
                            <p className="mb-5 text-gray-700 leading-relaxed">
                                ওয়েবসাইটের লোডিং স্পিড ব্যবহারকারীর অভিজ্ঞতার একটি মৌলিক অংশ। একটি দ্রুত লোডিং সাইট ব্যবহারকারীর জন্য একটি মসৃণ অভিজ্ঞতা প্রদান করে, যা তাদের সাইটে আরও সময় কাটাতে সহায়ক হয়। ব্যবহারকারীরা ধীরগতির সাইটের কারণে হতাশ হয়ে পড়ে এবং প্রায়ই সাইটটি ত্যাগ করে। গবেষণায় দেখা গেছে, একটি ওয়েবসাইটের লোডিং সময় যদি ৩ সেকেন্ডের বেশি হয়, তবে প্রায় ৪০% ব্যবহারকারী সেই সাইট ত্যাগ করে। দ্রুত লোডিং ওয়েবসাইটগুলি ব্যবহারকারীদের সন্তুষ্টি বৃদ্ধি করে এবং তাদের সাইটে আরও বেশি সময় ধরে রাখতে সহায়ক হয়।
                            </p>



                            <span className="font-bold text-2xl mb-2 text-black">২| সার্চ ইঞ্জিন র‍্যাংকিং উন্নত করা</span>
                            <p className="mb-5 text-gray-700 leading-relaxed">
                                সার্চ ইঞ্জিন অপ্টিমাইজেশন (SEO) একটি অত্যন্ত গুরুত্বপূর্ণ প্রক্রিয়া যা একটি সাইটের দৃশ্যমানতা এবং র‍্যাংকিং বাড়াতে সাহায্য করে। গুগল এবং অন্যান্য সার্চ ইঞ্জিনগুলি দ্রুত লোডিং সাইটগুলোকে উচ্চ র‍্যাংকিং প্রদান করে, কারণ তারা ব্যবহারকারীদের জন্য ভালো অভিজ্ঞতা নিশ্চিত করে। একটি দ্রুত লোডিং ওয়েবসাইট সার্চ ইঞ্জিনের র‍্যাংকিংয়ে ইতিবাচক প্রভাব ফেলে, যা ট্রাফিক বৃদ্ধিতে সহায়ক হয়। যদি আপনার সাইট ধীরগতির হয়, তবে এটি আপনার সার্চ ইঞ্জিন র‍্যাংকিং কমাতে পারে, যার ফলে আপনার সাইট কম দৃশ্যমান হতে পারে এবং অর্গানিক ট্রাফিক কমতে পারে।
                            </p>




                            <span className="font-bold text-2xl mb-2 text-black">৩| মোবাইল ব্যবহারকারীদের সন্তুষ্টি</span>
                            <p className="mb-5 text-gray-700 leading-relaxed">
                                মোবাইল ডিভাইসের মাধ্যমে ইন্টারনেট ব্যবহারকারীদের সংখ্যা প্রতিনিয়ত বাড়ছে। মোবাইল ব্যবহারকারীরা সাধারণত দ্রুত সাইট লোড আশা করে এবং তাদের জন্য ধীরগতির সাইট একটি বিরক্তিকর অভিজ্ঞতা হতে পারে। মোবাইল ব্যবহারকারীদের জন্য দ্রুত লোডিং সাইট তৈরি করা অত্যন্ত গুরুত্বপূর্ণ, কারণ মোবাইল সাইটের লোডিং সময় এক সেকেন্ড বাড়লে বাউন্স রেট ১২৩% বেড়ে যেতে পারে। মোবাইল ডিভাইসে দ্রুত লোড হওয়া সাইট ব্যবহারকারীদের সন্তুষ্ট করে এবং তাদের ফিরে আসার সম্ভাবনা বাড়ায়।
                            </p>



                            <span className="font-bold text-2xl mb-2 text-black">৪| বাউন্স রেট কমানো</span>
                            <p className="mb-5 text-gray-700 leading-relaxed">
                                বাউন্স রেট হলো সেই শতাংশ ব্যবহারকারী যারা একটি ওয়েবসাইটের একটি পৃষ্ঠা দেখেই তা ত্যাগ করে। একটি ধীরগতির সাইটের বাউন্স রেট সাধারণত বেশি থাকে, কারণ ব্যবহারকারীরা অপেক্ষা করতে করতে বিরক্ত হয়ে পড়ে এবং অন্য সাইটে চলে যায়। দ্রুত লোডিং স্পিড বাউন্স রেট কমাতে সহায়ক হয়, কারণ ব্যবহারকারীরা দ্রুত লোড হওয়া সাইটে বেশি সময় কাটাতে ইচ্ছুক থাকে। একটি কম বাউন্স রেট আপনার সাইটের উত্পাদনশীলতা এবং ব্যবহারকারীর সন্তুষ্টি বৃদ্ধির ইঙ্গিত।
                            </p>


                            <span className="font-bold text-2xl mb-2 text-black">৫| কনভার্শন রেট বাড়ানো</span>
                            <p className="mb-5 text-gray-700 leading-relaxed">
                                কনভার্শন রেট হচ্ছে ব্যবহারকারীদের সেই শতাংশ যারা আপনার সাইটে প্রবেশ করে এবং একটি নির্দিষ্ট ক্রিয়া সম্পন্ন করে, যেমন ক্রয়, সাবস্ক্রিপশন, বা অন্যান্য কর্ম। দ্রুত লোডিং সাইট কনভার্শন রেট বাড়াতে সাহায্য করে কারণ এটি ব্যবহারকারীদের অভিজ্ঞতাকে উন্নত করে এবং তাদের ক্রয় প্রক্রিয়া সম্পন্ন করার সম্ভাবনা বাড়ায়। গবেষণায় দেখা গেছে, লোডিং সময় প্রতি এক সেকেন্ডে কনভার্শন রেট ২.৩ গুণ বেড়ে যায়। একটি দ্রুত লোডিং সাইট ব্যবহারকারীদের দ্রুত এবং সহজ অভিজ্ঞতা প্রদান করে, যা কনভার্শন রেট বাড়াতে সহায়ক।
                            </p>


                            <span className="font-bold text-2xl mb-2 text-black">৬| ব্র্যান্ড ইমেজ উন্নত করা</span>
                            <p className="mb-5 text-gray-700 leading-relaxed">
                                দ্রুত লোডিং স্পিড একটি ভালো ব্র্যান্ড ইমেজ তৈরি করতে সহায়ক হয়। এটি ব্যবহারকারীদের মধ্যে একটি ইতিবাচক ইমপ্রেশন তৈরি করে এবং আপনার ব্র্যান্ডের প্রতি তাদের বিশ্বাস বাড়ায়। ধীরগতির সাইট ব্যবহারকারীদের হতাশ করে এবং নেতিবাচক ইমপ্রেশন তৈরি করে, যা ব্র্যান্ডের জন্য ক্ষতিকর হতে পারে। একটি দ্রুত লোডিং সাইট ব্র্যান্ডের পেশাদারিত্ব এবং কার্যকারিতা প্রদর্শন করে, যা গ্রাহকদের মধ্যে বিশ্বাস এবং আনুগত্য বৃদ্ধি করতে সহায়ক।
                            </p>


                            <span className="font-bold text-2xl mb-2 text-black">৭| প্রতিযোগিতায় এগিয়ে থাকা</span>
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
                                “ওয়েবসাইটের লোডিং স্পিড কেন গুরুত্বপূর্ণ?” এই বিষয়ে আপনার মনে বেশ কয়েকটি প্রশ্ন উঁকি দিচ্ছে? তাহলে চলুন জেনে নেই সেই সকল প্রশ্ন ও উত্তরগুলো-
                            </p>

                            {/* FAQ আইটেম */}
                            <div className="space-y-4">
                                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                                    <h4 className="text-xl font-semibold text-gray-900 mb-2">কীভাবে ওয়েবসাইটের লোডিং স্পিড বাড়ানো যায়?</h4>
                                    <p className="text-gray-600">ওয়েবসাইটের লোডিং স্পিড বাড়ানোর জন্য ইমেজ কম্প্রেস করা, কোড অপ্টিমাইজেশন করা, ব্রাউজার ক্যাশিং ব্যবহার করা, সিএসএস ও জাভাস্ক্রিপ্ট কমপ্রেশন করা, এবং কনটেন্ট ডেলিভারি নেটওয়ার্ক (CDN) ব্যবহার করা যেতে পারে।</p>
                                </div>
                                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                                    <h4 className="text-xl font-semibold text-gray-900 mb-2">ধীরগতির ওয়েবসাইটের কি কি সমস্যা হতে পারে?</h4>
                                    <p className="text-gray-600">ধীরগতির ওয়েবসাইট ব্যবহারকারীদের হতাশ করে, বাউন্স রেট বাড়ায়, সার্চ ইঞ্জিন র‍্যাংকিং কমায় এবং কনভার্শন রেট কমিয়ে ব্যবসার ক্ষতি করতে পারে।</p>
                                </div>
                            </div>
                        </section>

                        {/* উপসংহার */}
                        <section className="mt-12 pt-8 border-t border-gray-200">
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-red-500 mb-4">
                                উপসংহার 🌟
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                উপরোক্ত আলোচনা থেকে আমরা ওয়েবসাইটের লোডিং স্পিড কেন গুরুত্বপূর্ণ এ সম্পর্কে বিস্তারিত জানলাম। ওয়েবসাইটের লোডিং স্পিড ডিজিটাল দুনিয়ায় একটি অত্যন্ত গুরুত্বপূর্ণ ফ্যাক্টর। এটি ব্যবহারকারীর অভিজ্ঞতা, সার্চ ইঞ্জিন র‍্যাংকিং, কনভার্শন রেট, ব্র্যান্ড ইমেজ, এবং গ্রাহক সন্তুষ্টির উপর গভীর প্রভাব ফেলে। একটি দ্রুত লোডিং সাইট ব্যবহারকারীদের জন্য একটি ভালো অভিজ্ঞতা প্রদান করে, যা তাদের সাইটে বেশি সময় কাটাতে এবং পুনরায় ফিরে আসতে উৎসাহিত করে। অপরদিকে, একটি ধীরগতির সাইট ব্যবহারকারীদের হতাশ করে এবং ব্যবসার জন্য ক্ষতিকর হতে পারে। তাই, আপনার ওয়েবসাইটের লোডিং স্পিড উন্নত করার জন্য বিভিন্ন পদক্ষেপ গ্রহণ করা উচিত, যেমন ইমেজ অপ্টিমাইজেশন, কোড কম্প্রেশন, ব্রাউজার ক্যাশিং, এবং কনটেন্ট ডেলিভারি নেটওয়ার্ক (CDN) ব্যবহার। এই পদক্ষেপগুলো গ্রহণ করলে, আপনার ওয়েবসাইটের লোডিং স্পিড বৃদ্ধি পাবে এবং আপনার ব্যবসার জন্য সফল ভবিষ্যৎ নিশ্চিত হবে। এছাড়াও আপনার জ্ঞানকে প্রসারিত করার জন্য  সম্পর্কিত আর্টিকেলটি পড়ুন।
                                <span className="text-amber-800 font-bold">
                                    অন পেজ এসইও তে কি কি করতে হয়
                                </span>

                            </p>
                            <p className="mt-6 text-gray-500 italic">
                                “ওয়েবসাইটের লোডিং স্পিড কেন গুরুত্বপূর্ণ?” সম্পর্কিত কোন প্রশ্ন থাকে তাহলে অবশ্যই নিচে কমেন্ট করবেন। আর এমন ধরনের গুরুত্বপূর্ণ বিষয় গুলো বিনামূল্যে জানতে আমাদের সাথে থাকবেন। ধন্যবাদ, ভালো থাকুন, সুস্থ থাকুন।🙏
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

export default WevSiteLoding;
