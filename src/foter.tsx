import { Link, Links } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-6 mt-20">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center md:items-start justify-between gap-4 md:gap-0">

                {/* Copyright */}
                <p className="text-sm text-gray-400 text-center md:text-left">
                    Copyright © 2025 <span className="text-white font-medium">Jihad Mia</span> | All Right Reserved
                </p>

                {/* Footer Links */}
                <ul className="flex flex-col md:flex-row items-center md:items-start space-y-2 md:space-y-0 md:space-x-6 text-sm">
                    <li>
                        <Link to="/আমার সম্পর্কে" className="hover:text-white transition-colors">
                            আমার সম্পর্কে
                        </Link>
                    </li>
                    <li>
                        <Link to="/গোপনীয়তা নীতি" className="hover:text-white transition-colors">
                            গোপনীয়তা নীতি
                        </Link>
                    </li>
                    <li>
                        <Link to="/যোগাযোগ" className="hover:text-white transition-colors">
                            যোগাযোগ
                        </Link>
                    </li>
                </ul>

            </div>
        </footer>
    );
}
export default Footer