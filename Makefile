.PHONY: dev
dev: node_modules
	sh start-dev-watch.sh

node_modules: package.json pnpm-lock.yaml
	pnpm install --frozen-lockfile

.PHONY: check
check:
	npx oxlint --type-aware --type-check --report-unused-disable-directives
