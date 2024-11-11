"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Heart, Stethoscope, Calendar, Shield, UserCheck } from "lucide-react";

// Define a type for the service content
interface Service {
    title: string;
    description: string;
    icon: JSX.Element;
    link: string;
    color: string;
}

const Services: React.FC = () => {
    const servicesRef = useRef<HTMLDivElement>(null);

    const services: Service[] = [
        {
            title: "Cardiology",
            description:
                "Comprehensive heart care, including diagnostics, prevention, and treatment for various heart conditions.",
            icon: <Heart className="w-16 h-16 text-blue-600 mx-auto mb-4" />,
            link: "/cardiology",
            color: "bg-gradient-to-t from-blue-100",
        },
        {
            title: "General Medicine",
            description:
                "Access to experienced general practitioners for all your everyday health concerns and wellness checks.",
            icon: <Stethoscope className="w-16 h-16 text-green-600 mx-auto mb-4" />,
            link: "/general-medicine",
            color: "bg-gradient-to-t from-green-100",
        },
        {
            title: "Appointment Scheduling",
            description:
                "Effortlessly book and manage appointments with top doctors at your convenience.",
            icon: <Calendar className="w-16 h-16 text-orange-600 mx-auto mb-4" />,
            link: "/appointment-scheduling",
            color: "bg-gradient-to-t from-orange-100",
        },
        {
            title: "Emergency Care",
            description:
                "Quick and effective emergency care available for critical health conditions, anytime, day or night.",
            icon: <Shield className="w-16 h-16 text-red-600 mx-auto mb-4" />,
            link: "/emergency-care",
            color: "bg-gradient-to-t from-red-100",
        },
        {
            title: "Mental Health Support",
            description:
                "Professional counseling, therapy, and mental health services to improve your overall well-being.",
            icon: <UserCheck className="w-16 h-16 text-purple-600 mx-auto mb-4" />,
            link: "/mental-health",
            color: "bg-gradient-to-t from-purple-100",
        },
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".service-item",
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power2.out",
                }
            );
        }, servicesRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={servicesRef} className="bg-gray-50 py-20 lg:py-32">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-12 md:text-4xl lg:text-5xl">
                    Our Premium Healthcare Services
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="service-item text-center p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/40 relative"
                        >
                            <div
                                className={`absolute top-0 left-0 right-0 bottom-0 ${service.color} opacity-30 rounded-lg z-0`}
                            ></div>
                            {service.icon}
                            <h3 className="text-xl font-semibold text-gray-900 z-10">{service.title}</h3>
                            <p className="text-gray-600 mt-4 z-10">{service.description}</p>
                            <a
                                href={service.link}
                                className="inline-block mt-4 text-blue-600 font-semibold hover:text-blue-700 z-10"
                            >
                                Learn More
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
