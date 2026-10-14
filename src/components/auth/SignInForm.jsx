"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { signIn } from "@/lib/auth-client";
import SocialLogin from "@/components/auth/SocialLogin";

const inputClassName =
    "h-9 w-full rounded-md border border-[#dbe4dd] bg-[#fbfdfb] px-3 text-xs text-[#27332b] outline-none transition placeholder:text-[#68736b] focus:border-[#008c40] focus:ring-2 focus:ring-[#008c40]/10";

const SignInForm = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        const formData = new FormData(event.currentTarget);
        const email = formData.get("email");
        const password = formData.get("password");

        try {
            const { error } = await signIn.email({ email, password });

            if (error) {
                toast.error("সাইন ইন ব্যর্থ হয়েছে", {
                    description: error.message || "ইমেইল বা পাসওয়ার্ড ভুল হতে পারে।",
                    style: {
                        background: "#fff",
                        border: "1px solid #fee2e2",
                        color: "#991b1b",
                    },
                });
                return;
            }

            toast.success("সফলভাবে লগইন হয়েছে", {
                description: "আপনি এখন বাজারের তথ্য দেখতে পারবেন।",
                style: {
                    background: "#fbfdfb",
                    border: "1px solid #dce6de",
                    color: "#27332b",
                },
            });

            router.push("/");
            router.refresh();
        } catch {
            toast.error("সাইন ইন করতে সমস্যা হয়েছে", {
                description: "দয়া করে আবার চেষ্টা করুন।",
                style: {
                    background: "#fff",
                    border: "1px solid #fee2e2",
                    color: "#991b1b",
                },
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="rounded-xl border border-[#dce6de] bg-white px-4 py-5 shadow-[0_2px_8px_rgba(34,63,43,0.03)]">
            <form onSubmit={handleSubmit} className="space-y-3.5">
                <div>
                    <label htmlFor="email" className="mb-1 block text-[11px] font-semibold text-[#334138]">
                        ইমেইল
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="you@example.com"
                        required
                        className={inputClassName}
                    />
                </div>

                <div>
                    <div className="mb-1 flex items-center justify-between gap-2">
                        <label htmlFor="password" className="block text-[11px] font-semibold text-[#334138]">
                            পাসওয়ার্ড
                        </label>
                        <Link href="#" className="text-[10px] font-semibold text-[#008f42] hover:underline">
                            পাসওয়ার্ড ভুলে গেছেন?
                        </Link>
                    </div>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        placeholder="আপনার পাসওয়ার্ড লিখুন"
                        required
                        className={inputClassName}
                    />
                </div>

                <label className="flex items-center gap-2 text-[10px] text-[#68736b]">
                    <input type="checkbox" className="h-3.5 w-3.5 accent-[#008f42]" />
                    আমাকে মনে রাখুন
                </label>

                <button
                    type="submit"
                    disabled={loading}
                    className="h-8 w-full rounded-md bg-[#008f42] text-[11px] font-bold text-white shadow-[0_2px_4px_rgba(0,143,66,0.25)] transition hover:bg-[#007b39] focus:outline-none focus:ring-2 focus:ring-[#008f42]/20 disabled:cursor-not-allowed disabled:opacity-70"
                >
                    {loading ? "সাইন ইন হচ্ছে..." : "সাইন ইন করুন"}
                </button>
            </form>

            <div className="my-3.5 flex items-center gap-2 text-[10px] text-[#8b948e]">
                <span className="h-px flex-1 bg-[#e1e7e2]" />
                <span>অথবা</span>
                <span className="h-px flex-1 bg-[#e1e7e2]" />
            </div>

            <SocialLogin />

            <p className="mt-4 text-center text-[10px] text-[#68736b]">
                অ্যাকাউন্ট নেই?{" "}
                <Link href="/sign-up" className="font-semibold text-[#008f42] hover:underline">
                    সাইন আপ করুন
                </Link>
            </p>
        </section>
    );
};

export default SignInForm;
