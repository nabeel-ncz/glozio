import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700', '800']
});

export const Logo = () => {
    return (
        <div className="p-4">
            <h1
                className={cn("font-bold text-3xl", font.className)}
            >
                Glo<span className="text-blue-600">z</span>io
            </h1>
        </div>
    )
};
