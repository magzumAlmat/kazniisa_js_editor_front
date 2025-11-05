
import { Search, Heart, Users, Award } from "lucide-react";
import { useState } from "react";
import { Button } from "@mui/material";
export default function Hero() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="relative bg-gradient-to-br from-primary via-blue-600 to-blue-800 text-white py-16 md:py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Ваше здоровье — наш приоритет
            </h1>
            <p className="text-lg text-blue-100">
              Современная медицинская помощь с использованием передовых технологий и опытных специалистов. Запишитесь на прием к врачу онлайн за несколько минут.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="flex flex-col items-start">
                <Users size={28} className="mb-2" />
                <span className="text-2xl font-bold">150+</span>
                <span className="text-sm text-blue-100">Врачей</span>
              </div>
              <div className="flex flex-col items-start">
                <Heart size={28} className="mb-2" />
                <span className="text-2xl font-bold">50K+</span>
                <span className="text-sm text-blue-100">Пациентов</span>
              </div>
              <div className="flex flex-col items-start">
                <Award size={28} className="mb-2" />
                <span className="text-2xl font-bold">25+</span>
                <span className="text-sm text-blue-100">Лет опыта</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-accent hover:bg-yellow-500 text-black font-bold text-base"
              >
                Записаться на прием
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary font-bold text-base"
              >
                Вызвать врача на дом
              </Button>
            </div>
          </div>

          {/* Right - Search Section */}
          <div className="space-y-6">
            {/* Search Card */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Найти врача
              </h2>

              <div className="space-y-4">
                {/* Search Input */}
                <div className="relative">
                  <Search
                    size={20}
                    className="absolute left-4 top-3 text-muted-foreground"
                  />
                  <input
                    type="text"
                    placeholder="Фамилия врача или специальность"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                  />
                </div>

                {/* Specialty Filter */}
                <select className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground bg-white">
                  <option value="">Выберите специальность</option>
                  <option value="therapist">Терапевт</option>
                  <option value="cardiologist">Кардиолог</option>
                  <option value="pediatrician">Педиатр</option>
                  <option value="surgeon">Хирург</option>
                  <option value="dentist">Стоматолог</option>
                </select>

                {/* Date Picker */}
                <input
                  type="date"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground bg-white"
                />

                {/* Search Button */}
                <Button className="w-full bg-primary hover:bg-blue-700 text-white font-bold py-3">
                  Найти врача
                </Button>
              </div>

              {/* Popular Doctors */}
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm font-semibold text-foreground mb-3">
                  Популярные врачи:
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Кардиология", "Неврология", "Ортопедия"].map((spec) => (
                    <button
                      key={spec}
                      className="px-3 py-1 bg-muted text-foreground text-sm rounded-full hover:bg-primary hover:text-white transition-colors"
                    >
                      {spec}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
