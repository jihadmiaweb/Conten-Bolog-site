import AboutMeLiftSite from "@/components/pages/AboutME/AboutmeLiftSite";
import AboutMeRightSite from "@/components/pages/AboutME/AboutMeRight";

function Aboutme() {
    return (
        <div className="w-full pt-20  mx-auto  sm:px-6 md:px-12 grid grid-cols-1 md:grid-cols-[3fr_1fr]  gap-8 lg:gap-20">
            <AboutMeLiftSite />
            <AboutMeRightSite />
        </div>
    );
}

export default Aboutme;