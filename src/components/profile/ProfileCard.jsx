 "use client";

 import Link from "next/link";
 import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { authClient, useSession } from "@/lib/auth-client";

const ProfileCard = () => {
    const router = useRouter();
    const { data: session } = useSession();
    const user = session?.user;

    const handleSignOut = async () => {
        const { error } = await authClient.signOut();

        if (error) {
            toast.error("সাইন আউট করা যায়নি", {
                description: error.message || "দয়া করে আবার চেষ্টা করুন।",
            });
            return;
        }

        toast.success("সফলভাবে সাইন আউট হয়েছে");
        router.replace("/sign-in");
        router.refresh();
    };

    if (!user) {
        return null;
    }

    return (
        <section className="overflow-hidden rounded-2xl border border-[#dce6de] bg-white shadow-[0_2px_8px_rgba(34,63,43,0.04)]">
            <div className="bg-[#e5f6e9] px-5 py-8 sm:px-8">
                <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
                    <div className="grid h-20 w-20 shrink-0 place-items-center rounded-full bg-[#008f42] text-3xl font-extrabold text-white">
                        {(user.name || user.email || "?").charAt(0).toUpperCase()}
                    </div>
                    <div>
                        <p className="text-2xl font-extrabold text-[#26332a]">
                            {user.name || "ব্যবহারকারী"}
                        </p>
                        <p className="mt-1 text-sm text-[#5d6a62]">{user.email}</p>
                    </div>
                </div>
            </div>

            <div className="grid gap-4 px-5 py-6 sm:grid-cols-2 sm:px-8">
                <div className="rounded-xl border border-[#e3ebe4] bg-[#fbfdfb] p-4">
                    <p className="text-xs font-semibold text-[#7a857e]">নাম</p>
                    <p className="mt-1 font-bold text-[#26332a]">{user.name || "নাম যোগ করা হয়নি"}</p>
                </div>
                <div className="rounded-xl border border-[#e3ebe4] bg-[#fbfdfb] p-4">
                    <p className="text-xs font-semibold text-[#7a857e]">ইমেইল</p>
                    <p className="mt-1 break-all font-bold text-[#26332a]">{user.email}</p>
                </div>
            </div>

            <div className="border-t border-[#edf2ee] px-5 py-5 sm:px-8">
                <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
                    <Link
                        href="/profile/updateProfile"
                        className="rounded-md bg-[#008f42] px-4 py-2.5 text-center text-sm font-bold text-white transition hover:bg-[#007b39]"
                    >
                        প্রোফাইল আপডেট করুন
                    </Link>
                    <button
                        type="button"
                        onClick={handleSignOut}
                        className="rounded-md border border-[#f1b8b8] bg-white px-4 py-2.5 text-sm font-bold text-[#c43d43] transition hover:bg-[#fff5f5]"
                    >
                        সাইন আউট করুন
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProfileCard;