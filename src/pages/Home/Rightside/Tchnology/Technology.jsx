import { MdFormatListBulleted } from "react-icons/md";

const Technology = () => {
    return (
        <div>
            <div className="p-4 space-y-3">
                <h3 className="text-3xl">Technology and Infrastructure</h3>
                <div className="p-4 space-y-3 flex mt-4">
                    <button className="btn btn-outline w-full">
                        <MdFormatListBulleted />
                        Global Focus

                    </button>
                </div>
                <div className="p-4 space-y-3 mt-4 flex">
                    <button className="btn btn-outline w-full">
                        <MdFormatListBulleted />
                        Automated Systems

                    </button>
                </div>
                <div className="p-4 space-y-3 flex mt-4">
                    <button className="btn btn-outline w-full ">
                        <MdFormatListBulleted />
                        Customer Reach

                    </button>
                </div>
                <div className="p-4 space-y-3 flex mt-4">
                    <button className="btn btn-outline w-full ">
                        <MdFormatListBulleted />
                        Industry Expertise

                    </button>
                </div>
                <div className="p-4 space-y-3 flex mt-4">
                    <button className="btn btn-outline w-full ">
                        <MdFormatListBulleted />
                        Security System

                    </button>
                </div>
            </div>
        </div>
    );
};

export default Technology;