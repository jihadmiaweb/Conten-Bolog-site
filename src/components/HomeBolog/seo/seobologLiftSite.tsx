
import { useState } from "react";
import { Link } from "react-router-dom";

function SeoBologeLiftSite() {
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
                        src="/imgas/Home-imgas/9.jpg"
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
                        এসইও কি? SEO কেন করা হয়? 🚀
                    </h1>

                    {/* ভূমিকা */}
                    <p className="leading-relaxed text-gray-600 mb-8 text-base sm:text-lg">
                        SEO কেন করা হয়? – এটা এমন একটি প্রশ্ন যা প্রতিটি অনলাইন ব্যবসায়ী বা ব্লগারকেই ভাবতে হয়। বর্তমানে আমাদের দৈনন্দিন জীবন প্রায় পুরোপুরি ডিজিটাল হয়ে গেছে। ইন্টারনেটের মাধ্যমে যে কোন তথ্য, পণ্য বা সেবা আমরা সহজেই পেতে পারি। তবে শুধু সাইট তৈরি করা এবং কনটেন্ট আপলোড করলেই হবে না, তার সঙ্গে সাইটটির দর্শকও বাড়ানো জরুরি। আর এজন্য **এসইও বা সার্চ ইঞ্জিন অপটিমাইজেশন** এক অত্যন্ত কার্যকরী উপায়। এসইও হলো এমন একটি কৌশল যা ওয়েবসাইটের দৃশ্যমানতা বাড়াতে সহায়তা করে এবং আপনার সাইটের প্রতি আগ্রহী দর্শকদের সংখ্যা বাড়ায়। যদি আপনি একজন ব্যবসায়ী, ব্লগার, অথবা অনলাইন উদ্যোক্তা হন, তাহলে এই ব্লগটি আপনার জন্য অনেক উপকারী হতে পারে। এই ব্লগ পোস্টে আমরা এসইও কি? SEO কেন করা হয় এ সম্পর্কে বিস্তারিত জানবো।
                    </p>

                    {/* এসইও কি? */}
                    <section className="mt-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 border-l-4 border-red-500 pl-3">
                            এসইও কি? 🤔
                        </h2>

                        {/* ইমেজ */}
                        <div className="w-full mb-6">
                            <img
                                className="w-full h-auto max-h-96 rounded-lg object-cover shadow-lg"
                                src="/imgas/seo/1.jpg"
                                alt="What is SEO"
                            />
                        </div>

                        {/* কনটেন্ট */}
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p>
                                **এসইও (SEO)** হলো একটি প্রক্রিয়া যা সার্চ ইঞ্জিনে ওয়েবসাইটের র‍্যাঙ্কিং উন্নত করতে সাহায্য করে। সার্চ ইঞ্জিন যেমন গুগল, বিং, বা ইয়াহু-এ আপনি যখন কোনও শব্দ বা বিষয় অনুসন্ধান করেন, তখন তারা প্রাসঙ্গিক ওয়েবসাইটগুলো তালিকাভুক্ত করে এবং ফলস্বরূপ আপনার কাছে উপস্থাপন করে। এসইও এই প্রক্রিয়ার একটি অংশ, যা সার্চ ইঞ্জিনের ফলাফলে একটি ওয়েবসাইটের সঠিক র‍্যাঙ্কিং পেতে সাহায্য করে। আপনি যদি আপনার ওয়েবসাইটে সঠিকভাবে এসইও প্রক্রিয়া প্রয়োগ করেন, তাহলে এটি গুগল এবং অন্যান্য সার্চ ইঞ্জিনে প্রথম পাতায় চলে আসতে পারে, যা আপনার সাইটে দর্শকদের সংখ্যা বাড়াতে সহায়ক। এটি মূলত ওয়েবসাইটের **অন-পেজ** এবং **অফ-পেজ অপটিমাইজেশন** দ্বারা কাজ করে, যার মাধ্যমে ওয়েবসাইটের পারফরম্যান্স এবং গুণগত মান বৃদ্ধি পায়।
                            </p>
                            <p>
                                এসইও একটি স্ট্র্যাটেজিক প্রক্রিয়া, যা দিয়ে আপনি শুধু আপনার সাইটের দর্শকসংখ্যা বাড়াতে পারবেন না, বরং আপনার ওয়েবসাইটের র‍্যাঙ্কিং এবং আপনার পণ্যের বিক্রি বাড়াতেও সহায়ক। এসইও-র সফল প্রয়োগ করলে আপনি গুগল সার্চ রেজাল্টে প্রথম পেজে উঠে আসতে পারেন, যা আপনার সাইটের জন্য অত্যন্ত লাভজনক।
                            </p>
                            <h4 className="text-lg font-semibold text-blue-600">
                                এছাড়া, এসইও-এর মাধ্যমে আপনি আপনার ওয়েবসাইটের টেকনিক্যাল পারফরম্যান্স যেমন গতির উন্নয়ন, সাইটের কাঠামো, কন্টেন্টের গুণগত মান, ইত্যাদি নিয়েও কাজ করতে পারবেন, যাতে সার্চ ইঞ্জিনের বটগুলি আপনার সাইটকে আরও সহজভাবে বুঝতে পারে এবং র‍্যাঙ্কিং উন্নত করতে সাহায্য করে।
                            </h4>
                        </div>
                    </section>

                    {/* SEO কেন করা হয়? */}
                    <section className="mt-12 pt-8 border-t border-gray-200">
                        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-8 border-l-4 border-green-500 pl-3">
                            SEO কেন করা হয়? 🎯
                        </h1>

                        <div className="w-full mb-6">
                            <img
                                className="w-full h-auto max-h-96 rounded-lg object-cover shadow-lg"
                                src="/imgas/seo/2.jpg"
                                alt="Why is SEO done"
                            />
                        </div>

                        <p className="mb-8 text-gray-700 leading-relaxed">
                            এসইও (Search Engine Optimization) একটি অত্যন্ত গুরুত্বপূর্ণ প্রক্রিয়া যা আপনার ওয়েবসাইটের দর্শক সংখ্যা বৃদ্ধি এবং সার্চ ইঞ্জিনের র‍্যাঙ্কিং বাড়ানোর মাধ্যমে আপনার ব্যবসা, ব্র্যান্ড বা ব্লগকে আরো জনপ্রিয় করে তোলে। এসইও করার ফলে আপনি শুধুমাত্র আপনার ওয়েবসাইটের **ভিজিবিলিটি (visibility)** বৃদ্ধি করবেন না, বরং দীর্ঘমেয়াদে আপনার সাইটের জন্য নির্ভরযোগ্য এবং প্রাসঙ্গিক ট্র্যাফিক আকর্ষণ করতে পারবেন। SEO কেন করা হয় এ সম্পর্কে নিম্নে বিস্তারিতভাবে আলোচনা করা হলো:
                        </p>

                        {/* কারণ ১: ট্রাফিক বৃদ্ধি */}
                        <div className="bg-blue-50 p-6 rounded-xl shadow-inner mb-6">
                            <h1 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-3 flex items-center">
                                <span className="text-4xl mr-3">1️⃣</span> ট্রাফিক বৃদ্ধি
                            </h1>

                            <div className="w-full mb-4">
                                <img
                                    className="w-full h-auto max-h-80 rounded-lg object-cover shadow-md"
                                    src="/imgas/seo/3.jpg"
                                    alt="Increase Traffic with SEO"
                                />
                            </div>

                            <p className="text-gray-700 leading-relaxed mb-4">
                                এসইও-এর সবচেয়ে গুরুত্বপূর্ণ উদ্দেশ্য হলো ওয়েবসাইটের **ট্র্যাফিক বৃদ্ধি**। আপনি যদি আপনার ওয়েবসাইটে সঠিক এসইও কৌশল প্রয়োগ করেন, তাহলে এটি সার্চ ইঞ্জিনের র‍্যাঙ্কিংয়ের প্রথম পাতায় উঠে আসতে পারে। এর ফলে, ওয়েবসাইটটি অধিক সংখ্যক ভিজিটর পাবে, যারা আপনার পণ্য বা সেবা সম্পর্কে জানতে আগ্রহী। সঠিক এসইও কৌশল যেমন **কীওয়ার্ড রিসার্চ**, **অন-পেজ অপটিমাইজেশন** এবং **ব্যাকলিঙ্ক** তৈরি করলে ওয়েবসাইটের ট্রাফিক বৃদ্ধি পায়, যা আপনার ব্যবসায়িক লাভ বৃদ্ধি করতে সহায়তা করে।
                            </p>
                            <span className="block text-sm italic text-gray-600">
                                বেশিরভাগ মানুষ সাধারণত গুগলে প্রথম পাতার ওয়েবসাইটগুলোতেই ক্লিক করে। এসইও এর মাধ্যমে, আপনি আপনার সাইটে আরও বেশি দর্শক আকর্ষণ করতে পারবেন, যা আপনার ব্যবসার বা ব্লগের জন্য উপকারী।
                            </span>
                        </div>

                        {/* কারণ ২: ব্র্যান্ডের সচেতনতা বৃদ্ধি */}
                        <div className="bg-green-50 p-6 rounded-xl shadow-inner mb-6">
                            <h1 className="text-2xl sm:text-3xl font-bold text-green-700 mb-3 flex items-center">
                                <span className="text-4xl mr-3">2️⃣</span> ব্র্যান্ডের সচেতনতা বৃদ্ধি
                            </h1>

                            <div className="w-full mb-4">
                                <img
                                    className="w-full h-auto max-h-80 rounded-lg object-cover shadow-md"
                                    src="/imgas/seo/4.jpg"
                                    alt="Increase Brand Awareness"
                                />
                            </div>

                            <p className="text-gray-700 leading-relaxed mb-4">
                                যখন একটি ওয়েবসাইট গুগল সার্চ রেজাল্টে শীর্ষ র‍্যাঙ্কিংয়ে আসে, তখন এটি সাধারণত অধিক **বিশ্বাসযোগ্য ও বিশ্বস্ত** হিসেবে দেখা হয়। গুগল এবং অন্যান্য সার্চ ইঞ্জিন সাধারণত শুধুমাত্র কৌশলগতভাবে প্রাসঙ্গিক এবং ভরসাযোগ্য সাইটগুলোকে উচ্চ র‍্যাঙ্কিং দেয়।
                            </p>
                            <span className="block text-sm italic text-gray-600">
                                এসইও করার মাধ্যমে আপনি আপনার সাইটের গুণগত মান, কনটেন্ট, এবং টেকনিক্যাল পারফরম্যান্স উন্নত করতে পারেন। ভাল কনটেন্ট, ব্যবহারকারীর অভিজ্ঞতা (**UX**) এবং ট্রাস্টেড লিঙ্ক ব্যবহার করলে গুগল আপনার সাইটকে প্রাধান্য দিয়ে ভালো র‍্যাঙ্কিং দিতে পারে।
                            </span>
                        </div>

                        {/* কারণ ৩: ব্যবসার বিক্রি বৃদ্ধি */}
                        <div className="bg-yellow-50 p-6 rounded-xl shadow-inner mb-6">
                            <h1 className="text-2xl sm:text-3xl font-bold text-yellow-700 mb-3 flex items-center">
                                <span className="text-4xl mr-3">3️⃣</span> ব্যবসার বিক্রি বৃদ্ধি
                            </h1>

                            <div className="w-full mb-4">
                                <img
                                    className="w-full h-auto max-h-80 rounded-lg object-cover shadow-md"
                                    src="/imgas/seo/5.jpg"
                                    alt="Increase Business Sales"
                                />
                            </div>

                            <p className="text-gray-700 leading-relaxed mb-4">
                                এসইও শুধুমাত্র আপনার ওয়েবসাইটের দর্শকসংখ্যা বাড়ানোর জন্য নয়, এটি আপনার ব্যবসার **বিক্রয় বৃদ্ধিতেও** সাহায্য করে। এসইও-এর মাধ্যমে আপনি আপনার ওয়েবসাইটে এমন ট্র্যাফিক আনতে পারবেন, যারা আপনার পণ্য বা সেবা কিনতে আগ্রহী। সঠিক এসইও কৌশল, যেমন **কনটেন্ট মার্কেটিং** এবং **ওয়েবসাইট ডিজাইন**, আপনার বিক্রয় বাড়ানোর জন্য অত্যন্ত গুরুত্বপূর্ণ।
                            </p>
                            <span className="block text-sm italic text-gray-600">
                                যেমন ধরুন, আপনি যদি একটি ই-কমার্স সাইট পরিচালনা করেন, তবে এসইও আপনি যে পণ্য বিক্রি করছেন তার র‍্যাঙ্কিং বাড়াতে সহায়তা করবে। এতে আপনার ব্যবসায়িক লাভ বৃদ্ধি হবে।
                            </span>
                        </div>
                    </section>

                    {/* বহুল জিজ্ঞাসিত প্রশ্ন ও উত্তর সমূহ (FAQ) */}
                    <section className="mt-12 pt-8 border-t-2 border-dashed border-gray-300">
                        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-6">
                            বহুল জিজ্ঞাসিত প্রশ্ন ও উত্তর সমূহ (FAQ) 💡
                        </h1>
                        <p className="mb-6 text-gray-700">
                            “এসইও কি? SEO কেন করা হয়?” এই বিষয়ে আপনার মনে বেশ কয়েকটি প্রশ্ন উঁকি দিচ্ছে? তাহলে চলুন জেনে নেই সেই সকল প্রশ্ন ও উত্তরগুলো-
                        </p>

                        {/* FAQ আইটেম */}
                        <div className="space-y-4">
                            <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                                <h4 className="text-xl font-semibold text-gray-900 mb-2">এসইও কি করে?</h4>
                                <p className="text-gray-600">এসইও ওয়েবসাইটের র‍্যাঙ্কিং উন্নত করতে সাহায্য করে এবং সার্চ ইঞ্জিনের ফলাফলে সাইটের দৃশ্যমানতা বাড়ায়।</p>
                            </div>
                            <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                                <h4 className="text-xl font-semibold text-gray-900 mb-2">এসইও করা কি খুব কঠিন?</h4>
                                <p className="text-gray-600">এসইও একটি দক্ষতার কাজ, তবে সঠিক কৌশল প্রয়োগ করলে আপনি এটি শিখে সফল হতে পারবেন। এটি সময়সাপেক্ষ, কিন্তু অসম্ভব কঠিন নয়।</p>
                            </div>
                        </div>
                    </section>

                    {/* উপসংহার */}
                    <section className="mt-12 pt-8 border-t border-gray-200">
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-red-500 mb-4">
                            উপসংহার 🌟
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            উপরোক্ত আলোচনা থেকে আমরা **এসইও কি? SEO কেন করা হয়** এ সম্পর্কে বিস্তারিত জানলাম। এসইও একটি অপরিহার্য উপাদান যা আপনার ওয়েবসাইটের জনপ্রিয়তা এবং ব্যবসার সাফল্য নিশ্চিত করে। যদিও এটি একটি সময়সাপেক্ষ এবং কঠিন প্রক্রিয়া, তবে একবার আপনি সফলভাবে এসইও প্রয়োগ করলে তা দীর্ঘমেয়াদে দারুণ ফল দিতে পারে। আপনার সাইট যদি সার্চ ইঞ্জিনের ফলাফলে শীর্ষে আসে, তাহলে আপনি বেশি দর্শক, বিক্রি, এবং ব্র্যান্ড সচেতনতা পাবেন। তাই এসইও শিখুন, প্রয়োগ করুন এবং আপনার অনলাইন সফলতা নিশ্চিত করুন। এছাড়াও আপনার জ্ঞানকে প্রসারিত করার জন্য <a href="#" className="text-blue-600 hover:underline font-medium">এসইওতে স্কিমা ব্যবহার করা হয় কেন</a> এ সম্পর্কিত আর্টিকেলটি পড়ুন।
                        </p>

                        <p className="mt-6 text-gray-500 italic">
                            “এসইও কি? SEO কেন করা হয়?” সম্পর্কিত কোন প্রশ্ন থাকলে অবশ্যই নিচে কমেন্ট করবেন। আর এমন ধরনের গুরুত্বপূর্ণ বিষয়গুলো বিনামূল্যে জানতে আমাদের সাথে থাকবেন। ধন্যবাদ, ভালো থাকুন, সুস্থ থাকুন। 🙏
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
    );
}

export default SeoBologeLiftSite;
