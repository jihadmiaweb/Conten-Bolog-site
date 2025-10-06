



import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

function Hider() {
    const [open, setOpen] = useState(false);

    const navItems = [
        { path: "/", label: "হোম" },
        { path: "/ওয়েবসাইট ডিজাইন", label: "ওয়েবসাইট ডিজাইন" },
        { path: "/এসইও", label: "এসইও" },
        { path: "/ব্লগিং", label: "ব্লগিং" },
        { path: "/ই-ব্যবসা", label: "ই-ব্যবসা" },
        { path: "/অনলাইন ইনকাম", label: "অনলাইন ইনকাম" },
        { path: "/ডিজিটাল মার্কেটিং", label: "ডিজিটাল মার্কেটিং" },
    ];

    return (
        <div>
            {/* Navbar */}
            <nav className="bg-[#FF4500] flex justify-between items-center fixed top-0 left-0 w-full shadow-md px-6 md:px-16 z-50">
                {/* Logo */}
                <div className="flex pt-1 pb-1  gap-3 items-center">
                    <img
                        src="./imgas/1.png"
                        className="w-12 h-12  bg-white p-1 rounded"
                        alt="logo"
                    />
                    <span className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
                        আইমান রহমান
                    </span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-6 font-bold">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                                `transition-colors ${isActive ? "text-black bg-white px-3 py-1 rounded" : "text-white hover:text-indigo-200"
                                }`
                            }
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </div>

                {/* Mobile Button */}
                <div className="md:hidden">
                    <button
                        className="text-white focus:outline-none"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden  bg-white  w-full px-6 pt-20 pb-6 fixed top-0 left-0 shadow-md z-40">
                    <div className="flex flex-col gap-4 font-bold">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                onClick={() => setOpen(false)}
                                className={({ isActive }) =>
                                    `transition-colors ${isActive ? "text-[#FF4500]" : "text-gray-800 hover:text-[#FF4500]"
                                    }`
                                }
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </div>
                </div>
            )}

            {/* Page Content */}
            <div className="pt-20">
                <Outlet />
            </div>
        </div>
    );
}

export default Hider;
