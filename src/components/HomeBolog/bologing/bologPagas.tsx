import BologingLiftSite from "@/components/HomeBolog/bologing/bologingLiftSite";
import BologingRight from "@/components/HomeBolog/bologing/bologingRightSite";


function ContentBlog() {
  return (
    <div className="w-full pt-20  mx-auto  sm:px-6 md:px-12 grid grid-cols-1 md:grid-cols-[3fr_1fr]  gap-8 lg:gap-20">
      <BologingLiftSite />

      <BologingRight />

    </div>
  )

}

export default ContentBlog;
