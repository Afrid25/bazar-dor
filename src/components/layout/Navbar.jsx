

import Image from "next/image";
import CategoryNav from "./CategoryNav";
import CurrentDate from "./CurrentDate";


const Navbar = () => {
    return (
        <nav className="bg-base-100 ">
            <div className="flex items-center max-w-7xl mx-auto px-4 py-2 gap-2">
                <Image src="/images/logo-icon.png" alt="Logo" width={50} height={50} priority />
                <div className="">
                    <h2 className="text-2xl font-bold">বাজার দর</h2>
                    <CurrentDate />
                </div>

                <div className="ml-auto flex gap-2">
                    <button className="btn btn-active btn-error">সাইন ইন</button>
                    <button className="btn btn-active btn-success">সাইন আপ</button>
                </div>

            </div>
            <CategoryNav />
        </nav>
    );
};

export default Navbar;