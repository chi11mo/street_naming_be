import React from 'react'
import { makeMayorMail } from '../lib/utils'
import { PRIMARY_COLOR, ACCENT_COLOR_1, ACCENT_COLOR_2, ACCENT_COLOR_3, ACCENT_COLOR_4 } from '../lib/colors';

function PersonDetailPage({ person, onBack }) {
  const getPersonData = (person) => {
    // Hier können Sie die Daten für jede Person erweitern
    const personData = {
      'Agnes-Miegel-Straße': {
        name: 'Agnes Miegel',
        birth: '9. März 1879 in Königsberg',
        death: '26. Oktober 1964 in Bad Salzuflen',
        profession: 'Schriftstellerin, Lyrikerin',
        knownFor: 'Ostpreußische Balladen und Heimatliteratur',
        problematic: 'NS-Unterstützung und Hitler-Verehrung',
        portrait: 'Agnes_Miegel_1902.jpg',
        description: 'Agnes Miegel (1879-1964) war eine deutsche Schriftstellerin aus Ostpreußen, die vor allem für ihre Balladen und Lyrik bekannt wurde. Sie galt als bedeutende Vertreterin der ostpreußischen Heimatliteratur und wurde oft als "Mutter Ostpreußens" bezeichnet.',
        additionalInfo: 'Ihre literarischen Werke, insbesondere ihre historischen Balladen über ostpreußische Geschichte und Landschaft, fanden großen Anklang und machten sie zu einer der bekanntesten deutschen Dichterinnen ihrer Zeit.',
        facts: [
          'NSDAP-Mitgliedschaft: Agnes Miegel war Mitglied in der NSDAP',
          'Hitler-Verehrung: Sie schrieb zwei Huldigungsgedichte an Adolf Hitler, darunter "Dem Führer" (1936) und "An den Führer"',
          'Aktive Unterstützung: Sie unterstützte die Hitler-Jugend und den »Bund deutscher Mädchen« und erhielt dafür 1939 die Ehrennadel der Hitler-Jugend',
          'Offene Sympathie: Als umstritten gilt sie heute aufgrund ihrer offenen Sympathie für Adolf Hitler während der Zeit des Nationalsozialismus'
        ],
        criticalText: 'Die Benennung von Straßen nach Personen mit NS-Vergangenheit ist in vielen Gemeinden zu einem wichtigen Diskussionsthema geworden. Agnes Miegel war nicht nur passive Mitläuferin, sondern aktive Unterstützerin des Nationalsozialismus.\n\nNach 1945 besann sich Agnes Miegel zurück auf christlich-abendländische Werte, aber sie erwies sich und ihrem Werk einen schlechten Dienst, als sie auf die Frage nach ihrem Verhältnis zum Nationalsozialismus bekundete, dafür sei sie nur gegenüber Gott und ihrem Gewissen verantwortlich - eine klare Aufarbeitung oder Distanzierung blieb aus.\n\nViele Städte und Gemeinden haben bereits ähnliche Umbenennungen vorgenommen, um ein klares Zeichen gegen die Verherrlichung von NS-Unterstützern zu setzen.',
        sources: [
          { name: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Agnes_Miegel' }
        ]
      },
      'Maria-Kahle-Straße': {
        name: 'Maria Kahle',
        birth: '1891',
        death: '1975',
        profession: 'Schriftstellerin',
        knownFor: 'Völkisch-nationalistische Literatur',
        problematic: 'Völkisch-nationalistische Einstellung',
        portrait: 'Maria_Kahle.jpg',
        description: 'Maria Kahle (1891-1975) war eine deutsche Schriftstellerin mit völkisch-nationalistischer Ausrichtung.',
        additionalInfo: 'Ihre Werke und politische Haltung stehen im Widerspruch zu demokratischen Werten.',
        facts: [
          'Völkisch-nationalistische Ausrichtung in ihren Schriften',
          'Unterstützung nationalistischer Ideologien',
          'Problematische Haltung zu demokratischen Werten'
        ],
        criticalText: 'Die Benennung von Straßen nach Personen mit völkisch-nationalistischer Vergangenheit ist problematisch, da sie antidemokratische Werte repräsentieren.\n\nViele Gemeinden haben sich entschieden, solche Straßennamen zu ändern, um ein klares Zeichen für demokratische Werte zu setzen.',
        sources: [
          { name: 'Wulfen Wiki', url: 'https://wulfen-wiki.de/index.php/Maria_Kahle' }
        ]
      },
      'Hermann-Löns-Weg': {
        name: 'Hermann Löns',
        birth: '29. August 1866 in Culm',
        death: '26. September 1914 bei Loivre',
        profession: 'Schriftsteller, Journalist',
        knownFor: 'Heimatdichtung, Naturlyrik',
        problematic: 'NS-Instrumentalisierung als "Heide-Prophet"',
        portrait: 'Hermann_Loens.jpg',
        description: 'Hermann Löns (1866-1914) war ein deutscher Schriftsteller und Journalist, der vor allem für seine Heimatdichtung und Naturlyrik bekannt wurde.',
        additionalInfo: 'Obwohl Löns bereits 1914 starb, wurde er von den Nationalsozialisten posthum als "Heide-Prophet" vereinnahmt und für ihre Ideologie instrumentalisiert.',
        facts: [
          'NS-Instrumentalisierung: Löns wurde von den Nazis als "Heide-Prophet" verehrt',
          'Verehrungsschriften: Zahllose NS-Verehrungsschriften erschienen ab 1935',
          'Ideologische Vereinnahmung: Seine Werke wurden für völkische Ideologie missbraucht',
          'Posthume Verehrung: Trotz seines frühen Todes 1914 wurde er von den Nazis instrumentalisiert'
        ],
        criticalText: 'Obwohl Hermann Löns bereits 1914 starb und somit nicht aktiv am Nationalsozialismus beteiligt war, wurde er von den Nazis posthum als "Heide-Prophet" vereinnahmt.\n\nSeine Werke wurden für völkische Ideologie missbraucht und zahllose NS-Verehrungsschriften erschienen ab 1935. Diese Instrumentalisierung macht die Straßenbenennung problematisch, da sie an eine Zeit erinnert, in der seine Person für antidemokratische Zwecke missbraucht wurde.\n\nViele Gemeinden haben sich entschieden, solche Straßennamen zu ändern, um sich von der NS-Instrumentalisierung zu distanzieren.',
        sources: [
          { name: 'Wikipedia', url: 'https://de.wikipedia.org/wiki/Hermann_L%C3%B6ns' }
        ]
      },
      'Gustav-Freytag-Straße': {
        name: 'Gustav Freytag',
        birth: '13. Juli 1816 in Kreuzburg',
        death: '30. April 1895 in Wiesbaden',
        profession: 'Schriftsteller, Journalist',
        knownFor: 'Historische Romane, "Soll und Haben"',
        problematic: 'Antisemitische Klischees in seinen Werken',
        portrait: 'Gustav_Freytag.jpg',
        description: 'Gustav Freytag (1816-1895) war ein deutscher Schriftsteller und Journalist, der vor allem für seinen historischen Roman "Soll und Haben" bekannt wurde.',
        additionalInfo: 'Sein Bestseller "Soll und Haben" (1855) nutzt antisemitische Klischees und wurde im "Dritten Reich" als mustergültig national genutzt.',
        facts: [
          'Antisemitische Klischees: "Soll und Haben" nutzt antisemitische Stereotype',
          'NS-Instrumentalisierung: Wurde im "Dritten Reich" als mustergültig national genutzt',
          'Literarischer Antisemitismus: Sein Werk prägte antisemitische Vorurteile',
          'Bestseller: "Soll und Haben" war einer der erfolgreichsten Romane des 19. Jahrhunderts'
        ],
        criticalText: 'Gustav Freytags Bestseller "Soll und Haben" (1855) nutzt antisemitische Klischees und wurde im "Dritten Reich" als mustergültig national genutzt.\n\nSein Werk prägte antisemitische Vorurteile und wurde von den Nazis für ihre Propaganda instrumentalisiert. Die Straßenbenennung erinnert an eine Zeit, in der antisemitische Literatur als vorbildlich galt.\n\nViele Gemeinden haben sich entschieden, solche Straßennamen zu ändern, um sich von antisemitischen Traditionen zu distanzieren.',
        sources: [
          { name: 'Wikipedia', url: 'https://de.wikipedia.org/wiki/Literarischer_Antisemitismus' }
        ]
      },
      'Christine-Koch-Straße': {
        name: 'Christine Koch',
        birth: '1869 in Drolshagen',
        death: '1951 in Drolshagen',
        profession: 'Mundartdichterin',
        knownFor: 'Sauerländer Mundartdichtung',
        problematic: 'Völkisch-nationalsozialistische Nähe',
        portrait: 'Christine_Koch.jpg',
        description: 'Christine Koch (1869-1951) war eine Sauerländer Mundartdichterin, die vor allem für ihre regionale Dichtung bekannt wurde.',
        additionalInfo: 'Neuere Forschung weist auf völkisch-nationalsozialistische Nähe und Mitläufertum hin.',
        facts: [
          'Völkisch-nationalsozialistische Nähe: Forschung weist auf problematische Verbindungen hin',
          'Mitläufertum: Unterstützung der NS-Ideologie',
          'Mundartdichtung: Regionale Dichtung mit völkischen Elementen',
          'Sauerländer Heimatdichtung: Lokale Tradition mit problematischen Aspekten'
        ],
        criticalText: 'Christine Koch war eine Sauerländer Mundartdichterin, deren Werk und Haltung von der Forschung als problematisch eingestuft wird.\n\nNeuere Untersuchungen weisen auf völkisch-nationalsozialistische Nähe und Mitläufertum hin. Ihre regionale Dichtung enthielt Elemente, die mit der NS-Ideologie kompatibel waren.\n\nViele Gemeinden haben sich entschieden, solche Straßennamen zu überprüfen, um sich von völkischen Traditionen zu distanzieren.',
        sources: [
          { name: 'SauerlandKurier', url: 'https://www.sauerlandkurier.de/hochsauerlandkreis/schmallenberg/kein-aktueller-grund-diskussion-5714799.html' }
        ]
      },
      'Carl-Zeiss-Straße': {
        name: 'Carl Zeiss',
        birth: '11. September 1816 in Weimar',
        death: '3. Dezember 1888 in Jena',
        profession: 'Mechaniker, Unternehmer',
        knownFor: 'Optische Geräte, Mikroskope',
        problematic: 'Zwangsarbeit in Zeiss-Werken',
        portrait: 'Carl_Zeiss.jpg',
        description: 'Carl Zeiss (1816-1888) war ein deutscher Mechaniker und Unternehmer, der die Zeiss-Werke gründete und für seine optischen Geräte bekannt wurde.',
        additionalInfo: 'Obwohl Zeiss selbst bereits 1888 starb, setzten die Zeiss-Werke während der NS-Zeit tausende Zwangsarbeiter:innen ein.',
        facts: [
          'Zwangsarbeit: Zeiss-Werke setzten tausende Zwangsarbeiter:innen ein',
          'Eigene Lager: Betrieben eigene Zwangsarbeiterlager in Jena',
          'NS-Zeit: Massive Ausbeutung von Zwangsarbeitern während des Krieges',
          'Unternehmensgeschichte: Dunkles Kapitel in der Firmengeschichte'
        ],
        criticalText: 'Obwohl Carl Zeiss selbst bereits 1888 starb, setzten die nach ihm benannten Zeiss-Werke während der NS-Zeit tausende Zwangsarbeiter:innen ein.\n\nDas Unternehmen betrieb eigene Zwangsarbeiterlager in Jena und profitierte massiv von der Ausbeutung von Zwangsarbeitern. Diese dunkle Seite der Unternehmensgeschichte macht die Straßenbenennung problematisch.\n\nViele Gemeinden überprüfen solche Straßennamen, um sich von der Ausbeutung von Zwangsarbeitern zu distanzieren.',
        sources: [
          { name: 'Zwangsarbeit in Jena', url: 'https://www.zwangsarbeit-in-jena.de/themen-und-orte/carl-zeiss' }
        ]
      },
      'Daimlerring': {
        name: 'Gottlieb Daimler',
        birth: '17. März 1834 in Schorndorf',
        death: '6. März 1900 in Cannstatt',
        profession: 'Ingenieur, Unternehmer',
        knownFor: 'Automobilbau, Daimler-Motoren',
        problematic: 'Zwangsarbeit bei Daimler-Benz',
        portrait: 'Gottlieb_Daimler.jpg',
        description: 'Gottlieb Daimler (1834-1900) war ein deutscher Ingenieur und Unternehmer, der als Pionier des Automobilbaus gilt.',
        additionalInfo: 'Obwohl Daimler selbst bereits 1900 starb, war Daimler-Benz während der NS-Zeit ein Kernunternehmen der Rüstungswirtschaft.',
        facts: [
          'NS-Rüstungswirtschaft: Daimler-Benz war Kernunternehmen der NS-Rüstung',
          'Zwangsarbeit: Profitierte massiv von Zwangsarbeit',
          'Kriegsproduktion: Produzierte für die deutsche Kriegsmaschinerie',
          'Unternehmensgeschichte: Dunkles Kapitel in der Firmengeschichte'
        ],
        criticalText: 'Obwohl Gottlieb Daimler bereits 1900 starb, war Daimler-Benz während der NS-Zeit ein Kernunternehmen der Rüstungswirtschaft.\n\nDas Unternehmen profitierte massiv von Zwangsarbeit und produzierte für die deutsche Kriegsmaschinerie. Diese dunkle Seite der Unternehmensgeschichte macht die Straßenbenennung problematisch.\n\nViele Gemeinden überprüfen solche Straßennamen, um sich von der Ausbeutung von Zwangsarbeitern zu distanzieren.',
        sources: [
          { name: 'Bildungsportal NS-Zwangsarbeit', url: 'https://www.bildung-ns-zwangsarbeit.de/informieren/akteure/daimler-benz-ag/' },
          { name: 'Mercedes-Benz Geschichte', url: 'https://group.mercedes-benz.com/unternehmen/tradition/geschichte/1933-1945.html' }
        ]
      },
      'Siemensstraße': {
        name: 'Werner von Siemens',
        birth: '13. Dezember 1816 in Lenthe',
        death: '6. Dezember 1892 in Berlin',
        profession: 'Erfinder, Unternehmer',
        knownFor: 'Elektrotechnik, Siemens-Konzern',
        problematic: 'Massive Zwangsarbeit bei Siemens',
        portrait: 'Werner_von_Siemens.jpg',
        description: 'Werner von Siemens (1816-1892) war ein deutscher Erfinder und Unternehmer, der als Pionier der Elektrotechnik gilt.',
        additionalInfo: 'Obwohl Siemens selbst bereits 1892 starb, beschäftigte der Siemens-Konzern während der NS-Zeit rund 120.000 Zwangsarbeiter:innen.',
        facts: [
          'Massive Zwangsarbeit: Siemens beschäftigte rund 120.000 Zwangsarbeiter:innen',
          'KZ-Außenlager: Nutzte Zwangsarbeiter aus KZ-Außenlagern wie Ravensbrück',
          'Kriegsproduktion: Produzierte für die deutsche Kriegsmaschinerie',
          'Unternehmensgeschichte: Eines der dunkelsten Kapitel der Firmengeschichte'
        ],
        criticalText: 'Obwohl Werner von Siemens bereits 1892 starb, beschäftigte der Siemens-Konzern während der NS-Zeit rund 120.000 Zwangsarbeiter:innen.\n\nDas Unternehmen nutzte Zwangsarbeiter aus KZ-Außenlagern wie Ravensbrück und produzierte für die deutsche Kriegsmaschinerie. Dies ist eines der dunkelsten Kapitel der Firmengeschichte.\n\nViele Gemeinden überprüfen solche Straßennamen, um sich von der massiven Ausbeutung von Zwangsarbeitern zu distanzieren.',
        sources: [
          { name: 'IG Metall Berlin', url: 'https://www.igmetall-berlin.de/aktuelles/meldung/siemens-und-zwangsarbeit-das-unerklaerliche-erlebbar-machen' }
        ]
      },
      'Boschstraße': {
        name: 'Robert Bosch',
        birth: '23. September 1861 in Albeck',
        death: '12. März 1942 in Stuttgart',
        profession: 'Unternehmer, Erfinder',
        knownFor: 'Bosch-Konzern, Automobilzulieferer',
        problematic: 'Zwangsarbeit in Bosch-Werken',
        portrait: 'Robert_Bosch.jpg',
        description: 'Robert Bosch (1861-1942) war ein deutscher Unternehmer und Erfinder, der den Bosch-Konzern gründete.',
        additionalInfo: 'Obwohl Bosch selbst 1942 starb, nutzten Bosch-Konzerne während der NS-Zeit Zwangsarbeit in Ausweichwerken.',
        facts: [
          'Zwangsarbeit: Bosch-Konzerne nutzten Zwangsarbeit in Ausweichwerken',
          'Ausweichwerke: Kleinmachnow, Hildesheimer Wald und andere Standorte',
          'Kriegsproduktion: Produzierte für die deutsche Kriegsmaschinerie',
          'Unternehmensgeschichte: Dunkles Kapitel in der Firmengeschichte'
        ],
        criticalText: 'Obwohl Robert Bosch selbst 1942 starb, nutzten Bosch-Konzerne während der NS-Zeit Zwangsarbeit in Ausweichwerken.\n\nDas Unternehmen betrieb Ausweichwerke in Kleinmachnow, Hildesheimer Wald und anderen Standorten, in denen Zwangsarbeiter eingesetzt wurden. Diese dunkle Seite der Unternehmensgeschichte macht die Straßenbenennung problematisch.\n\nViele Gemeinden überprüfen solche Straßennamen, um sich von der Ausbeutung von Zwangsarbeitern zu distanzieren.',
        sources: [
          { name: 'Spiegel Geschichte', url: 'https://www.spiegel.de/geschichte/robert-bosch-gmbh-im-nationalsozialismus-die-geschichte-bekannter-firmen-verbaende-und-vereine-a-4135f50b-dbd5-462a-9670-ab21beb90aff' },
          { name: 'Porta Polonica', url: 'https://www.porta-polonica.de/de/atlas-der-erinnerungsorte/zwangsarbeit-einer-tarnfabrik-des-bosch-konzerns-bei-hildesheim' }
        ]
      },
      'Dyckerhoffstraße': {
        name: 'Wilhelm Dyckerhoff',
        birth: '1835',
        death: '1903',
        profession: 'Unternehmer',
        knownFor: 'Zementindustrie, Dyckerhoff AG',
        problematic: 'Profiteur der Zwangsarbeit',
        portrait: 'Wilhelm_Dyckerhoff.jpg',
        description: 'Wilhelm Dyckerhoff (1835-1903) war ein deutscher Unternehmer, der die Dyckerhoff AG gründete.',
        additionalInfo: 'Obwohl Dyckerhoff selbst bereits 1903 starb, taucht das Unternehmen in bundesweiten Firmenlisten "Profiteure der Zwangsarbeit" auf.',
        facts: [
          'Profiteur der Zwangsarbeit: Taucht in bundesweiten Firmenlisten auf',
          'Detailbelege offen: Spezifische Belege für Beckum noch zu recherchieren',
          'Zementindustrie: Nutzte Zwangsarbeit in der Produktion',
          'Unternehmensgeschichte: Weitere Aufarbeitung notwendig'
        ],
        criticalText: 'Obwohl Wilhelm Dyckerhoff bereits 1903 starb, taucht das Unternehmen Dyckerhoff in bundesweiten Firmenlisten "Profiteure der Zwangsarbeit" auf.\n\nSpezifische Detailbelege für Beckum sind noch offen und bedürfen weiterer Recherche. Die Straßenbenennung sollte überprüft werden, sobald die historische Aufarbeitung abgeschlossen ist.\n\nViele Gemeinden führen solche Prüffälle durch, um die historische Verantwortung zu klären.',
        sources: [
          { name: 'NS in KA', url: 'https://ns-in-ka.de/wp-content/uploads/2017/06/Liste_Unternehmen.pdf' }
        ]
      }
    }
    
    return personData[person.street] || {
      name: person.named_after,
      birth: 'Unbekannt',
      death: 'Unbekannt',
      profession: 'Unbekannt',
      knownFor: person.reason,
      problematic: person.reason,
      portrait: null,
      description: person.reason,
      additionalInfo: '',
      facts: [person.reason],
      criticalText: 'Diese Person hat eine problematische Vergangenheit, die eine Überprüfung der Straßenbenennung rechtfertigt.',
      sources: person.sources ? person.sources.map(url => ({ name: 'Quelle', url })) : []
    }
  }

  const data = getPersonData(person)

  const openEmailClient = () => {
    const mail = makeMayorMail(person)
    const subject = encodeURIComponent(`Straßennamen-Änderung: ${person.street}`)
    const body = encodeURIComponent(mail)
    window.open(`mailto:buergermeister@beckum.de?subject=${subject}&body=${body}`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-lg border-b-4 border-red-600">
        <div className="container mx-auto max-w-6xl px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <button
                onClick={onBack}
                className="flex items-center space-x-2 text-red-600 hover:text-red-800 font-semibold mb-2"
              >
                <span>←</span>
                <span>Zurück zur Übersicht</span>
              </button>
              <h1 className="text-3xl font-bold text-gray-800">
                {person.street}
              </h1>
              <p className="text-gray-600">
                Detaillierte Informationen zur Namensgeber*in
              </p>
            </div>
            <div className="text-right">
              <div className="bg-red-100 text-red-800 px-4 py-2 rounded-lg font-semibold">
                ⚠️ Historisch belastet
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto max-w-6xl px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Page Header */}
          <div className="text-center border-b-4 border-red-600 p-8 bg-red-50">
            <h1 className="text-red-600 text-3xl font-bold m-0 mb-2">
              BÜRGERBETEILIGUNG: {person.street}
            </h1>
            <div className="text-gray-600 text-lg">
              Aufklärung über die Namensgeber*in unserer Straße
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
            {/* Main Content */}
            <div className="lg:col-span-2 text-justify">
              <h2 className="text-2xl font-bold mb-4">Wer war {data.name}?</h2>
              <p className="mb-4 text-lg leading-relaxed">{data.description}</p>
              
              {data.additionalInfo && (
                <p className="mb-6 text-lg leading-relaxed">{data.additionalInfo}</p>
              )}

              <div className="bg-red-50 border-l-4 border-red-500 p-6 my-6">
                <h3 className="text-red-800 font-bold text-lg mb-4">Zentrale Fakten zur NS-Vergangenheit:</h3>
                <ul className="space-y-3">
                  {data.facts.map((fact, index) => (
                    <li key={index} className="text-base">
                      <span className="bg-yellow-300 px-2 py-1 font-semibold rounded">
                        {fact.split(':')[0]}:
                      </span>
                      <span className="ml-2">{fact.split(':').slice(1).join(':')}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="bg-gray-100 p-6 border-l-4 border-red-600 rounded-r-lg">
              {/* Portrait */}
              <div className="w-full h-80 bg-gray-300 border-2 border-dashed border-gray-500 flex items-center justify-center mb-6 rounded-lg">
                {data.portrait ? (
                  <img 
                    src={data.portrait} 
                    alt={`Portrait von ${data.name}`}
                    className="w-full h-full object-cover border-2 border-gray-500 rounded-lg"
                  />
                ) : (
                  <span className="text-gray-600 italic text-center">
                    Portrait<br/>nicht verfügbar
                  </span>
                )}
              </div>
              
              {/* Biographical Data */}
              <div className="bg-white border border-gray-300 p-4 mb-6 rounded-lg">
                <h3 className="text-red-600 font-bold text-base mb-3">Lebensdaten</h3>
                <div className="space-y-2 text-sm">
                  <p><strong>Geboren:</strong> {data.birth}</p>
                  <p><strong>Gestorben:</strong> {data.death}</p>
                  <p><strong>Beruf:</strong> {data.profession}</p>
                  <p><strong>Bekannt für:</strong> {data.knownFor}</p>
                  <p><strong>Problematisch:</strong> {data.problematic}</p>
                </div>
              </div>

              {/* E-Mail Button */}
              <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                <h3 className="text-red-800 font-bold text-base mb-3">Handeln Sie jetzt!</h3>
                <p className="text-sm text-red-700 mb-4">
                  Senden Sie eine vorgefertigte E-Mail an den Bürgermeister zur Umbenennung der {person.street}.
                </p>
                <button
                  onClick={openEmailClient}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <span>📧</span>
                  <span>E-Mail an Bürgermeister senden</span>
                </button>
              </div>
            </div>
          </div>

          {/* Critical Section */}
          <div className="bg-orange-50 border-2 border-orange-500 p-8 mx-8 mb-8 rounded-lg">
            <h2 className="text-orange-800 text-xl font-bold mt-0 mb-4">
              Warum ist die Straßenbenennung problematisch?
            </h2>
            <div className="whitespace-pre-line text-base leading-relaxed">
              {data.criticalText}
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-gray-300 p-8 mx-8 text-sm text-gray-600">
            <p className="font-bold mb-3">Quellenangaben:</p>
            <ul className="space-y-1 mb-4">
              {data.sources.map((source, index) => (
                <li key={index}>
                  {source.name}: <a href={source.url} target="_blank" rel="noopener noreferrer" className="text-red-600 underline">{source.url}</a>
                </li>
              ))}
            </ul>
            <p className="italic">
              Dieses Informationsblatt dient der sachlichen Aufklärung und demokratischen Meinungsbildung.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default PersonDetailPage 