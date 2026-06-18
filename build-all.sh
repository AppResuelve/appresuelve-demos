#!/bin/bash
set -e

ORIGIN=$(pwd)
rm -rf dist
mkdir dist

for demo_dir in demos/*/; do
  name=$(basename "$demo_dir")
  echo "Building $name..."
  cd "$ORIGIN/$demo_dir"
  pnpm install 2>/dev/null
  pnpm build
  cd "$ORIGIN"
  cp -r "$demo_dir/dist" "dist/$name"
  echo "OK: $name"
done

cp demos.json dist/demos.json

node -e "
const fs = require('fs');
const demos = JSON.parse(fs.readFileSync('demos.json', 'utf8'));
const active = demos.filter(d => d.active);
const cards = active.map(d => \`
  <a href='/\${d.slug}' style='display:block;padding:24px;border:1px solid #e2e8f0;border-radius:12px;text-decoration:none;color:inherit;transition:border-color 0.2s'>
    <div style='font-size:14px;color:#06b6d4;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:8px'>\${d.category}</div>
    <div style='font-size:20px;font-weight:700;margin-bottom:4px'>\${d.title}</div>
    <div style='font-size:14px;color:#64748b'>\${d.description}</div>
  </a>
\`).join('\n');

const html = \`<!DOCTYPE html>
<html lang='es'>
<head>
  <meta charset='UTF-8' />
  <meta name='viewport' content='width=device-width, initial-scale=1.0' />
  <title>AppResuelve Demos</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: system-ui, sans-serif; background: #0f172a; color: #f8fafc; min-height: 100vh; padding: 64px 24px; }
    .container { max-width: 800px; margin: 0 auto; }
    h1 { font-size: 32px; font-weight: 800; margin-bottom: 8px; }
    .subtitle { color: #94a3b8; font-size: 16px; margin-bottom: 40px; }
    .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
    a:hover { border-color: #06b6d4 !important; }
    @media (max-width: 640px) { .grid { grid-template-columns: 1fr; } }
  </style>
</head>
<body>
  <div class='container'>
    <h1>Demos</h1>
    <p class='subtitle'>\${active.length} proyectos en vivo</p>
    <div class='grid'>
      \${cards}
    </div>
  </div>
</body>
</html>\`;

fs.writeFileSync('dist/index.html', html);
console.log('Landing generated with ' + active.length + ' demos');
"

echo ""
echo "All demos built. Output in dist/"
ls -d dist/*/
