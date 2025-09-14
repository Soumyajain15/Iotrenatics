import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

const solutionsData = [
  {
    id: "iot-platform",
    title: "Scalable IoT Platform",
    description: "Our cloud-native IoT platform is the backbone of your connected operations. It offers secure device connectivity, data ingestion, and management at any scale.",
    imageId: "solution-iot",
    features: [
      "MQTT/HTTPs protocols",
      "Over-the-Air (OTA) updates",
      "Device fleet management",
      "Real-time data stream processing",
    ],
    cta: "View Live Demo"
  },
  {
    id: "data-analytics",
    title: "Advanced Data Analytics",
    description: "Transform your raw sensor data into beautiful, insightful dashboards. Our analytics suite helps you identify trends, predict failures, and optimize performance.",
    imageId: "solution-analytics",
    features: [
      "Customizable dashboards",
      "Alerting and notifications",
      "Machine learning models",
      "Data export & API access",
    ],
    cta: "Explore Dashboards"
  },
  {
    id: "custom-hardware",
    title: "Bespoke Hardware Solutions",
    description: "When off-the-shelf isn't enough, our engineering team designs and manufactures custom sensors and gateways tailored to your unique requirements.",
    imageId: "solution-hardware",
    features: [
      "Rapid prototyping",
      "Low-power designs",
      "Multi-sensor integration",
      "Industrial-grade enclosures",
    ],
    cta: "Discuss a Project"
  }
]

export default function SolutionsPage() {
  return (
    <div className="container mx-auto max-w-screen-xl px-4 py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">Our Products and Services</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          We provide the building blocks for a smarter, more connected enterprise, from hardware to insights.
        </p>
      </div>

      <div className="space-y-16">
        {solutionsData.map((solution, index) => {
          const image = PlaceHolderImages.find(p => p.id === solution.imageId)!;
          return (
            <Card key={solution.id} className="overflow-hidden shadow-lg transition-shadow hover:shadow-xl bg-card">
              <div className={`grid md:grid-cols-2 gap-8 items-center`}>
                <div className={`p-8 ${index % 2 === 1 ? 'md:order-last' : ''}`}>
                  <h2 className="text-3xl font-bold font-headline mb-4">{solution.title}</h2>
                  <p className="text-muted-foreground mb-6">{solution.description}</p>
                  <ul className="space-y-2 mb-8">
                    {solution.features.map(feature => (
                      <li key={feature} className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-accent" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild>
                    <Link href="#">{solution.cta}</Link>
                  </Button>
                </div>
                <div className="relative h-64 md:h-full min-h-[300px]">
                  <Image 
                    src={image.imageUrl}
                    alt={image.description}
                    fill
                    className="object-cover"
                    data-ai-hint={image.imageHint}
                  />
                </div>
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
