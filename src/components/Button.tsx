"use client";   
import { useContext } from 'react';
import Link from "next/link";
import { ThemeContext } from '@/contexts/theme-context';

interface ButtonProps {
    title: string;
    url: string;

}

export function Button({ title, url } : ButtonProps) {

    const { newTheme } = useContext(ThemeContext);

    return (
        <Link href={url}>
            <button className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ${newTheme === 'dark' ? 'bg-gray-600 hover:bg-gray-800 text-gray-50' : ''}`}>
               {title}
            </button>
        </Link>
    )
}