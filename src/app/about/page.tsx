import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { MapPin, Phone, Mail } from 'lucide-react';

const teamMembers = [
  { name: 'Dr. Evelyn Reed', title: 'Founder & CEO', imageId: 'team-member-1' },
  { name: 'Marcus Thorne', title: 'Chief Technology Officer', imageId: 'team-member-2' },
  { name: 'Jian Li', title: 'Lead Hardware Engineer', imageId: 'team-member-3' },
  { name: 'Sofia Alvarez', title: 'Head of UX & Design', imageId: 'team-member-4' },
];

const mapImage = PlaceHolderImages.find(p => p.id === 'map-placeholder')!;

export default function AboutPage() {
  return (
    <>
      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-background/50">
        <div className="container max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Our Mission</h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            To empower industries with transparent, real-time data, transforming complex physical environments into simple, actionable digital insights. We believe in a future where data flows seamlessly from the physical to the digital world, enabling a more efficient, sustainable, and connected planet.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Meet the Innovators</h2>
            <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
              We are a passionate team of engineers, designers, and data scientists dedicated to pushing the boundaries of IoT.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => {
              const memberImage = PlaceHolderImages.find(p => p.id === member.imageId)!;
              return (
                <div key={member.name} className="text-center">
                  <div className="relative h-64 w-64 mx-auto mb-4">
                    <Image
                      src={memberImage.imageUrl}
                      alt={`Portrait of ${member.name}`}
                      fill
                      className="rounded-full object-cover"
                      data-ai-hint={memberImage.imageHint}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <h3 className="text-lg font-semibold font-headline">{member.name}</h3>
                  <p className="text-accent">{member.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Contact & Location Section */}
      <section className="py-16 md:py-24 bg-background/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Get in Touch</h2>
            <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
              We'd love to hear from you. Reach out to discuss your project or learn more about our solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
            <Card className="p-8">
              <h3 className="text-2xl font-bold font-headline mb-6">Contact Information</h3>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Our Office</h4>
                    <p>123 Innovation Drive, Tech City, 54321</p>
                  </div>
                </div>
                 <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Phone</h4>
                    <p>(123) 456-7890</p>
                  </div>
                </div>
                 <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <p>contact@iotrenetics.com</p>
                  </div>
                </div>
              </div>
            </Card>
            <Card className="overflow-hidden h-full">
              <div className="relative h-full min-h-[400px]">
                <Image 
                    src={mapImage.imageUrl}
                    alt={mapImage.description}
                    fill
                    className="object-cover"
                    data-ai-hint={mapImage.imageHint}
                />
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
