import { Link } from "react-router-dom";

// Main Component
const ContentMarketingLiftSite = () => {
    return (
        <div className="bg-gray-50 min-h-screen text-gray-800 font-sans">
            <main className="max-w-5xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
                {/* Main Image */}
                <div className="w-full pb-4">
                    <img
                        className="w-full h-auto rounded-lg object-cover cursor-pointer sm:h-64 md:h-80 transition-transform px-3 duration-300 md:hover:scale-105"
                        src="/imgas/Home-imgas/1.jpg"
                        alt="Product Image"
                    />
                </div>

                {/* Header */}
                <header className="mb-8">
                    <span className="text-xs pt-4 sm:text-sm font-semibold text-blue-700 uppercase tracking-widest px-2 sm:px-3">
                        <Link to="/এসইও">এসইও</Link>
                        <span className="mx-1">|</span>
                        <Link to="/">হোম</Link>
                    </span>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-3 leading-tight">
                        Content Marketing এর Strategy কয়টি ও কি কি?
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-2">
                        Content Marketing এর Strategy কয়টি ও কি কি এবং কিভাবে তা আপনার ব্যবসাকে সফল করতে পারে? বাংলাদেশ একটি উন্নয়নশীল দেশ, যেখানে ইন্টারনেট ব্যবহারের প্রবণতা দিন দিন বাড়ছে।
                    </p>
                </header>

                {/* What is Content Marketing */}
                <section className="bg-blue-50 p-4 sm:p-6 md:p-8 rounded-xl border-l-4 border-blue-600 mb-10">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 text-blue-800">
                        কনটেন্ট মার্কেটিং কি?
                    </h2>
                    <p className="leading-relaxed text-gray-700 text-sm sm:text-base md:text-lg">
                        কনটেন্ট মার্কেটিং এমন একটি পদ্ধতি, যেখানে তথ্যপূর্ণ, আকর্ষণীয় এবং মানসম্মত কনটেন্ট তৈরি করে তা আপনার লক্ষ্য দর্শকদের কাছে পৌঁছানো হয়। এটি মূলত ব্র্যান্ডের পরিচিতি বৃদ্ধি এবং দর্শকদের সঙ্গে সম্পর্ক গড়ার একটি কার্যকরী উপায়।
                    </p>
                </section>

                {/* Strategies Grid */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-10 mb-6 text-gray-900 border-b pb-2">
                    Content Marketing এর প্রধান ১০টি কৌশল
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
                    <StrategyCard number="১" title="লক্ষ্য নির্ধারণ" description="আপনি কী অর্জন করতে চান তা স্পষ্ট করতে হবে। ব্র্যান্ড সচেতনতা, গ্রাহক বৃদ্ধি, বা বিক্রির পরিমাণ বাড়ানো।" imageUrl="/imgas/contenMarkiden/1.jpg" />
                    <StrategyCard number="২" title="লক্ষ্য দর্শক চিহ্নিত করা" description="আপনার সম্ভাব্য গ্রাহকদের বয়স, লিঙ্গ, অবস্থান, আগ্রহ এবং অন্যান্য বৈশিষ্ট্য সম্পর্কে জানুন।" imageUrl="/imgas/contenMarkiden/2.jpg" />
                    <StrategyCard number="৩" title="কনটেন্ট প্ল্যান তৈরি" description="কোন কনটেন্ট কখন এবং কোথায় প্রকাশ করবেন তা নির্ধারণ করুন।" imageUrl="/imgas/contenMarkiden/3.jpg" />
                    <StrategyCard number="৪" title="কনটেন্টের গুণগত মান" description="উচ্চমানের কনটেন্ট তৈরি করুন, যাতে দর্শকরা বিশ্বাসযোগ্যতা অনুভব করে।" imageUrl="/imgas/contenMarkiden/4.jpg" />
                    <StrategyCard number="৫" title="SEO প্রয়োগ" description="সঠিক কীওয়ার্ড এবং অন-পেজ SEO ব্যবহার করে কনটেন্টের দৃশ্যমানতা বাড়ান।" imageUrl="/imgas/contenMarkiden/5.jpg" />
                    <StrategyCard number="৬" title="ভিজ্যুয়াল কনটেন্ট ব্যবহার" description="ছবি, ভিডিও, ইনফোগ্রাফিক ব্যবহার করে কনটেন্ট আকর্ষণীয় করুন।" imageUrl="/imgas/contenMarkiden/6.jpg" />
                    <StrategyCard number="৭" title="সোশ্যাল মিডিয়া প্ল্যাটফর্ম ব্যবহার" description="ফেসবুক, ইউটিউব ইত্যাদিতে কনটেন্ট শেয়ার করুন এবং দর্শকের সঙ্গে সম্পর্ক গড়ে তুলুন।" imageUrl="/imgas/contenMarkiden/7.jpg" />
                    <StrategyCard number="৮" title="কনটেন্ট বিশ্লেষণ" description="দর্শক সংখ্যা, লাইক, কমেন্ট এবং শেয়ার অনুযায়ী কনটেন্টের কার্যকারিতা মূল্যায়ন করুন।" imageUrl="/imgas/contenMarkiden/4.jpg" />
                    <StrategyCard number="৯" title="ইমেইল মার্কেটিং" description="সাবস্ক্রাইবারদের কাছে ব্যক্তিগত কনটেন্ট পাঠান এবং ব্র্যান্ডের বিশ্বস্ততা বৃদ্ধি করুন।" imageUrl="/imgas/contenMarkiden/1.jpg" />
                    <StrategyCard number="১০" title="কনটেন্ট রিইউজ এবং আপডেট" description="পুরানো কনটেন্টকে আপডেট করে পুনরায় প্রচার করুন।" imageUrl="/imgas/contenMarkiden/3.jpg" />
                </div>

                {/* FAQ Section */}
                <hr className="my-10 border-gray-200" />
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">বহুল জিজ্ঞাসিত প্রশ্ন ও উত্তর</h2>
                <FAQItem question="কনটেন্ট মার্কেটিং কেন গুরুত্বপূর্ণ?" answer="এটি গ্রাহকদের আগ্রহ সৃষ্টি করে এবং ব্র্যান্ডের বিশ্বাসযোগ্যতা তৈরি করে।" />
                <FAQItem question="কনটেন্ট মার্কেটিংয়ের সফল হওয়ার উপায় কী?" answer="সফল হতে হলে লক্ষ্য নির্ধারণ, সঠিক দর্শক চিহ্নিতকরণ, এবং উচ্চমানের কনটেন্ট তৈরি করতে হবে।" />

                {/* Comment Section */}
                <section className="mt-12 bg-white p-6 rounded-xl shadow-md">
                    <h2 className="text-xl sm:text-2xl font-bold mb-6 text-gray-900">Comment</h2>
                    <form className="space-y-4">
                        <input type="text" placeholder="Name *" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <input type="email" placeholder="Email *" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <input type="text" placeholder="Website" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <textarea placeholder="Comment *" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" rows="4"></textarea>
                        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">Post Comment</button>
                    </form>
                </section>
            </main>

            {/* Footer */}
            <footer className="py-6 text-center text-sm text-gray-500 border-t mt-12 bg-gray-100">
                © আপনার ব্লগ • সব অধিকার সংরক্ষিত
            </footer>
        </div>
    );
};

// StrategyCard Component
const StrategyCard = ({ number, title, description, imageUrl }) => (
    <div className="bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition duration-300 overflow-hidden">
        <img src={imageUrl} alt={title} className="w-full h-40 sm:h-44 md:h-48 lg:h-52 object-cover" />
        <div className="p-4 sm:p-5 md:p-6">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2">
                <span className="text-blue-600 mr-2">{number}.</span> {title}
            </h3>
            <p className="text-sm sm:text-base md:text-sm text-gray-600 leading-relaxed">{description}</p>
        </div>
    </div>
);

// FAQItem Component
const FAQItem = ({ question, answer }) => (
    <div className="border-b border-gray-200 pb-3 mb-3">
        <strong className="text-blue-600 block mb-1 text-sm sm:text-base md:text-lg">{question}</strong>
        <p className="text-sm sm:text-base md:text-base text-gray-600">{answer}</p>
    </div>
);

export default ContentMarketingLiftSite;
