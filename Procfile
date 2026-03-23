compiler: node_modules/.bin/tsc --watch --preserveWatchOutput --noCheck --outDir dist src/index.ts
node: node --watch --watch-preserve-output dist/index.js
nats: docker run -p 4222:4222 -ti nats:2-scratch -js
