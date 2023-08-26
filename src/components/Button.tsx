import Link from "next/link";

interface ButtonProps {
    title: string;
    url: string;

}

export function Button({ title, url } : ButtonProps) {
    return (
        <Link href={url}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
               {title}
            </button>
        </Link>
    )
}