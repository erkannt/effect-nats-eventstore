.PHONY: dev
dev: node_modules
	node src/index.ts

node_modules: package.json pnpm-lock.yaml
	pnpm install --frozen-lockfile
