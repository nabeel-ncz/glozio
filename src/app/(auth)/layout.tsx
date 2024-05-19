import { Logo } from "./_components/logo"

export default function AuthLayout({ children }: {
    children: React.ReactNode
}) {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center pt-14">
            <Logo/>
            {children}
        </div>
    )
}
