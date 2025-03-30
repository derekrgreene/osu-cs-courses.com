// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'OSU CS Courses',
      description: 'A comprehensive guide to Oregon State University\'s computer science courses',
      social: {
        github: 'https://github.com/derekgreene11/osu-cs-courses',
      },
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Home', slug: '' },
          ],
        },
        {
          label: 'Courses',
          items: [
            { label: 'Overview', slug: 'courses' },
            {
              label: 'Core Courses',
              items: [
                { label: 'CS 161: Intro to Programming', slug: 'courses/cs161' },
                { label: 'CS 162: Intro to CS II', slug: 'courses/cs162' },
                { label: 'CS 261: Data Structures', slug: 'courses/cs261' },
                { label: 'CS 271: Computer Architecture', slug: 'courses/cs271' },
                { label: 'CS 290: Web Development', slug: 'courses/cs290' },
                { label: 'CS 325: Analysis of Algorithms', slug: 'courses/cs325' },
                { label: 'CS 374: Operating Systems I', slug: 'courses/cs374' },
              ],
            },
          ],
        },
        {
          label: 'Planning',
          items: [
            { label: 'Degree Roadmaps', slug: 'roadmaps' },
          ],
        },
        {
          label: 'Resources',
          items: [
            { label: 'Study Materials', slug: 'resources' },
          ],
        },
        {
          label: 'Community',
          items: [
            { label: 'Discussion', slug: 'community' },
          ],
        },
      ],
    }),
  ],
  // Set the site URL for production
  // site: 'https://osu-cs-courses.com',
});