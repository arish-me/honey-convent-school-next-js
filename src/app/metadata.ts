import { Metadata } from 'next'

const siteUrl = 'https://honeyconventschoolsusner.com'
const siteName = 'Honey Convent School'

export const sharedMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    siteName,
    locale: 'en_US',
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Honey Convent School',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@honeyconventschool',
    creator: '@honeyconventschool',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const constructMetadata = ({
  title = 'Honey Convent School - Quality Education for All',
  description = 'Honey Convent School offers quality education with a focus on academic excellence, character development, and extracurricular activities.',
  image = '/og-image.jpg',
  noIndex = false,
}: {
  title?: string
  description?: string
  image?: string
  noIndex?: boolean
} = {}): Metadata => {
  return {
    ...sharedMetadata,
    title,
    description,
    openGraph: {
      ...sharedMetadata.openGraph,
      title,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      ...sharedMetadata.twitter,
      title,
      description,
    },
    robots: {
      index: !noIndex,
      follow: true,
      googleBot: {
        index: !noIndex,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
} 