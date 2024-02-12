'use client';
import { cn } from "@/lib/utils";
import Link from "next/link"
import { usePathname } from "next/navigation";

const Menu = () => {
    const path = usePathname();
    return (
        <nav>
            <ul className="flex flex-row space-x-element-m justify-center text-text-base text-neutral-600">
                <li><Link className={cn("hover:text-brand-base", { "text-brand-base": path === '/who-i-am' })} href="who-i-am">Who I Am</Link></li>
                <li><Link className={cn("hover:text-brand-base", { "text-brand-base": path === '/what-i-do' })}href="what-i-do">What I do</Link></li>
                <li><Link className={cn("hover:text-brand-base", { "text-brand-base": path === '/what-i-think' })}href="what-i-think">What I think</Link></li>
            </ul>
        </nav>
    )
}

export { Menu };