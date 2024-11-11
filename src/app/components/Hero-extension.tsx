"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Stethoscope, Activity, ClipboardList, Star } from "lucide-react";

const SubHeroExtension = () => {
  const component = useRef(null);
  const tl = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial setup - hide elements
      gsap.set(".feature-card", { opacity: 0, y: 100 });
      gsap.set(".partner-logo", { opacity: 0, scale: 0.8 });
      gsap.set(".testimonial-card", { opacity: 0, x: -50 });
      gsap.set(".cta-section", { opacity: 0 });
      gsap.set(".floating-circle", { scale: 0 });

      // Trusted By Section Animation
      gsap.to(".section-title", {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".section-title",
          start: "top bottom-=100",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(".partner-logo", {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".partner-logo",
          start: "top bottom-=50",
          toggleActions: "play none none reverse",
        },
      });

      // Feature Cards Animation
      gsap.to(".feature-card", {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".feature-card",
          start: "top bottom-=100",
          toggleActions: "play none none reverse",
        },
      });

      // Testimonial Cards Animation
      gsap.to(".testimonial-card", {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".testimonial-card",
          start: "top bottom-=100",
          toggleActions: "play none none reverse",
        },
      });

      // CTA Section Animation
      const ctaTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".cta-section",
          start: "top bottom-=100",
          toggleActions: "play none none reverse",
        },
      });

      ctaTimeline
        .to(".cta-section", {
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        })
        .to(
          ".floating-circle",
          {
            scale: 1,
            duration: 1,
            stagger: 0.2,
            ease: "elastic.out(1, 0.3)",
          },
          "-=0.5"
        );

      // Hover animations for feature cards
      const featureCards = document.querySelectorAll(".feature-card");
      featureCards.forEach((card) => {
        const icon = card.querySelector(".feature-icon");
        const content = card.querySelector(".feature-content");

        card.addEventListener("mouseenter", () => {
          gsap.to(icon, {
            scale: 1.1,
            rotation: 360,
            duration: 0.4,
          });
          gsap.to(content, {
            y: -5,
            duration: 0.3,
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(icon, {
            scale: 1,
            rotation: 0,
            duration: 0.4,
          });
          gsap.to(content, {
            y: 0,
            duration: 0.3,
          });
        });
      });
    }, component);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={component} className="bg-white">
      {/* Trusted By Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 section-title">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Trusted By Leading Healthcare Institutions
            </h2>
            <p className="text-gray-600">
              Partnering with the best to deliver exceptional care
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {[1, 2, 3, 4].map((index) => (
              <div
                key={index}
                className="partner-logo w-32 h-12 bg-gray-200 rounded flex items-center justify-center"
              >
                <span className="text-gray-500 font-medium">
                  Partner {index}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12 section-title">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comprehensive Healthcare Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need for your health journey, all in one place
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Stethoscope className="w-6 h-6 text-blue-600" />,
                title: "Expert Consultations",
                description:
                  "Connect with specialized healthcare professionals for personalized care and treatment plans.",
                color: "blue",
                link: "/consultations",
              },
              {
                icon: <Activity className="w-6 h-6 text-green-600" />,
                title: "Health Monitoring",
                description:
                  "Track your vital signs, medications, and health metrics with our advanced monitoring tools.",
                color: "green",
                link: "/monitoring",
              },
              {
                icon: <ClipboardList className="w-6 h-6 text-purple-600" />,
                title: "Digital Health Records",
                description:
                  "Access your medical history, test results, and prescriptions anytime, anywhere.",
                color: "purple",
                link: "/records",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="feature-card bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div
                  className={`feature-icon w-12 h-12 bg-${feature.color}-100 rounded-lg flex items-center justify-center mb-4`}
                >
                  {feature.icon}
                </div>
                <div className="feature-content">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <Link
                    href={feature.link}
                    className="text-blue-600 font-medium hover:text-blue-700 inline-flex items-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12 section-title">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Patients Say
            </h2>
            <p className="text-xl text-gray-600">
              Real experiences from people who trust us with their health
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Patient",
                image: "/logos/logo1.svg",
                content:
                  "The virtual consultations saved me so much time. The doctors were professional and thorough.",
              },
              {
                name: "Michael Chen",
                role: "Patient",
                image: "/placeholder/64",
                content:
                  "Having all my health records in one place makes managing my healthcare so much easier.",
              },
              {
                name: "Emily Rodriguez",
                role: "Patient",
                image: "/placeholder/64",
                content:
                  "The 24/7 support team is amazing. They're always there when you need them.",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="testimonial-card bg-white rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={64}
                    height={64}
                    className="rounded-full"
                  />
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600">{testimonial.content}</p>
                <div className="flex items-center mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="cta-section bg-blue-600 rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-blue-700 opacity-50" />
              <div className="floating-circle absolute -top-24 -right-24 w-48 h-48 bg-blue-500 rounded-full opacity-50" />
              <div className="floating-circle absolute -bottom-24 -left-24 w-48 h-48 bg-blue-500 rounded-full opacity-50" />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Start Your Health Journey Today
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join thousands of satisfied patients who have taken control of
                their health with our platform
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/signup"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Get Started
                </Link>
                <Link
                  href="/contact"
                  className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SubHeroExtension;
