"use client";

const SocialLogin = () => {
    return (
        <div className="space-y-3">
            <button
                type="button"
                className="flex h-10 w-full items-center justify-center gap-2 rounded-md border border-[#dce4de] bg-white text-sm font-semibold text-[#39453d] transition hover:bg-[#f7faf7]"
            >
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#f1f5f9] text-xs font-bold text-[#4285f4]">
                    G
                </span>
                Google দিয়ে চালিয়ে যান
            </button>

            <button
                type="button"
                className="flex h-10 w-full items-center justify-center gap-2 rounded-md border border-[#dce4de] bg-white text-sm font-semibold text-[#39453d] transition hover:bg-[#f7faf7]"
            >
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#f1f5f9] text-xs font-bold text-[#1f2328]">
                    G
                </span>
                GitHub দিয়ে চালিয়ে যান
            </button>
        </div>
    );
};

export default SocialLogin;