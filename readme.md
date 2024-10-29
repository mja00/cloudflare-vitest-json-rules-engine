# Cloudflare Workers Vitest JSON Rules Engine Bug

---

### Description

When running the test suite in this repo, you will encounter the following error:
```
PS E:\repos\cloudflare-vitest-json-rules-engine-bug> npm run test

> cloudflare-vitest-json-rules-engine-bug@0.0.0 test
> vitest


 DEV  v2.0.5 E:/repos/cloudflare-vitest-json-rules-engine-bug

[vpw:inf] Starting isolated runtimes for vitest.config.mts...
 ❯ test/index.spec.ts (0)

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ Failed Suites 1 ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯

 FAIL  test/index.spec.ts [ test/index.spec.ts ]
TypeError: Cannot use require() to import an ES Module.
 ❯ node_modules/json-rules-engine/dist/almanac.js?mf_vitest_no_cjs_esm_shim:21:21
 ❯ node_modules/json-rules-engine/dist/engine.js?mf_vitest_no_cjs_esm_shim:20:16
 ❯ node_modules/json-rules-engine/dist/json-rules-engine.js?mf_vitest_no_cjs_esm_shim:12:15
 ❯ node_modules/json-rules-engine/dist/index.js?mf_vitest_no_cjs_esm_shim:3:18

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯

 Test Files  1 failed (1)
      Tests  no tests
   Start at  11:29:40
   Duration  1.35s (transform 27ms, setup 0ms, collect 0ms, tests 0ms, environment 0ms, prepare 232ms)

```

### Steps to Reproduce
1. Clone this repo
2. Run `npm install` to install dependencies
3. Run `npm run test` to run the test suite
4. Observe the error message

Even if the engine run is skipped, the error message is still present.