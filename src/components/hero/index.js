export function Hero() {
  return (
    <section className="gradient-bg hero-pattern text-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="hero-title text-4xl md:text-6xl font-bold mb-6">
            Забота о вашем здоровье — наша миссия
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-blue-50">
            Городская клиническая больница №7 — современная медицина мирового уровня в Алматы
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition shadow-lg">
              <i className="fas fa-phone mr-2"></i>
              Позвонить
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition">
              <i className="fas fa-calendar-alt mr-2"></i>
              Записаться на прием
            </button>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl">
              <i className="fas fa-user-md text-4xl mb-3"></i>
              <h3 className="text-2xl font-bold mb-2">150+</h3>
              <p className="text-blue-100">Квалифицированных врачей</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl">
              <i className="fas fa-hospital-user text-4xl mb-3"></i>
              <h3 className="text-2xl font-bold mb-2">20+</h3>
              <p className="text-blue-100">Отделений и центров</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl">
              <i className="fas fa-award text-4xl mb-3"></i>
              <h3 className="text-2xl font-bold mb-2">25 лет</h3>
              <p className="text-blue-100">Опыта работы</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
