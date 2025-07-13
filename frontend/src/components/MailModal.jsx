import React from 'react'
import { makeMayorMail } from '../lib/utils'

function MailModal({ entry, onClose }) {
  const mail = makeMayorMail(entry)
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded shadow max-w-lg w-full">
        <h3 className="text-lg font-bold mb-2">Vorschlag E-Mail</h3>
        <pre className="whitespace-pre-wrap mb-4">{mail}</pre>
        <button className="btn" onClick={onClose}>Schließen</button>
      </div>
    </div>
  )
}

export default MailModal
