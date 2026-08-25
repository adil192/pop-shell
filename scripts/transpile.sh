#!/bin/bash
set -e

rm -rf _build

echo Compiling into target/...
glib-compile-schemas schemas &
for proj in ${PROJECTS}; do
    mkdir -p _build/"${proj}"
    npx tsc --p src/"${proj}"
done
npx tsc
wait
ls target
echo

echo Packing into _build/...
cp -r metadata.json icons schemas ./*.css _build &
shopt -s globstar nullglob
for src in target/**/*.js; do
    dst="${src//target/_build}"
    cp "${src}" "${dst}" &
done
wait
ls _build
echo
