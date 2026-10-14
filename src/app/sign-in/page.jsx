import Link from "next/link";
import SignInForm from "@/components/auth/SignInForm";

const SignInPage = () => {
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

                <SignInForm />

                <Link
                    href="/"
                    className="mt-4 block text-center text-[10px] text-[#89938c] transition hover:text-[#008f42]"
                >
                    ← হোম পেজে ফিরে যান
                </Link>
            </div>
        </main>
    );
};

export default SignInPage;
