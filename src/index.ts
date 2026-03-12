import dotenv from "dotenv";
import { validateEnv } from "./validator.js";
import type { EnvSchema } from "./types.ts";

dotenv.config();

export class EnvGuard {
  static validate(schema: EnvSchema) {
    return validateEnv(schema);
  }
}
