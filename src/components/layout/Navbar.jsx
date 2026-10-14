import Image from "next/image";
import Link from "next/link";
import CategoryNav from "./CategoryNav";
import CurrentDate from "./CurrentDate";
import NavbarActions from "./NavbarActions";

const Navbar = () => {
    return (
        <nav className="bg-base-100">
            <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-2">
                <Link href="/" className="flex items-center gap-2">
                    <Image src="/images/logo-icon.png" alt="Logo" width={50} height={50} priority />
                    <div>
                        <h2 className="text-2xl font-bold">বাজার দর</h2>
                        <CurrentDate />
                    </div>
                </Link>

                <div className="ml-auto flex gap-2">
                    <NavbarActions />
                </div>
            </div>
            <CategoryNav />
        </nav>
    );
};

export default Navbar;
