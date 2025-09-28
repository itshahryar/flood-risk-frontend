"use client";

import Link from "next/link";
import { ArrowDown, MapPin, Image, ShieldCheck, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

  // Features
  const features = [
    {
      title: "AI-Powered Image Analysis",
      description:
        "Upload images of terrain or flood-prone areas for AI-powered flood risk assessment. Provides Risk Level, Recommendations, and AI Analysis.",
      icon: <Image className="h-6 w-6 text-emerald-600" />,
    },
    {
      title: "AI-Powered Coordinates Analysis",
      description:
        "Analyze flood risk using latitude and longitude coordinates. Shows Elevation, Distance From Water, overall Risk Level and Solutions",
      icon: <MapPin className="h-6 w-6 text-emerald-600" />,
    },
    {
      title: "Blog: Reducing Food Waste During Flood Relief",
      description:
        "Insights from the Blog 'Reducing Food Waste During Flood Relief: Why It Matters More Than We Think'. Learn tips on safe packaging, pre-positioning, suitable foods, cold chain solutions, and digital tools to minimize food waste during flood relief operations.",
      icon: <ShieldCheck className="h-6 w-6 text-emerald-600" />,
    },
  ];

  const ctaCards = [
    {
      title: "AI-Powered Flood Detection",
      description:
        "Analyze flood risk using images or coordinates, view risk levels, elevation, distance from water, interactive map, and get actionable recommendations.",
      buttonText: "Start Flood Detection",
      buttonLink: "/flood-detection",
      icon: <ShieldCheck className="h-8 w-8 text-emerald-600 mb-4" />,
    },
    {
      title: "Flood Relief Insights",
      description:
        "Explore strategies from the Blog on reducing food waste during flood relief: safe packaging, pre-positioning, suitable foods, cold chain solutions, and digital tools.",
      buttonText: "Read Full Blog",
      buttonLink: "https://medium.com/@namranasir547/reducing-food-waste-during-flood-relief-why-it-matters-more-than-we-think-62330fde22d4",
      icon: <FileText className="h-8 w-8 text-emerald-600 mb-4" />,
    },
  ];

export default function Home() {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById("features-section");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <motion.h2
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-3xl md:text-4xl font-bold text-slate-700"
              >
                Welcome to{" "}
                <span className="text-emerald-600">Flood Aware!</span>
              </motion.h2>

              <Badge
                variant="outline"
                className="bg-emerald-100 border-emerald-300 px-4 py-2 text-emerald-700 text-sm font-medium"
              >
                AI-Driven Flood Risk Detection
              </Badge>

              <h1 className="text-2xl md:text-5xl font-bold leading-tight text-slate-700">
                Stay Safe, Stay Informed <br />
                <span className="text-emerald-600">anytime, anywhere</span>
              </h1>

              <p className="text-gray-600 text-lg md:text-xl max-w-md">
                Analyze your surroundings and prepare for flood risks with our
                AI-powered detection and Google Maps integration.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={scrollToFeatures}
                  size="lg"
                  className="bg-emerald-600 text-white hover:bg-emerald-700 cursor-pointer"
                >
                  Explore Features <ArrowDown className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Hero Video */}
            <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
              <video
                src="/flood.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features-section" className="py-30 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-700">
              Features & Insights
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our platform helps communities assess flood risks through AI-powered image and coordinates analysis, while also providing practical guidance from real-world insights, during flood relief operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-white border border-emerald-200 hover:shadow-lg hover:border-emerald-400 transition-all duration-300"
              >
                <CardHeader className="pb-2">
                  <div className="bg-emerald-100 p-3 rounded-lg w-fit mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900 -mb-2">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {ctaCards.map((card, index) => (
              <Card
                key={index}
                className="bg-gradient-to-r from-emerald-50 to-emerald-100 border-emerald-200"
              >
                <CardContent className="p-8 md:p-12 lg:p-16 relative overflow-hidden">
                  <div className="relative z-10">
                    {/* Title with Icon */}
                    <div className="flex items-center gap-4 mb-3">
                      <div className="mt-3">
                      {card.icon}
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-slate-700">
                        {card.title}
                      </h2>
                    </div>

                    {/* Description */}
                    <p className="text-lg text-gray-600 mb-6">{card.description}</p>

                    {/* Button */}
                    {card.buttonLink.startsWith("http") ? (
                      <Button
                        asChild
                        size="lg"
                        className="bg-emerald-600 text-white hover:bg-emerald-700"
                      >
                        <a href={card.buttonLink} target="_blank" rel="noopener noreferrer">
                          {card.buttonText}
                        </a>
                      </Button>
                    ) : (
                      <Button
                        asChild
                        size="lg"
                        className="bg-emerald-600 text-white hover:bg-emerald-700"
                      >
                        <Link href={card.buttonLink}>{card.buttonText}</Link>
                      </Button>
                    )}
                  </div>

                  {/* Decorative blobs */}
                  <div className="absolute right-0 top-0 w-[200px] h-[200px] bg-emerald-200 rounded-full blur-3xl -mr-10 -mt-10"></div>
                  <div className="absolute left-0 bottom-0 w-[150px] h-[150px] bg-emerald-100 rounded-full blur-3xl -ml-5 -mb-5"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
