
import Sidebar from "@/components/pages/Home/rightSiteHome";
import { useState } from "react";

import { Link } from "react-router-dom";

function WevDigintBolog() {
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
                            src="imgas/wev-site-imgas/2.jpg"
                            alt="SEO, Search Engine Optimization"
                        />
                    </div>

                    {/* ব্রেডক্রাম্ব নেভিগেশন */}
                    <span className="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-widest px-4 sm:px-6 lg:px-8">
                        <Link to="/" className="text-blue-600 font-bold hover:text-blue-800 transition duration-300">
                            হোম
                        </Link>
                        <span className="mx-2">/</span>
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
                            ডোমেইন কি? ডোমেইন এর কাজ কি?
                        </h1>

                        {/* ভূমিকা */}
                        <p className="leading-relaxed text-gray-600 mb-8 text-base pb-4 sm:text-lg">
                            ডোমেইন কি? ডোমেইন এর কাজ কি?—ইন্টারনেটের জগতে ব্যবসা বা ব্যক্তিগত ওয়েবসাইট তৈরির জন্য ডোমেইন একটি অপরিহার্য উপাদান। বর্তমান ডিজিটাল দুনিয়ায় ওয়েবসাইটের গুরুত্ব অপরিসীম। যেকোনো ধরনের ব্যবসা, পণ্য বা সেবার প্রচার এবং প্রসারের জন্য একটি ওয়েবসাইট হলো সবচেয়ে শক্তিশালী মাধ্যম। তবে, একটি ওয়েবসাইট প্রতিষ্ঠা করতে হলে প্রথমেই প্রয়োজন একটি ডোমেইন নাম। ডোমেইন নাম হলো আপনার ওয়েবসাইটের পরিচয় বা ঠিকানা, যা ইন্টারনেটে আপনাকে খুঁজে পাওয়ার সহজ উপায়। এই ব্লগ পোস্টে আমরা ডোমেইন কি? ডোমেইন এর কাজ কি এ সম্পর্কে বিস্তারিত জানবো।</p>

                        <h1 className="text-3xl sm:text-4xl md:text-4xl  font-extrabold mb-6 border-b-4 border-blue-100 pb-4 leading-tight">
                            ডোমেইন কি?
                        </h1>

                        <p className="leading-relaxed text-gray-600 mb-6 text-base sm:text-lg">
                            ডোমেইন নাম হলো একটি ইউনিক ঠিকানা যা ইন্টারনেটে একটি ওয়েবসাইটের অবস্থান নির্দেশ করে। এটি সাধারণত একটি শব্দের সমষ্টি হয় এবং এর শেষে একটি এক্সটেনশন থাকে, যেমন .com, .org, .net, বা .bd। ডোমেইন নামগুলি সহজেই মনে রাখা যায় এবং এটি ব্যবহারকারীদের জন্য ওয়েবসাইটে প্রবেশ করার একটি স্বচ্ছ উপায় তৈরি করে। উদাহরণস্বরূপ, “example.com” একটি ডোমেইন নাম যা ব্যবহারকারীদের সেই ওয়েবসাইটে নিয়ে যায়।
                        </p>
                        <span className="leading-relaxed text-gray-600 mb-8 text-base sm:text-lg">
                            ডোমেইন নামগুলি মূলত দুইটি অংশে বিভক্ত: প্রথম অংশটি হলো নাম (যেমন “example”) এবং দ্বিতীয় অংশটি হলো টপ-লেভেল ডোমেইন (TLD) যা “com”, “org” ইত্যাদি হতে পারে। TLD-এর মাধ্যমে ওয়েবসাইটের উদ্দেশ্য বা প্রকার বোঝা যায়।
                        </span>



                        {/* এসইও কি? */}
                        <section className="mt-12">
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 border-l-4 border-red-500 pl-3">
                                ডোমেইন এর কাজ কি?
                            </h2>

                            {/* ইমেজ */}
                            <div className="w-full mb-6">
                                <img
                                    className="w-full h-auto max-h-96 rounded-lg object-cover shadow-lg"
                                    src="imgas/wev-site-imgas/2.jpg"
                                    alt="What is SEO"
                                />
                            </div>

                            {/* কনটেন্ট */}
                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p>
                                    ডোমেইন নামের বিভিন্ন গুরুত্বপূর্ণ কাজ রয়েছে। এটি কেবল একটি ওয়েবসাইটের ঠিকানা বা পরিচয় নয়, বরং এর অনেকগুলো কার্যকরী ভূমিকা রয়েছে। ডোমেইন এর কাজ কি এ সম্পর্কে নিম্নে বিস্তারিতভাবে আলোচনা করা হলো-
                                </p>

                            </div>
                        </section>

                        {/* SEO কেন করা হয়? */}
                        <section className="mt-12 pt-8 border-t border-gray-200">
                            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-8 border-l-4 border-green-500 pl-3">
                                ১| ওয়েবসাইটের ঠিকানা তৈরি
                            </h1>

                            <div className="w-full mb-6">
                                <img
                                    className="w-full h-auto max-h-96 rounded-lg object-cover shadow-lg"
                                    src="imgas/wev-site-imgas/3.jpg"
                                    alt="Why is SEO done"
                                />
                            </div>

                            <p className="mb-8 text-gray-700 leading-relaxed">
                                ডোমেইন নাম ওয়েবসাইটের একটি ইউনিক ঠিকানা তৈরি করে। এটি ব্যবহারকারীদেরকে আপনার ওয়েবসাইটে প্রবেশের জন্য একটি সহজ পথ প্রদান করে। ঠিক যেমন একটি বাড়ির ঠিকানা দিয়ে মানুষ সেই বাড়ি খুঁজে পায়, তেমনই ডোমেইন নামের মাধ্যমে ব্যবহারকারীরা সহজেই আপনার ওয়েবসাইটে পৌঁছাতে পারে।
                            </p>
                            <p className="mb-8 text-gray-700 leading-relaxed">
                                একটি সঠিক ডোমেইন নাম ব্যবহারকারীদের মনে রাখা সহজ হয় এবং এটি ব্যবহারকারীদেরকে আরও ভালো অভিজ্ঞতা প্রদান করে। উদাহরণস্বরূপ, “yourbusiness.com”  এর মতো সহজ এবং স্বচ্ছ ডোমেইন নাম ব্যবহারকারীদের কাছে আপনাকে পরিচিত করে তোলে।
                            </p>

                            {/* কারণ ১: ট্রাফিক বৃদ্ধি */}
                            <div className="bg-blue-50 p-6 rounded-xl shadow-inner mb-6">
                                <h1 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-3 flex items-center">
                                    <span className="text-4xl mr-3">1️⃣</span>
                                    মালিকানা সুরক্ষা করা
                                </h1>

                                <div className="w-full mb-4">
                                    <img
                                        className="w-full h-auto max-h-80 rounded-lg object-cover shadow-md"
                                        src="imgas/wev-site-imgas/6.jpg"
                                        alt="Increase Traffic with SEO"
                                    />
                                </div>

                                <p className="text-gray-700 leading-relaxed mb-4">
                                    যখন আপনি একটি ডোমেইন নাম রেজিস্টার করেন, তখন সেটি আপনার হয়ে যায়। এই ডোমেইন নামটি তখন আর অন্য কেউ ব্যবহার করতে পারবে না। এটি আপনার ব্যবসা বা ব্র্যান্ডের নাম সুরক্ষিত করে এবং অনলাইনে আপনার মালিকানা প্রতিষ্ঠিত করে।

                                </p>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    একটি সঠিক ডোমেইন নাম আপনার ব্যবসার সাথে সংযুক্ত থাকলে, তা অন্য কোনো ব্যক্তি বা প্রতিষ্ঠান ব্যবহার করতে পারবে না। সুতরাং, ডোমেইন নামের মালিকানা রক্ষা করা খুবই গুরুত্বপূর্ণ, কারণ এটি আপনার ব্র্যান্ডকে অনলাইন প্রতিযোগিতায় সুরক্ষা দেয়।

                                </p>



                            </div>

                            {/* কারণ ২: ব্র্যান্ডের সচেতনতা বৃদ্ধি */}
                            <div className="bg-green-50 p-6 rounded-xl shadow-inner mb-6">
                                <h1 className="text-2xl sm:text-3xl font-bold text-green-700 mb-3 flex items-center">
                                    <span className="text-4xl mr-3">2️⃣</span> ব্র্যান্ড পরিচিতি বৃদ্ধি
                                </h1>

                                <div className="w-full mb-4">
                                    <img
                                        className="w-full h-auto max-h-80 rounded-lg object-cover shadow-md"
                                        src="imgas/wev-site-imgas/7.jpg"
                                        alt="Increase Brand Awareness"
                                    />
                                </div>

                                <p className="text-gray-700 leading-relaxed mb-4">
                                    একটি সঠিক ডোমেইন নাম আপনার ব্র্যান্ডের পরিচিতি বৃদ্ধি করে। যখন ব্যবহারকারীরা আপনার ডোমেইন নামটি দেখে, তখন তারা সহজেই বুঝতে পারে আপনার ব্যবসার প্রকার, পণ্য বা সেবা। এটি আপনাকে বাজারে আলাদা করে তোলে এবং ব্র্যান্ড হিসেবে আরও দৃঢ় অবস্থান তৈরি করতে সাহায্য করে।

                                </p>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    এছাড়াও, একটি আকর্ষণীয় ও স্মরণীয় ডোমেইন নাম ব্যবহারকারীদের মনে রাখতে সহজ হয়, যা আপনার ব্র্যান্ডকে বারবার খুঁজে পাওয়ার সম্ভাবনা বাড়ায়। ফলে আপনার ব্যবসার প্রচার ও প্রসারে ডোমেইন নাম অত্যন্ত গুরুত্বপূর্ণ ভূমিকা পালন করে।

                                </p>



                            </div>

                            {/* কারণ ৩: ব্যবসার বিক্রি বৃদ্ধি */}
                            <div className="bg-yellow-50 p-6 rounded-xl shadow-inner mb-6">
                                <h1 className="text-2xl sm:text-3xl font-bold text-yellow-700 mb-3 flex items-center">
                                    <span className="text-4xl mr-3">3️⃣</span>  ব্র্যান্ড পরিচিতি বৃদ্ধি
                                </h1>

                                <div className="w-full mb-4">
                                    <img
                                        className="w-full h-auto max-h-80 rounded-lg object-cover shadow-md"
                                        src="imgas/wev-site-imgas/5.jpg"
                                        alt="Increase Business Sales"
                                    />
                                </div>

                                <p className="text-gray-700 leading-relaxed mb-4">
                                    একটি সঠিক ডোমেইন নাম আপনার ব্র্যান্ডের পরিচিতি বৃদ্ধি করে। যখন ব্যবহারকারীরা আপনার ডোমেইন নামটি দেখে, তখন তারা সহজেই বুঝতে পারে আপনার ব্যবসার প্রকার, পণ্য বা সেবা। এটি আপনাকে বাজারে আলাদা করে তোলে এবং ব্র্যান্ড হিসেবে আরও দৃঢ় অবস্থান তৈরি করতে সাহায্য করে।
                                </p>

                                <p className="text-gray-700 leading-relaxed mb-4">
                                    এছাড়াও, একটি আকর্ষণীয় ও স্মরণীয় ডোমেইন নাম ব্যবহারকারীদের মনে রাখতে সহজ হয়, যা আপনার ব্র্যান্ডকে বারবার খুঁজে পাওয়ার সম্ভাবনা বাড়ায়। ফলে আপনার ব্যবসার প্রচার ও প্রসারে ডোমেইন নাম অত্যন্ত গুরুত্বপূর্ণ ভূমিকা পালন করে।
                                </p>

                            </div>
                        </section>

                        {/* বহুল জিজ্ঞাসিত প্রশ্ন ও উত্তর সমূহ (FAQ) */}
                        <section className="mt-12 pt-8 border-t-2 border-dashed border-gray-300">
                            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-6">
                                বহুল জিজ্ঞাসিত প্রশ্ন ও উত্তর সমূহ (FAQ) 💡
                            </h1>
                            <p className="mb-6 text-gray-700">
                                “ডোমেইন কি? ডোমেইন এর কাজ কি?” এই বিষয়ে আপনার মনে বেশ কয়েকটি প্রশ্ন উঁকি দিচ্ছে? তাহলে চলুন জেনে নেই সেই সকল প্রশ্ন ও উত্তরগুলো-
                            </p>

                            {/* FAQ আইটেম */}
                            <div className="space-y-4">
                                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                                    <h4 className="text-xl font-semibold text-gray-900 mb-2">ডোমেইন নাম কেন গুরুত্বপূর্ণ?</h4>
                                    <p className="text-gray-600">ডোমেইন নাম ওয়েবসাইটের ঠিকানা হিসেবে কাজ করে, যা ব্র্যান্ড পরিচিতি বৃদ্ধি করে এবং মালিকানা সুরক্ষা নিশ্চিত করে। এটি আপনার ব্যবসার সাফল্যের জন্য একটি শক্তিশালী হাতিয়ার।</p>
                                </div>
                                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                                    <h4 className="text-xl font-semibold text-gray-900 mb-2">ডোমেইন নাম কতদিনের জন্য রেজিস্ট্রেশন করা যায়?</h4>
                                    <p className="text-gray-600">সাধারণত ডোমেইন নাম ১ থেকে ১০ বছরের জন্য রেজিস্ট্রেশন করা যায়। আপনি চাইলে মেয়াদ শেষ হওয়ার আগে রিনিউ করতে পারেন।</p>
                                </div>
                            </div>
                        </section>

                        {/* উপসংহার */}
                        <section className="mt-12 pt-8 border-t border-gray-200">
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-red-500 mb-4">
                                উপসংহার 🌟
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                উপরোক্ত আলোচনা থেকে আমরা ডোমেইন কি? ডোমেইন এর কাজ কি এ সম্পর্কে বিস্তারিত জানলাম। ডোমেইন নাম একটি ওয়েবসাইটের জন্য অপরিহার্য। এটি কেবল ওয়েবসাইটের ঠিকানা নয়, বরং এটি আপনার ব্যবসার পরিচিতি, নিরাপত্তা এবং প্রচার করার একটি মাধ্যম। একটি সঠিক ডোমেইন নাম নির্বাচন করা আপনার ব্যবসার সাফল্যের জন্য অত্যন্ত গুরুত্বপূর্ণ। সুতরাং, আপনার ব্যবসার জন্য একটি শক্তিশালী এবং কার্যকরী ডোমেইন নাম নির্বাচন করুন, যা আপনাকে বাজারে আলাদা করে তুলবে এবং আপনার লক্ষ্য পূরণের পথে সহায়ক হবে। এছাড়াও আপনার জ্ঞানকে প্রসারিত করার জন্য ডোমেইন নেম রেজিস্ট্রেশন করতে হয় কেন এ সম্পর্কিত আর্টিকেলটি পড়ুন।
                            </p>
                            <p className="mt-6 text-gray-500 italic">
                                ডোমেইন কি? ডোমেইন এর কাজ কি?” সম্পর্কিত কোন প্রশ্ন থাকে তাহলে অবশ্যই নিচে কমেন্ট করবেন। আর এমন ধরনের গুরুত্বপূর্ণ বিষয় গুলো বিনামূল্যে জানতে আমাদের সাথে থাকবেন। ধন্যবাদ, ভালো থাকুন, সুস্থ থাকুন।🙏
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

export default WevDigintBolog;
