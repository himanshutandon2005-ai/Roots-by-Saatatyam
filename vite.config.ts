import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig, Plugin} from 'vite';

function apiPlugin(): Plugin {
  return {
    name: 'roots-api',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (!req.url?.startsWith('/api/')) return next();

        const parsedUrl = new URL(req.url, 'http://localhost:3000');
        const pathname = parsedUrl.pathname;

        res.setHeader('Content-Type', 'application/json');

        if (pathname === '/api/products' && req.method === 'GET') {
          const category = parsedUrl.searchParams.get('category');
          try {
            const raw = fs.readFileSync(path.resolve(__dirname, 'src/data/products.json'), 'utf8');
            let products = JSON.parse(raw);
            if (category && category !== 'all') {
              products = products.filter((p: any) => p.category === category);
            }
            res.end(JSON.stringify(products));
            return;
          } catch (e) {
            res.statusCode = 500;
            res.end(JSON.stringify({ error: 'Failed to read products' }));
            return;
          }
        }

        if (pathname.startsWith('/api/products/') && req.method === 'GET') {
          const id = pathname.replace('/api/products/', '');
          try {
            const raw = fs.readFileSync(path.resolve(__dirname, 'src/data/products.json'), 'utf8');
            const products = JSON.parse(raw);
            const product = products.find((p: any) => p.id === id || p.slug === id);
            if (product) {
              res.end(JSON.stringify(product));
            } else {
              res.statusCode = 404;
              res.end(JSON.stringify({ error: 'Product not found' }));
            }
            return;
          } catch (e) {
            res.statusCode = 500;
            res.end(JSON.stringify({ error: 'Failed to find product' }));
            return;
          }
        }

        if (pathname === '/api/enquiries' && req.method === 'POST') {
          let body = '';
          req.on('data', chunk => body += chunk);
          req.on('end', () => {
            const id = 'enq_' + Math.random().toString(36).slice(2, 10);
            res.end(JSON.stringify({ id, ok: true }));
          });
          return;
        }

        next();
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), apiPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});

