import Link from "next/link";
import AuthGuard from "@/components/auth/AuthGuard";
import ProfileCard from "@/components/profile/ProfileCard";

const ProfilePage = () => {
    return (
        <AuthGuard>
            <main className="min-h-[calc(100vh-106px)] bg-[#f1f7f2] px-4 py-10 sm:py-12">
                <div className="mx-auto w-full max-w-2xl">
                    <header className="mb-6">
                        <Link
                            href="/"
                            className="text-xs font-semibold text-[#008f42] transition hover:text-[#007b39]"
                        >
                            ← হোম পেজে ফিরে যান
                        </Link>
                        <p className="mt-6 text-sm font-semibold text-[#009447]">
                            অ্যাকাউন্ট
                        </p>
                        <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-[#26332a]">
                            আমার প্রোফাইল
                        </h1>
                        <p className="mt-2 text-sm text-[#6c7871]">
                            আপনার অ্যাকাউন্টের তথ্য এখান থেকে দেখুন ও পরিচালনা করুন।
                        </p>
                    </header>

                    <ProfileCard />
                </div>
            </main>
        </AuthGuard>
    );
};

export default ProfilePage;