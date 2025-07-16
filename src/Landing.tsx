import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const Landing = () => {
    return (
        <main className="bg-[#171f27] text-white min-h-screen overflow-x-hidden">
            {/* Hero Section */}
            <section className="px-6 py-20 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-6xl font-bold text-[#024dae]"
                >
                    Wakuaipa
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="mt-4 text-lg max-w-xl mx-auto text-gray-300"
                >
                    Sistema de Gestión para la Fundación Wayuu Taya
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="mt-8"
                >
                    <Button className="bg-[#5cdee5] text-[#0d3b6b] font-semibold">Ver funcionalidades</Button>
                </motion.div>
            </section>

            {/* Introducción + Imagen */}
            <section className="px-6 py-16 bg-[#0d3b6b]">
                <motion.h2
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl font-semibold text-[#5cdee5]"
                >
                    Introducción
                </motion.h2>
                <p className="mt-4 text-gray-200">
                    Wakuaipa nace para digitalizar y optimizar los procesos internos de la Fundación Wayuu Taya, facilitando la gestión de documentos, donaciones, personas e inventario.
                </p>
                <img
                    src="/equipo.png"
                    alt="Equipo de trabajo"
                    className="mt-6 rounded-lg w-full max-w-xl mx-auto shadow-lg"
                />
                <p className="mt-4 italic text-sm text-gray-400 text-center">
                    Desarrollado por estudiantes comprometidos con la innovación social.
                </p>
            </section>

            {/* Módulos del Sistema */}
            <section className="px-6 py-16">
                <motion.h2
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl font-semibold text-[#5cdee5] mb-6"
                >
                    Módulos del Sistema
                </motion.h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        "Donaciones",
                        "Inventario",
                        "Documentos",
                        "Personas",
                        "Almacenes",
                        "Reportes"
                    ].map((modulo, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-[#024dae] rounded-xl p-6 text-white shadow-md"
                        >
                            <h3 className="text-xl font-semibold">{modulo}</h3>
                            <p className="text-sm mt-2 text-gray-200">
                                Gestión eficiente y centralizada de {modulo.toLowerCase()}.
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Tecnología y SCRUM */}
            <section className="px-6 py-16 bg-[#0d3b6b]">
                <div className="grid md:grid-cols-2 gap-8 items-start">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-semibold text-[#5cdee5] mb-4">Tecnología utilizada</h2>
                        <ul className="list-disc pl-5 text-gray-200">
                            <li>React + Tailwind + shadcn/ui</li>
                            <li>NestJS y PostgreSQL</li>
                            <li>Framer Motion para animaciones</li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-semibold text-[#5cdee5] mb-4">Metodología SCRUM</h2>
                        <p className="text-gray-200">
                            El desarrollo se realizó aplicando SCRUM, con gestión de tareas en Jira, entregas parciales, planificación ágil y trabajo en equipo.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="px-6 py-10 bg-[#024dae] text-center text-sm text-white">
                <p>&copy; 2025 Wakuaipa. Desarrollado por estudiantes de Ingeniería de Sistemas.</p>
            </footer>
        </main>
    );
}
