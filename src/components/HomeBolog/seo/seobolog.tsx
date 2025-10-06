import SeoBologeLiftSite from "@/components/HomeBolog/seo/seobologLiftSite";
import SeoBologRightSite from "@/components/HomeBolog/seo/SeoRightSite";


function SeoBolog() {
    return (
        <div className="w-full pt-20  mx-auto  sm:px-6 md:px-12 grid grid-cols-1 md:grid-cols-[3fr_1fr]  gap-8 lg:gap-20">
            < SeoBologeLiftSite />
            <SeoBologRightSite />

        </div>

    );
}

export default SeoBolog;