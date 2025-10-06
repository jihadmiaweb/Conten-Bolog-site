

// export default ContactLiftSite;



import React, { useState } from "react";

const ContactLiftSite = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        ricetCode: "",
        description: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("✅ ফর্ম জমা হয়েছে!");
    };

    return (
        <div className="max-w-xl mx-auto p-4 sm:p-6 md:p-8 bg-white rounded-2xl shadow-md">
            <h2 className="text-center text-2xl sm:text-3xl font-bold mb-6">
                যোগাযোগ (Contact)
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">

                {/* Name Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="firstName" className="block font-medium mb-1">
                            নাম * (First)
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-400"
                        />
                    </div>
                    <div>
                        <label htmlFor="lastName" className="block font-medium mb-1">
                            (Last)
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-400"
                        />
                    </div>
                </div>

                {/* Email */}
                <div>
                    <label htmlFor="email" className="block font-medium mb-1">
                        ইমেইল *
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-400"
                    />
                </div>

                {/* RICET Code */}
                <div>
                    <label htmlFor="ricetCode" className="block font-medium mb-1">
                        অ্যাক্সেস কোড / RICET Code (ঐচ্ছিক)
                    </label>
                    <input
                        type="text"
                        id="ricetCode"
                        name="ricetCode"
                        value={formData.ricetCode}
                        onChange={handleChange}
                        placeholder="প্রয়োজন হলে কোড দিন"
                        className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-400"
                    />
                </div>

                {/* Description */}
                <div>
                    <label htmlFor="description" className="block font-medium mb-1">
                        বিবরণ (Description)
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        rows="4"
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-400"
                    ></textarea>
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg transition"
                >
                    প্রেরণ করুন (Send)
                </button>
            </form>
        </div>
    );
};

export default ContactLiftSite;
