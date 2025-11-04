export function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">О больнице</h2>
            <p className="text-lg text-gray-700 mb-6">
              Городская клиническая больница №7 — одно из ведущих медицинских учреждений Алматы с более чем 25-летней историей.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Мы предоставляем высококачественную медицинскую помощь, используя современное оборудование и передовые методы лечения.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="fas fa-check"></i>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900 mb-1">Современное оборудование</h4>
                  <p className="text-gray-600">Новейшие технологии диагностики и лечения</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="fas fa-check"></i>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900 mb-1">Опытные специалисты</h4>
                  <p className="text-gray-600">Врачи высшей категории с международным опытом</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="fas fa-check"></i>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900 mb-1">24/7 скорая помощь</h4>
                  <p className="text-gray-600">Круглосуточная экстренная медицинская помощь</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-8 text-white">
              <i className="fas fa-quote-left text-4xl mb-4 opacity-50"></i>
              <p className="text-xl mb-6">
                "Наша цель — обеспечить каждого пациента качественной медицинской помощью, основанной на заботе, профессионализме и современных технологиях."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary font-bold mr-4">
                  ГД
                </div>
                <div>
                  <p className="font-semibold">Главный врач</p>
                  <p className="text-blue-100">ГКБ №7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}