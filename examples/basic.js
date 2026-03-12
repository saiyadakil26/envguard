import { EnvGuard } from "../dist/index.js";

const env = EnvGuard.validate({
  PORT: { type: "number", required: true },
});

console.log(env);
