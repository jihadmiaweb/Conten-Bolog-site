

// KeywordTypes.jsx
// A responsive React component that displays keyword type cards in Bengali.
// - Uses Tailwind CSS utility classes
// - Max width 700px on larger screens, full width on small
// - Accessible and responsive

export default function KeywordTypes() {
    const items = [
        {
            title: 'শর্ট টেইল কিওয়ার্ড (Short Tail Keyword)',
            desc:
                'শর্ট টেইল কিওয়ার্ডগুলো সাধারণত ১-২টি শব্দ নিয়ে গঠিত। এগুলো খুবই সাধারণ এবং সার্চ ভলিউম অনেক বেশি থাকে। উদাহরণ: “shoes”, “laptops” — তবে প্রতিযোগিতা অনেক বেশি।',
        },
        {
            title: 'লং টেইল কিওয়ার্ড (Long Tail Keyword)',
            desc:
                'লং টেইল কিওয়ার্ডগুলো ৩-৪টি বা তার বেশি শব্দ নিয়ে গঠিত। নির্দিষ্ট বিষয়ের ওপর ফোকাস করে। উদাহরণ: “best running shoes for men” — সার্চ ভলিউম কম কিন্তু কনভার্সন বেশি।',
        },
        {
            title: 'মিডল টেইল কিওয়ার্ড (Middle Tail Keyword)',
            desc:
                'মিডল টেইল কিওয়ার্ড হচ্ছে শর্ট টেইল ও লং টেইল কিওয়ার্ডের মাঝামাঝি। ২-৩টি শব্দ নিয়ে গঠিত। উদাহরণ: “buy laptops online”。',
        },
        {
            title: 'ইনফরমেশনাল কিওয়ার্ড (Informational Keyword)',
            desc:
                'এই কিওয়ার্ডগুলো ব্যবহারকারীরা তথ্য খোঁজার জন্য ব্যবহার করে। উদাহরণ: “how to cook pasta” বা “what is SEO” — ট্রাফিক আনার জন্য গুরুত্বপূর্ণ।',
        },
        {
            title: 'ন্যাভিগেশনাল কিওয়ার্ড (Navigational Keyword)',
            desc:
                'ন্যাভিগেশনাল কিওয়ার্ডগুলো ব্যবহারকারীরা কোনো নির্দিষ্ট ওয়েবসাইট বা ব্র্যান্ড খোঁজার জন্য ব্যবহার করে। উদাহরণ: “Facebook login” বা “YouTube”。',
        },
        {
            title: 'ট্রানজ্যাকশনাল কিওয়ার্ড (Transactional Keyword)',
            desc:
                'এই কিওয়ার্ডগুলো ব্যবহারকারীরা ক্রয় বা সেবা গ্রহণের জন্য ব্যবহার করে। উদাহরণ: “buy iPhone online” বা “order pizza near me”。',
        },
        {
            title: 'লোকাল কিওয়ার্ড (Local Keyword)',
            desc:
                'লোকাল কিওয়ার্ড মূলত ব্যবহারকারীর অবস্থানের ওপর ভিত্তি করে সার্চ করা হয়। উদাহরণ: “restaurants near me” বা “best coffee shops in Dhaka”。',
        },
        {
            title: 'ব্র্যান্ডেড কিওয়ার্ড (Branded Keyword)',
            desc:
                'এই ধরনের কিওয়ার্ডগুলো নির্দিষ্ট কোনো ব্র্যান্ডের নাম ব্যবহার করে সার্চ করা হয়। উদাহরণ: “Nike shoes” বা “Apple MacBook”。',
        },
    ];

    return (
        <section className="min-h-[40vh] flex items-start justify-center py-8 px-4">
            <div className="w-full max-w-[700px]">
                <header className="mb-6">
                    <h1 className="text-2xl sm:text-3xl font-semibold mb-2">কিওয়ার্ড টাইপসমূহ</h1>
                    <p className="text-sm text-gray-600">শর্ট টেইল, লং টেইল, মিডল টেইল এবং অন্যান্য—সংক্ষিপ্ত ব্যাখ্যা সহ।</p>
                </header>

                <div className="grid gap-4 sm:grid-cols-2">
                    {items.map((it, idx) => (
                        <article
                            key={idx}
                            className="group bg-white dark:bg-slate-800 shadow-sm hover:shadow-md transition-shadow rounded-2xl p-4 ring-1 ring-transparent hover:ring-gray-100 dark:hover:ring-slate-700"
                            aria-labelledby={`kw-${idx}`}
                        >
                            <h2 id={`kw-${idx}`} className="text-lg font-medium mb-2">
                                {it.title}
                            </h2>
                            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{it.desc}</p>
                        </article>
                    ))}
                </div>

                <footer className="mt-6 text-xs text-gray-500">
                    <p>Responsive container: <span className="font-medium">max-width: 700px</span>. On small screens the layout becomes single-column.</p>
                </footer>
            </div>
        </section>
    );
}
