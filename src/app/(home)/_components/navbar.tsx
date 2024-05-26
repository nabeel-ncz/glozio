import { SignedIn, UserButton } from "@clerk/nextjs"
import { MobileNav } from "./mobile-nav";
import { Logo } from "./logo";
import Link from "next/link";

export const Navbar = () => {
    return (
        <nav className="flex-between sticky z-10 w-full bg-dark-1 px-6 py-4 lg:px-10 border-b">
            <Link href="/" className="flex items-center gap-1">
                <Logo />
            </Link>
            <div className="flex-between gap-5">
                <SignedIn>
                    <UserButton
                        afterSignOutUrl="/sign-in"
                        appearance={
                            {
                                elements: {
                                    userButtonAvatarBox: "w-10 h-10"
                                }
                            }
                        }
                    />
                </SignedIn>
                <MobileNav />
            </div>
        </nav>
    )
}