import React from 'react'

const statusColors = {
  belastet: 'bg-red-500',
  indirekt: 'bg-yellow-500',
  'prüffall': 'bg-gray-500',
}

function StreetCard({ entry, onMail }) {
  return (
    <div className="border rounded p-4 bg-white shadow">
      <h2 className="text-xl font-semibold">{entry.street}</h2>
      <p className="italic mb-2">{entry.named_after}</p>
      {entry.bio && <p className="mb-2">{entry.bio}</p>}
      <p className="mb-2">{entry.reason}</p>
      <span className={`text-white px-2 py-1 rounded ${statusColors[entry.status]}`}>{entry.status}</span>
      <button className="btn ml-2" onClick={() => onMail(entry)}>
        Mail an Bürgermeister
      </button>
    </div>
  )
}

export default StreetCard
