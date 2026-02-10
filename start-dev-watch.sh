#! /bin/sh

rm -f static/style.css static/style.css.map

node_modules/.bin/tsc --watch --preserveWatchOutput --noCheck --outDir dist src/index.ts &
pid1=$!

node --watch --watch-preserve-output dist/index.js &
pid2=$!

trap "echo 'Caught signal; killing watchers'; kill ${pid1} ${pid2}; exit 1" INT QUIT TERM
wait
