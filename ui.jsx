// Shared UI primitives for FOMO Campus mobile app.
// Mobile-tuned overrides on top of the FOMO design system (colors_and_type.css).

const FOMO_BG = '#f9f4e8';
const FOMO_INK = '#111111';
const FOMO_PINK = '#fcc9ca';
const FOMO_PINK_SOFT = '#fff5f5';
const FOMO_INK_2 = '#5b5b5b';
const FOMO_BORDER = '#e6dcc4';      // beige-300 — softer than ink-200 on cream
const FOMO_HAIRLINE = '#1a1a1a';    // editorial hairline
const FOMO_GREEN = '#738c70';
const FOMO_GREEN_LIGHT = '#eaf4df';

// ---- Icon ----
// Lucide via inline SVG name lookup. Falls back to a 1px square if missing.
const ICON_PATHS = {
  bell: 'M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9M10.3 21a1.94 1.94 0 0 0 3.4 0',
  scan: 'M3 7V5a2 2 0 0 1 2-2h2 M17 3h2a2 2 0 0 1 2 2v2 M21 17v2a2 2 0 0 1-2 2h-2 M7 21H5a2 2 0 0 1-2-2v-2 M7 8v8 M11 8v8 M15 8v8',
  arrow_right: 'M5 12h14 M12 5l7 7-7 7',
  arrow_up_right: 'M7 7h10v10 M7 17 17 7',
  chevron_right: 'm9 18 6-6-6-6',
  chevron_down: 'm6 9 6 6 6-6',
  chevron_left: 'm15 18-6-6 6-6',
  plus: 'M5 12h14 M12 5v14',
  minus: 'M5 12h14',
  filter: 'M22 3H2l8 9.46V19l4 2v-8.54L22 3z',
  search: 'm21 21-4.34-4.34 M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16z',
  clock: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z M12 6v6l4 2',
  home: 'm3 12 9-9 9 9 M5 10v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V10',
  calendar: 'M8 2v4 M16 2v4 M3 10h18 M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z',
  utensils: 'M3 2v7c0 1.1.9 2 2 2h2v11 M7 2v9 M11 2v20 M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3z',
  message: 'M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z',
  life_buoy: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z M4.93 4.93l4.24 4.24 M14.83 14.83l4.24 4.24 M14.83 9.17l4.24-4.24 M14.83 9.17 18.36 5.64 M4.93 19.07l4.24-4.24 M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0z',
  map_pin: 'M20 10c0 7-8 12-8 12s-8-5-8-12a8 8 0 0 1 16 0z M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',
  users: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M22 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75',
  monitor: 'M2 3h20v14H2z M8 21h8 M12 17v4',
  wifi: 'M5 12.55a11 11 0 0 1 14.08 0 M1.42 9a16 16 0 0 1 21.16 0 M8.53 16.11a6 6 0 0 1 6.95 0 M12 20h.01',
  dumbbell: 'm6.5 6.5 11 11 M21 21l-1-1 M3 3l1 1 M18 22l4-4 M2 6l4-4 M3 10l7-7 M14 21l7-7',
  door: 'M14 2H6a2 2 0 0 0-2 2v17h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0 0v6h6 M11 13h.01',
  printer: 'M6 9V2h12v7 M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2 M6 14h12v8H6z',
  broom: 'M11 14l4-4 M5 21l5-5 M14 11l5 5 M14 4l6 6-5 5-6-6z M3 21l8-8',
  help_circle: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3 M12 17h.01',
  paperclip: 'M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48',
  camera: 'M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z M12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8z',
  check: 'M20 6 9 17l-5-5',
  star: 'm12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z',
  flame: 'M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z',
  sparkles: 'M12 3l1.91 5.09L19 10l-5.09 1.91L12 17l-1.91-5.09L5 10l5.09-1.91z M19 17l1.272 3.272L23 22l-2.728 1.272L19 26 M5 17l-.5 1.5L3 19l1.5.5L5 21',
  croissant: 'm4.6 13.11 5.79-3.21c1.89-1.05 4.79 1.78 3.71 3.71l-3.22 5.81C8.8 23.16.79 15.23 4.6 13.11z',
  coffee: 'M17 8h1a4 4 0 1 1 0 8h-1 M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z M6 1v3 M10 1v3 M14 1v3',
  wine: 'M8 22h8 M7 10h10 M12 15v7 M12 15a5 5 0 0 0 5-5V3H7v7a5 5 0 0 0 5 5z',
  fish: 'M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6zM18 12v.01 M3 5l3 6.5-3 6.5 M16 6l3 6-3 6',
  trending: 'M22 7 13.5 15.5 8.5 10.5 2 17 M16 7h6v6',
  sun: 'M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10z M12 1v2 M12 21v2 M4.22 4.22l1.42 1.42 M18.36 18.36l1.42 1.42 M1 12h2 M21 12h2 M4.22 19.78l1.42-1.42 M18.36 5.64l1.42-1.42',
  qr: 'M3 11h8V3H3z M13 3h8v8h-8z M13 13h3v3h-3z M18 13h3v3h-3z M13 18h3v3h-3z M18 18h3v3h-3z M3 13h3v3H3z M8 13h3v3H8z M3 18h3v3H3z M8 18h3v3H8z',
  shield: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
  lock: 'M5 11h14v10H5z M8 11V7a4 4 0 0 1 8 0v4',
  badge: 'M3 11l3 3 3 3 9-9 M21 12v6a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-6',
  more: 'M5 12h.01 M12 12h.01 M19 12h.01',
};

