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
        return (
            <>
                <Link href="/profile" className="btn btn-active btn-success">
                    প্রোফাইল
                </Link>
                <button type="button" onClick={handleSignOut} className="btn btn-active btn-error">
                    সাইন আউট
                </button>
            </>
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
