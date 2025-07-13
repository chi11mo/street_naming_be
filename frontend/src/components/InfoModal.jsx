import React from 'react'

function InfoModal({ entry, onClose, onMail }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4 overflow-auto">
      <div className="bg-white p-4 rounded shadow max-w-xl w-full">
        <h2 className="text-xl font-bold mb-2">{entry.street}</h2>
        <p className="italic mb-2">{entry.named_after}</p>
        {entry.image && (
          <img src={entry.image} alt={entry.named_after} className="w-full h-48 object-cover mb-4" />
        )}
        {entry.bio && <p className="mb-2">{entry.bio}</p>}
        <p className="mb-2">{entry.reason}</p>
        {entry.sources && (
          <div className="mb-4">
            <p className="font-semibold">Quellen:</p>
            <ul className="list-disc ml-6">
              {entry.sources.map((s, i) => (
                <li key={i}>
                  <a href={s} target="_blank" rel="noreferrer" className="text-blue-600 underline">{s}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="flex justify-end gap-2">
          <button className="btn" onClick={() => { onMail(entry); onClose(); }}>Mail an Bürgermeister</button>
          <button className="btn bg-gray-600" onClick={onClose}>Schließen</button>
        </div>
      </div>
    </div>
  )
}

export default InfoModal
