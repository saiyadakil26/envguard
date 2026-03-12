import type { EnvSchema } from "./types.ts";

export function validateEnv(schema: EnvSchema) {
  const result: Record<string, any> = {};

  for (const key in schema) {
    const rule = schema[key]!;
    let value: any = process.env[key];

    if (!value) {
      if (rule.required) {
        throw new Error(`Missing environment variable: ${key}`);
      }

      if (rule.default !== undefined) {
        value = rule.default;
      }
    }

    if (value) {
      if (rule.type === "number") {
        const num = Number(value);
        if (isNaN(num)) {
          throw new Error(`${key} must be a number`);
        }
        value = num;
      }

      if (rule.type === "boolean") {
        value = value === "true";
      }
    }

    result[key] = value;
  }

  return result;
}
