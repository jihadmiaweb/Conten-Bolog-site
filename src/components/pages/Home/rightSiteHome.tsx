import React from "react";
import { Link } from "react-router-dom";

// Categories array with unique `to` links
const categories = [
    { name: "অনলাইন ইনকাম", count: 10, to: "/অনলাইন ইনকাম" },
    { name: "ই-ব্যবসা", count: 16, to: "/ই-ব্যবসা" },
    { name: "এসইও", count: 22, to: "/এসইও" },
    { name: "ওয়েবসাইট ডিজাইন", count: 7, to: "/ওয়েবসাইট ডিজাইন" },
    { name: "গ্রাফিক্স ডিজাইন", count: 2, to: "/গ্রাফিক্স ডিজাইন" },
    { name: "ডিজিটাল মার্কেটিং", count: 19, to: "/ডিজিটাল মার্কেটিং" },
    { name: "ব্লগিং", count: 21, to: "/ব্লগিং" },
];

// Recent posts array with a unique `id` for each post
const recentPosts = [
    { id: 1, title: "ডিজিটাল কনটেন্ট কত প্রকার ও কি কি?", to: "/ContentBlog" },
    { id: 2, title: "Content Marketing এর Strategy কয়টি ও কি কি?", to: "/ContentMarketing" },
    { id: 3, title: "এসইও কি? SEO কেন করা হয়?", to: "/SeoBolog" },
    { id: 4, title: "ফ্রিল্যান্সিং কোন কাজের চাহিদা বেশি?", to: "/ফ্রিল্যান্সিং" },
    { id: 5, title: "মোবাইল দিয়ে ফ্রিল্যান্সিং কিভাবে শিখবো?", to: "/মোবাইলদিয়েফ্রিল্যান্সিংBolog" },
];

type FormEvent = React.FormEvent<HTMLFormElement>;

function Sidebar() {
    const [query, setQuery] = React.useState("");

    const handleSearch = (e: FormEvent) => {
        e.preventDefault();
        if (!query.trim()) {
            console.error("Please enter a search term");
            return;
        }
        window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, "_blank");
    };

    return (
        <aside className="w-full md:w-80 lg:w-96 p-4 rounded-lg dark:bg-gray-800 flex-shrink-0">

            {/* Search */}
            <div className="mb-6">
                <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-2 w-full">
                    <input
                        type="search"
                        id="query"
                        name="q"
                        placeholder="Search..."
                        aria-label="Search this site"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="flex-1 p-2 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400 dark:text-white"
                    />
                    <button
                        type="submit"
                        className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-500 transition-colors"
                    >
                        🔍
                    </button>
                </form>
            </div>

            {/* Categories */}
            <div className="mb-6">
                <h2 className="text-lg font-semibold mb-3">পোস্ট বিভাগসমূহ</h2>
                <ul className="flex flex-col gap-2">
                    {categories.map((cat) => (
                        <li
                            key={cat.to} // Unique key
                            className="flex justify-between p-1 rounded-md cursor-pointer transition-colors"
                        >
                            <Link
                                to={cat.to}
                                className="flex justify-between w-full p-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                            >
                                <span>{cat.name}</span>
                                <span className="text-gray-500 dark:text-gray-400">({cat.count})</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Recent Posts */}
            <div>
                <h2 className="text-lg font-semibold mb-3">সাম্প্রতিক পোস্টসমূহ</h2>
                <ul className="flex flex-col gap-2">
                    {recentPosts.map((post) => (
                        <li key={post.id} className="p-2"> {/* Unique key by post.id */}
                            <Link
                                to={post.to}
                                className="hover:text-orange-600 hover:underline block transition-colors truncate"
                            >
                                {post.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

        </aside>
    );
}

export default Sidebar;


