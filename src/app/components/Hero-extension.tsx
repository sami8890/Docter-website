// "use client";
// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import Image from "next/image";
// import Link from "next/link";
// import { ArrowRight, Stethoscope, Activity, ClipboardList, Star } from "lucide-react";

// // Register ScrollTrigger
// gsap.registerPlugin(ScrollTrigger);



// const SubHeroExtension = () => {
//   const component = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Initial setup - hide elements and set opacity to 0
//       gsap.set(".feature-card", { opacity: 0, y: 50 });
//       gsap.set(".partner-logo", { opacity: 0, scale: 0.8 });
//       gsap.set(".testimonial-card", { opacity: 0, x: -50 });
//       gsap.set(".cta-section", { opacity: 0, scale: 0.95 });

//       // Scroll-triggered animations with more refined easing
//       const animationOptions = {
//         opacity: 1,
//         y: 0,
//         scale: 1,
//         duration: 1,
//         ease: "power3.out"
//       };

//       // Animations for different sections
//       [
//         { selector: ".section-title", options: { ...animationOptions, y: 20 } },
//         {
//           selector: ".partner-logo",
//           options: {
//             ...animationOptions,
//             scale: 1,
//             stagger: 0.2,
//             ease: "back.out(1.7)"
//           }
//         },
//         {
//           selector: ".feature-card",
//           options: {
//             ...animationOptions,
//             stagger: 0.3
//           }
//         },
//         {
//           selector: ".testimonial-card",
//           options: {
//             ...animationOptions,
//             x: 0
//           }
//         },
//         {
//           selector: ".cta-section",
//           options: {
//             opacity: 1,
//             scale: 1,
//             duration: 1.2,
//             ease: "elastic.out(1, 0.3)"
//           }
//         }
//       ].forEach(({ selector, options }) => {
//         gsap.to(selector, {
//           ...options,
//           scrollTrigger: {
//             trigger: selector,
//             start: "top bottom-=100",
//             toggleActions: "play none none reverse"
//           }
//         });
//       });

//       // Enhanced hover animations
//       const featureCards = document.querySelectorAll(".feature-card");
//       featureCards.forEach((card) => {
//         const icon = card.querySelector(".feature-icon");
//         const content = card.querySelector(".feature-content");

//         card.addEventListener("mouseenter", () => {
//           gsap.timeline()
//             .to(icon, {
//               scale: 1.1,
//               rotation: 360,
//               duration: 0.4,
//               ease: "power1.inOut"
//             })
//             .to(content, {
//               y: -10,
//               boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
//               duration: 0.3
//             }, 0);
//         });

