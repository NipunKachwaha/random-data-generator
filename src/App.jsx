import { useState, useCallback } from 'react'
import {
  User, Tag, Mail, Smartphone, Bookmark, Key, Briefcase, Building2,
  MapPin, Building, Globe, Mailbox, Link, Hash, Waves, Zap, Palette,
  Radio, Calendar, Clock, Timer, FileText, Copy, Download, RotateCcw,
  CheckCircle2, Hash as HashIcon
} from 'lucide-react'
import { DATA_TYPES, CATEGORY_LABELS, generators } from './utils/generators'

const DEFAULT_SELECTED = new Set(['name', 'email', 'phone', 'uuid', 'date'])

// ── Icon mapping ──────────────────────────────────────────────────────────────
const ICON_MAP = {
  name:      User,
  firstName:  Tag,
  lastName:   Tag,
  email:      Mail,
  phone:      Smartphone,
  username:   Bookmark,
  password:   Key,
  jobTitle:   Briefcase,
  company:    Building2,
  address:    MapPin,
  city:       Building,
  country:    Globe,
  zipCode:    Mailbox,
  uuid:       Link,
  number:     Hash,
  float:      Waves,
  boolean:    Zap,
  color:      Palette,
  url:        Globe,
  ip:         Radio,
  date:       Calendar,
  datetime:   Clock,
  timestamp:  Timer,
  lorem:      FileText,
}

// ── Sub-components ────────────────────────────────────────────────────────────

function SectionLabel({ children }) {
  return (
    <h2 className="text-[10px] font-mono font-medium tracking-[0.15em] uppercase mb-4"
      style={{ color: 'var(--text-secondary)' }}>
      {children}
    </h2>
  )
}

function Chip({ type, active, onClick }) {
  const Icon = ICON_MAP[type.id] || HashIcon
  return (
    <button
      onClick={onClick}
      title={type.label}
      className="relative flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-[9999px]
                 transition-all duration-150 select-none cursor-pointer
                 active:translate-y-[1px] min-h-[36px]"
      style={active ? {
        background: 'var(--accent)',
        color: '#fff',
        boxShadow: '4px 4px 8px rgba(166,50,60,0.4), -2px -2px 6px rgba(255,100,110,0.3), 0 0 12px rgba(255,71,87,0.35)',
      } : {
        background: 'var(--bg)',
        color: 'var(--text-secondary)',
        boxShadow: '4px 4px 8px #babecc, -4px -4px 8px #ffffff',
      }}
    >
      <Icon size={12} strokeWidth={2} />
      {type.label}
      {active && (
        <span
          className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full animate-led-pulse"
          style={{ background: '#fff', boxShadow: '0 0 6px 1px rgba(255,255,255,0.8)' }}
        />
      )}
    </button>
  )
}

function FormatTab({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-1.5 text-[11px] font-mono font-medium tracking-wider uppercase
                 rounded-[9999px] transition-all duration-150 cursor-pointer min-h-[32px]
                 active:translate-y-[1px]"
      style={active ? {
        background: 'var(--bg)',
        color: 'var(--text-primary)',
        boxShadow: 'inset 3px 3px 6px #babecc, inset -3px -3px 6px #ffffff',
      } : {
        background: 'transparent',
        color: 'var(--text-secondary)',
        boxShadow: 'none',
      }}
    >
      {label}
    </button>
  )
}

function ActionButton({ children, onClick, variant = 'default', active = false, disabled = false, title }) {
  const base = "px-3 py-2 text-[11px] font-mono font-semibold tracking-wider uppercase rounded-[9999px] transition-all duration-150 cursor-pointer min-h-[36px] active:translate-y-[1px]"

  const styles = {
    default: {
      background: 'var(--bg)',
      color: 'var(--text-secondary)',
      boxShadow: '4px 4px 8px #babecc, -4px -4px 8px #ffffff',
    },
    accent: {
      background: 'var(--accent)',
      color: '#fff',
      boxShadow: '4px 4px 8px rgba(166,50,60,0.4), -2px -2px 6px rgba(255,100,110,0.3)',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-secondary)',
      boxShadow: 'none',
    },
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      title={title}
      className={base}
      style={{
        ...styles[variant],
        opacity: disabled ? 0.5 : 1,
        cursor: disabled ? 'not-allowed' : 'pointer',
      }}
    >
      {children}
    </button>
  )
}

