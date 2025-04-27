import { useRef, useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin } from "react-icons/fa";


emailjs.init(import.meta.env.VITE_PUBLIC_KEY);

export const Contact = () => {
    const formRef = useRef(null); // Required for emailjs sendForm
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const handleSubmit = (e) => {
        e.preventDefault();

        // For debugging
        console.log("Sending with:", {
            serviceId: import.meta.env.VITE_SERVICE_ID,
            templateId: import.meta.env.VITE_TEMPLATE_ID,
            publicKey: import.meta.env.VITE_PUBLIC_KEY
        });

        emailjs
            .sendForm(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                formRef.current,  // Make sure you're passing the form element
                import.meta.env.VITE_PUBLIC_KEY
            )
            .then((result) => {
                console.log("Success:", result.text);
                alert("Message Sent!");
                setFormData({ name: "", email: "", message: "" });
            })
            .catch((error) => {
                console.error("Error:", error.text);
                alert("Oops! Something went wrong. Please try again.");
            });
    };


    return (
        <section
            id="contact"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-purple-400 bg-clip-text text-transparent text-center">
                        Get In Touch
                    </h2>
                    <form
                        ref={formRef}
                        className="space-y-6"
                        onSubmit={handleSubmit}
                    >
                        <div className="relative">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-purple-500 focus:bg-purple-500/5"
                                placeholder="Name..."
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        name: e.target.value,
                                    })
                                }
                            />
                        </div>

                        <div className="relative">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-purple-500 focus:bg-purple-500/5"
                                placeholder="example@gmail.com"
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        email: e.target.value,
                                    })
                                }
                            />
                        </div>

                        <div className="relative">
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={5}
                                value={formData.message}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-purple-500 focus:bg-purple-500/5"
                                placeholder="Your Message..."
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        message: e.target.value,
                                    })
                                }
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-purple-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(147,51,234,0.4)]"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                <div className="flex justify-center gap-6 mt-8 text-3xl text-purple-400">
                    <a
                        href="https://github.com/xDanielleT"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-purple-300 transition-colors"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/danielle-turner680-/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-purple-300 transition-colors"
                    >
                        <FaLinkedin />
                    </a>
                </div>

            </RevealOnScroll>
        </section>
    );
};
