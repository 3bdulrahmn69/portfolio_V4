import { MetadataRoute } from 'next';
import { works, projects } from '@/data/data';

const BASE_URL = 'https://3bdulrahmn.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const allProjects = [...works, ...projects];

  const projectUrls: MetadataRoute.Sitemap = allProjects.map((project) => ({
    url: `${BASE_URL}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.7,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...projectUrls,
  ];
}