// ── Corner screws decoration ─────────────────────────────────────────────────
function CornerScrews() {
  return (
    <>
      <span className="screw-tl" />
      <span className="screw-tr" />
      <span className="screw-bl" />
      <span className="screw-br" />
    </>
  )
}

// ── Main App ─────────────────────────────────────────────────────────────────

export default function App() {
  const [selected, setSelected]   = useState(DEFAULT_SELECTED)
  const [quantity, setQuantity]   = useState(10)
  const [data, setData]           = useState([])
  const [format, setFormat]       = useState('table')
  const [copied, setCopied]       = useState(null)
  const [generated, setGenerated] = useState(false)

  const selectedTypes = DATA_TYPES.filter(t => selected.has(t.id))

  // ── Actions ────────────────────────────────────────────────────────────────

  const toggleType = id => {
    setSelected(prev => {
      const next = new Set(prev)
      if (next.has(id)) {
        if (next.size > 1) next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  const generate = useCallback(() => {
    const types = DATA_TYPES.filter(t => selected.has(t.id))
    const rows  = Array.from({ length: quantity }, () => {
      const row = {}
      types.forEach(({ id }) => { row[id] = generators[id]() })
      return row
    })
    setData(rows)
    setGenerated(true)
  }, [selected, quantity])

  const copy = async (text, key) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(key)
      setTimeout(() => setCopied(null), 2000)
    } catch {/* silent */}
  }

  const toJSON = () => JSON.stringify(data, null, 2)

  const toCSV = () => {
    const cols   = selectedTypes.map(t => t.id)
    const header = cols.join(',')
    const rows   = data.map(row => cols.map(c => `"${String(row[c]).replace(/"/g, '""')}"`).join(','))
    return [header, ...rows].join('\n')
  }

  const exportFile = type => {
    const content  = type === 'json' ? toJSON() : toCSV()
    const filename = `random-data.${type}`
    const mime     = type === 'json' ? 'application/json' : 'text/csv'
    const blob = new Blob([content], { type: mime })
    const url  = URL.createObjectURL(blob)
    const a    = document.createElement('a')
    a.href = url; a.download = filename; a.click()
    URL.revokeObjectURL(url)
  }

  // ── Render ─────────────────────────────────────────────────────────────────

  const categories = Object.keys(CATEGORY_LABELS)

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)' }}>
      <div className="relative px-4 sm:px-8 py-10 sm:py-14 max-w-7xl mx-auto">

        {/* ── Header ────────────────────────────────────────────────────── */}
        <header className="text-center mb-10">
          {/* Status LED strip */}
          <div className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full"
            style={{
              background: 'var(--bg)',
              boxShadow: 'inset 2px 2px 4px #babecc, inset -2px -2px 4px #ffffff',
            }}>
            <span
              className="w-2 h-2 rounded-full animate-led-pulse"
              style={{ background: '#22c55e', boxShadow: '0 0 8px 2px rgba(34,197,94,0.6)' }}
            />
            <span className="text-[10px] font-mono font-medium tracking-[0.12em] uppercase" style={{ color: 'var(--text-secondary)' }}>
              System Operational
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-2"
            style={{
              color: 'var(--text-primary)',
              textShadow: '0 1px 0 #ffffff, 0 2px 4px rgba(0,0,0,0.08)',
              fontFamily: 'Inter, system-ui, sans-serif',
            }}
          >
            Random Data Generator
          </h1>
          <p className="text-sm font-mono" style={{ color: 'var(--text-secondary)' }}>
            Generate realistic mock data for testing, prototypes &amp; demos
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-6">

          {/* ── Left panel: Controls ─────────────────────────────────────── */}
          <aside className="space-y-4">

            {/* Data type selector */}
            <section
              className="relative p-5 rounded-[20px] overflow-hidden"
              style={{
                background: 'var(--bg)',
                boxShadow: '8px 8px 16px #babecc, -8px -8px 16px #ffffff',
              }}
            >
              <CornerScrews />
              {/* Vent slots top-right */}
              <div className="vents absolute top-4 right-4">
                <span /><span /><span />
              </div>

              <SectionLabel>Data Fields</SectionLabel>
              {categories.map(cat => {
                const types = DATA_TYPES.filter(t => t.category === cat)
                return (
                  <div key={cat} className="mb-5 last:mb-0">
                    <p className="text-[10px] font-mono font-semibold tracking-[0.12em] uppercase mb-2" style={{ color: 'var(--text-secondary)' }}>
                      {CATEGORY_LABELS[cat]}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {types.map(type => (
                        <Chip
                          key={type.id}
                          type={type}
                          active={selected.has(type.id)}
                          onClick={() => toggleType(type.id)}
                        />
                      ))}
                    </div>
                  </div>
                )
              })}
            </section>

            {/* Quantity control */}
            <section
              className="relative p-5 rounded-[20px] overflow-hidden"
              style={{
                background: 'var(--bg)',
                boxShadow: '8px 8px 16px #babecc, -8px -8px 16px #ffffff',
              }}
            >
              <CornerScrews />

              <div className="flex items-center justify-between mb-4">
                <SectionLabel>Quantity</SectionLabel>
                <span
                  className="text-2xl font-bold font-mono"
                  style={{
                    color: 'var(--accent)',
                    textShadow: '0 1px 0 #ffffff',
                  }}
                >
                  {quantity}
                </span>
              </div>

              {/* Recessed well for slider */}
              <div
                className="rounded-xl p-1 mb-2"
                style={{
                  background: 'var(--muted)',
                  boxShadow: 'inset 3px 3px 6px #babecc, inset -3px -3px 6px #ffffff',
                }}
              >
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={quantity}
                  onChange={e => setQuantity(Number(e.target.value))}
                  className="w-full"
                />
              </div>

              <div className="flex justify-between text-[10px] font-mono" style={{ color: 'var(--text-secondary)' }}>
                <span>1 row</span>
                <span>100 rows</span>
              </div>
            </section>

            {/* Generate button */}
            <button
              onClick={generate}
              className="w-full py-4 font-mono font-bold text-sm tracking-[0.1em] uppercase
                         rounded-[16px] transition-all duration-150 cursor-pointer
                         active:translate-y-[2px] min-h-[56px]"
              style={{
                background: 'var(--accent)',
                color: '#fff',
                boxShadow: '6px 6px 12px rgba(166,50,60,0.5), -3px -3px 8px rgba(255,100,110,0.4), 0 0 16px rgba(255,71,87,0.3)',
              }}
              onMouseDown={e => {
                e.currentTarget.style.boxShadow = 'inset 4px 4px 8px rgba(166,50,60,0.6), inset -4px -4px 8px rgba(255,100,110,0.3)'
                e.currentTarget.style.transform = 'translateY(2px)'
              }}
              onMouseUp={e => {
                e.currentTarget.style.boxShadow = '6px 6px 12px rgba(166,50,60,0.5), -3px -3px 8px rgba(255,100,110,0.4), 0 0 16px rgba(255,71,87,0.3)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = '6px 6px 12px rgba(166,50,60,0.5), -3px -3px 8px rgba(255,100,110,0.4), 0 0 16px rgba(255,71,87,0.3)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              Generate {quantity} Row{quantity !== 1 ? 's' : ''}
            </button>

            {/* Stats */}
            {generated && (
              <div
                className="flex items-center justify-between px-4 py-3 rounded-[12px] font-mono text-[10px] tracking-[0.1em] uppercase"
                style={{
                  background: 'var(--bg)',
                  boxShadow: 'inset 3px 3px 6px #babecc, inset -3px -3px 6px #ffffff',
                  color: 'var(--text-secondary)',
                }}
              >
                <span>
                  {data.length} rows · {selectedTypes.length} field{selectedTypes.length !== 1 ? 's' : ''}
                </span>
                <span>
                  {(data.length * selectedTypes.length).toLocaleString()} cells
                </span>
              </div>
            )}
          </aside>

          {/* ── Right panel: Output ──────────────────────────────────────── */}
          <main style={{ minWidth: 0, overflow: 'hidden' }}>
            {!generated ? (
              <div
                className="relative flex flex-col items-center justify-center overflow-hidden rounded-[20px]"
                style={{
                  minHeight: 420,
                  background: 'var(--bg)',
                  boxShadow: '8px 8px 16px #babecc, -8px -8px 16px #ffffff',
                }}
              >
                <CornerScrews />

                {/* Screen-like recessed area */}
                <div
                  className="flex flex-col items-center justify-center w-[200px] h-[120px] rounded-xl"
                  style={{
                    background: 'var(--muted)',
                    boxShadow: 'inset 4px 4px 8px #babecc, inset -4px -4px 8px #ffffff',
                  }}
                >
                  {/* CRT scanlines */}
                  <div
                    className="absolute inset-0 pointer-events-none rounded-xl overflow-hidden"
                    style={{
                      background: 'repeating-linear-gradient(rgba(0,0,0,0.04) 0px, rgba(0,0,0,0.04) 1px, transparent 1px, transparent 3px)',
                    }}
                  />
                  {/* Dice icon */}
                  <div
                    className="w-16 h-16 rounded-[16px] flex items-center justify-center mb-3"
                    style={{
                      background: 'var(--bg)',
                      boxShadow: '4px 4px 8px #babecc, -4px -4px 8px #ffffff',
                    }}
                  >
                    <span className="text-3xl" role="img" aria-label="dice">🎲</span>
                  </div>
                  <p className="text-[11px] font-mono text-center tracking-wide" style={{ color: 'var(--text-secondary)' }}>
                    Pick fields · Hit Generate
                  </p>
                </div>
              </div>
            ) : (
              <div
                className="relative overflow-hidden rounded-[20px]"
                style={{
                  background: 'var(--bg)',
                  boxShadow: '8px 8px 16px #babecc, -8px -8px 16px #ffffff',
                }}
              >
                <CornerScrews />
                {/* Vent slots top-right */}
                <div className="vents absolute top-4 right-4 z-10">
                  <span /><span /><span />
                </div>

                {/* Output toolbar */}
                <div
                  className="flex flex-wrap items-center justify-between gap-3 px-5 py-3.5"
                  style={{ borderBottom: '1px solid var(--border)' }}
                >
                  {/* Format tabs */}
                  <div
                    className="flex items-center gap-1 p-1 rounded-[9999px]"
                    style={{
                      background: 'var(--muted)',
                      boxShadow: 'inset 3px 3px 6px #babecc, inset -3px -3px 6px #ffffff',
                    }}
                  >
                    {['table', 'json', 'csv'].map(f => (
                      <FormatTab key={f} label={f} active={format === f} onClick={() => setFormat(f)} />
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2">
                    <ActionButton
                      onClick={() => copy(format === 'csv' ? toCSV() : toJSON(), 'all')}
                      variant={copied === 'all' ? 'accent' : 'default'}
                      title="Copy to clipboard"
                    >
                      <span className="inline-flex items-center gap-1.5">
                        {copied === 'all' ? <CheckCircle2 size={12} /> : <Copy size={12} />}
                        {copied === 'all' ? 'Copied' : 'Copy All'}
                      </span>
                    </ActionButton>

                    <ActionButton onClick={() => exportFile('json')} title="Export as JSON">
                      <span className="inline-flex items-center gap-1.5">
                        <Download size={12} /> JSON
                      </span>
                    </ActionButton>

                    <ActionButton onClick={() => exportFile('csv')} title="Export as CSV">
                      <span className="inline-flex items-center gap-1.5">
                        <Download size={12} /> CSV
                      </span>
                    </ActionButton>

                    <ActionButton onClick={generate} variant="accent" title="Regenerate data">
                      <span className="inline-flex items-center gap-1.5">
                        <RotateCcw size={12} /> Regenerate
                      </span>
                    </ActionButton>
                  </div>
                </div>

                {/* Table view */}
                {format === 'table' && (
                  <div style={{ overflowX: 'auto', overflowY: 'auto', maxHeight: 560 }}>
                    <table className="text-xs font-mono w-full" style={{ minWidth: 'max-content' }}>
                      <thead style={{ position: 'sticky', top: 0, zIndex: 1 }}>
                        <tr style={{
                          background: 'var(--muted)',
                          boxShadow: '0 3px 6px rgba(186,190,204,0.5)',
                        }}>
                          <th
                            className="px-4 py-3 text-left font-medium whitespace-nowrap tracking-wider uppercase"
                            style={{ color: 'var(--text-secondary)', width: 48 }}
                          >
                            #
                          </th>
                          {selectedTypes.map(t => {
                            const Icon = ICON_MAP[t.id] || HashIcon
                            return (
                              <th
                                key={t.id}
                                className="px-4 py-3 text-left font-medium whitespace-nowrap tracking-wider uppercase"
                                style={{ color: 'var(--text-secondary)' }}
                              >
                                <span className="inline-flex items-center gap-1.5">
                                  <Icon size={11} strokeWidth={2} />
                                  {t.label}
                                </span>
                              </th>
                            )
                          })}
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((row, i) => (
                          <tr
                            key={i}
                            style={{ borderBottom: '1px solid rgba(186,190,204,0.4)' }}
                            className="transition-all duration-100"
                            onMouseEnter={e => e.currentTarget.style.background = 'rgba(186,190,204,0.15)'}
                            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                          >
                            <td className="px-4 py-3 whitespace-nowrap" style={{ color: 'var(--text-secondary)' }}>{i + 1}</td>
                            {selectedTypes.map(t => {
                              const val    = String(row[t.id])
                              const key    = `${i}-${t.id}`
                              const isCol  = t.id === 'color'
                              const isBool = t.id === 'boolean'
                              const isCopied = copied === key

                              return (
                                <td
                                  key={t.id}
                                  className="px-4 py-3 cursor-pointer transition-all duration-100 whitespace-nowrap"
                                  title="Click to copy"
                                  style={{
                                    color: isCopied ? 'var(--green)' : 'var(--text-secondary)',
                                    maxWidth: 260,
                                  }}
                                  onClick={() => copy(val, key)}
                                >
                                  {isCol ? (
                                    <span className="inline-flex items-center gap-2">
                                      <span
                                        className="inline-block w-4 h-4 flex-shrink-0 rounded"
                                        style={{
                                          background: val,
                                          boxShadow: 'inset 1px 1px 2px rgba(0,0,0,0.15)',
                                        }}
                                      />
                                      {val}
                                    </span>
                                  ) : isBool ? (
                                    <span
                                      className="inline-flex items-center gap-1"
                                      style={{ color: val === 'true' ? '#22c55e' : 'var(--accent)' }}
                                    >
                                      <span
                                        className="w-1.5 h-1.5 rounded-full"
                                        style={{
                                          background: val === 'true' ? '#22c55e' : 'var(--accent)',
                                          boxShadow: val === 'true'
                                            ? '0 0 6px rgba(34,197,94,0.6)'
                                            : '0 0 6px rgba(255,71,87,0.5)',
                                        }}
                                      />
                                      {val}
                                    </span>
                                  ) : (
                                    <span className="block truncate" style={{ maxWidth: 200 }}>{val}</span>
                                  )}
                                </td>
                              )
                            })}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* JSON / CSV view */}
                {(format === 'json' || format === 'csv') && (
                  <div className="relative" style={{ maxHeight: 560, overflow: 'auto' }}>
                    <pre
                      className="p-5 text-xs font-mono leading-relaxed whitespace-pre overflow-x-auto"
                      style={{
                        color: 'var(--text-secondary)',
                        minHeight: 200,
                        background: 'var(--muted)',
                        boxShadow: 'inset 3px 3px 6px #babecc, inset -3px -3px 6px #ffffff',
                        margin: '12px',
                        borderRadius: '12px',
                      }}
                    >
                      {format === 'json' ? toJSON() : toCSV()}
                    </pre>
                  </div>
                )}
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p className="footer-text">Made with passion by Nipun Kachwaha</p>
          <div className="social-links">
            <a href="https://space3dportfolio.netlify.app" target="_blank" rel="noopener noreferrer" aria-label="Portfolio">
              <span className="social-icon"><img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f310.svg" width="20" height="20" alt="Portfolio" /></span>
            </a>
            <a href="https://github.com/NipunKachwaha" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <span className="social-icon"><img src="https://skillicons.dev/icons?i=github" width="20" height="20" alt="GitHub" /></span>
            </a>
            <a href="https://www.linkedin.com/in/nipun-/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <span className="social-icon"><img src="https://skillicons.dev/icons?i=linkedin" width="20" height="20" alt="LinkedIn" /></span>
            </a>
            <a href="https://www.instagram.com/thakurxnipun/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <span className="social-icon"><img src="https://skillicons.dev/icons?i=instagram" width="20" height="20" alt="Instagram" /></span>
            </a>
            <a href="https://x.com/desireofrana" target="_blank" rel="noopener noreferrer" aria-label="X">
              <span className="social-icon"><img src="https://skillicons.dev/icons?i=twitter" width="20" height="20" alt="X" /></span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
