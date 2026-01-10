import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'AISOD LRLM - Namqula',
    short_name: 'AISOD',
    description: 'Namqula: The first sovereign Low Resource and Reasoning Language Model optimized for African languages',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0ea5e9',
    icons: [
      {
        src: '/logo.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}
