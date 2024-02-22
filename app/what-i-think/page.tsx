import { cutStringAt } from "@/lib/utils";
import Link from "next/link";

type PostParams = {
    title: string;
    picture_url: string;
    link: string;
    tag: string;
}
const Post = ({title, picture_url, link, tag }: PostParams) => {
    return (
        <Link href={link} className="col-span-12 mb-section-m group">
            <h2 className="text-neutral-600 text-heading-5 font-bold mb-element-s md:text-heading-4 group-hover:text-brand-base">{title}</h2>
            <img src={picture_url} className="mb-element-s w-full rounded-lg" />
            <div className="flex text-text-small mb-section-s text-neutral-600">
                <p><span className="text-brand-base">{tag}</span></p>
            </div>
        </Link>
    )
}

const WhatIThink = () => {
    const posts = [
        {
            title: "Unraveling the Power of Event Sourcing: Building Future-Proof Systems",
            picture_url: 'https://miro.medium.com/v2/resize:fit:7168/1*BY45UMd7EEpClkTnpyzzew.jpeg',
            link: "https://medium.com/@alexandre.leroy/unraveling-the-power-of-event-sourcing-building-future-proof-systems-5c80a7a57d6e",
            tag: "Software Architecture",
            subtitle: "In this article, we will explore the power of event sourcing and how it can help us build future-proof systems."
        },
        {
            title: "Unlocking Event-Sourcing — A Guide to Events, Logs, Commands, and Aggregates",
            picture_url: 'https://miro.medium.com/v2/resize:fit:4800/format:webp/1*E43y8CiLoqz9F97l5hVhZw.jpeg',
            link: "https://medium.com/@alexandre.leroy/unlocking-event-sourcing-a-guide-to-events-logs-commands-and-aggregates-4a2a8a6e2dcb",
            tag: "Software Architecture",
            subtitle: "In this article, we will explore the power of event sourcing and how it can help us build future-proof systems."
        },
        {
            title: "Unlocking Time Travel in Tech — The Benefits of Event Sourcing Explained",
            picture_url: 'https://miro.medium.com/v2/resize:fit:2000/format:webp/1*PdtjHGDPJeJptm62WktFQQ.jpeg',
            link: "https://medium.com/@alexandre.leroy/unlocking-time-travel-in-tech-the-benefits-of-event-sourcing-explained-f9c3b348e6fd",
            tag: "Software Architecture",
            subtitle: "In this article, we will explore the power of event sourcing and how it can help us build future-proof systems."
        },
        {
            title: "The DNA of Events in Event-Sourcing: Unpacking Their Key Characteristics",
            picture_url: 'https://miro.medium.com/v2/resize:fit:4800/format:webp/1*SijQtOmvvMu895EsO-kTTg.jpeg',
            link: "https://medium.com/@alexandre.leroy/the-dna-of-events-in-event-sourcing-unpacking-their-key-characteristics-3033e2e36aa7",
            tag: "Software Architecture",
            subtitle: "In this article, we will explore the power of event sourcing and how it can help us build future-proof systems."
        },
        {
            title: "Structuring Ideas: Crafting a Logical Skeleton for Insightful Communication",
            picture_url: 'https://miro.medium.com/v2/resize:fit:2000/format:webp/1*3oQwmXvfVwNKck_7NyW5OA.jpeg',
            link: "https://medium.com/@alexandre.leroy/structuring-ideas-crafting-a-logical-skeleton-for-insightful-communication-78db2450c34e",
            tag: "Thoughts and idea",
            subtitle: "In this article, we will explore the power of event sourcing and how it can help us build future-proof systems."
        },
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