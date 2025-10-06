import BoloingLift from "@/components/pages/bologing/BologingLiftSite";
import BologingRileft from "@/components/pages/bologing/BologingRIftSite";

function Bologing() {
    return (
        <div className="w-full pt-20  mx-auto  sm:px-6 md:px-12 grid grid-cols-1 md:grid-cols-[3fr_1fr]  gap-8 lg:gap-20">
            <BoloingLift />
            <BologingRileft />

        </div>
    );
}

export default Bologing;