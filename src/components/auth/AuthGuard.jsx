"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "@/lib/auth-client";

const AuthGuard = ({ children, redirectTo = "/sign-in" }) => {
    const router = useRouter();
    const { data: session, isPending } = useSession();

    useEffect(() => {
        if (!isPending && !session) {
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