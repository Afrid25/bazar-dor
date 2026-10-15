"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { authClient } from "@/lib/auth-client";

const inputClassName =
    "h-7 w-full rounded-md border border-[#dbe4dd] bg-[#fbfdfb] px-2.5 text-[10px] text-[#27332b] outline-none transition placeholder:text-[#68736b] focus:border-[#008c40] focus:ring-2 focus:ring-[#008c40]/10";

const SignUpPage = () => {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [socialProvider, setSocialProvider] = useState(null);

    const handleSocialLogin = async (provider) => {
        setSocialProvider(provider);

        try {
            const { error } = await authClient.signIn.social({
                provider,
                callbackURL: "/",
            });

            if (error) {
                toast.error("সামাজিক লগইন ব্যর্থ হয়েছে", {
                    description: error.message || "দয়া করে আবার চেষ্টা করুন।",
                });
            }
        } catch {
            toast.error("সামাজিক লগইন করতে সমস্যা হয়েছে", {
                description: "সার্ভার বা OAuth কনফিগারেশন পরীক্ষা করে আবার চেষ্টা করুন।",
            });
        } finally {
            setSocialProvider(null);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(event.currentTarget);
        const password = formData.get("password");
        const confirmPassword = formData.get("confirm-password");

        if (password !== confirmPassword) {
            toast.error("পাসওয়ার্ড মিলছে না", {
                description: "দুটা পাসওয়ার্ড একই হতে হবে।",
            });
            setIsSubmitting(false);
            return;
        }

        try {
            const { error } = await authClient.signUp.email({
                name: formData.get("name"),
                email: formData.get("email"),
                password,
            });

            if (error) {
                toast.error("সাইন আপ ব্যর্থ হয়েছে", {
                    description: error.message || "দয়া করে আবার চেষ্টা করুন।",
                });
                return;
            }

            toast.success("অ্যাকাউন্ট সফলভাবে তৈরি হয়েছে", {
                description: "এখন আপনার অ্যাকাউন্টে সাইন ইন করুন।",
            });
            router.push("/sign-in");
        } catch {
            toast.error("সাইন আপ করতে সমস্যা হয়েছে", {
                description: "দয়া করে আবার চেষ্টা করুন।",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="min-h-[calc(100vh-106px)] bg-[#f1f7f2] px-4 py-10 sm:py-12">
            <div className="mx-auto w-full max-w-76">
                <header className="mb-5 text-center">
                    <h1 className="text-xl font-extrabold tracking-tight text-[#26332a]">
                        অ্যাকাউন্ট তৈরি করুন
                    </h1>
                    <p className="mt-1 text-[10px] text-[#78827b]">
                        বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
                    </p>
                </header>

                <section className="rounded-xl border border-[#dce6de] bg-[#fbfdfb] px-4 py-4 shadow-[0_2px_8px_rgba(34,63,43,0.03)]">
                    <form onSubmit={handleSubmit} className="space-y-2.5">
                        {[
                            ["name", "নাম", "text", "যেমন: রহিম উদ্দিন"],
                            ["email", "ইমেইল", "email", "you@example.com"],
                            ["password", "পাসওয়ার্ড", "password", "কমপক্ষে ৮ অক্ষর"],
                            ["confirm-password", "পাসওয়ার্ড নিশ্চিত করুন", "password", "আবার লিখুন"],
                        ].map(([id, label, type, placeholder]) => (
                            <div key={id}>
                                <label htmlFor={id} className="mb-1 block text-[10px] font-semibold text-[#334138]">
                                    {label}
                                </label>
                                <input
                                    id={id}
                                    name={id}
                                    type={type}
                                    placeholder={placeholder}
                                    minLength={type === "password" ? 8 : undefined}
                                    required
                                    className={inputClassName}
                                />
                            </div>
                        ))}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="h-8 w-full rounded-md bg-[#009447] text-[10px] font-bold text-white transition hover:bg-[#007d3b] disabled:cursor-not-allowed disabled:opacity-70"
                        >
                            {isSubmitting ? "অ্যাকাউন্ট তৈরি হচ্ছে..." : "অ্যাকাউন্ট তৈরি করুন"}
                        </button>
                    </form>

                    <div className="my-3 flex items-center gap-2 text-[9px] text-[#8b948e]">
                        <span className="h-px flex-1 bg-[#e1e7e2]" />
                        <span>অথবা</span>
                        <span className="h-px flex-1 bg-[#e1e7e2]" />
                    </div>

                    <div className="grid grid-cols-2 gap-1.5">
                        {["google", "github"].map((provider) => (
                            <button
                                key={provider}
                                type="button"
                                onClick={() => handleSocialLogin(provider)}
                                disabled={socialProvider !== null}
                                className="h-7 rounded-md border border-[#dce4de] bg-white text-[10px] font-semibold text-[#39453d] transition hover:bg-[#f7faf7]"
                            >
                                {socialProvider === provider
                                    ? "অপেক্ষা করুন..."
                                    : `${provider === "google" ? "G Google" : "◉ GitHub"} দিয়ে সাইন আপ`}
                            </button>
                        ))}
                    </div>

                    <p className="mt-3 text-center text-[10px] text-[#68736b]">
                        ইতিমধ্যে অ্যাকাউন্ট আছে?{" "}
                        <Link href="/sign-in" className="font-semibold text-[#008f42] hover:underline">
                            লগইন করুন
                        </Link>
                    </p>
                </section>

                <Link href="/" className="mt-4 block text-center text-[10px] text-[#89938c] hover:text-[#008f42]">
                    ← হোম পেজে ফিরে যান
                </Link>
            </div>
        </main>
    );
};

export default SignUpPage;
