import Link from "next/link";
import { Activity, Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto max-w-screen-2xl px-4">
        <div className="flex flex-col-reverse justify-between gap-8 pb-8 pt-12 md:flex-row">
          <div className="flex flex-col items-center gap-2 text-center md:items-start md:text-left">
             <Link href="/" className="flex items-center gap-2 font-bold text-lg font-headline">
                <Activity className="h-6 w-6 text-accent" />
                SensorSight
              </Link>
            <p className="text-sm text-muted-foreground">
              Real-time data solutions for a connected world.
            </p>
            <p className="text-xs text-muted-foreground/70">
              © {new Date().getFullYear()} SensorSight Inc. All rights reserved.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 text-sm sm:grid-cols-3">
            <div>
              <h3 className="font-headline font-semibold">Products</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="/solutions" className="text-muted-foreground hover:text-foreground">IoT Platform</Link></li>
                <li><Link href="/solutions" className="text-muted-foreground hover:text-foreground">Data Analytics</Link></li>
                <li><Link href="/solutions" className="text-muted-foreground hover:text-foreground">Sensors</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-headline font-semibold">Company</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="/about" className="text-muted-foreground hover:text-foreground">About Us</Link></li>
                <li><Link href="/about" className="text-muted-foreground hover:text-foreground">Careers</Link></li>
                <li><Link href="/about" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-headline font-semibold">Connect</h3>
              <div className="mt-4 flex items-center justify-center gap-4 md:justify-start">
                <Link href="#" aria-label="Github"><Github className="h-5 w-5 text-muted-foreground hover:text-foreground" /></Link>
                <Link href="#" aria-label="Twitter"><Twitter className="h-5 w-5 text-muted-foreground hover:text-foreground" /></Link>
                <Link href="#" aria-label="LinkedIn"><Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground" /></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
