import ContentMarketingLiftSite from "@/components/HomeBolog/Content Marketing/Content MarketingLiftSite";
import ContentMarketingRightSite from "@/components/HomeBolog/Content Marketing/Content MarketingRightSite";

function ContentMarketing() {
    return (
        <div className="w-full pt-20  mx-auto  sm:px-6 md:px-12 grid grid-cols-1 md:grid-cols-[3fr_1fr]  gap-8 lg:gap-20">
            <ContentMarketingLiftSite />
            <ContentMarketingRightSite />
        </div>
    );
}

export default ContentMarketing;