function Icon({ name, size = 18, color = 'currentColor', stroke = 1.6, fill = 'none' }) {
  const d = ICON_PATHS[name];
  if (!d) return <span style={{ display: 'inline-block', width: size, height: size, background: '#ccc' }} />;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={color}
      strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      {d.split(' M').map((p, i) => (
        <path key={i} d={(i === 0 ? '' : 'M') + p} />
      ))}
    </svg>
  );
}

// ---- Eyebrow label ----
function Eyebrow({ children, color = FOMO_INK, style = {} }) {
  return (
    <div style={{
      fontFamily: 'DM Sans, system-ui', fontSize: 10.5, fontWeight: 700,
      letterSpacing: '0.18em', textTransform: 'uppercase', color,
      ...style,
    }}>{children}</div>
  );
}

// ---- Editorial hairline ----
function Hairline({ color = FOMO_HAIRLINE, style = {} }) {
  return <div style={{ height: 1, background: color, ...style }} />;
}

// ---- Section heading (display serif) ----
function SectionTitle({ children, size = 22, style = {} }) {
  return (
    <h2 style={{
      fontFamily: '"DM Serif Display", Georgia, serif', fontWeight: 400,
      fontSize: size, lineHeight: 1.1, letterSpacing: '-0.02em',
      color: FOMO_INK, margin: 0, ...style,
    }}>{children}</h2>
  );
}

// ---- Primary button (black pill, sentence case) ----
function PrimaryButton({ children, onClick, fullWidth = false, icon, size = 'md', style = {} }) {
  const padY = size === 'lg' ? 16 : size === 'sm' ? 10 : 13;
  const padX = size === 'lg' ? 22 : size === 'sm' ? 14 : 18;
  const fs = size === 'lg' ? 16 : size === 'sm' ? 13 : 14;
  return (
    <button onClick={onClick} style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
      padding: `${padY}px ${padX}px`,
      background: FOMO_INK, color: '#fff', border: 'none',
      borderRadius: 999, fontFamily: 'DM Sans, system-ui',
      fontSize: fs, fontWeight: 500, letterSpacing: '-0.005em',
      cursor: 'pointer', width: fullWidth ? '100%' : undefined,
      transition: 'transform .12s, background .12s', ...style,
    }}
    onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.98)'}
    onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
      {children}
      {icon && <Icon name={icon} size={fs + 2} />}
    </button>
  );
}

