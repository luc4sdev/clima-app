import { Header } from "@/components/Header"
import { SearchLocation } from "@/components/SearchLocation"

export default function Search() {
    return (
        <div className="flex flex-col w-screen h-screen">
            <Header />
            <div className="flex flex-col grow justify-center items-center gap-y-20">
                <SearchLocation />
            </div>
        </div>
    )
}