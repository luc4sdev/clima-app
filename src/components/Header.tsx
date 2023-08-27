import Link from "next/link";
import { Cloud } from "@/assets/icons/Cloud";

export function Header() {
    return (
        <div className="w-full h-16 flex justify-between bg-gray-100 px-2">
            <Link href='/' className="flex items-center">
            <div className="flex justify-start items-center w-40 gap-2">
            <Cloud />
            <h1 className="text-xl text-gray-950 hover:text-yellow-400">ClimaApp</h1>
            </div>
            </Link>
        </div>
    )
}