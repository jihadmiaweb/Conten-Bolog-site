import GraphicsDesigningRight from './graphicsdesigningRightSite';
import GraphicsDesigningLift from './graphicsdesigningLiftSite';

function GraphicsDesigning() {
    return (
        <div className="w-full mx-auto sm:px-6 md:px-12 grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-8 lg:gap-20">
            <GraphicsDesigningLift />
            <GraphicsDesigningRight />

        </div>
    );
}

export default GraphicsDesigning;