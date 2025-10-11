
import Sidebar from "@/components/pages/Home/rightSiteHome";
import { useState } from "react";

import { Link } from "react-router-dom";

function ContentypeBolog() {
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
                            src=" imgas/bloging-images/6.jpg"
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
                            কনটেন্ট টাইপ গুলো কি কি?
                        </h1>

                        {/* ভূমিকা */}
                        <p className="leading-relaxed text-gray-600 mb-8 text-base pb-4 sm:text-lg">
                            কনটেন্ট টাইপ গুলো কি কি এ সম্পর্কে জ্ঞাত হয়ে ডিজিটাল যুগে সঠিক কনটেন্ট নির্বাচন করা ব্যবসা এবং ব্যক্তিগত প্রচারের ক্ষেত্রে অত্যন্ত গুরুত্বপূর্ণ। বর্তমান ডিজিটাল যুগে “কনটেন্ট” বা বিষয়বস্তু একটি অত্যন্ত গুরুত্বপূর্ণ ধারণা। মানুষ অনলাইনে বিভিন্ন ধরনের তথ্য ও বিনোদন খোঁজে, এবং এইসব তথ্যেরই মূল উপাদান হচ্ছে কনটেন্ট। ব্লগ পোস্ট, ছবি, ভিডিও, অডিও সবকিছুই এক ধরণের কনটেন্ট যা আমাদের প্রতিদিনের জীবনের সাথে সম্পর্কিত। কনটেন্ট শুধু বিনোদনের জন্যই নয়, বরং শিক্ষা, ব্যবসা, এবং তথ্য প্রচারের জন্যও ব্যবহৃত হয়। ডিজিটাল প্ল্যাটফর্মগুলোর বিকাশের সাথে সাথে কনটেন্টের গুরুত্ব দিন দিন আরও বাড়ছে। তাই, সঠিকভাবে কনটেন্ট তৈরি ও ব্যবহার করা এখন জরুরি হয়ে পড়েছে। এই ব্লগ পোস্টে আমরা কনটেন্ট টাইপ গুলো কি কি এ সম্পর্কে বিস্তারিত জানবো।
                        </p>


                        <h1 className="text-3xl sm:text-3xl md:text-3xl  font-extrabold mb-6 border-b-4 border-blue-100 pb-4 leading-tight">
                            কনটেন্ট কি?
                        </h1>

                        <p className="leading-relaxed text-gray-600 mb-6 text-base sm:text-lg">
                            কনটেন্ট হল যে কোন ধরণের তথ্য বা অভিজ্ঞতা যা একটি নির্দিষ্ট মাধ্যমে প্রদান করা হয়। এটি হতে পারে লিখিত, দৃশ্যমান, বা শ্রুতিমূলক। কনটেন্টের মাধ্যমে মানুষ অন্যদের সাথে জ্ঞান, তথ্য, চিন্তা বা অনুভূতি শেয়ার করে। আধুনিক ইন্টারনেট ও সোশ্যাল মিডিয়ার যুগে, কনটেন্ট প্রতিদিনের জীবনের একটি অবিচ্ছেদ্য অংশ হয়ে উঠেছে। আমরা কনটেন্টের মাধ্যমে বিভিন্ন বিষয়ে জানি, শেখি এবং বিনোদন পাই।
                        </p>

                        <p className="leading-relaxed text-gray-600 mb-6 text-base sm:text-lg">
                            কনটেন্ট শুধুমাত্র তথ্য প্রচারের মাধ্যম নয়, বরং এটি ব্র্যান্ড, ব্যবসা এবং ব্যক্তিগত পরিচয় গড়ে তুলতেও সাহায্য করে। একজন উদ্যোক্তা তার ব্যবসার প্রচারের জন্য কনটেন্ট ব্যবহার করতে পারেন, আবার একজন লেখক তার লেখনীর মাধ্যমে নতুন ধারনা শেয়ার করতে পারেন। সঠিকভাবে তৈরি করা কনটেন্ট পাঠকের মনোযোগ ধরে রাখতে সাহায্য করে এবং তাদেরকে কার্যকরভাবে বার্তা পৌঁছে দেয়।
                        </p>

                        <p className="leading-relaxed text-gray-600 mb-6 text-base sm:text-lg">
                            আজকের দিনে কনটেন্ট শুধু সামাজিক মাধ্যম বা ওয়েবসাইটেই সীমাবদ্ধ নয়, এটি আমাদের প্রতিদিনের বিভিন্ন ক্ষেত্রে ব্যবহৃত হচ্ছে। স্কুলে শিক্ষামূলক কনটেন্ট, অফিসে কর্পোরেট কনটেন্ট, এমনকি ব্যক্তিগত জীবনে আমাদের কথোপকথনেও কনটেন্ট একটি বড় ভূমিকা পালন করে। কনটেন্ট তাই আজকের ডিজিটাল যুগে জ্ঞানের একটি প্রধান মাধ্যম হয়ে উঠেছে।
                        </p>



                        {/* এসইও কি? */}
                        <section className="mt-12">
                            <h2 className="text-3xl sm:text-3xl font-bold text-gray-800 mb-6 border-l-4 border-red-500 pl-3">
                                কনটেন্ট টাইপ গুলো কি কি?
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
                                    কনটেন্টের বিভিন্ন ধরন রয়েছে, এবং প্রতিটি ধরণের নিজস্ব গুরুত্ব ও উদ্দেশ্য রয়েছে। ডিজিটাল প্ল্যাটফর্মে কার্যকরী উপস্থিতি তৈরি করতে বিভিন্ন ধরনের কনটেন্ট তৈরি করা প্রয়োজন। বিভিন্ন কনটেন্ট টাইপগুলোতে টেক্সট, ইমেজ, ভিডিও, এবং অডিও কনটেন্ট অন্তর্ভুক্ত রয়েছে। প্রতিটি মাধ্যমের নিজস্ব ব্যবহার এবং প্রভাব রয়েছে, এবং তা নির্ভর করে কনটেন্টের ধরন ও দর্শকের প্রয়োজনের উপর। কনটেন্ট টাইপ গুলো কি কি এ সম্পর্কে নিম্নে বিস্তারিতভাবে আলোচনা করা হলো-
                                </p>


                            </div>
                        </section>

                        {/* SEO কেন করা হয়? */}
                        <section className="mt-12 pt-8 border-t border-gray-200">
                            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-8 border-l-4 border-green-500 pl-3">
                                ১। টেক্সট বা লিখিত কন্টেন্ট

                            </h1>

                            <div className="w-full mb-6">
                                <img
                                    className="w-full h-auto max-h-96 rounded-lg object-cover shadow-lg"
                                    src="imgas/simpol-bolog-imgas/2.jpg"
                                    alt="Why is SEO done"
                                />
                            </div>

                            <p className="mb-5 text-gray-700 leading-relaxed">
                                লিখিত কনটেন্ট হল সবচেয়ে প্রচলিত এবং পুরাতন কনটেন্টের ধরণ। এটি ব্লগ পোস্ট, নিবন্ধ, ইমেইল, স্যোশাল মিডিয়ার স্ট্যাটাস, এবং অন্যান্য লিখিত মাধ্যমে ব্যবহৃত হয়। টেক্সট কনটেন্টের মাধ্যমে গভীরভাবে তথ্য বিশ্লেষণ করা সম্ভব হয়, এবং এটি সবচেয়ে বিস্তারিত এবং তথ্যবহুল কনটেন্ট তৈরি করতে সহায়ক। ব্লগ লেখক, সাংবাদিক, এবং ব্যবসায়ীরা তাদের বার্তা পৌঁছে দিতে লিখিত কনটেন্ট ব্যবহার করেন। সঠিক শব্দ চয়নের মাধ্যমে পাঠকদের উপর একটি গভীর প্রভাব ফেলা যায়, এবং এটি দীর্ঘমেয়াদী তথ্য সংরক্ষণের জন্যও কার্যকরী।
                            </p>

                            <p className="mb-8 text-gray-700 leading-relaxed">
                                লিখিত কনটেন্টের একটি বড় সুবিধা হল এটি সহজেই অনুসন্ধানযোগ্য এবং প্রাসঙ্গিক তথ্য খুঁজে পাওয়া যায়। গুগলের মতো সার্চ ইঞ্জিনগুলির মাধ্যমে ব্যবহারকারীরা সহজেই টেক্সট কনটেন্টের উপর ভিত্তি করে তাদের প্রয়োজনীয় তথ্য খুঁজে নিতে পারে। এছাড়া, এটি যেকোনো সময় পড়া এবং পুনর্বিবেচনা করা যায়, যা এটি অন্যান্য কনটেন্টের তুলনায় অনেক বেশি টেকসই করে তুলেছে।

                            </p>



                            <p className="mb-8 text-gray-700 leading-relaxed">
                                লিখিত কনটেন্ট প্রায় সব ক্ষেত্রেই ব্যবহৃত হয়, বিশেষত যেখানে বিস্তারিত ব্যাখ্যা এবং তথ্যের বিশ্লেষণ প্রয়োজন। ই-কমার্স সাইট থেকে শুরু করে শিক্ষামূলক প্ল্যাটফর্মগুলোতেও এই কনটেন্টের ব্যবহার দেখা যায়। এটির মাধ্যমে নির্দিষ্ট বিষয়ের উপর গুরুত্বারোপ করা সম্ভব হয় এবং এটি দীর্ঘস্থায়ী মুদ্রারূপে সংরক্ষণ করা যায়।
                            </p>




                            {/* কারণ ১: ট্রাফিক বৃদ্ধি */}
                            <div className="bg-blue-50 p-6 rounded-xl shadow-inner mb-6">
                                <h1 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-3 flex items-center">
                                    <span className="text-4xl mr-3"></span>
                                    ২। ইমেজ বা ছবি কন্টেন্ট
                                </h1>

                                <div className="w-full mb-4">
                                    <img
                                        className="w-full h-auto max-h-80 rounded-lg object-cover shadow-md"
                                        src="imgas/simpol-bolog-imgas/3.jpg"
                                        alt="Increase Traffic with SEO"
                                    />
                                </div>

                                <p className="text-gray-700 leading-relaxed mb-4">
                                    ইমেজ বা ছবি কনটেন্ট হলো সেই ধরণের কনটেন্ট যা একটি গল্প বা বার্তা দেখানোর জন্য ছবি বা গ্রাফিক্স ব্যবহার করে। একটি ছবি হাজার শব্দের চেয়ে বেশি কিছু বলতে পারে। সামাজিক মাধ্যমগুলোতে ইমেজ কনটেন্ট সবচেয়ে বেশি জনপ্রিয়। ফেসবুক, ইনস্টাগ্রাম, পিন্টারেস্টের মতো প্ল্যাটফর্মগুলো মূলত ইমেজ কনটেন্টের উপর ভিত্তি করে গড়ে উঠেছে। ছবি একটি জটিল ধারণাকে সহজভাবে উপস্থাপন করতে পারে এবং দর্শকদের সাথে দ্রুত সংযোগ স্থাপন করতে সহায়তা করে।
                                </p>
                                <p className="text-gray-700 leading-relaxed mb-4">

                                    ইমেজ কনটেন্টের একটি বড় সুবিধা হলো এটি চোখে সহজেই ধরা পড়ে এবং ব্যবহারকারীদের মনোযোগ আকর্ষণ করতে সাহায্য করে। অনেক ক্ষেত্রে, দর্শকরা লেখা পড়ার আগেই একটি ছবি দেখে একটি আইডিয়া বুঝতে পারে। ব্যবসা এবং ব্র্যান্ডগুলো তাদের পণ্যের প্রমোশন এবং বিজ্ঞাপনের জন্য ইমেজ কনটেন্ট ব্যবহার করে। এটি দ্রুত এবং সহজে বার্তা পৌঁছে দেয়ার অন্যতম মাধ্যম।
                                </p>

                                <p className="text-gray-700 leading-relaxed mb-4">
                                    ছবি কনটেন্টের মাধ্যমে দৃশ্যমান অভিজ্ঞতা প্রদান করা সম্ভব হয়, যা পাঠকদের স্মৃতিতে দীর্ঘদিন ধরে থাকে। এছাড়াও, গ্রাফিক্স, ইনফোগ্রাফিক্স, চার্ট ইত্যাদি ব্যবহার করে তথ্যকে আরও সহজে উপস্থাপন করা সম্ভব। শিক্ষামূলক কনটেন্ট থেকে শুরু করে বিনোদনমূলক কনটেন্টে ইমেজের ব্যবহার গুরুত্বপূর্ণ ভূমিকা পালন করে।

                                </p>






                            </div>

                            {/* কারণ ২: ব্র্যান্ডের সচেতনতা বৃদ্ধি */}
                            <div className="bg-green-50 p-6 rounded-xl shadow-inner mb-6">
                                <h1 className="text-2xl sm:text-3xl font-bold text-green-700 mb-3 flex items-center">
                                    <span className="text-4xl mr-3"></span>
                                    ৩। ভিডিও ও এনিমেশন কন্টেন্ট
                                </h1>

                                <div className="w-full mb-4">
                                    <img
                                        className="w-full h-auto max-h-80 rounded-lg object-cover shadow-md"
                                        src="imgas/simpol-bolog-imgas/4.jpg"
                                        alt="Increase Brand Awareness"
                                    />
                                </div>

                                <p className="text-gray-700 leading-relaxed mb-4">
                                    ভিডিও কনটেন্ট বর্তমান সময়ে সবচেয়ে জনপ্রিয় এবং শক্তিশালী মাধ্যম। এটি শুধুমাত্র দৃশ্যমানই নয়, বরং শব্দের সাথে মিলিত হয়ে একটি সম্পূর্ণ অভিজ্ঞতা তৈরি করে। ইউটিউব, টিকটক, এবং ফেসবুকের মতো প্ল্যাটফর্মগুলো ভিডিও কনটেন্টের জন্য বিখ্যাত। ভিডিওর মাধ্যমে তথ্য সহজে প্রকাশ করা যায় এবং দর্শকরা সরাসরি একটি ধারণা বা বার্তা বুঝতে সক্ষম হয়।

                                </p>


                                <p className="mb-8 text-gray-700 leading-relaxed">
                                    ভিডিও কনটেন্টের মাধ্যমে জটিল বিষয়কে সহজভাবে উপস্থাপন করা সম্ভব হয়। শিক্ষা, বিনোদন, মার্কেটিং, এবং ব্যবসায়িক ক্ষেত্রে ভিডিওর ব্যাপক ব্যবহার লক্ষ্য করা যায়। একজন শিক্ষক ভিডিওর মাধ্যমে শিক্ষার্থীদের নতুন কিছু শেখাতে পারেন, আবার একটি ব্র্যান্ড তাদের পণ্যের বিজ্ঞাপন তৈরি করতে ভিডিও ব্যবহার করতে পারে। দর্শকদের মনের মধ্যে একটি স্থায়ী প্রভাব ফেলতে ভিডিও কনটেন্ট অত্যন্ত কার্যকরী।
                                </p>

                                <p className="mb-8 text-gray-700 leading-relaxed">
                                    এনিমেশন কনটেন্টও ভিডিওর একটি বিশেষ ধরণ, যেখানে বিভিন্ন চরিত্র ও গ্রাফিক্স ব্যবহার করে মজার এবং শিক্ষামূলক কনটেন্ট তৈরি করা হয়। অ্যানিমেটেড ভিডিওগুলো শিশুদের জন্য বিশেষভাবে জনপ্রিয়। এছাড়াও, বিভিন্ন ব্যবসায়িক উপস্থাপনায় এনিমেশন ব্যবহার করে জটিল তথ্যকে সহজ ও আকর্ষণীয় করা হয়।
                                </p>




                            </div>

                            {/* কারণ ৩: ব্যবসার বিক্রি বৃদ্ধি */}
                            <div className="bg-yellow-50 p-6 rounded-xl shadow-inner mb-6">
                                <h1 className="text-2xl sm:text-3xl font-bold text-yellow-700 mb-3 flex items-center">
                                    <span className="text-4xl mr-3"></span>
                                    ৪। অডিও কন্টেন্ট
                                </h1>

                                <div className="w-full mb-4">
                                    <img
                                        className="w-full h-auto max-h-80 rounded-lg object-cover shadow-md"
                                        src="imgas/simpol-bolog-imgas/5.jpg"
                                        alt="Increase Business Sales"
                                    />
                                </div>

                                <p className="text-gray-700 leading-relaxed mb-4">
                                    অডিও কনটেন্ট হল সেই ধরণের কনটেন্ট যা শ্রুতিমূলক এবং এটি শ্রোতার কানকে টার্গেট করে। পডকাস্ট, রেডিও শো, অডিওবুক ইত্যাদি অডিও কনটেন্টের উদাহরণ। বর্তমানে পডকাস্ট একটি জনপ্রিয় মাধ্যম হয়ে উঠেছে, যেখানে বিভিন্ন বিষয়ে আলোচনা করা হয়। মানুষ চলাফেরা, ব্যায়াম বা কাজ করার সময় অডিও কনটেন্ট শোনার মাধ্যমে সহজেই তথ্য গ্রহণ করতে পারে।
                                </p>

                                <p className="text-gray-700 leading-relaxed mb-2">
                                    অডিও কনটেন্টের একটি বড় সুবিধা হলো এটি চোখের প্রয়োজন হয় না, তাই মানুষ যে কোন সময়, যে কোন স্থানে এটি শুনতে পারে। এটি বহনযোগ্য এবং সহজে ব্যবহারযোগ্য। একজন লেখক তার বইয়ের অডিও ভার্সন তৈরি করতে পারেন, অথবা একজন পডকাস্টার তার চিন্তা-ভাবনা শ্রোতাদের সাথে শেয়ার করতে পারেন। অডিও কনটেন্ট সময় সাশ্রয়ী এবং বিনোদনমূলক উভয় দিকেই কার্যকর।


                                </p>

                                <p className="text-gray-700 leading-relaxed mb-2">
                                    এছাড়াও, অডিও কনটেন্টের মাধ্যমে মানুষ বিভিন্ন ভাষায়, সংস্কৃতিতে এবং বিষয়বস্তুর সাথে পরিচিত হতে পারে। এটি শিক্ষামূলক দিক থেকে অত্যন্ত কার্যকর এবং মানুষকে একটি নতুন দৃষ্টিভঙ্গি প্রদান করে। বর্তমানে শিক্ষামূলক প্ল্যাটফর্মগুলো অডিও কনটেন্টের মাধ্যমে শিক্ষার্থীদের জন্য নতুন নতুন উপায়ে শিক্ষাদান করছে।
                                </p>





                            </div>
                        </section>

                        {/* বহুল জিজ্ঞাসিত প্রশ্ন ও উত্তর সমূহ (FAQ) */}
                        <section className="mt-12 pt-8 border-t-2 border-dashed border-gray-300">
                            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-6">
                                বহুল জিজ্ঞাসিত প্রশ্ন ও উত্তর সমূহ (FAQ) 💡
                            </h1>
                            <p className="mb-6 text-gray-700">
                                “কনটেন্ট টাইপ গুলো কি কি?” এই বিষয়ে আপনার মনে বেশ কয়েকটি প্রশ্ন উঁকি দিচ্ছে? তাহলে চলুন জেনে নেই সেই সকল প্রশ্ন ও উত্তরগুলো-
                            </p>

                            {/* FAQ আইটেম */}
                            <div className="space-y-4">
                                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                                    <h4 className="text-xl font-semibold text-gray-900 mb-2">কনটেন্টের মূল উদ্দেশ্য কি?</h4>
                                    <p className="text-gray-600">
                                        কনটেন্টের মূল উদ্দেশ্য হলো তথ্য প্রদান, বিনোদন বা শিক্ষা এবং মানুষের সাথে যোগাযোগ স্থাপন করা।

                                    </p>
                                </div>
                                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                                        কনটেন্ট কেন গুরুত্বপূর্ণ?

                                    </h4>
                                    <p className="text-gray-600">
                                        কনটেন্ট গুরুত্বপূর্ণ কারণ এটি জ্ঞান বিনিময়, ব্র্যান্ড প্রচার, এবং দর্শকদের সাথে যোগাযোগ স্থাপনের অন্যতম মাধ্যম। এটি ব্যবসায়িক ও ব্যক্তিগত পরিচিতি তৈরিতেও সহায়ক।
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
                                উপরোক্ত আলোচনা থেকে আমরা কনটেন্ট টাইপ গুলো কি কি এ সম্পর্কে বিস্তারিত জানলাম। কনটেন্ট আধুনিক সময়ের একটি অপরিহার্য মাধ্যম। বিভিন্ন ধরনের কনটেন্ট যেমন টেক্সট, ইমেজ, ভিডিও, এবং অডিও প্রতিটি ক্ষেত্রেই কার্যকরী এবং মানুষের জীবনকে সমৃদ্ধ করে তুলছে। সঠিকভাবে কনটেন্ট তৈরি এবং ব্যবহারের মাধ্যমে যে কোন ব্যক্তি বা প্রতিষ্ঠান তাদের বার্তা আরও সুস্পষ্টভাবে পৌঁছাতে পারে। তাই কনটেন্টের গুরুত্ব এবং এর সঠিক ব্যবহারের উপর গুরুত্ব দেওয়া প্রয়োজন। এছাড়াও আপনার জ্ঞানকে প্রসারিত করার জন্য
                                <span className="text-amber-800 font-bold p-2">
                                    কন্টেন্ট মার্কেটিং এর গুরুত্ব
                                </span>
                                সম্পর্কে আর্টিকেলটি পড়তে পারেন।
                            </p>
                            <p className="mt-6 text-gray-500 italic">
                                <span className="font-bold">“কনটেন্ট টাইপ গুলো কি কি?”</span>

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

export default ContentypeBolog;
