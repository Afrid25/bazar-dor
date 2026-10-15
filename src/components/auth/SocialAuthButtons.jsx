"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";

const providerLabels = {
    google: "G Google",
    github: "◉ GitHub",
};

const SocialAuthButtons = ({ actionLabel, loadingProvider, onProviderSelect }) => {
    const [providers, setProviders] = useState(null);

    useEffect(() => {
        let isMounted = true;

        fetch("/api/auth/providers")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("সামাজিক লগইন অপশন লোড করা যায়নি।");
                }
                return response.json();
            })
            .then((availableProviders) => {
                if (isMounted) {
                    setProviders(availableProviders);
                }
            })
            .catch((error) => {
                if (isMounted) {
                    toast.error("সামাজিক লগইন অপশন লোড করা যায়নি", {
                        description: error.message || "দয়া করে আবার চেষ্টা করুন।",
                    });
                    setProviders({});
                }
            });

        return () => {
            isMounted = false;
        };
    }, []);

    const availableProviders = Object.keys(providerLabels).filter(
        (provider) => providers?.[provider]
    );

    if (providers === null) {
        return <div className="h-7 rounded-md bg-[#f0f5f1] animate-pulse" aria-label="লোড হচ্ছে..." />;
    }

    if (availableProviders.length === 0) {
        return null;
    }

    return (
        <div className="grid grid-cols-2 gap-1.5">
            {availableProviders.map((provider) => (
                <button
                    key={provider}
                    type="button"
                    onClick={() => onProviderSelect(provider)}
                    disabled={loadingProvider !== null}
                    className="h-7 rounded-md border border-[#dce4de] bg-white text-[10px] font-semibold text-[#39453d] transition hover:bg-[#f7faf7] disabled:cursor-not-allowed disabled:opacity-70"
                >
                    {loadingProvider === provider
                        ? "অপেক্ষা করুন..."
                        : `${providerLabels[provider]} দিয়ে ${actionLabel}`}
                </button>
            ))}
        </div>
    );
};

export default SocialAuthButtons;
