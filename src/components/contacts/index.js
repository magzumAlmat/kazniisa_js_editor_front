export function Contacts() {
  return (
    <section id="contacts" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Контакты</h2>
          <p className="text-xl text-gray-600">Мы всегда рады помочь вам</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-xl shadow-md text-center">
            <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-phone text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Телефон</h3>
            <p className="text-gray-600 mb-2">Регистратура:</p>
            <a href="tel:+77273456789" className="text-primary font-semibold text-lg hover:text-secondary">
              +7 (727) 345-67-89
            </a>
            <p className="text-gray-600 mt-4 mb-2">Скорая помощь:</p>
            <a href="tel:103" className="text-primary font-semibold text-lg hover:text-secondary">
              103
            </a>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md text-center">
            <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-map-marker-alt text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Адрес</h3>
            <p className="text-gray-600">
              г. Алматы,<br />
              ул. Больничная, 7<br />
              Алмалинский район
            </p>
            <a href="#" className="inline-block mt-4 text-primary font-semibold hover:text-secondary">
              Показать на карте
              <i className="fas fa-external-link-alt ml-2"></i>
            </a>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md text-center">
            <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-clock text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Режим работы</h3>
            <p className="text-gray-600 mb-2">Поликлиника:</p>
            <p className="font-semibold text-gray-900">Пн-Пт: 8:00 - 20:00</p>
            <p className="font-semibold text-gray-900 mb-4">Сб: 9:00 - 15:00</p>
            <p className="text-gray-600 mb-2">Стационар:</p>
            <p className="font-semibold text-gray-900">Круглосуточно</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8 md:p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Остались вопросы?</h3>
          <form className="max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <input 
                type="text" 
                placeholder="Ваше имя" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input 
                type="tel" 
                placeholder="Телефон" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <textarea 
              placeholder="Ваше сообщение" 
              rows="4" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary mb-6"
            ></textarea>
            <button type="submit" className="w-full md:w-auto bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-secondary transition">
              <i className="fas fa-paper-plane mr-2"></i>
              Отправить сообщение
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
