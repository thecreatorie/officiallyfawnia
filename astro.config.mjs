import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import compress from 'astro-compress';

// IMPORTANT: replace `site` with the production URL during design-theme phase.
// The seo-ai-optimize phase will also populate the `redirects` map from url-map.json.
export default defineConfig({
  site: 'https://www.officiallyfawnia.com',
  trailingSlash: 'never',
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  integrations: [
    sitemap({
      changefreq: 'weekly',
      lastmod: new Date(),
      filter: (page) =>
        !page.includes('/draft/') &&
        !page.includes('/_theme-preview') &&
        !page.endsWith('/thanks'),
    }),
    compress({
      HTML: true,
      CSS: true,
      JavaScript: true,
      Image: false, // Astro handles images already
      SVG: true,
    }),
  ],
  // Populated by seo-ai-optimize from url-map.json
  redirects: {
    '/about-me': '/about',
    '/bikini': '/gallery/bikini',
    '/competition': '/gallery/competition',
    '/dvds': '/videos',
    '/dvds/advanced-polework-fire-online': '/videos/advanced-polework-fire',
    '/dvds/copy-of-pole-work': '/videos/dance-moves-floor-work',
    '/dvds/fawnia-live-on-stage-online': '/videos/fawnia-live-on-stage',
    '/dvds/lap-dancing-entertaining-your-man-online': '/videos/lap-dancing-entertaining-your-man',
    '/dvds/making-fitness-fun-online': '/videos/making-fitness-fun',
    '/dvds/male-exotic-dancing-online': '/videos/male-exotic-dancing',
    '/dvds/pole-work': '/videos/pole-work',
    '/dvds/pole-work-ep2mb': '/videos/male-exotic-dancing',
    '/dvds/pole-work-gxdjl': '/videos/making-fitness-fun',
    '/dvds/pole-work-hd3n5': '/videos/advanced-polework-fire',
    '/dvds/pole-work-lbrwc': '/videos/lap-dancing-entertaining-your-man',
    '/dvds/pole-work-watch-online': '/videos/pole-work',
    '/dvds/pole-work-watch-online-6w36l': '/videos/dance-moves-floor-work',
    '/fashion': '/gallery/fashion',
    '/fitness-1': '/fitness',
    '/new-page': '/fitness/certification',
    '/news-articles': '/blog',
    '/news-articles/2015/12/23/de-stress': '/blog/de-stress',
    '/news-articles/2015/3/29/butt-building-fixing-that-flat-ass': '/blog/butt-building-fixing-that-flat-ass',
    '/news-articles/2015/3/29/food-the-art-of-meal-planning': '/blog/food-the-art-of-meal-planning',
    '/news-articles/2015/3/29/stressed': '/blog/stressed',
    '/news-articles/2015/4/5/cheat-days': '/blog/cheat-days',
    '/news-articles/2015/5/1/the-ectomorph-puzzle': '/blog/the-ectomorph-puzzle',
    '/news-articles/2015/8/22/fawnias-top-fat-loss-tips': '/blog/fawnias-top-fat-loss-tips',
    '/news-articles/2017/3/21/melatonin': '/blog/melatonin',
    '/news-articles/2017/5/23/vegan-life-': '/blog/vegan-life',
    '/news-articles/category/Health+%26+Fitness': '/blog',
    '/news-articles/category/Supplements': '/blog',
    '/news-articles/tag/butt': '/blog',
    '/news-articles/tag/diet': '/blog',
    '/news-articles/tag/fat+loss': '/blog',
    '/news-articles/tag/physique': '/blog',
    '/news-articles/tag/sleep': '/blog',
    '/news-articles/tag/stress': '/blog',
    '/news-articles/tag/vegan': '/blog',
    '/personal-trainer': '/fitness/personal-trainer',
    '/pole-dance': '/gallery/pole-dance',
    '/print-and-tv': '/resume',
    '/published': '/gallery/published',
    '/unique': '/gallery/unique',
    '/welcome-1': '/'
  },
});
