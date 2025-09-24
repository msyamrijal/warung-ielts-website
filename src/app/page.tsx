'use client';

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PenTool, Users, Clock, Award, Home, Star, BookOpen, Target, MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <motion.div 
          className="container mx-auto px-4 py-20 md:py-32"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                    Pelopor Metode Imitative Writing
                  </Badge>
                </motion.div>
                <motion.h1 
                  className="text-4xl md:text-6xl font-bold leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  Warung IELTS
                  <motion.span 
                    className="block text-purple-200"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    Master IELTS dengan Metode Unik
                  </motion.span>
                </motion.h1>
                <motion.p 
                  className="text-xl md:text-2xl text-purple-100 max-w-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  Pelopor metode imitative writing dan skills IELTS lainnya. Program intensif dengan pendekatan unik untuk hasil maksimal.
                </motion.p>
              </motion.div>
              
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50 text-lg px-8 py-3">
                    <PenTool className="w-5 h-5 mr-2" />
                    Mulai Belajar
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-3">
                    Konsultasi Gratis
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div 
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: "4", label: "Skills IELTS" },
                    { value: "6x", label: "Pertemuan/Minggu" },
                    { value: "1:1", label: "Mentoring" },
                    { value: "100%", label: "Focus IELTS" }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      className="text-center"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <motion.div 
                        className="text-4xl font-bold text-white"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                      >
                        {item.value}
                      </motion.div>
                      <div className="text-purple-200">{item.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mengapa Memilih Warung IELTS?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pengalaman belajar IELTS terbaik dengan metode imitative writing pioneer di Indonesia
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: PenTool,
                title: "Metode Imitative Writing",
                description: "Pelopor metode imitative writing yang terbukti efektif untuk meningkatkan skor writing IELTS"
              },
              {
                icon: Target,
                title: "Focus IELTS Saja",
                description: "Spesialisasi 100% pada persiapan IELTS untuk hasil yang lebih maksimal dan terarah"
              },
              {
                icon: Users,
                title: "Mentoring Personal",
                description: "Bimbingan 1:1 dengan pengajar berpengalaman untuk progress yang lebih personal"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow h-full">
                  <CardHeader>
                    <motion.div 
                      className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <feature.icon className="w-8 h-8 text-purple-600" />
                    </motion.div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* IELTS Skills Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              4 Skills IELTS yang Kami Kuasai
            </motion.h2>
            <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
              Master semua komponen IELTS dengan metode pembelajaran yang terstruktur dan efektif
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: BookOpen,
                title: "Reading",
                description: "Teknik membaca cepat dan pemahaman teks akademik"
              },
              {
                icon: Users,
                title: "Writing",
                description: "Metode imitative writing untuk Task 1 & Task 2"
              },
              {
                icon: PenTool,
                title: "Listening",
                description: "Latihan listening dengan berbagai aksen dan kecepatan"
              },
              {
                icon: Target,
                title: "Speaking",
                description: "Practice speaking dengan native speaker simulation"
              }
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 h-full">
                  <CardHeader className="text-center">
                    <motion.div 
                      className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                    >
                      <skill.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <CardTitle className="text-lg text-white">{skill.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-indigo-100 text-sm text-center">
                      {skill.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-center text-white"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Siap Mencetak Skor IELTS Tinggi?
            </motion.h2>
            <motion.p 
              className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Bergabunglah dengan ratusan siswa yang telah berhasil mencetak skor IELTS impian mereka bersama Warung IELTS
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50 text-lg px-8 py-3">
                  <PenTool className="w-5 h-5 mr-2" />
                  Daftar Sekarang
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-3">
                  Hubungi Kami
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 2 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Button
          size="lg"
          className="bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 p-0 shadow-lg"
          onClick={() => window.open('https://wa.me/6281234567890', '_blank')}
        >
          <MessageCircle className="w-8 h-8" />
        </Button>
      </motion.div>
    </div>
  );
}