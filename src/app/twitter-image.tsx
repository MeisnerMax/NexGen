import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
  width: 1200,
  height: 600,
};

export const contentType = 'image/png';

export default function TwitterImage() {
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
        <div style={{ fontSize: 22, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#f36b1c' }}>
          NexGen Consulting
        </div>
        <div style={{ fontSize: 52, fontWeight: 700, marginTop: 20, lineHeight: 1.1 }}>
          Prozessautomatisierung, die wirkt
        </div>
        <div style={{ fontSize: 26, marginTop: 20, maxWidth: 900, color: '#526070' }}>
          Für KMU in Oberfranken und dem DACH-Raum.
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
