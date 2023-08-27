"use client";
import { useContext } from 'react';
import Link from "next/link";
import { Cloud } from "@/assets/icons/Cloud";
import { Sun } from "@/assets/icons/Sun";
import { Moon } from '@/assets/icons/Moon';
import { ThemeContext } from '@/contexts/theme-context';


export function Header() {

    const { newTheme, setNewTheme } = useContext(ThemeContext);


    const handleThemeToggle = () => {
        if(newTheme === 'light') {
            setNewTheme('dark');
        }
        else if(newTheme === 'dark') {
            setNewTheme('light');
        }
    };

    return (
        <div className={`w-full h-16 flex justify-between bg-gray-100 text-gray-950 px-2 ${newTheme === 'dark' ? 'bg-gray-800 text-gray-50' : ''}`}>
            <Link href='/' className="flex items-center">
                <div className="flex justify-start items-center w-40 gap-2">
                    <Cloud />
                    <h1 className={`text-xl  hover:text-yellow-400 ${newTheme === 'dark' ? 'text-gray-50' : ''}`}>ClimaApp</h1>
                </div>
            </Link>

            <label htmlFor="theme-switch" className="cursor-pointer flex items-center me-3">
                
                <input
                    type="checkbox"
                    id="theme-switch"
                    className="hidden"
                    defaultChecked={false}
                    onChange={handleThemeToggle}
                />
               
                <div className={`w-10 h-4 bg-gray-300 rounded-full relative ${newTheme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'}`}>
                    <div className={`w-6 h-6 bg-white rounded-full absolute left-0 -top-1 transform transition-transform duration-300 ${newTheme === 'dark' ? 'translate-x-6' : 'translate-x-0'}`}></div>
                </div>
                <span className={`ms-5 ${newTheme === 'dark' ? 'text-gray-50' : ''}`}>{newTheme === 'dark' ? <Moon /> : <Sun />}</span>
            </label>
        </div>
    )
}