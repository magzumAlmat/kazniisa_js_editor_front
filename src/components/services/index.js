
export function Services() {
  const services = [
    {
      icon: "fa-heart-pulse",
      title: "Кардиология",
      description: "Диагностика и лечение заболеваний сердечно-сосудистой системы"
    },
    {
      icon: "fa-brain",
      title: "Неврология",
      description: "Лечение заболеваний нервной системы"
    },
    {
      icon: "fa-x-ray",
      title: "Хирургия",
      description: "Современные хирургические операции"
    },
    {
      icon: "fa-baby",
      title: "Педиатрия",
      description: "Медицинская помощь детям любого возраста"
    },
    {
      icon: "fa-microscope",
      title: "Лабораторная диагностика",
      description: "Точные анализы и исследования"
    },
    {
      icon: "fa-stethoscope",
      title: "Терапия",
      description: "Общая диагностика и лечение"
    }
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши услуги</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Мы предоставляем полный спектр медицинских услуг для всей семьи
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md card-hover">
              <div className="bg-medical-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <i className={`fas ${service.icon} text-primary text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              <a href="#" className="inline-flex items-center text-primary font-semibold mt-4 hover:text-secondary transition">
                Подробнее
                <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
