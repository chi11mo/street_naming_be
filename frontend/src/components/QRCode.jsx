import React from 'react'

function QRCode({ url, size = 200 }) {
  // Einfache QR-Code Generierung mit einem Online-Service
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(url)}`
  
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg inline-block">
      <div className="text-center">
        <img 
          src={qrCodeUrl} 
          alt="QR-Code für Informationsseite" 
          className="border border-gray-200"
          width={size}
          height={size}
        />
        <p className="text-sm text-gray-600 mt-2 font-medium">
          QR-Code für Infoplakat
        </p>
        <p className="text-xs text-gray-500 mt-1">
          Scannen Sie für mehr Informationen
        </p>
      </div>
    </div>
  )
}

export default QRCode 