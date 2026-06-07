import express from 'express';
import fs from 'fs';
import path from 'path';

const app = express();
const port = Number(process.env.PORT || 3012);
const root = process.cwd();
const outDir = path.join(root, 'out');
const nextStaticDir = path.join(root, '.next', 'static');
const nextServerAppDir = path.join(root, '.next', 'server', 'app');

app.use('/_next/static', express.static(nextStaticDir, { immutable: true, maxAge: '1y' }));
app.use(express.static(outDir, { redirect: false }));

app.get('*', (req, res, next) => {
  const cleanPath = req.path === '/' ? 'index' : req.path.replace(/^\/|\/$/g, '');
  const candidates = [
    path.join(outDir, `${cleanPath}.html`),
    path.join(nextServerAppDir, `${cleanPath}.html`),
  ];
  const file = candidates.find((candidate) => fs.existsSync(candidate));

  if (file) {
    return res.sendFile(file);
  }

  next();
});

app.use((_req, res) => {
  res.status(404).sendFile(path.join(outDir, '404.html'));
});

app.listen(port, () => {
  console.log(`HKN Auto local: http://localhost:${port}`);
});
