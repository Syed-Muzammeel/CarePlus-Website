---
name: OpenAPI email format breaks orval/zod codegen
description: Using `format: email` on a string schema in openapi.yaml causes TypeScript codegen errors with this workspace's installed orval/zod versions.
---

In this workspace's `lib/api-spec` orval codegen pipeline, declaring `format: email` on an
OpenAPI string field generates zod code calling a top-level `zod.email(...)` API, which does
not exist on the installed zod version (v3.x). This causes `tsc` build failures (e.g. `Property
'email' does not exist on type ...`) after running `pnpm --filter @workspace/api-spec run codegen`.

**Why:** orval's zod output for `format: email` targets a zod v4-style API surface that isn't
present in the pinned zod v3 dependency.

**How to apply:** For email (or similar format-constrained) fields in `openapi.yaml`, skip
`format: email` and instead add a `pattern` regex, e.g.
`pattern: "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$"`. This generates a `.regex(...)` call in zod v3,
which works correctly and still enforces the validation server-side.