// ---- Ghost / outline button ----
function GhostButton({ children, onClick, icon, style = {} }) {
  return (
    <button onClick={onClick} style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: '10px 14px', background: 'transparent', color: FOMO_INK,
      border: `1px solid ${FOMO_INK}`, borderRadius: 999,
      fontFamily: 'DM Sans, system-ui', fontSize: 13, fontWeight: 500,
      cursor: 'pointer', ...style,
    }}>
      {children}
      {icon && <Icon name={icon} size={14} />}
    </button>
  );
}

// ---- Pill / chip ----
function Pill({ children, active = false, onClick, icon, style = {} }) {
  return (
    <button onClick={onClick} style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: '7px 12px',
      background: active ? FOMO_INK : 'transparent',
      color: active ? '#fff' : FOMO_INK,
      border: `1px solid ${active ? FOMO_INK : '#1a1a1a'}`,
      borderRadius: 999, fontFamily: 'DM Sans, system-ui', fontSize: 12,
      fontWeight: 500, letterSpacing: '-0.005em', cursor: 'pointer',
      whiteSpace: 'nowrap', transition: 'all .15s', ...style,
    }}>
      {icon && <Icon name={icon} size={12} />}
      {children}
    </button>
  );
}

// ---- Toggle switch (FOMO style — black on cream) ----
function Toggle({ checked, onChange }) {
  return (
    <button onClick={() => onChange(!checked)} style={{
      width: 44, height: 26, borderRadius: 999, position: 'relative',
      background: checked ? FOMO_INK : '#d6cfbe',
      border: 'none', cursor: 'pointer', padding: 0,
      transition: 'background .2s',
    }}>
      <span style={{
        position: 'absolute', top: 3, left: checked ? 21 : 3,
        width: 20, height: 20, borderRadius: '50%', background: '#fff',
        transition: 'left .2s', boxShadow: '0 1px 3px rgba(0,0,0,.15)',
      }} />
    </button>
  );
}

