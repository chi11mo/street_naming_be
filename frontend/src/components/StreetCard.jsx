import React from 'react'

const statusConfig = {
  belastet: {
    color: 'bg-red-500',
    text: 'text-red-700',
    bg: 'bg-red-50',
    border: 'border-red-200',
    icon: '⚠️',
    label: 'Historisch belastet'
  },
  indirekt: {
    color: 'bg-yellow-500',
    text: 'text-yellow-700',
    bg: 'bg-yellow-50',
    border: 'border-yellow-200',
    icon: '⚡',
    label: 'Indirekt belastet'
  },
  'prüffall': {
    color: 'bg-gray-500',
    text: 'text-gray-700',
    bg: 'bg-gray-50',
    border: 'border-gray-200',
    icon: '❓',
    label: 'Prüffall'
  },
}

function StreetCard({ entry, onMail, onViewDetails }) {
  const status = statusConfig[entry.status]

  return (
    <div className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 ${status.border} overflow-hidden cursor-pointer`}>
      {/* Clickable Content */}
      <div className="p-6" onClick={() => onViewDetails(entry)}>
        <div className="flex items-start justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-800 leading-tight">
            {entry.street}
          </h2>
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${status.bg} ${status.text}`}>
            <span className="mr-1">{status.icon}</span>
            {status.label}
          </span>
        </div>

        {/* Named After */}
        <div className="mb-4">
          <h3 className="text-sm font-semibold text-gray-600 mb-1">Benannt nach:</h3>
          <p className="text-gray-800 font-medium">{entry.named_after}</p>
        </div>

        {/* Reason */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-gray-600 mb-1">Historischer Hintergrund:</h3>
          <p className="text-gray-700 leading-relaxed">{entry.reason}</p>
        </div>

        {/* Proposed Action */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-gray-600 mb-1">Vorgeschlagene Maßnahme:</h3>
          <p className="text-red-600 font-medium">{entry.proposed_action}</p>
        </div>

        {/* Sources */}
        {entry.sources && entry.sources.length > 0 && (
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-600 mb-2">Quellen:</h3>
            <div className="space-y-1">
              {entry.sources.map((source, index) => (
                <a
                  key={index}
                  href={source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-red-600 hover:text-red-800 underline truncate"
                  onClick={(e) => e.stopPropagation()} // Prevent card click when clicking link
                >
                  {source}
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Click Hint */}
        <div className="text-center text-sm text-gray-500 italic">
          Klicken Sie für detaillierte Informationen
        </div>
      </div>

      {/* Action Button - Separate from card click */}
      <div className="px-6 pb-6">
        <button 
          onClick={(e) => {
            e.stopPropagation() // Prevent card click
            onMail(entry)
          }}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
        >
          <span>📧</span>
          <span>E-Mail an Bürgermeister senden</span>
        </button>
      </div>
    </div>
  )
}

export default StreetCard
