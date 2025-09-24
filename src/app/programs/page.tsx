'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock, Users, Target, Brain, MessageCircle, FileText, Award, PenTool, DollarSign } from "lucide-react";

const programCategories = [
  {
    id: "whv",
    title: "Program WHV (Working Holiday Visa) – Offline",
    description: "Program khusus persiapan IELTS untuk Working Holiday Visa",
    color: "from-green-500 to-emerald-600",
    programs: [
      {
        title: "Writing Task 1 General Training (Fast-Track)",
        description: "Kursus intensif menulis surat untuk kebutuhan WHV.",
        price: "IDR 500,000",
        icon: FileText
      },
      {
        title: "Writing Task 2 (Fast-Track)",
        description: "Latihan cepat menulis esai dengan fokus pada struktur & ide.",
        price: "IDR 450,000",
        icon: PenTool
      },
      {
        title: "Reading & Listening (Fast-Track)",
        description: "Kelas pemahaman bacaan dan mendengarkan untuk meningkatkan skor IELTS.",
        price: "IDR 400,000",
        icon: Brain
      },
      {
        title: "Practice Speaking",
        description: "Sesi latihan percakapan intensif dengan tutor berpengalaman.",
        price: "IDR 200,000",
        icon: MessageCircle
      },
      {
        title: "IELTS Basic",
        description: "Program dasar IELTS untuk pemula.",
        price: "IDR 500,000",
        icon: BookOpen
      },
      {
        title: "Private Class (Online/Offline)",
        description: "Sesi privat sesuai kebutuhan, fleksibel dengan tambahan biaya per jam.",
        price: "+IDR 100,000 / jam",
        icon: Users
      }
    ]
  },
  {
    id: "akademis",
    title: "Program Akademis – Offline",
    description: "Program lengkap persiapan IELTS Academic untuk keperluan akademik",
    color: "from-blue-500 to-indigo-600",
    programs: [
      {
        title: "Writing Task 1 Academic (Fast-Track)",
        description: "Kursus singkat menulis grafik, tabel, dan diagram.",
        price: "IDR 400,000",
        icon: FileText
      },
      {
        title: "Writing Task 2 Academic (Fast-Track)",
        description: "Latihan cepat menulis esai akademik.",
        price: "IDR 450,000",
        icon: PenTool
      },
      {
        title: "Writing Task 1 Academic (Intensif)",
        description: "Program intensif untuk memperkuat kemampuan analisis data dalam tulisan.",
        price: "IDR 650,000",
        icon: FileText
      },
      {
        title: "Writing Task 2 Academic (Intensif)",
        description: "Latihan menulis esai akademik secara mendalam dengan bimbingan detail.",
        price: "IDR 700,000",
        icon: PenTool
      },
      {
        title: "Reading & Listening (Fast-Track)",
        description: "Kelas cepat meningkatkan kemampuan membaca & mendengar untuk tes akademik.",
        price: "IDR 400,000",
        icon: Brain
      },
      {
        title: "Reading & Listening (Intensif)",
        description: "Pendalaman keterampilan membaca & mendengarkan secara terstruktur.",
        price: "IDR 650,000",
        icon: Brain
      },
      {
        title: "Practice Speaking",
        description: "Latihan berbicara dengan fokus pada IELTS Academic.",
        price: "IDR 200,000",
        icon: MessageCircle
      },
      {
        title: "IELTS Basic",
        description: "Materi dasar IELTS untuk persiapan awal.",
        price: "IDR 500,000",
        icon: BookOpen
      },
      {
        title: "Private Class (Online/Offline)",
        description: "Sesi personal sesuai kebutuhan peserta.",
        price: "+IDR 100,000 / jam",
        icon: Users
      }
    ]
  },
  {
    id: "online",
    title: "Program Online",
    description: "Program fleksibel yang dapat diikuti dari mana saja",
    color: "from-purple-500 to-pink-600",
    programs: [
      {
        title: "Writing Task 1 Academic (Fast-Track)",
        price: "IDR 600,000",
        icon: FileText
      },
      {
        title: "Writing Task 2 Academic (Fast-Track)",
        price: "IDR 675,000",
        icon: PenTool
      },
      {
        title: "Writing Task 1 Academic (Intensif)",
        price: "IDR 1,000,001",
        icon: FileText
      },
      {
        title: "Writing Task 2 Academic (Intensif)",
        price: "IDR 1,000,002",
        icon: PenTool
      },
      {
        title: "Reading & Listening (Fast-Track)",
        price: "IDR 600,000",
        icon: Brain
      },
      {
        title: "Reading & Listening (Intensif)",
        price: "IDR 1,000,003",
        icon: Brain
      },
      {
        title: "Writing Task 1 General Training (Fast-Track)",
        price: "IDR 600,000",
        icon: FileText
      },
      {
        title: "IELTS Basic",
        price: "IDR 600,000",
        icon: BookOpen
      },
      {
        title: "Practice Speaking (Online)",
        price: "IDR 200,000",
        icon: MessageCircle
      },
      {
        title: "Private Class (Online/Offline)",
        price: "+IDR 100,000 / jam",
        icon: Users
      }
    ]
  },
  {
    id: "intensif",
    title: "Program Intensif",
    description: "Program intensif untuk hasil maksimal dalam waktu singkat",
    color: "from-red-500 to-orange-600",
    programs: [
      {
        title: "Writing Task 1 Academic (Online – Intensif)",
        price: "IDR 1,000,001",
        icon: FileText
      },
      {
        title: "Writing Task 2 Academic (Online – Intensif)",
        price: "IDR 1,000,002",
        icon: PenTool
      },
      {
        title: "Reading & Listening (Online – Intensif)",
        price: "IDR 1,000,003",
        icon: Brain
      },
      {
        title: "Writing Task 1 Academic (Offline – Intensif)",
        price: "IDR 650,000",
        icon: FileText
      },
      {
        title: "Writing Task 2 Academic (Offline – Intensif)",
        price: "IDR 700,000",
        icon: PenTool
      },
      {
        title: "Reading & Listening (Offline – Intensif)",
        price: "IDR 650,000",
        icon: Brain
      }
    ]
  },
  {
    id: "fasttrack",
    title: "Program Fast-Track",
    description: "Program cepat untuk persiapan efisien",
    color: "from-yellow-500 to-amber-600",
    programs: [
      {
        title: "Writing Task 1 Academic (Online)",
        price: "IDR 600,000",
        icon: FileText
      },
      {
        title: "Writing Task 1 Academic (Offline)",
        price: "IDR 400,000",
        icon: FileText
      },
      {
        title: "Writing Task 2 Academic (Online)",
        price: "IDR 675,000",
        icon: PenTool
      },
      {
        title: "Writing Task 2 Academic (Offline)",
        price: "IDR 450,000",
        icon: PenTool
      },
      {
        title: "Reading & Listening (Online)",
        price: "IDR 600,000",
        icon: Brain
      },
      {
        title: "Reading & Listening (Offline)",
        price: "IDR 400,000",
        icon: Brain
      }
    ]
  },
  {
    id: "simulation",
    title: "Simulation Test",
    description: "Simulasi tes lengkap untuk persiapan maksimal",
    color: "from-gray-500 to-slate-600",
    programs: [
      {
        title: "Academic IELTS Simulation (Offline)",
        price: "IDR 150,000",
        icon: Award
      },
      {
        title: "Academic IELTS Simulation (Online)",
        price: "IDR 150,000",
        icon: Award
      },
      {
        title: "General Training IELTS Simulation (Offline)",
        price: "IDR 150,000",
        icon: Award
      },
      {
        title: "General Training IELTS Simulation (Online)",
        price: "IDR 150,000",
        icon: Award
      }
    ]
  }
];

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 mb-4">
              Program IELTS Lengkap
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Program Persiapan IELTS
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Pilih program yang sesuai dengan kebutuhan dan target skor IELTS Anda. Setiap program dirancang dengan metode imitative writing pioneer.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pilih Program Sesuai Kebutuhan Anda
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Berbagai pilihan program dengan harga terjangkau dan metode pembelajaran efektif
            </p>
          </div>

          {programCategories.map((category) => (
            <div key={category.id} className="mb-16">
              <div className={`bg-gradient-to-r ${category.color} text-white rounded-2xl p-8 mb-8`}>
                <div className="text-center">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    {category.title}
                  </h3>
                  <p className="text-lg opacity-90 max-w-2xl mx-auto">
                    {category.description}
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.programs.map((program, index) => {
                  const IconComponent = program.icon;
                  return (
                    <Card key={index} className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <CardHeader className="text-center">
                        <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <CardTitle className="text-lg font-bold text-gray-900 leading-tight">
                          {program.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="flex flex-col h-full">
                        {program.description && (
                          <CardDescription className="text-base text-gray-600 mb-4 flex-grow">
                            {program.description}
                          </CardDescription>
                        )}
                        <div className="mt-auto">
                          <div className="flex items-center justify-center gap-2 mb-4">
                            <DollarSign className="w-5 h-5 text-green-600" />
                            <span className="text-xl font-bold text-green-600">
                              {program.price}
                            </span>
                          </div>
                          <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                            Daftar Sekarang
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Program Schedule */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Jadwal Belajar Intensif
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              6x pertemuan per minggu dengan pendekatan personal untuk hasil belajar yang optimal
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-3">
                  <Clock className="w-6 h-6 text-purple-600" />
                  Kelas Reguler (6x pertemuan/minggu)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                    <span className="font-medium">Morning Class</span>
                    <span className="text-purple-600">08:00 - 10:00</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-pink-50 rounded-lg">
                    <span className="font-medium">First Session</span>
                    <span className="text-pink-600">13:00 - 15:00</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-indigo-50 rounded-lg">
                    <span className="font-medium">Second Session</span>
                    <span className="text-indigo-600">16:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span className="font-medium">Evening Class</span>
                    <span className="text-blue-600">19:00 - 21:00</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-3">
                  <Users className="w-6 h-6 text-pink-600" />
                  Personal Mentoring
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                    <span className="font-medium">1:1 Session</span>
                    <span className="text-orange-600">2x/minggu</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                    <span className="font-medium">Progress Review</span>
                    <span className="text-red-600">Weekly</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Total Belajar:</h4>
                  <div className="text-2xl font-bold text-purple-600">24 Jam/Minggu</div>
                  <div className="text-sm text-gray-600">
                    6 sesi intensif + mentoring personal
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Siap Mencetak Skor IELTS Impian Anda?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Pilih program yang sesuai dengan kebutuhan Anda dan raih target skor IELTS bersama Warung IELTS
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50 text-lg px-8 py-3">
                <PenTool className="w-5 h-5 mr-2" />
                Daftar Sekarang
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-3">
                Konsultasi Gratis
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}