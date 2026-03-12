# EnvGuard

Simple and reliable environment variable validation for Node.js.

EnvGuard helps ensure required environment variables exist and are correctly typed before your application starts.

---

## Installation

```bash
npm install envguard
```

---

## Quick Example

```js
import { EnvGuard } from "envguard"

const env = EnvGuard.validate({
  PORT: { type: "number", required: true },
  DATABASE_URL: { type: "string", required: true },
  DEBUG: { type: "boolean", default: false }
})

console.log(env.PORT)
```

---

## Example `.env`

```
PORT=3000
DATABASE_URL=mongodb://localhost:27017
DEBUG=true
```

---

## Supported Types

EnvGuard supports the following types:

- string
- number
- boolean

Example:

```js
EnvGuard.validate({
  PORT: { type: "number" },
  DEBUG: { type: "boolean" }
})
```

---

## Default Values

```js
EnvGuard.validate({
  NODE_ENV: { type: "string", default: "development" }
})
```

---

## Error Handling

If validation fails, EnvGuard throws a descriptive error.

Example:

```
Missing environment variable: DATABASE_URL
```

---

## Why EnvGuard?

Many Node.js applications fail at runtime due to missing environment variables.  
EnvGuard ensures configuration errors are caught early during application startup.

---

## Roadmap

Future features planned:

- enum validation
- CLI support
- `.env.example` generator
- TypeScript schema inference

---

## Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch
3. Submit a pull request

---

## License

MIT
