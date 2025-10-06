
import ComparisonTable from "@/components/HomeBolog/MarketingBolog/ComparisonTable";
import Sidebar from "@/components/pages/Home/rightSiteHome";
import { useState } from "react";
import { Link } from "react-router-dom";

function MarketingBolog() {
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
                            src="/imgas/Home-imgas/3.jpg"
                            alt="SEO, Search Engine Optimization"
                        />
                    </div>

                    {/* ব্রেডক্রাম্ব নেভিগেশন */}
                    <span className="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-widest px-4 sm:px-6 lg:px-8">
                        <Link to="/" className="text-blue-600 hover:text-blue-800 transition duration-300">
                            হোম
                        </Link>
                        <span className="mx-2">|</span>
                        <Link to="/অনলাইন ইনকাম" className="text-blue-600 hover:text-blue-800 transition duration-300 font-semibold">
                            ডিজিটাল মার্কেটিং
                        </Link>
                    </span>
                </header>

                {/* মূল কনটেন্ট এরিয়া */}
                <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
                    <article className="bg-white p-6 sm:p-10 rounded-3xl shadow-2xl">

                        {/* শিরোনাম */}
                        <h1 className="text-3xl sm:text-5xl font-extrabold text-blue-700 mb-6 border-b-4 border-blue-100 pb-4 leading-tight">
                            মার্কেট ও মার্কেটিং এর মধ্যে পার্থক্য সমূহ
                        </h1>

                        {/* ভূমিকা */}
                        <p className="leading-relaxed text-gray-600 mb-8 text-base pb-4 sm:text-lg">
                            মার্কেট ও মার্কেটিং এর মধ্যে পার্থক্য বোঝা ব্যবসার সফলতা অর্জনের জন্য অপরিহার্য। বর্তমান যুগে ব্যবসায়িক বিশ্বে “মার্কেট” এবং “মার্কেটিং” শব্দ দুটি অত্যন্ত গুরুত্বপূর্ণ। এই দুটি ধারণা ব্যবসার জন্য অপরিহার্য, তবে অনেকেই এগুলোর মধ্যে পার্থক্য বুঝতে পারেন না। মার্কেট হল একটি স্থান যেখানে ক্রেতা এবং বিক্রেতা একত্রিত হয় এবং পণ্য বা পরিষেবার আদান-প্রদান করে। এটি সাধারণত একটি নির্দিষ্ট ভৌগোলিক স্থান বা ডিজিটাল ক্ষেত্রকে নির্দেশ করে, যেখানে বিভিন্ন ব্যবসায়িক কার্যক্রম পরিচালিত হয়।
                        </p>

                        <span className="leading-relaxed  text-gray-600 mb-8 text-base sm:text-lg">
                            অন্যদিকে, মার্কেটিং হল সেই প্রক্রিয়া যার মাধ্যমে পণ্য বা পরিষেবার প্রচার ও বিক্রয় করা হয়। এটি গ্রাহকের চাহিদা, বাজারের প্রবণতা এবং প্রতিযোগিতামূলক পরিবেশ বিশ্লেষণ করে কার্যকরী পরিকল্পনা তৈরি করে। মার্কেটিং একটি সামগ্রিক কৌশল যা পণ্য বিক্রির জন্য বিভিন্ন মাধ্যম এবং প্রচারাভিযান ব্যবহার করে। এই ব্লগ পোস্টে আমরা মার্কেট ও মার্কেটিং এর মধ্যে পার্থক্য সমূহ সম্পর্কে বিস্তারিত জানবো।
                        </span>



                        {/* এসইও কি? */}
                        <section className="mt-12">
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 border-l-4 border-red-500 pl-3">
                                মার্কেট কি?
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
                                    মার্কেট হল একটি স্থান বা পরিবেশ যেখানে ক্রেতা ও বিক্রেতারা একত্রিত হয়ে পণ্য ও সেবার লেনদেন করে। এটি শারীরিক এবং ডিজিটাল উভয়ভাবেই উপস্থিত হতে পারে। শারীরিক মার্কেট হল দোকান, হাট, অথবা শপিং মল, যেখানে মানুষ সরাসরি এসে পণ্য কিনতে পারে। অন্যদিকে, ডিজিটাল মার্কেট হল অনলাইন প্ল্যাটফর্ম, যেখানে ক্রেতারা ইন্টারনেটের মাধ্যমে পণ্য খুঁজে পায় এবং কেনে। মার্কেটের প্রকারভেদ অনুযায়ী এটি বিভিন্নভাবে কার্যকরী হতে পারে।
                                </p>
                                <p>
                                    মার্কেটের প্রধান উপাদানগুলো হল ক্রেতা, বিক্রেতা, পণ্য ও সেবা, এবং লেনদেনের প্রক্রিয়া। ক্রেতা হচ্ছে সেই ব্যক্তি বা প্রতিষ্ঠান যারা পণ্য বা সেবা কেনে, এবং বিক্রেতা সেই ব্যক্তি বা প্রতিষ্ঠান যারা পণ্য বা সেবা বিক্রি করে। মার্কেটে পণ্য ও সেবার বৈচিত্র্য এবং মূল্য পরিবর্তন ঘটে। এছাড়া মার্কেটের উপর বিভিন্ন বাহ্যিক প্রভাব যেমন অর্থনীতি, প্রতিযোগিতা, এবং গ্রাহকদের আচরণও পড়ে।
                                </p>
                                <h4 className="text-lg font-semibold text-blue-600">
                                    মার্কেটের কাঠামো বিভিন্ন ধরনের হতে পারে যেমন গ্লোবাল মার্কেট, ন্যাশনাল মার্কেট, লোকাল মার্কেট ইত্যাদি। প্রতিটি মার্কেটের নিজস্ব চাহিদা এবং সরবরাহের শর্ত থাকে। মার্কেটের কার্যক্রম সফলভাবে পরিচালনার জন্য পণ্যের মান, মূল্য নির্ধারণ, এবং গ্রাহক সম্পর্ক ব্যবস্থাপনা গুরুত্বপূর্ণ।
                                </h4>
                                <p>
                                    মার্কেটের বিশালতা এবং বৈচিত্র্য কারণে এটি একটি বিশেষজ্ঞ এবং গতিশীল ক্ষেত্র, যেখানে ক্রেতা ও বিক্রেতাদের মধ্যে সম্পর্ক এবং লেনদেনের কৌশল অব্যাহত থাকে।
                                </p>

                            </div>
                        </section>

                        {/* SEO কেন করা হয়? */}
                        <section className="mt-12 pt-8 border-t border-gray-200">
                            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-8 border-l-4 border-green-500 pl-3">
                                মার্কেটিং কি?
                            </h1>

                            <div className="w-full mb-6">
                                <img
                                    className="w-full h-auto max-h-96 rounded-lg object-cover shadow-lg"
                                    src="/imgas/ফ্রিল্যান্সিং/6jpg.jpg"
                                    alt="Why is SEO done"
                                />
                            </div>

                            <p className="mb-8 text-gray-700 leading-relaxed">
                                মার্কেটিং হলো সেই প্রক্রিয়া যা পণ্য এবং সেবাগুলোর প্রচার এবং বিক্রয়ের জন্য বিভিন্ন কৌশল ও কার্যক্রম ব্যবহারের উপর ভিত্তি করে। এটি মার্কেটের অন্তর্গত একটি গুরুত্বপূর্ণ অংশ, যার মাধ্যমে পণ্যের প্রতি গ্রাহকদের আগ্রহ সৃষ্টি করা হয়। মার্কেটিং এর বিভিন্ন উপাদান রয়েছে, যেমন গবেষণা, পরিকল্পনা, বিজ্ঞাপন, এবং বিক্রয় কৌশল।
                            </p>
                            <p className="mb-8 text-gray-700 leading-relaxed">
                                মার্কেটিং কার্যক্রমে প্রথমে বাজারের চাহিদা এবং ক্রেতাদের আচরণ সম্পর্কে তথ্য সংগ্রহ করা হয়। তারপর সেই তথ্যের ভিত্তিতে একটি কার্যকর পরিকল্পনা তৈরি করা হয় যাতে পণ্য বা সেবার প্রচার এবং বিক্রয়ের জন্য সঠিক পদ্ধতি নির্ধারণ করা যায়। মার্কেটিং বিজ্ঞাপন, পাবলিক রিলেশনস, সোশ্যাল মিডিয়া, ইমেইল মার্কেটিং এবং অন্যান্য মাধ্যমের মাধ্যমে কার্যকরী হয়ে থাকে।
                            </p>
                            <p className="mb-8 text-gray-700 leading-relaxed">
                                মার্কেটিং এর উদ্দেশ্য হলো পণ্য বা সেবার গ্রাহকদের কাছে পৌঁছানো এবং তাদের আকৃষ্ট করা। একটি শক্তিশালী মার্কেটিং কৌশল কোম্পানির সাফল্যের জন্য অত্যন্ত গুরুত্বপূর্ণ। সঠিক মার্কেটিং কৌশল ব্যবহার করলে পণ্যের চাহিদা বৃদ্ধি পায় এবং বিক্রয়ের হার বাড়ে।
                            </p>
                            <p className="mb-8 text-gray-700 leading-relaxed">
                                মার্কেটিংয়ের মাধ্যমে ব্র্যান্ড পরিচিতি তৈরি করা হয়, যা দীর্ঘমেয়াদী সম্পর্ক স্থাপন করতে সহায়তা করে। এই প্রক্রিয়া বিভিন্ন উপায়ে করা যেতে পারে, যেমন প্রচারমূলক অফার, মূল্য হ্রাস, এবং গ্রাহক সেবা।
                            </p>
                            <p className="mb-8 text-gray-700 leading-relaxed">
                                মার্কেটিং এবং মার্কেটের মধ্যে সম্পর্কটি বেশ জটিল হলেও তারা একে অপরের উপর নির্ভরশীল। মার্কেটিংয়ের কার্যক্রম মার্কেটের কাঠামোর সাথে যুক্ত এবং তার মধ্য দিয়ে গ্রাহক চাহিদা মেটানো হয়।
                            </p>

                            {/* কারণ ১: ট্রাফিক বৃদ্ধি */}
                            <div className="bg-blue-50 p-6 rounded-xl shadow-inner mb-6">
                                <h1 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-3 flex items-center">
                                    <span className="text-4xl mr-3">1️⃣</span>  মার্কেট ও মার্কেটিং এর মধ্যে পার্থক্য সমূহ
                                </h1>



                                <p className="text-gray-700 leading-relaxed mb-4">

                                    মার্কেট এবং মার্কেটিং উভয়ই ব্যবসার ক্ষেত্রে গুরুত্বপূর্ণ, কিন্তু তাদের কার্যক্রম এবং উদ্দেশ্য ভিন্ন। মার্কেট হলো সেই স্থান যেখানে পণ্য ও সেবার লেনদেন হয়, অন্যদিকে মার্কেটিং হলো সেই প্রক্রিয়া যা পণ্যের প্রচার ও বিক্রয়ে সহায়তা করে। মার্কেট ও মার্কেটিং এর মধ্যে পার্থক্য সমূহ নিম্নে বিস্তারিতভাবে তুলে ধরা হলো-
                                </p>


                                <ComparisonTable />

                            </div>


                        </section>

                        {/* বহুল জিজ্ঞাসিত প্রশ্ন ও উত্তর সমূহ (FAQ) */}
                        <section className="mt-12 pt-8 border-t-2 border-dashed border-gray-300">
                            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-6">
                                বহুল জিজ্ঞাসিত প্রশ্ন ও উত্তর সমূহ (FAQ) 💡
                            </h1>
                            <p className="mb-6 text-gray-700">
                                “মার্কেট ও মার্কেটিং এর মধ্যে পার্থক্য সমূহ” এই বিষয়ে আপনার মনে বেশ কয়েকটি প্রশ্ন উঁকি দিচ্ছে? তাহলে চলুন জেনে নেই সেই সকল প্রশ্ন ও উত্তরগুলো-
                            </p>

                            {/* FAQ আইটেম */}
                            <div className="space-y-4">
                                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                                    <h4 className="text-xl font-semibold text-gray-900 mb-2">মার্কেটের প্রকারভেদ কি কি?</h4>
                                    <p className="text-gray-600">মার্কেটের বিভিন্ন প্রকারভেদ রয়েছে, যেমন শারীরিক মার্কেট (দোকান, হাট) এবং ডিজিটাল মার্কেট (অনলাইন মার্কেটপ্লেস)। এছাড়া এটি স্থানীয়, জাতীয় এবং আন্তর্জাতিক মার্কেটে বিভক্ত হতে পারে।</p>
                                </div>
                                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                                    <h4 className="text-xl font-semibold text-gray-900 mb-2">মার্কেটিং কৌশল কেন গুরুত্বপূর্ণ?</h4>
                                    <p className="text-gray-600">মার্কেটিং কৌশল ব্যবসার জন্য গুরুত্বপূর্ণ কারণ এটি পণ্যের প্রচার এবং গ্রাহকদের কাছে পৌঁছানোর সঠিক উপায় নির্ধারণ করে। একটি শক্তিশালী মার্কেটিং কৌশল পণ্যের চাহিদা বৃদ্ধি এবং বিক্রয়ের হার উন্নত করতে সহায়তা করে।</p>
                                </div>
                            </div>
                        </section>

                        {/* উপসংহার */}
                        <section className="mt-12 pt-8 border-t border-gray-200">
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-red-500 mb-4">
                                উপসংহার 🌟
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                উপরোক্ত আলোচনা থেকে আমরা মার্কেট ও মার্কেটিং এর মধ্যে পার্থক্য সমূহ সম্পর্কে বিস্তারিত জানলাম। মার্কেট এবং মার্কেটিং ব্যবসার জন্য অপরিহার্য দুটি অংশ। মার্কেট ক্রেতা ও বিক্রেতাদের মধ্যে লেনদেনের স্থান তৈরি করে, যখন মার্কেটিং সেই পণ্য ও সেবাগুলোকে বাজারে প্রবেশ করতে সাহায্য করে। এই দুটি ধারণা একে অপরের সাথে ঘনিষ্ঠভাবে জড়িত, এবং ব্যবসার সাফল্যের জন্য তাদের কার্যক্রমকে সঠিকভাবে পরিচালনা করা প্রয়োজন। ব্যবসায়িক সিদ্ধান্ত গ্রহণের সময় মার্কেট ও মার্কেটিংয়ের পার্থক্যগুলো বুঝতে পারা অত্যন্ত গুরুত্বপূর্ণ। এছাড়াও আপনার জ্ঞানকে প্রসারিত করার জন্য ডিজিটাল মার্কেটিং এর ভবিষ্যৎ সম্পর্কিত আর্টিকেলটি পড়ুন। </p>


                            <p className="mt-6 text-gray-500 italic">
                                “মার্কেট ও মার্কেটিং এর মধ্যে পার্থক্য সমূহ” সম্পর্কিত কোন প্রশ্ন থাকে তাহলে অবশ্যই নিচে কমেন্ট করবেন। আর এমন ধরনের গুরুত্বপূর্ণ বিষয় গুলো বিনামূল্যে জানতে আমাদের সাথে থাকবেন। ধন্যবাদ, ভালো থাকুন, সুস্থ থাকুন।🙏
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

export default MarketingBolog;


