import { cutStringAt } from "@/lib/utils";
import Link from "next/link";

type PostParams = {
    title: string;
    url: string;
    date: string;
    tag: string;

}
const Post = ({title, url, date, tag}: PostParams) => {
    return (
        <Link href="/job" className="col-span-12 mb-section-m group">
            <h2 className="text-neutral-600 text-heading-5 font-bold mb-element-s md:text-heading-4 group-hover:text-brand-base">{title}</h2>
            <img src={url} className="mb-element-s w-full rounded-lg" />
            <div className="flex text-text-small mb-section-s text-neutral-600">
                <p>{date} - <span className="text-brand-base">{tag}</span></p>
                
            </div>
        </Link>
    )
}

const WhatIThink = () => {
    const posts = [
        {
            title: "How behavior driven design change communication in a team ?",
            url: './test.png',
            date: '24/01/2024',
            tag: 'Product'
        },
        {
            title: "Does test driven design improve the quality of the product ?",
            url: './test.png',
            date: '24/01/2024',
            tag: 'Software craftmanship'
        },
        {
            title: "How behavior driven design change communication in a team ?",
            url: './test.png',
            date: '24/01/2024',
            tag: 'Product'
        },
        {
            title: "Does test driven design improve the quality of the product ?",
            url: './test.png',
            date: '24/01/2024',
            tag: 'Software craftmanship'
        },
        {
            title: "How behavior driven design change communication in a team ?",
            url: './test.png',
            date: '24/01/2024',
            tag: 'Product'
        },
        {
            title: "Does test driven design improve the quality of the product ?",
            url: './test.png',
            date: '24/01/2024',
            tag: 'Software craftmanship'
        },
        {
            title: "How behavior driven design change communication in a team ?",
            url: './test.png',
            date: '24/01/2024',
            tag: 'Product'
        },
        {
            title: "Does test driven design improve the quality of the product ?",
            url: './test.png',
            date: '24/01/2024',
            tag: 'Software craftmanship'
        }
    ]

    return (
        <>
            <div className="col-span-12 mb-section-s md:mb-section-m">
                <div className="flex items-center">
                <span className="text-text-base font-bold md:text-heading-5 text-neutral-400 block mr-element-s md:mr-element-m">03</span>
                <h1 className="text-heading-3 md:text-heading-2 text-neutral-600">
                    <span className="text-brand-base">What </span> I think
                </h1>
                </div>
            </div>
            <div className="col-span-12 w-full">
                {posts.map((post, index) => (
                    <Post key={index} {...post} />
                ))}
            </div>
        </>
    )
}

export default WhatIThink;