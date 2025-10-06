import { Link } from "react-router-dom";


function BologingLiftSite() {
    return (
        <div className="bg-gray-50 min-h-screen text-gray-800 font-sans">
            {/* হেডার ইমেজ */}
            <div className="w-full">
                <img
                    className="
      w-full 
      h-auto 
      rounded-lg 
      object-cover 
      cursor-pointer
      sm:h-64        /* small devices (mobile) */
      md:h-80        /* medium devices (tablet) */
     
      transition-transform 
      px-3
      duration-300 
      md:hover:scale-105
    "
                    src="/imgas/Home-imgas/9.jpg"
                    alt="Product Image"
                />
            </div>
            <span className="text-xs pt-4 sm:text-sm font-semibold text-blue-700 uppercase tracking-widest px-2 sm:px-3  ">
                <Link to="/">
                    হোম
                </Link>
                <Link to="/ব্লগিং">

                    | ব্লগিং
                </Link>
            </span>

            {/* মূল কনটেন্ট */}
            <main className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
                <article className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-800 mb-4 border-b pb-2">
                        ডিজিটাল কনটেন্ট কত প্রকার ও কি কি?
                    </h1>

                    <p className="text-sm text-gray-500 mb-6">
                        <span className="font-semibold">প্রকাশিত:</span> ৫ অক্টোবর, ২০২৪ |{" "}
                        <span className="font-semibold">বিষয়:</span> ব্লগিং
                    </p>

                    <p className="mb-6 leading-relaxed text-gray-700">
                        ডিজিটাল কনটেন্ট হলো সেইসব তথ্য বা উপাদান যা ডিজিটাল ফরম্যাটে থাকে এবং ইন্টারনেট বা ডিজিটাল ডিভাইসের মাধ্যমে পৌঁছানো হয়।
                        সহজ ভাষায় বলতে গেলে, ডিজিটাল কনটেন্ট হলো সেই সমস্ত ফাইল বা ডেটা যা ডিজিটাল প্রযুক্তির মাধ্যমে তৈরি এবং প্রদর্শিত হয়।{" "}
                        <span className="font-semibold text-blue-600">
                            আমরা এই ব্লগ পোস্টে ডিজিটাল কনটেন্টের প্রধান প্রকারভেদ সম্পর্কে বিস্তারিত জানবো।
                        </span>
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">
                        ডিজিটাল কনটেন্টের প্রকারভেদ
                    </h2>

                    <ol className="list-decimal pl-6 space-y-6 text-gray-700">
                        <li className="p-4 bg-blue-50 border-l-4 border-blue-600 rounded-md shadow-sm">
                            <h3 className="text-xl font-semibold mb-2 text-blue-800">১। টেক্সট বা লিখিত কনটেন্ট</h3>
                            <p className="text-sm">
                                এটি একটি মৌলিক এবং প্রাথমিক ধরণের কনটেন্ট যা শব্দ এবং বাক্যের মাধ্যমে তথ্য প্রদান করে।
                                <strong> ব্লগ পোস্ট, প্রবন্ধ, নিউজ আর্টিকেল, ও সোশ্যাল মিডিয়া পোস্ট</strong> এই শ্রেণীর অন্তর্ভুক্ত।
                            </p>
                        </li>

                        <li className="p-4 bg-green-50 border-l-4 border-green-600 rounded-md shadow-sm">
                            <h3 className="text-xl font-semibold mb-2 text-green-800">২। ইমেজ বা ছবি কনটেন্ট</h3>
                            <p className="text-sm">
                                ছবি কনটেন্ট হলো এমন কনটেন্ট যা ছবির মাধ্যমে তথ্য বা অনুভূতি প্রদান করে।{" "}
                                <strong>ইনফোগ্রাফিক্স, মেম, এবং প্রোডাক্ট ফটোগ্রাফি</strong> এর উদাহরণ।
                            </p>
                        </li>

                        <li className="p-4 bg-purple-50 border-l-4 border-purple-600 rounded-md shadow-sm">
                            <h3 className="text-xl font-semibold mb-2 text-purple-800">৩। অডিও কনটেন্ট</h3>
                            <p className="text-sm">
                                শোনা যায় এমন কনটেন্ট, যেমন <strong>পডকাস্ট, রেডিও শো এবং গান</strong>।
                            </p>
                        </li>

                        <li className="p-4 bg-red-50 border-l-4 border-red-600 rounded-md shadow-sm">
                            <h3 className="text-xl font-semibold mb-2 text-red-800">৪। ভিডিও ও এনিমেশন কনটেন্ট</h3>
                            <p className="text-sm">
                                চলমান ছবি ও অডিও একত্রিত করে একটি সম্পূর্ণ অভিজ্ঞতা প্রদান করে।
                                <strong> টিউটোরিয়াল, প্রোডাক্ট ডেমো, এবং এনিমেশন ভিডিও</strong> এই শ্রেণীতে পড়ে।
                            </p>
                            <div className="mt-4 relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-md">
                                <iframe
                                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                    title="ভিডিও উদাহরণ"
                                    allowFullScreen
                                    className="absolute top-0 left-0 w-full h-full border-0"
                                ></iframe>
                            </div>
                        </li>
                    </ol>

                    <hr className="my-8 border-gray-200" />

                    <h2 className="text-2xl font-bold mb-4 text-gray-800">
                        বহুল জিজ্ঞাসিত প্রশ্ন ও উত্তর
                    </h2>

                    <div className="space-y-4 text-gray-700">
                        <div className="border-b pb-2">
                            <strong className="text-blue-600">ইমেইল কি ডিজিটাল কনটেন্ট?</strong>
                            <p className="text-sm mt-1">
                                হ্যাঁ – ইমেইল হলো একটি ডিজিটাল কনটেন্ট, যা লেখার মাধ্যমে যোগাযোগের একটি ডিজিটাল পদ্ধতি।
                            </p>
                        </div>
                        <div>
                            <strong className="text-blue-600">ডিজিটাল কনটেন্টের কোন কোন প্রকার রয়েছে?</strong>
                            <p className="text-sm mt-1">
                                প্রধানত টেক্সট, ছবি, অডিও, ভিডিও এবং এনিমেশন কনটেন্ট।
                            </p>
                        </div>
                    </div>
                </article>

                <section className="mt-8 bg-white p-6 sm:p-8 rounded-xl shadow-lg">
                    <h3 className="text-2xl font-bold mb-4">মন্তব্য দিন</h3>
                    <form className="space-y-4">
                        <textarea
                            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                            rows={4}
                            placeholder="Comment *"
                            aria-label="Comment"
                        ></textarea>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <input className="border border-gray-300 rounded-lg p-3" type="text" placeholder="Name *" aria-label="Name" />
                            <input className="border border-gray-300 rounded-lg p-3" type="email" placeholder="Email *" aria-label="Email" />
                            <input className="border border-gray-300 rounded-lg p-3" type="url" placeholder="Website" aria-label="Website" />
                        </div>
                        <label className="inline-flex items-center text-sm text-gray-600">
                            <input type="checkbox" className="mr-2 rounded text-blue-600 focus:ring-blue-500" />
                            Save my name, email, and website for next time.
                        </label>

                    </form>
                    <button
                        type="submit"
                        className="w-full sm:w-auto bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-200 shadow-md"
                    >
                        Post Comment
                    </button>
                </section>
            </main>

            <footer className="py-6 text-center text-sm text-gray-500 border-t mt-10">
                © আপনার ব্লগ • সব অধিকার সংরক্ষিত
            </footer>
        </div>
    );
}

export default BologingLiftSite;
