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
        github: 'https://github.com/derekrgreene/osu-cs-courses',
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
                
                { label: 'CS 162', slug: 'courses/core/cs162' },
                { label: 'CS 162H', slug: 'courses/core/cs162h' },
                { label: 'CS 225', slug: 'courses/core/cs225' },
                { label: 'CS 261', slug: 'courses/core/cs261' },
                { label: 'CS 271', slug: 'courses/core/cs271' },
                { label: 'CS 290', slug: 'courses/core/cs290' },
                { label: 'CS 325', slug: 'courses/core/cs325' },
                { label: 'CS 325H', slug: 'courses/core/cs325h' },
                { label: 'CS 340', slug: 'courses/core/cs340' },
                { label: 'CS 361', slug: 'courses/core/cs361' },
                { label: 'CS 362', slug: 'courses/core/cs362' },
                { label: 'CS 362H', slug: 'courses/core/cs362h' },
                { label: 'CS 374', slug: 'courses/core/cs374' },
                { label: 'CS 391', slug: 'courses/core/cs391' },
                { label: 'CS 391H', slug: 'courses/core/cs391h' },
                { label: 'MTH 231', slug: 'courses/core/mth231' },
                { label: 'ENGR 100', slug: 'courses/core/engr100' },
                { label: 'ENGR 102', slug: 'courses/core/engr102' },
                { label: 'ENGR 103', slug: 'courses/core/engr103' },
              ],
            },
            { label: 'Electives',
              items: [
                { label: 'CS 161: Intro to Programming', slug: 'courses/electives/cs161' },
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