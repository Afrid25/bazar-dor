"use client";

import { useEffect, useState } from "react";

const CurrentDate = () => {
    const [date, setDate] = useState("");

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDate(new Date().toLocaleDateString("bn-BD", {
                dateStyle: "full",
            }));
        }, 0);

        return () => clearTimeout(timeoutId);
    }, []);

    return <p>{date}</p>;
};

export default CurrentDate;
