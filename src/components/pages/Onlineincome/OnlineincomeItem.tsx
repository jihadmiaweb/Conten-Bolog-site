import type { IProduct } from "@/components/data/data";

function OnlineincomeItem({ tem }: { tem: IProduct }) {
    return (
        <div className="pt-5 ">
            <div className=" w-full overflow-hidden shadow-md transition-shadow duration-300 hover:shadow-xl rounded-lg">
                <img className="cursor-pointer w-full h-auto object-cover transform transition-transform duration-500 hover:scale-[1.03] aspect-video" src={tem.image} alt="" />
            </div>
            <div className="pt-4">
                <span className="text-[10px] cursor-pointer text-[#FF4500] font-bold">{tem.category}</span>
                <h1 className="cursor-pointer text-2xl w-[300px] md:text-2xl font-bold leading-[40px] pt-2 pb-2 text-black hover:text-[#FF4500]">{tem.name}</h1>
                <p className=" text-[14px] w-[300px] pt-1 leading-[26px]">{tem.description}</p>

            </div>
        </div>
    );
}

export default OnlineincomeItem;