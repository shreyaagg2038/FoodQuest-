import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo + Brand */}
        <div className="flex items-center gap-3">
          <div className="bg-orange-600 text-white text-lg font-bold px-3 py-2 rounded-lg shadow-md">
            FQ
          </div>
          <span className="text-xl font-semibold text-white">FoodQuest</span>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-400">
          © 2025 FoodQuest Limited. All rights reserved.
        </div>

        {/* Social Links */}
        <div className="flex gap-5">
          <a href="#" className="hover:text-orange-500 transition-colors">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-orange-500 transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-orange-500 transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-orange-500 transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}