import React from 'react'

export default function Header() {
  return (
 <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <i className="fas fa-hospital text-primary text-3xl"></i>
            <div>
              <h1 className="text-xl font-bold text-gray-900">ГКБ №7</h1>
              <p className="text-sm text-gray-600">Алматы</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 hover:text-primary transition">О больнице</a>
            <a href="#services" className="text-gray-700 hover:text-primary transition">Услуги</a>
            <a href="#contacts" className="text-gray-700 hover:text-primary transition">Контакты</a>
            <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-secondary transition">
              <i className="fas fa-calendar-check mr-2"></i>
              Записаться
            </button>
          </nav>
          
          <button className="md:hidden text-gray-700">
            <i className="fas fa-bars text-2xl"></i>
          </button>
        </div>
      </div>
    </header>
  )
}
