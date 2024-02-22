import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaNodeJs } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiNestjs } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
export default function Home() {
  return (
    <div className="col-span-12">
      <h1 className="text-heading-2 md:text-heading-1 text-neutral-600 text-center mb-element-s">
        <span className="text-brand-base">Crafting</span> Ideas into Reality
      </h1>
      <h2 className="text-text-base font-bold md:text-heading-4 text-neutral-600 text-center max-w-[700px] m-auto mb-section-s md:mb-section-m">
        I specialize in turning the <span className="text-brand-base">idea</span> into the <span className="text-brand-base">reality</span>, making the impossible possible.
      </h2>
      <div className="flex justify-center flex-row space-x-element-m md:space-x-section-s mb-section-s md:mb-section-m">
        <SiNestjs className="text-neutral-400/80 w-[60px] h-[60px] md:w-[75px] md:h-[75px] hover:text-brand-base/80"/>
        <SiTypescript className="text-neutral-400/80 w-[60px] h-[60px] md:w-[75px] md:h-[75px] hover:text-brand-base/80"/>
        <SiNextdotjs className="text-neutral-400/80 w-[60px] h-[60px] md:w-[75px] md:h-[75px] hover:text-brand-base/80"/>
        <FaNodeJs className="text-neutral-400/80 w-[60px] h-[60px] md:w-[75px] md:h-[75px] hover:text-brand-base/80"/>
      </div>
      <h3 className="text-text-base md:text-heading-5 text-neutral-600 text-center mb-section-s">
        Whether you&apos;re looking to disrupt markets, create new experiences, or redefine standards.<br />
        I am here to <span className="text-brand-base">help you</span> make it <span className="text-brand-base">happen</span>.
      </h3>
      <div className="flex flex-row space-x-element-s justify-center mb-section-l">
          <Button variant="brand"><Link href="/who-i-am">Hire me</Link></Button>
          <Button><Link href="/what-i-do">Explore my work</Link></Button>
      </div>
      <div>
        <Link href={'/who-i-am'} className="flex items-center pb-element-l border-b border-neutral-400 mb-element-l group relative">
          <h2 className="text-heading-3 md:text-heading-2 text-neutral-600 group-hover:text-neutral-600/90"> Who I am</h2>
          <p className="text-text-base font-bold md:text-heading-5 text-neutral-400 ml-auto group-hover:text-neutral-100 z-50 mr-element-s">01</p>
          <div className="absolute w-[80px] h-[70px] bg-brand-base right-[0px] z-1 rounded hidden group-hover:animate-slideInRight group-hover:block"/>
        </Link>
        <Link href={'/what-i-do'} className="flex items-center pb-element-l border-b border-neutral-400 mb-element-l group relative">
          <h2 className="text-heading-3 md:text-heading-2 text-neutral-600 group-hover:text-neutral-600/90"> What I do</h2>
          <p className="text-text-base font-bold md:text-heading-5 text-neutral-400 ml-auto group-hover:text-neutral-100 z-50 mr-element-s">02</p>
          <div className="absolute w-[80px] h-[70px] bg-brand-base right-[0px] z-1 rounded hidden group-hover:animate-slideInRight group-hover:block"/>
        </Link>
        <Link href={'/what-i-think'} className="flex items-center pb-element-l border-b border-neutral-400 relative group">
          <h2 className="text-heading-3 md:text-heading-2 text-neutral-600 group-hover:text-neutral-600/90"> What I think</h2>
          <p className="text-text-base font-bold md:text-heading-5 text-neutral-400 ml-auto z-50 group-hover:text-neutral-100 mr-element-s">03</p>
          <div className="absolute w-[80px] h-[70px] bg-brand-base right-[0px] z-1 rounded hidden group-hover:animate-slideInRight group-hover:block"/>
        </Link>
      </div>

      <div className="flex hidden sm:block">
        <img className="ml-auto" src="/man_walking.png" alt="hero" />
      </div>
    </div>
  );
}
