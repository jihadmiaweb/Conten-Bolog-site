import React from 'react';

const DomainVsHostingTable = () => {
  const rows = [
    {
      পার্থক্য: "সংজ্ঞা (Definition)",
      ডোমেইন: "একটি ইউনিক ঠিকানা যা ওয়েবসাইটের অবস্থান চিহ্নিত করে।",
      হোস্টিং: "সার্ভার যা ওয়েবসাইটের ফাইল এবং তথ্য সংরক্ষণ করে।",
    },
    {
      পার্থক্য: "উদ্দেশ্য (Purpose)",
      ডোমেইন: "ব্যবহারকারীদের ওয়েবসাইটে পৌঁছানোর জন্য ঠিকানা প্রদান।",
      হোস্টিং: "তথ্য এবং ফাইল অনলাইনে প্রদর্শনের জন্য সঞ্চয় করা।",
    },
    {
      পার্থক্য: "নিবন্ধন (Subscription)",
      ডোমেইন: "প্রতি বছর নিবন্ধন করতে হয়।",
      হোস্টিং: "সাধারণত মাসিক বা বার্ষিক ভিত্তিতে পরিষেবা প্রদান।",
    },
    {
      পার্থক্য: "সৃষ্টিকারী (Nature)",
      ডোমেইন: "ব্র্যান্ড বা ব্যবসার পরিচয় প্রদানের জন্য তৈরি।",
      হোস্টিং: "সার্ভারের মাধ্যমে ওয়েবসাইটের কাজ করার সক্ষমতা।",
    },
    {
      পার্থক্য: "প্রকারভেদ (Types)",
      ডোমেইন: "বিভিন্ন সম্প্রসারণ, যেমন .com, .net ইত্যাদি।",
      হোস্টিং: "শেয়ারড, VPS, ডেডিকেটেড হোস্টিং ইত্যাদি।",
    },
    {
      পার্থক্য: "পরিবর্তনশীলতা (Flexibility)",
      ডোমেইন: "ডোমেইন নাম পরিবর্তন করা সহজ।",
      হোস্টিং: "হোস্টিং পরিবর্তন করা হতে পারে তবে বেশি কঠিন।",
    },
    {
      পার্থক্য: "সঞ্চয়স্থান (Storage)",
      ডোমেইন: "ডোমেইন নিজে কোন তথ্য সঞ্চয় করে না।",
      হোস্টিং: "তথ্য সঞ্চয় এবং ব্যবস্থাপনার জন্য সার্ভার প্রয়োজন।",
    },
    {
      পার্থক্য: "ব্রাউজার দ্বারা পরিচালনা (Browser Role)",
      ডোমেইন: "ডোমেইন নাম টেক্সট হিসাবে দেখা যায়।",
      হোস্টিং: "হোস্টিং সার্ভারের মাধ্যমে কার্যকরী।",
    },
    {
      পার্থক্য: "মূল্য (Cost)",
      ডোমেইন: "সাধারণত কম দামে উপলব্ধ।",
      হোস্টিং: "বিভিন্ন পরিকল্পনা অনুযায়ী মূল্য পরিবর্তিত হয়।",
    },
    {
      পার্থক্য: "প্রযুক্তিগত জ্ঞানের প্রয়োজন (Tech Skill)",
      ডোমেইন: "ডোমেইন নিবন্ধন করা তুলনামূলক সহজ।",
      হোস্টিং: "হোস্টিং সেটআপ এবং ব্যবস্থাপনা প্রযুক্তিগত জ্ঞানের প্রয়োজন।",
    },
  ];

  return (
    // The container is responsive, centered, and handles horizontal scrolling for smaller screens
    <div className="max-w-[100%] lg:max-w-4xl xl:max-w-5xl mx-auto p-2 sm:p-4  shadow-xl rounded-lg">
      <table className="min-w-full border border-gray-300 text-center text-gray-800 border-collapse table-auto">
        <thead className="bg-blue-600 text-white shadow-lg">
          <tr>
            <th className="border border-gray-300 px-4 py-3 text-sm font-bold uppercase tracking-wider sticky left-0 bg-blue-600 z-10">পার্থক্য</th>
            <th className="border border-gray-300 px-4 py-3 text-sm font-bold uppercase tracking-wider">ডোমেইন</th>
            <th className="border border-gray-300 px-4 py-3 text-sm font-bold uppercase tracking-wider">হোস্টিং</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-white hover:bg-blue-50 transition duration-150" : "bg-gray-50 hover:bg-blue-50 transition duration-150"}
            >
              <td
                className="border border-gray-200 px-4 py-3 text-sm font-semibold text-left sticky left-0 z-10"
                // Tailwind classes for making the first column stick and look good on scrolling
                style={{ backgroundColor: index % 2 === 0 ? 'white' : '#f9fafb' }}
              >
                {row.পার্থক্য}
              </td>
              <td className="border border-gray-200 px-4 py-3 text-xs md:text-sm text-left">{row.ডোমেইন}</td>
              <td className="border border-gray-200 px-4 py-3 text-xs md:text-sm text-left">{row.হোস্টিং}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DomainVsHostingTable;