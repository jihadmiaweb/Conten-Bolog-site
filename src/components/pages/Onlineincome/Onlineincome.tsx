import OnlineincomeLiftSite from "@/components/pages/Onlineincome/OnlineincomeLiftSite";
import OnlineincomeRight from "@/components/pages/Onlineincome/OnlineincomeRight";

function Onlineincome() {
    return (
        <div className="w-full pt-20  mx-auto  sm:px-6 md:px-12 grid grid-cols-1 md:grid-cols-[3fr_1fr]  gap-8 lg:gap-20">
            <OnlineincomeLiftSite />
            <OnlineincomeRight />

        </div>
    );
}

export default Onlineincome;