#!/bin/bash
set -e

echo Compiling into target/...
glib-compile-schemas schemas &
for proj in ${PROJECTS}; do
    npx tsc --p src/"${proj}"
done
npx tsc
sass --no-source-map \
    light.scss:target/light.css \
    dark.scss:target/dark.css \
    highcontrast.scss:target/highcontrast.css
wait
ls target
echo

echo Packing into _build/...
rm -rf _build && mkdir _build
cp -r metadata.json icons schemas target/* _build/
find _build -name "*.tsbuildinfo" -delete
ls _build
echo
