import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    // You can customize the image based on search params if needed
    const title = searchParams.get('title') || 'Namqula LRLM';
    const subtitle = searchParams.get('subtitle') || 'African-First AI Language Model';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #0ea5e9 0%, #fbbf24 100%)',
            fontFamily: 'Inter, sans-serif',
            color: 'white',
          }}
        >
          {/* Logo placeholder - you can add actual logo if you have it as a base64 or hosted URL */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '120px',
              height: '120px',
              background: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '16px',
              marginBottom: '32px',
              fontSize: '48px',
              fontWeight: 'bold',
            }}
          >
            AISOD
          </div>

          <h1
            style={{
              fontSize: '64px',
              fontWeight: 'bold',
              margin: '0 0 16px 0',
              textAlign: 'center',
              maxWidth: '800px',
              lineHeight: '1.1',
            }}
          >
            {title}
          </h1>

          <p
            style={{
              fontSize: '32px',
              fontWeight: '400',
              margin: '0 0 24px 0',
              textAlign: 'center',
              maxWidth: '700px',
              opacity: '0.9',
              lineHeight: '1.2',
            }}
          >
            {subtitle}
          </p>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '24px',
              fontSize: '20px',
              fontWeight: '500',
              opacity: '0.8',
            }}
          >
            <span>65% More Efficient</span>
            <span>•</span>
            <span>Offline-Capable</span>
            <span>•</span>
            <span>Built for Africa</span>
          </div>

          <div
            style={{
              position: 'absolute',
              bottom: '40px',
              right: '40px',
              fontSize: '18px',
              fontWeight: '500',
              opacity: '0.7',
            }}
          >
            aisod.solutions
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}