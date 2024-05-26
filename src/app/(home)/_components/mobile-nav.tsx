'use client';
import Image from "next/image";
import {
    Sheet,
    SheetTrigger,
    SheetContent,
    SheetClose
} from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { IoMdMenu } from "react-icons/io";

export const MobileNav = () => {
    const pathname = usePathname();
    return (
        <section className="w-full z-50 max-w-[264px]">
            <Sheet>
                <SheetTrigger asChild>
                    <button className="bg-secondary hover:bg-gray-200 cursor-pointer p-2 rounded">
                        <IoMdMenu size={"24"} />
                    </button>
                </SheetTrigger>
                <SheetContent side="left" className="border-none bg-primary">
                    <Link href="/" className="flex items-center gap-1">
                        <Logo theme="light" />
                    </Link>
                    <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
                        <SheetClose asChild>
                            <section className=" flex h-full flex-col gap-6 pt-16 text-white">
                                {SidebarLinks.map((item) => {
                                    const isActive = pathname === item.route ? true : false;
                                    return (
                                        <SheetClose asChild key={item.route}>
                                            <Link
                                                href={item.route}
                                                key={item.label}
                                                className={cn(
                                                    'flex gap-4 items-center p-4 rounded-lg w-full max-w-60',
                                                    {
                                                        'bg-accent': isActive,
                                                    }
                                                )}
                                            >
                                                <img
                                                    src={item.imgURL}
                                                    alt={item.label}
                                                    width={20}
                                                    height={20}
                                                />
                                                <p className="font-semibold">{item.label}</p>
                                            </Link>
                                        </SheetClose>
                                    );
                                })}
                            </section>
                        </SheetClose>
                    </div>
                </SheetContent>
            </Sheet>
        </section>
    )
}