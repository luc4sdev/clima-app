"use client"
import { useEffect, useState } from "react";

interface Address {
    display_name: string;
}

export function SearchLocation() {

    const [street, setStreet] = useState<string>('')
    const [addresses, setAddresses] = useState<Address[]>([]);


    useEffect(() => {
        const fetchAddresses = async () => {
            try {
                const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${street}&format=json`);
                const data: Address[] = await response.json();
                setAddresses(data);
            } catch (error) {
                console.error('Error searching addresses:', error);
            }
        };

        if (street.length >= 3) {
            fetchAddresses();
        } else {
            setAddresses([]);
        }
    }, [street]);


    return (
        <div className="flex justify-center items-center w-full">
            <div className="bg-white rounded-lg shadow-md p-6 lg:w-1/3 flex flex-col justify-center">
                <h1 className="text-xl font-semibold mb-4">Insira a rua:</h1>
                <input
                    type="text"
                    className="border rounded-lg p-2 focus:outline-none focus:border-blue-400"
                    placeholder="Rua Sete de Setembro"
                    value={street}
                    onChange={e => setStreet(e.target.value)}
                />

                <div className="max-h-60 overflow-y-auto mt-5">
                    <ul className="list-disc pl-6 space-y-2">
                        {addresses.map((address, index) => (
                            <li key={index} className="text-gray-700">
                                {address.display_name}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}