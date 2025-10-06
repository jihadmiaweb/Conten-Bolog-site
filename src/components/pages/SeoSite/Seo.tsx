import SeoLiftSite from "@/components/pages/SeoSite/SeoLiftSite";
import SeoRightSite from "@/components/pages/SeoSite/SeoRIghtSIte";

function Seo() {
    return (
        <div className="w-full pt-20  mx-auto  sm:px-6 md:px-12 grid grid-cols-1 md:grid-cols-[3fr_1fr]  gap-8 lg:gap-20">
            <SeoLiftSite />
            <SeoRightSite />
        </div>
    );
}

export default Seo;