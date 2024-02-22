'use client';

import { cn } from "@/lib/utils";
import { useState } from "react";
import { WorkInCompany } from "./work-in-company";
import { Projects } from "./projects";

const Tabs = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <>
            <div className="flex text-neutral-600 text-heading-5 md:text-heading-4 flex-row mb-section-s space-x-element-m  md:space-x-section-s md:mb-section-m">
                <h2 
                    onClick={() => setActiveTab(0)}
                    className={cn("cursor-pointer px-element-s md:px-element-m py-element-s border rounded-xl border-neutral-500", { "border-brand-base": activeTab === 0, "text-brand-base": activeTab === 0})}
                > 
                    Work in company
                </h2>
                {/* <h2 
                    onClick={() => setActiveTab(1)}
                    className={cn("cursor-pointer px-element-s md:px-element-m py-element-s border rounded-xl border-neutral-500", { "border-brand-base": activeTab === 1, "text-brand-base": activeTab === 1})}
                >
                    Projects 
                </h2> */}
            </div>
            { activeTab === 0 && <WorkInCompany /> }
            { activeTab === 1 && <Projects /> }
        </>
    )
};

export { Tabs }; 