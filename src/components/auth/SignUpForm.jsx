"use client";

import Link from "next/link";
import SocialLogin from "@/components/auth/SocialLogin";

const SignUpForm = () => {
    return (
        <section className="rounded-xl border border-[#dce6de] bg-white px-4 py-5 shadow-[0_2px_8px_rgba(34,63,43,0.03)]">
            <SocialLogin />

            <div className="my-4 flex items-center gap-2 text-[10px] text-[#8b948e]">
                <span className="h-px flex-1 bg-[#e1e7e2]" />
                <span>অথবা</span>
                <span className="h-px flex-1 bg-[#e1e7e2]" />
            </div>

            <p className="text-center text-[10px] text-[#68736b]">
                ইতিমধ্যে অ্যাকাউন্ট আছে?{" "}
                <Link href="/sign-in" className="font-semibold text-[#008f42] hover:underline">
                    লগইন করুন
                </Link>
            </p>
        </section>
    );
};

export default SignUpForm;