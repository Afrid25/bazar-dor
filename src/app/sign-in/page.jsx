"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { authClient } from "@/lib/auth-client";

const inputClassName =
    "h-7 w-full rounded-md border border-[#dbe4dd] bg-[#fbfdfb] px-2.5 text-[10px] text-[#27332b] outline-none transition placeholder:text-[#68736b] focus:border-[#008c40] focus:ring-2 focus:ring-[#008c40]/10";

const SignInPage = () => {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const showSocialError = (error) => {
        if (error) {
            toast.error("সামাজিক লগইন ব্যর্থ হয়েছে", {
                description: error.message || "দয়া করে আবার চেষ্টা করুন।",
            });
        }
    };

    const handleSocialLogin = async (provider) => {
        try {
            const { error } = await authClient.signIn.social({
                provider,
                callbackURL: "/",
            });
            showSocialError(error);
        } catch {
            toast.error("সামাজিক লগইন করতে সমস্যা হয়েছে", {
                description: "দয়া করে আবার চেষ্টা করুন।",
            });
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(event.currentTarget);

        try {
            const { error } = await authClient.signIn.email({
                email: formData.get("email"),
                password: formData.get("password"),
            });

            if (error) {
                toast.error("সাইন ইন ব্যর্থ হয়েছে", {
                    description: error.message || "ইমেইল বা পাসওয়ার্ড ভুল হতে পারে।",
                });
                return;
            }

            toast.success("সফলভাবে লগইন হয়েছে");
            router.push("/");
            router.refresh();
        } catch {
            toast.error("সাইন ইন করতে সমস্যা হয়েছে", {
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
                        আবার স্বাগতম
                    </h1>
                    <p className="mt-1 text-[10px] text-[#78827b]">
                        আপনার অ্যাকাউন্টে সাইন ইন করে বাজারের সর্বশেষ দাম দেখুন।
                    </p>
                </header>

                <section className="rounded-xl border border-[#dce6de] bg-[#fbfdfb] px-4 py-4 shadow-[0_2px_8px_rgba(34,63,43,0.03)]">
                    <form onSubmit={handleSubmit} className="space-y-2.5">
                        <div>
                            <label htmlFor="email" className="mb-1 block text-[10px] font-semibold text-[#334138]">
                                ইমেইল
                            </label>
                            <input id="email" name="email" type="email" required className={inputClassName} />
                        </div>
                        <div>
                            <label htmlFor="password" className="mb-1 block text-[10px] font-semibold text-[#334138]">
                                পাসওয়ার্ড
                            </label>
                            <input id="password" name="password" type="password" required className={inputClassName} />
                        </div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="h-8 w-full rounded-md bg-[#009447] text-[10px] font-bold text-white transition hover:bg-[#007d3b] disabled:cursor-not-allowed disabled:opacity-70"
                        >
                            {isSubmitting ? "সাইন ইন হচ্ছে..." : "সাইন ইন করুন"}
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
                                className="h-7 rounded-md border border-[#dce4de] bg-white text-[10px] font-semibold text-[#39453d] transition hover:bg-[#f7faf7]"
                            >
                                {provider === "google" ? "G" : "◉"}{" "}
                                {provider === "google" ? "Google" : "GitHub"} দিয়ে চালিয়ে যান
                            </button>
                        ))}
                    </div>

                    <p className="mt-3 text-center text-[10px] text-[#68736b]">
                        অ্যাকাউন্ট নেই?{" "}
                        <Link href="/sign-up" className="font-semibold text-[#008f42] hover:underline">
                            সাইন আপ করুন
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

export default SignInPage;
