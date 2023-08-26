import { Header } from "@/components/Header"
import { Form } from "@/components/Form"

export default function Contact() {

    return (
        <div className="flex flex-col w-screen h-screen">
            <Header />
            <div className="flex flex-col grow justify-center items-center gap-y-20">
                <Form />
            </div>
        </div>
    )
}