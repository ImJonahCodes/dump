import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Atlanta Dump Rental</h3>
            <p className="text-gray-400 mb-4">
              Your trusted partner for dumpster rentals in the greater Atlanta area.
              Serving both residential and commercial clients.
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="hover:text-blue-400">
                <Facebook />
              </Link>
              <Link href="https://instagram.com" className="hover:text-pink-400">
                <Instagram />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <Phone className="mr-2 h-4 w-4" />
                (404) 555-0123
              </p>
              <p className="flex items-center">
                <Mail className="mr-2 h-4 w-4" />
                contact@atlantadumprental.com
              </p>
              <p className="flex items-center">
                <MapPin className="mr-2 h-4 w-4" />
                Atlanta, GA
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Service Areas</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Atlanta</li>
              <li>Marietta</li>
              <li>Decatur</li>
              <li>Sandy Springs</li>
              <li>Roswell</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Atlanta Dump Rental. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}