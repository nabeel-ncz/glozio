'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';

export const Sidebar = () => {
    const pathname = usePathname();
    return (
        <section className="sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-backgroundacc p-6 pt-28 text-white max-sm:hidden lg:w-[264px]">
            <div className="flex flex-1 flex-col gap-6">
                {SidebarLinks.map((item) => {
                    const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);
                    return (
                        <Link
                            href={item.route}
                            key={item.label}
                            className={cn(
                                'flex gap-4 items-center p-4 rounded-lg justify-start hover:bg-background',
                                {
                                    'bg-background': isActive,
                                }
                            )}
                        >
                            <img
                                src={item.imgURL}
                                alt={item.label}
                                width={24}
                                height={24}
                            />
                            <p className={"text-lg font-semibold max-lg:hidden hover:text-foreground"}>
                                {item.label}
                            </p>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
};

