
import Sidebar from "@/components/pages/Home/rightSiteHome";
import { useState } from "react";
import { Link } from "react-router-dom";

function OnlinePodateBologe() {
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
                            src="/imgas/Home-imgas/8.jpg"
                            alt="SEO, Search Engine Optimization"
                        />
                    </div>

                    {/* ব্রেডক্রাম্ব নেভিগেশন */}
                    <span className="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-widest px-4 sm:px-6 lg:px-8">
                        <Link to="/" className="text-blue-600 font-bold hover:text-blue-800 transition duration-300">
                            হোম
                        </Link>
                        <span className="mx-2">|</span>
                        <Link to="/অনলাইন ইনকাম" className="text-blue-600 hover:text-blue-800 transition duration-300 font-semibold">
                            ই-ব্যবসা
                        </Link>
                    </span>
                </header>

                {/* মূল কনটেন্ট এরিয়া */}
                <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
                    <article className="bg-white p-6 sm:p-10 rounded-3xl shadow-2xl">

                        {/* শিরোনাম */}
                        <h1 className="text-3xl sm:text-5xl font-extrabold text-blue-700 mb-6 border-b-4 border-blue-100 pb-4 leading-tight">
                            অনলাইনে পণ্য বিক্রির কৌশল সমূহ
                        </h1>

                        {/* ভূমিকা */}
                        <p className="leading-relaxed text-gray-600 mb-8 text-base pb-4 sm:text-lg">
                            অনলাইনে পণ্য বিক্রির কৌশল সফল ব্যবসার জন্য একটি অতি গুরুত্বপূর্ণ উপাদান। সঠিক কৌশলগুলি ব্যবহার করে আপনি শুধু বিক্রি বাড়াতে পারবেন না, বরং গ্রাহকদের বিশ্বাসও অর্জন করতে সক্ষম হবেন। বর্তমান বিশ্বে প্রযুক্তির অগ্রগতির সঙ্গে ব্যবসা-বাণিজ্যের ধরণেও পরিবর্তন এসেছে। আগে যেখানে ব্যবসায়ীরা সরাসরি দোকানে বসে পণ্য বিক্রি করতেন, এখন ইন্টারনেটের মাধ্যমে ঘরে বসে পণ্য কেনা-বেচা করা সম্ভব। অনলাইন শপিংয়ের জনপ্রিয়তা এবং সুবিধার কারণে ক্রেতারা এখন যেকোনো স্থান থেকে তাদের প্রয়োজনীয় পণ্য সংগ্রহ করতে পারছেন। অনলাইন বিক্রির জনপ্রিয়তা বাড়ার সঙ্গে সঙ্গে ব্যবসায়িক প্রতিষ্ঠানগুলোও অনলাইন প্ল্যাটফর্মে তাদের ব্যবসা স্থাপন করতে শুরু করেছে। একটি ভালো ব্যবসায়িক পরিকল্পনা এবং সফল বিক্রয় কৌশল আপনাকে প্রতিযোগিতামূলক অনলাইন বাজারে টিকে থাকতে এবং বিক্রি বাড়াতে সাহায্য করবে।
                        </p>

                        <span className="leading-relaxed  text-gray-600  text-base sm:text-lg">
                            এছাড়াও, ক্রমবর্ধমান প্রতিযোগিতামূলক বাজারে শুধু একটি পণ্য তৈরি করাই যথেষ্ট নয়। সেই পণ্যটি কীভাবে বিক্রি করা হবে, কীভাবে ক্রেতার কাছে পৌঁছানো যাবে, এবং কীভাবে ক্রেতার চাহিদা মেটানো যাবে সেগুলোর জন্য সঠিক কৌশল নির্ধারণ করাটা অত্যন্ত জরুরি। এই কৌশলগুলো ঠিকমতো অনুসরণ করলে আপনি শুধু বিক্রয় বাড়াবেন না, বরং গ্রাহকদের সাথে একটি দীর্ঘমেয়াদী সম্পর্ক গড়ে তুলতে পারবেন।
                        </span>
                        <p className="leading-relaxed pt-4 text-gray-600 pb-8 text-base sm:text-lg">
                            অনলাইন ব্যবসার ক্ষেত্রে সবচেয়ে গুরুত্বপূর্ণ বিষয় হল কৌশলগত পরিকল্পনা এবং গ্রাহকদের সঙ্গে সংযোগ স্থাপন করা। শুধু পণ্য বা সেবা বিক্রি করলেই হবে না, বরং ক্রেতাদের সমস্যার সমাধান দিতে হবে এবং তাদের অভিজ্ঞতা সমৃদ্ধ করতে হবে। এই ব্লগ পোস্টে আমরা অনলাইনে পণ্য বিক্রির কৌশল সমূহ সম্পর্কে বিস্তারিত জানবো।
                        </p>



                        <section className="mt-12">
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 border-l-4 border-red-500 pl-3">
                                বিক্রয় কৌশল কি?
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
                                    বিক্রয় কৌশল হলো ব্যবসায়িক এক ধরণের পরিকল্পনা, যা বিভিন্ন উপায়ে পণ্য বা সেবা বিক্রির প্রক্রিয়াকে সফল করার জন্য প্রয়োগ করা হয়। একটি কার্যকর বিক্রয় কৌশল ব্যবসার অগ্রগতির জন্য অপরিহার্য, কারণ এটি ব্যবসায়ীদের নির্দিষ্ট লক্ষ্য নির্ধারণ করতে, সেগুলি পূরণ করার জন্য সঠিক পদক্ষেপ নিতে এবং ব্যবসার লাভ বাড়াতে সহায়তা করে।
                                </p>
                                <p className="mb-4">
                                    বিক্রয় কৌশল মূলত বাজার বিশ্লেষণ, টার্গেট গ্রাহক নির্ধারণ, সঠিক পণ্য নির্বাচন, এবং বিজ্ঞাপন ও প্রচারণার পরিকল্পনা তৈরি করা নিয়ে কাজ করে। বিক্রয় কৌশলের মাধ্যমে আপনি জানতে পারবেন কিভাবে আপনার গ্রাহকদের সঠিকভাবে কাছে পৌঁছানো যাবে এবং কীভাবে তাদের প্রয়োজন মেটানো যাবে। একটি সফল বিক্রয় কৌশল শুধু পণ্য বিক্রিই করে না, বরং ক্রেতাদের বিশ্বাস অর্জন করে এবং দীর্ঘমেয়াদী সম্পর্ক গড়ে তুলতে সহায়তা করে।
                                </p>

                                <p className="mt-3">
                                    এছাড়াও, বিক্রয় কৌশল ব্যবসার জন্য একটি ধারাবাহিক প্রক্রিয়া হিসেবে কাজ করে। এর মাধ্যমে ব্যবসা চালু হওয়ার পরও নিয়মিত বাজার পর্যবেক্ষণ, গ্রাহকদের প্রতিক্রিয়া মূল্যায়ন, এবং নতুন কৌশল গ্রহণ করা যায়। অনলাইনে পণ্য বিক্রির ক্ষেত্রে বিশেষত, বিক্রয় কৌশল অত্যন্ত গুরুত্বপূর্ণ, কারণ প্রতিযোগিতামূলক বাজারে প্রতিদিন নতুন প্রতিযোগী যুক্ত হচ্ছে। সুতরাং, আপনার পণ্য এবং বিপণন কৌশল যদি ঠিকভাবে সাজানো না থাকে, তাহলে আপনি ব্যবসায়িক সাফল্য অর্জন করতে ব্যর্থ হতে পারেন।
                                </p>

                            </div>
                        </section>

                        {/* SEO কেন করা হয়? */}
                        <section className="mt-12 pt-8 border-t border-gray-200">
                            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-8 border-l-4 border-green-500 pl-3">
                                অনলাইনে পণ্য বিক্রির কৌশল সমূহ
                            </h1>

                            <div className="w-full mb-6">
                                <img
                                    className="w-full h-auto max-h-96 rounded-lg object-cover shadow-lg"
                                    src="/imgas/ফ্রিল্যান্সিং/6jpg.jpg"
                                    alt="Why is SEO done"
                                />
                            </div>

                            <p className="mb-8 text-gray-700 leading-relaxed">
                                অনলাইনে পণ্য বিক্রির জন্য সঠিক পরিকল্পনা ও কৌশল থাকাটা অত্যন্ত গুরুত্বপূর্ণ। কারণ, একটি সফল অনলাইন ব্যবসা শুধু পণ্য বিক্রি করাই নয়, বরং গ্রাহকদের সন্তুষ্টি এবং তাদের সাথে সম্পর্ক তৈরি করার উপরও নির্ভর করে। অনলাইনে পণ্য বিক্রির কৌশল সমূহ সম্পর্কে নিম্নে বিস্তারিতভাবে আলোচনা করা হলো-
                            </p>

                            {/* কারণ ১: ট্রাফিক বৃদ্ধি */}
                            <div className="bg-blue-50 p-6 rounded-xl shadow-inner mb-6">
                                <h1 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-3 flex items-center">
                                    <span className="text-4xl mr-3">1️⃣</span>  গ্রাহকের চাহিদা ও সমস্যা চিহ্নিত করুন
                                </h1>



                                <p className="text-gray-700 leading-relaxed mb-4">
                                    অনলাইন বিক্রয়ের জন্য প্রথমে আপনাকে জানতে হবে, গ্রাহকদের আসল চাহিদা কী এবং তাদের সমস্যাগুলো কী কী। এটি অত্যন্ত গুরুত্বপূর্ণ, কারণ আপনি যদি গ্রাহকের সমস্যাগুলো সম্পর্কে না জানেন, তবে তাদের জন্য সঠিক সমাধান দিতে পারবেন না। একজন সফল ব্যবসায়ী হতে হলে, আপনাকে আগে জানতে হবে যে আপনার টার্গেট করা গ্রাহকরা কী ধরনের পণ্য বা সেবা চান।
                                </p>
                                <span className="text-gray-700 leading-relaxed mb-4">
                                    গ্রাহকের চাহিদা এবং সমস্যা চিহ্নিত করার জন্য বিভিন্ন পদ্ধতি ব্যবহার করা যেতে পারে। আপনি অনলাইন সার্ভে, ফোকাস গ্রুপ, বা গ্রাহকদের কাছ থেকে সরাসরি প্রতিক্রিয়া সংগ্রহ করতে পারেন। সোশ্যাল মিডিয়া প্ল্যাটফর্মগুলিতে গ্রাহকদের মতামত এবং তাদের প্রতিক্রিয়া বিশ্লেষণ করেও আপনি জানতে পারবেন তারা কোন সমস্যার সম্মুখীন হচ্ছেন। এছাড়া আপনি বিভিন্ন অনলাইন রিভিউ এবং রেটিংগুলোও বিশ্লেষণ করতে পারেন, যেখানে গ্রাহকরা তাদের অভিজ্ঞতা শেয়ার করেন।
                                </span>
                                <p className="text-gray-700 leading-relaxed mt-4">আপনি যখন গ্রাহকের চাহিদা এবং সমস্যাগুলো চিহ্নিত করবেন, তখন আপনার পণ্য বা সেবা সেই অনুযায়ী উন্নত করতে পারবেন। এজন্য প্রতিনিয়ত বাজারের পরিবর্তন পর্যবেক্ষণ করা জরুরি। নতুন চাহিদা অনুযায়ী পণ্য প্রস্তুত করতে এবং বাজারের পরিবর্তনের সাথে সাথে কৌশল আপডেট করতে হবে। গ্রাহকদের সমস্যার সঠিক সমাধান দিতে পারলে আপনার পণ্যের প্রতি তাদের বিশ্বাস বাড়বে এবং তারা পুনরায় আপনার কাছ থেকে পণ্য কিনতে আগ্রহী হবে।</p>



                            </div>

                            {/* কারণ ২: ব্র্যান্ডের সচেতনতা বৃদ্ধি */}
                            <div className="bg-green-50 p-6 rounded-xl shadow-inner mb-6">
                                <h1 className="text-2xl sm:text-3xl font-bold text-green-700 mb-3 flex items-center">
                                    <span className="text-4xl mr-3">2️⃣</span>সম্ভাব্য গ্রাহক টার্গেট করুন
                                </h1>





                                <span className="text-gray-700 leading-relaxed mb-4">
                                    একটি ব্যবসার মূল চাবিকাঠি হলো সঠিক গ্রাহকদের কাছে পৌঁছানো। সম্ভাব্য গ্রাহক নির্বাচন করার মাধ্যমে আপনি সহজে আপনার পণ্য বা সেবাকে তাদের কাছে প্রাসঙ্গিক করতে পারেন। সঠিক গ্রাহকদের টার্গেট করার জন্য প্রথমে তাদের জনসংখ্যাগত (demographic) তথ্য যেমন বয়স, লিঙ্গ, আয়ের স্তর, শিক্ষাগত যোগ্যতা এবং বাসস্থান বিবেচনা করতে হবে।
                                </span>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    এছাড়াও, গ্রাহকদের আগ্রহ, কেনাকাটার অভ্যাস, এবং তাদের অনলাইন ব্যবহারের প্যাটার্ন বিশ্লেষণ করা অত্যন্ত গুরুত্বপূর্ণ। উদাহরণস্বরূপ, যদি আপনি ফ্যাশন প্রোডাক্ট বিক্রি করেন, তাহলে আপনার লক্ষ্য হবে মূলত সেই গ্রাহকরা যারা অনলাইনে ফ্যাশন আইটেম কিনতে আগ্রহী এবং তাদের বয়স সাধারণত ১৮ থেকে ৩৫ বছরের মধ্যে হতে পারে।
                                </p>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    আপনি যখন আপনার সম্ভাব্য গ্রাহকদের সঠিকভাবে চিহ্নিত করবেন, তখন তাদের জন্য সঠিক মার্কেটিং পরিকল্পনা তৈরি করতে পারবেন। আপনার মার্কেটিং কৌশল যেমন ডিজিটাল বিজ্ঞাপন, সোশ্যাল মিডিয়া প্রচারণা এবং ইমেইল মার্কেটিং এর মাধ্যমেও এই নির্দিষ্ট গ্রাহক গোষ্ঠীর উপর ফোকাস করতে হবে।

                                </p>


                            </div>

                            {/* কারণ ৩: ব্যবসার বিক্রি বৃদ্ধি */}
                            <div className="bg-yellow-50 p-6 rounded-xl shadow-inner mb-6">
                                <h1 className="text-2xl sm:text-3xl font-bold text-yellow-700 mb-3 flex items-center">
                                    <span className="text-4xl mr-3">3️⃣</span>
                                    সঠিক পণ্য/সেবা নির্ধারণ করুন
                                </h1>




                                <span className="text-gray-700 leading-relaxed ">
                                    আপনার টার্গেট গ্রাহকদের চাহিদার সাথে সামঞ্জস্য রেখে পণ্য বা সেবা নির্ধারণ করা একটি গুরুত্বপূর্ণ ধাপ। আপনি যে পণ্য বা সেবা বিক্রি করতে যাচ্ছেন, তা অবশ্যই গ্রাহকদের জন্য উপযোগী এবং প্রয়োজনীয় হতে হবে। যদি আপনি এমন কোনো পণ্য বাজারে আনেন যার চাহিদা নেই, তাহলে তা বিক্রি করা কঠিন হবে।
                                </span>
                                <p className="text-gray-700 leading-relaxed mt-4 mb-4">
                                    সঠিক পণ্য বা সেবা নির্ধারণ করার জন্য আপনাকে প্রথমে বাজার বিশ্লেষণ করতে হবে। দেখুন, কোন পণ্যগুলো বাজারে ভালো বিক্রি হচ্ছে এবং কোন পণ্যের চাহিদা বেশি। তারপর আপনার পণ্যের বৈশিষ্ট্যগুলো নির্ধারণ করুন এবং সেটিকে গ্রাহকদের প্রয়োজনের সাথে মেলে এমনভাবে উপস্থাপন করুন। পণ্যের গুণগত মান, ডিজাইন এবং ব্যবহারকারীর সুবিধা সবকিছুই বিবেচনা করতে হবে।
                                </p>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    যদি আপনার পণ্যটি বাজারের অন্যান্য পণ্যের তুলনায় ভালো হয়, তবে তা গ্রাহকদের কাছে জনপ্রিয় হয়ে উঠবে এবং তারা আপনার কাছ থেকে তা কিনতে আগ্রহী হবে। এছাড়া পণ্যের দামও গ্রাহকদের ক্রয় ক্ষমতার মধ্যে রাখতে হবে, যাতে তারা সহজে পণ্যটি কিনতে পারে।
                                </p>

                            </div>
                        </section>

                        {/* বহুল জিজ্ঞাসিত প্রশ্ন ও উত্তর সমূহ (FAQ) */}
                        <section className="mt-12 pt-8 border-t-2 border-dashed border-gray-300">
                            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-6">
                                বহুল জিজ্ঞাসিত প্রশ্ন ও উত্তর সমূহ (FAQ) 💡
                            </h1>
                            <p className="mb-6 text-gray-700">
                                “অনলাইনে পণ্য বিক্রির কৌশল সমূহ” এই বিষয়ে আপনার মনে বেশ কয়েকটি প্রশ্ন উঁকি দিচ্ছে? তাহলে চলুন জেনে নেই সেই সকল প্রশ্ন ও উত্তরগুলো-
                            </p>

                            {/* FAQ আইটেম */}
                            <div className="space-y-4">
                                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                                    <h4 className="text-xl font-semibold text-gray-900 mb-2">বিক্রয় কৌশল কেন গুরুত্বপূর্ণ?</h4>
                                    <p className="text-gray-600">বিক্রয় কৌশল আপনার ব্যবসার সাফল্যের জন্য অপরিহার্য, কারণ এটি গ্রাহকদের চাহিদা এবং বাজারের প্রবণতা বুঝতে সাহায্য করে। সঠিক কৌশল গ্রহণ করলে বিক্রি বাড়ানো এবং লাভজনক ব্যবসা গঠন করা সম্ভব।</p>
                                </div>
                                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                                    <h4 className="text-xl font-semibold text-gray-900 mb-2">কিভাবে একটি কার্যকর বিক্রয় কৌশল তৈরি করবো?</h4>
                                    <p className="text-gray-600">একটি কার্যকর বিক্রয় কৌশল তৈরি করতে হলে গ্রাহকের চাহিদা, পণ্য বৈশিষ্ট্য, এবং বাজারের প্রতিযোগিতার উপর ভিত্তি করে গবেষণা করতে হবে। এর পর সেই তথ্যের ভিত্তিতে টার্গেট গ্রাহক এবং বাজার পরিকল্পনা তৈরি করুন।</p>
                                </div>
                            </div>
                        </section>

                        {/* উপসংহার */}
                        <section className="mt-12 pt-8 border-t border-gray-200">
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-red-500 mb-4">
                                উপসংহার 🌟
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                উপরোক্ত আলোচনা থেকে আমরা অনলাইনে পণ্য বিক্রির কৌশল সমূহ সম্পর্কে বিস্তারিত জানলাম। অনলাইনে সফলভাবে পণ্য বিক্রি করার জন্য সঠিক বিক্রয় কৌশল তৈরি করা এবং তা ধারাবাহিকভাবে প্রয়োগ করা অত্যন্ত গুরুত্বপূর্ণ। গ্রাহকদের চাহিদা এবং সমস্যার প্রতি মনোযোগ দিয়ে, সঠিক পণ্য নির্ধারণ করা, এবং বিভিন্ন মার্কেটিং কৌশল ব্যবহার করা আপনার ব্যবসাকে সফলতার দিকে নিয়ে যেতে পারে। নিয়মিত ডেটা বিশ্লেষণ এবং নতুন কৌশল গ্রহণ করার মাধ্যমে আপনি আপনার ব্যবসা ক্রমাগত উন্নত করতে পারবেন। এছাড়াও আপনার জ্ঞানকে প্রসারিত করার জন্য অনলাইন ব্যবসা করার নিয়ম সম্পর্কিত আর্টিকেলটি পড়ুন।
                                ।
                            </p>

                            <p className="mt-6 text-gray-500 italic">
                                “অনলাইনে পণ্য বিক্রির কৌশল সমূহ” সম্পর্কিত কোন প্রশ্ন থাকে তাহলে অবশ্যই নিচে কমেন্ট করবেন। আর এমন ধরনের গুরুত্বপূর্ণ বিষয় গুলো বিনামূল্যে জানতে আমাদের সাথে থাকবেন। ধন্যবাদ, ভালো থাকুন, সুস্থ থাকুন।🙏
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
            <Sidebar />
        </div>
    );
}

export default OnlinePodateBologe;


