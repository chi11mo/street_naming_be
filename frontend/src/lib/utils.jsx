import React from 'react'
import StreetCard from '../components/StreetCard'

export function renderStreetCards(data, openMail) {
  return data.map((entry, i) => (
    <StreetCard key={i} entry={entry} onMail={openMail} />
  ))
}

export function makeMayorMail(obj) {
  return `Sehr geehrter Herr Bürgermeister,\n\n` +
    `ich möchte Sie darauf aufmerksam machen, dass die ${obj.street}, benannt nach ${obj.named_after}, historisch belastet ist. ${obj.reason}\n\n` +
    `Ich rege daher die ${obj.proposed_action} der Straße an und bitte Sie, das Thema auf die Tagesordnung des zuständigen Ausschusses zu setzen.\n\n` +
    `Mit freundlichen Grüßen\n[Ihr Name]`
}
