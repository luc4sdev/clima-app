"use client"
import { ThemeContext } from "@/contexts/theme-context";
import { useState, useContext, ChangeEvent, FormEvent } from "react";

export function Form() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [loading, setLoading] = useState(false);

    const { newTheme } = useContext(ThemeContext);


    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: FormEvent) => {
        setLoading(true)
        e.preventDefault();
        console.log('Form Data:', formData);

        setTimeout(() => {
            setLoading(false)
          }, 2000);
    };

    return (
        <div className={`max-w-md mx-auto p-6 rounded-lg w-[95%] shadow-md ${newTheme === 'dark' ? 'bg-gray-800 text-gray-50' : 'bg-white'}`}>
            <form onSubmit={handleSubmit}>
                <div className={`mb-4 ${newTheme === 'dark' ? 'bg-gray-800' : ''}`}>
                    <div className="mb-2 text-center">
                        <h1 className="text-2xl font-semibold">Contato</h1>
                    </div>
                    <label htmlFor="name" className="block  font-bold mb-1">
                        Nome
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className={`w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 ${newTheme === 'dark' ? 'bg-gray-700' : ''}`}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block  font-bold mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className={`w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 ${newTheme === 'dark' ? 'bg-gray-700' : ''}`}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block  font-bold mb-1">
                        Mensagem
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        className={`w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 ${newTheme === 'dark' ? 'bg-gray-700' : ''}`}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="attachment" className="block  font-bold mb-1">
                        Anexo PDF
                    </label>
                    <input
                        type="file"
                        accept="application/pdf"
                        id="attachment"
                        name="attachment"
                        className="w-full"
                    />
                </div>
                <div className="mt-5 text-center">
                    <button
                        type="submit"
                        className={`bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-1/2 h-10 relative ${newTheme === 'dark' ? 'bg-gray-600 hover:bg-gray-700 text-gray-50' : ''}`}
                        disabled={loading}
                    >
                        {loading ?
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <div className="animate-spin h-5 w-5 border-t-2 border-gray-50 border-opacity-100 rounded-full"></div>
                            </div>
                         : 'Enviar'}
                        
                    </button>

                </div>
            </form>
        </div>
    )
}