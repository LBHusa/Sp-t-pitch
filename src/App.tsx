/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Mic, Laptop, LayoutDashboard, MessageCircle, Database, Mail, FolderKanban, Users, User, Play, ArrowRight, ArrowLeft, Sun, FileText, CheckCircle } from 'lucide-react';

export default function App() {
  const [showBanner, setShowBanner] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="min-h-screen bg-slate-100 p-4 sm:p-8 font-sans flex flex-col items-center pb-20">
      {showBanner && (
        <div className="max-w-[1100px] w-full bg-indigo-50 border border-indigo-200 text-indigo-900 p-5 rounded-2xl mb-8 flex justify-between items-start shadow-sm">
          <div>
            <h3 className="font-bold flex items-center gap-2 text-lg">
              <span className="text-xl">✨</span> Klare Schrift & Mehrere Seiten
            </h3>
            <p className="text-sm mt-2 leading-relaxed">
              Ich habe die schwer lesbare Schreibschrift entfernt und durch eine klare, seriöse Standardschrift ersetzt. <br/>
              Außerdem kannst du jetzt <strong>alle 3 Seiten des Konzepts</strong> durchklicken!
            </p>
          </div>
          <button onClick={() => setShowBanner(false)} className="text-indigo-400 hover:text-indigo-700 font-bold px-2 py-1">✕</button>
        </div>
      )}

      {/* Navigation Controls */}
      <div className="max-w-[1100px] w-full mb-6 flex justify-between items-center bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
        <button 
          onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
          disabled={currentPage === 1}
          className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 disabled:opacity-50 text-slate-700 font-semibold rounded-lg transition-colors"
        >
          <ArrowLeft size={18} /> Zurück
        </button>
        <div className="flex gap-2">
          {[1, 2, 3].map(page => (
            <button key={page} onClick={() => setCurrentPage(page)} className={`w-3 h-3 rounded-full transition-colors ${currentPage === page ? 'bg-indigo-600' : 'bg-slate-300'}`} />
          ))}
        </div>
        <button 
          onClick={() => setCurrentPage(prev => Math.min(3, prev + 1))}
          disabled={currentPage === 3}
          className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-semibold rounded-lg transition-colors"
        >
          Weiter <ArrowRight size={18} />
        </button>
      </div>

      {/* The Whiteboard Canvas (A4 landscape ratio ~ 1.414) */}
      <div className="w-[1100px] h-[778px] bg-white shadow-xl relative overflow-hidden shrink-0 border border-slate-200 rounded">
        
        {/* Subtle grid background */}
        <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

        {/* PAGE 1 */}
        {currentPage === 1 && (
          <>
            <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none">
              <defs>
                <marker id="arrow-green" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#16a34a" />
                </marker>
                <marker id="arrow-blue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#64748b" />
                </marker>
              </defs>

              {/* Arrow: Dominic to KI */}
              <path d="M 330 200 Q 400 200 450 350" fill="none" stroke="#64748b" strokeWidth="3" strokeDasharray="6 6" markerEnd="url(#arrow-blue)" />
              {/* Arrow: Silos to KI */}
              <path d="M 350 560 Q 400 560 480 430" fill="none" stroke="#64748b" strokeWidth="3" strokeDasharray="6 6" markerEnd="url(#arrow-blue)" />
              {/* Arrow: KI to Dashboard */}
              <path d="M 640 330 Q 700 220 780 220" fill="none" stroke="#16a34a" strokeWidth="4" markerEnd="url(#arrow-green)" />
              {/* Arrow: KI to Employee (Pull) */}
              <path d="M 760 550 Q 680 550 630 450" fill="none" stroke="#64748b" strokeWidth="3" strokeDasharray="6 6" markerEnd="url(#arrow-blue)" />
              {/* Arrow: KI returns answer to Employee */}
              <path d="M 630 480 Q 700 580 780 580" fill="none" stroke="#16a34a" strokeWidth="4" markerEnd="url(#arrow-green)" />
            </svg>

            <div className="absolute inset-0 z-20">
              <h1 className="absolute top-10 left-12 text-3xl font-extrabold text-slate-800 tracking-tight">
                Vom Nadelöhr zum fließenden Wissen bei Späth & Partners
              </h1>
              <div className="absolute bottom-6 left-0 w-full text-center text-sm font-medium text-slate-400">
                Seite 1 von 3 — Wie Dominics Tag mit dem System aussieht
              </div>

              {/* 1. Dominic / Meeting */}
              <div className="absolute top-[120px] left-[50px] w-[280px]">
                <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-4 shadow-sm relative mb-4 rounded-bl-none">
                  <p className="font-semibold italic text-orange-900 leading-snug">
                    "Sabine, drei CFO-Profile für Bosch mit M&A Erfahrung bis Freitag."
                  </p>
                </div>
                
                <div className="flex gap-4 items-center">
                  <div className="w-16 h-16 rounded-full border-2 border-slate-300 bg-white shadow flex items-center justify-center relative overflow-hidden">
                    <User size={32} className="text-slate-400 mt-2" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 text-lg">Dominic im Termin</h3>
                    <p className="font-medium text-slate-500 text-sm">Input direkt per Sprache</p>
                  </div>
                </div>
              </div>

              {/* 2. Old Silos */}
              <div className="absolute top-[420px] left-[50px] w-[300px]">
                <div className="border-2 border-dashed border-slate-300 bg-slate-50 rounded-2xl p-5 relative">
                  <div className="absolute -top-4 left-6 bg-rose-100 text-rose-800 font-bold px-3 py-1 rounded text-sm shadow-sm border border-rose-200">
                    Alte Silos aufbrechen
                  </div>
                  <p className="font-medium text-slate-600 text-sm mb-4 mt-2 leading-tight">
                    Verstreutes Wissen wird automatisch entpackt und geordnet:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 bg-white p-2 rounded shadow-sm border border-slate-200 text-slate-700 font-medium text-sm">
                      <MessageCircle size={18} className="text-emerald-500" /> WhatsApp Sprachnachrichten
                    </div>
                    <div className="flex items-center gap-3 bg-white p-2 rounded shadow-sm border border-slate-200 text-slate-700 font-medium text-sm">
                      <FolderKanban size={18} className="text-indigo-500" /> CRM / Meffert Notizen
                    </div>
                    <div className="flex items-center gap-3 bg-white p-2 rounded shadow-sm border border-slate-200 text-slate-700 font-medium text-sm">
                      <Mail size={18} className="text-slate-500" /> Lange E-Mail Threads
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. CENTER: Die KI (Silo-Brecher) */}
              <div className="absolute top-[320px] left-[450px] w-[200px] flex flex-col items-center">
                <div className="w-48 h-48 rounded-full border-[4px] border-slate-700 bg-white shadow-xl flex flex-col items-center justify-center relative z-20">
                   <Database size={32} className="text-indigo-600 mb-2" />
                   <h2 className="font-black text-xl text-slate-800">Unternehmens-KI</h2>
                   <p className="text-center font-bold text-indigo-600 text-sm leading-snug mt-1">
                     Zentraler<br/>Wissensspeicher
                   </p>
                </div>
                <p className="font-medium text-slate-500 text-center text-sm mt-4 max-w-[220px]">
                  Aus Dominics Kopf direkt in die sichere Team-Cloud.
                </p>

                <div className="absolute -top-[120px] left-[70px] bg-emerald-50 border border-emerald-200 text-emerald-800 py-1.5 px-3 rounded-lg shadow font-bold text-sm whitespace-nowrap z-30 transform rotate-[-12deg]">
                  Statt 8 Anrufen → Live To-Do
                </div>
                <div className="absolute top-[190px] left-[80px] bg-emerald-50 border border-emerald-200 text-emerald-800 py-1.5 px-3 rounded-lg shadow font-bold text-sm whitespace-nowrap z-30 transform rotate-[10deg]">
                  Antwort in 5 Sekunden !
                </div>
              </div>

              {/* 4. Dominic's Live Dashboard */}
              <div className="absolute top-[120px] left-[700px] w-[350px]">
                 <div className="bg-slate-800 rounded-2xl p-5 shadow-lg border-2 border-slate-700 relative text-white">
                    <div className="absolute -top-4 right-6 bg-sky-500 text-white font-bold px-3 py-1 rounded text-sm shadow-sm border border-sky-400">
                      Live-Kontrolle
                    </div>
                    <h3 className="flex items-center gap-2 font-bold text-lg mb-3">
                      <LayoutDashboard className="text-sky-400" size={24} /> Dominiks Cockpit
                    </h3>
                    <p className="font-medium text-slate-300 text-sm mb-4 leading-tight">
                      Aus Sprache wird sofort eine anfassbare Team-Aufgabe.
                    </p>
                    <div className="space-y-3">
                      <div className="bg-slate-700/50 p-3 rounded-lg border border-slate-600 text-sm">
                        <div className="flex justify-between items-center mb-1">
                          <strong className="text-sky-300">Bosch: CFO Suche</strong>
                          <span className="text-xs bg-slate-600 px-2 py-0.5 rounded">Deadline: Fr</span>
                        </div>
                        <div className="flex gap-2 items-center text-slate-300">
                          <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                          Sabine screen Profile
                        </div>
                      </div>
                      <div className="bg-slate-700/50 p-3 rounded-lg border border-slate-600 text-sm opacity-60">
                        <div className="flex gap-2 items-center text-slate-300">
                          <span className="text-emerald-400 text-lg font-bold leading-none">✓</span>
                          <span className="line-through">Eckhard: Bank-Mandat klären</span>
                        </div>
                      </div>
                    </div>
                 </div>
              </div>

              {/* 5. Team Empowerment */}
              <div className="absolute top-[480px] left-[700px] w-[350px]">
                 <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-3 shadow-sm relative mb-4 rounded-br-none w-[80%] self-end ml-auto">
                   <p className="font-semibold italic text-orange-900 leading-snug">
                     "Was war das Ergebnis beim Bosch Termin?"
                   </p>
                 </div>
                 <div className="bg-white border-2 border-emerald-400 rounded-2xl p-4 shadow-md relative">
                    <div className="absolute -bottom-4 right-6 bg-emerald-100 text-emerald-800 font-bold px-3 py-1 rounded text-sm shadow-sm border border-emerald-300">
                      Team Empowerment
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-slate-100 rounded-full border border-slate-300 flex items-center justify-center">
                        <Laptop size={20} className="text-slate-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800 text-lg">Mitarbeiter</h3>
                        <p className="font-medium text-slate-500 text-sm leading-none">Wissen direkt abfragen</p>
                      </div>
                    </div>
                    <div className="bg-emerald-50/50 p-3 rounded font-sans text-sm text-slate-700 border border-emerald-100">
                      <strong>KI-Antwort:</strong><br/>
                      Kunde sucht CFO Profil, ideal mit M&A Fokus. Budget ~250k. <br/>
                      <em className="text-xs text-slate-500 mt-1 block">→ Basierend auf Meeting Notiz von heute 10:00 Uhr</em>
                    </div>
                 </div>
              </div>
            </div>
          </>
        )}

        {/* PAGE 2 */}
        {currentPage === 2 && (
          <>
            <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none">
              <defs>
                <marker id="arrow-green2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#16a34a" />
                </marker>
                <marker id="arrow-blue2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#64748b" />
                </marker>
              </defs>
              <path d="M 330 200 Q 400 200 450 350" fill="none" stroke="#64748b" strokeWidth="3" strokeDasharray="6 6" markerEnd="url(#arrow-blue2)" />
              <path d="M 640 330 Q 700 220 780 220" fill="none" stroke="#16a34a" strokeWidth="4" markerEnd="url(#arrow-green2)" />
              <path d="M 760 550 Q 680 550 630 450" fill="none" stroke="#64748b" strokeWidth="3" strokeDasharray="6 6" markerEnd="url(#arrow-blue2)" />
              <path d="M 630 480 Q 700 580 780 580" fill="none" stroke="#16a34a" strokeWidth="4" markerEnd="url(#arrow-green2)" />
            </svg>

            <div className="absolute inset-0 z-20">
              <h1 className="absolute top-10 left-12 text-3xl font-extrabold text-slate-800 tracking-tight">
                Wenn Dominic ausfällt: Das System als Autopilot
              </h1>
              <div className="absolute bottom-6 left-0 w-full text-center text-sm font-medium text-slate-400">
                Seite 2 von 3 — Was passiert, wenn Dominic im Urlaub ist (oder krank ausfällt)
              </div>

              {/* 1. Dominic Absent */}
              <div className="absolute top-[120px] left-[50px] w-[280px]">
                <div className="bg-slate-100 border-2 border-slate-200 rounded-2xl p-4 shadow-sm relative mb-4 rounded-bl-none">
                  <p className="font-semibold italic text-slate-500 leading-snug">
                    (Völlige Stille. Dominic ist mit der Familie auf Mallorca.)
                  </p>
                </div>
                
                <div className="flex gap-4 items-center">
                  <div className="w-16 h-16 rounded-full border-2 border-slate-300 bg-slate-50 shadow flex items-center justify-center relative overflow-hidden">
                    <Sun size={32} className="text-orange-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 text-lg">Dominic = Offline</h3>
                    <p className="font-medium text-slate-500 text-sm">Kein Input möglich</p>
                  </div>
                </div>
              </div>

              {/* 2. CENTER: KI übernimmt Routing */}
              <div className="absolute top-[320px] left-[450px] w-[200px] flex flex-col items-center">
                <div className="w-48 h-48 rounded-full border-[4px] border-emerald-500 bg-white shadow-xl flex flex-col items-center justify-center relative z-20">
                   <Database size={32} className="text-emerald-600 mb-2" />
                   <h2 className="font-black text-xl text-slate-800">Unternehmens-KI</h2>
                   <p className="text-center font-bold text-emerald-600 text-sm leading-snug mt-1">
                     Arbeitet als<br/>Autopilot weiter
                   </p>
                </div>
                <p className="font-medium text-slate-500 text-center text-sm mt-4 max-w-[220px]">
                  Eingehende E-Mails und Bewerber werden automatisch gescreent und verteilt.
                </p>

                <div className="absolute -top-[120px] left-[70px] bg-emerald-50 border border-emerald-200 text-emerald-800 py-1.5 px-3 rounded-lg shadow font-bold text-sm whitespace-nowrap z-30 transform rotate-[-12deg]">
                  KI übernimmt Delegation
                </div>
              </div>

              {/* 3. Sabine's Dashboard */}
              <div className="absolute top-[120px] left-[700px] w-[350px]">
                 <div className="bg-slate-800 rounded-2xl p-5 shadow-lg border-2 border-slate-700 relative text-white">
                    <div className="absolute -top-4 right-6 bg-emerald-500 text-white font-bold px-3 py-1 rounded text-sm shadow-sm border border-emerald-400">
                      Team entscheidet selbst
                    </div>
                    <h3 className="flex items-center gap-2 font-bold text-lg mb-3">
                      <User className="text-emerald-400" size={24} /> Sabines Dashboard
                    </h3>
                    <p className="font-medium text-slate-300 text-sm mb-4 leading-tight">
                      Das System schlägt den Mitarbeitern nächste Schritte vor.
                    </p>
                    <div className="space-y-3">
                      <div className="bg-slate-700/50 p-3 rounded-lg border border-slate-600 text-sm">
                        <div className="flex justify-between items-center mb-1">
                          <strong className="text-emerald-300">Neue Bewerbung: CFO Bosch</strong>
                        </div>
                        <div className="flex gap-2 text-slate-300">
                          <CheckCircle size={16} className="text-emerald-400 mt-0.5 shrink-0" />
                          <span>KI-Notiz: "Kandidat deckt M&A-Anforderung zu 95% ab. Bitte prüfen."</span>
                        </div>
                      </div>
                    </div>
                 </div>
              </div>

              {/* 4. Team Query ohne Dominic */}
              <div className="absolute top-[480px] left-[700px] w-[350px]">
                 <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-3 shadow-sm relative mb-4 rounded-br-none w-[80%] self-end ml-auto">
                   <p className="font-semibold italic text-orange-900 leading-snug">
                     "Welche Rahmenverträge haben wir eigentlich mit der Müller GmbH?"
                   </p>
                 </div>
                 <div className="bg-white border-2 border-emerald-400 rounded-2xl p-4 shadow-md relative">
                    <div className="absolute -bottom-4 right-6 bg-emerald-100 text-emerald-800 font-bold px-3 py-1 rounded text-sm shadow-sm border border-emerald-300">
                      Autonomie
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-slate-100 rounded-full border border-slate-300 flex items-center justify-center">
                        <Users size={20} className="text-slate-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800 text-lg">Eckhard</h3>
                        <p className="font-medium text-slate-500 text-sm leading-none">Kein Warten auf den Chef</p>
                      </div>
                    </div>
                    <div className="bg-emerald-50/50 p-3 rounded font-sans text-sm text-slate-700 border border-emerald-100">
                      <strong>KI-Antwort:</strong><br/>
                      Rahmenvertrag aus 2022. Vermittlungsprovision: 28%. Zahlungsziel: 30 Tage.<br/>
                      <em className="text-xs text-slate-500 mt-1 block">→ Link zum PDF in SharePoint angehängt</em>
                    </div>
                 </div>
              </div>
            </div>
          </>
        )}

        {/* PAGE 3 */}
        {currentPage === 3 && (
          <>
            <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none">
              <defs>
                <marker id="arrow-green3" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#16a34a" />
                </marker>
                <marker id="arrow-blue3" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#64748b" />
                </marker>
              </defs>
              <path d="M 760 450 Q 680 450 630 380" fill="none" stroke="#64748b" strokeWidth="3" strokeDasharray="6 6" markerEnd="url(#arrow-blue3)" />
              <path d="M 630 420 Q 700 520 780 520" fill="none" stroke="#16a34a" strokeWidth="4" markerEnd="url(#arrow-green3)" />
            </svg>

            <div className="absolute inset-0 z-20">
              <h1 className="absolute top-10 left-12 text-3xl font-extrabold text-slate-800 tracking-tight">
                Onboarding: Wissenstransfer in Tagen statt Monaten
              </h1>
              <div className="absolute bottom-6 left-0 w-full text-center text-sm font-medium text-slate-400">
                Seite 3 von 3 — Wie neue Mitarbeiter lernen und sofort produktiv werden
              </div>

              {/* 1. Old Process vs New Process (Left Column is different) */}
              <div className="absolute top-[180px] left-[50px] w-[300px]">
                <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-5 shadow-sm relative">
                  <div className="absolute -top-4 left-6 bg-slate-200 text-slate-700 font-bold px-3 py-1 rounded text-sm shadow-sm border border-slate-300">
                    Die alte Welt
                  </div>
                  <h3 className="font-bold text-slate-800 text-lg mb-2">Erfahrung ist nicht skalierbar</h3>
                  <p className="font-medium text-slate-600 text-sm leading-relaxed">
                    Bisher dauerte es <strong>6 Monate</strong>, bis ein neuer Recruiter das Netzwerk, die Kundenhistorie und die spezifischen Wünsche von Späth & Partners verinnerlicht hatte.
                  </p>
                  <div className="flex gap-2 items-center text-rose-600 text-sm font-semibold mt-4 bg-rose-50 p-2 rounded">
                    <ArrowLeft size={16} /> Dominic musste alles erklären
                  </div>
                </div>
              </div>

              {/* 2. CENTER: KI Historie */}
              <div className="absolute top-[320px] left-[450px] w-[200px] flex flex-col items-center">
                <div className="w-48 h-48 rounded-full border-[4px] border-amber-500 bg-white shadow-xl flex flex-col items-center justify-center relative z-20">
                   <FileText size={32} className="text-amber-600 mb-2" />
                   <h2 className="font-black text-xl text-slate-800">Unternehmens-KI</h2>
                   <p className="text-center font-bold text-amber-600 text-sm leading-snug mt-1">
                     Kollektives<br/>Gedächtnis
                   </p>
                </div>
                <p className="font-medium text-slate-500 text-center text-sm mt-4 max-w-[220px]">
                  Ein Archiv aller erfolgreichen Pitches, Mails und Kunden-Vorlieben.
                </p>
              </div>

              {/* 3. Right: New Employee Max */}
              <div className="absolute top-[380px] left-[700px] w-[350px]">
                 <div className="bg-sky-50 border-2 border-sky-200 rounded-2xl p-3 shadow-sm relative mb-4 rounded-br-none w-[80%] self-end ml-auto">
                   <p className="font-semibold italic text-sky-900 leading-snug">
                     "Wie schreiben wir normalerweise Kandidaten für Banken-C-Level an?"
                   </p>
                 </div>
                 <div className="bg-white border-2 border-emerald-400 rounded-2xl p-4 shadow-md relative">
                    <div className="absolute -bottom-4 right-6 bg-emerald-100 text-emerald-800 font-bold px-3 py-1 rounded text-sm shadow-sm border border-emerald-300">
                      Tag 1 Produktivität
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-sky-100 rounded-full border border-sky-300 flex items-center justify-center">
                        <User size={20} className="text-sky-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800 text-lg">Max (Neu im Team)</h3>
                        <p className="font-medium text-slate-500 text-sm leading-none">Profitiert sofort von JAHREN an Erfahrung</p>
                      </div>
                    </div>
                    <div className="bg-emerald-50/50 p-3 rounded font-sans text-sm text-slate-700 border border-emerald-100">
                      <strong>KI-Antwort:</strong><br/>
                      Hier sind die 3 erfolgreichsten Anschreiben (Response-Rate {'>'} 40%) aus 2023. <br/>
                      <strong>Wichtig bei Banken:</strong> Betone immer Diskretion im ersten Satz.<br/>
                      <button className="mt-2 flex items-center gap-1 text-emerald-700 font-bold bg-emerald-100 px-2 py-1 rounded text-xs border border-emerald-200">
                        Vorlagen ansehen <ArrowRight size={12} />
                      </button>
                    </div>
                 </div>
              </div>

            </div>
          </>
        )}

      </div>
    </div>
  );
}
