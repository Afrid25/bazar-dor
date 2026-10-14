"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { authClient, useSession } from "@/lib/auth-client";

const UpdateProfileForm = () => {
    const router = useRouter();
    const { data: session, isPending } = useSession();
    const [name, setName] = useState(null);
    const [isSaving, setIsSaving] = useState(false);
    const currentName = name ?? session?.user?.name ?? "";

    const handleSubmit = async (event) => {
        event.preventDefault();
        const trimmedName = currentName.trim();

        if (!trimmedName) {
            toast.error("নাম লিখুন", {
                description: "আপনার নাম খালি রাখা যাবে না।",
            });
            return;
        }

        setIsSaving(true);

        try {
            const { error } = await authClient.updateUser({
                name: trimmedName,
            });

            if (error) {
                toast.error("প্রোফাইল আপডেট করা যায়নি", {
                    description: error.message || "দয়া করে আবার চেষ্টা করুন।",
                });
                return;
            }

            toast.success("প্রোফাইল আপডেট হয়েছে");
            router.push("/profile");
            router.refresh();
        } catch {
            toast.error("প্রোফাইল আপডেট করতে সমস্যা হয়েছে", {
                description: "দয়া করে আবার চেষ্টা করুন।",
            });
        } finally {
            setIsSaving(false);
        }
    };

    if (isPending) {
        return (
            <div className="rounded-2xl border border-[#dce6de] bg-white p-8 text-center text-sm text-[#6c7871]">
                প্রোফাইল লোড হচ্ছে...
            </div>
        );
    }

    return (
        <section className="rounded-2xl border border-[#dce6de] bg-white p-5 shadow-[0_2px_8px_rgba(34,63,43,0.04)] sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-bold text-[#334138]">
                        নাম
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        value={currentName}
                        onChange={(event) => setName(event.target.value)}
                        placeholder="আপনার নাম লিখুন"
                        autoComplete="name"
                        required
                        className="h-11 w-full rounded-md border border-[#dbe4dd] bg-[#fbfdfb] px-3 text-sm text-[#27332b] outline-none transition placeholder:text-[#68736b] focus:border-[#008c40] focus:ring-2 focus:ring-[#008c40]/10"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-bold text-[#334138]">
                        ইমেইল
                    </label>
                    <input
                        id="email"
                        type="email"
                        value={session?.user?.email || ""}
                        readOnly
                        className="h-11 w-full cursor-not-allowed rounded-md border border-[#e3ebe4] bg-[#f4f8f4] px-3 text-sm text-[#7a857e] outline-none"
                    />
                    <p className="mt-2 text-xs text-[#7a857e]">
                        ইমেইল পরিবর্তন করা যাবে না।
                    </p>
                </div>

                <div className="flex flex-col-reverse gap-3 border-t border-[#edf2ee] pt-5 sm:flex-row sm:justify-end">
                    <button
                        type="button"
                        onClick={() => router.push("/profile")}
                        className="rounded-md border border-[#dce4de] bg-white px-5 py-2.5 text-sm font-bold text-[#5d6a62] transition hover:bg-[#f7faf7]"
                    >
                        বাতিল করুন
                    </button>
                    <button
                        type="submit"
                        disabled={isSaving || !session?.user}
                        className="rounded-md bg-[#008f42] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#007b39] disabled:cursor-not-allowed disabled:opacity-70"
                    >
                        {isSaving ? "সংরক্ষণ হচ্ছে..." : "পরিবর্তন সংরক্ষণ করুন"}
                    </button>
                </div>
            </form>
        </section>
    );
};

export default UpdateProfileForm;