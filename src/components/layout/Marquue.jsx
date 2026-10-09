import Marquee from "react-fast-marquee";



const Marquue = async () => {

    "use cache";

    const res = await fetch("https://api.abcz.workers.dev/api/bazardor/products")
    const data = await res.json()

    return (
        <div>
            <div className="bg-white  shadow-sm overflow-hidden">
                <Marquee speed={50} pauseOnHover={true} gradient={false}>
                    {data.map((product) => {
                        const isUp = product.change?.dir === "up";
                        return (
                            <div
                                key={product.id}
                                className="flex items-center  px-4 py-1.5 bg-gray-50  rounded-2xl border text-sm font-semibold"
                            >
                                {product.image && (
                                    <span className="text-xl" aria-hidden="true">
                                        {product.image}
                                    </span>
                                )}
                                <span className="font-medium text-gray-800">{product.nameBn}</span>
                                <span className="text-gray-600">
                                    {product.today} টাকা/{product.unit || "কেজি"}
                                </span>
                                <span className={`text-xs font-semibold flex items-center ${isUp ? 'text-red-500' : 'text-green-500'}`}>
                                    {isUp ? "▲" : "▼"} {product.change?.pct ?? 0}%
                                </span>
                            </div>
                        );
                    })}
                </Marquee>
            </div>
        </div>
    );
};

export default Marquue;