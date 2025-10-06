import { DigtalMarketing } from "@/components/data/data";
import DigtalMarketingItem from "@/components/pages/DigtalMarketing/DigtalMarketingItem";

function DigtalMarketingLift() {
    return (
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 ">
            <h1 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent">ডিজিটাল মার্কেটিং</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 sm:gap-3  md:gap-6">
                {DigtalMarketing.map((item) => (
                    <DigtalMarketingItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
}

export default DigtalMarketingLift;