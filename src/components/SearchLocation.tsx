"use client"
import { ThemeContext } from "@/contexts/theme-context";
import { useEffect, useState, useContext } from "react";

interface Address {
    display_name: string;
}

export function SearchLocation() {

    const [street, setStreet] = useState<string>('')
    const [addresses, setAddresses] = useState<Address[]>([]);
    const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

    const { newTheme } = useContext(ThemeContext);


    const fetchAddresses = async () => {
        try {
          const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${street}&format=json`);
          const data: Address[] = await response.json();
          setAddresses(data);
        } catch (error) {
          console.error('Error searching addresses:', error);
        }
      };
      
      useEffect(() => {
        if (street.length >= 3) {
          if (timer) {
            clearTimeout(timer);
          }

          const newTimer = setTimeout(() => {
            fetchAddresses();
          }, 500); 
          setTimer(newTimer);
        } else {
          setAddresses([]);
        }
      
        return () => {
          if (timer) {
            clearTimeout(timer);
          }
        };
      }, [street]);


    return (
        <div className="flex justify-center items-center w-full">
            <div className={` rounded-lg shadow-md p-6 lg:w-1/3 flex flex-col justify-center ${newTheme === 'dark' ? 'bg-gray-800 text-gray-50' : 'bg-white'}`}>
              <div className={`flex justify-center items-center mb-5 ${newTheme === 'dark' ? 'bg-gray-800' : ''}`}>
              <h1 className="text-2xl font-bold">Buscar Endereço</h1>
              </div>
                <h1 className="text-xl font-semibold mb-4">Insira a rua:</h1>
                <input
                    type="text"
                    className={`border rounded-lg p-2 focus:outline-none focus:border-blue-400 ${newTheme === 'dark' ? 'bg-gray-700' : ''}`}
                    placeholder="Rua Sete de Setembro"
                    value={street}
                    onChange={e => setStreet(e.target.value)}
                />

                <div className="max-h-60 overflow-y-auto mt-5">
                    <ul className="list-disc pl-6 space-y-2">
                        {addresses.map((address, index) => (
                            <li key={index} >
                                {address.display_name}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}