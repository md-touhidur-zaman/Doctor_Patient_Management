import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  SearchIcon,
  Twitter,

} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";

// Navigation links array to be used in both desktop and mobile menus
const navigationLinks = [
  { active: true, href: "/",  label: "Home" },
  { href: "/doctor", label: "Doctor" },
  { href: "/patient", label: "Patient" },
];

export default function Navbar() {


  return (
    <div className="container mx-auto">
      <div className=" md:flex justify-between py-1 px-4 lg:px-0 hidden">
        <div className="flex items-center gap-2 ">
          <small className="text-sm flex items-center gap-2">
            <Mail className="text-blue-500" /> info@example.com
          </small>
          <small className="text-sm flex items-center gap-2">
            <Phone className="text-blue-500" /> +880 1774829480
          </small>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 p-2 rounded-full border flex justify-center items-center">
            <Facebook className="text-blue-500" />
          </div>
          <div className="h-10 w-10 p-2 rounded-full border flex justify-center items-center">
            <Twitter className="text-blue-500" />
          </div>
          <div className="h-10 w-10 p-2 rounded-full border flex justify-center items-center">
            <Instagram className="text-blue-500" />
          </div>
        </div>
      </div>

      <hr />
      
      <header className="px-4 lg:px-0">
        <div className="flex h-16 items-center justify-between gap-4 ">
          {/* Left side */}
          <div className="flex flex-1 items-center gap-2">
            {/* Mobile menu trigger */}
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  className="group size-8 md:hidden"
                  size="icon"
                  variant="ghost"
                >
                  <svg
                    className="pointer-events-none"
                    fill="none"
                    height={16}
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width={16}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="-translate-y-1.75 origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-315"
                      d="M4 12L20 12"
                    />
                    <path
                      className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                      d="M4 12H20"
                    />
                    <path
                      className="origin-center translate-y-1.75 transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-135"
                      d="M4 12H20"
                    />
                  </svg>
                </Button>
              </PopoverTrigger>
              <PopoverContent align="start" className="w-36 p-1 md:hidden">
                <NavigationMenu className="max-w-none *:w-full">
                  <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                    {navigationLinks.map((link) => {
                     
                      return (
                        <NavigationMenuItem className="w-full" key={link.label}>
                          <Link
                            className="flex-row items-center gap-2 py-1.5"
                            href={link.href}
                          >
                            <span>{link.label}</span>
                          </Link>
                        </NavigationMenuItem>
                      );
                    })}
                  </NavigationMenuList>
                </NavigationMenu>
              </PopoverContent>
            </Popover>
            {/* Logo */}
            <div className="flex items-center">
              <Link
                href={"/"}
                className="text-xl md:text-2xl lg:text-3xl font-bold hover:text-primary/90 text-[#016AE7]"
              >
                Doctor Search
              </Link>
            </div>
          </div>
          {/* Middle area */}
          <NavigationMenu className="max-md:hidden">
            <NavigationMenuList className="gap-10">
              {navigationLinks.map((link) => {
                return (
                  <NavigationMenuItem key={link.label}>
                    <Link
                    
                      className="flex-row items-center gap-2 py-1.5 font-medium text-foreground hover:text-primary hover:border-b"
                      href={link.href}
                    >
                      <span>{link.label}</span>
                    </Link>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
          {/* Right side */}
          <div className="flex flex-1 items-center justify-end gap-2">
            <div className="relative">
              <Input
                className="peer h-8 ps-8 pe-2"
                placeholder="Search..."
                type="search"
              />
              <div className="pointer-events-none absolute inset-y-0 inset-s-0 flex items-center justify-center ps-2 text-muted-foreground/80 peer-disabled:opacity-50">
                <SearchIcon size={16} />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
