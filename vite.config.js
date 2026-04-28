import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({ 
    plugins: [tailwindcss(), sveltekit()] ,
    resolve: {
        alias: {
            src: path.resolve('src/'),
        },
    }
});

// Source - https://stackoverflow.com/a/73754976
// Posted by brunnerh, modified by community. See post 'Timeline' for change history
// Retrieved 2026-04-28, License - CC BY-SA 4.0

// ...
