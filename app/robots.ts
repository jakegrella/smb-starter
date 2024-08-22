import type { MetadataRoute } from 'next'
import { companyInfo } from './companyInfo'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `https://${companyInfo.url}/sitemap.xml`,
  }
}