import React from 'react';
import Marquue from '../layout/Marquue';
import CurrentDate from '../layout/CurrentDate';
import Image from 'next/image';
import homeImage from '../../../public/images/bazar-hero.png';

const Hero = () => {
    return (
        <section className="bg-[#eef4ef] pb-10">
            <Marquue />
            <div className="mx-auto max-w-6xl px-4 pt-8 sm:pt-10">
                <div className="flex min-h-63 flex-col items-center justify-between gap-6 rounded-[20px] border border-[#dfe8e1] bg-[#fbfdfb] px-6 py-6 shadow-sm sm:px-10 md:flex-row md:py-7">
                    <div className="max-w-170">
                        <div className="mb-3 inline-flex rounded-full bg-[#e2f6e8] px-3 py-1 text-xs font-semibold text-[#07883e]">
                            <CurrentDate />
                        </div>
                        <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-[#1f2c24] sm:text-4xl">
                            আজকের বাজারের দাম এক নজরে
                        </h1>
                        <p className="mt-3 max-w-160 text-sm leading-7 text-[#6c7871] sm:text-base">
                            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত,
                            গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
                        </p>
                        <button className="mt-5 rounded-md bg-[#009447] px-5 py-2.5 text-sm font-bold text-white shadow-[0_3px_5px_rgba(0,148,71,0.3)] transition-colors hover:bg-[#007d3b]">
                            সব পণ্য দেখুন
                        </button>
                    </div>
                    <div className="flex shrink-0 items-end justify-center self-center md:w-55">
                        <Image
                            src={homeImage}
                            alt="বাজারের পণ্যের ঝুড়ি"
                            width={210}
                            height={210}
                            priority
                            className="h-auto w-44 sm:w-50"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;