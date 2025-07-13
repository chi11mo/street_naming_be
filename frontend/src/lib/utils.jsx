import React from 'react'
import StreetCard from '../components/StreetCard'

export function renderStreetCards(data, openMail, onViewDetails) {
  return data.map((entry, i) => (
    <StreetCard key={i} entry={entry} onMail={openMail} onViewDetails={onViewDetails} />
  ))
}

export function makeMayorMail(obj) {
  return `Sehr geehrter Herr Bürgermeister,

ich wende mich an Sie bezüglich der ${obj.street} in Beckum, die nach ${obj.named_after} benannt ist.

HISTORISCHER HINTERGRUND:
${obj.reason}

PROBLEMATIK:
Straßennamen, die nach Personen benannt sind, die mit dem Nationalsozialismus in Verbindung standen, sind ein sensibles Thema der Erinnerungskultur. Sie können bei Anwohnern und Besuchern Irritationen hervorrufen und stehen im Widerspruch zu den demokratischen Werten unserer Gesellschaft.

VORSCHLAG:
Ich regen daher die ${obj.proposed_action.toLowerCase()} der ${obj.street} an und bitte Sie, dieses wichtige Thema auf die Tagesordnung des zuständigen Ausschusses zu setzen.

Eine Umbenennung wäre ein wichtiges Signal für:
• Die Aufarbeitung der lokalen NS-Geschichte
• Die Sensibilisierung für historische Verantwortung
• Die Förderung einer demokratischen Erinnerungskultur

Ich würde mich sehr freuen, wenn Sie sich dieser Angelegenheit annehmen würden.

Mit freundlichen Grüßen
[Ihr Name]
[Ihre Anschrift]
[Ihre E-Mail-Adresse]

---
Diese E-Mail wurde über die Informationsseite "Beckumer Straßennamen & NS-Bezüge" generiert.
Weitere Informationen: [URL der Seite]`
}
