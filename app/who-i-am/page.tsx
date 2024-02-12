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
                    <img src="./profil.png" className=" w-[130px] h-[130px] md:w-[200px] md:h-[200px]" />
                    <div>
                        <h2 className="text-neutral-600 text-heading-3 mb-element-s">Alexandre LEROY</h2>
                        <h3 className="text-brand-base text-heading-5  mb-element-s">Software craftman</h3>
                        <div className="flex">
                            <Link href={'https://google.com'}><FaLinkedin className="text-neutral-400 w-[30px] h-[30px] m-element-s hover:text-neutral-600" /></Link>
                            <Link href={'https://google.com'}><FaGithub  className="text-neutral-400  w-[30px] h-[30px] m-element-s hover:text-neutral-600" /></Link>
                            <Link href={'https://google.com'}><FaStackOverflow className="text-neutral-400  w-[30px] h-[30px] m-element-s hover:text-neutral-600"/></Link>
                            <Link href={'https://google.com'}><FaMedium className="text-neutral-400  w-[30px] h-[30px] m-element-s hover:text-neutral-600"/></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-12 md:col-span-6 mb-section-s">
                <h3 className="text-heading-5 text-neutral-600 mb-element-s">Presentation</h3>
                <p className="text-neutral-600 text-text-base w-full p-element-m">
                    Cool, open-minded, and perpetually curious, you might find it surprising to learn that my journey as a seasoned problem solver began when I was just 10 years old, under the direct tutelage of my father. 
                    This early start ignited a lifelong passion for tackling challenges, whether in team settings or independently. 
                    My calm and open nature makes it easy for others to collaborate with me, even in complex scenarios, while my curiosity drives my continuous pursuit of learning and innovation.
                </p>
            </div>
            <div className="col-span-12 md:col-span-6">
                <h3 className="text-heading-5 text-neutral-600 mb-element-s">Philosophy</h3>
                <p className="text-neutral-600 text-text-base p-element-m">
                    As a self-taught software engineer, the roots of my professional journey trace back to knowledge and skills that are unyieldable to roots whose basis lay in principles of stoicism and rational thinking. 
                    I firmly believe that technical prowess alone cannot provide the basis for effective software development, for without clear, thoughtful communication it is just noise. 
                    This philosophy has helped me to navigate the complexities of technology with a calm, analytical way that ensures whatever solution is implemented is functional, but also harmonious with those it must serve. 
                    In this ever-changing field, I strive to learn and adapt, driven by the conviction that continuous growth is both a personal and a professional imperative.
                </p>
            </div>
            <div className="col-span-12">
                <p className="text-neutral-600 text-heading-5 text-center p-element-m md:p-section-m">
                    I'm keen to <span className="text-brand-base">connect</span> with like-minded professionals and organizations where I can contribute my problem-solving expertise while continuing to grow and learn. 
                    Let's connect and explore how we can drive <span className="text-brand-base">success together</span>!
                </p>
            </div>
        </>
    )
}

export default WhoIAmPage;