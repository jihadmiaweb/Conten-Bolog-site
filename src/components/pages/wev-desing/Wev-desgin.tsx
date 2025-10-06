import WevdesingLiftSite from "@/components/pages/wev-desing/Wev-desingLiftSite";
import WevdesingRightSite from "@/components/pages/wev-desing/Wev-desingRightSite";

function Wevdesite() {
    return (
        <div className="w-full pt-20  mx-auto  sm:px-6 md:px-12 grid grid-cols-1 md:grid-cols-[3fr_1fr]  gap-8 lg:gap-20">
            <WevdesingLiftSite />
            <WevdesingRightSite />



        </div>


    );
}

export default Wevdesite;