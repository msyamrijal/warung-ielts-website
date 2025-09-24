'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Home, BookOpen, Users, Award, MapPin, Phone, Mail, PenTool, MessageCircle } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Beranda", icon: Home },
    { href: "/programs", label: "Program", icon: BookOpen },
    { href: "/camp", label: "IELTS Camp", icon: Users },
    { href: "/imitative-writing", label: "Imitative Writing", icon: PenTool },
    { href: "/facilities", label: "Fasilitas", icon: MapPin },
  ];

  return (
    <motion.nav 
      className="bg-white shadow-lg sticky top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <motion.div 
              className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <PenTool className="w-6 h-6 text-white" />
            </motion.div>
            <div>
              <div className="text-xl font-bold text-gray-900">Warung IELTS</div>
              <div className="text-xs text-gray-600">Kampung Inggris Pare</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div key={item.href} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-2 text-gray-700 hover:text-purple-600 transition-colors font-medium"
                  >
                    <IconComponent className="w-4 h-4" />
                    {item.label}
                  </Link>
                </motion.div>
              );
            })}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                <Phone className="w-4 h-4 mr-2" />
                Hubungi Kami
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                variant="outline" 
                className="border-green-500 text-green-600 hover:bg-green-50 hover:border-green-600"
                onClick={() => window.open('https://wa.me/6281234567890', '_blank')}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </motion.div>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button variant="ghost" size="icon">
                  <Menu className="w-6 h-6" />
                </Button>
              </motion.div>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <motion.div 
                className="flex flex-col gap-6 mt-8"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-2 pb-4 border-b">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                    <PenTool className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-gray-900">Warung IELTS</div>
                    <div className="text-xs text-gray-600">Kampung Inggris Pare</div>
                  </div>
                </div>
                
                {navItems.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-3 text-gray-700 hover:text-purple-600 transition-colors font-medium p-3 rounded-lg hover:bg-purple-50"
                      >
                        <IconComponent className="w-5 h-5" />
                        {item.label}
                      </Link>
                    </motion.div>
                  );
                })}
                
                <div className="pt-4 border-t space-y-3">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                      <Phone className="w-4 h-4 mr-2" />
                      Hubungi Kami
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button 
                      variant="outline" 
                      className="w-full border-green-500 text-green-600 hover:bg-green-50 hover:border-green-600"
                      onClick={() => window.open('https://wa.me/6281234567890', '_blank')}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp
                    </Button>
                  </motion.div>
                  <div className="text-center text-sm text-gray-600">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <Phone className="w-4 h-4" />
                      <span>+62 812-3456-7890</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <MessageCircle className="w-4 h-4" />
                      <span>+62 812-3456-7890</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Mail className="w-4 h-4" />
                      <span>info@warungielts.com</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;