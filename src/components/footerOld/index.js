// @shared


export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <i className="fas fa-hospital text-primary text-2xl"></i>
              <div>
                <h3 className="text-white font-bold text-lg">ГКБ №7</h3>
                <p className="text-sm">Алматы</p>
              </div>
            </div>
            <p className="text-sm mb-4">
              Современная медицинская помощь для всей семьи
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition">
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition">
                <i className="fab fa-youtube text-xl"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-primary transition">О больнице</a></li>
              <li><a href="#services" className="hover:text-primary transition">Услуги</a></li>
              <li><a href="#" className="hover:text-primary transition">Врачи</a></li>
              <li><a href="#contacts" className="hover:text-primary transition">Контакты</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary transition">Поликлиника</a></li>
              <li><a href="#" className="hover:text-primary transition">Стационар</a></li>
              <li><a href="#" className="hover:text-primary transition">Диагностика</a></li>
              <li><a href="#" className="hover:text-primary transition">Скорая помощь</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Контакты</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3 text-primary"></i>
                <span className="text-sm">г. Алматы, ул. Больничная, 7</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone mt-1 mr-3 text-primary"></i>
                <span className="text-sm">+7 (727) 345-67-89</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-envelope mt-1 mr-3 text-primary"></i>
                <span className="text-sm">info@gkb7.kz</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; 2024 ГКБ №7 Алматы. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}
