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

echo ""
echo "All demos built. Output in dist/"
ls -d dist/*/
