import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    Heart,
    Package,
    FileText,
    Users,
    BarChart3,
    Warehouse,
    Target,
    CheckCircle,
    TrendingUp,
    Calendar,
    Code,
    Zap,
    ChevronDown,
    Github,
    Linkedin,
    Mail,
    ArrowRight,
    Database,
    Server,
} from "lucide-react"
import { motion } from "framer-motion"

export const Landing = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    const scrollToSection = (sectionId: string) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <div className="min-h-screen bg-[#171f27] text-white font-['manrope']">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#024dae]/20 to-[#0d3b6b]/40"></div>
                <div className="container mx-auto px-4 z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <div
                            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                        >
                            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-[#5cdee5] to-[#024dae] bg-clip-text text-transparent julius">
                                Wakuaipa
                            </h1>
                            <p className="text-xl w-3/4 mx-auto md:w-full  md:text-2xl mb-8 text-gray-300">Sistema de Gestión para la <span className="font-black">Fundación Wayuu Taya</span></p>
                            <Button
                                onClick={() => scrollToSection("funcionalidades")}
                                className="bg-[#ff8728]/80 hover:bg-[#ff8728] text-white !px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105"
                            >
                                Ver funcionalidades
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <ChevronDown className="h-8 w-8 text-[#5cdee5]" />
                </div>
            </section>

            {/* Introducción */}
            <section className="py-20 bg-gradient-to-b from-[#171f27] to-[#0d3b6b]/20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-8 text-[#5cdee5] julius">Introducción</h2>
                        <p className="text-lg text-gray-300 mb-12 leading-relaxed text-justify">
                            Wakuaipa es un sistema integral diseñado específicamente para optimizar la gestión de recursos y
                            operaciones de la Fundación Wayuu Taya. Nuestro compromiso es brindar una solución tecnológica que
                            facilite el trabajo humanitario y maximice el impacto social de cada donación y recurso disponible.
                        </p>
                        <div className="bg-[#0d3b6b]/30 rounded-2xl p-8 backdrop-blur-sm">
                            <div className="flex items-center justify-center mb-4">
                                <div className="w-16 h-16 bg-[#024dae]/35 rounded-full flex items-center justify-center">
                                    <Heart className="h-8 w-8 text-[#ff8728]" />
                                </div>
                            </div>
                            <p className="text-gray-300 text-justify text-lg">
                                <strong className="text-[#ff8728]">Nuestro compromiso:</strong> Desarrollar tecnología con propósito
                                social, facilitando la gestión eficiente de recursos para maximizar el impacto en las comunidades Wayuu.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Problema y Solución */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-12">
                            {/* Problema */}
                            <div className="space-y-6">
                                <h2 className="text-4xl font-bold text-[#ff8728] julius">¿Qué problema resolvemos?</h2>
                                <p className="text-gray-300 text-lg leading-relaxed text-justify">
                                    Las fundaciones y organizaciones sin fines de lucro enfrentan desafíos significativos en la gestión de
                                    donaciones, inventarios y documentación. La falta de sistemas centralizados genera pérdida de
                                    información, duplicación de esfuerzos y dificultades para generar reportes precisos sobre el impacto
                                    de sus actividades.
                                </p>
                            </div>

                            {/* Solución */}
                            <div className="space-y-6">
                                <h3 className="text-3xl font-bold text-[#5cdee5] julius">¿Cómo lo solucionamos?</h3>
                                <div className="space-y-4">
                                    {[
                                        { icon: Target, title: "Centralización", desc: "Toda la información en un solo lugar" },
                                        { icon: TrendingUp, title: "Trazabilidad", desc: "Seguimiento completo de recursos y donaciones" },
                                        { icon: Zap, title: "Automatización", desc: "Procesos optimizados y reportes automáticos" },
                                    ].map((item, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: i * 0.1, duration: 0.5 }}
                                            viewport={{ once: true }}
                                            className="bg-[#024dae] rounded-xl p-6 text-white shadow-md"
                                        >
                                            <div

                                                className="flex items-start space-x-4 p-4 bg-[#0d3b6b]/30 rounded-lg backdrop-blur-sm hover:bg-[#0d3b6b]/50 transition-all duration-300"
                                            >
                                                <div className="w-12 h-12 bg-[#024dae] rounded-lg flex items-center justify-center flex-shrink-0">
                                                    <item.icon className="h-6 w-6 text-white" />
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                                                    <p className="text-gray-300 text-sm">{item.desc}</p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            {/* Módulos del Sistema */}
            <section id="funcionalidades" className="py-20 bg-gradient-to-b from-transparent to-[#0d3b6b]/20" >
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4 text-[#5cdee5] julius">Módulos del Sistema</h2>
                        <p className="text-gray-300 text-lg">Funcionalidades completas para una gestión integral</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            { icon: Heart, title: "Donaciones", desc: "Gestión completa de donaciones y donantes", color: "#ff8728" },
                            { icon: Package, title: "Inventario", desc: "Control de stock y recursos disponibles", color: "#FFDB58" },
                            {
                                icon: FileText,
                                title: "Documentos",
                                desc: "Almacenamiento y organización documental",
                                color: "#F5F5F5",
                            },
                            { icon: Users, title: "Personas", desc: "Gestión de beneficiarios y voluntarios", color: "#00FFFF" },
                            { icon: BarChart3, title: "Reportes", desc: "Análisis y métricas de impacto", color: "#5cdee5" },
                            { icon: Warehouse, title: "Almacenes", desc: "Control de ubicaciones y distribución", color: "	#FF8243" },
                        ].map((module, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                                className="bg-[#024dae] rounded-xl p-6 text-white shadow-md"
                            >
                                <Card
                                    className="bg-[#0d3b6b]/30 border-[#024dae]/30 backdrop-blur-sm hover:bg-[#0d3b6b]/50 transition-all duration-300 hover:scale-105 group"
                                >
                                    <CardHeader className="text-center">
                                        <div
                                            className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                                            style={{ backgroundColor: `${module.color}20` }}
                                        >
                                            <module.icon className="h-8 w-8" style={{ color: module.color }} />
                                        </div>
                                        <CardTitle className="text-white text-xl">{module.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="text-gray-300 text-center">{module.desc}</CardDescription>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section >

            {/* Reportes y Panel */}
            <section className="py-20" >
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold mb-4 text-[#5cdee5] julius">Panel de Control y Reportes</h2>
                            <p className="text-gray-300 text-lg">Información clara para tomar mejores decisiones</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold text-[#ff8728] julius">Dashboard Inteligente</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    Nuestro panel de control proporciona una vista completa y en tiempo real de todas las operaciones de
                                    la fundación. Con gráficos interactivos y métricas clave, facilita la toma de decisiones estratégicas
                                    basadas en datos precisos.
                                </p>
                                <div className="space-y-3">
                                    {[
                                        "Métricas de donaciones en tiempo real",
                                        "Análisis de inventario y distribución",
                                        "Reportes de impacto social",
                                        "Indicadores de gestión operativa",
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-center space-x-3">
                                            <CheckCircle className="h-5 w-5 text-[#5cdee5] flex-shrink-0" />
                                            <span className="text-gray-300">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-[#024dae]/20 to-[#0d3b6b]/40 rounded-2xl p-8 backdrop-blur-sm">
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <span className="text-[#5cdee5]">Donaciones este mes</span>
                                        <Badge className="bg-[#ff8728] text-white">+15%</Badge>
                                    </div>
                                    <div className="h-2 bg-[#0d3b6b] rounded-full overflow-hidden">
                                        <div className="h-full w-3/4 bg-gradient-to-r from-[#5cdee5] to-[#024dae] rounded-full"></div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 mt-6">
                                        <div className="text-center p-4 bg-[#0d3b6b]/50 rounded-lg">
                                            <div className="text-2xl font-bold text-[#5cdee5]">1,247</div>
                                            <div className="text-sm text-gray-300">Beneficiarios</div>
                                        </div>
                                        <div className="text-center p-4 bg-[#0d3b6b]/50 rounded-lg">
                                            <div className="text-2xl font-bold text-[#ff8728]">89%</div>
                                            <div className="text-sm text-gray-300">Eficiencia</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            {/* Tecnología */}
            <section className="py-20 bg-gradient-to-b from-transparent to-[#0d3b6b]/20" >
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4 text-[#5cdee5] julius">Tecnología Moderna</h2>
                        <p className="text-gray-300 text-lg">Construido con las mejores herramientas del mercado</p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-3 gap-8 mb-12">
                            {[
                                { name: "React", desc: "Frontend moderno y reactivo", icon: Code },
                                { name: "NestJS", desc: "Backend robusto y escalable", icon: Server },
                                { name: "PostgreSQL", desc: "Base de datos confiable", icon: Database },
                            ].map((tech, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.1, duration: 0.5 }}
                                    viewport={{ once: true }}
                                    className="bg-[#024dae] rounded-xl p-6 text-white shadow-md"
                                >
                                    <div className="text-center group">
                                        <div className="w-20 h-20 mx-auto mb-4 bg-[#024dae]/20 rounded-2xl flex items-center justify-center group-hover:bg-[#024dae]/40 transition-all duration-300">
                                            <tech.icon className="h-10 w-10 text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-2">{tech.name}</h3>
                                        <p className="text-gray-300 text-sm">{tech.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="text-center bg-[#0d3b6b]/30 rounded-2xl p-8 backdrop-blur-sm">
                            <p className="text-gray-300 text-xl text-justify">
                                <strong className="text-[#ff8728]">Enfoque moderno:</strong> Utilizamos tecnologías de vanguardia para
                                garantizar un sistema rápido, seguro y escalable que crezca junto con las necesidades de la fundación.
                            </p>
                        </div>
                    </div>
                </div>
            </section >

            {/* Metodología SCRUM */}
            <section className="py-20" >
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4 text-[#5cdee5] julius">Metodología SCRUM</h2>
                        <p className="text-gray-300 text-lg">Desarrollo ágil para resultados efectivos</p>
                    </div>

                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: Calendar,
                                    title: "Planeación",
                                    desc: "Sprints organizados con objetivos claros y entregas incrementales",
                                    color: "#00FFFF",
                                },
                                {
                                    icon: Zap,
                                    title: "Desarrollo Ágil",
                                    desc: "Iteraciones rápidas con feedback continuo del cliente",
                                    color: "#FFDB58",
                                },
                                {
                                    icon: CheckCircle,
                                    title: "Revisiones",
                                    desc: "Evaluaciones constantes para garantizar calidad y funcionalidad",
                                    color: "#00FF00",
                                },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.1, duration: 0.5 }}
                                    viewport={{ once: true }}
                                    className="bg-[#024dae] rounded-xl p-6 text-white shadow-md"
                                >
                                    <div className="text-center group">
                                        <div
                                            className="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                                            style={{ backgroundColor: `${item.color}20` }}
                                        >
                                            <item.icon className="h-12 w-12" style={{ color: item.color }} />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                                        <p className="text-gray-300 leading-relaxed">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section >

            {/* Mensaje Final */}
            <section className="py-20 bg-gradient-to-b from-transparent to-[#0d3b6b]/20" >
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-8 text-[#5cdee5] julius">Nuestro Compromiso</h2>
                        <div className="bg-[#0d3b6b]/30 rounded-2xl p-12 backdrop-blur-sm ">
                            <p className="text-xl text-gray-300 mb-8 leading-relaxed text-justify">
                                Como equipo de desarrollo, nos enorgullece contribuir con nuestras habilidades técnicas a una causa
                                social tan importante. Wakuaipa representa nuestro compromiso con la innovación tecnológica al servicio
                                del bienestar comunitario.
                            </p>
                            <blockquote className="text-2xl font-bold text-white italic mb-8">
                                "Desarrollado con compromiso, innovación y propósito social."
                            </blockquote>
                            <div className="flex items-center justify-center">
                                <div className="w-16 h-16 bg-gradient-to-r from-[#5cdee5] to-[#024dae] rounded-full flex items-center justify-center">
                                    <Heart className="h-8 w-8 text-white" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            {/* Footer */}
            <footer className="py-16 bg-[#0d3b6b]/40 backdrop-blur-sm" >
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-3 gap-8 mb-8">
                            <div>
                                <h3 className="text-2xl font-bold text-[#5cdee5] mb-4 julius">Wakuaipa</h3>
                                <p className="text-gray-300 mb-4">
                                    Sistema de gestión desarrollado para optimizar las operaciones de la Fundación Wayuu Taya.
                                </p>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-[#ff8728] mb-4 julius">Universidad</h4>
                                <p className="text-gray-300">
                                    Proyecto desarrollado como parte del servicio comunitario del Politecnico Santiago Mariño.
                                </p>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-[#ff8728] mb-4 julius">Equipo de Desarrollo</h4>
                                <p className="text-gray-300 mb-4">
                                    Estudiantes comprometidos con la innovación tecnológica y el impacto social.
                                </p>
                                <div className="flex space-x-4">
                                    <Button variant="ghost" size="icon" className="text-[#5cdee5] hover:text-white hover:bg-[#024dae]/50">
                                        <Github className="h-5 w-5" />
                                    </Button>
                                    <Button variant="ghost" size="icon" className="text-[#5cdee5] hover:text-white hover:bg-[#024dae]/50">
                                        <Linkedin className="h-5 w-5" />
                                    </Button>
                                    <Button variant="ghost" size="icon" className="text-[#5cdee5] hover:text-white hover:bg-[#024dae]/50">
                                        <Mail className="h-5 w-5" />
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-[#024dae]/30 pt-8 text-center">
                            <p className="text-gray-400">© 2025 Wakuaipa. Desarrollado con ❤️ para la Fundación Wayuu Taya.</p>
                        </div>
                    </div>
                </div>
            </footer >
        </div >
    )
}
