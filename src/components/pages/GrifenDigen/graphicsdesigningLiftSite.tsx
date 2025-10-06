import { Grifidigen } from "@/components/data/data";
import GraphicsDesigningItem from "./graphicsdesigningitem";

function GraphicsDesigningLift() {
    return (
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 ">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 sm:gap-3  md:gap-6">
                {Grifidigen.map((item) => (
                    <GraphicsDesigningItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
}

export default GraphicsDesigningLift;