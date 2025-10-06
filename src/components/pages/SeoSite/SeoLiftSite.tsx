import { bolog } from "@/components/data/data";
import Seoitem from "@/components/pages/SeoSite/SeoItem";


function SeoLiftSite() {
    return (
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 ">
            <h1 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent">এসইও</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 sm:gap-3  md:gap-6">
                {bolog.map((item) => (
                    <Seoitem key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
}

export default SeoLiftSite;