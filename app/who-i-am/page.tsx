import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaMedium } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa6";
const WhoIAmPage = () => {
    return (
        <>

            <div className="col-span-12 mb-section-s md:mb-section-m">
                <div className="flex items-center">
                    <span className="text-text-base font-bold md:text-heading-5 text-neutral-400 block mr-element-s md:mr-element-m">01</span>
                    <h1 className="text-heading-3 md:text-heading-2 text-neutral-600">
                        <span className="text-brand-base">Who </span> I am
                    </h1>
                </div>
            </div>
            
            <div className="col-span-12 md-element-m md:mb-section-s">
                <div className="flex items-center flex-row space-x-element-m md:space-x-element-l">
                    <img src="./profil.jpeg" className="rounded-full w-[130px] h-[130px] md:w-[200px] md:h-[200px]" alt="profil" />
                    <div>
                        <h2 className="text-neutral-600 text-heading-3 mb-element-s">Alexandre LEROY</h2>
                        <h3 className="text-brand-base text-heading-5  mb-element-s">Software craftman</h3>
                        <h4 className="text-text-base italic text-neutral-600">alexandre.leroy@turtleshell.fr</h4>
                        <div className="flex">
                            <Link href={'https://www.linkedin.com/in/alexandre-wonkledge-leroy/'}><FaLinkedin className="text-neutral-400 w-[30px] h-[30px] m-element-s hover:text-neutral-600" /></Link>
                            <Link href={'https://github.com/al-turtleshell'}><FaGithub className="text-neutral-400  w-[30px] h-[30px] m-element-s hover:text-neutral-600"/></Link>
                            <Link href={'https://stackoverflow.com/users/10702448/alexandre-leroy?tab=profile'}><FaStackOverflow className="text-neutral-400  w-[30px] h-[30px] m-element-s hover:text-neutral-600"/></Link>
                            <Link href={'https://medium.com/@alexandre.leroy'}><FaMedium className="text-neutral-400  w-[30px] h-[30px] m-element-s hover:text-neutral-600"/></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-12 md:col-span-6 mb-section-s">
                <h3 className="text-heading-5 text-neutral-600 mb-element-s">Presentation</h3>
                <p className="text-neutral-600 text-text-base w-full p-element-m">
                    Technology and philosophy, both represent such intricate dances between logic and creativity. I suppose it could be said, quite early on, that&apos;s what both technology and philosophy represent to me. 
                    My journey is not one of traditional education but of an insatiable curiosity carved from an insuperable drive to understand the world around me. 
                    Self-taught, I delved into the realms of computer science and architecture development—guided by the philosophical underpinning that asks: Why? What if?
                </p>
            </div>

            <div className="col-span-12">
                <p className="text-neutral-600 text-heading-5 text-center p-element-m md:p-section-m">
                    I&apos;m keen to <span className="text-brand-base">connect</span> with like-minded professionals and organizations where I can contribute my problem-solving expertise while continuing to grow and learn. 
                    Let&apos;s connect and explore how we can drive <span className="text-brand-base">success together</span>!
                </p>
            </div>
        </>
    )
}

export default WhoIAmPage;