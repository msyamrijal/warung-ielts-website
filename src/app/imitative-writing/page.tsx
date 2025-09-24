'use client';

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PenTool, BookOpen, Users, Target, Award, Star, Clock, TrendingUp, CheckCircle } from "lucide-react";

const imitativeWritingSteps = [
  {
    step: 1,
    title: "Observasi & Analisis",
    description: "Mempelajari struktur, kosakata, dan gaya penulisan dari contoh-contoh berkualitas tinggi",
    icon: BookOpen,
    color: "blue"
  },
  {
    step: 2,
    title: "Imitasi Terbimbing",
    description: "Meniru pola dan struktur dengan bimbingan pengajar untuk memahami teknik writing",
    icon: Users,
    color: "green"
  },
  {
    step: 3,
    title: "Praktik Mandiri",
    description: "Menerapkan teknik yang telah dipelajari dalam menulis esai IELTS secara mandiri",
    icon: PenTool,
    color: "purple"
  },
  {
    step: 4,
    title: "Evaluasi & Perbaikan",
    description: "Mendapatkan feedback detail dan revisi untuk meningkatkan kualitas writing",
    icon: Target,
    color: "orange"
  }
];

const benefits = [
  {
    title: "Peningkatan Skor Cepat",
    description: "Metode terbukti dapat meningkatkan skor writing IELTS 1.0-2.0 band dalam waktu singkat",
    icon: TrendingUp
  },
  {
    title: "Pemahaman Struktur",
    description: "Menguasai struktur esai IELTS yang benar untuk Task 1 dan Task 2",
    icon: BookOpen
  },
  {
    title: "Vocabulary Advanced",
    description: "Mempelajari kosakata akademik dan penggunaannya dalam konteks yang tepat",
    icon: Award
  },
  {
    title: "Grammar Precision",
    description: "Memperbaiki kesalahan grammar dan meningkatkan akurasi penulisan",
    icon: CheckCircle
  }
];

const successStories = [
  {
    name: "Ahmad R.",
    initialScore: "5.5",
    finalScore: "7.5",
    duration: "6 minggu",
    quote: "Metode imitative writing benar-benar mengubah cara saya menulis esai IELTS. Sangat efektif!"
  },
  {
    name: "Siti N.",
    initialScore: "6.0",
    finalScore: "8.0",
    duration: "8 minggu",
    quote: "Akhirnya saya bisa mencetak skor writing 8.0 setelah mencoba berbagai metode lain."
  },
  {
    name: "Budi K.",
    initialScore: "5.0",
    finalScore: "7.0",
    duration: "4 minggu",
    quote: "Pendekatan step by step sangat membantu saya yang awalnya kesulitan dalam writing."
  }
];

export default function ImitativeWritingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 mb-4">
              Metode Unggulan
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Metode Imitative Writing
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Pelopor metode imitative writing di Indonesia. Teknik unik yang terbukti efektif untuk meningkatkan skor writing IELTS secara signifikan.
            </p>
          </div>
        </div>
      </section>

      {/* What is Imitative Writing */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Apa itu Metode Imitative Writing?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Metode Imitative Writing adalah teknik pembelajaran writing yang inovatif dikembangkan oleh Warung IELTS. Metode ini mengajarkan siswa untuk:
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Menganalisis contoh esai IELTS berkualitas tinggi",
                  "Memahami pola dan struktur penulisan yang efektif",
                  "Meniru teknik writing dengan pendekatan terstruktur",
                  "Mengembangkan gaya writing personal yang akademis",
                  "Menerapkan vocabulary dan grammar yang tepat"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  <PenTool className="w-4 h-4 mr-2" />
                  Coba Metode Ini
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <PenTool className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Kenapa Metode Ini Efektif?
                  </h3>
                </div>
                <div className="space-y-4">
                  {[
                    { icon: BookOpen, title: "Learning by Doing", desc: "Belajar langsung dari contoh nyata" },
                    { icon: Target, title: "Structured Approach", desc: "Pendekatan sistematis dan terukur" },
                    { icon: Users, title: "Expert Guidance", desc: "Bimbingan dari pengajar berpengalaman" },
                    { icon: TrendingUp, title: "Proven Results", desc: "Terbukti meningkatkan skor siswa" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{item.title}</h4>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4 Steps Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              4 Langkah Metode Imitative Writing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proses belajar yang terstruktur untuk menguasai writing IELTS dengan metode imitative
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {imitativeWritingSteps.map((step, index) => {
              const colorClasses = {
                blue: "from-blue-500 to-blue-600",
                green: "from-green-500 to-green-600",
                purple: "from-purple-500 to-purple-600",
                orange: "from-orange-500 to-orange-600"
              };
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                    <CardHeader>
                      <div className="relative">
                        <div className={`w-20 h-20 bg-gradient-to-br ${colorClasses[step.color]} rounded-full flex items-center justify-center mx-auto mb-4`}>
                          <step.icon className="w-10 h-10 text-white" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                          {step.step}
                        </div>
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-900">
                        {step.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base text-gray-600">
                        {step.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Manfaat Metode Imitative Writing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Rasakan berbagai keuntungan dengan metode pembelajaran writing yang inovatif
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                        <benefit.icon className="w-8 h-8 text-purple-600" />
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-900">
                        {benefit.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-gray-600">
                      {benefit.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Kisah Sukses Siswa Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Lihat bagaimana metode imitative writing telah membantu siswa mencetak skor IELTS tinggi
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Star className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {story.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-center items-center gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-gray-400 line-through">
                            {story.initialScore}
                          </div>
                          <div className="text-sm text-gray-500">Awal</div>
                        </div>
                        <div className="text-2xl text-purple-600">→</div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600">
                            {story.finalScore}
                          </div>
                          <div className="text-sm text-gray-500">Akhir</div>
                        </div>
                      </div>
                      <div className="bg-purple-100 rounded-lg px-3 py-1 inline-block">
                        <span className="text-sm font-medium text-purple-700">{story.duration}</span>
                      </div>
                      <blockquote className="text-gray-600 italic text-sm">
                        "{story.quote}"
                      </blockquote>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Siap Meningkatkan Skor Writing Anda?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Bergabunglah dengan ratusan siswa yang telah berhasil meningkatkan skor writing IELTS mereka dengan metode imitative writing
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50 text-lg px-8 py-3">
                  <PenTool className="w-5 h-5 mr-2" />
                  Daftar Sekarang
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-3">
                  Konsultasi Gratis
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}