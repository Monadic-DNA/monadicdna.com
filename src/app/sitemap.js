import { promises as fs } from 'fs';
import path from 'path';

export default async function sitemap() {
  // Base URL of website
  const baseUrl = 'https://monadicdna.com';

  // Function to get the last modified date of a file
  const getLastModified = async (route) => {
    try {
      // Convert route to file path (adjust as needed for your project structure)
      let filePath;
      if (route === '') {
        filePath = path.join(process.cwd(), 'src/app/page.jsx');
      } else {
        // Remove leading slash and add page.jsx
        const routePath = route.substring(1);
        filePath = path.join(process.cwd(), `src/app/${routePath}/page.jsx`);
      }

      // Get file stats
      const stats = await fs.stat(filePath);
      return new Date(stats.mtime);
    } catch (error) {
      // If file not found or other error, return current date
      console.warn(`Could not get last modified date for ${route}:`, error.message);
      return new Date();
    }
  };

  // Define all static routes with appropriate priorities and change frequencies
  const routes = [
    {
      route: '',
      priority: 1.0,
      changeFrequency: 'daily',
    },
    {
      route: '/faq',
      priority: 0.8,
      changeFrequency: 'weekly',
    },
    {
      route: '/press',
      priority: 0.7,
      changeFrequency: 'monthly',
    },
    {
      route: '/lightpaper',
      priority: 0.9,
      changeFrequency: 'monthly',
    },
    {
      route: '/guide',
      priority: 0.8,
      changeFrequency: 'monthly',
    },
    {
      route: '/terms',
      priority: 0.5,
      changeFrequency: 'yearly',
    },
    {
      route: '/privacy',
      priority: 0.5,
      changeFrequency: 'yearly',
    },
    {
      route: '/23andwedao',
      priority: 0.9,
      changeFrequency: 'weekly',
    },
  ];

  // Create sitemap entries with actual last modified dates
  const staticRoutes = await Promise.all(
    routes.map(async ({ route, priority, changeFrequency }) => ({
      url: `${baseUrl}${route}`,
      lastModified: await getLastModified(route),
      changeFrequency,
      priority,
    }))
  );

  return staticRoutes;
}