// ---- Image placeholder plate (editorial colored block) ----
// Used as stand-in for room photography + food photography.
// Each plate is a textured solid color with an inner hairline frame
// + a label so the plate reads as an intentional editorial illustration.
function ImagePlate({ tone = 'sand', label, sublabel, height = 140, full = false, style = {}, decor }) {
  const PALETTE = {
    sand:    { bg: '#e9d8b8', ink: '#3a2a1a', frond: '#b89564' },
    beach:   { bg: '#cfe4e3', ink: '#1f3a3a', frond: '#7faaa8' },
    sunset:  { bg: '#f0b894', ink: '#3a1f10', frond: '#c87a48' },
    leather: { bg: '#b56a4c', ink: '#2a0f06', frond: '#8a4530' },
    night:   { bg: '#1f2433', ink: '#e8d6a8', frond: '#4a5470' },
    olive:   { bg: '#aab78c', ink: '#1f2a14', frond: '#7a8a5a' },
    rose:    { bg: '#f0a8a8', ink: '#3a1014', frond: '#c87078' },
    cream:   { bg: '#f1e8c8', ink: '#3a2a14', frond: '#c8b88a' },
    curry:   { bg: '#d68a2a', ink: '#2a1a00', frond: '#8a5810' },
    forest:  { bg: '#3a5a3a', ink: '#e8f0d8', frond: '#1f3a1f' },
    porter:  { bg: '#3a2014', ink: '#e8d6a8', frond: '#1f0a05' },
    melon:   { bg: '#e87a78', ink: '#3a0a14', frond: '#b85056' },
    aqua:    { bg: '#a8d6d4', ink: '#0f2a2a', frond: '#6a9a98' },
    bronze:  { bg: '#a8794a', ink: '#2a1408', frond: '#7a4f2a' },
    moss:    { bg: '#7a8a5a', ink: '#1f2a0f', frond: '#5a6a3a' },
  };
  const p = PALETTE[tone] || PALETTE.sand;
  return (
    <div style={{
      position: 'relative', overflow: 'hidden',
      height, width: full ? '100%' : undefined,
      background: p.bg, color: p.ink,
      borderRadius: 4, ...style,
    }}>
      {/* paper grain */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `radial-gradient(circle at 20% 30%, rgba(255,255,255,0.18), transparent 60%), radial-gradient(circle at 80% 80%, rgba(0,0,0,0.12), transparent 50%)`,
        mixBlendMode: 'overlay',
      }} />
      {/* abstract botanical decor */}
      <svg viewBox="0 0 200 200" preserveAspectRatio="xMaxYMin slice" style={{
        position: 'absolute', right: -20, top: -10, width: '60%', height: '110%',
        opacity: 0.55, color: p.frond,
      }}>
        {decor === 'palm' || !decor ? (
          <g fill="currentColor">
            <ellipse cx="120" cy="40" rx="6" ry="40" transform="rotate(20 120 40)" />
            <ellipse cx="140" cy="55" rx="5" ry="45" transform="rotate(45 140 55)" />
            <ellipse cx="155" cy="75" rx="5" ry="48" transform="rotate(70 155 75)" />
            <ellipse cx="105" cy="55" rx="5" ry="42" transform="rotate(-10 105 55)" />
            <ellipse cx="90" cy="80" rx="5" ry="45" transform="rotate(-35 90 80)" />
          </g>
        ) : decor === 'circle' ? (
          <g>
            <circle cx="140" cy="60" r="50" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="140" cy="60" r="30" fill="currentColor" opacity="0.4" />
          </g>
        ) : decor === 'stripes' ? (
          <g stroke="currentColor" strokeWidth="2" fill="none">
            {[0,1,2,3,4,5,6,7].map(i => <line key={i} x1={120 + i*10} y1="0" x2={60 + i*10} y2="200" />)}
          </g>
        ) : null}
      </svg>
      {/* inner hairline frame */}
      <div style={{
        position: 'absolute', inset: 8,
        border: `1px solid ${p.ink}`, opacity: 0.25, pointerEvents: 'none',
        borderRadius: 2,
      }} />
      {label && (
        <div style={{
          position: 'absolute', left: 14, bottom: 12, right: 60,
          fontFamily: '"DM Serif Display", Georgia, serif',
          fontSize: 18, lineHeight: 1.05, letterSpacing: '-0.02em',
          color: p.ink,
        }}>
          {label}
          {sublabel && <div style={{
            fontFamily: 'DM Sans, system-ui', fontSize: 9, fontWeight: 600,
            letterSpacing: '0.18em', textTransform: 'uppercase',
            opacity: 0.7, marginTop: 4,
          }}>{sublabel}</div>}
        </div>
      )}
    </div>
  );
}

