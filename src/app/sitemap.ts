import { MetadataRoute } from 'next'
const BASE = 'https://jikka-navi.net'
const DIAGNOSES = ["katsuyo", "baikyaku", "akiya", "sozoku", "dokyo"]
const ROADMAPS = ["katsuyo-baikyaku", "katsuyo-chintai", "katsuyo-kentou", "katsuyo-daikibo", "baikyaku-sell", "baikyaku-rent", "baikyaku-ryoho", "baikyaku-kaitori", "akiya-low", "akiya-chuu", "akiya-kiken", "akiya-bank", "sozoku-ok", "sozoku-chui", "sozoku-kiken", "sozoku-fudosan", "dokyo-nisetai", "dokyo-bubun", "dokyo-futu", "dokyo-kinkyori"]
const CATEGORIES = ["hajimete", "baikyaku-col", "akiya-col", "sozoku-col", "chintai-col", "dokyo-col"]
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const urls: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE}/column`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/recommend`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/about`, lastModified: now, priority: 0.3 },
    { url: `${BASE}/privacy`, lastModified: now, priority: 0.3 },
  ]
  DIAGNOSES.forEach(d => urls.push({ url: `${BASE}/diagnosis/${d}`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 }))
  ROADMAPS.forEach(r => urls.push({ url: `${BASE}/roadmap/${r}`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 }))
  CATEGORIES.forEach(cat => {
    for (let i = 1; i <= 10; i++) {
      urls.push({ url: `${BASE}/column/${cat}/${i}`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 })
    }
  })
  return urls
}
