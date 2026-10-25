// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // 鼠标悬停/触摸链接时预取目标页面，配合 ClientRouter 让切页几乎即时
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover'
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
