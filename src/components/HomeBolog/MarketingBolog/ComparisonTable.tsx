import React from 'react';

const comparisonData = [
    { feature: "সংজ্ঞা (Definition)", market: "পণ্য বা পরিষেবার জন্য ক্রেতা এবং বিক্রেতাদের মধ্যে স্থান", marketing: "পণ্য বা পরিষেবার প্রচার ও বিক্রয় প্রক্রিয়া" },
    { feature: "উদ্দেশ্য (Purpose)", market: "পণ্যের বিনিময় স্থাপন করা", marketing: "পণ্য বিক্রির মাধ্যমে লাভ অর্জন করা" },
    { feature: "পরিধি (Scope)", market: "সাধারণত একটি নির্দিষ্ট ভৌগোলিক বা ভার্চুয়াল স্থান", marketing: "ব্যবসার সমস্ত কার্যক্রমের সমষ্টি" },
    { feature: "অংশগ্রহণকারী (Participants)", market: "ক্রেতা এবং বিক্রেতা", marketing: "বিপণনকারী, বিজ্ঞাপনদাতা, বিতরণকারী এবং গ্রাহক" },
    { feature: "অর্থনৈতিক দিক (Economic Aspect)", market: "সরাসরি অর্থনৈতিক কার্যক্রম", marketing: "গবেষণা, পরিকল্পনা এবং কার্যক্রম পরিচালনা" },
    { feature: "সময়কাল (Duration)", market: "স্থায়ী, অর্থাৎ এটি একটি দীর্ঘমেয়াদী অবস্থা", marketing: "প্রায়শই অস্থায়ী, নির্দিষ্ট প্রচার অভিযানের সময়কাল" },
    { feature: "ফোকাস (Focus)", market: "পণ্য ও পরিষেবা", marketing: "গ্রাহক এবং বাজারের চাহিদা" },
    { feature: "মাধ্যম (Medium)", market: "বাজারে সরাসরি বা ডিজিটাল মাধ্যম", marketing: "বিভিন্ন যোগাযোগ মাধ্যম যেমন টেলিভিশন, সোশ্যাল মিডিয়া, ইত্যাদি" },
];

const columnHeaders = {
    feature: "পার্থক্য",
    market: "মার্কেট",
    marketing: "মার্কেটিং",
};

const ComparisonTable = () => {
    return (
        <div className="max-w-5xl mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-6 text-center">
                {columnHeaders.market} বনাম {columnHeaders.marketing} - পার্থক্য
            </h2>

            {/* --- Desktop/Tablet Table --- */}
            <div className="hidden md:block overflow-x-auto">
                <table className="w-full border border-gray-300 rounded-lg">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="text-left px-4 py-2 border-b">{columnHeaders.feature}</th>
                            <th className="text-left px-4 py-2 border-b">{columnHeaders.market}</th>
                            <th className="text-left px-4 py-2 border-b">{columnHeaders.marketing}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {comparisonData.map((item, index) => (
                            <tr key={index} className="even:bg-gray-50">
                                <td className="px-4 py-2 border-b font-medium">{item.feature}</td>
                                <td className="px-4 py-2 border-b">{item.market}</td>
                                <td className="px-4 py-2 border-b">{item.marketing}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* --- Mobile Card View --- */}
            <div className="md:hidden space-y-4">
                {comparisonData.map((item, index) => (
                    <div key={index} className="border border-gray-300 rounded-lg p-4 shadow-sm bg-white">
                        <h3 className="font-semibold text-lg mb-2">{item.feature}</h3>
                        <div className="mb-1">
                            <span className="font-medium">{columnHeaders.market}: </span>
                            <span>{item.market}</span>
                        </div>
                        <div>
                            <span className="font-medium">{columnHeaders.marketing}: </span>
                            <span>{item.marketing}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ComparisonTable;
