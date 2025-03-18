import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import Link from "next/link";

export function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-primary">
              Atlanta Dump Rental
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#services" className="text-gray-600 hover:text-gray-900">
              Services
            </Link>
            <Link href="/#sizes" className="text-gray-600 hover:text-gray-900">
              Dumpster Sizes
            </Link>
            <Link href="/#pricing" className="text-gray-600 hover:text-gray-900">
              Pricing
            </Link>
            <Link href="/#contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </Link>
            <Button>
              <Phone className="mr-2 h-4 w-4" />
              (404) 555-0123
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}