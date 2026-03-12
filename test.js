import { EnvGuard } from "./dist/index.cjs";

const env = EnvGuard.validate({
  PORT: { type: "number", required: true },
  NODE_ENV: { type: "string", default: "development" },
});

console.log(env);
