import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700', '800']
});

export const Logo = (
    {
        theme = "dark"
    }: {
        theme?: string
    }) => {

    return (
        <div className="p-4">
            <h1 className={cn(`font-bold text-3xl ${theme === "light" ? "text-white" : ""}`, font.className)}>
                Glo<span className={`${theme === "light" ? "text-white" : "text-foregroundacc"}`}>z</span>io
            </h1>
        </div>
    )
};
