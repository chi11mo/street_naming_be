import React, { useState } from 'react'
import { makeMayorMail } from '../lib/utils'

function MailModal({ entry, onClose }) {
  const [copied, setCopied] = useState(false)
  const mail = makeMayorMail(entry)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(mail)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  const openEmailClient = () => {
    const subject = encodeURIComponent(`Straßennamen-Änderung: ${entry.street}`)
    const body = encodeURIComponent(mail)
    window.open(`mailto:buergermeister@beckum.de?subject=${subject}&body=${body}`)
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-red-600 text-white p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold">E-Mail an den Bürgermeister</h3>
            <button 
              onClick={onClose}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <p className="text-red-100 mt-2">
            Vorgefertigte E-Mail für: <strong>{entry.street}</strong>
          </p>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <h4 className="font-semibold text-gray-800 mb-2">E-Mail-Vorlage:</h4>
            <div className="bg-white border rounded-lg p-4 font-mono text-sm leading-relaxed whitespace-pre-wrap">
              {mail}
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="font-semibold text-red-800 mb-2">📧 Optionen:</h4>
              <ul className="text-sm text-red-700 space-y-1">
                <li>• <strong>E-Mail-Client öffnen:</strong> Öffnet Ihren Standard-E-Mail-Client</li>
                <li>• <strong>In Zwischenablage kopieren:</strong> Kopiert den Text zum Einfügen</li>
                <li>• <strong>Manuell bearbeiten:</strong> Sie können den Text vor dem Senden anpassen</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="bg-gray-50 px-6 py-4 flex flex-col sm:flex-row gap-3">
          <button 
            onClick={openEmailClient}
            className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
          >
            <span>📧</span>
            <span>E-Mail-Client öffnen</span>
          </button>
          
          <button 
            onClick={copyToClipboard}
            className={`flex-1 font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 ${
              copied 
                ? 'bg-green-600 text-white' 
                : 'bg-gray-600 hover:bg-gray-700 text-white'
            }`}
          >
            <span>{copied ? '✅' : '📋'}</span>
            <span>{copied ? 'Kopiert!' : 'In Zwischenablage kopieren'}</span>
          </button>
          
          <button 
            onClick={onClose}
            className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
          >
            Schließen
          </button>
        </div>
      </div>
    </div>
  )
}

export default MailModal
