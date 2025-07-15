import React from 'react'
import { PRIMARY_COLOR, ACCENT_COLOR_1, ACCENT_COLOR_2 } from '../lib/colors';

function Impressum({ onBack }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-lg border-b-4 border-red-600">
        <div className="container mx-auto max-w-6xl px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <button
                onClick={onBack}
                className="flex items-center space-x-2 text-red-600 hover:text-red-800 font-semibold mb-2"
              >
                <span>←</span>
                <span>Zurück zur Startseite</span>
              </button>
              <h1 className="text-3xl font-bold text-gray-800">
                Impressum
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto max-w-4xl px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Angaben gemäß § 5 TMG</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Verantwortlich für den Inhalt:</h3>
              <p className="text-gray-700">
                Die Linke im Kreis Warendorf<br />
                In den Lampen 5<br />
                48231 Warendorf<br />
                Deutschland
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Kontakt:</h3>
              <p className="text-gray-700">
                E-Mail: kreisvorstand@dielinke-kreis-waf.de<br />
                Telefon: +49 (0) 25 81 - 927 80 02
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Inhaltliche Verantwortung:</h3>
              <p className="text-gray-700">
                Für den Inhalt dieser Website ist ausschließlich die Linke im Kreis Warendorf verantwortlich. 
                Die Informationen basieren auf öffentlich zugänglichen Quellen und historischen 
                Forschungen zur NS-Geschichte in Beckum.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Haftungsausschluss:</h3>
              <div className="text-gray-700 space-y-3">
                <p>
                  <strong>Haftung für Inhalte:</strong> Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. 
                  Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
                </p>
                <p>
                  <strong>Haftung für Links:</strong> Unser Angebot enthält Links zu externen Webseiten Dritter, 
                  auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch 
                  keine Gewähr übernehmen.
                </p>
                <p>
                  <strong>Urheberrecht:</strong> Die durch die Seitenbetreiber erstellten Inhalte und Werke auf 
                  diesen Seiten unterliegen dem deutschen Urheberrecht.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Datenschutz:</h3>
              <p className="text-gray-700">
                Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. 
                Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder 
                E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis.
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-red-800 mb-2">Hinweis zur Nutzung:</h3>
              <p className="text-red-700">
                Diese Website dient ausschließlich der sachlichen Aufklärung und demokratischen Meinungsbildung. 
                Alle Informationen basieren auf öffentlich zugänglichen Quellen und historischen Forschungen. 
                Die bereitgestellten E-Mail-Vorlagen sind als Hilfestellung gedacht und können nach eigenem 
                Ermessen angepasst werden.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Impressum 