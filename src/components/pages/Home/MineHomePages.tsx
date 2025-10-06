

import LiftSiteHome from "@/components/pages/Home/liftSiteHome";
import Sidebar from "@/components/pages/Home/rightSiteHome";

function MineHomePages() {
    return (
        <div className="w-full  mx-auto  sm:px-6 md:px-12 grid grid-cols-1 md:grid-cols-[3fr_1fr]  gap-8 lg:gap-20">
            {/* Main Content */}
            <div>
                <LiftSiteHome />
            </div>
            {/* Sidebar */}
            <Sidebar />
        </div>
    );
}

export default MineHomePages;
