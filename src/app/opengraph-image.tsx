import { ImageResponse } from 'next/og';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(120deg, #fef6ee, #f8f4ef, #e8edf4)',
          color: '#0f172a',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ fontSize: 24, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#f36b1c' }}>
          NexGen Consulting
        </div>
        <div style={{ fontSize: 56, fontWeight: 700, marginTop: 24, lineHeight: 1.1 }}>
          Digitalisierung & Prozessautomatisierung für KMU
        </div>
        <div style={{ fontSize: 28, marginTop: 24, maxWidth: 900, color: '#526070' }}>
          Weniger manuelle Arbeit, klare Abläufe, messbare Entlastung.
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
