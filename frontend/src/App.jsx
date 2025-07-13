import React, { useState } from 'react'
import streets from './data/streets.json'
import { renderStreetCards } from './lib/utils'
import MailModal from './components/MailModal'

function App() {
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(null)

  const filtered = streets.filter(s =>
    s.street.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="container mx-auto max-w-3xl">
      <h1 className="text-2xl font-bold mb-4">Beckumer Straßennamen & NS-Bezüge</h1>
      <input
        type="text"
        placeholder="Suche..."
        className="border p-2 w-full mb-4"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <div className="grid gap-4">
        {renderStreetCards(filtered, setSelected)}
      </div>
      {selected && (
        <MailModal entry={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  )
}

export default App
