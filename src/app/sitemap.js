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
      route: '/team',
      priority: 0.8,
      changeFrequency: 'daily',
    },
    {
      route: '/faq',
      priority: 0.7,
      changeFrequency: 'daily',
    },
    {
      route: '/press',
      priority: 0.7,
      changeFrequency: 'daily',
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