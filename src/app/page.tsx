import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { HeartRateWidget } from '@/components/data-widgets/heart-rate-widget';
import { VisitorTrackerWidget } from '@/components/data-widgets/visitor-tracker-widget';
import { SensorDataWidget } from '@/components/data-widgets/sensor-data-widget';
import { Cpu, Factory, Server, Wifi } from 'lucide-react';
import { PowerUsageWidget } from '@/components/data-widgets/power-usage-widget';

const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background')!;
const clientLogos = PlaceHolderImages.filter(p => p.id.startsWith('client-logo'));
const useCaseImage = PlaceHolderImages.find(p => p.id === 'use-case-factory')!;

const solutions = [
  {
    icon: <Wifi className="h-8 w-8 text-accent" />,
    title: "IoT Platform",
    description: "Seamlessly connect and manage your devices with our robust and scalable IoT cloud platform. Built for enterprise-grade reliability."
  },
  {
    icon: <Server className="h-8 w-8 text-accent" />,
    title: "Data Analytics",
    description: "Turn raw sensor data into actionable insights with powerful visualization and analytics tools. Uncover trends and predict outcomes."
  },
  {
    icon: <Cpu className="h-8 w-8 text-accent" />,
    title: "Custom Hardware",
    description: "Tailor-made sensor hardware designed and built for your specific industrial applications. From prototype to production."
  }
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center text-center">
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover"
              priority
              data-ai-hint={heroImage.imageHint}
            />
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative z-10 container px-4 md:px-6">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4 font-headline text-white drop-shadow-lg">
                    Connecting Your World, One Sensor at a Time
                </h1>
                <p className="max-w-[700px] mx-auto text-lg md:text-xl text-neutral-200 mb-8">
                    iotrenetics provides end-to-end solutions for real-time data monitoring and analytics, empowering industries to make smarter, data-driven decisions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg" className="font-semibold">
                        <Link href="/solutions">Explore Solutions</Link>
                    </Button>
                    <Button asChild size="lg" variant="secondary" className="font-semibold">
                        <Link href="/about">Contact Us</Link>
                    </Button>
                </div>
            </div>
        </section>

        {/* Live Data Widgets */}
        <section className="py-12 md:py-20 bg-background/50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">Your World, Live.</h2>
              <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                Our platform processes millions of data points per second, providing you with instant visibility into your operations.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <HeartRateWidget />
              <VisitorTrackerWidget />
              <SensorDataWidget />
              <PowerUsageWidget />
            </div>
          </div>
        </section>
        
        {/* Solutions Overview */}
        <section className="py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Core Solutions</h2>
              <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                We offer a complete suite of tools to bring your physical world online. From device to dashboard, we've got you covered.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {solutions.map((solution, index) => (
                <Card key={index} className="flex flex-col items-center text-center p-8 transition-transform transform hover:-translate-y-2 duration-300">
                  <div className="bg-primary/10 p-4 rounded-full mb-4">
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-bold font-headline mb-2">{solution.title}</h3>
                  <p className="text-muted-foreground flex-grow">{solution.description}</p>
                   <Button variant="link" asChild className="mt-4 text-accent">
                    <Link href="/solutions">Learn More &rarr;</Link>
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Use Case Section */}
        <section className="py-12 md:py-20 bg-background/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="relative h-80 w-full rounded-lg overflow-hidden">
                <Image
                  src={useCaseImage.imageUrl}
                  alt={useCaseImage.description}
                  fill
                  className="object-cover"
                  data-ai-hint={useCaseImage.imageHint}
                />
              </div>
              <div>
                <div className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold mb-3">Featured Use Case</div>
                <h2 className="text-3xl font-bold font-headline mb-4">Smart Factory Optimization</h2>
                <p className="text-muted-foreground mb-6">
                  Learn how a leading manufacturer leveraged iotrenetics to reduce energy consumption by 15% and predict machinery maintenance needs with 99.5% accuracy, preventing costly downtime and improving production efficiency across their facilities.
                </p>
                <Button asChild>
                  <Link href="/solutions">Read Case Study</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials / Client Logos */}
        <section className="py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <h2 className="text-center text-2xl font-semibold tracking-tight text-muted-foreground mb-8">
              Trusted by innovative companies worldwide
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-70">
              {clientLogos.map((logo) => (
                <Image
                  key={logo.id}
                  src={logo.imageUrl}
                  alt={logo.description}
                  width={158}
                  height={48}
                  className="object-contain filter grayscale hover:grayscale-0 contrast-50 hover:contrast-100 transition-all duration-300"
                  data-ai-hint={logo.imageHint}
                />
              ))}
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
