import Link from "next/link";
import { Facebook, Instagram, Linkedin, MapPin, Phone, Twitter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


export default function Footer() {
  return (
    <div className="bg-background p-2 md:p-0 mt-20">
      <div className="container mx-auto py-20 text-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-2">
        <div className="space-y-5">
          <Link
            className="flex items-center space-x-2 text-xl md:text-2xl lg:text-3xl font-bold hover:text-primary/90 text-[#016AE7]"
            href="/"
          >
            Doctor Search
            
          </Link>

          <p>
            Connecting people through <br />
            unforgettable experiences. Discover, <br />
            book, and host events seamlessly.
          </p>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Phone className="text-blue-500"/>
              <p>+1 (555) 123-4567</p>
            </div>

            <div className="flex items-center gap-2">
              <MapPin className="text-blue-500"/>
              <p>123 Event Street, Suite 100 San <br /> Francisco, CA 94103</p>
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <h1 className="text-xl font-bold">Discover</h1>
          <div className="flex flex-col space-y-2">
            <Link href="/doctors">Explore Doctors</Link>
            <Link href="/profile">Profile</Link>
            
          </div>
        </div>

        <div className="space-y-5">
          <h1 className="text-xl font-bold">Company</h1>
          <div className="flex flex-col space-y-2">
            <Link href="/about">About</Link>
            <Link href="/contact-us">Contact Us</Link>
            <Link href="/faq">FAQ</Link>
          </div>
        </div>

        <div className="space-y-5">
          <h1 className="text-xl font-bold">Contact</h1>
          <div className="flex space-x-5">
            <div className="h-10 w-10 border flex justify-center items-center rounded-full">
              <a href="https://www.facebook.com" className="text-blue-500"><Facebook/></a>
            </div>
            <div className="h-10 w-10 border flex justify-center items-center rounded-full">
              <a href="https://x.com" className="text-blue-500"><Twitter/></a>
            </div>
            <div className="h-10 w-10 border flex justify-center items-center rounded-full">
              <a href="https://www.instagram.com" className="text-blue-500"><Instagram/></a>
            </div>
            <div className="h-10 w-10 border flex justify-center items-center rounded-full">
              <a href="https://www.linkedin.com" className="text-blue-500"><Linkedin/></a>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-muted-foreground/80">Subscribe to our newsletter for updates.</p>
            <Input placeholder="Enter your email"/>
            <Button className="bg-linear-to-r from-blue-800 to-cyan-500">Subscribe</Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <hr />
      </div>

      <div className="container mx-auto text-muted-foreground/80 flex justify-between pt-2 align-text-bottom">
        <div>
          <small>© 2024 EventPulse Inc. All rights reserved.</small>
        </div>
        <div className="flex space-x-2">
          <small>Privacy Policy</small>
          <small>Terms of Service</small>
        </div>
      </div>
    </div>
  );
}