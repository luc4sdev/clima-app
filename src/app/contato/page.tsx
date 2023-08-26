import { Header } from "@/components/Header"
import { Form } from "@/components/Form"

export default function Contact() {

    return (
        <div className="flex flex-col w-screen h-screen">
            <Header />
            <div className="bg-[url('../assets/img/bg-contact.jpg')]  bg-cover bg-repeat-y flex flex-col grow justify-center items-center gap-y-20">
                <Form />
            </div>
        </div>
    )
}