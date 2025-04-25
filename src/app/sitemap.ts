import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://honeyconventschoolsusner.com'
  
  const routes = [
    '',
    '/about',
    '/academics',
    '/admissions',
    '/fees-structure',
    '/gallery',
    '/careers',
    '/contact'
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly' as 'weekly' | 'monthly',
    priority: route === '' ? 1 : route === '/admissions' ? 0.9 : 0.8,
  }))

  return routes
} 