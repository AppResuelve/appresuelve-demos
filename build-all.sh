#!/bin/bash
set -e

ORIGIN=$(pwd)
rm -rf dist
mkdir dist

for demo_dir in demos/*/; do
  name=$(basename "$demo_dir")
  echo "Building $name..."
  cd "$ORIGIN/$demo_dir"
  pnpm build
  cd "$ORIGIN"
  cp -r "$demo_dir/dist" "dist/$name"
  echo "OK: $name"
done

echo "Building landing..."
cd "$ORIGIN"
pnpm build

cp demos.json dist/demos.json

echo ""
echo "All built. Output in dist/"
ls -d dist/*/
