
import DomainVsHostingTable from "@/components/HomeBolog/domoinHoistanBolog/DomoinHoistan";
import Sidebar from "@/components/pages/Home/rightSiteHome";
import { useState } from "react";
import { Link } from "react-router-dom";

function DomoinHoistanBolog() {
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
                            src="/imgas/Home-imgas/2.jpg"
                            alt="SEO, Search Engine Optimization"
                        />
                    </div>

                    {/* ব্রেডক্রাম্ব নেভিগেশন */}
                    <span className="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-widest px-4 sm:px-6 lg:px-8">
                        <Link to="/" className="text-blue-600 font-bold hover:text-blue-800 transition duration-300">
                            হোম
                        </Link>
                        <span className="mx-2">|</span>
                        <Link to="/ওয়েবসাইট ডিজাইন" className="text-blue-600 hover:text-blue-800 transition duration-300 font-semibold">
                            ওয়েবসাইট ডিজাইন
                        </Link>
                    </span>
                </header>

                {/* মূল কনটেন্ট এরিয়া */}
                <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
                    <article className="bg-white p-6 sm:p-10 rounded-3xl shadow-2xl">

                        {/* শিরোনাম */}
                        <h1 className="text-3xl sm:text-5xl font-extrabold text-blue-700 mb-6 border-b-4 border-blue-100 pb-4 leading-tight">
                            ডোমেইন ও হোস্টিং এর মধ্যে পার্থক্য সমূহ
                        </h1>

                        {/* ভূমিকা */}
                        <p className="leading-relaxed text-gray-600 mb-8 text-base pb-4 sm:text-lg">
                            ডোমেইন ও হোস্টিং এর মধ্যে পার্থক্য সম্পর্কে জানাটা একটি সফল ওয়েবসাইট তৈরির প্রথম পদক্ষেপ। ডোমেইন এবং হোস্টিং হল একটি ওয়েবসাইট তৈরি ও পরিচালনার জন্য অত্যন্ত গুরুত্বপূর্ণ দুটি উপাদান। একটি ভাল ডোমেইন নাম আপনার ব্র্যান্ড বা ব্যবসার পরিচয় স্পষ্ট করে এবং এটি ব্যবহারকারীদের জন্য সহজে মনে রাখার জন্য কার্যকরী। অপরদিকে, হোস্টিং হল সেই পরিবেশ যেখানে আপনার ওয়েবসাইটের সমস্ত ফাইল এবং ডেটা সঞ্চিত থাকে। ওয়েবসাইট তৈরি করার ক্ষেত্রে এই দুটি বিষয় বুঝতে পারা খুবই জরুরি।
                        </p>

                        <span className="leading-relaxed  text-gray-600 mb-8 text-base sm:text-lg">
                            ডোমেইন ও হোস্টিং এর মধ্যে পার্থক্য সম্পর্কে জানাটা একটি সফল ওয়েবসাইট তৈরির প্রথম পদক্ষেপ। ডোমেইন এবং হোস্টিং হল একটি ওয়েবসাইট তৈরি ও পরিচালনার জন্য অত্যন্ত গুরুত্বপূর্ণ দুটি উপাদান। একটি ভাল ডোমেইন নাম আপনার ব্র্যান্ড বা ব্যবসার পরিচয় স্পষ্ট করে এবং এটি ব্যবহারকারীদের জন্য সহজে মনে রাখার জন্য কার্যকরী। অপরদিকে, হোস্টিং হল সেই পরিবেশ যেখানে আপনার ওয়েবসাইটের সমস্ত ফাইল এবং ডেটা সঞ্চিত থাকে। ওয়েবসাইট তৈরি করার ক্ষেত্রে এই দুটি বিষয় বুঝতে পারা খুবই জরুরি।
                        </span>



                        {/* এসইও কি? */}
                        <section className="mt-12">
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 border-l-4 border-red-500 pl-3">
                                ডোমেইন কি?
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
                                    ডোমেইন হল একটি ইউনিক ঠিকানা যা ইন্টারনেটে আপনার ওয়েবসাইটের অবস্থান চিহ্নিত করে। এটি আপনার সাইটের নাম, যেমন shamimhossin.com। যখন ব্যবহারকারীরা এই নামটি ব্রাউজারে লিখেন, তখন তারা আপনার ওয়েবসাইটে পৌঁছান। প্রতিটি ওয়েবসাইটের জন্য একটি নির্দিষ্ট ডোমেইন নাম প্রয়োজন, এবং এটি সাধারণত প্রতি বছর একটি নির্দিষ্ট ফি দিয়ে নিবন্ধন করতে হয়।
                                </p>
                                <p>
                                    ডোমেইন নাম সাধারণত দুটি অংশ নিয়ে গঠিত: প্রধান নাম এবং ডোমেইন সম্প্রসারণ (যেমন .com, .net, .org)। প্রধান নামটি আপনার ব্র্যান্ডের প্রতিনিধিত্ব করে, যা আপনার ব্যবসার বা সাইটের বিষয়ে একটি সংক্ষিপ্ত ধারণা প্রদান করে। সম্প্রসারণটি ডোমেইনের উদ্দেশ্য বা স্থান নির্দেশ করে, যেমন .com সাধারণত বাণিজ্যিক উদ্দেশ্যে ব্যবহৃত হয়, যখন .org সাধারণত অলাভজনক প্রতিষ্ঠানের জন্য ব্যবহৃত হয়।
                                </p>

                                <p>
                                    সঠিক ডোমেইন নাম নির্বাচন করা খুবই গুরুত্বপূর্ণ, কারণ এটি আপনার সাইটের পেশাদারিত্ব এবং শনাক্তযোগ্যতা বাড়ায়। আপনার ডোমেইন নাম ব্যবহারকারীদের কাছে আকর্ষণীয় এবং সহজে মনে রাখার মতো হতে হবে। একটি শক্তিশালী ডোমেইন নাম আপনার ব্র্যান্ডের উপর একটি ইতিবাচক প্রভাব ফেলে এবং এটি আপনার মার্কেটিং প্রচারণার জন্য গুরুত্বপূর্ণ হতে পারে।
                                </p>
                                <p>
                                    ডোমেইন নিবন্ধন একটি সহজ প্রক্রিয়া, তবে আপনাকে কিছু বিষয় বিবেচনা করতে হবে, যেমন নামের প্রাপ্যতা, বাজারের প্রতিযোগিতা এবং আপনার লক্ষ্যমাত্রা গ্রাহকরা। কিছু জনপ্রিয় ডোমেইন নিবন্ধক প্রতিষ্ঠান রয়েছে, যেগুলি আপনাকে এই প্রক্রিয়া সম্পন্ন করতে সহায়তা করতে পারে। যখন আপনি একটি ডোমেইন নাম নিবন্ধন করেন, তখন এটি সাধারণত এক বছরের জন্য বৈধ থাকে এবং আপনি চাইলে প্রতি বছর নবীকরণ করতে পারেন।
                                </p>

                            </div>
                        </section>

                        {/* SEO কেন করা হয়? */}
                        <section className="mt-12 pt-8 border-t border-gray-200">
                            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-8 border-l-4 border-green-500 pl-3">
                                হোস্টিং কি?
                            </h1>

                            <div className="w-full mb-6">
                                <img
                                    className="w-full h-auto max-h-96 rounded-lg object-cover shadow-lg"
                                    src="/imgas/ফ্রিল্যান্সিং/6jpg.jpg"
                                    alt="Why is SEO done"
                                />
                            </div>

                            <p className="mb-8 text-gray-700 leading-relaxed">
                                হোস্টিং হল একটি পরিষেবা যা আপনার ওয়েবসাইটের ফাইল এবং তথ্য সঞ্চয় করে এবং ইন্টারনেটে উপলব্ধ করে। যখন আপনার ডোমেইন নাম ব্যবহারকারীরা প্রবেশ করে, তখন হোস্টিং পরিষেবা সেই তথ্য এবং ফাইলগুলি ব্যবহারকারীর কাছে পাঠায়। হোস্টিং সরবরাহকারীরা বিভিন্ন ধরনের পরিকল্পনা অফার করে, যেমন শেয়ারড হোস্টিং, VPS হোস্টিং, এবং ডেডিকেটেড হোস্টিং।
                            </p>
                            <p className="mb-8 text-gray-700 leading-relaxed">
                                শেয়ারড হোস্টিং হল একটি অর্থনৈতিক বিকল্প যেখানে একাধিক ওয়েবসাইট একই সার্ভারে হোস্ট করা হয়। এটি ছোট ব্যবসা এবং ব্যক্তিগত ব্লগের জন্য আদর্শ। VPS (ভার্চুয়াল প্রাইভেট সার্ভার) হোস্টিং হল একটি উন্নত বিকল্প যেখানে আপনার কাছে একটি স্বতন্ত্র পরিবেশ থাকে, যার ফলে আপনার সাইটের কর্মক্ষমতা এবং নিরাপত্তা বাড়ে। ডেডিকেটেড হোস্টিং হল একটি উচ্চতর সমাধান যেখানে একটি সম্পূর্ণ সার্ভার কেবল আপনার ওয়েবসাইটের জন্য বরাদ্দ করা হয়।
                            </p>
                            <p className="mb-8 text-gray-700 leading-relaxed">
                                হোস্টিংয়ের মূল কাজ হল একটি সার্ভারে আপনার ওয়েবসাইটের সমস্ত ফাইল সংরক্ষণ করা। ব্যবহারকারীরা যখন আপনার সাইটে প্রবেশ করে, তাদের ব্রাউজার হোস্টিং সার্ভারে সংযোগ স্থাপন করে এবং সেখান থেকে ডেটা গ্রহণ করে। সঠিক হোস্টিং পরিষেবা নির্বাচন করা আপনার ওয়েবসাইটের গতি, নিরাপত্তা এবং স্থায়িত্বের জন্য অত্যন্ত গুরুত্বপূর্ণ।
                            </p>
                            <p className="mb-8 text-gray-700 leading-relaxed">
                                আপনার ওয়েবসাইটের জন্য সঠিক হোস্টিং নির্বাচন করার সময় কিছু বিষয় খেয়াল রাখা দরকার। যেমন, সার্ভারের গতি, ব্যান্ডউইথ, ডেটা সঞ্চয় স্থান, এবং টেকনিক্যাল সাপোর্ট। সঠিক হোস্টিং পরিকল্পনা নির্বাচন করলে আপনার ওয়েবসাইটের ইউজার এক্সপেরিয়েন্স উন্নত হয় এবং এটি আপনার ব্যবসার উন্নতির জন্য সহায়ক হয়।
                            </p>


                            {/* কারণ ১: ট্রাফিক বৃদ্ধি */}
                            <div className="bg-blue-50 p-6 rounded-xl shadow-inner mb-6">
                                <h1 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-3 flex items-center">
                                    <span className="text-4xl mr-3">1️⃣</span>
                                    ডোমেইন ও হোস্টিং এর মধ্যে পার্থক্য সমূহ
                                </h1>



                                <p className="text-gray-700 leading-relaxed mb-4">

                                    ডোমেইন হল ওয়েবসাইটের একক নাম এবং হোস্টিং হচ্ছে নিদ্দিষ্ট ওয়েবসাইটের সংরক্ষণাগার। ডোমেইন এবং হোস্টিং দুটি ভিন্ন বিষয়, তবে উভয়ই একটি ওয়েবসাইটের কার্যকারিতা বজায় রাখতে অপরিহার্য। ডোমেইন ও হোস্টিং এর মধ্যে পার্থক্য সমূহ নিম্নে বিস্তারিতভাবে তুলে ধরা হলো-
                                </p>


                                <DomainVsHostingTable />

                            </div>

                            {/* কারণ ২: ব্র্যান্ডের সচেতনতা বৃদ্ধি */}

                        </section>

                        {/* বহুল জিজ্ঞাসিত প্রশ্ন ও উত্তর সমূহ (FAQ) */}
                        <section className="mt-12 pt-8 border-t-2 border-dashed border-gray-300">
                            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-6">
                                বহুল জিজ্ঞাসিত প্রশ্ন ও উত্তর সমূহ (FAQ) 💡
                            </h1>
                            <p className="mb-6 text-gray-700">
                                “ডোমেইন ও হোস্টিং এর মধ্যে পার্থক্য সমূহ” এই বিষয়ে আপনার মনে বেশ কয়েকটি প্রশ্ন উঁকি দিচ্ছে? তাহলে চলুন জেনে নেই সেই সকল প্রশ্ন ও উত্তরগুলো-
                            </p>

                            {/* FAQ আইটেম */}
                            <div className="space-y-4">
                                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                                    <h4 className="text-xl font-semibold text-gray-900 mb-2">ডোমেইন কেন প্রয়োজন?</h4>
                                    <p className="text-gray-600">ডোমেইন নাম একটি ওয়েবসাইটের পরিচয় এবং ব্র্যান্ডিংয়ের জন্য অপরিহার্য। এটি ব্যবহারকারীদের জন্য আপনার সাইটে প্রবেশের একটি সহজ ঠিকানা সরবরাহ করে।</p>
                                </div>
                                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                                    <h4 className="text-xl font-semibold text-gray-900 mb-2">হোস্টিং কেন গুরুত্বপূর্ণ?</h4>
                                    <p className="text-gray-600">হোস্টিং একটি ওয়েবসাইটের কাজ করার জন্য প্রয়োজনীয়। এটি আপনার সাইটের তথ্য সংরক্ষণ করে এবং ব্যবহারকারীদের কাছে তা পৌঁছানোর সুযোগ দেয়।</p>
                                </div>
                            </div>
                        </section>

                        {/* উপসংহার */}
                        <section className="mt-12 pt-8 border-t border-gray-200">
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-red-500 mb-4">
                                উপসংহার 🌟
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                উপরোক্ত আলোচনা থেকে আমরা ডোমেইন ও হোস্টিং এর মধ্যে পার্থক্য সমূহ সম্পর্কে বিস্তারিত জানলাম। ডোমেইন এবং হোস্টিং উভয়ই একটি সফল ওয়েবসাইটের জন্য অপরিহার্য। সঠিক ডোমেইন নাম আপনার ব্যবসার পরিচয় তৈরিতে সহায়তা করে, এবং সঠিক হোস্টিং পরিষেবা আপনার সাইটের কার্যকারিতা নিশ্চিত করে। এই দুটি বিষয় বুঝতে পারলে আপনি আপনার অনলাইন উপস্থিতি উন্নত করতে সক্ষম হবেন। একটি কার্যকরী ওয়েবসাইট তৈরি করতে হলে, আপনাকে প্রথমেই এই দুটি বিষয় সম্পর্কে সঠিক তথ্য ও জ্ঞান সংগ্রহ করতে হবে। আপনি যেখানেই শুরু করুন না কেন, মনে রাখবেন যে আপনার ডোমেইন নাম এবং হোস্টিং পরিষেবা আপনার সাইটের সফলতার মূল চাবিকাঠি। এছাড়াও আপনার জ্ঞানকে প্রসারিত করার জন্য বাংলাদেশের সেরা হোস্টিং কোম্পানি সমূহ সম্পর্কিত আর্টিকেলটি পড়ুন।
                                <a href="#" className="text-blue-600 hover:underline font-medium"> উপরোক্ত আলোচনা থেকে আমরা ফ্রিল্যান্সিং কোন কাজের চাহিদা</a> এ সম্পর্কিত আর্টিকেলটি পড়ুন।
                            </p>

                            <p className="mt-6 text-gray-500 italic">
                                “ডোমেইন ও হোস্টিং এর মধ্যে পার্থক্য সমূহ” সম্পর্কিত কোন প্রশ্ন থাকে তাহলে অবশ্যই নিচে কমেন্ট করবেন। আর এমন ধরনের গুরুত্বপূর্ণ বিষয় গুলো বিনামূল্যে জানতে আমাদের সাথে থাকবেন। ধন্যবাদ, ভালো থাকুন, সুস্থ থাকুন।🙏
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

export default DomoinHoistanBolog;


