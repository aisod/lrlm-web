# Open Graph Image Creation Instructions

## Required Image Specifications

- **Dimensions**: 1200 x 630 pixels (1.91:1 aspect ratio)
- **Format**: PNG (recommended) or JPG
- **File Name**: `og-image.png`
- **Location**: `public/og-image.png`

## Design Guidelines

### Content to Include:

1. **AISOD Logo**
   - Position: Top left or centered
   - Size: Prominent but not overwhelming

2. **Main Title**
   - Text: "Namqula LRLM"
   - Font: Bold, large (60-80px)
   - Color: White or primary blue (#0ea5e9)

3. **Subtitle**
   - Text: "African-First AI Language Model"
   - Font: Medium (30-40px)
   - Color: White or light gray

4. **Tagline (Optional)**
   - Text: "65% More Efficient • Offline-Capable • Built for Africa"
   - Font: Regular (20-24px)
   - Color: Light gray or white with opacity

### Design Style:

- **Background**: Gradient from primary blue (#0ea5e9) to accent yellow (#fbbf24) or dark gradient
- **Style**: Modern, professional, clean
- **Mood**: Innovative, trustworthy, African-focused
- **Colors**: Match website color scheme (primary blue, accent yellow)

## Tools to Create the Image:

### Online Tools:
1. **Canva** (https://www.canva.com/)
   - Search for "Open Graph" templates
   - Customize with your brand colors

2. **Figma** (https://www.figma.com/)
   - Create custom design
   - Export as PNG

3. **OpenGraph.xyz** (https://www.opengraph.xyz/)
   - Quick generator with templates

### Design Software:
- Adobe Photoshop
- Adobe Illustrator
- GIMP (free)
- Sketch

## Quick Template (Canva):

1. Go to Canva.com
2. Create custom size: 1200 x 630px
3. Add gradient background (blue to yellow)
4. Add AISOD logo
5. Add text layers:
   - "Namqula LRLM" (large, bold)
   - "African-First AI Language Model" (medium)
   - "65% More Efficient • Offline-Capable" (small)
6. Export as PNG
7. Save to `public/og-image.png`

## Testing

After creating the image:

1. Test on Facebook: https://developers.facebook.com/tools/debug/
2. Test on Twitter: https://cards-dev.twitter.com/validator
3. Test on LinkedIn: Share a link and preview

## Alternative: Use Next.js OG Image Generation

If you want to generate OG images dynamically, consider using:
- `@vercel/og` package
- Create an API route that generates the image

Example:
```typescript
// app/og-image/route.tsx
import { ImageResponse } from '@vercel/og'

export async function GET() {
  return new ImageResponse(
    (
      <div style={{...}}>
        {/* Your OG image content */}
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
```

Then update `app/layout.tsx` to use `/og-image` as the OG image URL.
