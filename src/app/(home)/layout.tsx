import { Sidebar } from "./_components/sidebar";
import { Navbar } from "./_components/navbar";
import { StreamProvider } from "@/provider/stream-provider";

export default function HomeLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <main className="relative">
            <Navbar />
            <div className="flex">
                <Sidebar />
                <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-6 max-md:pb-14 sm:px-14">
                    <div className="w-full">
                        <StreamProvider >
                            {children}
                        </StreamProvider>
                    </div>
                </section>
            </div>
        </main>
    )
}