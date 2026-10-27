---

# 11 Conclusion

---

## 11.1 Wrap-up

- The TS type system is a full compile-time programming language — worth the investment
- Start simple: annotate boundaries, lean on inference, narrow at use-sites
- Reach for advanced features (conditional types, mapped types, template literals) only when the real problem demands it
- Read library source code (React, Zod, tRPC) to absorb idiomatic patterns
- Keep strict mode on and tighten settings over time (`noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`)
- "Think in types": model states, actions, and variants explicitly — narrowing does the rest
- Pair TS with runtime validators (Zod, io-ts) for unknown inputs (APIs, forms, env vars)

---

## Runtime validation

Libraries:

[Jack Herrington](https://www.youtube.com/watch?v=rY_XqfSHock)
[Zod](https://github.com/colinhacks/zod)
