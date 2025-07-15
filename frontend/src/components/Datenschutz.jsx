import React from 'react'
import { PRIMARY_COLOR, ACCENT_COLOR_1, ACCENT_COLOR_2 } from '../lib/colors';

function Datenschutz({ onBack }) {
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
                Datenschutzerklärung
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto max-w-4xl px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Datenschutzerklärung</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">1. Datenschutz auf einen Blick</h3>
              <div className="text-gray-700 space-y-3">
                <h4 className="font-semibold">Allgemeine Hinweise</h4>
                <p>
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen 
                  Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, 
                  mit denen Sie persönlich identifiziert werden können.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">2. Datenerfassung auf dieser Website</h3>
              <div className="text-gray-700 space-y-3">
                <h4 className="font-semibold">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
                <p>
                  Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten 
                  können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
                </p>
                
                <h4 className="font-semibold">Wie erfassen wir Ihre Daten?</h4>
                <p>
                  Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich 
                  z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
                </p>
                <p>
                  Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere 
                  IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem 
                  oder Uhrzeit des Seitenaufrufs).
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">3. Hosting</h3>
              <div className="text-gray-700 space-y-3">
                <p>
                  Wir hosten unsere Website bei einem professionellen Hosting-Dienstleister. Dieser erhebt 
                  automatisch technische Daten, die für die Bereitstellung der Website erforderlich sind.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">4. Allgemeine Hinweise und Pflichtinformationen</h3>
              <div className="text-gray-700 space-y-3">
                <h4 className="font-semibold">Datenschutz</h4>
                <p>
                  Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln 
                  Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften 
                  sowie dieser Datenschutzerklärung.
                </p>
                
                <h4 className="font-semibold">Hinweis zur verantwortlichen Stelle</h4>
                <p>
                  Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                </p>
                <p>
                  Die Linke im Kreis Warendorf<br />
                  In den Lampen 5<br />
                  48231 Warendorf<br />
                  Deutschland
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">5. Datenerfassung auf dieser Website</h3>
              <div className="text-gray-700 space-y-3">
                <h4 className="font-semibold">Server-Log-Dateien</h4>
                <p>
                  Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten 
                  Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Browsertyp und Browserversion</li>
                  <li>verwendetes Betriebssystem</li>
                  <li>Referrer URL</li>
                  <li>Hostname des zugreifenden Rechners</li>
                  <li>Uhrzeit der Serveranfrage</li>
                  <li>IP-Adresse</li>
                </ul>
                <p>
                  Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">6. E-Mail-Funktionalität</h3>
              <div className="text-gray-700 space-y-3">
                <p>
                  Diese Website bietet E-Mail-Vorlagen an, die Sie an den Bürgermeister von Beckum senden können. 
                  Diese Funktion nutzt Ihren lokalen E-Mail-Client und überträgt keine Daten an unsere Server.
                </p>
                <p>
                  Die E-Mail-Adresse des Bürgermeisters (buergermeister@beckum.de) ist eine öffentliche 
                  Kontaktadresse der Stadt Beckum.
                </p>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-red-800 mb-2">Wichtiger Hinweis:</h3>
              <p className="text-red-700">
                Diese Website sammelt keine persönlichen Daten von Besuchern. Alle Funktionen arbeiten 
                ausschließlich mit öffentlich zugänglichen Informationen und Ihrem lokalen E-Mail-Client. 
                Es werden keine Cookies oder Tracking-Mechanismen verwendet.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">7. Ihre Rechte</h3>
              <div className="text-gray-700 space-y-3">
                <p>
                  Sie haben das Recht, auf Antrag unentgeltlich eine Auskunft über die zu Ihrer Person 
                  gespeicherten personenbezogenen Daten zu erhalten. Außerdem haben Sie das Recht auf 
                  Berichtigung oder Löschung dieser Daten.
                </p>
                <p>
                  Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten wenden 
                  Sie sich bitte an:
                </p>
                <p>
                  Die Linke im Kreis Warendorf<br />
                  E-Mail: kreisvorstand@dielinke-kreis-waf.de<br />
                  Telefon: +49 (0) 25 81 - 927 80 02
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Datenschutz 