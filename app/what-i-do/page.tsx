import { Tabs } from "@/components/what-i-do/tabs";

const WhatIDo = () => {
    return (
        <>
            <div className="col-span-12 mb-element-m md:mb-section-s">
                <div className="flex items-center">
                <span className="text-text-base font-bold md:text-heading-5 text-neutral-400 block mr-element-s md:mr-element-m">02</span>
                <h1 className="text-heading-3 md:text-heading-2 text-neutral-600">
                    <span className="text-brand-base">What </span> I do
                </h1>
                </div>
            </div>
            <div className="col-span-12">
                    <Tabs />
                </div>
        </>
    )
}

export default WhatIDo;