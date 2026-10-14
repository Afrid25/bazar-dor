import Link from "next/link";

const BackToHome = ({ className = "" }) => {
    return (
        <Link
            href="/"
            className={`inline-flex items-center text-xs font-semibold text-[#008f42] transition hover:text-[#007b39] ${className}`}
        >
            <span aria-hidden="true">←</span>
            <span className="ml-1">হোম পেজে ফিরে যান</span>
        </Link>
    );
};

export default BackToHome;