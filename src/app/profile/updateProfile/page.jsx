import Link from "next/link";
import AuthGaurd from "@/components/auth/AuthGaurd";
import UpdateProfileForm from "@/components/profile/UpdateProfileForm";

const UpdateProfilePage = () => {
    return (
        <AuthGaurd>
            <main className="min-h-[calc(100vh-106px)] bg-[#f1f7f2] px-4 py-10 sm:py-12">
                <div className="mx-auto w-full max-w-2xl">
                    <header className="mb-6">
                        <Link
                            href="/profile"
                            className="text-xs font-semibold text-[#008f42] transition hover:text-[#007b39]"
                        >
                            ← প্রোফাইলে ফিরে যান
                        </Link>
                        <p className="mt-6 text-sm font-semibold text-[#009447]">
                            অ্যাকাউন্ট সেটিংস
                        </p>
                        <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-[#26332a]">
                            প্রোফাইল আপডেট করুন
                        </h1>
                        <p className="mt-2 text-sm text-[#6c7871]">
                            আপনার প্রোফাইলের নাম আপডেট করুন।
                        </p>
                    </header>

                    <UpdateProfileForm />
                </div>
            </main>
        </AuthGaurd>
    );
};

export default UpdateProfilePage;
