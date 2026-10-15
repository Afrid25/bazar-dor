"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useSession } from "@/lib/auth-client";

const AuthGuard = ({ children, redirectTo = "/sign-in" }) => {
    const router = useRouter();
    const { data: session, isPending } = useSession();
    const hasRedirected = useRef(false);

    useEffect(() => {
        if (!isPending && !session && !hasRedirected.current) {
            hasRedirected.current = true;
            toast.error("আগে সাইন ইন করুন", {
                description: "বিস্তারিত তথ্য দেখতে আপনার অ্যাকাউন্টে সাইন ইন করতে হবে।",
            });
            router.replace(redirectTo);
        }
    }, [isPending, session, redirectTo, router]);

    if (isPending) {
        return (
            <div className="flex min-h-[200px] items-center justify-center text-sm text-[#5b685f]">
                যাচাই করা হচ্ছে...
            </div>
        );
    }

    if (!session) {
        return null;
    }

    return children;
};

export default AuthGuard;