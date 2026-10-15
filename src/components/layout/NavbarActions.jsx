"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { authClient, useSession } from "@/lib/auth-client";

const NavbarActions = () => {
    const router = useRouter();
    const { data: session, isPending } = useSession();

    const handleSignOut = async () => {
        try {
            const { error } = await authClient.signOut();

            if (error) {
                toast.error("সাইন আউট করা যায়নি", {
                    description: error.message || "দয়া করে আবার চেষ্টা করুন।",
                });
                return;
            }

            toast.success("সফলভাবে সাইন আউট হয়েছে");
            router.push("/");
            router.refresh();
        } catch {
            toast.error("সাইন আউট করতে সমস্যা হয়েছে", {
                description: "দয়া করে আবার চেষ্টা করুন।",
            });
        }
    };

    if (isPending) {
        return null;
    }

    if (session) {
        const user = session.user;
        const displayName = user.name || user.email?.split("@")[0] || "ব্যবহারকারী";
        const initial = displayName.charAt(0).toUpperCase();

        return (
            <details className="relative">
                <summary className="flex cursor-pointer list-none items-center gap-2 rounded-full border border-[#dce6de] bg-white py-1 pl-1 pr-3 text-left shadow-sm transition hover:border-[#9ac9a8] [&::-webkit-details-marker]:hidden">
                    <span
                        className="grid h-8 w-8 shrink-0 place-items-center overflow-hidden rounded-full bg-[#dff3e4] text-sm font-extrabold text-[#008f42]"
                        style={
                            user.image
                                ? {
                                      backgroundImage: `url("${user.image}")`,
                                      backgroundPosition: "center",
                                      backgroundSize: "cover",
                                  }
                                : undefined
                        }
                        aria-hidden="true"
                    >
                        {!user.image && initial}
                    </span>
                    <span className="max-w-28 truncate text-sm font-bold text-[#26332a]">
                        {displayName}
                    </span>
                    <span className="text-xs text-[#7a857e]" aria-hidden="true">
                        ▾
                    </span>
                </summary>

                <div className="absolute right-0 z-20 mt-2 w-64 rounded-xl border border-[#dce6de] bg-white p-3 shadow-[0_8px_24px_rgba(34,63,43,0.14)]">
                    <div className="border-b border-[#edf2ee] px-2 pb-3">
                        <p className="truncate text-sm font-extrabold text-[#26332a]">{displayName}</p>
                        <p className="mt-1 truncate text-xs text-[#7a857e]">{user.email}</p>
                    </div>
                    <div className="pt-2">
                        <Link
                            href="/profile"
                            className="block rounded-lg px-2 py-2 text-sm font-semibold text-[#334138] transition hover:bg-[#f1f8f2] hover:text-[#008f42]"
                        >
                            প্রোফাইল দেখুন
                        </Link>
                        <button
                            type="button"
                            onClick={handleSignOut}
                            className="block w-full rounded-lg px-2 py-2 text-left text-sm font-semibold text-[#c43d43] transition hover:bg-[#fff5f5]"
                        >
                            সাইন আউট
                        </button>
                    </div>
                </div>
            </details>
        );
    }

    return (
        <>
            <Link href="/sign-in" className="btn btn-active btn-error">
                সাইন ইন
            </Link>
            <Link href="/sign-up" className="btn btn-active btn-success">
                সাইন আপ
            </Link>
        </>
    );
};

export default NavbarActions;