// ---- Bottom nav (persistent) ----
function BottomNav({ active = 'home', onChange = () => {} }) {
  const tabs = [
    { id: 'home', label: 'Home', icon: 'home' },
    { id: 'bookings', label: 'Bookings', icon: 'calendar' },
    { id: 'food', label: 'Order', icon: 'utensils' },
    { id: 'community', label: 'Community', icon: 'users' },
    { id: 'support', label: 'Support', icon: 'life_buoy' },
  ];
  return (
    <div style={{
      position: 'absolute', bottom: 0, left: 0, right: 0,
      background: 'rgba(249,244,232,0.92)',
      backdropFilter: 'blur(14px) saturate(180%)',
      WebkitBackdropFilter: 'blur(14px) saturate(180%)',
      borderTop: `1px solid ${FOMO_HAIRLINE}`,
      paddingBottom: 28, paddingTop: 8, zIndex: 100,
    }}>
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)',
        padding: '0 4px',
      }}>
        {tabs.map(t => {
          const isActive = active === t.id;
          return (
            <button key={t.id} onClick={() => onChange(t.id)} style={{
              background: 'transparent', border: 'none', cursor: 'pointer',
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              gap: 3, padding: '6px 0', position: 'relative',
              color: isActive ? FOMO_INK : FOMO_INK_2,
            }}>
              {isActive && <div style={{
                position: 'absolute', top: -9, left: '50%', transform: 'translateX(-50%)',
                width: 22, height: 2, background: FOMO_INK, borderRadius: 1,
              }} />}
              <Icon name={t.icon} size={20} stroke={isActive ? 1.8 : 1.4} />
              <span style={{
                fontFamily: 'DM Sans, system-ui', fontSize: 9.5,
                fontWeight: isActive ? 700 : 500,
                letterSpacing: '0.06em', textTransform: 'uppercase',
              }}>{t.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ---- Phone status bar (custom, FOMO-styled) ----
function StatusBar({ time = '8:47', dark = false }) {
  const c = dark ? '#fff' : '#111';
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '12px 28px 4px', position: 'relative', zIndex: 20,
    }}>
      <span style={{
        fontFamily: '-apple-system, "SF Pro", system-ui',
        fontWeight: 600, fontSize: 15, color: c, letterSpacing: -0.2,
      }}>{time}</span>
      <div style={{ display: 'flex', gap: 5, alignItems: 'center', paddingRight: 1 }}>
        <svg width="16" height="11" viewBox="0 0 19 12">
          <rect x="0" y="7.5" width="3.2" height="4.5" rx="0.7" fill={c}/>
          <rect x="4.8" y="5" width="3.2" height="7" rx="0.7" fill={c}/>
          <rect x="9.6" y="2.5" width="3.2" height="9.5" rx="0.7" fill={c}/>
          <rect x="14.4" y="0" width="3.2" height="12" rx="0.7" fill={c}/>
        </svg>
        <svg width="14" height="10" viewBox="0 0 17 12">
          <path d="M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z" fill={c}/>
          <path d="M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z" fill={c}/>
          <circle cx="8.5" cy="10.5" r="1.5" fill={c}/>
        </svg>
        <svg width="23" height="11" viewBox="0 0 27 13">
          <rect x="0.5" y="0.5" width="23" height="12" rx="3.5" stroke={c} strokeOpacity="0.45" fill="none"/>
          <rect x="2" y="2" width="18" height="9" rx="2" fill={c}/>
          <path d="M25 4.5V8.5C25.8 8.2 26.5 7.2 26.5 6.5C26.5 5.8 25.8 4.8 25 4.5Z" fill={c} fillOpacity="0.4"/>
        </svg>
      </div>
    </div>
  );
}

// ---- Home indicator (mocked at bottom of phone) ----
function HomeIndicator({ dark = false }) {
  return (
    <div style={{
      position: 'absolute', bottom: 6, left: 0, right: 0,
      display: 'flex', justifyContent: 'center', zIndex: 200, pointerEvents: 'none',
    }}>
      <div style={{
        width: 110, height: 4, borderRadius: 999,
        background: dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.25)',
      }} />
    </div>
  );
}

// ---- App shell wrapper (consistent paddings) ----
function Screen({ children, bg = FOMO_BG, style = {} }) {
  return (
    <div style={{
      position: 'absolute', inset: 0,
      background: bg, overflow: 'hidden',
      fontFamily: 'DM Sans, system-ui',
      ...style,
    }}>
      {children}
    </div>
  );
}

Object.assign(window, {
  FOMO_BG, FOMO_INK, FOMO_PINK, FOMO_PINK_SOFT, FOMO_INK_2, FOMO_BORDER,
  FOMO_HAIRLINE, FOMO_GREEN, FOMO_GREEN_LIGHT,
  Icon, Eyebrow, Hairline, SectionTitle, PrimaryButton, GhostButton,
  Pill, Toggle, ImagePlate, BottomNav, StatusBar, HomeIndicator, Screen,
});