//         card.addEventListener("mouseleave", () => {
//           gsap.timeline()
//             .to(icon, {
//               scale: 1,
//               rotation: 0,
//               duration: 0.4
//             })
//             .to(content, {
//               y: 0,
//               boxShadow: "none",
//               duration: 0.3
//             }, 0);
//         });
//       });
//     }, component);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div ref={component} className="bg-white">
//       {/* Trusted By Section */}
//       <section className="py-16 bg-neutral-50">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12 section-title">
//             <h2 className="text-3xl font-bold text-neutral-900 mb-4">
//               Trusted By Leading Healthcare Institutions
//             </h2>
//             <p className="text-lg text-neutral-700">
//               Partnering with the best to deliver exceptional care
//             </p>
//           </div>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
//             {[1, 2, 3, 4].map((index) => (
//               <div
//                 key={index}
//                 className="partner-logo w-40 h-16 bg-white shadow-md rounded-lg flex items-center justify-center"
//               >
//                 <span className="text-neutral-700 font-semibold">
//                   Partner {index}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Features Grid */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="max-w-3xl mx-auto text-center mb-12 section-title">
//             <h2 className="text-4xl font-bold text-neutral-900 mb-4">
//               Comprehensive Healthcare Solutions
//             </h2>
//             <p className="text-xl text-neutral-700">
//               Everything you need for your health journey, all in one place
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: <Stethoscope className="w-8 h-8 text-primary-main" />,
//                 title: "Expert Consultations",
//                 description:
//                   "Connect with specialized healthcare professionals for personalized care and treatment plans.",
//                 link: "/consultations",
//               },
//               {
//                 icon: <Activity className="w-8 h-8 text-secondary-main" />,
//                 title: "Health Monitoring",
//                 description:
//                   "Track your vital signs, medications, and health metrics with our advanced monitoring tools.",
//                 link: "/monitoring",
//               },
//               {
//                 icon: <ClipboardList className="w-8 h-8 text-primary-light" />,
//                 title: "Digital Health Records",
//                 description:
//                   "Access your medical history, test results, and prescriptions anytime, anywhere.",
//                 link: "/records",
//               },
//             ].map((feature, index) => (
//               <div
//                 key={index}
//                 className="feature-card bg-white rounded-2xl p-6 shadow-lg border border-neutral-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
//               >
//                 <div className="feature-icon w-16 h-16 bg-neutral-100 rounded-xl flex items-center justify-center mb-6">
//                   {feature.icon}
//                 </div>
//                 <div className="feature-content">
//                   <h3 className="text-2xl font-bold text-neutral-900 mb-4">
//                     {feature.title}
//                   </h3>
//                   <p className="text-neutral-700 mb-6">{feature.description}</p>
//                   <Link
//                     href={feature.link}
//                     className="text-primary-main font-semibold hover:text-primary-dark inline-flex items-center group"
//                   >
//                     Learn More
//                     <ArrowRight className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1" />
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="py-16 bg-neutral-50">
//         <div className="container mx-auto px-4">
//           <div className="max-w-3xl mx-auto text-center mb-12 section-title">
//             <h2 className="text-4xl font-bold text-neutral-900 mb-4">
//               What Our Patients Say
//             </h2>
//             <p className="text-xl text-neutral-700">
//               Real experiences from people who trust us with their health
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 name: "Sarah Johnson",
//                 role: "Patient",
//                 image: "/placeholder/user1.jpg",
//                 content:
//                   "The virtual consultations saved me so much time. The doctors were professional and thorough.",
//               },
//               {
//                 name: "Michael Chen",
//                 role: "Patient",
//                 image: "/placeholder/user2.jpg",
//                 content:
//                   "Having all my health records in one place makes managing my healthcare so much easier.",
//               },
//               {
//                 name: "Emily Rodriguez",
//                 role: "Patient",
//                 image: "/placeholder/user3.jpg",
//                 content:
//                   "The 24/7 support team is amazing. They're always there when you need them.",
//               },
//             ].map((testimonial, index) => (
//               <div
//                 key={index}
//                 className="testimonial-card bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
//               >
//                 <div className="flex items-center mb-6">
//                   <Image
//                     src={testimonial.image}
//                     alt={testimonial.name}
//                     width={80}
//                     height={80}
//                     className="rounded-full object-cover"
//                   />
//                   <div className="ml-4">
//                     <h3 className="text-xl font-bold text-neutral-900">
//                       {testimonial.name}
//                     </h3>
//                     <p className="text-neutral-600">{testimonial.role}</p>
//                   </div>
//                 </div>
//                 <p className="text-neutral-700 mb-4">&quot;{testimonial.content}&quot;</p>
//                 <div className="flex items-center">
//                   {[...Array(5)].map((_, i) => (
//                     <Star
//                       key={i}
//                       className="w-5 h-5 text-yellow-500 fill-current"
//                     />
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16">
//         <div className="container mx-auto px-4">
//           <div className="cta-section bg-primary-main rounded-3xl p-12 text-center text-white relative overflow-hidden shadow-2xl">
//             <div className="absolute inset-0 bg-primary-dark opacity-50 blur-3xl" />
//             <div className="relative z-10">
//               <h2 className="text-4xl font-bold mb-6 text-white">
//                 Start Your Health Journey Today
//               </h2>
//               <p className="text-xl text-primary-contrastText opacity-80 mb-10 max-w-2xl mx-auto">
//                 Join thousands of satisfied patients who have taken control of
//                 their health with our platform
//               </p>
//               <div className="flex flex-wrap gap-4 justify-center">
//                 <Link
//                   href="/signup"
//                   className="bg-white text-primary-main px-10 py-4 rounded-lg font-semibold hover:bg-neutral-100 transition-colors text-lg"
//                 >
//                   Get Started
//                 </Link>
//                 <Link
//                   href="/contact"
//                   className="bg-secondary-main text-white px-10 py-4 rounded-lg font-semibold hover:bg-secondary-dark transition-colors text-lg"
//                 >
//                   Contact Us
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default SubHeroExtension;