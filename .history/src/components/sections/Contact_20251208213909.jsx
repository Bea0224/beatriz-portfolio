import { useState, useRef } from "react"
import { RevealOnScroll } from "./RevealOnScroll"
import emailjs from "@emailjs/browser"

export const Contact = () => {

    const form = useRef();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })

    const SERVICE_ID = "service_90jsguc"
    const TEMPLATE_ID = "template_5avm9il"
    const PUBLIC_KEY = "OVHMv7uJcoHHZlTD4"

    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then(() => {
                alert("Message sent successfully")
                setFormData({ name: "", email: "", message: "" })
            })
            .catch(() => {
                alert("Ooops! Something went wrong. Please try again")
            })
    }

    return(
        <section id="contact" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="px-4 w-150">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        Get In Touch
                    </h2>

                    <form ref={form} className="space-y-6" onSubmit={handleSubmit}>
                        ...
                    </form>
                </div>
            </RevealOnScroll>
        </section>
    )
}
