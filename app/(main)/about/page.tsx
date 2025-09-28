"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";

export default function About() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false }) // autoplay, never stop
  );

  return (
    <div>
      {/* Carousel Section */}
      <section className="pt-2">
        <div className="w-full">
          <Carousel
            className="w-full"
            plugins={[plugin.current]}
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {[
                { src: "/flood1.png", alt: "Smart Tools for Flood Awareness & Preparedness" },
                { src: "/flood2.jpg", alt: "Communities affected by floods" },
                { src: "/flood3.png", alt: "Challenges Bring Us Closer" },
              ].map((image, index) => (
                <CarouselItem key={index} className="w-full">
                  <Card className="overflow-hidden rounded-2xl border-0 shadow-none">
                    <CardContent className="flex items-center justify-center p-0 h-80 md:h-96">
                      <div className="relative w-full h-full overflow-hidden rounded-2xl">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover w-full h-full"
                          priority={index === 0}
                          sizes="100vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl"></div>
                        <div className="absolute bottom-4 left-4 text-white">
                          <p className="text-sm md:text-base font-medium">
                            {image.alt}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 opacity-80 hover:opacity-100 cursor-pointer" />
            <CarouselNext className="right-2 opacity-80 hover:opacity-100 cursor-pointer" />
          </Carousel>
        </div>
      </section>

      {/* About Section - Full Width */}
      <section className="py-14 px-6">
        <div className="w-full">
          <h1 className="text-3xl md:text-5xl font-bold text-emerald-600 mb-8">
            About FloodAware
          </h1>
          
          {/* About the App */}
          <div className="mb-10">
            <p className="text-lg leading-relaxed mb-6">
              <span className="font-bold">FloodAware is an AI-powered flood detection system</span> that helps communities prepare for and respond to flood emergencies. 
              Our platform allows you to <span className="font-semibold">upload images, analyze risk levels, and plan your safety measures</span> with advanced AI algorithms.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              This is currently a <span className="font-semibold">prototype demonstrating the potential of AI in disaster management</span>. We&apos;re continuously working to improve 
              our AI models, enhance prediction accuracy, and expand our capabilities to serve communities better.
            </p>
            <p className="text-lg leading-relaxed">
              Our vision is to create a <span className="font-semibold">comprehensive tool that combines AI-powered data analysis with practical guidance</span> to save lives 
              and reduce the impact of flooding on vulnerable communities.
            </p>
          </div>
          
          {/* Problem/Reason Behind */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-emerald-700 mb-4 pb-2 border-b border-emerald-200">
              The Reason Behind FloodAware
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              <span className="font-semibold">Recent natural challenges</span> in our region highlighted several key needs:
            </p>
            <ul className="list-disc list-inside text-lg mb-4">
              <li><span className="font-semibold">Community awareness and preparedness</span> are crucial for resilience.</li>
              <li>The value of <span className="font-semibold">timely guidance and practical information</span> cannot be overstated.</li>
              <li>Support for <span className="font-semibold">collective efforts in response and recovery</span> strengthens communities.</li>
            </ul>
            <p className="text-lg leading-relaxed">
              Witnessing these challenges first-hand inspired us to create <span className="font-semibold">FloodAware</span>.  
              Our aim is to <span className="font-semibold">empower communities</span>, provide <span className="font-semibold">helpful guidance</span>, and complement the ongoing initiatives of local authorities and organizations.  
              By fostering <span className="font-semibold">awareness and preparedness</span>, we hope everyone can respond effectively and contribute positively to their communities.
            </p>
          </div>
          
          {/* Our Team and Story */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-emerald-700 mb-4 pb-2 border-b border-emerald-200">
              Our Team
            </h2>
            
            {/* Team Cards */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Team Member 1 */}
              <div className="bg-white p-6 rounded-2xl shadow-md border border-emerald-100">
                <div className="flex flex-col items-center mb-4">
                  <div className="w-24 h-24 rounded-full bg-emerald-100 mb-4 overflow-hidden border-4 border-emerald-200">
                    <Image
                      src="/shahryar.jpg" // Replace with your image path
                      alt="Software Developer"
                      width={96}
                      height={96}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-emerald-800">Muhammad Shahryar Amjad</h3>
                  <p className="text-emerald-600">BSCS Graduate & Associate Software Engineer</p>
                </div>
                  <p className="text-lg text-center">
                    Developed the <strong>technical foundation</strong> of FloodAware with expertise in AI and software development. 
                    Created the <strong>flood detection algorithms</strong> and platform <strong>infrastructure</strong>.
                  </p>
              </div>
              
              {/* Team Member 2 */}
              <div className="bg-white p-6 rounded-2xl shadow-md border border-emerald-100">
                <div className="flex flex-col items-center mb-4">
                  <div className="w-24 h-24 rounded-full bg-emerald-100 mb-4 overflow-hidden border-4 border-emerald-200">
                    <Image
                      src="/namra.png" // Replace with your image path
                      alt="Food Science Specialist"
                      width={96}
                      height={96}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-emerald-800">Namra Nasir</h3>
                  <p className="text-emerald-600">Food Science Graduate</p>
                </div>
                  <p className="text-lg text-center">
                    Contributed expertise by raising awareness around <strong>food waste</strong> and redirecting unused supplies 
                    to <strong>flood-affected communities</strong>. Shared insights through <strong>Blog</strong> on community-driven relief efforts.
                  </p>
              </div>
            </div>
            
            <p className="text-lg leading-relaxed">
              Together, we combined our diverse skills to create a <span className="font-semibold">comprehensive solution</span> that addresses both the technological 
              and humanitarian aspects of flood disaster management.
            </p>
          </div>
          
          {/* Our Mission */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-emerald-700 mb-4 pb-2 border-b border-emerald-200">
              Our Mission
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              Together, our shared vision led to the creation of FloodAware:{" "}
              <span className="font-bold text-emerald-700">
                a mission-driven platform powered by AI to detect flood risks,
                provide actionable insights, and support resilience.
              </span>
            </p>

            <p className="text-lg leading-relaxed">
              Our goal is simple yet powerful:{" "}
              <span className="font-bold">
                to empower communities with tools and knowledge
              </span>{" "}
              so they can prepare, respond, and recover faster in the face of
              natural disasters.
            </p>
          </div>
          
{/* What We Do */}
<div className="mb-10">
  <h2 className="text-2xl md:text-3xl font-bold text-emerald-700 mb-4 pb-2 border-b border-emerald-200">
    What We Do
  </h2>
  <div className="grid md:grid-cols-2 gap-6">
    <div className="bg-emerald-50 p-6 rounded-lg">
      <h3 className="text-xl font-bold text-emerald-800 mb-3">Develop Helpful Systems</h3>
      <p className="text-lg">
        We create practical and innovative systems that support communities in staying prepared and navigating challenges effectively.
      </p>
    </div>
    <div className="bg-emerald-50 p-6 rounded-lg">
      <h3 className="text-xl font-bold text-emerald-800 mb-3">Collect Donations</h3>
      <p className="text-lg">
        We coordinate resources and contributions to provide timely support and foster sustainable community growth.
      </p>
    </div>
    <div className="bg-emerald-50 p-6 rounded-lg">
      <h3 className="text-xl font-bold text-emerald-800 mb-3">Write Guidance Insights</h3>
      <p className="text-lg">
        We produce educational content and guidance to empower communities with knowledge and practical insights.
      </p>
    </div>
    <div className="bg-emerald-50 p-6 rounded-lg">
      <h3 className="text-xl font-bold text-emerald-800 mb-3">Community Support</h3>
      <p className="text-lg">
        We connect people with networks, resources, and collaborative initiatives to strengthen resilience and well-being.
      </p>
    </div>
  </div>
</div>

        </div>
      </section>
    </div>
  );
}
