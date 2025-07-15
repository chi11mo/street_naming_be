import React, { useState } from 'react'
import streets from './data/streets.json'
import { renderStreetCards } from './lib/utils'
import MailModal from './components/MailModal'
import InfoSection from './components/InfoSection'
import PersonDetailPage from './components/PersonDetailPage'
import Impressum from './components/Impressum'
import Datenschutz from './components/Datenschutz'
import { PRIMARY_COLOR, SECONDARY_COLOR, ACCENT_COLOR_1, ACCENT_COLOR_2, ACCENT_COLOR_3, ACCENT_COLOR_4, PALETTE } from './lib/colors';
import solidLogo from './lib/solid_logo.jpeg';

function App() {
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(null)
  const [currentTab, setCurrentTab] = useState('info') // 'info', 'streets', 'detail', 'impressum', 'datenschutz'
  const [selectedPerson, setSelectedPerson] = useState(null)

  // Nutze nur die aktiven Einträge
  const filtered = streets.active.filter(s =>
    s.street.toLowerCase().includes(query.toLowerCase())
  )

  const handleViewDetails = (person) => {
    setSelectedPerson(person)
    setCurrentTab('detail')
  }

  const handleBackToHome = () => {
    setCurrentTab('info')
    setSelectedPerson(null)
  }

  const handleShowImpressum = () => {
    setCurrentTab('impressum')
  }

  const handleShowDatenschutz = () => {
    setCurrentTab('datenschutz')
  }

  // If we're on detail page, show the detail page
  if (currentTab === 'detail' && selectedPerson) {
    return (
      <PersonDetailPage 
        person={selectedPerson} 
        onBack={handleBackToHome}
      />
    )
  }

  // If we're on impressum page, show the impressum page
  if (currentTab === 'impressum') {
    return (
      <Impressum onBack={handleBackToHome} />
    )
  }

  // If we're on datenschutz page, show the datenschutz page
  if (currentTab === 'datenschutz') {
    return (
      <Datenschutz onBack={handleBackToHome} />
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-lg border-b-4 border-red-600">
        <div className="container mx-auto max-w-6xl px-4 py-8">
          <div className="text-center flex flex-col items-center">
            <div className="flex items-center justify-center mb-2">
              <img src={solidLogo} alt="Solid Logo" className="h-12 w-auto rounded-lg shadow mr-4 border-2 border-red-100 bg-white" />
              <h1 className="text-4xl font-bold text-gray-800 mb-0">
                Beckumer Straßennamen & NS-Bezüge
              </h1>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
              Diese Seite informiert über historisch belastete Straßennamen in Beckum und deren 
              Verbindungen zur NS-Zeit. Scannen Sie den QR-Code auf den Infoplakaten für 
              detaillierte Informationen und die Möglichkeit, direkt eine E-Mail an den 
              Bürgermeister zu senden.
            </p>
            
            {/* Tab Navigation */}
            <nav className="flex justify-center space-x-1 bg-gray-100 p-1 rounded-lg max-w-md mx-auto">
              <button
                onClick={() => setCurrentTab('info')}
                className={`px-6 py-3 rounded-md font-semibold transition-all duration-200 flex items-center space-x-2 ${
                  currentTab === 'info'
                    ? 'bg-red-600 text-white shadow-md'
                    : 'bg-transparent text-gray-600 hover:bg-gray-200'
                }`}
              >
                <span>📚</span>
                <span>Informationen</span>
              </button>
              <button
                onClick={() => setCurrentTab('streets')}
                className={`px-6 py-3 rounded-md font-semibold transition-all duration-200 flex items-center space-x-2 ${
                  currentTab === 'streets'
                    ? 'bg-red-600 text-white shadow-md'
                    : 'bg-transparent text-gray-600 hover:bg-gray-200'
                }`}
              >
                <span>🏘️</span>
                <span>Straßen ({streets.active.length})</span>
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto max-w-6xl px-4 py-8">
        {currentTab === 'info' ? (
          <InfoSection />
        ) : currentTab === 'streets' ? (
          <>
            {/* Search Section */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <div className="flex items-center space-x-4">
                <div className="flex-1">
                  <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                    Straße suchen
                  </label>
                  <input
                    id="search"
                    type="text"
                    placeholder="Geben Sie den Straßennamen ein..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                  />
                </div>
                <div className="text-sm text-gray-500">
                  {filtered.length} von {streets.active.length} Straßen
                </div>
              </div>
            </div>

            {/* Streets Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {renderStreetCards(filtered, setSelected, handleViewDetails)}
            </div>

            {/* Empty State */}
            {filtered.length === 0 && query && (
              <div className="text-center py-12">
                <div className="text-gray-400 text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  Keine Straße gefunden
                </h3>
                <p className="text-gray-500">
                  Versuchen Sie einen anderen Suchbegriff oder schauen Sie sich alle Straßen an.
                </p>
              </div>
            )}

            {/* No Search Results */}
            {filtered.length === 0 && !query && (
              <div className="text-center py-12">
                <div className="text-gray-400 text-6xl mb-4">🏘️</div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  Alle Straßen anzeigen
                </h3>
                <p className="text-gray-500">
                  Nutzen Sie die Suchfunktion oben, um eine bestimmte Straße zu finden.
                </p>
              </div>
            )}
          </>
        ) : null}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-6">
            <p className="text-gray-300">
              Diese Seite dient der Aufklärung über historisch belastete Straßennamen in Beckum.
            </p>
          </div>
          
          {/* Legal Links */}
          <div className="flex justify-center space-x-6 text-sm">
            <button
              onClick={handleShowImpressum}
              className="text-gray-300 hover:text-white transition-colors duration-200 underline"
            >
              Impressum
            </button>
            <button
              onClick={handleShowDatenschutz}
              className="text-gray-300 hover:text-white transition-colors duration-200 underline"
            >
              Datenschutzerklärung
            </button>
          </div>
          
          <div className="text-center mt-4 text-xs text-gray-400">
            <p>© 2025 Die Linke im Kreis Warendorf - Alle Rechte vorbehalten</p>
          </div>
        </div>
      </footer>

      {/* Mail Modal */}
      {selected && (
        <MailModal entry={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  )
}

export default App
