import React from 'react'

function InfoSection() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Warum sind Straßennamen-Änderungen wichtig?
      </h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
              <span className="text-red-600 font-bold">1</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">Erinnerungskultur</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Straßennamen prägen das kollektive Gedächtnis einer Stadt. Namen von NS-belasteten 
                Personen können die historische Aufarbeitung erschweren.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
              <span className="text-red-600 font-bold">2</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">Demokratische Werte</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Eine demokratische Gesellschaft sollte sich nicht durch Straßennamen 
                mit antidemokratischen Personen identifizieren.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
              <span className="text-red-600 font-bold">3</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">Lokale Geschichte</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Die Aufarbeitung der lokalen NS-Geschichte ist wichtig für das 
                Verständnis der eigenen Stadtgeschichte.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-green-600 font-bold">4</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">Sensibilisierung</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Straßennamen-Änderungen sensibilisieren die Bevölkerung für 
                historische Verantwortung und demokratische Werte.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-green-600 font-bold">5</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">Zukunft gestalten</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Neue Straßennamen können an demokratische Vorbilder oder 
                wichtige lokale Persönlichkeiten erinnern.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-green-600 font-bold">6</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">Internationale Standards</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Viele Städte weltweit haben sich bereits mit diesem Thema 
                auseinandergesetzt und Straßen umbenannt.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 p-4 bg-red-50 rounded-lg border border-red-200">
        <h4 className="font-semibold text-red-800 mb-2">💡 Was können Sie tun?</h4>
        <ul className="text-sm text-red-700 space-y-1">
          <li>• Informieren Sie sich über die historischen Hintergründe</li>
          <li>• Nutzen Sie die E-Mail-Funktion, um den Bürgermeister zu kontaktieren</li>
          <li>• Sprechen Sie mit Nachbarn und Freunden über das Thema</li>
          <li>• Unterstützen Sie lokale Initiativen zur Aufarbeitung</li>
        </ul>
      </div>
    </div>
  )
}

export default InfoSection 