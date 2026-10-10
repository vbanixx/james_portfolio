const CX = 350
const CY = 280
const ICON_Y = 21

const icons = [
  { k: 'figma', x: 296 },
  { k: 'js', x: 335 },
  { k: 'react', x: 374 },
  { k: 'node', x: 415 },
]

const scatter = [
  { x: 97, y: 77, s: 'sq' },
  { x: 125, y: 110, s: 'dot' },
  { x: 59, y: 151, s: 'sq' },
  { x: 132, y: 155, s: 'arrow' },
  { x: 172, y: 55, s: 'sq' },
  { x: 550, y: 70, s: 'code' },
  { x: 592, y: 67, s: 'sq' },
  { x: 639, y: 87, s: 'atom' },
  { x: 671, y: 118, s: 'hex' },
  { x: 632, y: 127, s: 'sq' },
  { x: 587, y: 168, s: 'fig' },
]

function Glyph({ k }) {
  switch (k) {
    case 'figma':
      return (
        <g>
          <circle cx="-3" cy="-6" r="3.4" fill="#f24e1e" />
          <circle cx="3.4" cy="-6" r="3.4" fill="#ff7262" />
          <circle cx="-3" cy="0" r="3.4" fill="#a259ff" />
          <circle cx="3.4" cy="0" r="3.4" fill="#1abcfe" />
          <circle cx="-3" cy="6" r="3.4" fill="#0acf83" />
        </g>
      )
    case 'js':
      return (
        <g>
          <rect x="-9" y="-9" width="18" height="18" rx="2" fill="#f7df1e" />
          <text x="8" y="8" textAnchor="end" fontSize="8" fontWeight="700" fill="#222">
            JS
          </text>
        </g>
      )
    case 'react':
      return (
        <g fill="none" stroke="#61dafb" strokeWidth="1.1">
          <ellipse rx="9" ry="3.6" />
          <ellipse rx="9" ry="3.6" transform="rotate(60)" />
          <ellipse rx="9" ry="3.6" transform="rotate(120)" />
          <circle r="1.6" fill="#61dafb" stroke="none" />
        </g>
      )
    default:
      return (
        <text textAnchor="middle" dominantBaseline="central" fontSize="7" fontWeight="700" fill="#fff">
          n<tspan fill="#6cc24a">o</tspan>de
        </text>
      )
  }
}

function Scatter({ s }) {
  const p = { fill: 'none', stroke: '#7c3aed', strokeWidth: 1, strokeLinecap: 'round', strokeLinejoin: 'round' }
  switch (s) {
    case 'dot':
      return <circle r="5" {...p} />
    case 'arrow':
      return <path d="M-6 -2l12 -3-5 6-2 -1-3 5z" {...p} />
    case 'code':
      return (
        <text textAnchor="middle" dominantBaseline="central" fontSize="9" fontWeight="700" fill="#7c3aed">
          {'<>'}
        </text>
      )
    case 'atom':
      return (
        <g {...p}>
          <ellipse rx="6" ry="2.4" />
          <ellipse rx="6" ry="2.4" transform="rotate(60)" />
          <ellipse rx="6" ry="2.4" transform="rotate(120)" />
        </g>
      )
    case 'hex':
      return <path d="M0 -6l5.2 3v6L0 6l-5.2-3v-6z" {...p} />
    case 'fig':
      return (
        <g {...p}>
          <circle cx="-2" cy="-3.5" r="2.3" />
          <circle cx="2.4" cy="-3.5" r="2.3" />
          <circle cx="-2" cy="1" r="2.3" />
          <circle cx="-2" cy="5" r="2.3" />
        </g>
      )
    default:
      return <rect x="-4.5" y="-4.5" width="9" height="9" rx="2" {...p} />
  }
}

export default function TechOrbit() {
  return (
    <svg
      className="orbit"
      viewBox="0 0 700 430"
      role="img"
      aria-label="Technologies I use: Figma, JavaScript, React and Node.js"
    >
      <defs>
        <radialGradient id="orbitGlow">
          <stop offset="0" stopColor="#7c3aed" stopOpacity=".5" />
          <stop offset=".55" stopColor="#5b21b6" stopOpacity=".18" />
          <stop offset="1" stopColor="#0e0620" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="orbitCore" cx=".5" cy=".3">
          <stop offset="0" stopColor="#7a45d1" />
          <stop offset="1" stopColor="#4a2490" />
        </radialGradient>
        <filter id="barGlow" x="-50%" y="-200%" width="200%" height="500%">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* glow */}
      <circle cx={CX} cy={CY + 30} r="210" fill="url(#orbitGlow)" />

      {/* orbit rings */}
      {[
        [316, 100],
        [290, 92],
        [255, 82],
        [120, 58],
      ].map(([rx, ry], i) => (
        <ellipse
          key={i}
          cx={CX + 5}
          cy={i === 3 ? CY + 14 : 318}
          rx={rx}
          ry={ry}
          fill="none"
          stroke="#7c3aed"
          strokeOpacity={i === 3 ? 0.5 : 0.8}
          strokeWidth=".9"
        />
      ))}

      {/* fanned lines */}
      {icons.map((it) => (
        <path
          key={it.k}
          d={`M${it.x} ${ICON_Y + 16} C ${it.x} 130, ${CX - (CX - it.x) * 0.1} 150, ${CX} ${CY - 65}`}
          fill="none"
          stroke="#a78bfa"
          strokeOpacity=".4"
          strokeWidth=".8"
        />
      ))}

      {/* scattered mini icons */}
      {scatter.map((sc, i) => (
        <g key={i} transform={`translate(${sc.x} ${sc.y})`} opacity=".8">
          <Scatter s={sc.s} />
        </g>
      ))}

      {/* core */}
      <circle cx={CX} cy={CY} r="65" fill="url(#orbitCore)" />
      {/* logo: two chevrons between a top and bottom bar */}
      <g
        filter="url(#barGlow)"
        transform={`translate(${CX - 28.6} ${CY - 33}) scale(2.2)`}
        fill="none"
        stroke="#fff"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 3h20" />
        <path d="M3 27h20" />
        <path d="M9 9l-7 6.5 7 6.5" />
        <path d="M18 9l-7 6.5 7 6.5" />
      </g>

      {/* top icons */}
      {icons.map((it) => (
        <g key={`i-${it.k}`} transform={`translate(${it.x} ${ICON_Y})`}>
          <circle r="16" fill="#1e1e24" stroke="#a78bfa" strokeOpacity=".25" />
          <Glyph k={it.k} />
        </g>
      ))}
    </svg>
  )
}
